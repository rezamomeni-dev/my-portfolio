import Hero from "@/components/home/Hero";
import dynamic from "next/dynamic";

const Stats = dynamic(() => import("@/components/home/Stats"));
const TechStack = dynamic(() => import("@/components/home/TechStack"));
const Services = dynamic(() => import("@/components/home/Services"));
const ProjectShowcase = dynamic(() => import("@/components/home/ProjectShowcase"));
const Testimonials = dynamic(() => import("@/components/home/Testimonials"));
const FAQ = dynamic(() => import("@/components/home/FAQ"));

export default function Home() {
   return (
      <div className="flex flex-col min-h-screen">
         <Hero />
         <Stats />
         <Services />
         <TechStack />
         <ProjectShowcase />
         <Testimonials />
         <FAQ />
      </div>
   );
}
