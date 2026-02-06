import ProjectShowcase from "@/components/home/ProjectShowcase";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Projects | Senior Frontend Engineer",
   description:
      "A showcase of technical excellence and business value through engineering scalable frontend solutions.",
};

export default function ProjectsPage() {
   return <ProjectShowcase />;
}
