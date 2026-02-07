"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Palette, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import SectionContainer from "../shared/SectionContainer";

interface Project {
   slug: string;
   title: string;
   description: string;
   technologies: string[];
   link?: string;
   liveLink?: string;
   githubLink?: string;
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
      <SectionContainer id="projects">
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
                  <motion.div
                     key={index}
                     whileHover={{ y: -8 }}
                     transition={{ duration: 0.3 }}
                     className="group bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:border-primary/30 transition-all hover:shadow-lg dark:hover:bg-zinc-900 flex flex-col h-full"
                  >
                     <Link
                        href={`/projects/${project.slug}`}
                        className="block relative aspect-video bg-zinc-100 dark:bg-zinc-950 flex items-center justify-center border-b border-zinc-200 dark:border-zinc-800 overflow-hidden"
                     >
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
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                           <span className="text-white font-medium flex items-center gap-2">
                              View Details <ArrowUpRight className="w-4 h-4" />
                           </span>
                        </div>
                     </Link>

                     <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center justify-between mb-2">
                           <Link
                              href={`/projects/${project.slug}`}
                              className="hover:text-primary transition-colors"
                           >
                              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                                 {project.title}
                              </h3>
                           </Link>
                        </div>
                        <p className="text-zinc-600 dark:text-zinc-500 text-sm mb-6 leading-relaxed flex-1">
                           {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                           {project.technologies.map((tech) => (
                              <span
                                 key={tech}
                                 className="px-3 py-1 bg-primary/5 dark:bg-primary/10 border border-primary/20 dark:border-primary/30 rounded-xl text-xs text-primary font-medium"
                              >
                                 {tech}
                              </span>
                           ))}
                        </div>

                        {(project.liveLink || project.githubLink) && (
                           <div className="flex items-center gap-6 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                              {project.liveLink && (
                                 <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-zinc-500 hover:text-primary transition-all flex items-center gap-1.5 text-sm font-semibold group/link"
                                 >
                                    <ExternalLink className="w-4 h-4 transition-transform group-hover/link:scale-110" />
                                    <span>Live Preview</span>
                                 </a>
                              )}
                              {project.githubLink && (
                                 <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-zinc-500 hover:text-primary transition-all flex items-center gap-1.5 text-sm font-semibold group/link"
                                 >
                                    <Github className="w-4 h-4 transition-transform group-hover/link:scale-110" />
                                    <span>Source Code</span>
                                 </a>
                              )}
                           </div>
                        )}
                     </div>
                  </motion.div>
               ))}
            </div>
         </motion.div>
      </SectionContainer>
   );
};

export default Projects;
