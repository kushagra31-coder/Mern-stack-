import useUserStore from '../store/userStore';

const Profile: React.FC = () => {
  const user = useUserStore(state => state.user);
  const setUser = useUserStore(state => state.setUser);
  const clearUser = useUserStore(state => state.clearUser);

  if (!user) return (
    <div>
      <p>Not logged in</p>
      <button onClick={() => setUser({
        id: '1',
        name: 'Kushagra',
        email: 'kushagra@example.com'
      })}>
        Login
      </button>
    </div>
  );

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <button onClick={clearUser}>Logout</button>
    </div>
  );
};

export default Profile;