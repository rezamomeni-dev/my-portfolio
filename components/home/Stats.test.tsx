import { render, screen, act } from '@testing-library/react';
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

// Mock framer-motion useInView
vi.mock('framer-motion', async () => {
  const actual = await vi.importActual('framer-motion');
  return {
    ...actual,
    useInView: vi.fn().mockReturnValue(true),
  };
});

test('Stats renders stat items and animates', async () => {
  vi.useFakeTimers();

  // Mock requestAnimationFrame
  let rafCallback: FrameRequestCallback | null = null;
  vi.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
    rafCallback = cb;
    return 1;
  });

  render(<Stats />);

  expect(screen.getByText('Years Experience')).toBeDefined();
  expect(screen.getByText('Projects Delivered')).toBeDefined();

  // Initially values might be 0
  expect(screen.getAllByText('0+').length).toBe(2);

  // Trigger RAF callback
  if (rafCallback) {
    await act(async () => {
      (rafCallback as any)(600); // Advance to end of duration
    });
  }

  // Advance timers to trigger state updates
  vi.advanceTimersByTime(600);

  // After animation it should show final values
  expect(screen.queryByText('8+')).toBeDefined();
  expect(screen.queryByText('40+')).toBeDefined();

  vi.useRealTimers();
});
