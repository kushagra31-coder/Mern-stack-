import CRUD from './pages/CRUD';
import './App.css';

export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#f9fafb',
      fontFamily: 'sans-serif'
    }}>
      <div style={{
        background: '#1e3a5f',
        color: '#fff',
        padding: '16px 24px'
      }}>
        <h1 style={{ margin: 0, fontSize: 22 }}>
          MongoDB Case Study 2
        </h1>
        <p style={{ margin: '4px 0 0', fontSize: 12, color: '#93c5fd' }}>
          Vinternship · CRUD Operations
        </p>
      </div>

      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <CRUD />
      </div>
    </div>
  );
}