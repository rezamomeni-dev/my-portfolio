import { render, screen } from '@testing-library/react';
import Skills from './Skills';
import { expect, test } from 'vitest';

const mockCategories = [
  {
    id: '1',
    title: 'Frontend',
    items: ['React', 'Next.js'],
    variant: 'primary' as const
  },
  {
    id: '2',
    title: 'Backend',
    items: ['Node.js'],
    variant: 'zinc' as const
  }
];

test('Skills renders categories and items', () => {
  render(<Skills categories={mockCategories} />);

  expect(screen.getByText('Technical Skills')).toBeDefined();
  expect(screen.getByText('Frontend')).toBeDefined();
  expect(screen.getByText('React')).toBeDefined();
  expect(screen.getByText('Backend')).toBeDefined();
  expect(screen.getByText('Node.js')).toBeDefined();
});
