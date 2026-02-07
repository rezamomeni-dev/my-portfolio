"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { User } from "lucide-react";
import Link from "next/link";
import SectionContainer from "../shared/SectionContainer";
import { ResumeHeroProps } from "@/types/resume";

const Hero = ({ name, role, bio, image, email, location }: ResumeHeroProps) => {
   const [imageError, setImageError] = useState(false);

   return (
      <SectionContainer>
         <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
            <motion.div
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.4 }}
               className="flex-1 text-center md:text-left"
            >
               <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white mb-2 leading-tight">
                  {role}
               </h1>
               <p className="text-primary font-medium mb-6">{location}</p>
               <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
                  {bio}
               </p>
               <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <Link
                     href="#projects"
                     className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
                  >
                     View Projects
                  </Link>
                  <a
                     href={`mailto:${email}`}
                     className="bg-transparent border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white px-8 py-3 rounded-full font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  >
                     Contact Me
                  </a>
               </div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -20, 0],
               }}
               transition={{
                  opacity: { duration: 0.4, delay: 0.1 },
                  scale: { duration: 0.4, delay: 0.1 },
                  y: {
                     duration: 6,
                     repeat: Infinity,
                     ease: "easeInOut",
                  },
               }}
               className="relative w-64 h-64 md:w-80 md:h-80"
            >
               <div className="w-full h-full rounded-full overflow-hidden border-4 border-zinc-200 dark:border-zinc-800 relative bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center shadow-2xl shadow-primary/20">
                  {!imageError ? (
                     <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover object-top"
                        onError={() => setImageError(true)}
                     />
                  ) : (
                     <div className="flex flex-col items-center justify-center text-zinc-400">
                        <User size={120} strokeWidth={1} />
                     </div>
                  )}
               </div>
            </motion.div>
         </div>
      </SectionContainer>
   );
};

export default Hero;
