import { ReportType } from "./enums";

export interface IReport {
  id?: string;
  source: string;
  amount: number;
  timestamps: {
    created: Date,
      updated: Date,
  };
  type: ReportType.Expense | ReportType.Income;
}

export interface IData {
  reports: IReport[];
}