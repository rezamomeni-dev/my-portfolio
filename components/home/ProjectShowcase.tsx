"use client";

import { m } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import projectsData from "@/data/projects.json";
import SectionContainer from "@/components/shared/SectionContainer";

const ProjectShowcase = () => {
   const projects = projectsData.slice(0, 3);

   return (
      <div className="bg-white dark:bg-black">
         <SectionContainer>
            <div className="text-center mb-16 md:mb-20">
               <h2 className="text-4xl md:text-6xl font-bold mb-6">
                  Projects That{" "}
                  <span className="text-primary italic">Inspire</span>
               </h2>
               <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
                  Turning complex ideas into stunning digital realities. Here is
                  a featured project from my portfolio.
               </p>
            </div>

            <div className="grid gap-16 md:gap-24">
               {projects.map((project, index) => (
                  <m.div
                     key={project.slug}
                     initial={{ y: 10 }}
                     whileInView={{ y: 0 }}
                     viewport={{
                        once: true,
                        amount: 0.2,
                        margin: "0px 0px -50px 0px",
                     }}
                     transition={{ duration: 0.5 }}
                     className="group relative grid md:grid-cols-2 gap-12 items-center"
                  >
                     <div
                        className={`relative aspect-video rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl group ${index % 2 === 1 ? "md:order-last" : ""}`}
                     >
                        <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-indigo-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <Image
                           src={project.banner}
                           alt={project.title}
                           fill
                           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                           className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                     </div>

                     <div className="flex flex-col">
                        <div className="flex flex-wrap gap-2 mb-6">
                           {project.technologies.slice(0, 4).map((tech, i) => (
                              <span
                                 key={i}
                                 className="px-4 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-sm font-medium"
                              >
                                 {tech}
                              </span>
                           ))}
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900 dark:text-white group-hover:text-primary transition-colors">
                           {project.title}
                        </h3>
                        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                           {project.description}
                        </p>
                        <Link
                           href={`/projects/${project.slug}`}
                           className="inline-flex items-center gap-2 text-lg font-bold text-zinc-900 dark:text-white hover:text-primary transition-colors group/link"
                        >
                           View Case Study
                           <ArrowUpRight className="w-6 h-6 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                        </Link>
                     </div>
                  </m.div>
               ))}
            </div>

            <div className="mt-16 text-center">
               <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 text-zinc-500 hover:text-primary font-bold transition-colors"
               >
                  See all projects <ArrowUpRight className="w-5 h-5" />
               </Link>
            </div>
         </SectionContainer>
      </div>
   );
};

export default ProjectShowcase;
