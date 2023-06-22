import { BaseEntity } from "./baseEntity";

export class Programme implements BaseEntity {
  programmeId?: string;

  serialNo?: string;

  title?: string;

  externalId?: string;

  currentStage?: string;

  typeOfMitigation?: string;

  certifierId?: number[];

  companyId?: number[];
}
