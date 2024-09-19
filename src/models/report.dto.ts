import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";
import { Exclude, Expose } from "class-transformer";

import { INewReport, IReport, IUpdatedReport } from "../interfaces";
import { ReportType } from "../enums";

class NewReportDTO implements INewReport {
  @IsString()
  @IsNotEmpty()
  source: string;

  @IsNumber()
  @IsPositive()
  amount: number;
}

class UpdatedReportDTO implements IUpdatedReport {
  @IsOptional()
  @IsString()
  source: string;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  amount: number;
}

class ReportDTO implements IReport {
  id: string;
  source: string;
  amount: number;
  type: ReportType;
  @Exclude()
  timestamps: {
    created: Date;
    updated: Date;
  };

  @Expose({ name: "created" })
  created?() {
    return this.timestamps.created;
  }

  constructor(partial: Partial<IReport>) {
    Object.assign(this, partial);
  }
}

export { NewReportDTO, UpdatedReportDTO, ReportDTO };
