import { render, screen } from '@testing-library/react';
import SectionContainer from './SectionContainer';
import { expect, test } from 'vitest';

test('SectionContainer renders children and applies custom className', () => {
  render(
    <SectionContainer className="custom-class" data-testid="section">
      <div>Content</div>
    </SectionContainer>
  );

  const section = screen.getByTestId('section');
  expect(section.className).toContain('custom-class');
  expect(section.className).toContain('max-w-7xl');
  expect(screen.getByText('Content')).toBeDefined();
});
