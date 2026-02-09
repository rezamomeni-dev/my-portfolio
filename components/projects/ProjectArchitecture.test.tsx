import { render, screen } from '@testing-library/react';
import ProjectArchitecture from './ProjectArchitecture';
import { expect, test } from 'vitest';

const mockArchitecture = [
  {
    label: 'Frontend',
    value: 'React, Next.js'
  },
  {
    label: 'Backend',
    value: 'Node.js, Express'
  }
];

test('ProjectArchitecture renders architecture correctly', () => {
  render(<ProjectArchitecture architecture={mockArchitecture} />);

  expect(screen.getByText('Technical Architecture')).toBeDefined();
  expect(screen.getByText('Frontend')).toBeDefined();
  expect(screen.getByText('React, Next.js')).toBeDefined();
  expect(screen.getByText('Backend')).toBeDefined();
  expect(screen.getByText('Node.js, Express')).toBeDefined();
});

test('ProjectArchitecture returns null if no architecture provided', () => {
  const { container } = render(<ProjectArchitecture architecture={[]} />);
  expect(container.firstChild).toBeNull();
});
