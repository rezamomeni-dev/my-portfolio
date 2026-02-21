import { render, screen } from '@testing-library/react';
import ProjectCard from './ProjectCard';
import { expect, test, vi } from 'vitest';

const mockProject = {
  slug: 'p1',
  title: 'Project 1',
  description: 'Desc 1',
  banner: '/b1.png',
  technologies: ['T1', 'T2', 'T3', 'T4', 'T5'],
  category: 'C1',
  role: 'Role',
  startDate: '2021-01',
  endDate: '2021-06',
  liveLink: 'https://live.com'
};

// Mock framer-motion useInView
vi.mock('framer-motion', async () => {
  const actual = await vi.importActual('framer-motion');
  return {
    ...actual,
    useInView: vi.fn().mockReturnValue(true),
  };
});

test('ProjectCard links to project details and handles inView', () => {
  const onInView = vi.fn();
  const { rerender } = render(
    <ProjectCard project={mockProject as any} index={0} isActive={true} onInView={onInView} />
  );

  expect(onInView).toHaveBeenCalledWith('p1');
  expect(screen.getByText('+1 more')).toBeDefined();

  // Test inactive and no live link
  const minimalProject = { ...mockProject, liveLink: null, technologies: ['T1'] };
  rerender(
    <ProjectCard project={minimalProject as any} index={0} isActive={false} onInView={onInView} />
  );
  expect(screen.queryByText('Live Demo')).toBeNull();
  expect(screen.queryByText('+1 more')).toBeNull();
});
