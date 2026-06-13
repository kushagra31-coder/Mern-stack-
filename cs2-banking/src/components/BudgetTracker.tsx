import React, { useReducer } from 'react';
import type { BudgetState, BudgetAction, IncomeEntry, ExpenseEntry } from '../type';

const budgetReducer = (
  state: BudgetState,
  action: BudgetAction
): BudgetState => {
  switch (action.type) {
    case 'addIncome':
      return {
        ...state,
        income: [...state.income, action.entry],
        balance: state.balance + action.entry.amount
      };
    case 'addExpense':
      if (state.balance - action.entry.amount < 0) return state;
      return {
        ...state,
        expenses: [...state.expenses, action.entry],
        balance: state.balance - action.entry.amount
      };
    default:
      return state;
  }
};

const BudgetTracker: React.FC = () => {
  const [state, dispatch] = useReducer(budgetReducer, {
    income: [],
    expenses: [],
    balance: 0
  });

  const addIncome = () => {
    const entry: IncomeEntry = {
      id: Date.now().toString(),
      amount: 1000,
      currency: 'USD',
      source: 'Salary',
      date: new Date()
    };
    dispatch({ type: 'addIncome', entry });
  };

  const addExpense = () => {
    const entry: ExpenseEntry = {
      id: Date.now().toString(),
      amount: 200,
      currency: 'USD',
      category: 'Food',
      date: new Date()
    };
    dispatch({ type: 'addExpense', entry });
  };

  return (
    <div className="budget-tracker">
      <h2>Budget Tracker</h2>
      <p>Balance: ${state.balance}</p>
      <p>Total Income: ${state.income.reduce((s, i) => s + i.amount, 0)}</p>
      <p>Total Expenses: ${state.expenses.reduce((s, e) => s + e.amount, 0)}</p>
      <button onClick={addIncome}>Add Income (+$1000)</button>
      <button onClick={addExpense}>Add Expense (-$200)</button>
    </div>
  );
};

export default BudgetTracker;