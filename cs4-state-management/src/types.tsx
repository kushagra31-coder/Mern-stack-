export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Notification {
  id: string;
  message: string;
  type: 'info' | 'error' | 'success';
  read: boolean;
}