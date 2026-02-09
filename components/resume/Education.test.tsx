import { render, screen } from '@testing-library/react';
import Education from './Education';
import { expect, test } from 'vitest';

const mockEducation = [
  {
    institution: 'University A',
    degree: 'Bachelor of Science',
    period: '2015 - 2019',
    location: 'City X'
  }
];

test('Education renders items', () => {
  render(<Education items={mockEducation} />);

  expect(screen.getByText('Education')).toBeDefined();
  expect(screen.getByText('University A')).toBeDefined();
  expect(screen.getByText('Bachelor of Science')).toBeDefined();
  expect(screen.getByText('2015 - 2019')).toBeDefined();
  expect(screen.getByText('City X')).toBeDefined();
});
