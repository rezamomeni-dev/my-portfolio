"use client";

import { motion } from "framer-motion";

export const BlogHeader = () => {
  return (
    <div className="mb-12 text-center pt-24">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
          Frontend <span className="text-primary">Pulse</span>
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto px-4">
          The latest insights, tutorials, and news from the world&apos;s top frontend engineering blogs.
          Stay ahead of the curve with curated content.
        </p>
      </motion.div>
    </div>
  );
};
