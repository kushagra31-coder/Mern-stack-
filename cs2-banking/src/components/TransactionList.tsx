import React from 'react';
import type { Transaction } from '../type';

interface TransactionListProps {
  transactions: Transaction[];
  onSelect: (id: string) => void;
}

const TransactionList: React.FC<TransactionListProps> = ({
  transactions,
  onSelect
}) => (
  <div className="transaction-list">
    <h2>Transactions</h2>
    <ul>
      {transactions.map(tx => (
        <li
          key={tx.id}
          onClick={() => onSelect(tx.id)}
          style={{ color: tx.type === 'income' ? 'green' : 'red' }}
        >
          {tx.description} - {tx.amount} {tx.currency}
          <span> ({new Date(tx.date).toLocaleDateString()})</span>
        </li>
      ))}
    </ul>
  </div>
);

export default TransactionList;