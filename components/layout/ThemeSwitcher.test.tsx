import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeSwitcher } from './ThemeSwitcher';
import { expect, test, vi } from 'vitest';
import { useTheme } from 'next-themes';

// Mock next-themes
vi.mock('next-themes', () => {
  const setTheme = vi.fn();
  return {
    useTheme: () => ({
      theme: 'light',
      setTheme
    }),
    ThemeProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>
  };
});

test('ThemeSwitcher renders correctly after mounting', () => {
  render(<ThemeSwitcher />);
  expect(screen.getByLabelText('Toggle theme')).toBeDefined();
});

test('ThemeSwitcher calls setTheme on click', () => {
  render(<ThemeSwitcher />);

  const button = screen.getByLabelText('Toggle theme');
  fireEvent.click(button);

  expect(useTheme().setTheme).toHaveBeenCalled();
});
