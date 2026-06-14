import UserProfile from './component/UserProfile';
import FileList from './component/fileList';
import CommentsPanel from './component/CommentsPanel';
import NotificationsPanel from './component/Notificationspanel';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>DesignHub - Collaborative Design Platform</h1>
      <UserProfile />
      <hr />
      <NotificationsPanel />
      <hr />
      <FileList />
      <hr />
      <CommentsPanel fileId="file-1" />
    </div>
  );
}

export default App;