import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/', label: 'Dashboard' },
  { to: '/courses', label: 'Courses' },
  { to: '/forum', label: 'Forum' },
  { to: '/lecture/101', label: 'Lecture' },
  { to: '/admin', label: 'Admin' },
];

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav style={{
      display: 'flex',
      gap: 8,
      padding: '12px 24px',
      background: '#1e3a5f',
      flexWrap: 'wrap'
    }}>
      {links.map((l) => (
        <Link
          key={l.to}
          to={l.to}
          style={{
            color: pathname === l.to ? '#facc15' : '#fff',
            textDecoration: 'none',
            padding: '4px 12px',
            borderRadius: 6,
            background: pathname === l.to ? 'rgba(255,255,255,0.1)' : 'transparent',
            fontSize: 14,
            fontWeight: pathname === l.to ? 600 : 400
          }}
        >
          {l.label}
        </Link>
      ))}
    </nav>
  );
}