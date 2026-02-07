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
  thumbnail?: string;
  type?: "image" | "pdf";
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

export interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: ProjectGalleryItem[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export interface ProjectAchievementsProps {
  achievements: ProjectAchievement[];
  variant?: "light" | "zinc";
}

export interface ProjectArchitectureProps {
  architecture: ArchitectureItem[];
  variant?: "light" | "zinc";
}

export interface ProjectCardProps {
  project: Project;
  index: number;
  isActive: boolean;
  onInView: (slug: string) => void;
}

export interface ProjectDetailsProps {
  project: Project;
  variant?: "light" | "zinc";
}

export interface ProjectGalleryProps {
  gallery: ProjectGalleryItem[];
  variant?: "light" | "zinc";
}

export interface ProjectHeroProps {
  project: Project;
}

export interface ProjectNavigationProps {
  prevProject: { slug: string; title: string } | null;
  nextProject: { slug: string; title: string } | null;
}

export interface ProjectTimelineProps {
  projects: Project[];
  activeProject: string;
}

export interface ProjectsListProps {
  projects: Project[];
}
