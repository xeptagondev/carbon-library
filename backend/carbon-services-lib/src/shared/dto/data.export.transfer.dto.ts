import { Company } from "../entities/company.entity";
import { ESGType } from "../enum/esg.type";
import { Instrument } from "../enum/instrument.enum";
import { InvestmentLevel } from "../enum/investment.level";
import { InvestmentStatus } from "../enum/investment.status";
import { InvestmentStream } from "../enum/investment.stream";
import { InvestmentType } from "../enum/investment.type";
import { RetireType } from "../enum/retire.type.enum";
import { TransferStatus } from "../enum/transform.status.enum";
import { BasicOrgInfo } from "./basic.organisation.dto";
import { DataExportDto } from "./data.export.dto";

export class DataExportTransferDto extends DataExportDto {
    requestId;
    programmeId;
    initiator;
    initiatorCompanyId;
    toCompanyId;
    toAccount;
    retirementType;
    fromCompanyId;
    creditAmount;
    comment;
    txRef;
    txTime;
    createdTime;
    authTime;
    status;
    isRetirement;
    creditBalance;
    programmeTitle;
    programmeCertifierId;
    serialNo;
    programmeSector;
    programmeSectoralScope;
    certifier;
    sender;
    requester;
    receiver;
    proponentTaxVatId;
    proponentPercentage;
    companyId;
    creditOwnerPercentage;
}