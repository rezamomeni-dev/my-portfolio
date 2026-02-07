"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionContainer from "../shared/SectionContainer";

import { ExperienceProps } from "@/types/resume";

const Experience = ({ items }: ExperienceProps) => {
   return (
      <SectionContainer id="experience" className="py-16 md:py-24">
         <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
         >
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">
               Experience
            </h2>
            <div className="h-px bg-zinc-200 dark:bg-zinc-800 w-full mb-12"></div>

            <div className="space-y-16">
               {items.map((item, index) => (
                  <div
                     key={index}
                     className="flex flex-col md:flex-row gap-8 md:gap-24"
                  >
                     <div className="md:w-48 shrink-0">
                        <span className="text-zinc-500 dark:text-zinc-500 text-sm font-medium uppercase tracking-wider">
                           {item.period}
                        </span>
                        <p className="text-zinc-400 dark:text-zinc-600 text-xs mt-1">
                           {item.location}
                        </p>
                     </div>

                     <div className="flex-1 group">
                        <div className="flex items-center justify-between mb-2">
                           <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-primary transition-colors flex items-center gap-2">
                              {item.role}{" "}
                              <ArrowUpRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                           </h3>
                        </div>
                        <p className="text-zinc-600 dark:text-zinc-400 font-medium mb-4">
                           {item.company}
                        </p>

                        <ul className="space-y-3 mb-6">
                           {item.description.map((desc, i) => (
                              <li
                                 key={i}
                                 className="text-zinc-600 dark:text-zinc-500 text-sm leading-relaxed flex gap-2"
                              >
                                 <span className="text-primary">•</span>
                                 {desc}
                              </li>
                           ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                           {item.technologies.map((tech) => (
                              <span
                                 key={tech}
                                 className="px-3 py-1 bg-primary/5 dark:bg-primary/10 border border-primary/20 dark:border-primary/30 rounded-xl text-xs text-primary font-medium"
                              >
                                 {tech}
                              </span>
                           ))}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </motion.div>
      </SectionContainer>
   );
};

export default Experience;
