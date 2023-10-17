export enum ReportType {
  Income = 'incomes',
  Expense = 'expenses',
}

interface IReport {
  id?: string;
  source: string;
  amount: number;
  timestamps: {
    created: Date,
    updated: Date,
  };
  type: ReportType.Expense | ReportType.Income;
}

interface IData {
  reports: IReport[];
}

export const data: IData = {
  reports: [
    {
      id: '1',
      source: 'Salary',
      amount: 1000,
      timestamps: {
        created: new Date(),
        updated: new Date(),
      },
      type: ReportType.Income,
    }
  ]
}

