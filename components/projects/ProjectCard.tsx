"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ProjectCardProps } from "@/types/project";
import { formatProjectTimeline } from "@/lib/utils";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import clsx from "clsx";

const ProjectCard = ({
   project,
   index,
   isActive,
   onInView,
}: ProjectCardProps) => {
   const ref = useRef(null);
   const isInView = useInView(ref, {
      amount: 0.2,
      margin: "-10% 0px -40% 0px",
   });

   useEffect(() => {
      if (isInView) {
         onInView(project.slug);
      }
   }, [isInView, project.slug, onInView]);

   return (
      <motion.div
         key={index}
         ref={ref}
         initial={{ opacity: 0, y: 10 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, amount: 0.2 }}
         // transition={{ duration: 0.5 }}
         // initial={{ opacity: 0, y: 20, scale: 0.95 }}
         // whileInView={{ opacity: 1, y: 0, scale: 1 }}
         // viewport={{ once: true, amount: 0.2 }}
         transition={{
            duration: 0.6,
            // delay: index * 0.1,
            ease: [0.21, 0.47, 0.32, 0.98],
         }}
         className={clsx(
            "relative group mb-12 md:mb-24 last:mb-0 transition-all duration-700",
            "opacity-100",
            {
               "md:scale-95": !isActive,
               " scale-100": isActive,
            },
            "max-md:opacity-100 max-md:blur-0 max-md:scale-100",
         )}
      >
         <div className="grid lg:grid-cols-12 gap-6 md:gap-12 items-start">
            {/* Project Image/Visual */}
            <div className="lg:col-span-6 relative aspect-video rounded-2xl md:rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl md:shadow-2xl">
               <Image
                  src={project.banner}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8 max-md:hidden">
                  <div className="flex flex-wrap gap-4">
                     <Link
                        href={`/projects/${project.slug}`}
                        className="bg-white text-zinc-900 px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-primary hover:text-white transition-all transform hover:scale-105"
                     >
                        View Case Study <ArrowUpRight className="w-4 h-4" />
                     </Link>
                     {project.liveLink && (
                        <a
                           href={project.liveLink}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="bg-zinc-900/50 backdrop-blur-md text-white border border-white/20 px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-white/20 transition-all transform hover:scale-105"
                        >
                           Live Demo <ArrowUpRight className="w-4 h-4" />
                        </a>
                     )}
                  </div>
               </div>
            </div>

            {/* Project Info */}
            <div className="lg:col-span-6 flex flex-col pt-4">
               <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                     {project.category}
                  </span>
               </div>

               <Link href={`/projects/${project.slug}`}>
                  <h3 className="text-2xl md:text-4xl font-bold mb-4 text-zinc-900 dark:text-white leading-tight group-hover:text-primary transition-colors">
                     {project.title}
                  </h3>
               </Link>

               <div className="flex flex-wrap gap-4 mb-6 text-zinc-600 dark:text-zinc-400">
                  <div className="flex items-center gap-2">
                     <User className="w-4 h-4 text-primary" />
                     <span className="text-sm font-medium">{project.role}</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <Calendar className="w-4 h-4 text-primary" />
                     <span className="text-sm font-medium">
                        {formatProjectTimeline(
                           project.startDate,
                           project.endDate,
                        )}
                     </span>
                  </div>
               </div>

               <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                  {project.description}
               </p>

               {/* Mobile Actions */}
               <div className="flex flex-wrap gap-3 mb-8 md:hidden">
                  <Link
                     href={`/projects/${project.slug}`}
                     className="bg-primary text-primary-foreground px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 text-sm shadow-lg shadow-primary/20"
                  >
                     View Details <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  {project.liveLink && (
                     <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 text-sm border border-zinc-200 dark:border-zinc-700"
                     >
                        Live Demo <ArrowUpRight className="w-4 h-4" />
                     </a>
                  )}
               </div>

               {/* {project.highlights && (
                  <div className="space-y-2 mb-8">
                     {project.highlights.map((highlight: string, i: number) => (
                        <div key={i} className="flex items-start gap-3">
                           <div className="mt-1.5 shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                              <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                           </div>
                           <span className="text-zinc-700 dark:text-zinc-300 font-medium leading-tight">
                              {highlight}
                           </span>
                        </div>
                     ))}
                  </div>
               )} */}

               {project?.technologies ? (
                  <div className="flex flex-wrap gap-2 mt-auto">
                     {project?.technologies
                        .slice(0, 4)
                        .map((tech: string, i: number) => (
                           <span
                              key={i}
                              className="px-4 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-bold border border-zinc-200 dark:border-zinc-700"
                           >
                              {tech}
                           </span>
                        ))}

                     {project?.technologies &&
                     project.technologies.length > 4 ? (
                        <span className="px-4 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-bold border border-zinc-200 dark:border-zinc-700">
                           +{project.technologies.length - 4} more
                        </span>
                     ) : null}
                  </div>
               ) : null}
            </div>
         </div>
      </motion.div>
   );
};

export default ProjectCard;
