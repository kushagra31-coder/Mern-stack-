import { lazy, Suspense, useState } from 'react';
import Spinner from '../components/Spinner';

// Component-based split — Quiz only loads when clicked
const Quiz = lazy(() => import('./Quiz'));

const courses = [
  { id: 1, title: 'React + TypeScript Fundamentals', duration: '4h 30m' },
  { id: 2, title: 'Spring Boot REST APIs', duration: '6h 15m' },
  { id: 3, title: 'Cybersecurity Basics', duration: '3h 45m' },
];

export default function Courses() {
  const [activeQuiz, setActiveQuiz] = useState<number | null>(null);

  return (
    <div style={{ padding: 24 }}>
      <h2>Courses</h2>
      <p style={{ color: '#6b7280', fontSize: 13, marginBottom: 16 }}>
        This entire page was lazy-loaded. Quiz component below loads separately on click.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {courses.map((c) => (
          <div key={c.id} style={{
            border: '1px solid #e5e7eb',
            borderRadius: 8,
            padding: 16,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <strong>{c.title}</strong>
              <p style={{ fontSize: 12, color: '#6b7280', margin: 0 }}>{c.duration}</p>
            </div>
            <button
              onClick={() => setActiveQuiz(activeQuiz === c.id ? null : c.id)}
              style={{
                padding: '6px 14px',
                background: '#7c3aed',
                color: '#fff',
                border: 'none',
                borderRadius: 6,
                cursor: 'pointer'
              }}
            >
              {activeQuiz === c.id ? 'Hide Quiz' : 'Take Quiz'}
            </button>
          </div>
        ))}
      </div>

      {activeQuiz && (
        <Suspense fallback={<Spinner message="Loading quiz..." />}>
          <Quiz courseId={activeQuiz} />
        </Suspense>
      )}
    </div>
  );
}