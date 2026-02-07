"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionContainer from "../shared/SectionContainer";
import { AboutProps } from "@/types/resume";

const About = ({ content }: AboutProps) => {
   return (
      <SectionContainer id="about">
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
      </SectionContainer>
   );
};

export default About;
