"use client";

import React from "react";
import { m } from "framer-motion";
import SectionContainer from "../shared/SectionContainer";
import { SkillsProps } from "@/types/resume";

const Skills = ({ categories }: SkillsProps) => {
   return (
      <SectionContainer id="skills">
         <m.div
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
         >
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">
               Technical Skills
            </h2>

            <div className="h-px bg-zinc-200 dark:bg-zinc-800 w-full mb-12" />

            <div className="space-y-16">
               {categories.map((category) => (
                  <div key={category.id}>
                     <h4 className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-6">
                        {category.title}
                     </h4>

                     <div className="flex flex-wrap gap-3">
                        {category.items.map((item) => (
                           <span
                              key={item}
                              className={
                                 category.variant === "primary"
                                    ? "px-4 py-2 bg-primary/5 dark:bg-primary/10 border border-primary/20 dark:border-primary/30 rounded-xl text-sm text-primary font-semibold hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors"
                                    : "px-4 py-2 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-sm text-zinc-700 dark:text-white font-medium hover:border-primary/40 transition-colors"
                              }
                           >
                              {item}
                           </span>
                        ))}
                     </div>
                  </div>
               ))}
            </div>
         </m.div>
      </SectionContainer>
   );
};

export default Skills;
