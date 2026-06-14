import { useState } from 'react';
import { useNoteStore } from '../store/noteStore';

export default function NoteForm() {
  const [text, setText] = useState('');
  const addNote = useNoteStore((s) => s.addNote);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addNote(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New note..."
        style={{ marginRight: 8, padding: 6, width: 250 }}
      />
      <button type="submit">Add Note</button>
    </form>
  );
}