"use client";

import React from "react";
import { motion } from "framer-motion";

interface EducationItem {
   institution: string;
   degree: string;
   period: string;
   location: string;
}

interface EducationProps {
   items: EducationItem[];
}

const Education = ({ items }: EducationProps) => {
   return (
      <section id="education" className="py-16 md:py-24">
         <div className="max-w-screen-xl mx-auto px-4">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
            >
               <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">
                  Education
               </h2>
               <div className="h-px bg-zinc-200 dark:bg-zinc-800 w-full mb-12"></div>

               <div className="space-y-12">
                  {items.map((item, index) => (
                     <div
                        key={index}
                        className="flex flex-col md:flex-row gap-8 md:gap-24"
                     >
                        <div className="md:w-48 shrink-0">
                           <span className="text-zinc-500 text-sm font-medium uppercase tracking-wider">
                              {item.period}
                           </span>
                           <p className="text-zinc-400 dark:text-zinc-600 text-xs mt-1">
                              {item.location}
                           </p>
                        </div>

                        <div className="flex-1">
                           <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">
                              {item.institution}
                           </h3>
                           <p className="text-zinc-600 dark:text-zinc-400 font-medium">
                              {item.degree}
                           </p>
                        </div>
                     </div>
                  ))}
               </div>
            </motion.div>
         </div>
      </section>
   );
};

export default Education;
