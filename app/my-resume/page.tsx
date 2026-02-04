import Header from "@/components/resume/Header";
import Hero from "@/components/resume/Hero";
import About from "@/components/resume/About";
import Experience from "@/components/resume/Experience";
import Projects from "@/components/resume/Projects";
import Education from "@/components/resume/Education";
import Skills from "@/components/resume/Skills";
import Footer from "@/components/resume/Footer";
import resumeData from "@/data/resume.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${resumeData.personalInfo.name} - Resume`,
  description: resumeData.personalInfo.bio,
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white selection:bg-white selection:text-black font-sans">
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          @page {
            margin: 15mm;
          }
          body {
            background: white !important;
            color: black !important;
          }
          .print\\:hidden {
            display: none !important;
          }
          section {
            page-break-inside: avoid;
            padding-top: 1rem !important;
            padding-bottom: 1rem !important;
          }
          h1, h2, h3, h4, p, span, li {
            color: black !important;
          }
          .bg-zinc-900, .bg-zinc-950, .bg-black, .bg-\\[\\#09090b\\] {
            background: transparent !important;
            border-color: #ddd !important;
          }
          .border-zinc-800 {
            border-color: #ddd !important;
          }
          .text-zinc-400, .text-zinc-500, .text-zinc-600 {
            color: #444 !important;
          }
          a {
            text-decoration: none !important;
            color: black !important;
          }
          /* Ensure text is selectable and crisp */
          * {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `}} />

      <Header name={resumeData.personalInfo.name} />

      <main className="max-w-screen-xl mx-auto">
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
      </main>

      <Footer
        name={resumeData.personalInfo.name}
        socials={{
          github: resumeData.personalInfo.github,
          linkedin: resumeData.personalInfo.linkedin,
          twitter: resumeData.personalInfo.twitter,
          email: resumeData.personalInfo.email
        }}
      />
    </div>
  );
}
