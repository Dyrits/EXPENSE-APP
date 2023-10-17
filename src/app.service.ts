import { v4 as uuid } from "uuid";
import { Injectable } from "@nestjs/common";

import { ReportType } from "./enums";
import { INewReport, IReport, IUpdatedReport } from "./interfaces";
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
    const { source, amount } = body;
    const report: IReport = {
      id: uuid(),
      source,
      amount,
      timestamps: {
        created: new Date(),
        updated: new Date(),
      },
      type
    }
    data.reports.push(report);
    return report;
  }

  updateReport(type: ReportType, id: string, body: IUpdatedReport): IReport {
    const report = this.getReport(type, id);
    if (report) {
      report.source = body.source || report.source;
      report.amount = body.amount || report.amount;
      report.timestamps.updated = new Date();
    }
    return report;
  }

  deleteReport(type: ReportType, id: string) {
    const reports = this.getReports(type);
    const index = reports.findIndex((report: IReport) => report.id === id);
    if (~index) {
      reports.splice(index, 1);
      return {};
    }
  }
}
