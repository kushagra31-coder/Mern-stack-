import { ThemeProvider, useTheme } from './context/ThemeContext';
import TaskForm from './components/Taskform';
import TaskList from './components/TaskList';
import NotificationList from './components/NotificationList';
import Profile from './components/Profile';
import './App.css';

const AppContent: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{
      background: theme === 'light' ? '#ffffff' : '#333333',
      color: theme === 'light' ? '#000000' : '#ffffff',
      minHeight: '100vh',
      padding: '20px'
    }}>
      <h1>TaskFlow Project Management</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
      <Profile />
      <TaskForm />
      <TaskList />
      <NotificationList />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
