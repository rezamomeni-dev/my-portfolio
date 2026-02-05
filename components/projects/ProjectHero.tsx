"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ProjectHeroProps {
   project: {
      title: string;
      category: string;
      description: string;
      banner: string;
      liveLink: string;
      githubLink?: string;
   };
}

const ProjectHero = ({ project }: ProjectHeroProps) => {
   return (
      <section className="relative pt-12 pb-20 overflow-hidden">
         <div className="max-w-7xl mx-auto px-6">
            {/* Breadcrumb */}
            <motion.div
               initial={{ opacity: 0, y: -10 }}
               animate={{ opacity: 1, y: 0 }}
               className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-8"
            >
               <Link
                  href="/my-resume#projects"
                  className="hover:text-primary transition-colors"
               >
                  Projects
               </Link>
               <ChevronRight className="w-4 h-4" />
               <span className="text-zinc-900 dark:text-zinc-200">
                  {project.title}
               </span>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
               <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
               >
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                     {project.category}
                  </span>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 text-zinc-900 dark:text-white leading-tight">
                     {project.title}
                  </h1>
                  <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed max-w-xl">
                     {project.description}
                  </p>

                  <div className="flex flex-wrap gap-4">
                     {project.liveLink && (
                        <a
                           href={project.liveLink}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:opacity-90 transition-all hover:scale-105"
                        >
                           Live Demo <ExternalLink className="w-5 h-5" />
                        </a>
                     )}
                     {project.githubLink ? (
                        <a
                           href={project.githubLink}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all hover:scale-105"
                        >
                           GitHub <Github className="w-5 h-5" />
                        </a>
                     ) : null}
                  </div>
               </motion.div>

               <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="relative"
               >
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl bg-zinc-100 dark:bg-zinc-900">
                     {/* Browser UI Mockup */}
                     <div className="absolute top-0 left-0 right-0 h-8 bg-zinc-200/50 dark:bg-zinc-800/50 backdrop-blur-md border-b border-zinc-300 dark:border-zinc-700 flex items-center px-4 gap-1.5 z-10">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                     </div>
                     <div className="pt-8 h-full">
                        <Image
                           src={project.banner}
                           alt={project.title}
                           fill
                           className="object-cover"
                        />
                     </div>
                  </div>
                  {/* Background blobs for visual interest */}
                  <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse-slow" />
                  <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -z-10 animate-pulse-slow" />
               </motion.div>
            </div>
         </div>
      </section>
   );
};

export default ProjectHero;
