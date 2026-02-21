import { render, screen, fireEvent, act } from '@testing-library/react';
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
      title: 'Get in <span>Touch</span>',
      cta: 'Send Message'
    }
  }
}));

test('ContactCTA 100% coverage', async () => {
  vi.useFakeTimers();
  render(<ContactCTA />);

  const nameInput = screen.getByPlaceholderText('Your Name');
  const emailInput = screen.getByPlaceholderText('Your Email');
  const messageInput = screen.getByPlaceholderText('How can I help you?');
  const submitButton = screen.getByRole('button', { name: /Send Message/i });

  fireEvent.change(nameInput, { target: { value: 'John' } });
  fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
  fireEvent.change(messageInput, { target: { value: 'Hello' } });

  fireEvent.submit(submitButton.closest('form')!);

  act(() => {
    vi.advanceTimersByTime(1500);
  });

  await waitFor(() => expect(screen.getByText('Message Sent!')).toBeDefined());

  // Hit line 150
  const resetButton = screen.getByText('Send another message');
  fireEvent.click(resetButton);
  expect(screen.getByPlaceholderText('Your Name')).toBeDefined();

  vi.useRealTimers();
});

// Helper for waitFor in this context
async function waitFor(cb: () => void) {
    let lastError;
    for (let i = 0; i < 10; i++) {
        try {
            cb();
            return;
        } catch (e) {
            lastError = e;
            await new Promise(r => setTimeout(r, 10));
        }
    }
    throw lastError;
}
