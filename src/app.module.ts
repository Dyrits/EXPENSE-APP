import { Module } from "@nestjs/common";
import { IncomeReportController, ExpenseReportController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [],
  controllers: [IncomeReportController, ExpenseReportController],
  providers: [AppService]
})
export class AppModule {}
