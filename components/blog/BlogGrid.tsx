"use client";

import { BlogGridProps } from "@/types/blog";
import { BlogCard } from "./BlogCard";
import { AnimatePresence } from "framer-motion";

const BlogGrid = ({ posts }: BlogGridProps) => {
   return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         <AnimatePresence mode="popLayout">
            {posts.map((post, index) => (
               <BlogCard
                  key={`${post.link}-${index}`}
                  post={post}
                  index={index % 10}
               />
            ))}
         </AnimatePresence>
      </div>
   );
};

export default BlogGrid;
