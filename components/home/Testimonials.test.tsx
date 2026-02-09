import { render, screen } from '@testing-library/react';
import Testimonials from './Testimonials';
import { expect, test, vi } from 'vitest';

vi.mock('@/data/home.json', () => ({
  default: {
    testimonials: {
      title: 'What People <span>Say</span>',
      subtitle: 'Client feedback',
      items: [
        {
          name: 'Jane Doe',
          role: 'CEO',
          content: 'Great work!'
        },
        {
          name: 'John Smith',
          role: 'CTO',
          content: 'Excellent performance.'
        }
      ]
    }
  }
}));

test('Testimonials renders title and items', () => {
  render(<Testimonials />);

  expect(screen.getByText(/What People/i)).toBeDefined();
  expect(screen.getByText('Jane Doe')).toBeDefined();
  expect(screen.getByText('CEO')).toBeDefined();
  expect(screen.getByText(/"Great work!"/)).toBeDefined();
  expect(screen.getByText('John Smith')).toBeDefined();
  expect(screen.getByText('CTO')).toBeDefined();
  expect(screen.getByText(/"Excellent performance."/)).toBeDefined();
});
