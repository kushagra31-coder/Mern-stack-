import { useDesignHubStore } from '../store';

const UserProfile: React.FC = () => {
  const user = useDesignHubStore(s => s.user);
  const setUser = useDesignHubStore(s => s.setUser);
  const clearUser = useDesignHubStore(s => s.clearUser);
  const addNotification = useDesignHubStore(
    s => s.addNotification
  );

  const handleLogin = () => {
    setUser({ id: 'u1', name: 'Alex Designer' });
    addNotification('Welcome back, Alex Designer!');
  };

  if (!user) return (
    <div>
      <h2>Not logged in</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );

  return (
    <div>
      <h2>Welcome, {user.name}</h2>
      <button onClick={clearUser}>Logout</button>
    </div>
  );
};

export default UserProfile;