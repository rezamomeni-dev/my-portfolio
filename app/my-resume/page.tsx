import Hero from "@/components/resume/Hero";
import About from "@/components/resume/About";
import Experience from "@/components/resume/Experience";
import Projects from "@/components/resume/Projects";
import Education from "@/components/resume/Education";
import Skills from "@/components/resume/Skills";
import resumeData from "@/data/resume.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${resumeData.personalInfo.name} - Resume`,
  description: resumeData.personalInfo.bio,
};

export default function ResumePage() {
  return (
    <div className="selection:bg-primary selection:text-primary-foreground font-sans transition-colors duration-300">
      <div className="max-w-screen-xl mx-auto px-4">
        <Hero
          name={resumeData.personalInfo.name}
          role={resumeData.personalInfo.role}
          bio={resumeData.personalInfo.bio}
          image={resumeData.personalInfo.image}
        />

        <About content={resumeData.personalInfo.aboutMe} />

        <Experience items={resumeData.experience} />

        <Projects items={resumeData.projects} />

        <Education items={resumeData.education} />

        <Skills core={resumeData.skills.core} tools={resumeData.skills.tools} />
      </div>
    </div>
  );
}
