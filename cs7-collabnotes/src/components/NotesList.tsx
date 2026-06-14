import { useState } from 'react';
import { useNoteStore } from '../store/noteStore';

export default function NotesList() {
  const notes = useNoteStore((s) => s.notes);
  const updateNote = useNoteStore((s) => s.updateNote);
  const deleteNote = useNoteStore((s) => s.deleteNote);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState('');

  const startEdit = (id: string, text: string) => {
    setEditingId(id);
    setEditText(text);
  };

  const saveEdit = (id: string) => {
    updateNote(id, editText);
    setEditingId(null);
  };

  if (notes.length === 0) return <p>No notes yet.</p>;

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {notes.map((note) => (
        <li key={note.id} style={{ marginBottom: 8, display: 'flex', gap: 8, alignItems: 'center' }}>
          {editingId === note.id ? (
            <>
              <input value={editText} onChange={(e) => setEditText(e.target.value)} />
              <button onClick={() => saveEdit(note.id)}>Save</button>
              <button onClick={() => setEditingId(null)}>Cancel</button>
            </>
          ) : (
            <>
              <span>{note.text}</span>
              <button onClick={() => startEdit(note.id, note.text)}>Edit</button>
              <button onClick={() => deleteNote(note.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}