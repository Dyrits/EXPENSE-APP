import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller("/report/incomes")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getIncomesReport() {
    return this.appService.getIncomesReport();
  }
}
