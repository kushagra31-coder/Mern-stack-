import { memo, useState } from 'react';

interface TagInputProps {
  onAddTag: (tag: string) => void;
}

const TagInput = memo(({ onAddTag }: TagInputProps) => {
  console.log('TagInput rendered'); // should NOT log on unrelated state changes
  const [value, setValue] = useState('');

  const handleAdd = () => {
    if (!value.trim()) return;
    onAddTag(value.trim());
    setValue('');
  };

  return (
    <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="New tag..."
        style={{ padding: 6 }}
      />
      <button onClick={handleAdd}>Add Tag</button>
    </div>
  );
});

export default TagInput;