import { render, screen, act } from '@testing-library/react';
import ProjectsList from './ProjectsList';
import { expect, test, vi } from 'vitest';

vi.mock('next/dynamic', () => ({
  default: (fn: any) => {
    // Execute the dynamic import function to cover the line
    fn();
    const Component = (props: any) => {
      if (props.project && props.onInView) {
          return <div data-testid="project-card" onClick={() => props.onInView(props.project.slug)}>{props.project.title}</div>
      }
      return <div data-testid="timeline-component" data-active={props.activeProject}>Timeline</div>;
    };
    return Component;
  },
}));

const mockProjects = [
  {
    slug: 'p1',
    title: 'Project 1',
    description: 'Desc 1',
    banner: '/b1.png',
    technologies: ['T1'],
    category: 'C1'
  },
  {
    slug: 'p2',
    title: 'Project 2',
    description: 'Desc 2',
    banner: '/b2.png',
    technologies: ['T2'],
    category: 'C2'
  }
];

test('ProjectsList handles active project state', () => {
  render(<ProjectsList projects={mockProjects as any} />);

  expect(screen.getByText(/Engineering/i)).toBeDefined();

  const timeline = screen.getByTestId('timeline-component');
  expect(timeline.getAttribute('data-active')).toBe('p1');

  const project2Card = screen.getByText('Project 2');
  act(() => {
      project2Card.click();
  });

  expect(timeline.getAttribute('data-active')).toBe('p2');
});
