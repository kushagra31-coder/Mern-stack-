import { goodFormatDate } from '../utils/goodImports';

import { badFormatDate as momentFormat } from '../utils/badImports';

export default function DateDisplay() {
  const now = new Date();

  return (
    <div style={{
      border: '1px solid #e5e7eb',
      borderRadius: 8,
      padding: 16,
      background: '#fff',
      marginBottom: 12
    }}>
      <h3>Date Formatting Comparison</h3>
      <table style={{ width: '100%', fontSize: 13, borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#f9fafb' }}>
            <th style={{ padding: 8, textAlign: 'left', border: '1px solid #e5e7eb' }}>Approach</th>
            <th style={{ padding: 8, textAlign: 'left', border: '1px solid #e5e7eb' }}>Library</th>
            <th style={{ padding: 8, textAlign: 'left', border: '1px solid #e5e7eb' }}>Result</th>
            <th style={{ padding: 8, textAlign: 'left', border: '1px solid #e5e7eb' }}>Bundle Impact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: 8, border: '1px solid #e5e7eb', color: '#dc2626' }}>❌ Bad</td>
            <td style={{ padding: 8, border: '1px solid #e5e7eb' }}>moment (whole)</td>
            <td style={{ padding: 8, border: '1px solid #e5e7eb' }}>{momentFormat(now)}</td>
            <td style={{ padding: 8, border: '1px solid #e5e7eb', color: '#dc2626' }}>~330KB added</td>
          </tr>
          <tr>
            <td style={{ padding: 8, border: '1px solid #e5e7eb', color: '#10b981' }}>✓ Good</td>
            <td style={{ padding: 8, border: '1px solid #e5e7eb' }}>date-fns (selective)</td>
            <td style={{ padding: 8, border: '1px solid #e5e7eb' }}>{goodFormatDate(now)}</td>
            <td style={{ padding: 8, border: '1px solid #e5e7eb', color: '#10b981' }}>~3KB added</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}