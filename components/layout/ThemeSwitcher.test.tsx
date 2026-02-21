import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeSwitcher } from './ThemeSwitcher';
import { expect, test, vi } from 'vitest';
import { useTheme } from 'next-themes';

vi.mock('next-themes', () => ({
  useTheme: vi.fn()
}));

test('ThemeSwitcher toggles theme and handles mounting', () => {
  const setTheme = vi.fn();
  (useTheme as any).mockReturnValue({ theme: 'light', setTheme });

  const { rerender } = render(<ThemeSwitcher />);

  expect(screen.getByLabelText('Toggle theme')).toBeDefined();

  fireEvent.click(screen.getByLabelText('Toggle theme'));
  expect(setTheme).toHaveBeenCalledWith('dark');

  (useTheme as any).mockReturnValue({ theme: 'dark', setTheme });
  rerender(<ThemeSwitcher />);
  fireEvent.click(screen.getByLabelText('Toggle theme'));
  expect(setTheme).toHaveBeenCalledWith('light');
});
