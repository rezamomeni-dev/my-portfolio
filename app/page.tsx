import Header from '@/components/Header';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Languages from '@/components/Languages';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-center py-16 px-8 sm:px-16 bg-white dark:bg-black shadow-lg rounded-lg">
        <Header />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Languages />
      </main>
    </div>
  );
}