"use client";

import * as React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { FileText, User } from "lucide-react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import Link from "next/link";
import resumeData from "@/data/resume.json";

const Header = () => {
  const { name } = resumeData.personalInfo;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 print:hidden">
      <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-full px-4 py-2 flex items-center gap-6 max-w-5xl w-full justify-between shadow-sm">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-primary rounded-md p-1">
             <User className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="text-zinc-900 dark:text-white font-medium hidden md:block">{name}</span>
        </Link>

        <NavigationMenu.Root className="relative flex">
          <NavigationMenu.List className="flex items-center gap-1">
            {["About", "Experience", "Projects", "Education", "Skills"].map((item) => (
              <NavigationMenu.Item key={item}>
                <NavigationMenu.Link
                  asChild
                  className="text-zinc-500 dark:text-zinc-400 hover:text-primary dark:hover:text-primary px-3 py-1.5 text-sm transition-colors cursor-pointer"
                >
                  <Link href={`/my-resume#${item.toLowerCase()}`}>
                    {item}
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
        </NavigationMenu.Root>

        <div className="flex items-center gap-3">
          <ThemeSwitcher />
          <a
            href="/MohammadTaghimomeni_Resume.pdf"
            download
            className="bg-primary text-primary-foreground px-4 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <span className="hidden sm:inline">Resume</span> <FileText className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
