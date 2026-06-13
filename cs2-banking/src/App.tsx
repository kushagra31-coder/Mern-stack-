import { useState } from 'react';
import  type { Transaction } from './type';
import TransactionList from './components/TransactionList';
import TransactionForm from './components/TransactionForm';
import BudgetTracker from './components/BudgetTracker';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const handleAdd = (transaction: Transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div className="app">
      <h1>Secure Banking Dashboard</h1>
      <BudgetTracker />
      <TransactionForm onSubmit={handleAdd} />
      <TransactionList
        transactions={transactions}
        onSelect={(id) => console.log('Selected:', id)}
      />
    </div>
  );
}

export default App;