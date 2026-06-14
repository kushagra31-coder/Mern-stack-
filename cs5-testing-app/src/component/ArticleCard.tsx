import React from 'react';
import type { ArticleCardProps } from '../types';

export const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  author,
  onApprove
}) => (
  <div className="article-card">
    <h2>{title}</h2>
    <p>By {author}</p>
    <button onClick={onApprove}>Approve</button>
  </div>
);

export default ArticleCard;