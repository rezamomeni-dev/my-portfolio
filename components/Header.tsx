import React from 'react';
import ProfileImage from './ProfileImage';

const Header = () => {
  return (
    <header className="flex flex-col items-center sm:items-start text-center sm:text-left mb-8">
      <ProfileImage />
      <h1 className="text-4xl font-bold text-black dark:text-zinc-50">Mohammad Reza Taghimomeni</h1>
      <h2 className="text-xl text-zinc-600 dark:text-zinc-400 mb-4">Senior Frontend Developer</h2>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-zinc-700 dark:text-zinc-300">
        <a href="tel:+989136983056" className="hover:underline">(+98) 9136983056</a>
        <a href="mailto:mrm.tm95@gmail.com" className="hover:underline">mrm.tm95@gmail.com</a>
        <a href="https://www.linkedin.com/in/mohammadreza-taghimomeni" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
        <a href="https://github.com/mohammadreza-taghimomeni" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
      </div>
    </header>
  );
};

export default Header;
