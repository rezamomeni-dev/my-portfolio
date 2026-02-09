import { render, screen } from '@testing-library/react';
import Projects from './Projects';
import { expect, test } from 'vitest';

const mockProjects = [
  {
    slug: 'p1',
    title: 'Project 1',
    description: 'Desc 1',
    banner: '/b1.png',
    technologies: ['React'],
    liveLink: 'https://live.com'
  }
];

test('Resume Projects renders items', () => {
  render(<Projects items={mockProjects as any} />);

  expect(screen.getByText('Projects')).toBeDefined();
  expect(screen.getByText('Project 1')).toBeDefined();
  expect(screen.getByText('Desc 1')).toBeDefined();
  expect(screen.getByText('React')).toBeDefined();
  expect(screen.getByText('Live Preview').closest('a')).toHaveAttribute('href', 'https://live.com');
});
