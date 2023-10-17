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

export interface IIncomeReport extends IReport {
  type: ReportType.Income;
}

export interface IExpenseReport extends IReport {
  type: ReportType.Expense;
}

export interface IData {
  reports: IReport[];
}

export interface IReportHandlers<T> {
  getReports: () => T[];
  getReport: (id: string) => T;
  createReport: () => any;
  updateReport: (id: string) => any;
  deleteReport: (id: string) => any;
}