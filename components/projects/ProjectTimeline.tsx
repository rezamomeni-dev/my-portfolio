"use client";

import { m, useScroll, useSpring  } from "framer-motion";
import { ProjectTimelineProps } from "@/types/project";
import { formatProjectTimeline } from "@/lib/utils";



const ProjectTimeline = ({ projects, activeProject }: ProjectTimelineProps) => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scrollToProject = (slug: string) => {
    const element = document.getElementById(slug);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="hidden lg:block">
      <div className="relative pl-8">
        {/* Vertical Line */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-zinc-200 dark:bg-zinc-800" />

        {/* Progress Line */}
        <m.div
          className="absolute left-0 top-0 w-[2px] bg-primary origin-top h-full"
          style={{ scaleY }}
        />

        {/* Career Journey Header */}
        <div className="mb-12">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Career Journey</h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Tracing the impact through time.</p>
        </div>

        {/* Timeline Items */}
        <div className="space-y-12">
          {projects.map((project) => {
            const isActive = activeProject === project.slug;
            return (
              <button
                key={project.slug}
                onClick={() => scrollToProject(project.slug)}
                className="group flex flex-col items-start text-left relative"
              >
                {/* Indicator Dot */}
                <div
                  className={`absolute -left-[35px] w-4 h-4 rounded-full border-4 border-white dark:border-zinc-950 transition-all duration-500 z-10 ${
                    isActive ? "bg-primary scale-125" : "bg-zinc-300 dark:bg-zinc-700 group-hover:bg-primary/50"
                  }`}
                />

                <span className={`text-[10px] font-bold uppercase tracking-widest mb-1 transition-colors duration-500 ${
                  isActive ? "text-primary" : "text-zinc-400"
                }`}>
                  {formatProjectTimeline(project.startDate, project.endDate)}
                </span>

                <h4 className={`text-lg font-bold transition-all duration-500 ${
                  isActive ? "text-zinc-900 dark:text-white scale-105 translate-x-1" : "text-zinc-400 group-hover:text-zinc-600"
                }`}>
                  {project.title}
                </h4>

                <span className={`text-xs transition-colors duration-500 ${
                  isActive ? "text-zinc-500" : "text-zinc-400"
                }`}>
                  {project.category}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectTimeline;
