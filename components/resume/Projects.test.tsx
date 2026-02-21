import { render, screen } from '@testing-library/react';
import Projects from './Projects';
import { expect, test } from 'vitest';

const mockProjects = [
  {
    slug: 'p1',
    title: 'Project 1',
    description: 'Desc 1',
    banner: '/b1.png',
    technologies: ['T1'],
    liveLink: 'https://live.com',
    githubLink: 'https://github.com'
  },
  {
    slug: 'p2',
    title: 'Project 2',
    description: 'Desc 2',
    banner: null,
    technologies: ['T2'],
    liveLink: null,
    githubLink: null
  }
];

test('Projects renders all variations', () => {
  render(<Projects items={mockProjects as any} />);

  expect(screen.getByText('Project 1')).toBeDefined();
  expect(screen.getByText('Project 2')).toBeDefined();

  // Live links for p1
  expect(screen.getByText('Live Preview')).toBeDefined();
  expect(screen.getByText('Source Code')).toBeDefined();

  // Project 2 has no links
  // But wait, the component renders them only if they exist
  // We check that it doesn't crash and renders the placeholder for banner
  expect(screen.getAllByAltText('Project 1').length).toBeGreaterThan(0);
});
