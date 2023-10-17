import { Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller("/report/:type")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getReports(@Param("type") type: string) {
    const getters = {
      "incomes": this.appService.getIncomeReports,
      "expenses": this.appService.getExpenseReports,
    };
    return getters[type]();
  }

  @Get(":id")
  getReport(@Param("type") type: string, @Param("id") id: string) {
    const getters = {
      "incomes": this.appService.getIncomeReport,
      "expenses": this.appService.getExpenseReport,
    }
    return getters[type](id);
  }

  @Post()
  createReport(@Param("type") type: string) {
    const creators = {
      "incomes": this.appService.createIncomeReport,
      "expenses": this.appService.createExpenseReport,
    }
    return creators[type]();
  }


  @Put(":id")
  updateReport(@Param("type") type: string, @Param("id") id: string) {
    const updaters = {
      "incomes": this.appService.updateIncomeReport,
      "expenses": this.appService.updateExpenseReport,
    }
    return updaters[type](id);
  }

  @Delete(":id")
  deleteReport(@Param("type") type: string, @Param("id") id: string) {
    const deleters = {
      "incomes": this.appService.deleteIncomeReport,
      "expenses": this.appService.deleteExpenseReport,
    }
    return deleters[type](id);
  }
}
