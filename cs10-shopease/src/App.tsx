import { useState } from 'react';
import ProductCard from './components/ProductCard';
import DateDisplay from './components/DateDisplay';
import Chart from './components/Chart';
import type { Product } from './types';

const PRODUCTS: Product[] = [
  { id: '1', name: 'React TypeScript Handbook', price: 499, category: 'Books', createdAt: new Date('2025-01-15') },
  { id: '2', name: 'Mechanical Keyboard', price: 3499, category: 'Electronics', createdAt: new Date('2025-03-22') },
  { id: '3', name: 'Coffee Mug (Dev Edition)', price: 299, category: 'Lifestyle', createdAt: new Date('2025-06-01') },
];

export default function App() {
  const [showBadCode, setShowBadCode] = useState(false);

  return (
    <div style={{ fontFamily: 'sans-serif', background: '#f9fafb', minHeight: '100vh' }}>

      {/* Header */}
      <div style={{ background: '#1e3a5f', color: '#fff', padding: '16px 24px' }}>
        <h1 style={{ margin: 0, fontSize: 22 }}>ShopEase</h1>
        <p style={{ margin: '4px 0 0', fontSize: 12, color: '#93c5fd' }}>
          CS10 — Bundle Analysis & Optimization
        </p>
      </div>

      <div style={{ maxWidth: 800, margin: '0 auto', padding: 24 }}>

        {/* Info banner */}
        <div style={{
          background: '#fef9c3',
          border: '1px solid #fde047',
          borderRadius: 8,
          padding: 16,
          marginBottom: 20,
          fontSize: 13
        }}>
          <strong>How to test bundle analysis:</strong>
          <ol style={{ margin: '8px 0 0', paddingLeft: 20, lineHeight: 2 }}>
            <li>Run <code>npm run build</code> — Vite builds + visualizer opens automatically</li>
            <li>See the treemap — moment.js and lodash will be the biggest blobs</li>
            <li>Compare bad vs good imports below</li>
            <li>Remove moment from badImports.ts, rebuild — watch bundle shrink</li>
          </ol>
        </div>

        {/* Bundle size comparison */}
        <div style={{
          border: '1px solid #e5e7eb',
          borderRadius: 8,
          padding: 16,
          background: '#fff',
          marginBottom: 12
        }}>
          <h3>Import Strategy Comparison</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, fontSize: 13 }}>
            <div style={{ background: '#fef2f2', padding: 12, borderRadius: 6 }}>
              <strong style={{ color: '#dc2626' }}>❌ Bad Imports</strong>
              <pre style={{ fontSize: 11, margin: '8px 0 0', color: '#7f1d1d' }}>
{`import _ from 'lodash'
// +70KB

import moment from 'moment'
// +330KB

Total extra: ~400KB`}
              </pre>
            </div>
            <div style={{ background: '#f0fdf4', padding: 12, borderRadius: 6 }}>
              <strong style={{ color: '#10b981' }}>✓ Good Imports</strong>
              <pre style={{ fontSize: 11, margin: '8px 0 0', color: '#14532d' }}>
{`import debounce from 'lodash/debounce'
// ~2KB

import { format } from 'date-fns'
// ~3KB

Total extra: ~5KB`}
              </pre>
            </div>
          </div>
          <button
            onClick={() => setShowBadCode(!showBadCode)}
            style={{
              marginTop: 12,
              padding: '6px 14px',
              background: '#f3f4f6',
              border: '1px solid #d1d5db',
              borderRadius: 6,
              cursor: 'pointer',
              fontSize: 13
            }}
          >
            {showBadCode ? 'Hide' : 'Show'} bad import example
          </button>
          {showBadCode && (
            <pre style={{
              background: '#1e1e1e',
              color: '#f8f8f2',
              padding: 16,
              borderRadius: 6,
              marginTop: 10,
              fontSize: 12,
              overflowX: 'auto'
            }}>
{`// ❌ BAD — whole lodash (~70KB)
import _ from 'lodash'
_.debounce(fn, 300)

// ✓ GOOD — just debounce (~2KB)  
import debounce from 'lodash/debounce'
debounce(fn, 300)

// ❌ BAD — whole moment (~330KB)
import moment from 'moment'
moment(date).format('DD MMM YYYY')

// ✓ GOOD — just format (~3KB)
import { format } from 'date-fns'
format(date, 'dd MMM yyyy')`}
            </pre>
          )}
        </div>

        <DateDisplay />
        <Chart />

        {/* Products */}
        <h3>Products (using good date-fns import)</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {PRODUCTS.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>

        {/* TypeScript note */}
        <div style={{
          marginTop: 20,
          border: '1px solid #e5e7eb',
          borderRadius: 8,
          padding: 16,
          background: '#fff',
          fontSize: 13
        }}>
          <h3>TypeScript & Bundle Size</h3>
          <ul style={{ lineHeight: 2, color: '#374151' }}>
            <li>✓ Types are <strong>erased at build time</strong> — zero runtime cost</li>
            <li>✓ Interfaces, type aliases → completely removed from output JS</li>
            <li>⚠ Enums → compiled to JS objects → small size increase</li>
            <li>⚠ Decorators → generate extra JS code</li>
            <li>✓ <code>"module": "esnext"</code> in tsconfig enables better tree shaking</li>
          </ul>
        </div>

      </div>
    </div>
  );
}