"use client";

import React from "react";
import { motion } from "framer-motion";

interface AboutProps {
   content: string;
}

const About = ({ content }: AboutProps) => {
   return (
      <section id="about" className="py-16 md:py-24">
         <div className="max-w-screen-xl mx-auto px-4">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
            >
               <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">
                  About Me
               </h2>
               <div className="h-px bg-zinc-200 dark:bg-zinc-800 w-full mb-8"></div>
               <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl leading-relaxed">
                  {content}
               </p>
            </motion.div>
         </div>
      </section>
   );
};

export default About;
