import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactCTA from './ContactCTA';
import { expect, test, vi } from 'vitest';

vi.mock('@/data/resume.json', () => ({
  default: {
    personalInfo: {
      email: 'test@example.com',
      phone: '123 456 7890',
      location: 'Test City'
    }
  }
}));

vi.mock('@/data/home.json', () => ({
  default: {
    contactCTA: {
      title: 'Let\'s <span>Talk</span>',
      cta: 'Send Message'
    }
  }
}));

test('ContactCTA renders personal information', () => {
  render(<ContactCTA />);

  expect(screen.getByText('test@example.com')).toBeDefined();
  expect(screen.getByText('123 456 7890')).toBeDefined();
  expect(screen.getByText('Test City')).toBeDefined();
});

test('ContactCTA handles form submission', async () => {
  render(<ContactCTA />);

  const nameInput = screen.getByPlaceholderText('Your Name');
  const emailInput = screen.getByPlaceholderText('Your Email');
  const messageInput = screen.getByPlaceholderText('How can I help you?');
  const submitButton = screen.getByText('Send Message');

  fireEvent.change(nameInput, { target: { value: 'John Doe' } });
  fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
  fireEvent.change(messageInput, { target: { value: 'Hello!' } });

  fireEvent.click(submitButton);

  expect(screen.getByText('Sending...')).toBeDefined();

  await waitFor(() => expect(screen.getByText('Message Sent!')).toBeDefined(), { timeout: 2000 });
});
