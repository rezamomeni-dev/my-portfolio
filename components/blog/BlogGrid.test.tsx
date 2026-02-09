import { render, screen } from '@testing-library/react';
import BlogGrid from './BlogGrid';
import { expect, test } from 'vitest';
import { BlogPost } from '@/types/blog';

const mockPosts: BlogPost[] = [
  {
    title: 'Post 1',
    link: 'https://example.com/1',
    pubDate: '2023-01-01',
    contentSnippet: 'Snippet 1',
    source: 'Source 1',
    category: 'Category 1',
    isoDate: '2023-01-01T00:00:00.000Z'
  },
  {
    title: 'Post 2',
    link: 'https://example.com/2',
    pubDate: '2023-01-02',
    contentSnippet: 'Snippet 2',
    source: 'Source 2',
    category: 'Category 2',
    isoDate: '2023-01-02T00:00:00.000Z'
  }
];

test('BlogGrid renders a list of BlogCards', () => {
  render(<BlogGrid posts={mockPosts} />);

  expect(screen.getByText('Post 1')).toBeDefined();
  expect(screen.getByText('Post 2')).toBeDefined();
});
