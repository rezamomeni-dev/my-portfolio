"use client";

import { m  } from "framer-motion";

const BlogHeader = () => {
   return (
      <div className="mb-12 md:mb-16 text-center pt-16 md:pt-24">
         <m.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
         >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 text-sm font-medium mb-6">
               <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
               </span>
               Curated Updates
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-6">
               Frontend <span className="text-primary italic">Pulse</span>
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto px-4">
               The latest insights, tutorials, and news from the world&apos;s
               top frontend engineering blogs. Stay ahead of the curve with
               curated content.
            </p>
         </m.div>
      </div>
   );
};

export default BlogHeader;
