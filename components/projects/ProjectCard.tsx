"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, User, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types/project";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  index: number;
  isActive: boolean;
  onInView: (slug: string) => void;
}

const ProjectCard = ({ project, index, isActive, onInView }: ProjectCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.5,
    margin: "-10% 0px -40% 0px"
  });

  useEffect(() => {
    if (isInView) {
      onInView(project.slug);
    }
  }, [isInView, project.slug, onInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`relative group mb-32 last:mb-0 transition-all duration-700 ${
        !isActive ? "opacity-30 blur-[2px] scale-95" : "opacity-100 blur-0 scale-100"
      }`}
    >
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Project Image/Visual */}
        <div className="lg:col-span-7 relative aspect-[16/10] rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl">
          <Image
            src={project.banner}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
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
        <div className="lg:col-span-5 flex flex-col pt-4">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
               {project.category}
            </span>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-white leading-tight">
            {project.title}
          </h3>

          <div className="flex flex-wrap gap-6 mb-8 text-zinc-600 dark:text-zinc-400">
             <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{project.role}</span>
             </div>
             <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{project.timeline}</span>
             </div>
          </div>

          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
            {project.description}
          </p>

          {project.highlights && (
            <div className="space-y-4 mb-10">
              {project.highlights.map((highlight: string, i: number) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1.5 shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-zinc-700 dark:text-zinc-300 font-medium leading-tight">{highlight}</span>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-2 mt-auto">
            {project.technologies.map((tech: string, i: number) => (
              <span
                key={i}
                className="px-4 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-bold border border-zinc-200 dark:border-zinc-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
