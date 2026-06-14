import { useState } from 'react';
import AnalyticsChart from './components/AnalyticsChart';
import VideoOverlay from './components/VideoOverlay';
import CommentsPanel from './components/CommentsPanel';
import TagManager from './components/TagManager';
import type { DataPoint, Comment, Overlay } from './types';

const SAMPLE_DATA: DataPoint[] = [
  { id: '1', value: 120 },
  { id: '2', value: 340 },
  { id: '3', value: 89 },
];

const SAMPLE_COMMENTS: Comment[] = [
  { id: '1', text: 'Great stream quality!' },
  { id: '2', text: 'Love the analytics overlay' },
  { id: '3', text: 'Can we get more data points?' },
  { id: '4', text: 'React memoization is powerful' },
];

const SAMPLE_OVERLAYS: Overlay[] = [
  { id: '1', label: 'HD 1080p' },
  { id: '2', label: 'Live' },
  { id: '3', label: '24fps' },
  { id: '4', label: 'CDN: Active' },
];

export default function App() {
  const [unrelatedCount, setUnrelatedCount] = useState(0);

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: 24, fontFamily: 'sans-serif' }}>
      <h1>CS8 — StreamVision Dashboard</h1>
      <p style={{ color: '#888', fontSize: 13 }}>
        Demonstrates: useMemo, useCallback, React.memo
      </p>

      <div style={{
        background: '#fef9c3',
        border: '1px solid #fde047',
        padding: 10,
        borderRadius: 8,
        marginBottom: 16,
        fontSize: 13
      }}>
        <strong>Test tip:</strong> Open DevTools console. Click the red "Unrelated state" buttons —
        memoized components should NOT log re-renders. Only the counter in App re-renders.
        <br />
        <button
          onClick={() => setUnrelatedCount((c) => c + 1)}
          style={{ marginTop: 8, background: '#fee2e2', border: '1px solid #fca5a5', padding: '4px 12px', borderRadius: 6 }}
        >
          App-level unrelated state: {unrelatedCount}
        </button>
      </div>

      <AnalyticsChart data={SAMPLE_DATA} />
      <VideoOverlay overlays={SAMPLE_OVERLAYS} />
      <CommentsPanel comments={SAMPLE_COMMENTS} />
      <TagManager />
    </div>
  );
}