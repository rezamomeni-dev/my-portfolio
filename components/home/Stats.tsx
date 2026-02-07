"use client";

import { useInView, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import homeData from "@/data/home.json";
import SectionContainer from "@/components/shared/SectionContainer";

interface StatItemProps {
   label: string;
   valueString: string;
   index: number;
}

const StatItem = ({ label, valueString, index }: StatItemProps) => {
   const ref = useRef(null);
   const isInView = useInView(ref, {
      once: true,
      amount: "some",
      margin: "0px 0px -50px 0px",
   });
   const [displayValue, setDisplayValue] = useState(0);

   // Parse value and suffix (e.g., "8+" -> { value: 8, suffix: "+" })
   const numericMatch = valueString.match(/(\d+)(.*)/);
   const value = numericMatch ? parseInt(numericMatch[1]) : 0;
   const suffix = numericMatch ? numericMatch[2] : "";

   useEffect(() => {
      if (isInView) {
         const start = 0;
         const end = value;
         const duration = 600; // Faster count-up as requested
         let startTime: number | null = null;
         let frameId: number;

         const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function: easeOutExpo
            const easeOutExpo = (x: number): number => {
               return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
            };

            const easedProgress = easeOutExpo(progress);
            const current = Math.floor(easedProgress * (end - start) + start);

            setDisplayValue(current);

            if (progress < 1) {
               frameId = requestAnimationFrame(animate);
            }
         };

         frameId = requestAnimationFrame(animate);
         return () => cancelAnimationFrame(frameId);
      }
   }, [isInView, value]);

   return (
      <motion.div
         ref={ref}
         initial={{ opacity: 0, y: 30, scale: 0.9 }}
         whileInView={{ opacity: 1, y: 0, scale: 1 }}
         viewport={{ once: true }}
         transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: [0.21, 1.11, 0.81, 0.99],
         }}
         className="flex flex-col items-center justify-center p-6 border-zinc-200 dark:border-zinc-800 odd:border-r md:odd:border-r md:border-r md:last:border-r-0 group hover:bg-white dark:hover:bg-zinc-800/50 transition-colors duration-300 rounded-2xl"
      >
         <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-primary transition-colors"
         >
            {displayValue}
            {suffix}
         </motion.div>
         <div className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base text-center font-medium uppercase tracking-wider group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors">
            {label}
         </div>
      </motion.div>
   );
};

const Stats = () => {
   return (
      <section className="bg-zinc-50 dark:bg-zinc-900/30 border-y border-zinc-200 dark:border-zinc-800">
         <SectionContainer>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-8">
               {homeData.stats.map((stat, index) => (
                  <StatItem
                     key={index}
                     index={index}
                     label={stat.label}
                     valueString={stat.value}
                  />
               ))}
            </div>
         </SectionContainer>
      </section>
   );
};

export default Stats;
