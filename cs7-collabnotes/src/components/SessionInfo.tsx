import { useSessionStore } from '../store/sessionStore';

export default function SessionInfo() {
  const { userId, token, role, expiresAt, setSession, clearSession } = useSessionStore();

  const handleLogin = () => {
    setSession('user_123', 'token_abc_xyz', Date.now() + 3600000);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: 12, borderRadius: 8, marginBottom: 16 }}>
      <h3>Session (partial persist)</h3>
      {userId ? (
        <>
          <p>User: {userId} | Role: {role}</p>
          <p>Token: {token}</p>
          <p style={{ fontSize: 12, color: '#888' }}>
            expiresAt in memory only (not in localStorage): {expiresAt}
          </p>
          <button onClick={clearSession}>Logout</button>
        </>
      ) : (
        <button onClick={handleLogin}>Login (mock)</button>
      )}
    </div>
  );
}