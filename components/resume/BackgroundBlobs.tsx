"use client";

import React from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";

const BackgroundBlobs = () => {
   return (
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
         <LazyMotion features={domAnimation}>
            <m.div
               initial={false}
               animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.55, 0.8],
                  x: [0, 50, 0],
                  y: [0, 30, 0]
               }}
               transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut"
               }}
               className="absolute -top-20 -left-20 w-96 h-96 bg-primary/20 blur-[100px] rounded-full will-change-transform transform-gpu"
            />

            <m.div
               initial={false}
               animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.8, 0.1, 0.8],
                  x: [0, -30, 0],
                  y: [0, 50, 0]
               }}
               transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
               }}
               className="absolute top-1/2 -right-20 w-[500px] h-[500px] bg-indigo-500/10 blur-[100px] rounded-full will-change-transform transform-gpu"
            />

            <m.div
               initial={false}
               animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 0.2, 0.7],
                  x: [0, 40, 0],
                  y: [0, -40, 0]
               }}
               transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 4
               }}
               className="absolute -bottom-20 left-1/3 w-80 h-80 bg-primary/15 blur-[100px] rounded-full will-change-transform transform-gpu"
            />
         </LazyMotion>
      </div>
   );
};

export default BackgroundBlobs;
