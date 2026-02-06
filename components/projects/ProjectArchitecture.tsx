"use client";

import { motion } from "framer-motion";
import { Server, Layout, Database, ShieldCheck, Cpu } from "lucide-react";

interface ArchitectureItem {
  label: string;
  value: string;
}

interface ProjectArchitectureProps {
  architecture: ArchitectureItem[];
}

const getIcon = (label: string) => {
  const l = label.toLowerCase();
  if (l.includes("frontend") || l.includes("ui") || l.includes("framework")) return <Layout className="w-5 h-5" />;
  if (l.includes("backend") || l.includes("api") || l.includes("server")) return <Server className="w-5 h-5" />;
  if (l.includes("database") || l.includes("db") || l.includes("storage")) return <Database className="w-5 h-5" />;
  if (l.includes("security") || l.includes("auth") || l.includes("encryption")) return <ShieldCheck className="w-5 h-5" />;
  return <Cpu className="w-5 h-5" />;
};

const ProjectArchitecture = ({ architecture }: ProjectArchitectureProps) => {
  if (!architecture || architecture.length === 0) return null;

  return (
    <section className="py-24 bg-white dark:bg-black border-y border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-3 mb-4">
             <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Cpu className="w-6 h-6" />
             </div>
             <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Technical Architecture</h2>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
             The underlying technologies and systems that power the platform.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
           {architecture.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col gap-4"
              >
                 <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-500 font-bold uppercase tracking-widest text-xs">
                    {getIcon(item.label)}
                    {item.label}
                 </div>
                 <div className="h-px bg-zinc-200 dark:bg-zinc-800 w-full" />
                 <div className="text-xl font-bold text-zinc-900 dark:text-white">
                    {item.value}
                 </div>
              </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectArchitecture;
