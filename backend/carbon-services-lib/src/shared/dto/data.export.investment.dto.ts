import { ESGType } from "../enum/esg.type";
import { Instrument } from "../enum/instrument.enum";
import { InvestmentLevel } from "../enum/investment.level";
import { InvestmentStatus } from "../enum/investment.status";
import { InvestmentStream } from "../enum/investment.stream";
import { InvestmentType } from "../enum/investment.type";
import { DataExportDto } from "./data.export.dto";

export class DataExportInvestmentDto extends DataExportDto {
    requestId: number;
    programmeId: string;
    programmeTitle: string;
    programmeSector: string;
    amount: number;
    instrument: Instrument[];
    interestRate?: number;
    resultMetric?: string;
    paymentPerMetric?: number;
    comments?: string;
    type: InvestmentType;
    level: InvestmentLevel;
    stream: InvestmentStream;
    esgClassification: ESGType;
    status: InvestmentStatus;
    fromCompanyId: number;
    percentage: number;
    shareFromOwner: number;
    // toCompanyId: number;
    // initiator: number;
    // initiatorCompanyId: number;
    txTime: string;
    createdTime: string;
    txRef: string;
    sender: number;
    requester: number;
    receiver: number;
    proponentTaxVatId: string[];
    proponentPercentage: number[];
    companyId: string[];
    creditOwnerPercentage: number[];
    toGeo: any;
    fromGeo: any;
}