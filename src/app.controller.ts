import { Controller, Delete, Get, NotFoundException, Param, Post, Put } from "@nestjs/common";

import { AppService } from "./app.service";
import { ReportType } from "./enums";

@Controller("/report/:type")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getReports(@Param("type") type: ReportType) {
    const getters = {
      [ReportType.Income]: this.appService.getIncomeReports,
      [ReportType.Expense]: this.appService.getExpenseReports,
    };
    return getters[type]();
  }

  @Get(":id")
  getReport(@Param("type") type: ReportType, @Param("id") id: string) {
    const getters = {
      [ReportType.Income]: this.appService.getIncomeReport,
      [ReportType.Expense]: this.appService.getExpenseReport,
    }
    const report = getters[type](id);
    if (report) { return report; }
    throw new NotFoundException("No report was found with the provided identifier.");
  }

  @Post()
  createReport(@Param("type") type: ReportType) {
    const creators = {
      [ReportType.Income]: this.appService.createIncomeReport,
      [ReportType.Expense]: this.appService.createExpenseReport,
    }
    return creators[type]();
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
