import TransactionDemo from '../components/TransactionDemo';

export default function Transactions() {
  return (
    <div style={{ padding: 24 }}>
      <div style={{ marginBottom: 20 }}>
        <h2 style={{ margin: 0 }}>
          CS-MongoDB 3 — Transactions (ACID)
        </h2>
        <p style={{ color: '#6b7280', fontSize: 13, margin: '4px 0 0' }}>
          FinTrust Wallet · Multi-document atomic transfers
          · Commit · Abort · Refund
        </p>
      </div>

      <div style={{
        background: '#fef3c7',
        border: '1px solid #fcd34d',
        borderRadius: 8, padding: 14,
        marginBottom: 20, fontSize: 13
      }}>
        <strong>How to use:</strong> Transfer money between
        wallets. Check "Simulate failure" to see
        abortTransaction() in action — balances stay
        unchanged. Click Refund to reverse a transaction.
      </div>

      <TransactionDemo />
    </div>
  );
}