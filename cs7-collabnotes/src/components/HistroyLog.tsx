import { useNoteStore } from '../store/noteStore';

export default function HistoryLog() {
  const history = useNoteStore((s) => s.history);
  const clearHistory = useNoteStore((s) => s.clearHistory);

  return (
    <div style={{ border: '1px solid #ccc', padding: 12, borderRadius: 8, marginBottom: 16 }}>
      <h3>Audit History Log</h3>
      {history.length === 0 ? (
        <p>No history yet.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0, maxHeight: 150, overflowY: 'auto' }}>
          {[...history].reverse().map((entry, i) => (
            <li key={i} style={{ fontSize: 12, marginBottom: 4 }}>
              [{new Date(entry.timestamp).toLocaleTimeString()}] {entry.action.toUpperCase()} — noteId: {entry.noteId}
            </li>
          ))}
        </ul>
      )}
      <button onClick={clearHistory} style={{ marginTop: 8 }}>Clear History</button>
    </div>
  );
}