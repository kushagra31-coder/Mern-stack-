import { memo, useMemo } from 'react';

interface TagListProps {
  tags: string[];
  filter: string;
}

const TagList = memo(({ tags, filter }: TagListProps) => {
  console.log('TagList rendered'); // should NOT log on unrelated state changes

  const filtered = useMemo(
    () => tags.filter((t) => t.toLowerCase().includes(filter.toLowerCase())),
    [tags, filter]
  );

  return (
    <div style={{ marginBottom: 8 }}>
      <strong>Tags:</strong>{' '}
      {filtered.length === 0 ? (
        <span style={{ color: '#888' }}>No tags match</span>
      ) : (
       filtered.map((t, index) => (
  <span key={`${t}-${index}`} style={{
            background: '#dbeafe',
            color: '#1e40af',
            padding: '2px 10px',
            borderRadius: 20,
            marginRight: 6,
            fontSize: 13
          }}>
            {t}
          </span>
        ))
      )}
    </div>
  );
});

export default TagList;