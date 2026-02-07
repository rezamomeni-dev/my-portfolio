import { render, screen } from '@testing-library/react';
import ProjectCard from './ProjectCard';
import { expect, test } from 'vitest';
import { Project } from '@/types/project';

const mockProject: Project = {
  slug: 'test-project',
  title: 'Test Project',
  category: 'Web',
  description: 'A test project description',
  role: 'Developer',
  startDate: '2023-01',
  endDate: '2023-03',
  banner: '/test.png',
  technologies: ['React', 'TypeScript'],
  gallery: [],
  achievements: [],
  about: 'About test project',
  responsibilities: ['Responsibility 1']
};

test('ProjectCard renders project information', () => {
  render(
    <ProjectCard
      project={mockProject}
      index={0}
      isActive={true}
      onInView={() => {}}
    />
  );

  expect(screen.getByText('Test Project')).toBeDefined();
  expect(screen.getByText('A test project description')).toBeDefined();
});

test('ProjectCard links to project details', () => {
  render(
    <ProjectCard
      project={mockProject}
      index={0}
      isActive={true}
      onInView={() => {}}
    />
  );

  const links = screen.getAllByRole('link');
  expect(links.some(link => link.getAttribute('href') === '/projects/test-project')).toBe(true);
});
