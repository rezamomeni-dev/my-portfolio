import { render, screen, fireEvent } from '@testing-library/react';
import ProjectTimeline from './ProjectTimeline';
import { expect, test, vi } from 'vitest';

const mockProjects = [
  { slug: 'p1', title: 'Project 1', category: 'Cat 1', startDate: '2021-01', endDate: '2021-06' },
  { slug: 'p2', title: 'Project 2', category: 'Cat 2', startDate: '2021-07', endDate: '2022-01' },
];

test('ProjectTimeline renders and handles clicks', () => {
  // Mock getElementById and scrollTo
  const scrollIntoView = vi.fn();
  window.HTMLElement.prototype.scrollIntoView = scrollIntoView;

  const element = document.createElement('div');
  element.id = 'p2';
  vi.spyOn(document, 'getElementById').mockReturnValue(element);
  vi.spyOn(window, 'scrollTo').mockImplementation(() => {});

  const { rerender } = render(
    <ProjectTimeline projects={mockProjects as any} activeProject="p1" />
  );

  expect(screen.getByText('Career Journey')).toBeDefined();
  expect(screen.getByText('Project 1')).toBeDefined();

  // Test click
  const p2Button = screen.getByText('Project 2').closest('button')!;
  fireEvent.click(p2Button);
  expect(window.scrollTo).toHaveBeenCalled();

  // Test active project change triggers scrollIntoView
  rerender(<ProjectTimeline projects={mockProjects as any} activeProject="p2" />);
  // The ref for active item should trigger useEffect with scrollIntoView
  expect(scrollIntoView).toHaveBeenCalled();
});
