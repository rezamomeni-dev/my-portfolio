import { render, screen } from '@testing-library/react';
import ProjectNavigation from './ProjectNavigation';
import { expect, test } from 'vitest';

test('ProjectNavigation renders prev and next links', () => {
  const prev = { slug: 'prev', title: 'Prev Project' };
  const next = { slug: 'next', title: 'Next Project' };

  render(<ProjectNavigation prevProject={prev} nextProject={next} />);

  expect(screen.getByText('Prev Project')).toBeDefined();
  expect(screen.getByText('Next Project')).toBeDefined();
});

test('ProjectNavigation handles null prev or next', () => {
  render(<ProjectNavigation prevProject={null} nextProject={null} />);

  expect(screen.queryByText('Previous Project')).toBeNull();
  expect(screen.queryByText('Next Project')).toBeNull();
});
