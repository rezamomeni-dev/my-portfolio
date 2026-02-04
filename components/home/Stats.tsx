"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface StatItemProps {
  label: string;
  value: number;
  suffix?: string;
}

const StatItem = ({ label, value, suffix = "" }: StatItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const start = 0;
      const end = value;
      const duration = 2000;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(progress * (end - start) + start);
        setDisplayValue(current);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6 border-r border-zinc-200 dark:border-zinc-800 last:border-r-0">
      <div className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-2">
        {displayValue}{suffix}
      </div>
      <div className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base font-medium uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-20 bg-zinc-50 dark:bg-zinc-900/30 border-y border-zinc-200 dark:border-zinc-800">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatItem label="Years Experience" value={4} suffix="+" />
          <StatItem label="Projects Completed" value={15} suffix="+" />
          <StatItem label="Technologies" value={10} suffix="+" />
          <StatItem label="Happy Clients" value={100} suffix="%" />
        </div>
      </div>
    </section>
  );
};

export default Stats;
