export interface Article {
  id: string;
  title: string;
  author: string;
  content: string;
  approved: boolean;
}

export interface Comment {
  id: string;
  text: string;
  author: string;
}

export interface ArticleCardProps {
  title: string;
  author: string;
  onApprove: () => void;
}

export interface CommentBoxProps {
  onPost: (comment: string) => void;
}