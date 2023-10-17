import { ReportType } from "./enums";
import { IData } from "./interfaces";

export const data: IData = {
  reports: [
    {
      id: "1",
      source: "Salary",
      amount: 1000,
      timestamps: {
        created: new Date(),
        updated: new Date()
      },
      type: ReportType.Income
    },
    {
      id: "2",
      source: "Rend",
      amount: 500,
      timestamps: {
        created: new Date(),
        updated: new Date()
      },
      type: ReportType.Expense
    }
  ]
};

