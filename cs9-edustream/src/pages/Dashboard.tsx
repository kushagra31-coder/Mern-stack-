import { lazy, Suspense, useState } from 'react';
import Spinner from '../components/Spinner';
import ErrorBoundary from '../components/ErrorBoundary';

// Component-based lazy loading — only loads when Settings button clicked
const ProfileSettings = lazy(() => import('./ProfileSettings'));

export default function Dashboard() {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div style={{ padding: 24 }}>
      <h2>Dashboard</h2>
      <p style={{ color: '#6b7280', fontSize: 13 }}>
        This page loaded instantly — it's in the main bundle.
        ProfileSettings below is lazy-loaded only on button click.
      </p>

      <div style={{
        background: '#f0fdf4',
        border: '1px solid #86efac',
        borderRadius: 8,
        padding: 16,
        marginBottom: 20
      }}>
        <h3>Welcome to EduStream</h3>
        <p>Navigate using the links above — each page is a separate lazy-loaded bundle.</p>
        <p style={{ fontSize: 12, color: '#6b7280' }}>
          Tip: Open DevTools → Network tab → filter by JS — watch chunks load as you navigate.
        </p>
      </div>

      <button
        onClick={() => setShowSettings(true)}
        style={{
          padding: '8px 16px',
          background: '#3b82f6',
          color: '#fff',
          border: 'none',
          borderRadius: 6,
          cursor: 'pointer'
        }}
      >
        Open Settings
      </button>

      {showSettings && (
        <ErrorBoundary>
          <Suspense fallback={<Spinner message="Loading settings..." />}>
            <ProfileSettings onClose={() => setShowSettings(false)} />
          </Suspense>
        </ErrorBoundary>
      )}
    </div>
  );
}