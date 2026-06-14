import { useState } from 'react';
import type { WalletUser, Transaction } from '../types';

const INITIAL_USERS: WalletUser[] = [
  { id: 'alice', name: 'Alice', balance: 500 },
  { id: 'bob', name: 'Bob', balance: 200 },
  { id: 'carol', name: 'Carol', balance: 350 },
];

export default function TransactionDemo() {
  const [users, setUsers] = useState<WalletUser[]>(INITIAL_USERS);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [from, setFrom] = useState('alice');
  const [to, setTo] = useState('bob');
  const [amount, setAmount] = useState('');
  const [log, setLog] = useState<{
    msg: string;
    type: 'success' | 'error' | 'info'
  }[]>([]);
  const [simFail, setSimFail] = useState(false);

  const addLog = (
    msg: string,
    type: 'success' | 'error' | 'info' = 'info'
  ) => {
    setLog(prev => [{
      msg: `[${new Date().toLocaleTimeString()}] ${msg}`,
      type
    }, ...prev]);
  };

  const handleTransfer = () => {
    const amt = parseFloat(amount);
    if (!amt || amt <= 0) {
      addLog('Invalid amount', 'error');
      return;
    }
    if (from === to) {
      addLog('Cannot transfer to same user', 'error');
      return;
    }

    const sender = users.find(u => u.id === from);
    const receiver = users.find(u => u.id === to);
    if (!sender || !receiver) return;

    addLog(`session.startTransaction()`, 'info');
    addLog(`Step 1: $inc balance ${sender.name} → -${amt}`, 'info');
    addLog(`Step 2: $inc balance ${receiver.name} → +${amt}`, 'info');
    addLog(`Step 3: insertOne → transactions collection`, 'info');

    if (simFail) {
      addLog(`ERROR: Simulated network failure!`, 'error');
      addLog(`session.abortTransaction() → ALL CHANGES ROLLED BACK`, 'error');
      return;
    }

    if (sender.balance < amt) {
      addLog(`ERROR: Insufficient balance (${sender.name} has ₹${sender.balance})`, 'error');
      addLog(`session.abortTransaction() → ALL CHANGES ROLLED BACK`, 'error');
      return;
    }

    setUsers(prev => prev.map(u => {
      if (u.id === from) return { ...u, balance: u.balance - amt };
      if (u.id === to) return { ...u, balance: u.balance + amt };
      return u;
    }));

    const tx: Transaction = {
      id: Date.now().toString(),
      from: sender.name,
      to: receiver.name,
      amount: amt,
      date: new Date().toLocaleTimeString(),
      status: 'completed'
    };
    setTransactions(prev => [tx, ...prev]);
    addLog(`session.commitTransaction() → SUCCESS`, 'success');
    setAmount('');
  };

  const handleRefund = (txId: string) => {
    const tx = transactions.find(t => t.id === txId);
    if (!tx || tx.status === 'refunded') return;

    const receiver = users.find(u => u.name === tx.to);
    if (!receiver) return;

    if (receiver.balance < tx.amount) {
      addLog(`REFUND FAILED: ${receiver.name} has insufficient balance`, 'error');
      addLog(`session.abortTransaction() → ROLLED BACK`, 'error');
      return;
    }

    addLog(`Refund transaction started`, 'info');
    setUsers(prev => prev.map(u => {
      if (u.name === tx.from) return { ...u, balance: u.balance + tx.amount };
      if (u.name === tx.to) return { ...u, balance: u.balance - tx.amount };
      return u;
    }));
    setTransactions(prev => prev.map(t =>
      t.id === txId ? { ...t, status: 'refunded' } : t
    ));
    addLog(`Refund of ₹${tx.amount} from ${tx.to} → ${tx.from} complete`, 'success');
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>

      {/* LEFT */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>

        {/* Wallets */}
        <div style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: 14 }}>
          <h4 style={{ margin: '0 0 10px' }}>
            Wallets (users collection)
          </h4>
          {users.map(u => (
            <div key={u.id} style={{
              display: 'flex', justifyContent: 'space-between',
              padding: '8px 12px', borderRadius: 6, marginBottom: 6,
              background: '#f9fafb', border: '1px solid #e5e7eb'
            }}>
              <strong>{u.name}</strong>
              <span style={{
                color: u.balance < 100 ? '#dc2626' : '#10b981',
                fontWeight: 600
              }}>
                ₹{u.balance.toFixed(2)}
              </span>
            </div>
          ))}
        </div>

        {/* Transfer form */}
        <div style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: 14 }}>
          <h4 style={{ margin: '0 0 10px', color: '#3b82f6' }}>
            Transfer (ACID Transaction)
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <select value={from} onChange={e => setFrom(e.target.value)}
              style={{ padding: '6px 8px', borderRadius: 4, border: '1px solid #d1d5db' }}>
              {users.map(u => (
                <option key={u.id} value={u.id}>{u.name}</option>
              ))}
            </select>
            <select value={to} onChange={e => setTo(e.target.value)}
              style={{ padding: '6px 8px', borderRadius: 4, border: '1px solid #d1d5db' }}>
              {users.map(u => (
                <option key={u.id} value={u.id}>{u.name}</option>
              ))}
            </select>
            <input
              type="number"
              placeholder="Amount (₹)"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              style={{ padding: '6px 8px', borderRadius: 4, border: '1px solid #d1d5db' }}
            />
            <label style={{
              fontSize: 13, display: 'flex',
              alignItems: 'center', gap: 8
            }}>
              <input
                type="checkbox"
                checked={simFail}
                onChange={e => setSimFail(e.target.checked)}
              />
              Simulate failure (test abort/rollback)
            </label>
            <button onClick={handleTransfer} style={{
              padding: '8px 16px', background: '#3b82f6',
              color: '#fff', border: 'none',
              borderRadius: 6, cursor: 'pointer', fontWeight: 600
            }}>
              Transfer
            </button>
          </div>
        </div>

        {/* ACID recap */}
        <div style={{
          border: '1px solid #e5e7eb',
          borderRadius: 8, padding: 14, fontSize: 12
        }}>
          <h4 style={{ margin: '0 0 8px' }}>ACID Properties</h4>
          <p style={{ margin: '4px 0', color: '#3b82f6' }}>
            <strong>Atomicity</strong> — All or nothing
          </p>
          <p style={{ margin: '4px 0', color: '#10b981' }}>
            <strong>Consistency</strong> — Valid state always
          </p>
          <p style={{ margin: '4px 0', color: '#8b5cf6' }}>
            <strong>Isolation</strong> — No partial reads
          </p>
          <p style={{ margin: '4px 0', color: '#f59e0b' }}>
            <strong>Durability</strong> — Survives crashes
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>

        {/* Transactions */}
        <div style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: 14 }}>
          <h4 style={{ margin: '0 0 10px' }}>
            Transactions Collection
          </h4>
          <div style={{ maxHeight: 220, overflowY: 'auto' }}>
            {transactions.length === 0 ? (
              <p style={{ fontSize: 12, color: '#9ca3af' }}>
                No transactions yet
              </p>
            ) : (
              transactions.map(tx => (
                <div key={tx.id} style={{
                  padding: '8px 10px', borderRadius: 6, marginBottom: 6,
                  background: tx.status === 'refunded' ? '#fef3c7' : '#f0fdf4',
                  border: `1px solid ${tx.status === 'refunded' ? '#fcd34d' : '#86efac'}`,
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                }}>
                  <div style={{ fontSize: 12 }}>
                    <strong>{tx.from} → {tx.to}</strong>
                    <span style={{ color: '#6b7280', marginLeft: 8 }}>
                      ₹{tx.amount} @ {tx.date}
                    </span>
                    <span style={{
                      marginLeft: 8, fontSize: 11,
                      padding: '1px 6px', borderRadius: 20,
                      background: tx.status === 'refunded' ? '#fcd34d' : '#86efac'
                    }}>{tx.status}</span>
                  </div>
                  {tx.status !== 'refunded' && (
                    <button onClick={() => handleRefund(tx.id)} style={{
                      fontSize: 11, padding: '2px 8px',
                      background: '#fff7ed',
                      border: '1px solid #fed7aa',
                      borderRadius: 4, cursor: 'pointer', color: '#ea580c'
                    }}>Refund</button>
                  )}
                </div>
              ))
            )}
          </div>
        </div>

        {/* Session log */}
        <div style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: 14 }}>
          <h4 style={{ margin: '0 0 8px' }}>Session Log</h4>
          <div style={{ maxHeight: 250, overflowY: 'auto' }}>
            {log.length === 0 ? (
              <p style={{ fontSize: 12, color: '#9ca3af' }}>
                No operations yet
              </p>
            ) : (
              log.map((l, i) => (
                <p key={i} style={{
                  fontSize: 11, fontFamily: 'monospace', margin: '2px 0',
                  color: l.type === 'success' ? '#10b981'
                    : l.type === 'error' ? '#dc2626' : '#374151'
                }}>{l.msg}</p>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}