import {
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Patch,
  Body,
  HttpCode,
  ParseUUIDPipe,
  ParseEnumPipe
} from "@nestjs/common";

import { AppService } from "./app.service";
import { ReportType } from "./enums";
import { NewReportDTO, ReportDTO, UpdatedReportDTO } from "./models/report.dto";

@Controller("/reports/:type")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getReports(@Param("type", new ParseEnumPipe(ReportType)) type: ReportType): ReportDTO[] {
    const reports = this.appService.getReports(type);
    return reports.map((report) => new ReportDTO(report));
  }

  @Get(":id")
  getReport(
    @Param("type", new ParseEnumPipe(ReportType)) type: ReportType,
    @Param("id", ParseUUIDPipe) id: string
  ): ReportDTO {
    const report = this.appService.getReport(type, id);
    if (report) {
      return new ReportDTO(report);
    }
    throw new NotFoundException(`No report was found with the provided identifier (${id}).`);
  }

  @Post()
  createReport(@Body() body: NewReportDTO, @Param("type", new ParseEnumPipe(ReportType)) type: ReportType): ReportDTO {
    return this.appService.createReport(type, body);
  }

  @Patch(":id")
  updateReport(
    @Body() body: UpdatedReportDTO,
    @Param("type", new ParseEnumPipe(ReportType)) type: ReportType,
    @Param("id", ParseUUIDPipe) id: string
  ): ReportDTO {
    const report = this.appService.updateReport(type, id, body);
    if (report) {
      return new ReportDTO(report);
    }
    throw new NotFoundException(`No report was found with the provided identifier (${id}).`);
  }

  @Delete(":id")
  @HttpCode(204)
  deleteReport(
    @Param("type", new ParseEnumPipe(ReportType)) type: ReportType,
    @Param("id", ParseUUIDPipe) id: string
  ): void {
    const result = this.appService.deleteReport(type, id);
    if (!result) {
      throw new NotFoundException(`No report was found with the provided identifier (${id}).`);
    }
  }
}
