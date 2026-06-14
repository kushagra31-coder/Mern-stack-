import { useParams } from 'react-router-dom';

export default function VideoLecture() {
  const { id } = useParams<{ id: string }>();

  return (
    <div style={{ padding: 24 }}>
      <h2>Video Lecture #{id}</h2>
      <p style={{ color: '#6b7280', fontSize: 13 }}>
        Route-based lazy load — this chunk only downloads when you visit /lecture/:id
      </p>
      <div style={{
        width: '100%',
        height: 300,
        background: '#111',
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontSize: 32
      }}>
        ▶ Lecture {id}
      </div>
    </div>
  );
}