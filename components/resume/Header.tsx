"use client";

import * as React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { FileText, User } from "lucide-react";

interface HeaderProps {
  name: string;
}

const Header = ({ name }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 print:hidden">
      <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-full px-4 py-2 flex items-center gap-6 max-w-5xl w-full justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-white rounded-md p-1">
             <User className="w-4 h-4 text-black" />
          </div>
          <span className="text-white font-medium hidden md:block">{name}</span>
        </div>

        <NavigationMenu.Root className="relative flex">
          <NavigationMenu.List className="flex items-center gap-1">
            {["About", "Experience", "Projects", "Education", "Skills"].map((item) => (
              <NavigationMenu.Item key={item}>
                <NavigationMenu.Link
                  className="text-zinc-400 hover:text-white px-3 py-1.5 text-sm transition-colors cursor-pointer"
                  href={`#${item.toLowerCase()}`}
                >
                  {item}
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
        </NavigationMenu.Root>

        <a
          href="/resume.pdf"
          className="bg-white text-black px-4 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-zinc-200 transition-colors"
          onClick={(e) => {
            e.preventDefault();
            window.print();
          }}
        >
          Resume <FileText className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
};

export default Header;
