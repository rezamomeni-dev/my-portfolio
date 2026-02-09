import { render, screen, fireEvent } from '@testing-library/react';
import Lightbox from './Lightbox';
import { expect, test, vi } from 'vitest';

const mockImages = [
  {
    src: '/img1.png',
    label: 'Image 1',
    description: 'Description 1'
  },
  {
    src: '/img2.png',
    label: 'Image 2',
    description: 'Description 2'
  }
];

test('Lightbox renders when open', () => {
  const onClose = vi.fn();
  const onNavigate = vi.fn();
  render(
    <Lightbox
      isOpen={true}
      onClose={onClose}
      images={mockImages}
      currentIndex={0}
      onNavigate={onNavigate}
    />
  );

  expect(screen.getByText('Image 1')).toBeDefined();
  expect(screen.getByText('Description 1')).toBeDefined();
  expect(screen.getByText('1 / 2')).toBeDefined();
});

test('Lightbox calls onNavigate when clicking next/previous', () => {
  const onClose = vi.fn();
  const onNavigate = vi.fn();
  render(
    <Lightbox
      isOpen={true}
      onClose={onClose}
      images={mockImages}
      currentIndex={0}
      onNavigate={onNavigate}
    />
  );

  const nextButton = screen.getByLabelText('Next Image');
  fireEvent.click(nextButton);
  expect(onNavigate).toHaveBeenCalledWith(1);

  const prevButton = screen.getByLabelText('Previous Image');
  fireEvent.click(prevButton);
  expect(onNavigate).toHaveBeenCalledWith(1); // Since currentIndex was 0, (0-1+2)%2 = 1
});

test('Lightbox calls onClose when clicking close', () => {
  const onClose = vi.fn();
  const onNavigate = vi.fn();
  render(
    <Lightbox
      isOpen={true}
      onClose={onClose}
      images={mockImages}
      currentIndex={0}
      onNavigate={onNavigate}
    />
  );

  const closeButton = screen.getByLabelText('Close Lightbox');
  fireEvent.click(closeButton);
  expect(onClose).toHaveBeenCalled();
});
