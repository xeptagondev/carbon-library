import { PG_UNIQUE_VIOLATION } from "@drdgvhbh/postgres-error-codes";
import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  Logger,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { InjectRepository } from "@nestjs/typeorm";
import { OrganisationDto } from "../dto/organisation.dto";
import { QueryFailedError, Repository } from "typeorm";
import { Company } from "../entities/company.entity";
import { CompanyRole } from "../enum/company.role.enum";
import { QueryDto } from "../dto/query.dto";
import { DataListResponseDto } from "../dto/data.list.response";
import { BasicResponseDto } from "../dto/basic.response.dto";
import { CompanyState } from "../enum/company.state.enum";
import { HelperService } from "../util/helpers.service";
import { FindOrganisationQueryDto } from "../dto/find.organisation.dto";
import { ProgrammeLedgerService } from "../programme-ledger/programme-ledger.service";
import { OrganisationUpdateDto } from "../dto/organisation.update.dto";
import { DataResponseDto } from "../dto/data.response.dto";
import { ProgrammeTransfer } from "../entities/programme.transfer";
import { TransferStatus } from "../enum/transform.status.enum";
import { User } from "../entities/user.entity";
import { EmailHelperService } from "../email-helper/email-helper.service";
import { Programme } from "../entities/programme.entity";
import { EmailTemplates } from "../email-helper/email.template";
import { SystemActionType } from "../enum/system.action.type";
import { FileHandlerInterface } from "../file-handler/filehandler.interface";
import { CounterType } from "../util/counter.type.enum";
import { CounterService } from "../util/counter.service";
import { FilterEntry } from "../dto/filter.entry";
import { UserService } from "../user/user.service";
import {
  AsyncAction,
  AsyncOperationsInterface,
} from "../async-operations/async-operations.interface";
import { AsyncActionType } from "../enum/async.action.type.enum";
import { LocationInterface } from "../location/location.interface";
import { SYSTEM_TYPE } from "../enum/system.names.enum";

@Injectable()
export class CompanyService {
  constructor(
  @InjectRepository(Company) private companyRepo: Repository<Company>,
    private logger: Logger,
    private configService: ConfigService,
    private helperService: HelperService,
    private programmeLedgerService: ProgrammeLedgerService,
    @Inject(forwardRef(() => EmailHelperService))
    private emailHelperService: EmailHelperService,
    @InjectRepository(ProgrammeTransfer)
    private programmeTransferRepo: Repository<ProgrammeTransfer>,
    private fileHandler: FileHandlerInterface,
    private counterService: CounterService,
    @Inject(forwardRef(() => UserService))
    private userService: UserService,
    private asyncOperationsInterface: AsyncOperationsInterface,
    private locationService: LocationInterface
  ) {}

  async suspend(
    companyId: number,
    user: any,
    remarks: string,
    abilityCondition: string
  ): Promise<any> {
    this.logger.verbose("Suspend company", companyId);
    const company = await this.companyRepo
      .createQueryBuilder()
      .where(
        `"companyId" = '${companyId}' and state = '1' ${
          abilityCondition
            ? " AND (" +
              this.helperService.parseMongoQueryToSQL(abilityCondition) +
              ")"
            : ""
        }`
      )
      .getOne();
    if (!company) {
      throw new HttpException(
        this.helperService.formatReqMessagesString(
          "company.noActiveCompany",
          []
        ),
        HttpStatus.UNAUTHORIZED
      );
    }
    const result = await this.companyRepo
      .update(
        {
          companyId: companyId,
        },
        {
          state: CompanyState.SUSPENDED,
          remarks: remarks,
        }
      )
      .catch((err: any) => {
        this.logger.error(err);
        return err;
      });

    if (result.affected > 0) {
      // TODO: Currently there can be unfreezed credits after company suspend if transactions failed
      if (company.companyRole === CompanyRole.PROGRAMME_DEVELOPER) {
        await this.programmeLedgerService.freezeCompany(
          companyId,
          this.getUserRefWithRemarks(user, `${remarks}#${company.name}`),
          true
        );
        await this.companyTransferCancel(
          companyId,
          `${remarks}#${user.companyId}#${user.id}#${SystemActionType.SUSPEND_AUTO_CANCEL}#${company.name}#${user.companyName}`
        );
        await this.emailHelperService.sendEmail(
          company.email,
          EmailTemplates.PROGRAMME_DEVELOPER_ORG_DEACTIVATION,
          {},
          user.companyId
        );
      } else if (company.companyRole === CompanyRole.CERTIFIER) {
        await this.programmeLedgerService.revokeCompanyCertifications(
          companyId,
          this.getUserRefWithRemarks(
            user,
            `${remarks}#${SystemActionType.SUSPEND_REVOKE}#${company.name}`
          ),
          async (programme: Programme) => {
            const hostAddress = this.configService.get("host");
            await this.emailHelperService.sendEmailToProgrammeOwnerAdmins(
              programme.programmeId,
              EmailTemplates.PROGRAMME_CERTIFICATION_REVOKE_BY_SYSTEM,
              {
                organisationName: company.name,
                programmeName: programme.title,
                credits: programme.creditBalance,
                serialNumber: programme.serialNo,
                pageLink:
                  hostAddress +
                  `/programmeManagement/view/${programme.programmeId}`,
              }
            );
          }
        );

        await this.emailHelperService.sendEmail(
          company.email,
          EmailTemplates.CERTIFIER_ORG_DEACTIVATION,
          {},
          user.companyId
        );
      }
      return new BasicResponseDto(
        HttpStatus.OK,
        this.helperService.formatReqMessagesString(
          "company.suspendCompanySuccess",
          []
        )
      );
    }
    throw new HttpException(
      this.helperService.formatReqMessagesString("company.suspendFailed", []),
      HttpStatus.INTERNAL_SERVER_ERROR
    );
  }

  async activate(
    companyId: number,
    user: User,
    remarks: string,
    abilityCondition: string
  ): Promise<any> {
    this.logger.verbose("revoke company", companyId);
    const company = await this.companyRepo
      .createQueryBuilder()
      .where(
        `"companyId" = '${companyId}' and state = '0' ${
          abilityCondition
            ? " AND (" +
              this.helperService.parseMongoQueryToSQL(abilityCondition) +
              ")"
            : ""
        }`
      )
      .getOne();
    if (!company) {
      throw new HttpException(
        this.helperService.formatReqMessagesString(
          "company.noSuspendedCompany",
          []
        ),
        HttpStatus.UNAUTHORIZED
      );
    }
    const result = await this.companyRepo
      .update(
        {
          companyId: companyId,
        },
        {
          state: CompanyState.ACTIVE,
        }
      )
      .catch((err: any) => {
        this.logger.error(err);
        return err;
      });

    if (result.affected > 0) {
      await this.programmeLedgerService.freezeCompany(
        companyId,
        this.getUserRefWithRemarks(user, `${remarks}#${company.name}`),
        false
      );
      await this.emailHelperService.sendEmail(
        company.email,
        EmailTemplates.ORG_REACTIVATION,
        {},
        user.companyId
      );
      return new BasicResponseDto(
        HttpStatus.OK,
        this.helperService.formatReqMessagesString(
          "company.companyActivationSuccess",
          []
        )
      );
    }
    throw new HttpException(
      this.helperService.formatReqMessagesString(
        "company.companyActivationFailed",
        []
      ),
      HttpStatus.INTERNAL_SERVER_ERROR
    );
  }


  async approve(
    companyId: number,
    abilityCondition: string
  ): Promise<any> {
    this.logger.verbose("approve company", companyId);
    const company = await this.companyRepo
      .createQueryBuilder()
      .where(
        `"companyId" = '${companyId}' and (state ='2' or  state ='3') ${abilityCondition
          ? " AND (" +
          this.helperService.parseMongoQueryToSQL(abilityCondition) +
          ")"
          : ""
        }`
      )
      .getOne();
    if (!company) {
      throw new HttpException(
        this.helperService.formatReqMessagesString(
          "company.noPendingCompany",
          []
        ),
        HttpStatus.UNAUTHORIZED
      );
    }
    const result = await this.companyRepo
      .update(
        {
          companyId: companyId,
        },
        {
          state: CompanyState.ACTIVE,
        }
      )
      .catch((err: any) => {
        this.logger.error(err);
        return err;
      });

    if (result.affected > 0) {
      try {
        const hostAddress = this.configService.get("host");
        const res = await this.userService.approveUser(company);
        const templateData = {
          organisationName: company.name,
          countryName: this.configService.get("systemCountryName"),
          systemName: this.configService.get("systemName"),
          organisationRole:
            company.companyRole === CompanyRole.PROGRAMME_DEVELOPER
              ? "Programme Developer"
              : company.companyRole,
          home: hostAddress,
        };

        const action: AsyncAction = {
          actionType: AsyncActionType.Email,
          actionProps: {
            emailType: EmailTemplates.ORGANISATION_CREATE.id,
            sender: company.email,
            subject: this.helperService.getEmailTemplateMessage(
              EmailTemplates.ORGANISATION_CREATE["subject"],
              templateData,
              true
            ),
            emailBody: this.helperService.getEmailTemplateMessage(
              EmailTemplates.ORGANISATION_CREATE["html"],
              templateData,
              false
            ),
          },
        };
        await this.asyncOperationsInterface.AddAction(action);
      } catch (error) {
        throw new HttpException(
          this.helperService.formatReqMessagesString(
            "company.companyApprovalFailed",
            []
          ),
          HttpStatus.INTERNAL_SERVER_ERROR
        );
      }
      return new BasicResponseDto(
        HttpStatus.OK,
        this.helperService.formatReqMessagesString(
          "company.companyApprovalSuccess",
          []
        )
      );
    }
    throw new HttpException(
      this.helperService.formatReqMessagesString(
        "company.companyApprovalFailed",
        []
      ),
      HttpStatus.INTERNAL_SERVER_ERROR
    );
  }


  async reject(
    companyId: number,
    user: User,
    remarks: string,
    abilityCondition: string
  ): Promise<any> {
    this.logger.verbose("approve company", companyId);
    const company = await this.companyRepo
      .createQueryBuilder()
      .where(
        `"companyId" = '${companyId}' and state = '2' ${abilityCondition
          ? " AND (" +
          this.helperService.parseMongoQueryToSQL(abilityCondition) +
          ")"
          : ""
        }`
      )
      .getOne();
    if (!company) {
      throw new HttpException(
        this.helperService.formatReqMessagesString(
          "company.noPendingCompany",
          []
        ),
        HttpStatus.UNAUTHORIZED
      );
    }
    const result = await this.companyRepo
      .update(
        {
          companyId: companyId,
        },
        {
          state: CompanyState.REJECTED,
        }
      )
      .catch((err: any) => {
        this.logger.error(err);
        return err;
      });

    if (result.affected > 0) {

      const hostAddress = this.configService.get("host");
      const templateData = {
        name: company.name,
        countryName: this.configService.get("systemCountryName"),
        organisationRole:
          company.companyRole === CompanyRole.PROGRAMME_DEVELOPER
            ? "Programme Developer"
            : company.companyRole,
        remarks: remarks,
        systemName: this.configService.get("systemName"),
        home: hostAddress,
      };

      const action: AsyncAction = {
        actionType: AsyncActionType.Email,
        actionProps: {
          emailType: EmailTemplates.ORGANISATION_REGISTRATION_REJECTED.id,
          sender: company.email,
          subject: this.helperService.getEmailTemplateMessage(
            EmailTemplates.ORGANISATION_REGISTRATION_REJECTED["subject"],
            templateData,
            true
          ),
          emailBody: this.helperService.getEmailTemplateMessage(
            EmailTemplates.ORGANISATION_REGISTRATION_REJECTED["html"],
            templateData,
            false
          ),
        },
      };
      await this.asyncOperationsInterface.AddAction(action);

      return new BasicResponseDto(
        HttpStatus.OK,
        this.helperService.formatReqMessagesString(
          "company.companyRejectionSuccess",
          []
        )
      );
    }
    throw new HttpException(
      this.helperService.formatReqMessagesString(
        "company.companyRejectionFailed",
        []
      ),
      HttpStatus.INTERNAL_SERVER_ERROR
    );
  }
  

  async query(query: QueryDto, abilityCondition: string, companyRole: string): Promise<any> {
    let filterWithCompanyStatesIn: number[];

    if (companyRole === CompanyRole.GOVERNMENT) {
      filterWithCompanyStatesIn = [0, 1, 2, 3]
    } else {
      filterWithCompanyStatesIn = [0, 1]
    }

    if (query.filterAnd) {
      query.filterAnd.push({
        key: "state",
        operation: "in",
        value: filterWithCompanyStatesIn,
      });
    } else {
      const filterAnd: FilterEntry[] = [];
      filterAnd.push({
        key: "state",
        operation: "in",
        value: filterWithCompanyStatesIn,
      });
      query.filterAnd = filterAnd;
    }

    const resp = await this.companyRepo
      .createQueryBuilder()
      .where(
        this.helperService.generateWhereSQL(
          query,
          this.helperService.parseMongoQueryToSQL(abilityCondition)
        )
      )
      .orderBy(
        query?.sort?.key && `"${query?.sort?.key}"`,
        query?.sort?.order,
        query?.sort?.nullFirst !== undefined
          ? query?.sort?.nullFirst === true
            ? "NULLS FIRST"
            : "NULLS LAST"
          : undefined
      )
      .offset(query.size * query.page - query.size)
      .limit(query.size)
      .getManyAndCount();

    return new DataListResponseDto(
      resp.length > 0 ? resp[0] : undefined,
      resp.length > 1 ? resp[1] : undefined
    );
  }

  async queryNames(query: QueryDto, abilityCondition: string): Promise<any> {
    const resp = await this.companyRepo
      .createQueryBuilder()
      .select(['"companyId"', '"name"', '"state"', '"taxId"'])
      .where(
        this.helperService.generateWhereSQL(
          query,
          this.helperService.parseMongoQueryToSQL(abilityCondition)
        )
      )
      .orderBy(query?.sort?.key && `"${query?.sort?.key}"`, query?.sort?.order)
      .offset(query.size * query.page - query.size)
      .limit(query.size)
      .getRawMany();
    return new DataListResponseDto(resp, undefined);
  }

  async findByTaxId(taxId: string): Promise<Company | undefined> {
    if (!taxId) {
      return null;
    }
    const companies = await this.companyRepo.find({
      where: {
        taxId: taxId,
      },
    });
    return companies && companies.length > 0 ? companies[0] : undefined;
  }

  async findMinByCountry(countryCode: string): Promise<Company | undefined> {
    const companies = await this.companyRepo.find({
      where: {
        country: countryCode,
        companyRole: CompanyRole.MINISTRY,
      },
    });
    return companies && companies.length > 0 ? companies[0] : undefined;
  }

  async findByCompanyId(companyId: number): Promise<Company | undefined> {
    const companies = await this.companyRepo.find({
      where: {
        companyId: companyId,
      },
    });
    return companies && companies.length > 0 ? companies[0] : undefined;
  }

  async findByCompanyIds(
    req: FindOrganisationQueryDto
  ): Promise<Company[] | undefined> {
    const data: Company[] = [];

    if (!(req.companyIds instanceof Array)) { 
      throw new HttpException("Invalid companyId list", HttpStatus.BAD_REQUEST);
    }
    for (let i = 0; i < req.companyIds.length; i++) {
      const companies = await this.companyRepo.find({
        where: {
          companyId: req.companyIds[i],
        },
      });
      data.push(companies[0]);
    }
    return data && data.length > 0 ? data : undefined;
  }

  async findGovByCountry(countryCode: string): Promise<Company | undefined> {
    const companies = await this.companyRepo.find({
      where: {
        country: countryCode,
        companyRole: CompanyRole.GOVERNMENT,
      },
    });
    return companies && companies.length > 0 ? companies[0] : undefined;
  }

  async create(companyDto: OrganisationDto): Promise<Company | undefined> {
    this.logger.verbose("Company create received", companyDto.email);

    if (!companyDto.companyId) {
      companyDto.companyId = parseInt(
        await this.counterService.incrementCount(CounterType.COMPANY, 3)
      );
    }

    return await this.companyRepo.save(companyDto).catch((err: any) => {
      if (err instanceof QueryFailedError) {
        switch (err.driverError.code) {
          case PG_UNIQUE_VIOLATION:
            throw new HttpException(
              this.helperService.formatReqMessagesString(
                "company.companyTaxIdExist",
                []
              ),
              HttpStatus.BAD_REQUEST
            );
        }
      }
      return err;
    });
  }

  async update(
    companyUpdateDto: OrganisationUpdateDto,
    abilityCondition: string
  ): Promise<DataResponseDto | undefined> {
    const company = await this.companyRepo
      .createQueryBuilder()
      .where(
        `"companyId" = '${companyUpdateDto.companyId}' ${
          abilityCondition
            ? " AND (" +
              this.helperService.parseMongoQueryToSQL(abilityCondition) +
              ")"
            : ""
        }`
      )
      .getOne();
    if (!company) {
      throw new HttpException(
        this.helperService.formatReqMessagesString(
          "company.noActiveCompany",
          []
        ),
        HttpStatus.BAD_REQUEST
      );
    }

    if (companyUpdateDto.logo) {
      const response: any = await this.fileHandler.uploadFile(
        `profile_images/${
          companyUpdateDto.companyId
        }_${new Date().getTime()}.png`,
        companyUpdateDto.logo
      );

      if (response) {
        companyUpdateDto.logo = response;
      } else {
        throw new HttpException(
          this.helperService.formatReqMessagesString(
            "company.companyUpdateFailed",
            []
          ),
          HttpStatus.INTERNAL_SERVER_ERROR
        );
      }
    }

    if(companyUpdateDto.regions){
      companyUpdateDto.geographicalLocationCordintes = await this.locationService
      .getCoordinatesForRegion(companyUpdateDto.regions)
      .then((response: any) => {
        console.log("response from forwardGeoCoding function -> ", response);
        return  [...response];
      });
    }

    const { companyId, nationalSopValue, ...companyUpdateFields } = companyUpdateDto;
    if (!companyUpdateFields.hasOwnProperty("website")) {
      companyUpdateFields["website"] = "";
    }
    const result = await this.companyRepo
      .update(
        {
          companyId: company.companyId,
        },
        this.configService.get('systemType')!==SYSTEM_TYPE.CARBON_REGISTRY?{...companyUpdateFields,nationalSopValue}:{...companyUpdateFields}
      )
      .catch((err: any) => {
        this.logger.error(err);
        return err;
      });

    if (result.affected > 0) {
      return new DataResponseDto(
        HttpStatus.OK,
        await this.findByCompanyId(company.companyId)
      );
    }

    throw new HttpException(
      this.helperService.formatReqMessagesString(
        "company.companyUpdateFailed",
        []
      ),
      HttpStatus.INTERNAL_SERVER_ERROR
    );
  }

  async companyTransferCancel(companyId: number, remark: string) {
    await this.programmeTransferRepo
      .createQueryBuilder()
      .update(ProgrammeTransfer)
      .set({
        status: TransferStatus.CANCELLED,
        txRef: remark,
        txTime: new Date().getTime(),
      })
      .where(
        "(fromCompanyId = :companyId OR toCompanyId = :companyId) AND status = :status",
        {
          companyId: companyId,
          status: TransferStatus.PENDING,
        }
      )
      .execute()
      .catch((err: any) => {
        this.logger.error(err);
        return err;
      });
  }

  private getUserRefWithRemarks = (user: any, remarks: string) => {
    return `${user.companyId}#${user.companyName}#${user.id}#${remarks}`;
  };

  async increaseProgrammeCount(companyId: any) {
    const companyDetails = await this.findByCompanyId(companyId);
    const programmeCount = Number(companyDetails.programmeCount) + 1;

    const response = await this.companyRepo
      .update(
        {
          companyId: parseInt(companyId),
        },
        {
          programmeCount: programmeCount,
        }
      )
      .catch((err: any) => {
        this.logger.error(err);
        return err;
      });

    return response;
  }

  async getSectoralScopeMinistry(sectorId: any) {
    const resp = await this.companyRepo
      .createQueryBuilder()
      .where(`"companyRole" = 'Ministry' AND :sectorId = ANY("sectoralScope")`,
      {
        sectorId: sectorId,
      })
      .getMany();

    return resp;
  }

  async getMinistries() {
    const result = await this.companyRepo
      .createQueryBuilder("company")
      .where("company.companyRole= :companyRole AND company.state= :activeState", {
        companyRole: CompanyRole.MINISTRY,
        activeState: CompanyState.ACTIVE
      })
      .select(["company.name", "company.companyId"])
      .getRawMany();

    return result;
  }

  async checkForCompanyDuplicates(email: any, taxId: any, paymentId: any) {
    const companies = await this.companyRepo.find({
      where: [
        { email: email },
        { taxId: taxId },
        { paymentId: paymentId }
      ]
    });

    return companies && companies.length > 0 ? companies[0] : undefined;
  }

}
