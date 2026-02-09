import { render, screen } from '@testing-library/react';
import ProjectShowcase from './ProjectShowcase';
import { expect, test, vi } from 'vitest';

vi.mock('@/data/projects.json', () => ({
  default: [
    {
      slug: 'project-1',
      title: 'Project One',
      description: 'Description One',
      banner: '/banner1.png',
      technologies: ['React', 'Next.js']
    },
    {
      slug: 'project-2',
      title: 'Project Two',
      description: 'Description Two',
      banner: '/banner2.png',
      technologies: ['Tailwind', 'Framer Motion']
    }
  ]
}));

test('ProjectShowcase renders featured projects', () => {
  render(<ProjectShowcase />);

  expect(screen.getByText('Project One')).toBeDefined();
  expect(screen.getByText('Project Two')).toBeDefined();
  expect(screen.getByText('Description One')).toBeDefined();
  expect(screen.getByText('Description Two')).toBeDefined();
});

test('ProjectShowcase has links to projects', () => {
  render(<ProjectShowcase />);

  const links = screen.getAllByRole('link', { name: /View Case Study/i });
  expect(links.length).toBe(2);
  expect(links[0].getAttribute('href')).toBe('/projects/project-1');
  expect(links[1].getAttribute('href')).toBe('/projects/project-2');
});
