import useNotificationStore from '../store/notificationStore';

const NotificationList: React.FC = () => {
  const notifications = useNotificationStore(s => s.notifications);
  const markAsRead = useNotificationStore(s => s.markAsRead);
  const clearNotifications = useNotificationStore(s => s.clearNotifications);
  const addNotification = useNotificationStore(s => s.addNotification);

  const unread = notifications.filter(n => !n.read);

  return (
    <div>
      <h2>Notifications ({unread.length} unread)</h2>
      <button onClick={() => addNotification('New task added!', 'success')}>
        Test Notification
      </button>
      <button onClick={clearNotifications}>
        Clear All
      </button>
      <ul>
        {notifications.map(n => (
          <li key={n.id} style={{
            opacity: n.read ? 0.5 : 1,
            color: n.type === 'error' ? 'red' :
                   n.type === 'success' ? 'green' : 'blue'
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

export default NotificationList;