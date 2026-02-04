"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface SkillsProps {
  core: string[];
  tools: string[];
}

const Skills = ({ core, tools }: SkillsProps) => {
  return (
    <section id="skills" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">Technical Skills</h2>
          <div className="h-px bg-zinc-800 w-full mb-12"></div>

          <div className="space-y-12">
            <div>
              <h4 className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-6">Core Technologies</h4>
              <div className="flex flex-wrap gap-3">
                {core.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-white font-medium hover:border-zinc-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-6">Concepts & Tools</h4>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-white font-medium hover:border-zinc-700 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
