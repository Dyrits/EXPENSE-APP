import { ReportType } from "./enums";

export interface INewReport {
  source: string;
  amount: number;
}

export interface IUpdatedReport {
  id?: string;
  source?: string;
  amount?: number;
  type: ReportType.Income | ReportType.Expense;
}

export interface IReport extends INewReport {
  id: string;
  timestamps: {
    created: Date,
    updated: Date,
  };
  type: ReportType.Expense | ReportType.Income;
}

export interface IIncomeReport extends IReport {
  type: ReportType.Income;
}

export interface IExpenseReport extends IReport {
  type: ReportType.Expense;
}

export interface IData {
  reports: IReport[];
}