import { render, screen } from '@testing-library/react';
import ProjectHero from './ProjectHero';
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
  responsibilities: ['Responsibility 1'],
  liveLink: 'https://live.example.com',
  githubLink: 'https://github.com/test/project'
};

test('ProjectHero renders project details and links', () => {
  render(<ProjectHero project={mockProject} />);

  expect(screen.getByRole('heading', { level: 1, name: 'Test Project' })).toBeDefined();
  expect(screen.getByText('Web')).toBeDefined();
  expect(screen.getByText('A test project description')).toBeDefined();
  expect(screen.getByText('Live Demo')).toHaveAttribute('href', 'https://live.example.com');
  expect(screen.getByText('GitHub')).toHaveAttribute('href', 'https://github.com/test/project');
});
