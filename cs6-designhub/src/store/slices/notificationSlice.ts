import type { Notification } from '../../types';
import type { StateCreator } from 'zustand';

export interface NotificationSlice {
  notifications: Notification[];
  addNotification: (message: string) => void;
  markAsRead: (id: string) => void;
  clearNotifications: () => void;
}

export const createNotificationSlice: StateCreator<
  NotificationSlice
> = (set) => ({
  notifications: [],
  addNotification: (message) =>
    set((state) => ({
      notifications: [
        ...state.notifications,
        {
          id: Date.now().toString(),
          message,
          read: false
        }
      ]
    })),
  markAsRead: (id) =>
    set((state) => ({
      notifications: state.notifications.map(n =>
        n.id === id ? { ...n, read: true } : n
      )
    })),
  clearNotifications: () => set({ notifications: [] })
});