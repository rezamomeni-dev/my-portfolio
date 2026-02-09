import { render, screen, fireEvent } from '@testing-library/react';
import FAQ from './FAQ';
import { expect, test, vi } from 'vitest';

vi.mock('@/data/home.json', () => ({
  default: {
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Answers to common questions',
      items: [
        {
          question: 'Question 1',
          answer: 'Answer 1'
        },
        {
          question: 'Question 2',
          answer: 'Answer 2'
        }
      ]
    }
  }
}));

test('FAQ renders title and questions', () => {
  render(<FAQ />);

  expect(screen.getByText('Frequently Asked Questions')).toBeDefined();
  expect(screen.getByText('Question 1')).toBeDefined();
  expect(screen.getByText('Question 2')).toBeDefined();
});

test('FAQ toggles items on click', () => {
  render(<FAQ />);

  // First item is open by default based on code openIndex = 0
  expect(screen.getByText('Answer 1')).toBeDefined();

  const question2 = screen.getByText('Question 2');
  fireEvent.click(question2);

  expect(screen.getByText('Answer 2')).toBeDefined();
});
