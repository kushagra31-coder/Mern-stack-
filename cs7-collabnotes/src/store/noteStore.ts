import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import type { Note, HistoryEntry } from '../types';

interface NoteStore {
  notes: Note[];
  history: HistoryEntry[];
  addNote: (text: string) => void;
  updateNote: (id: string, text: string) => void;
  deleteNote: (id: string) => void;
  addHistoryEntry: (entry: HistoryEntry) => void;
  clearHistory: () => void;
}

export const useNoteStore = create<NoteStore>()(
  devtools(
    immer((set) => ({
      notes: [],
      history: [],
      addNote: (text) =>
        set((state) => {
          const note: Note = {
            id: Date.now().toString(),
            text,
            createdAt: Date.now()
          };
          state.notes.push(note);
          state.history.push({
            noteId: note.id,
            action: 'add',
            timestamp: Date.now()
          });
        }),
      updateNote: (id, text) =>
        set((state) => {
          const note = state.notes.find(n => n.id === id);
          if (note) {
            note.text = text;
            state.history.push({
              noteId: id,
              action: 'update',
              timestamp: Date.now()
            });
          }
        }),
      deleteNote: (id) =>
        set((state) => {
          state.notes = state.notes.filter(n => n.id !== id);
          state.history.push({
            noteId: id,
            action: 'delete',
            timestamp: Date.now()
          });
        }),
      addHistoryEntry: (entry) =>
        set((state) => {
          state.history.push(entry);
        }),
      clearHistory: () =>
        set((state) => {
          state.history = [];
        })
    }))
  )
);

export default useNoteStore;