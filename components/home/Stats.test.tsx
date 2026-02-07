import { render, screen } from '@testing-library/react';
import Stats from './Stats';
import { expect, test, vi } from 'vitest';

vi.mock('@/data/home.json', () => ({
  default: {
    stats: [
      { label: "Years Experience", value: "8+" },
      { label: "Projects Delivered", value: "40+" }
    ]
  }
}));

test('Stats renders stat items', () => {
  render(<Stats />);
  expect(screen.getByText('Years Experience')).toBeDefined();
  expect(screen.getByText('Projects Delivered')).toBeDefined();
});
