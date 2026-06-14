import { lazy, Suspense, useState } from 'react';

// Lazy loaded — heavy chart library only loads when needed
const HeavyChart = lazy(() => import('./HeavyChart'));

export default function Chart() {
  const [show, setShow] = useState(false);

  return (
    <div style={{
      border: '1px solid #e5e7eb',
      borderRadius: 8,
      padding: 16,
      background: '#fff',
      marginBottom: 12
    }}>
      <h3>Chart Component (Lazy Loaded)</h3>
      <p style={{ fontSize: 13, color: '#6b7280' }}>
        chart.js is heavy (~200KB). Lazy loading prevents it from being in the initial bundle.
      </p>
      <button
        onClick={() => setShow(true)}
        style={{
          padding: '6px 16px',
          background: '#7c3aed',
          color: '#fff',
          border: 'none',
          borderRadius: 6,
          cursor: 'pointer'
        }}
      >
        Load Chart
      </button>
      {show && (
        <Suspense fallback={<p style={{ color: '#6b7280', fontSize: 13 }}>Loading chart bundle...</p>}>
          <HeavyChart />
        </Suspense>
      )}
    </div>
  );
}