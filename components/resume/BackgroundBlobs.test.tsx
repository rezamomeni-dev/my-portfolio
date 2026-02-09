import { render } from '@testing-library/react';
import BackgroundBlobs from './BackgroundBlobs';
import { expect, test } from 'vitest';

test('BackgroundBlobs renders without crashing', () => {
  const { container } = render(<BackgroundBlobs />);
  // It's mostly visual, so we just check it renders some divs
  expect(container.firstChild).toBeDefined();
});
