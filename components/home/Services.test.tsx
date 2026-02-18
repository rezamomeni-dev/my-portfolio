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
               title: "UI/UX Development",
               description: "Crafting interfaces",
            },
         ],
      },
   },
}));

test("Services renders title and service items", () => {
   render(<Services />);

   expect(screen.getByText(/Expert/i)).toBeDefined();
   expect(screen.getByText("Frontend Architecture")).toBeDefined();
   expect(screen.getByText("UI/UX Development")).toBeDefined();
});
