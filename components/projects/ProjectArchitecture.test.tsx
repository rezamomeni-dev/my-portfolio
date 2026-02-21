import { render, screen } from '@testing-library/react';
import ProjectArchitecture from './ProjectArchitecture';
import { expect, test } from 'vitest';

const mockArchitecture = [
  { label: 'Frontend Framework', value: 'Next.js' },
  { label: 'Backend API', value: 'Node.js' },
  { label: 'Database storage', value: 'PostgreSQL' },
  { label: 'Security Auth', value: 'NextAuth' },
  { label: 'Other stuff', value: 'Custom' },
];

test('ProjectArchitecture renders all icon branches and variants', () => {
  const { rerender } = render(<ProjectArchitecture architecture={mockArchitecture} variant="light" />);
  expect(screen.getByText('Technical Architecture')).toBeDefined();
  expect(screen.getByText('Frontend Framework')).toBeDefined();

  rerender(<ProjectArchitecture architecture={mockArchitecture} variant="zinc" />);
  expect(screen.getByText('Technical Architecture')).toBeDefined();
});

test('ProjectArchitecture handles empty architecture', () => {
  const { container } = render(<ProjectArchitecture architecture={[]} />);
  expect(container.firstChild).toBeNull();

  const { container: container2 } = render(<ProjectArchitecture architecture={null as any} />);
  expect(container2.firstChild).toBeNull();
});
