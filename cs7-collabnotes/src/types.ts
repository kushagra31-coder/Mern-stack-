export interface Note {
  id: string;
  text: string;
  createdAt: number;
}

export interface HistoryEntry {
  noteId: string;
  action: 'add' | 'update' | 'delete';
  timestamp: number;
}