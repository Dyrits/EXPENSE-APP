import { Controller, Delete, Get, NotFoundException, Param, Post, Put } from "@nestjs/common";

import { AppService } from "./app.service";
import { IReport, IIncomeReport, IExpenseReport, IReportHandlers } from "./interfaces";

class ReportController<T extends IReport> {
  constructor(
    private readonly handlers: IReportHandlers<T>,
    private readonly appService: AppService,
  ) {}

  @Get()
  getReports() {
    return this.handlers.getReports();
  }

  @Get(":id")
  getReport(@Param("id") id: string) {
    const report = this.handlers.getReport(id);
    if (report) { return report; }
    throw new NotFoundException(`No report with the identifier ${id} could be found.`);
  }

  @Post()
  createReport() {
    return this.handlers.createReport();
  }

  @Put(":id")
  updateReport(@Param("id") id: string) {
    return this.handlers.updateReport(id);
  }

  @Delete(":id")
  deleteReport(@Param("id") id: string) {
    return this.handlers.deleteReport(id);
  }
}

@Controller("/report/incomes")
export class IncomeReportController extends ReportController<IIncomeReport> {
  constructor(appService: AppService) {
    super(
      {
        getReports: appService.getIncomeReports,
        getReport: appService.getIncomeReport,
        createReport: appService.createIncomeReport,
        updateReport: appService.updateIncomeReport,
        deleteReport: appService.deleteIncomeReport,
      },
      appService,
    );
  }
}

@Controller("/report/expenses")
export class ExpenseReportController extends ReportController<IExpenseReport> {
  constructor(appService: AppService) {
    super(
      {
        getReports: appService.getExpenseReports,
        getReport: appService.getExpenseReport,
        createReport: appService.createExpenseReport,
        updateReport: appService.updateExpenseReport,
        deleteReport: appService.deleteExpenseReport,
      },
      appService,
    );
  }
}