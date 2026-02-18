"use client";

import { useState, useEffect } from "react";
import { m, useReducedMotion, type Variants } from "framer-motion";
import { Code, Layout, Zap, Users, LucideIcon, Rocket } from "lucide-react";
import homeData from "@/data/home.json";
import SectionContainer from "@/components/shared/SectionContainer";

/** Framer Motion requires cubic-bezier arrays to be a 4-number tuple, not number[]. */
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Maps service titles to appropriate Lucide icons using keyword matching.
 */
const getIconByTitle = (title: string): LucideIcon => {
   const t = title.toLowerCase();
   if (t.includes("architecture") || t.includes("scalable")) return Code;
   if (t.includes("performance") || t.includes("optimization")) return Zap;
   if (t.includes("ui") || t.includes("design")) return Layout;
   if (t.includes("leadership") || t.includes("mentoring")) return Users;
   return Rocket;
};

/**
 * Returns color-specific styles based on the service category.
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

/**
 * Hook that returns true when the pointer device supports hover (i.e. not a
 * touchscreen). Used to conditionally apply hover-only animations.
 */
const useIsHoverDevice = () => {
   const [isHover, setIsHover] = useState(true);

   useEffect(() => {
      if (typeof window === "undefined") return;
      setIsHover(
         window.matchMedia("(hover: hover) and (pointer: fine)").matches
      );
   }, []);

   return isHover;
};

const Services = () => {
   const { services } = homeData;
   const prefersReducedMotion = useReducedMotion();
   const isHoverDevice = useIsHoverDevice();

   /**
    * Shared fade-up variant used for both header lines and cards.
    * `custom` receives the stagger index (i).
    * On mobile we tighten the stagger (60ms vs 100ms) so the last card
    * doesn't feel delayed on a short viewport.
    */
   const fadeUp: Variants = {
      hidden: {
         opacity: 0,
         y: prefersReducedMotion ? 0 : 12,
      },
      visible: (i: number) => ({
         opacity: 1,
         y: 0,
         transition: {
            duration: prefersReducedMotion ? 0 : 0.45,
            ease: EASE,
            delay: i * (isHoverDevice ? 0.1 : 0.06),
         },
      }),
   };

   /**
    * Header text slides in from the left on desktop only.
    * On mobile it fades straight up to avoid content jumping off-screen.
    */
   const headerReveal: Variants = {
      hidden: {
         opacity: 0,
         x: prefersReducedMotion ? 0 : isHoverDevice ? -20 : 0,
         y: prefersReducedMotion ? 0 : isHoverDevice ? 0 : 10,
      },
      visible: (i: number) => ({
         opacity: 1,
         x: 0,
         y: 0,
         transition: {
            duration: prefersReducedMotion ? 0 : 0.5,
            ease: EASE,
            delay: i * 0.1,
         },
      }),
   };

   return (
      <section className="bg-zinc-50 dark:bg-zinc-900/50 overflow-hidden">
         <SectionContainer>
            {/* Section Header */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
               <div className="max-w-2xl">
                  <m.h2
                     variants={headerReveal}
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true, amount: 0.5 }}
                     custom={0}
                     className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-white leading-tight"
                     dangerouslySetInnerHTML={{ __html: services.title }}
                  />
                  <m.p
                     variants={headerReveal}
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true, amount: 0.5 }}
                     custom={1}
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
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                           once: true,
                           // A higher `amount` on mobile ensures the card is
                           // actually visible before animating in, preventing
                           // cards from popping in off-screen.
                           amount: isHoverDevice ? 0.2 : 0.15,
                           // Remove the negative margin on mobile — it caused
                           // cards near the fold to animate before scrolling to them.
                           margin: isHoverDevice ? "0px 0px -50px 0px" : "0px",
                        }}
                        custom={index}
                        // Lift on hover — desktop only. On touch devices this
                        // would linger after a tap and look broken.
                        whileHover={isHoverDevice ? { y: -5 } : undefined}
                        // Tap feedback replaces hover lift on touch screens:
                        // a subtle scale-down gives satisfying press feedback.
                        whileTap={
                           !isHoverDevice && !prefersReducedMotion
                              ? { scale: 0.975 }
                              : undefined
                        }
                        className="group relative p-8 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all"
                     >
                        {/* Glow — hover only, so hidden on touch */}
                        <div
                           className={`absolute top-0 right-0 w-32 h-32 ${styles.bg} opacity-0 group-hover:opacity-100 blur-3xl transition-opacity rounded-full -mr-16 -mt-16`}
                        />

                        {/* Icon — rotation on hover (desktop) or tap pulse (mobile) */}
                        <m.div
                           className={`relative w-16 h-16 ${styles.bg} rounded-2xl flex items-center justify-center mb-8 transition-transform duration-300`}
                           whileHover={
                              isHoverDevice ? { rotate: 6 } : undefined
                           }
                           whileTap={
                              !isHoverDevice && !prefersReducedMotion
                                 ? { scale: 1.15 }
                                 : undefined
                           }
                        >
                           <Icon className={`w-8 h-8 ${styles.text}`} />
                        </m.div>

                        {/* Content */}
                        <div className="relative">
                           <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white group-hover:text-primary transition-colors">
                              {service.title}
                           </h3>
                           <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                              {service.description}
                           </p>
                        </div>

                        {/* Bottom progress line — hover/focus on desktop,
                            always-visible (short) indicator on mobile */}
                        <div
                           className={`h-1 bg-primary transition-all duration-500 ${
                              isHoverDevice
                                 ? "w-0 group-hover:w-full"
                                 : "w-8 group-active:w-full"
                           }`}
                        />
                     </m.div>
                  );
               })}
            </div>
         </SectionContainer>
      </section>
   );
};

export default Services;
