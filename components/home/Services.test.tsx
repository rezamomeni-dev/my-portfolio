import { render, screen } from "@testing-library/react";
import Services from "./Services";
import { expect, test, vi } from "vitest";

vi.mock("@/data/home.json", () => ({
   default: {
      services: {
         title: "Expert <span>Solutions</span>",
         subtitle: "What I offer",
         items: [
            {
               title: "Frontend Architecture",
               description: "Building robust architectures",
            },
            {
               title: "Performance Optimization",
               description: "Faster apps",
            },
            {
               title: "UI Design",
               description: "Beautiful interfaces",
            },
            {
               title: "Engineering Leadership",
               description: "Mentoring teams",
            },
            {
               title: "Other Service",
               description: "Something else",
            },
         ],
      },
   },
}));

test("Services renders title and all service items", () => {
   render(<Services />);

   expect(screen.getByText(/Expert/i)).toBeDefined();
   expect(screen.getByText("Frontend Architecture")).toBeDefined();
   expect(screen.getByText("Performance Optimization")).toBeDefined();
   expect(screen.getByText("UI Design")).toBeDefined();
   expect(screen.getByText("Engineering Leadership")).toBeDefined();
   expect(screen.getByText("Other Service")).toBeDefined();
});

test("Services handles reduced motion and non-hover devices", () => {
   // Mock matchMedia to return false for hover
   window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
   }));

   vi.mock("framer-motion", async () => {
      const actual = await vi.importActual("framer-motion");
      return {
         ...actual,
         useReducedMotion: () => true,
      };
   });

   render(<Services />);
   expect(screen.getByText("Frontend Architecture")).toBeDefined();
});
