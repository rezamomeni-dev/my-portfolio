"use client";

import { motion } from "framer-motion";
import { Info, Code2, UserCircle, Calendar } from "lucide-react";
import SectionContainer from "@/components/SectionContainer";

interface ProjectDetailsProps {
  project: {
    about: string;
    technologies: string[];
    role: string;
    roleDescription?: string;
    timeline: string;
    launchedDate?: string;
  };
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <section className="py-16 md:py-24 bg-zinc-50 dark:bg-zinc-900/50">
      <SectionContainer>
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Info className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">About the Project</h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400 leading-relaxed whitespace-pre-line">
              {project.about}
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-10"
          >
            {/* Tech Stack */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-zinc-900 dark:text-white font-bold uppercase tracking-wider text-sm">
                <Code2 className="w-5 h-5 text-primary" />
                Tech Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-medium shadow-sm hover:border-primary/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* My Role */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-zinc-900 dark:text-white font-bold uppercase tracking-wider text-sm">
                <UserCircle className="w-5 h-5 text-primary" />
                My Role
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{project.role}</h3>
                {project.roleDescription && (
                  <p className="text-zinc-600 dark:text-zinc-400">{project.roleDescription}</p>
                )}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-zinc-900 dark:text-white font-bold uppercase tracking-wider text-sm">
                <Calendar className="w-5 h-5 text-primary" />
                Timeline
              </div>
              <div className="space-y-1">
                <div className="text-xl font-bold text-zinc-900 dark:text-white">{project.timeline}</div>
                {project.launchedDate && (
                  <p className="text-zinc-500 dark:text-zinc-400">Launched in {project.launchedDate}</p>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default ProjectDetails;
