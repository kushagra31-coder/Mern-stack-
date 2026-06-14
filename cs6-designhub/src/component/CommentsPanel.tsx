import { useDesignHubStore } from '../store';

interface CommentsPanelProps {
  fileId: string;
}

const CommentsPanel: React.FC<CommentsPanelProps> = ({
  fileId
}) => {
  const comments = useDesignHubStore(s => s.comments);
  const addComment = useDesignHubStore(s => s.addComment);
  const user = useDesignHubStore(s => s.user);

  const filteredComments = comments.filter(
    c => c.fileId === fileId
  );

  const handleAddComment = () => {
    addComment({
      id: Date.now().toString(),
      fileId,
      author: user?.name ?? 'Anonymous',
      text: 'Great design!'
    });
  };

  return (
    <div>
      <h3>Comments</h3>
      {filteredComments.length === 0 && (
        <p>No comments yet!</p>
      )}
      <ul>
        {filteredComments.map(c => (
          <li key={c.id}>
            <strong>{c.author}:</strong> {c.text}
          </li>
        ))}
      </ul>
      <button onClick={handleAddComment}>
        Add Comment
      </button>
    </div>
  );
};

export default CommentsPanel;