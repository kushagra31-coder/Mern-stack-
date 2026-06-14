import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ArticleCard } from '../component/ArticleCard';

test('renders article title and author', () => {
  render(
    <ArticleCard
      title="Breaking News"
      author="Jane Doe"
      onApprove={() => {}}
    />
  );
  expect(screen.getByText('Breaking News')).toBeInTheDocument();
  expect(screen.getByText('By Jane Doe')).toBeInTheDocument();
});

test('calls onApprove when button clicked', () => {
  const mockApprove = jest.fn();
  render(
    <ArticleCard
      title="Test"
      author="John"
      onApprove={mockApprove}
    />
  );
  fireEvent.click(screen.getByText('Approve'));
  expect(mockApprove).toHaveBeenCalled();
});