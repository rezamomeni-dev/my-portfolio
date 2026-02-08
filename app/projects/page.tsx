import projectsData from "@/data/projects.json";
import { Metadata } from "next";
import { Project } from "@/types/project";
import dynamic from "next/dynamic";

const ProjectsList = dynamic(
   () => import("@/components/projects/ProjectsList"),
);

const projects = projectsData as unknown as Project[];

export const metadata: Metadata = {
   title: "Projects | Senior Frontend Engineer",
   description:
      "A showcase of technical excellence and business value through engineering scalable frontend solutions."
};

export default function ProjectsPage() {
   return <ProjectsList projects={projects} />;
}
