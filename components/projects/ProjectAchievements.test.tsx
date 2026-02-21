import { render, screen } from '@testing-library/react';
import ProjectAchievements from './ProjectAchievements';
import { expect, test } from 'vitest';

const mockAchievements = [
  { title: 'Email marketing', metric: '20%', description: 'Boosted emails' },
  { title: 'Faster turnaround', metric: '2x', description: 'Faster' },
  { title: 'User adoption', metric: '1M', description: 'Growth' },
  { title: 'Scaling', metric: '500%', description: 'Scale' },
  { title: 'Performance boost', metric: '60%', description: 'Performance' },
  { title: 'Transaction volume', metric: '$10M', description: 'Volume' },
  { title: 'Something else', metric: 'High', description: 'Other' },
];

test('ProjectAchievements renders all icon branches and variants', () => {
  const { rerender } = render(<ProjectAchievements achievements={mockAchievements} variant="light" />);
  expect(screen.getByText('Key Achievements')).toBeDefined();
  expect(screen.getByText('Email marketing')).toBeDefined();

  rerender(<ProjectAchievements achievements={mockAchievements} variant="zinc" />);
  expect(screen.getByText('Key Achievements')).toBeDefined();
});

test('ProjectAchievements handles empty achievements', () => {
  const { container } = render(<ProjectAchievements achievements={[]} />);
  expect(container.firstChild).toBeNull();

  const { container: container2 } = render(<ProjectAchievements achievements={null as any} />);
  expect(container2.firstChild).toBeNull();
});
