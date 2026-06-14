import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CommentBox } from '../component/CommentBox';

test('renders input and post button', () => {
  render(<CommentBox onPost={() => {}} />);
  expect(screen.getByPlaceholderText('Write a comment...')).toBeInTheDocument();
  expect(screen.getByText('Post')).toBeInTheDocument();
});

test('calls onPost with input value', () => {
  const mockPost = jest.fn();
  render(<CommentBox onPost={mockPost} />);
  const input = screen.getByPlaceholderText('Write a comment...');
  fireEvent.change(input, { target: { value: 'Hello World' } });
  fireEvent.click(screen.getByText('Post'));
  expect(mockPost).toHaveBeenCalledWith('Hello World');
});

test('clears input after posting', () => {
  render(<CommentBox onPost={() => {}} />);
  const input = screen.getByPlaceholderText('Write a comment...') as HTMLInputElement;
  fireEvent.change(input, { target: { value: 'Test comment' } });
  fireEvent.click(screen.getByText('Post'));
  expect(input.value).toBe('');
});