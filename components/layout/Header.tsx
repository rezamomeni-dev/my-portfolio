"use client";

import * as React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { FileText, User, Menu, X } from "lucide-react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import Link from "next/link";
import resumeData from "@/data/resume.json";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
   const { name } = resumeData.personalInfo;
   const [isOpen, setIsOpen] = useState(false);

   // Close menu on resize
   useEffect(() => {
      const handleResize = () => {
         if (window.innerWidth >= 1024) {
            setIsOpen(false);
         }
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
   }, []);

   // Prevent scroll when menu is open
   useEffect(() => {
      if (isOpen) {
         document.body.style.overflow = "hidden";
      } else {
         document.body.style.overflow = "unset";
      }
      return () => {
         document.body.style.overflow = "unset";
      };
   }, [isOpen]);

   const navItems = [
      { name: "Home", href: "/" },
      { name: "Projects", href: "/projects" },
      { name: "Resume", href: "/my-resume" },
      { name: "Blog", href: "/blog" },
   ];

   return (
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 px-4 md:px-8 print:hidden w-screen">
         <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-full px-4 py-2 flex items-center gap-6 max-w-7xl w-full justify-between shadow-sm relative">
            <Link href="/" className="flex items-center gap-2 z-50">
               <div className="bg-primary rounded-md p-1">
                  <User className="w-4 h-4 text-primary-foreground" />
               </div>
               <span className="text-zinc-900 dark:text-white font-medium hidden sm:block">
                  {name}
               </span>
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu.Root className="relative hidden lg:flex">
               <NavigationMenu.List className="flex items-center gap-2">
                  {navItems.map((item) => (
                     <NavigationMenu.Item key={item.name}>
                        <NavigationMenu.Link
                           asChild
                           className="text-zinc-500 dark:text-zinc-400 hover:text-primary dark:hover:text-primary px-4 py-2 text-sm font-medium transition-colors cursor-pointer rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800"
                        >
                           <Link href={item.href}>{item.name}</Link>
                        </NavigationMenu.Link>
                     </NavigationMenu.Item>
                  ))}
               </NavigationMenu.List>
            </NavigationMenu.Root>

            <div className="flex items-center gap-2 z-50">
               <ThemeSwitcher />
               <a
                  href="/MohammadTaghimomeni_Resume.pdf"
                  download
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:opacity-90 transition-all hover:scale-105 active:scale-95 hidden sm:flex shadow-sm"
               >
                  <span>Resume</span> <FileText className="w-4 h-4" />
               </a>

               {/* Mobile Menu Toggle */}
               <button
                  className="p-2 lg:hidden text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label="Toggle menu"
               >
                  {isOpen ? (
                     <X className="w-6 h-6" />
                  ) : (
                     <Menu className="w-6 h-6" />
                  )}
               </button>
            </div>

            {/* Mobile Navigation Drawer */}
            <AnimatePresence>
               {isOpen && (
                  <motion.div
                     initial={{ opacity: 0, y: -20, scale: 0.95 }}
                     animate={{ opacity: 1, y: 0, scale: 1 }}
                     exit={{ opacity: 0, y: -20, scale: 0.95 }}
                     className="absolute top-full left-0 right-0 mt-4 p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[2rem] shadow-2xl flex flex-col gap-4 lg:hidden z-40"
                  >
                     <div className="flex flex-col gap-1">
                        {navItems.map((item) => (
                           <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => setIsOpen(false)}
                              className="px-6 py-4 text-xl font-semibold text-zinc-700 dark:text-zinc-300 hover:text-primary dark:hover:text-primary hover:bg-zinc-50 dark:hover:bg-zinc-800/50 rounded-2xl transition-all"
                           >
                              {item.name}
                           </Link>
                        ))}
                     </div>
                     <div className="h-px bg-zinc-100 dark:bg-zinc-800 mx-2" />
                     <a
                        href="/MohammadTaghimomeni_Resume.pdf"
                        download
                        onClick={() => setIsOpen(false)}
                        className="bg-primary text-primary-foreground px-6 py-5 rounded-2xl text-center font-bold text-lg flex items-center justify-center gap-3 active:scale-[0.98] transition-transform shadow-lg shadow-primary/20"
                     >
                        Download Resume <FileText className="w-6 h-6" />
                     </a>
                  </motion.div>
               )}
            </AnimatePresence>
         </div>

         {/* Backdrop for mobile menu */}
         <AnimatePresence>
            {isOpen && (
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsOpen(false)}
                  className="fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-md -z-10 lg:hidden"
               />
            )}
         </AnimatePresence>
      </header>
   );
};

export default Header;
