export interface ProjectAchievement {
  metric: string;
  title: string;
  description: string;
}

export interface ProjectGalleryItem {
  src: string;
  label: string;
  description: string;
  isMobile?: boolean;
}

export interface ArchitectureItem {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  role: string;
  roleDescription?: string;
  timeline: string;
  startDate: string;
  endDate: string;
  launchedDate?: string;
  about: string;
  responsibilities: string[];
  technologies: string[];
  highlights?: string[];
  banner: string;
  liveLink?: string;
  githubLink?: string;
  gallery: ProjectGalleryItem[];
  achievements: ProjectAchievement[];
  architecture?: ArchitectureItem[];
}
