import React from 'react';
import type { Transaction } from '../type';

interface TransactionFormProps {
  onSubmit: (transaction: Transaction) => void;
}

interface TransactionFormState {
  amount: string;
  currency: 'USD' | 'EUR' | 'GBP';
  description: string;
  type: 'income' | 'expense';
}

class TransactionForm extends React.Component
<TransactionFormProps, TransactionFormState> {
  state: TransactionFormState = {
    amount: '',
    currency: 'USD',
    description: '',
    type: 'income'
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.onSubmit({
      id: Date.now().toString(),
      amount: parseFloat(this.state.amount),
      currency: this.state.currency,
      description: this.state.description,
      type: this.state.type,
      date: new Date()
    });
    this.setState({
      amount: '',
      description: '',
      currency: 'USD',
      type: 'income'
    });
  };

  render() {
    return (
      <div className="transaction-form">
        <h2>Add Transaction</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            placeholder="Amount"
            value={this.state.amount}
            onChange={e => this.setState({ amount: e.target.value })}
          />
          <input
            type="text"
            placeholder="Description"
            value={this.state.description}
            onChange={e => this.setState({ description: e.target.value })}
          />
          <select
            value={this.state.currency}
            onChange={e => this.setState({
              currency: e.target.value as 'USD' | 'EUR' | 'GBP'
            })}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
          <select
            value={this.state.type}
            onChange={e => this.setState({
              type: e.target.value as 'income' | 'expense'
            })}
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default TransactionForm;