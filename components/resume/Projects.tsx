"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Palette } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Project {
   slug: string;
   title: string;
   description: string;
   technologies: string[];
   link?: string;
   banner?: string;
   achievements?: {
      metric: string;
      title: string;
      description: string;
   }[];
   images?: {
      src: string;
      alt: string;
   }[];
}

interface ProjectsProps {
   items: Project[];
}

const Projects = ({ items }: ProjectsProps) => {
   return (
      <section id="projects" className="py-16 px-6">
         <div className="max-w-5xl mx-auto">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
            >
               <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">
                  Projects
               </h2>
               <div className="h-px bg-zinc-200 dark:bg-zinc-800 w-full mb-12"></div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {items.map((project, index) => (
                     <Link
                        key={index}
                        href={`/projects/${project.slug}`}
                        className="group block bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:border-primary/30 transition-all hover:shadow-lg dark:hover:bg-zinc-900"
                     >
                        <div className="aspect-video bg-zinc-100 dark:bg-zinc-950 flex items-center justify-center border-b border-zinc-200 dark:border-zinc-800 relative">
                           {project.banner ? (
                              <Image
                                 src={project.banner}
                                 alt={project.title}
                                 fill
                                 className="object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                           ) : (
                              <Palette className="w-12 h-12 text-zinc-300 dark:text-zinc-800 group-hover:text-primary transition-colors" />
                           )}
                        </div>
                        <div className="p-6">
                           <div className="flex items-center justify-between mb-2">
                              <h3 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2 group-hover:text-primary transition-colors">
                                 {project.title}{" "}
                                 <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-primary transition-colors" />
                              </h3>
                           </div>
                           <p className="text-zinc-600 dark:text-zinc-500 text-sm mb-6 leading-relaxed">
                              {project.description}
                           </p>
                           <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                 <span
                                    key={tech}
                                    className="px-3 py-1 bg-primary/5 dark:bg-primary/10 border border-primary/20 dark:border-primary/30 rounded text-xs text-primary font-medium"
                                 >
                                    {tech}
                                 </span>
                              ))}
                           </div>
                        </div>
                     </Link>
                  ))}
               </div>
            </motion.div>
         </div>
      </section>
   );
};

export default Projects;
