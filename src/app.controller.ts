import { Controller, Delete, Get, NotFoundException, Param, Post, Put, Body } from "@nestjs/common";

import { AppService } from "./app.service";
import { INewReport } from "./interfaces";
import { ReportType } from "./enums";

@Controller("/report/:type")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getReports(@Param("type") type: ReportType) {
    return this.appService.getReports(type);
  }

  @Get(":id")
  getReport(@Param("type") type: ReportType, @Param("id") id: string) {
    const report = this.appService.getReport(type, id);
    if (report) { return report; }
    throw new NotFoundException("No report was found with the provided identifier.");
  }

  @Post()
  createReport(@Body() body: INewReport, @Param("type") type: ReportType) {
    return this.appService.createReport(type, body);
  }

  @Put(":id")
  updateReport(@Param("type") type: ReportType, @Param("id") id: string) {
    const updaters = {
      [ReportType.Income]: this.appService.updateIncomeReport,
      [ReportType.Expense]: this.appService.updateExpenseReport,
    }
    return updaters[type](id);
  }

  @Delete(":id")
  deleteReport(@Param("type") type: ReportType, @Param("id") id: string) {
    const deleters = {
      [ReportType.Income]: this.appService.deleteIncomeReport,
      [ReportType.Expense]: this.appService.deleteExpenseReport,
    }
    return deleters[type](id);
  }
}
