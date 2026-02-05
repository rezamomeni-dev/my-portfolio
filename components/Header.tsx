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
      if (window.innerWidth >= 768) {
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
    { name: "About", href: "/my-resume#about" },
    { name: "Experience", href: "/my-resume#experience" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Education", href: "/my-resume#education" },
    { name: "Skills", href: "/my-resume#skills" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 print:hidden">
      <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-full px-4 py-2 flex items-center gap-6 max-w-5xl w-full justify-between shadow-sm relative">
        <Link href="/" className="flex items-center gap-2 z-50">
          <div className="bg-primary rounded-md p-1">
             <User className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="text-zinc-900 dark:text-white font-medium hidden sm:block">{name}</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu.Root className="relative hidden md:flex">
          <NavigationMenu.List className="flex items-center gap-1">
            {navItems.map((item) => (
              <NavigationMenu.Item key={item.name}>
                <NavigationMenu.Link
                  asChild
                  className="text-zinc-500 dark:text-zinc-400 hover:text-primary dark:hover:text-primary px-3 py-1.5 text-sm transition-colors cursor-pointer"
                >
                  <Link href={item.href}>
                    {item.name}
                  </Link>
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
            className="bg-primary text-primary-foreground px-4 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2 hover:opacity-90 transition-opacity hidden sm:flex"
          >
            <span>Resume</span> <FileText className="w-4 h-4" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="p-2 md:hidden text-zinc-600 dark:text-zinc-400"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 mt-2 p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-xl flex flex-col gap-4 md:hidden z-40"
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 text-lg font-medium text-zinc-600 dark:text-zinc-400 hover:text-primary dark:hover:text-primary hover:bg-zinc-50 dark:hover:bg-zinc-800/50 rounded-xl transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="h-px bg-zinc-100 dark:bg-zinc-800 my-2" />
              <a
                href="/MohammadTaghimomeni_Resume.pdf"
                download
                onClick={() => setIsOpen(false)}
                className="bg-primary text-primary-foreground px-4 py-4 rounded-xl text-center font-semibold flex items-center justify-center gap-2"
              >
                Download Resume <FileText className="w-5 h-5" />
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
            className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm -z-10 md:hidden"
          />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
