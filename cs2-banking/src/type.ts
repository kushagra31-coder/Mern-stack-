export interface Transaction {
  id: string;
  amount: number;
  currency: 'USD' | 'EUR' | 'GBP';
  date: Date;
  type: 'income' | 'expense';
  description: string;
}

export interface IncomeEntry {
  id: string;
  amount: number;
  currency: 'USD' | 'EUR' | 'GBP';
  source: string;
  date: Date;
}

export interface ExpenseEntry {
  id: string;
  amount: number;
  currency: 'USD' | 'EUR' | 'GBP';
  category: string;
  date: Date;
}

export interface BudgetState {
  income: IncomeEntry[];
  expenses: ExpenseEntry[];
  balance: number;
}

export type BudgetAction =
  | { type: 'addIncome'; entry: IncomeEntry }
  | { type: 'addExpense'; entry: ExpenseEntry };