import { render, screen, fireEvent } from '@testing-library/react';
import Hero from './Hero';
import { expect, test, vi } from 'vitest';

const mockProps = {
  name: 'John Doe',
  role: 'Senior Engineer',
  bio: 'Passionate developer.',
  image: '/john.png',
  email: 'john@example.com',
  location: 'Open to Relocate'
};

test('Resume Hero renders information', () => {
  render(<Hero {...mockProps} />);

  expect(screen.getByText('Senior Engineer')).toBeDefined();
  expect(screen.getByText('Open to Relocate')).toBeDefined();
  expect(screen.getByText('Passionate developer.')).toBeDefined();
  expect(screen.getByText('View Projects')).toHaveAttribute('href', '#projects');
  expect(screen.getByText('Contact Me')).toHaveAttribute('href', 'mailto:john@example.com');
});

test('Resume Hero handles image error', () => {
  render(<Hero {...mockProps} />);

  const img = screen.getByAltText('John Doe');
  fireEvent.error(img);

  // After error, User icon should be rendered.
  // We can't easily check for Lucide icon, but we can check if image is gone if we were using a different strategy.
  // Actually, setImageError(true) will remove the Image component.
  expect(screen.queryByAltText('John Doe')).toBeNull();
});
