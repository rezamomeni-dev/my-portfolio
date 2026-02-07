"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionContainer from "@/components/shared/SectionContainer";

interface ProjectNavigationProps {
   prevProject: { slug: string; title: string } | null;
   nextProject: { slug: string; title: string } | null;
}

const ProjectNavigation = ({
   prevProject,
   nextProject,
}: ProjectNavigationProps) => {
   return (
      <section className="bg-white dark:bg-black border-t border-zinc-200 dark:border-zinc-800">
         <SectionContainer>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
               {prevProject ? (
                  <motion.div whileHover={{ x: -10 }} className="group">
                     <Link
                        href={`/projects/${prevProject.slug}`}
                        className="flex flex-col items-start gap-4"
                     >
                        <span className="flex items-center gap-2 text-zinc-500 dark:text-zinc-500 font-bold uppercase tracking-widest text-xs group-hover:text-primary transition-colors">
                           <ArrowLeft className="w-4 h-4" />
                           Previous Project
                        </span>
                        <span className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white group-hover:text-primary transition-colors">
                           {prevProject.title}
                        </span>
                     </Link>
                  </motion.div>
               ) : (
                  <div />
               )}

               {nextProject ? (
                  <motion.div
                     whileHover={{ x: 10 }}
                     className="group text-right"
                  >
                     <Link
                        href={`/projects/${nextProject.slug}`}
                        className="flex flex-col items-end gap-4"
                     >
                        <span className="flex items-center gap-2 text-zinc-500 dark:text-zinc-500 font-bold uppercase tracking-widest text-xs group-hover:text-primary transition-colors">
                           Next Project
                           <ArrowRight className="w-4 h-4" />
                        </span>
                        <span className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white group-hover:text-primary transition-colors">
                           {nextProject.title}
                        </span>
                     </Link>
                  </motion.div>
               ) : (
                  <div />
               )}
            </div>
         </SectionContainer>
      </section>
   );
};

export default ProjectNavigation;
