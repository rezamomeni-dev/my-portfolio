import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import TechStack from "@/components/home/TechStack";
import Services from "@/components/home/Services";
import ProjectShowcase from "@/components/home/ProjectShowcase";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import ContactCTA from "@/components/home/ContactCTA";

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
      <ContactCTA />
    </div>
  );
}
