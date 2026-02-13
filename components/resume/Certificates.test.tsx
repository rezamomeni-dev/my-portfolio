import { render, screen } from '@testing-library/react';
import Certificates from './Certificates';
import { expect, test, vi } from 'vitest';

// Mock framer-motion since it's used in the component
vi.mock('framer-motion', () => ({
  m: {
    div: ({ children, whileInView, viewport, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

const mockCertificates = [
  {
    title: 'Test Certificate',
    organization: 'Test Org',
    date: 'Jan 2025',
    credentialId: 'ID-123',
    credentialUrl: 'https://test.com',
    skills: ['Skill A', 'Skill B']
  }
];

test('Certificates renders items', () => {
  render(<Certificates items={mockCertificates} />);

  expect(screen.getByText('Certificates')).toBeDefined();
  expect(screen.getByText('Test Certificate')).toBeDefined();
  expect(screen.getByText('Test Org')).toBeDefined();
  expect(screen.getByText('Jan 2025')).toBeDefined();
  expect(screen.getByText('ID: ID-123')).toBeDefined();
  expect(screen.getByText('Show credential')).toBeDefined();
  expect(screen.getByText('Skill A')).toBeDefined();
  expect(screen.getByText('Skill B')).toBeDefined();
});
