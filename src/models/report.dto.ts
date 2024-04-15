import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

import { INewReport, IUpdatedReport } from "../interfaces";

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

export { NewReportDTO, UpdatedReportDTO };