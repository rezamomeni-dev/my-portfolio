"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import projectsData from "@/data/projects.json";

const ProjectShowcase = () => {
  const projects = projectsData;

  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Projects That <span className="text-primary italic">Inspire</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
            Turning complex ideas into stunning digital realities. Here is a featured project from my portfolio.
          </p>
        </div>

        <div className="grid gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-indigo-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {project.banner ? (
                  <Image
                    src={project.banner}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800">
                    <span className="text-4xl font-bold text-zinc-300 dark:text-zinc-700">{project.title}</span>
                  </div>
                )}
              </div>

              <div className="flex flex-col">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-4 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-sm font-medium">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
