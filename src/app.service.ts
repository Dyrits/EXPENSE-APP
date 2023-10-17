import { Injectable } from "@nestjs/common";

import { ReportType } from "./enums";
import { IReport } from "./interfaces";
import { data } from "./data";

@Injectable()
export class AppService {
  getIncomeReports(): IReport[] {
    return data.reports.filter((report: IReport) => report.type === ReportType.Income);
  }

  getIncomeReport(id: string): IReport {
    const reports = data.reports.filter((report: IReport) => report.type === ReportType.Income);
    return reports.find((report: IReport) => report.id === id);
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

  getExpenseReports() {
    return [];
  }

  getExpenseReport(id: string) {
    return {};
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
