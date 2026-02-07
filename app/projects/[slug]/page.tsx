import { notFound } from "next/navigation";
import Link from "next/link";
import projectsData from "@/data/projects.json";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectDetails from "@/components/projects/ProjectDetails";
import ProjectAchievements from "@/components/projects/ProjectAchievements";
import ProjectGallery from "@/components/projects/ProjectGallery";
import ProjectArchitecture from "@/components/projects/ProjectArchitecture";
import ProjectNavigation from "@/components/projects/ProjectNavigation";
import SectionContainer from "@/components/shared/SectionContainer";
import { Project } from "@/types/project";

const projects = projectsData as unknown as Project[];

interface ProjectPageProps {
   params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
   return projects.map((project) => ({
      slug: project.slug,
   }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
   const { slug } = await params;
   const projectIndex = projects.findIndex((p) => p.slug === slug);
   const project = projects[projectIndex];

   if (!project) {
      notFound();
   }

   const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
   const nextProject =
      projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

   return (
      <div className="flex flex-col min-h-screen">
         <ProjectHero project={project} />
         <ProjectDetails project={project} />
         <ProjectAchievements achievements={project.achievements} />
         {project.architecture && (
            <ProjectArchitecture architecture={project.architecture} />
         )}
         <ProjectGallery gallery={project.gallery} />
         <ProjectNavigation
            prevProject={
               prevProject
                  ? { slug: prevProject.slug, title: prevProject.title }
                  : null
            }
            nextProject={
               nextProject
                  ? { slug: nextProject.slug, title: nextProject.title }
                  : null
            }
         />

         {/* Call to Action at the bottom */}
         {/* <section className="py-24 bg-zinc-900 text-white text-center">
            <SectionContainer className="max-w-3xl">
               <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  Ready to streamline your enterprise?
               </h2>
               <p className="text-xl text-zinc-400 mb-12">
                  {project.liveLink
                     ? "Experience the future of management communication today."
                     : "Some details of this project are restricted due to confidentiality agreements. Contact me to learn more about my enterprise solutions."}
               </p>
               <div className="flex flex-wrap justify-center gap-6">
                  {project.liveLink && (
                     <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all hover:scale-105"
                     >
                        View Live Demo
                     </a>
                  )}
                  <Link
                     href="/"
                     className="bg-transparent border border-white/20 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all hover:scale-105"
                  >
                     {project.liveLink ? "Return Home" : "Back to Home"}
                  </Link>
               </div>
            </SectionContainer>
         </section> */}
      </div>
   );
}
