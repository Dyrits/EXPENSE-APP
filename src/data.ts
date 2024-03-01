import { v4 as uuid } from "uuid";

import { ReportType } from "./enums";
import { IData } from "./interfaces";


export const data: IData = {
  reports: [
    {
      id: uuid(),
      source: "Salary",
      amount: 1000,
      timestamps: {
        created: new Date(),
        updated: new Date()
      },
      type: ReportType.Income
    },
    {
      id: uuid(),
      source: "Rent",
      amount: 500,
      timestamps: {
        created: new Date(),
        updated: new Date()
      },
      type: ReportType.Expense
    }
  ]
};

