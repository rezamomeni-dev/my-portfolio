"use client";

import { m  } from "framer-motion";
import resumeData from "@/data/resume.json";
import homeData from "@/data/home.json";
import SectionContainer from "@/components/shared/SectionContainer";

const TechStack = () => {
   const { techStack } = homeData;
   const allSkills = [...resumeData.skills.core, ...resumeData.skills.tools];

   return (
      <section className="py-24 overflow-hidden bg-white dark:bg-black">
         <SectionContainer className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
               {techStack.title}
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400">
               {techStack.subtitle}
            </p>
         </SectionContainer>

         <div className="flex overflow-hidden group">
            <m.div
               animate={{
                  x: ["0%", "-50%"]
               }}
               transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
               }}
               className="flex whitespace-nowrap gap-12 py-4"
            >
               {/* Duplicate for seamless loop */}
               {[...allSkills, ...allSkills].map((skill, index) => (
                  <div
                     key={index}
                     className="flex items-center gap-3 text-2xl md:text-4xl font-bold text-zinc-300 dark:text-zinc-800 hover:text-primary transition-colors cursor-default"
                  >
                     <span className="w-3 h-3 bg-primary rounded-full" />
                     {skill}
                  </div>
               ))}
            </m.div>
         </div>
      </section>
   );
};

export default TechStack;
