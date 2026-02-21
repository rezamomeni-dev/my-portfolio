import { render, screen } from '@testing-library/react';
import ProjectDetails from './ProjectDetails';
import { expect, test } from 'vitest';

const mockProject = {
  about: 'About this project',
  responsibilities: ['Responsibility 1', 'Responsibility 2'],
  technologies: ['React', 'Next.js'],
  role: 'Frontend Lead',
  roleDescription: 'Led the frontend team',
  startDate: '2022-01',
  endDate: '2023-01',
  launchedDate: 'Jan 2023'
} as any;

test('ProjectDetails renders all project details and variants', () => {
  const { rerender } = render(<ProjectDetails project={mockProject} variant="zinc" />);

  expect(screen.getByText('About the Project')).toBeDefined();
  expect(screen.getByText('About this project')).toBeDefined();
  expect(screen.getByText('Responsibility 1')).toBeDefined();
  expect(screen.getByText('React')).toBeDefined();
  expect(screen.getByText('Frontend Lead')).toBeDefined();
  expect(screen.getByText('Led the frontend team')).toBeDefined();
  expect(screen.getByText('Jan 2022 – Jan 2023')).toBeDefined();
  expect(screen.getByText('Launched in Jan 2023')).toBeDefined();

  // Test variant
  rerender(<ProjectDetails project={mockProject} variant="light" />);
  expect(screen.getByText('About the Project')).toBeDefined();

  // Test optional fields missing
  const minimalProject = {
    ...mockProject,
    responsibilities: [],
    roleDescription: null,
    launchedDate: null,
  };
  rerender(<ProjectDetails project={minimalProject} />);
  expect(screen.queryByText('Key Responsibilities')).toBeNull();
  expect(screen.queryByText('Led the frontend team')).toBeNull();
  expect(screen.queryByText(/Launched in/)).toBeNull();
});
