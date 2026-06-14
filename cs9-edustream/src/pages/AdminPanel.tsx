export default function AdminPanel() {
  return (
    <div style={{ padding: 24 }}>
      <h2>Admin Panel</h2>
      <p style={{ color: '#6b7280', fontSize: 13 }}>
        Only loaded when /admin is visited — not in initial bundle at all.
        Check Network tab: adminPanel chunk appears only now.
      </p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: 12,
        marginTop: 16
      }}>
        {['Users: 1,240', 'Courses: 48', 'Revenue: ₹2.4L', 'Active: 312'].map((stat) => (
          <div key={stat} style={{
            background: '#1e3a5f',
            color: '#fff',
            padding: 16,
            borderRadius: 8,
            textAlign: 'center',
            fontWeight: 500
          }}>
            {stat}
          </div>
        ))}
      </div>
    </div>
  );
}