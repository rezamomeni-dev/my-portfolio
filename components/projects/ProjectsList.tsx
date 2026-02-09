"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import SectionContainer from "@/components/shared/SectionContainer";
import { m  } from "framer-motion";
import { ProjectsListProps } from "@/types/project";

const ProjectTimeline = dynamic(
   () => import("@/components/projects/ProjectTimeline"),
);
const ProjectCard = dynamic(() => import("@/components/projects/ProjectCard"));

export default function ProjectsList({ projects }: ProjectsListProps) {
   const [activeProject, setActiveProject] = useState(projects[0].slug);

   return (
      <SectionContainer>
         {/* Page Hero */}
         <div className="max-w-4xl mb-24">
            <m.span
               initial={{ y: 10 }}
               animate={{ y: 0 }}
               className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
            >
               Portfolio
            </m.span>
            <m.h1
               initial={{ y: 10 }}
               animate={{ y: 0 }}
               transition={{ delay: 0.1 }}
               className="text-6xl md:text-8xl font-bold text-zinc-900 dark:text-white mb-8 tracking-tighter"
            >
               Engineering <br /> <span className="text-zinc-400">Impact.</span>
            </m.h1>
            <m.p
               initial={{ y: 10 }}
               animate={{ y: 0 }}
               transition={{ delay: 0.2 }}
               className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 leading-relaxed"
            >
               A decade of building high-performance web applications,
               specializing in enterprise-grade frontend architecture and
               real-time systems.
            </m.p>
         </div>

         <div className="grid lg:grid-cols-12 gap-16">
            {/* Left Side: Sticky Timeline */}
            <div className="lg:col-span-3 sticky top-32 self-start">
               <ProjectTimeline
                  projects={projects}
                  activeProject={activeProject}
               />
            </div>

            {/* Right Side: Project Cards */}
            <div className="lg:col-span-9 grid gap-16">
               {projects.map((project, index) => (
                  <div key={project.slug} id={project.slug}>
                     <ProjectCard
                        project={project}
                        index={index}
                        isActive={activeProject === project.slug}
                        onInView={setActiveProject}
                     />
                  </div>
               ))}
            </div>
         </div>
      </SectionContainer>
   );
}
