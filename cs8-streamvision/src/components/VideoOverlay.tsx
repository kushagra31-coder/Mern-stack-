import { memo } from 'react';
import type { Overlay } from '../types';

interface VideoOverlayProps {
  overlays: Overlay[];
}

const VideoOverlay = memo(({ overlays }: VideoOverlayProps) => {
  console.log('VideoOverlay rendered'); // only logs when overlays prop changes

  return (
    <div style={{ border: '1px solid #ccc', padding: 12, borderRadius: 8, marginBottom: 12 }}>
      <h3>Video Overlays (React.memo)</h3>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {overlays.map((o) => (
          <span key={o.id} style={{
            background: '#e0e0e0',
            padding: '4px 10px',
            borderRadius: 20,
            fontSize: 13
          }}>
            {o.label}
          </span>
        ))}
      </div>
      <p style={{ fontSize: 12, color: '#888', marginTop: 8 }}>
        Check console — only re-renders when overlays change
      </p>
    </div>
  );
});

export default VideoOverlay;