import { render, screen } from '@testing-library/react';
import ProjectHero from './ProjectHero';
import { expect, test } from 'vitest';

const mockProject = {
  title: 'Project Title',
  category: 'Web',
  description: 'Project Description',
  liveLink: 'https://live.com',
  githubLink: 'https://github.com',
  banner: '/banner.png',
  gallery: [{ src: '/gallery1.png', label: 'Gallery 1', description: 'Desc' }],
  technologies: ['React'],
} as any;

test('ProjectHero renders project details and links', () => {
  const { rerender } = render(<ProjectHero project={mockProject} />);

  expect(screen.getAllByText('Project Title').length).toBeGreaterThan(0);
  expect(screen.getByText('Live Demo')).toBeDefined();
  expect(screen.getByText('GitHub')).toBeDefined();

  // Test without github link
  const noGithubProject = { ...mockProject, githubLink: null };
  rerender(<ProjectHero project={noGithubProject} />);
  expect(screen.queryByText('GitHub')).toBeNull();

  // Test without live link
  const noLiveProject = { ...mockProject, liveLink: null };
  rerender(<ProjectHero project={noLiveProject} />);
  expect(screen.queryByText('Live Demo')).toBeNull();

  // Test gallery vs banner image selection
  const noGalleryProject = { ...mockProject, gallery: [] };
  rerender(<ProjectHero project={noGalleryProject} />);
  const img = screen.getByAltText('Project Title');
  expect(img.getAttribute('src')).toContain('banner.png');
});
