# Reza Taghimomeni - Senior Frontend Developer Portfolio

A high-performance, professional portfolio website built with the latest web technologies. This project showcases technical excellence, design precision, and business value through a modern, responsive interface.

## 🚀 Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Components**: [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Testing**: [Vitest](https://vitest.dev/) & [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- **Data Management**: Centralized JSON-based content architecture
- **RSS**: [rss-parser](https://www.npmjs.com/package/rss-parser) for blog feed aggregation

## ✨ Key Features

- **Data-Driven Architecture**: Entire site content is managed via centralized JSON files in the `/data` directory, ensuring a single source of truth.
- **Project Showcase**: Detailed project listings with:
   - Categorized gallery support (Images & PDFs)
   - Interactive Lightbox for media viewing
   - Dynamic, sticky timelines synchronizing with project content
   - Detailed project pages with architecture and achievement breakdowns
- **Aggregated Blog**: A dynamic blog page that pulls content from multiple RSS feeds with:
   - Server-side caching for performance
   - Infinite scroll implementation
   - Smooth staggered entry animations
- **Interactive Resume**: Professional resume with:
   - Animated profile sections
   - ATS-friendly PDF download/print support
   - Responsive layout for all devices
- **Optimized Performance**:
   - Lazy loading for below-the-fold components
   - Optimized Framer Motion animations (LazyMotion & domAnimation)
   - Responsive image delivery using `next/image`
   - Reduced layout shifts and fast LCP
- **Modern UI/UX**:
   - Dark/Light mode support with system preference detection
   - Glassmorphism effects and custom gradient text
   - Responsive navigation using Radix UI
   - Accessible components following WAI-ARIA standards

## 📁 Project Structure

```text
├── app/                  # Next.js App Router (pages & API routes)
├── components/           # UI Components organized by feature
│   ├── blog/             # Blog-specific components
│   ├── home/             # Homepage-specific components
│   ├── layout/           # Shared layout (Header, Footer, Providers)
│   ├── projects/         # Project-specific components
│   ├── resume/           # Resume-specific components
│   ├── shared/           # Generic reusable components
│   └── ui/               # Base UI components (Radix/Shadcn)
├── data/                 # Content (JSON files - Source of Truth)
├── lib/                  # Utility functions & RSS configurations
├── public/               # Static assets (Images, PDFs)
├── types/                # Centralized TypeScript interfaces
└── vitest.setup.tsx      # Test configuration & mocks
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (Latest LTS)
- pnpm (Recommended)

### Installation

```bash
pnpm install
```

### Development

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building

Create an optimized production build:

```bash
pnpm build
```

### Testing

Run the unit test suite:

```bash
pnpm test
```

## 📝 Data Management

The portfolio content is easily customizable through the JSON files in the `data/` directory:

- `home.json`: Hero content, stats, services, and FAQ.
- `projects.json`: All project metadata, highlights, and gallery items.
- `resume.json`: Experience, education, and skills.

## 📄 License

This project is private and intended for portfolio demonstration purposes.
