import React, { useState } from 'react';
import type { CommentBoxProps } from '../types';

export const CommentBox: React.FC<CommentBoxProps> = ({ onPost }) => {
  const [input, setInput] = useState<string>('');

  const handlePost = () => {
    if (!input.trim()) return;
    onPost(input);
    setInput('');
  };

  return (
    <div className="comment-box">
      <h3>Add Comment</h3>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Write a comment..."
      />
      <button onClick={handlePost}>Post</button>
    </div>
  );
};

export default CommentBox;