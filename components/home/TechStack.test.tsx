import { render, screen } from '@testing-library/react';
import TechStack from './TechStack';
import { expect, test, vi } from 'vitest';

vi.mock('@/data/resume.json', () => ({
  default: {
    skills: [
      {
        category: 'Frontend',
        items: ['React', 'Next.js']
      }
    ]
  }
}));

vi.mock('@/data/home.json', () => ({
  default: {
    techStack: {
      title: 'My Tech Stack',
      subtitle: 'Tools I use'
    }
  }
}));

test('TechStack renders title and skills', () => {
  render(<TechStack />);

  expect(screen.getByText('My Tech Stack')).toBeDefined();
  // Skills are rendered twice for seamless loop
  const reactSkills = screen.getAllByText('React');
  expect(reactSkills.length).toBeGreaterThanOrEqual(2);
});
