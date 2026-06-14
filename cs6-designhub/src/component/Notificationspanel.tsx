import { useDesignHubStore } from '../store';

const NotificationsPanel: React.FC = () => {
  const notifications = useDesignHubStore(
    s => s.notifications
  );
  const markAsRead = useDesignHubStore(s => s.markAsRead);
  const clearNotifications = useDesignHubStore(
    s => s.clearNotifications
  );

  const unread = notifications.filter(n => !n.read);

  return (
    <div>
      <h2>Notifications ({unread.length} unread)</h2>
      <button onClick={clearNotifications}>
        Clear All
      </button>
      {notifications.length === 0 && (
        <p>No notifications!</p>
      )}
      <ul>
        {notifications.map(n => (
          <li key={n.id} style={{
            opacity: n.read ? 0.5 : 1,
            fontWeight: n.read ? 'normal' : 'bold'
          }}>
            {n.message}
            {!n.read && (
              <button onClick={() => markAsRead(n.id)}>
                Mark Read
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationsPanel;