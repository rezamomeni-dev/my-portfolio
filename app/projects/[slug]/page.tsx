import { notFound } from "next/navigation";
import Link from "next/link";
import projectsData from "@/data/projects.json";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectDetails from "@/components/projects/ProjectDetails";
import ProjectAchievements from "@/components/projects/ProjectAchievements";
import ProjectGallery from "@/components/projects/ProjectGallery";
import ProjectArchitecture from "@/components/projects/ProjectArchitecture";
import ProjectNavigation from "@/components/projects/ProjectNavigation";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectIndex = projectsData.findIndex((p) => p.slug === slug);
  const project = projectsData[projectIndex];

  if (!project) {
    notFound();
  }

  const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : null;
  const nextProject = projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : null;

  return (
    <div className="flex flex-col min-h-screen">
      <ProjectHero project={project} />
      <ProjectDetails project={project} />
      <ProjectAchievements achievements={project.achievements} />
      {project.architecture && <ProjectArchitecture architecture={project.architecture} />}
      <ProjectGallery gallery={project.gallery} />
      <ProjectNavigation
        prevProject={prevProject ? { slug: prevProject.slug, title: prevProject.title } : null}
        nextProject={nextProject ? { slug: nextProject.slug, title: nextProject.title } : null}
      />

      {/* Call to Action at the bottom */}
      <section className="py-24 bg-zinc-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to streamline your enterprise?
          </h2>
          <p className="text-xl text-zinc-400 mb-12">
             Experience the future of management communication today.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
             <a
               href={project.liveLink}
               target="_blank"
               rel="noopener noreferrer"
               className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all hover:scale-105"
             >
               View Live Demo
             </a>
             <Link
               href="/"
               className="bg-transparent border border-white/20 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all hover:scale-105"
             >
               Return Home
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
