import { useState, useMemo, useCallback, memo } from 'react';
import type { Comment } from '../types';

interface FilterInputProps {
  onFilter: (value: string) => void;
}

const FilterInput = memo(({ onFilter }: FilterInputProps) => {
  console.log('FilterInput rendered'); // should only render once
  return (
    <input
      onChange={(e) => onFilter(e.target.value)}
      placeholder="Filter comments..."
      style={{ padding: 6, marginBottom: 8, width: '100%' }}
    />
  );
});

interface CommentsPanelProps {
  comments: Comment[];
}

const CommentsPanel = ({ comments }: CommentsPanelProps) => {
  const [filter, setFilter] = useState('');

  const filtered = useMemo(
    () => comments.filter((c) => c.text.toLowerCase().includes(filter.toLowerCase())),
    [comments, filter]
  );

  const handleFilter = useCallback((value: string) => setFilter(value), []);

  return (
    <div style={{ border: '1px solid #ccc', padding: 12, borderRadius: 8, marginBottom: 12 }}>
      <h3>Comments Panel (useMemo + useCallback + React.memo)</h3>
      <FilterInput onFilter={handleFilter} />
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filtered.map((c) => (
          <li key={c.id} style={{ padding: '4px 0', borderBottom: '1px solid #eee' }}>
            {c.text}
          </li>
        ))}
      </ul>
      {filtered.length === 0 && <p style={{ color: '#888' }}>No comments match</p>}
    </div>
  );
};

export default CommentsPanel;