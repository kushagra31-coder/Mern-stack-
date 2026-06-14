export interface User {
  id: string;
  name: string;
}

export interface DesignFile {
  id: string;
  name: string;
  content: string;
}

export interface Comment {
  id: string;
  fileId: string;
  author: string;
  text: string;
}

export interface Notification {
  id: string;
  message: string;
  read: boolean;
}