"use client";

import { motion } from "framer-motion";
import { ExternalLink, Calendar, Tag } from "lucide-react";
import { BlogPost } from "@/lib/blog-feeds";

interface BlogCardProps {
   post: BlogPost;
   index: number;
}

export const BlogCard = ({ post, index }: BlogCardProps) => {
   const date = new Date(post.isoDate).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
   });

   return (
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, amount: 0.1 }}
         transition={{ duration: 0.4, delay: index * 0.05 }}
         whileHover={{ y: -5 }}
         className="group relative flex flex-col h-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
      >
         <div className="p-6 flex flex-col h-full">
            <div className="flex items-center gap-2 mb-3">
               <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                  {post.source}
               </span>
               <span className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400">
                  <Calendar className="w-3 h-3" />
                  {date}
               </span>
            </div>

            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
               <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="after:absolute after:inset-0"
               >
                  {post.title}
               </a>
            </h3>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-3 flex-grow">
               {post.contentSnippet}
            </p>

            <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800">
               <div className="flex items-center gap-1.5">
                  <Tag className="w-3 h-3 text-zinc-400" />
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">
                     {post.category}
                  </span>
               </div>
               <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-primary transition-colors" />
            </div>
         </div>
      </motion.div>
   );
};
