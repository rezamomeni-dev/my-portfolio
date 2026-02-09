import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';
import { expect, test, vi } from 'vitest';

vi.mock('next/navigation', () => ({
  usePathname: () => '/'
}));

vi.mock('@/data/resume.json', () => ({
  default: {
    personalInfo: {
      name: 'John Doe'
    }
  }
}));

test('Header renders name and navigation items', () => {
  render(<Header />);

  expect(screen.getByText('John Doe')).toBeDefined();
  expect(screen.getAllByText('Home').length).toBeGreaterThan(0);
  expect(screen.getAllByText('Projects').length).toBeGreaterThan(0);
  expect(screen.getAllByText('Resume').length).toBeGreaterThan(0);
  expect(screen.getAllByText('Blog').length).toBeGreaterThan(0);
});

test('Header toggles mobile menu', () => {
  render(<Header />);

  const toggleButton = screen.getByLabelText('Toggle menu');
  fireEvent.click(toggleButton);

  // In mobile menu
  const mobileHomeLinks = screen.getAllByText('Home');
  expect(mobileHomeLinks.length).toBeGreaterThan(1);
});
