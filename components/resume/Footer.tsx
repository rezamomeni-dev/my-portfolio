import React from 'react';

interface FooterProps {
  name: string;
  socials: {
    github: string;
    linkedin: string;
    twitter: string;
    email: string;
  };
}

const Footer = ({ name, socials }: FooterProps) => {
  return (
    <footer className="border-t border-zinc-800 py-10 px-6 mt-20 print:hidden">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} {name}. Built with clean code.
        </div>

        <div className="flex gap-6">
          <a href={socials.github} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white text-sm transition-colors">GitHub</a>
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white text-sm transition-colors">LinkedIn</a>
          <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white text-sm transition-colors">Twitter</a>
          <a href={`mailto:${socials.email}`} className="text-zinc-400 hover:text-white text-sm transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
