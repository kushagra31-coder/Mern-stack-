import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Spinner from './components/Spinner';
import ErrorBoundary from './components/ErrorBoundary';
import Dashboard from './pages/Dashboard'; // NOT lazy — core page, in main bundle

// Route-based lazy loading
const Courses = lazy(() => import('./pages/Courses'));
const Forum = lazy(() => import('./pages/Forum'));
const VideoLecture = lazy(() => import('./pages/VideoLecture'));
const AdminPanel = lazy(() => import('./pages/AdminPanel'));

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', fontFamily: 'sans-serif', background: '#f9fafb' }}>
        <div style={{ background: '#1e3a5f', color: '#fff', padding: '16px 24px' }}>
          <h1 style={{ margin: 0, fontSize: 22 }}>EduStream</h1>
          <p style={{ margin: '4px 0 0', fontSize: 12, color: '#93c5fd' }}>
            CS9 — Lazy Loading & Code Splitting
          </p>
        </div>

        <Navbar />

        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <ErrorBoundary>
            <Suspense fallback={<Spinner message="Loading page..." />}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/forum" element={<Forum />} />
                <Route path="/lecture/:id" element={<VideoLecture />} />
                <Route path="/admin" element={<AdminPanel />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
    </BrowserRouter>
  );
}