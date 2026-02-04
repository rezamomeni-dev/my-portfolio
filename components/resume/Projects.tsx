"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Palette } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
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
          <h2 className="text-3xl font-bold text-white mb-8">Projects</h2>
          <div className="h-px bg-zinc-800 w-full mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {items.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all hover:bg-zinc-900"
              >
                <div className="aspect-video bg-zinc-950 flex items-center justify-center border-b border-zinc-800">
                   <Palette className="w-12 h-12 text-zinc-800 group-hover:text-zinc-700 transition-colors" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      {project.title} <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                    </h3>
                  </div>
                  <p className="text-zinc-500 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-zinc-950 border border-zinc-800 rounded text-xs text-zinc-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
