"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { BlogPost } from "@/lib/blog-feeds";
import { Loader2 } from "lucide-react";
import SectionContainer from "@/components/SectionContainer";

export default function BlogPage() {
   const [posts, setPosts] = useState<BlogPost[]>([]);
   const [page, setPage] = useState(1);
   const [loading, setLoading] = useState(false);
   const [hasMore, setHasMore] = useState(true);
   const observerTarget = useRef(null);

   const fetchPosts = useCallback(async (pageNum: number) => {
      // Avoid multiple simultaneous requests for the same page
      setLoading(true);
      try {
         const response = await fetch(`/api/blog?page=${pageNum}&limit=12`);
         const data = await response.json();

         if (data.posts) {
            setPosts((prev) =>
               pageNum === 1 ? data.posts : [...prev, ...data.posts],
            );
            setHasMore(data.hasMore);
         }
      } catch (error) {
         console.error("Error fetching posts:", error);
      } finally {
         setLoading(false);
      }
   }, []);

   // Initial fetch
   useEffect(() => {
      fetchPosts(1);
   }, [fetchPosts]);

   // Infinite scroll observer
   useEffect(() => {
      const observer = new IntersectionObserver(
         (entries) => {
            if (entries[0].isIntersecting && hasMore && !loading) {
               setPage((prev) => prev + 1);
            }
         },
         { threshold: 0.1 },
      );

      const currentTarget = observerTarget.current;
      if (currentTarget) {
         observer.observe(currentTarget);
      }

      return () => {
         if (currentTarget) {
            observer.unobserve(currentTarget);
         }
      };
   }, [hasMore, loading]);

   // Fetch more when page changes
   useEffect(() => {
      if (page > 1) {
         fetchPosts(page);
      }
   }, [page, fetchPosts]);

   return (
      <div className="min-h-screen bg-zinc-50 dark:bg-black transition-colors duration-300">
         <SectionContainer className="pb-16 md:pb-24">
            <BlogHeader />

            <BlogGrid posts={posts} />

            <div
               ref={observerTarget}
               className="mt-12 flex justify-center py-8"
            >
               {loading ? (
                  <div className="flex flex-col items-center gap-2">
                     <Loader2 className="w-8 h-8 text-primary animate-spin" />
                     <p className="text-sm text-zinc-500">
                        Loading more amazing content...
                     </p>
                  </div>
               ) : !hasMore && posts.length > 0 ? (
                  <p className="text-zinc-500 font-medium">
                     You&apos;ve reached the end of the pulse.
                  </p>
               ) : null}
            </div>
         </SectionContainer>
      </div>
   );
}
