import { render, screen } from '@testing-library/react';
import ProjectDetails from './ProjectDetails';
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
  about: 'Detailed about information',
  responsibilities: ['Responsibility A', 'Responsibility B']
};

test('ProjectDetails renders project information', () => {
  render(<ProjectDetails project={mockProject} />);

  expect(screen.getByText('About the Project')).toBeDefined();
  expect(screen.getByText('Detailed about information')).toBeDefined();
  expect(screen.getByText('Responsibility A')).toBeDefined();
  expect(screen.getByText('React')).toBeDefined();
  expect(screen.getByText('Developer')).toBeDefined();
});
