import { useEffect, useRef } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function HeavyChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<ChartJS | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    if (chartRef.current) chartRef.current.destroy();

    chartRef.current = new ChartJS(canvasRef.current, {
      type: 'bar',
      data: {
        labels: ['React', 'Vue', 'Angular', 'Svelte', 'Next.js'],
        datasets: [{
          label: 'Bundle Size (KB)',
          data: [42, 33, 143, 7, 85],
          backgroundColor: ['#3b82f6', '#10b981', '#ef4444', '#f59e0b', '#8b5cf6'],
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { position: 'top' } }
      }
    });

    return () => { chartRef.current?.destroy(); };
  }, []);

  return (
    <div style={{ marginTop: 16 }}>
      <canvas ref={canvasRef} />
      <p style={{ fontSize: 12, color: '#6b7280', marginTop: 8 }}>
        Chart.js loaded — check Network tab for the new chunk
      </p>
    </div>
  );
}