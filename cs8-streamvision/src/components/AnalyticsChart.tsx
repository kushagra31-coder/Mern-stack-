import { useMemo } from 'react';
import type { DataPoint } from '../types';

interface AnalyticsChartProps {
  data: DataPoint[];
}

function computeAnalytics(data: DataPoint[]): number {
  console.log('Computing analytics...'); // only logs when data changes
  return data.reduce((acc, item) => acc + item.value, 0);
}

const AnalyticsChart = ({ data }: AnalyticsChartProps) => {
  const analytics = useMemo(() => computeAnalytics(data), [data]);

  return (
    <div style={{ border: '1px solid #ccc', padding: 12, borderRadius: 8, marginBottom: 12 }}>
      <h3>Analytics Chart (useMemo)</h3>
      <p>Total Value: <strong>{analytics}</strong></p>
      <p style={{ fontSize: 12, color: '#888' }}>
        Check console — "Computing analytics..." only logs when data changes, not on unrelated re-renders
      </p>
    </div>
  );
};

export default AnalyticsChart;