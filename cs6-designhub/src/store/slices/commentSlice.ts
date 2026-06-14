import type { Comment } from '../../types';
import type { StateCreator } from 'zustand';

export interface CommentSlice {
  comments: Comment[];
  addComment: (comment: Comment) => void;
  getCommentsByFile: (fileId: string) => Comment[];
}

export const createCommentSlice: StateCreator<
  CommentSlice
> = (set, get) => ({
  comments: [],
  addComment: (comment) =>
    set((state) => ({
      comments: [...state.comments, comment]
    })),
  getCommentsByFile: (fileId) =>
    get().comments.filter(c => c.fileId === fileId)
});