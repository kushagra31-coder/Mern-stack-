import { usePreferencesStore } from './store/preferenceStore';
import NoteForm from './components/NoteForm';
import NotesList from './components/NotesList';
import Preferences from './components/Prefernces';
import SessionInfo from './components/SessionInfo';
import HistoryLog from './components/HistroyLog';
import './App.css';

function App() {
  const { theme, fontSize } = usePreferencesStore();

  return (
    <div style={{
      background: theme === 'dark' ? '#1a1a1a' : '#f9f9f9',
      color: theme === 'dark' ? '#fff' : '#000',
      minHeight: '100vh',
      padding: 20,
      fontSize: fontSize
    }}>
      <h1>CollabNotes</h1>
      <SessionInfo />
      <hr />
      <Preferences />
      <hr />
      <NoteForm />
      <NotesList />
      <hr />
      <HistoryLog />
    </div>
  );
}

export default App;