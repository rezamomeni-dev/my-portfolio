import Hero from "@/components/resume/Hero";
import About from "@/components/resume/About";
import Experience from "@/components/resume/Experience";
import Projects from "@/components/resume/Projects";
import Education from "@/components/resume/Education";
import Skills from "@/components/resume/Skills";
import BackgroundBlobs from "@/components/resume/BackgroundBlobs";
import resumeData from "@/data/resume.json";
import projectsData from "@/data/projects.json";
import { Metadata } from "next";
import SectionContainer from "@/components/SectionContainer";

export const metadata: Metadata = {
   title: `${resumeData.personalInfo.name} - Resume`,
   description: resumeData.personalInfo.bio,
};

export default function ResumePage() {
   return (
      <div className="selection:bg-primary selection:text-primary-foreground font-sans transition-colors duration-300 relative">
         <BackgroundBlobs />
         <SectionContainer>
            <Hero
               name={resumeData.personalInfo.name}
               role={resumeData.personalInfo.role}
               bio={resumeData.personalInfo.bio}
               image={resumeData.personalInfo.image}
               email={resumeData.personalInfo.email}
            />

            <About content={resumeData.personalInfo.aboutMe} />

            <Experience items={resumeData.experience} />

            <Projects items={projectsData} />

            <Education items={resumeData.education} />

            <Skills
               core={resumeData.skills.core}
               tools={resumeData.skills.tools}
            />
         </SectionContainer>
      </div>
   );
}
