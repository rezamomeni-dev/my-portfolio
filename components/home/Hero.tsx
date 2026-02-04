"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import resumeData from "@/data/resume.json";

const Hero = () => {
  const { name, bio, github, linkedin, twitter } = resumeData.personalInfo;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 px-6">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
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
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
        >
          Building <span className="text-primary italic">Digital</span> <br />
          Excellence with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-500">Passion</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Hi, I&apos;m <span className="text-zinc-900 dark:text-white font-semibold">{name}</span>. {bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/my-resume"
            className="group bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium flex items-center gap-2 hover:opacity-90 transition-all hover:scale-105"
          >
            Explore My Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <div className="flex items-center gap-4 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
             <a href={github} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
             </a>
             <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
             </a>
             <a href={twitter} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
             </a>
          </div>
        </motion.div>
      </div>

      {/* Floating 3D-ish Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 right-[10%] hidden lg:block w-24 h-24 bg-white dark:bg-zinc-800 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-700 flex items-center justify-center -rotate-6"
      >
        <div className="w-12 h-2 bg-primary/20 rounded-full mb-2" />
        <div className="w-8 h-2 bg-primary/10 rounded-full" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 left-[10%] hidden lg:block w-32 h-32 bg-white dark:bg-zinc-800 rounded-full shadow-2xl border border-zinc-200 dark:border-zinc-700 flex items-center justify-center"
      >
         <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-indigo-500/20 blur-sm" />
      </motion.div>
    </section>
  );
};

export default Hero;
