import { useState } from 'react';
import { ArticleApproval } from './component/ArticleApproval';
import { CommentBox } from './component/CommentBox';
import type { Article, Comment } from './types';
import './App.css';

const sampleArticles: Article[] = [
  {
    id: '1',
    title: 'Breaking News: TypeScript 6.0 Released',
    author: 'Jane Doe',
    content: 'TypeScript 6.0 brings amazing new features...',
    approved: false
  },
  {
    id: '2',
    title: 'React 20 Announced',
    author: 'John Smith',
    content: 'The React team has announced version 20...',
    approved: false
  }
];

function App() {
  const [comments, setComments] = useState<Comment[]>([]);

  const handlePost = (text: string) => {
    const newComment: Comment = {
      id: Date.now().toString(),
      text,
      author: 'Anonymous'
    };
    setComments(prev => [...prev, newComment]);
  };

  return (
    <div className="app">
      <h1>NewsFleet Dashboard</h1>

      <section>
        <h2>Articles Pending Approval</h2>
        {sampleArticles.map(article => (
          <ArticleApproval
            key={article.id}
            article={article}
          />
        ))}
      </section>

      <section>
        <h2>Comments</h2>
        <CommentBox onPost={handlePost} />
        <ul>
          {comments.map(comment => (
            <li key={comment.id}>
              <strong>{comment.author}:</strong> {comment.text}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;