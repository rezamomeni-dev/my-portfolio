import { render, screen, fireEvent } from '@testing-library/react';
import ProjectGallery from './ProjectGallery';
import { expect, test, vi } from 'vitest';

const mockGallery = [
  {
    src: '/img1.png',
    label: 'Gallery Item 1',
    description: 'Gallery Description 1'
  },
  {
    src: '/doc.pdf',
    label: 'PDF Document',
    description: 'PDF Description',
    type: 'pdf'
  }
];

test('ProjectGallery renders items correctly', () => {
  render(<ProjectGallery gallery={mockGallery} />);

  expect(screen.getByText('Interface Previews')).toBeDefined();
  expect(screen.getByRole('heading', { name: 'Gallery Item 1' })).toBeDefined();
  expect(screen.getByText('Gallery Description 1')).toBeDefined();
  expect(screen.getByRole('heading', { name: 'PDF Document' })).toBeDefined();
});

test('ProjectGallery opens Lightbox on click', () => {
  render(<ProjectGallery gallery={mockGallery} />);

  const galleryItem = screen.getByText('Gallery Item 1').closest('div')?.parentElement?.querySelector('.cursor-pointer');
  if (galleryItem) {
    fireEvent.click(galleryItem);
    // Lightbox should be open, checking for its close button
    expect(screen.getByLabelText('Close Lightbox')).toBeDefined();
  }
});
