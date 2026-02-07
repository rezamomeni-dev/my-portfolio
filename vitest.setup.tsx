import '@testing-library/jest-dom';
import { vi } from 'vitest';
import React from 'react';

// Mock Framer Motion
vi.mock('framer-motion', async () => {
  const actual = await vi.importActual('framer-motion');
  return {
    ...actual,
    motion: {
      ...actual.motion,
      div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div {...props}>{children}</div>,
      h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => <h1 {...props}>{children}</h1>,
      p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => <p {...props}>{children}</p>,
      span: ({ children, ...props }: React.HTMLAttributes<HTMLSpanElement>) => <span {...props}>{children}</span>,
      section: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => <section {...props}>{children}</section>,
    },
    useInView: vi.fn(() => true),
    useScroll: vi.fn(() => ({ scrollYProgress: { get: () => 0 } })),
    useSpring: vi.fn((val) => val),
  };
});

// Mock Next/Link
vi.mock('next/link', () => {
  return {
    default: ({ children, href }: { children: React.ReactNode, href: string }) => <a href={href}>{children}</a>,
  };
});

// Mock Next/Image
vi.mock('next/image', () => {
  return {
    // eslint-disable-next-line @next/next/no-img-element
    default: ({ src, alt, ...props }: { src: string, alt: string }) => <img src={src} alt={alt} {...props} />,
  };
});
