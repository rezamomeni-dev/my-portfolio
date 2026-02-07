"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import homeData from "@/data/home.json";
import resumeData from "@/data/resume.json";
import SectionContainer from "@/components/shared/SectionContainer";

const Hero = () => {
   const { hero } = homeData;
   const { linkedin, github, twitter } = resumeData.personalInfo;

   const containerVariants: Variants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.2,
         },
      },
   };

   const itemVariants: Variants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
         opacity: 1,
         y: 0,
         transition: {
            duration: 0.8,
            rotate: {
               duration: 30,
               repeat: Infinity,
               ease: "linear",
            },
         },
      },
   };

   return (
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-20 md:py-32 px-6 md:px-8 lg:px-12">
         {/* Background Elements */}
         <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 -left-20 w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-[100px] md:blur-[150px] animate-pulse" />
            <div className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] bg-indigo-500/10 rounded-full blur-[100px] md:blur-[150px] animate-pulse delay-700" />
         </div>

         <SectionContainer>
            <motion.div
               variants={containerVariants}
               initial="hidden"
               animate="visible"
               className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10"
            >
               <div className="text-left w-full">
                  <motion.div
                     variants={itemVariants}
                     className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 text-sm font-semibold mb-8 backdrop-blur-sm"
                  >
                     <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                     </span>
                     {hero.badge}
                  </motion.div>

                  <motion.h1
                     variants={itemVariants}
                     className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[1.1]"
                     dangerouslySetInnerHTML={{ __html: hero.headline }}
                  />

                  <motion.p
                     variants={itemVariants}
                     className="text-lg md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl mb-12 leading-relaxed font-medium"
                  >
                     {hero.subheadline}
                  </motion.p>

                  <motion.div
                     variants={itemVariants}
                     className="flex flex-col sm:flex-row items-center gap-10"
                  >
                     <div className="relative group">
                        {/* Circular "See My Resume" Motion */}
                        <motion.div
                           animate={{ rotate: 360 }}
                           transition={{
                              duration: 10,
                              repeat: Infinity,
                              ease: "linear",
                           }}
                           className="absolute -inset-12 hidden sm:block pointer-events-none"
                        >
                           <svg className="w-full h-full" viewBox="0 0 200 200">
                              <path
                                 id="circlePath"
                                 d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
                                 fill="none"
                              />
                              <text className="text-[14px] font-bold uppercase tracking-[0.2em] fill-primary/40 dark:fill-primary/30">
                                 <textPath href="#circlePath" startOffset="0%">
                                    See My Resume • Experience • Impact •
                                 </textPath>
                              </text>
                           </svg>
                        </motion.div>

                        <Link
                           href="/my-resume"
                           className="relative group bg-primary text-primary-foreground px-10 py-5 rounded-full text-xl font-bold flex items-center gap-3 hover:opacity-90 transition-all hover:scale-105 shadow-xl shadow-primary/25 active:scale-95 z-10"
                        >
                           {hero.cta}
                           <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </Link>
                     </div>

                     <div className="flex items-center gap-8">
                        <a
                           href={linkedin}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-zinc-400 hover:text-primary transition-colors"
                        >
                           <Linkedin className="w-6 h-6" />
                        </a>
                        <a
                           href={github}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-zinc-400 hover:text-primary transition-colors"
                        >
                           <Github className="w-6 h-6" />
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
                  variants={itemVariants}
                  className="relative flex justify-center lg:justify-end w-full"
               >
                  <div className="relative w-72 h-72 md:w-[28rem] md:h-[28rem]">
                     {/* Animated Decorative Elements */}
                     <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                           duration: 30,
                           repeat: Infinity,
                           ease: "linear",
                        }}
                        className="absolute -inset-8 border-2 border-dashed border-primary/20 rounded-[3rem]"
                     />
                     <motion.div
                        animate={{ rotate: -360 }}
                        transition={{
                           duration: 40,
                           repeat: Infinity,
                           ease: "linear",
                        }}
                        className="absolute -inset-16 border border-indigo-500/10 rounded-full"
                     />

                     {/* Main Image Container */}
                     <motion.div
                        animate={{
                           y: [0, -20, 0],
                           rotate: [0, 2, 0, -2, 0],
                        }}
                        transition={{
                           y: {
                              duration: 6,
                              repeat: Infinity,
                              ease: "easeInOut",
                           },
                           rotate: {
                              duration: 10,
                              repeat: Infinity,
                              ease: "easeInOut",
                           },
                        }}
                        className="relative w-full h-full overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] dark:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] rounded-[4rem] border-8 border-white dark:border-zinc-800 group"
                     >
                        <Image
                           src={hero.image}
                           alt="Professional portrait"
                           fill
                           className="object-cover object-top rounded-[3.5rem] group-hover:scale-110 transition-transform duration-700"
                           priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                     </motion.div>

                     {/* Status Badge Overlays */}
                     <motion.div
                        animate={{ y: [0, 15, 0], x: [0, 5, 0] }}
                        transition={{
                           duration: 5,
                           repeat: Infinity,
                           ease: "easeInOut",
                        }}
                        className="absolute -top-10 -right-10 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-zinc-100 dark:border-zinc-700 z-20"
                     >
                        <div className="text-sm text-zinc-500 mb-1 font-semibold">
                           Experience
                        </div>
                        <div className="text-2xl font-black text-primary">
                           8+ Years
                        </div>
                     </motion.div>

                     <motion.div
                        animate={{ y: [0, -15, 0], x: [0, -5, 0] }}
                        transition={{
                           duration: 6,
                           repeat: Infinity,
                           ease: "easeInOut",
                        }}
                        className="absolute -bottom-10 -left-10 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-zinc-100 dark:border-zinc-700 z-20"
                     >
                        <div className="text-sm text-zinc-500 mb-1 font-semibold">
                           Focus
                        </div>
                        <div className="text-2xl font-black text-indigo-500">
                           Architecture
                        </div>
                     </motion.div>
                  </div>
               </motion.div>
            </motion.div>
         </SectionContainer>
      </section>
   );
};

export default Hero;
