import { useState, useCallback } from 'react';
import TagList from './TagList';
import TagInput from './TagInput';

export default function TagManager() {
  const [tags, setTags] = useState<string[]>(['react', 'typescript', 'zustand', 'memoization']);
  const [filter, setFilter] = useState('');
  const [unrelated, setUnrelated] = useState(0);

  // memoized — same reference unless setTags changes
  const handleAddTag = useCallback((tag: string) => {
    setTags((prev) => [...prev, tag]);
  }, []);

  return (
    <div style={{ border: '1px solid #ccc', padding: 12, borderRadius: 8, marginBottom: 12 }}>
      <h3>Tag Manager (mini-project)</h3>
      <p style={{ fontSize: 12, color: '#888' }}>
        Click "Unrelated state" — TagList and TagInput should NOT re-render (check console)
      </p>

      <button
        onClick={() => setUnrelated((u) => u + 1)}
        style={{ marginBottom: 12, background: '#fee2e2', border: '1px solid #fca5a5', padding: '4px 12px', borderRadius: 6 }}
      >
        Unrelated state: {unrelated}
      </button>

      <input
        placeholder="Filter tags..."
        onChange={(e) => setFilter(e.target.value)}
        style={{ display: 'block', marginBottom: 8, padding: 6, width: '100%' }}
      />

      <TagList tags={tags} filter={filter} />
      <TagInput onAddTag={handleAddTag} />
    </div>
  );
}