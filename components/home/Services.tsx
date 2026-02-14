"use client";

import { m } from "framer-motion";
import { Code, Layout, Zap, Users, LucideIcon, Rocket } from "lucide-react";
import homeData from "@/data/home.json";
import SectionContainer from "@/components/shared/SectionContainer";

/**
 * Maps service titles to appropriate Lucide icons using keyword matching.
 * This ensures the UI stays consistent even if the JSON titles are slightly modified.
 */
const getIconByTitle = (title: string): LucideIcon => {
   const t = title.toLowerCase();
   if (t.includes("architecture") || t.includes("scalable")) return Code;
   if (t.includes("performance") || t.includes("optimization")) return Zap;
   if (t.includes("ui") || t.includes("design")) return Layout;
   if (t.includes("leadership") || t.includes("mentoring")) return Users;
   return Rocket; // Fallback icon
};

/**
 * Returns color-specific styles based on the service category.
 * Tailored for a balanced look in both light and dark modes.
 */
const getStylesByTitle = (title: string) => {
   const t = title.toLowerCase();
   if (t.includes("architecture"))
      return { bg: "bg-blue-500/10", text: "text-blue-500" };
   if (t.includes("performance"))
      return { bg: "bg-amber-500/10", text: "text-amber-500" };
   if (t.includes("ui") || t.includes("design"))
      return { bg: "bg-purple-500/10", text: "text-purple-500" };
   if (t.includes("leadership"))
      return { bg: "bg-emerald-500/10", text: "text-emerald-500" };
   return { bg: "bg-primary/10", text: "text-primary" };
};

const Services = () => {
   const { services } = homeData;

   return (
      <section className="bg-zinc-50 dark:bg-zinc-900/50 overflow-hidden">
         <SectionContainer>
            {/* Section Header with Reveal Animation */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
               <div className="max-w-2xl">
                  <m.h2
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-white leading-tight"
                     dangerouslySetInnerHTML={{ __html: services.title }}
                  />
                  <m.p
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.1 }}
                     className="text-zinc-600 dark:text-zinc-400 text-lg"
                  >
                     {services.subtitle}
                  </m.p>
               </div>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-8">
               {services.items.map((service, index) => {
                  const Icon = getIconByTitle(service.title);
                  const styles = getStylesByTitle(service.title);

                  return (
                     <m.div
                        key={index}
                        initial={{ y: 10 }}
                        whileInView={{ y: 0 }}
                        viewport={{
                           once: true,
                           amount: 0.2,
                           margin: "0px 0px -50px 0px",
                        }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="group p-8 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all"
                     >
                        {/* Interactive Background Glow on Hover */}
                        <div
                           className={`absolute top-0 right-0 w-32 h-32 ${styles.bg} opacity-0 group-hover:opacity-100 blur-3xl transition-opacity rounded-full -mr-16 -mt-16`}
                        />

                        {/* Icon Container with Subtle Rotation */}
                        <div
                           className={`relative w-16 h-16 ${styles.bg} rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform duration-300`}
                        >
                           <Icon className={`w-8 h-8 ${styles.text}`} />
                        </div>

                        {/* Content Area */}
                        <div className="relative">
                           <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white group-hover:text-primary transition-colors">
                              {service.title}
                           </h3>
                           <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                              {service.description}
                           </p>
                        </div>

                        {/* Animated Bottom Progress Line */}
                        <div className="h-1 w-0 group-hover:w-full bg-primary transition-all duration-500" />
                     </m.div>
                  );
               })}
            </div>
         </SectionContainer>
      </section>
   );
};

export default Services;
