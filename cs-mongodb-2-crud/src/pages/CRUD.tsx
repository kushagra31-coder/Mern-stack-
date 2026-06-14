import QueryBuilder from '../components/QueryBuilder';

export default function CRUD() {
  return (
    <div style={{ padding: 24 }}>
      <div style={{ marginBottom: 20 }}>
        <h2 style={{ margin: 0 }}>
          CS-MongoDB 2 — CRUD Operations
        </h2>
        <p style={{ color: '#6b7280', fontSize: 13, margin: '4px 0 0' }}>
          FastBite Menu · insertOne · find · updateOne · deleteOne
        </p>
      </div>

      <div style={{
        background: '#f0fdf4',
        border: '1px solid #86efac',
        borderRadius: 8, padding: 14,
        marginBottom: 20, fontSize: 13
      }}>
        <strong>How to use:</strong> Add dishes with insertOne,
        filter with find (green = match), update price with
        updateOne, delete with deleteOne button.
      </div>

      <QueryBuilder />
    </div>
  );
}