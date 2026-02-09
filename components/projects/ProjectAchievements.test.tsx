import { render, screen } from '@testing-library/react';
import ProjectAchievements from './ProjectAchievements';
import { expect, test } from 'vitest';

const mockAchievements = [
  {
    title: 'Performance Boost',
    metric: '50%',
    description: 'Improved overall system performance.'
  },
  {
    title: 'User Growth',
    metric: '10k',
    description: 'Increased active user base.'
  }
];

test('ProjectAchievements renders achievements correctly', () => {
  render(<ProjectAchievements achievements={mockAchievements} />);

  expect(screen.getByText('Key Achievements')).toBeDefined();
  expect(screen.getByText('Performance Boost')).toBeDefined();
  expect(screen.getByText('50%')).toBeDefined();
  expect(screen.getByText('User Growth')).toBeDefined();
  expect(screen.getByText('10k')).toBeDefined();
});

test('ProjectAchievements returns null if no achievements provided', () => {
  const { container } = render(<ProjectAchievements achievements={[]} />);
  expect(container.firstChild).toBeNull();
});
