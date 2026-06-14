const posts = [
  { id: 1, author: 'Akaza', title: 'How does useReducer compare to Zustand?', replies: 5 },
  { id: 2, author: 'Riya', title: 'Best practices for Spring Boot security?', replies: 3 },
  { id: 3, author: 'Arjun', title: 'CTF writeup — Fox Forters race condition lab', replies: 8 },
];

export default function Forum() {
  return (
    <div style={{ padding: 24 }}>
      <h2>Forum</h2>
      <p style={{ color: '#6b7280', fontSize: 13, marginBottom: 16 }}>
        Lazy-loaded route — only fetched when you navigate here.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {posts.map((p) => (
          <div key={p.id} style={{
            border: '1px solid #e5e7eb',
            borderRadius: 8,
            padding: 14,
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <div>
              <strong style={{ fontSize: 14 }}>{p.title}</strong>
              <p style={{ fontSize: 12, color: '#6b7280', margin: '4px 0 0' }}>by {p.author}</p>
            </div>
            <span style={{ fontSize: 12, color: '#6b7280', alignSelf: 'center' }}>
              {p.replies} replies
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}