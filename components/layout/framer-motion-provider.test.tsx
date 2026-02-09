import { render, screen } from '@testing-library/react';
import { FramerMotionProvider } from './framer-motion-provider';
import { expect, test } from 'vitest';

test('FramerMotionProvider renders children', () => {
  render(
    <FramerMotionProvider>
      <div data-testid="child">Child Content</div>
    </FramerMotionProvider>
  );

  expect(screen.getByTestId('child')).toBeDefined();
  expect(screen.getByText('Child Content')).toBeDefined();
});
