import resumeData from "@/data/resume.json";
import projectsData from "@/data/projects.json";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/resume/Hero"));
const About = dynamic(() => import("@/components/resume/About"));
const Experience = dynamic(() => import("@/components/resume/Experience"));
const Projects = dynamic(() => import("@/components/resume/Projects"));
const Education = dynamic(() => import("@/components/resume/Education"));
const Skills = dynamic(() => import("@/components/resume/Skills"));
const BackgroundBlobs = dynamic(
   () => import("@/components/resume/BackgroundBlobs"),
);

export const metadata: Metadata = {
   title: `${resumeData.personalInfo.name} - Resume`,
   description: resumeData.personalInfo.bio,
};

export default function ResumePage() {
   return (
      <div className="selection:bg-primary selection:text-primary-foreground font-sans transition-colors duration-300 relative">
         <BackgroundBlobs />
         <Hero
            name={resumeData.personalInfo.name}
            role={resumeData.personalInfo.role}
            bio={resumeData.personalInfo.bio}
            image={resumeData.personalInfo.image}
            email={resumeData.personalInfo.email}
            location={resumeData.personalInfo.location}
         />

         <About content={resumeData.personalInfo.aboutMe} />

         <Experience items={resumeData.experience} />

         <Projects items={projectsData.slice(0, 2)} />

         <Education items={resumeData.education} />

         <Skills
            core={resumeData.skills.core}
            tools={resumeData.skills.tools}
         />
      </div>
   );
}
