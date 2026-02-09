import { render, screen } from '@testing-library/react';
import { BlogCard } from './BlogCard';
import { expect, test } from 'vitest';
import { BlogPost } from '@/types/blog';

const mockPost: BlogPost = {
  title: 'Test Blog Post',
  link: 'https://example.com/blog',
  pubDate: '2023-01-01',
  contentSnippet: 'This is a test blog post snippet.',
  source: 'Medium',
  category: 'Frontend',
  isoDate: '2023-01-01T00:00:00.000Z'
};

test('BlogCard renders post information', () => {
  render(<BlogCard post={mockPost} index={0} />);

  expect(screen.getByText('Test Blog Post')).toBeDefined();
  expect(screen.getByText('Medium')).toBeDefined();
  expect(screen.getByText('Frontend')).toBeDefined();
  expect(screen.getByText(/This is a test blog post snippet/)).toBeDefined();
});

test('BlogCard has correct link', () => {
  render(<BlogCard post={mockPost} index={0} />);
  const link = screen.getByRole('link');
  expect(link.getAttribute('href')).toBe('https://example.com/blog');
});
