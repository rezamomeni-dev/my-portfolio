import { render, screen } from '@testing-library/react';
import BlogHeader from './BlogHeader';
import { expect, test } from 'vitest';

test('BlogHeader renders correctly', () => {
  render(<BlogHeader />);

  expect(screen.getAllByText(/Frontend/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/Pulse/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/The latest insights/i)).toBeDefined();
});
