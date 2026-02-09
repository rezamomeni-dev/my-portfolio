import { render, screen } from '@testing-library/react';
import About from './About';
import { expect, test } from 'vitest';

test('About renders content', () => {
  render(<About content="This is about me." />);

  expect(screen.getByText('About Me')).toBeDefined();
  expect(screen.getByText('This is about me.')).toBeDefined();
});
