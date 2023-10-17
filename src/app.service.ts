import { Injectable } from "@nestjs/common";

import { ReportType } from "./enums";
import { IReport, IIncomeReport, IExpenseReport } from "./interfaces";
import { data } from "./data";

@Injectable()
export class AppService {
  getIncomeReports(): IIncomeReport[] {
    return data.reports.filter((report: IReport) => report.type === ReportType.Income) as IIncomeReport[];
  }

  getIncomeReport(id: string): IIncomeReport {
    const reports = data.reports.filter((report: IReport) => report.type === ReportType.Income) as IIncomeReport[];
    return reports.find((report: IIncomeReport) => report.id === id);
  }

  createIncomeReport() {
    return {};
  }

  updateIncomeReport(id: string) {
    return {};
  }

  deleteIncomeReport(id: string) {
    return {};
  }

  getExpenseReports(): IExpenseReport[] {
    return data.reports.filter((report: IReport) => report.type === ReportType.Expense) as IExpenseReport[];
  }

  getExpenseReport(id: string): IExpenseReport {
    const reports: IExpenseReport[] = data.reports.filter((report: IReport) => report.type === ReportType.Expense) as IExpenseReport[];
    return reports.find((report: IExpenseReport) => report.id === id);
  }

  createExpenseReport() {
    return {};
  }

  updateExpenseReport(id: string) {
    return {};
  }

  deleteExpenseReport(id: string) {
    return {};
  }
}
