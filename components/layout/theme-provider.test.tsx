import { render, screen } from '@testing-library/react';
import { ThemeProvider } from './theme-provider';
import { expect, test, vi } from 'vitest';

// Mock next-themes
vi.mock('next-themes', () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => <div data-testid="theme-provider">{children}</div>
}));

test('ThemeProvider renders children', () => {
  render(
    <ThemeProvider>
      <div data-testid="child">Child Content</div>
    </ThemeProvider>
  );

  expect(screen.getByTestId('theme-provider')).toBeDefined();
  expect(screen.getByTestId('child')).toBeDefined();
});
