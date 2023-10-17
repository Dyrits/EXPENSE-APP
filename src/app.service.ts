import { v4 as uuid } from "uuid";
import { Injectable } from "@nestjs/common";

import { ReportType } from "./enums";
import { INewReport, IReport } from "./interfaces";
import { data } from "./data";

@Injectable()
export class AppService {

  getReports(type: ReportType): IReport[] {
    return data.reports.filter((report: IReport) => report.type === type);
  }

  getReport(type: ReportType, id: string): IReport {
    const reports = this.getReports(type);
    return reports.find((report: IReport) => report.id === id);
  }

  createReport(type: ReportType, body: INewReport): IReport {
    const report: IReport = {
      id: uuid(),
      ...body,
      timestamps: {
        created: new Date(),
        updated: new Date(),
      },
      type
    }
    data.reports.push(report);
    return report;
  }

  updateIncomeReport(id: string) {
    return {};
  }

  updateExpenseReport(id: string) {
    return {};
  }

  deleteIncomeReport(id: string) {
    return {};
  }

  deleteExpenseReport(id: string) {
    return {};
  }
}
