import { render, screen } from '@testing-library/react';
import Experience from './Experience';
import { expect, test } from 'vitest';

const mockExperience = [
  {
    company: 'Company A',
    role: 'Senior Engineer',
    period: '2020 - Present',
    location: 'Remote',
    description: ['Built awesome things', 'Led a team'],
    technologies: ['React', 'TypeScript']
  }
];

test('Experience renders items', () => {
  render(<Experience items={mockExperience} />);

  expect(screen.getByText('Experience')).toBeDefined();
  expect(screen.getByText('Company A')).toBeDefined();
  expect(screen.getByText('Senior Engineer')).toBeDefined();
  expect(screen.getByText('2020 - Present')).toBeDefined();
  expect(screen.getByText('Built awesome things')).toBeDefined();
  expect(screen.getByText('React')).toBeDefined();
});
