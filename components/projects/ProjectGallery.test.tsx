import { render, screen, fireEvent } from '@testing-library/react';
import ProjectGallery from './ProjectGallery';
import { expect, test } from 'vitest';

const mockGallery = [
  { src: '/img1.png', label: 'Image 1', description: 'Desc 1' },
  { src: '/img2.pdf', label: 'PDF 2', description: 'Desc 2', type: 'pdf' as const },
];

test('ProjectGallery 100% coverage', () => {
  render(<ProjectGallery gallery={mockGallery} />);

  // Open lightbox
  const img1 = screen.getByAltText('Image 1');
  fireEvent.click(img1.parentElement!);

  // Close lightbox via callback
  const closeButton = screen.getByLabelText('Close Lightbox');
  fireEvent.click(closeButton);
  expect(screen.queryByLabelText('Close Lightbox')).toBeNull();

  // Re-open and navigate via callback
  fireEvent.click(img1.parentElement!);
  const nextButton = screen.getByLabelText('Next Image');
  fireEvent.click(nextButton);

  // Check if PDF 2 is displayed in Lightbox header
  const headings = screen.getAllByText('PDF 2');
  expect(headings.length).toBeGreaterThan(1);
});
