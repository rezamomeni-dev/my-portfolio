"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import homeData from "@/data/home.json";
import resumeData from "@/data/resume.json";

const Hero = () => {
   const { hero } = homeData;
   const { linkedin, github, twitter } = resumeData.personalInfo;

   return (
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-16 md:py-24 px-6">
         {/* Background Elements */}
         <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse delay-700" />
         </div>

         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="text-left">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 text-sm font-medium mb-8"
               >
                  <span className="relative flex h-2 w-2">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  {hero.badge}
               </motion.div>

               <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
                  dangerouslySetInnerHTML={{ __html: hero.headline }}
               />

               <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-xl mb-10 leading-relaxed"
               >
                  {hero.subheadline}
               </motion.p>

               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-col sm:flex-row items-center gap-6"
               >
                  <Link
                     href="/my-resume"
                     className="group bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium flex items-center gap-2 hover:opacity-90 transition-all hover:scale-105"
                  >
                     {hero.cta}
                     <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <div className="flex items-center gap-5">
                     <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-primary transition-colors"
                     >
                        <Github className="w-6 h-6" />
                     </a>
                     <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-primary transition-colors"
                     >
                        <Linkedin className="w-6 h-6" />
                     </a>
                     <a
                        href={twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-primary transition-colors"
                     >
                        <Twitter className="w-6 h-6" />
                     </a>
                  </div>
               </motion.div>
            </div>

            <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="relative flex justify-center lg:justify-end"
            >
               <div className="relative w-72 h-72 md:w-96 md:h-96">
                  {/* Animated Rings */}
                  <motion.div
                     animate={{ rotate: 360 }}
                     transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                     }}
                     className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full"
                  />
                  <motion.div
                     animate={{ rotate: -360 }}
                     transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                     }}
                     className="absolute -inset-4 border border-indigo-500/20 rounded-full"
                  />

                  {/* Main Image Container */}
                  <motion.div
                     animate={{
                        y: [0, -20, 0],
                     }}
                     transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                     }}
                     className="relative w-full h-full overflow-hidden shadow-2xl rounded-full border-4 border-white dark:border-zinc-800"
                  >
                     <Image
                        src={hero.image}
                        alt="Professional portrait"
                        fill
                        className="object-cover object-top rounded-full"
                        priority
                     />
                  </motion.div>

                  {/* Status Badge Overlays */}
                  <motion.div
                     animate={{ y: [0, 10, 0] }}
                     transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                     }}
                     className="absolute -top-6 -right-6 bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-xl border border-zinc-100 dark:border-zinc-700"
                  >
                     <div className="text-xs text-zinc-500 mb-1">
                        Experience
                     </div>
                     <div className="font-bold text-primary">8+ Years</div>
                  </motion.div>

                  <motion.div
                     animate={{ y: [0, -10, 0] }}
                     transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                     }}
                     className="absolute -bottom-6 -left-6 bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-xl border border-zinc-100 dark:border-zinc-700"
                  >
                     <div className="text-xs text-zinc-500 mb-1">Focus</div>
                     <div className="font-bold text-indigo-500">Frontend</div>
                  </motion.div>
               </div>
            </motion.div>
         </div>
      </section>
   );
};

export default Hero;
