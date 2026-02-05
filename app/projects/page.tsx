import ProjectShowcase from "@/components/home/ProjectShowcase";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Portfolio",
  description: "A showcase of my recent projects and case studies.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-20">
      <ProjectShowcase />
    </main>
  );
}
