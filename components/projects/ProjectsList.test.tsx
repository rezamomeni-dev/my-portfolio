import { render, screen } from '@testing-library/react';
import ProjectsList from './ProjectsList';
import { expect, test, vi } from 'vitest';

vi.mock('next/dynamic', () => ({
  default: (fn: any) => {
    const Component = (props: any) => {
      // Very basic mock of dynamic component
      return <div data-testid="dynamic-component">{JSON.stringify(props)}</div>;
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
  }
];

test('ProjectsList renders headline and project info', () => {
  render(<ProjectsList projects={mockProjects as any} />);

  expect(screen.getByText(/Engineering/i)).toBeDefined();
  expect(screen.getByText(/Impact/i)).toBeDefined();
  // Since we mocked dynamic components, they should appear as dynamic-component
  const dynamicComponents = screen.getAllByTestId('dynamic-component');
  expect(dynamicComponents.length).toBeGreaterThan(0);
});
