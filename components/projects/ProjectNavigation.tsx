"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { m  } from "framer-motion";
import SectionContainer from "@/components/shared/SectionContainer";
import { ProjectNavigationProps } from "@/types/project";

const ProjectNavigation = ({
   prevProject,
   nextProject
}: ProjectNavigationProps) => {
   return (
      <section className="bg-white dark:bg-black border-t border-zinc-200 dark:border-zinc-800">
         <SectionContainer>
            <div className="flex flex-row justify-between gap-4 md:gap-12">
               {prevProject ? (
                  <m.div whileHover={{ x: -10 }} className="group flex-1 max-w-[50%]">
                     <Link
                        href={`/projects/${prevProject.slug}`}
                        className="flex flex-col items-start gap-2 md:gap-4"
                     >
                        <span className="flex items-center gap-2 text-zinc-500 dark:text-zinc-500 font-bold uppercase tracking-widest text-[10px] md:text-xs group-hover:text-primary transition-colors">
                           <ArrowLeft className="w-3 h-3 md:w-4 md:h-4" />
                           <span className="hidden xs:inline">Previous</span> Project
                        </span>
                        <span className="text-lg md:text-3xl font-bold text-zinc-900 dark:text-white group-hover:text-primary transition-colors line-clamp-1">
                           {prevProject.title}
                        </span>
                     </Link>
                  </m.div>
               ) : (
                  <div className="flex-1" />
               )}

               {nextProject ? (
                  <m.div
                     whileHover={{ x: 10 }}
                     className="group text-right flex-1 max-w-[50%]"
                  >
                     <Link
                        href={`/projects/${nextProject.slug}`}
                        className="flex flex-col items-end gap-2 md:gap-4"
                     >
                        <span className="flex items-center gap-2 text-zinc-500 dark:text-zinc-500 font-bold uppercase tracking-widest text-[10px] md:text-xs group-hover:text-primary transition-colors">
                           Next <span className="hidden xs:inline">Project</span>
                           <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                        </span>
                        <span className="text-lg md:text-3xl font-bold text-zinc-900 dark:text-white group-hover:text-primary transition-colors line-clamp-1">
                           {nextProject.title}
                        </span>
                     </Link>
                  </m.div>
               ) : (
                  <div className="flex-1" />
               )}
            </div>
         </SectionContainer>
      </section>
   );
};

export default ProjectNavigation;
