import React from 'react';
import { ArticleCard } from './ArticleCard';
import { useApproval } from '../hooks/useApproval';
import type { Article } from '../types';

interface ArticleApprovalProps {
  article: Article;
}

export const ArticleApproval: React.FC<ArticleApprovalProps> = ({
  article
}) => {
  const { approved, approve } = useApproval();

  return (
    <div className="article-approval">
      <ArticleCard
        title={article.title}
        author={article.author}
        onApprove={approve}
      />
      {approved && (
        <span className="approved-badge">Approved!</span>
      )}
    </div>
  );
};

export default ArticleApproval;