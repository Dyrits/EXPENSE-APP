import { Controller, Delete, Get, NotFoundException, Param, Post, Put, Body, HttpCode } from "@nestjs/common";

import { AppService } from "./app.service";
import { INewReport, IUpdatedReport } from "./interfaces";
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
    throw new NotFoundException(`No report was found with the provided identifier (${id}).`);
  }

  @Post()
  createReport(@Body() body: INewReport, @Param("type") type: ReportType) {
    return this.appService.createReport(type, body);
  }

  @Put(":id")
  updateReport(@Body() body: IUpdatedReport, @Param("type") type: ReportType, @Param("id") id: string) {
    const report = this.appService.updateReport(type, id, body);
    if (report) { return report; }
    throw new NotFoundException(`No report was found with the provided identifier (${id}).`);
  }

  @Delete(":id")
  @HttpCode(204)
  deleteReport(@Param("type") type: ReportType, @Param("id") id: string) {
    const result = this.appService.deleteReport(type, id);
    if (!result) {
      throw new NotFoundException(`No report was found with the provided identifier (${id}).`);
    }
  }
}
