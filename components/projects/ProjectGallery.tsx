"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Image as ImageIcon, FileText } from "lucide-react";
import Image from "next/image";
import Lightbox from "./Lightbox";
import clsx from "clsx";
import SectionContainer from "@/components/shared/SectionContainer";
import { ProjectGalleryItem } from "@/types/project";

interface ProjectGalleryProps {
   gallery: ProjectGalleryItem[];
   variant?: "light" | "zinc";
}

const ProjectGallery = ({ gallery, variant = "zinc" }: ProjectGalleryProps) => {
   const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
      null,
   );

   return (
      <section
         className={
            variant === "zinc"
               ? "bg-zinc-50 dark:bg-zinc-900/50"
               : "bg-white dark:bg-black"
         }
      >
         <SectionContainer>
            <div className="flex flex-col mb-16">
               <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                     <ImageIcon className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
                     Interface Previews
                  </h2>
               </div>
               <p className="text-zinc-600 dark:text-zinc-400 text-lg">
                  A closer look at the user experience and interface design.
               </p>
            </div>

            <div className="grid gap-24">
               {gallery.map((item, index) => {
                  const isPdf = item.src.toLowerCase().endsWith(".pdf") || item.type === "pdf";
                  return (
                     <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`grid md:grid-cols-2 gap-12 items-center justify-between ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                     >
                        <div
                           className={clsx(
                              "w-full",
                              index % 2 === 1 ? "md:order-2" : "",
                           )}
                        >
                           <div
                              onClick={() => setSelectedImageIndex(index)}
                              className={clsx(
                                 "relative rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-xl bg-zinc-100 dark:bg-zinc-800 group cursor-pointer",
                                 item.isMobile
                                    ? "aspect-9/18 max-w-75 max-h-140 mx-auto"
                                    : "aspect-video",
                              )}
                           >
                              {isPdf && !item.thumbnail ? (
                                 <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-100 dark:bg-zinc-800">
                                    <FileText className="w-16 h-16 text-zinc-400 mb-4" />
                                    <span className="text-zinc-500 font-medium">
                                       PDF Document
                                    </span>
                                 </div>
                              ) : (
                                 <Image
                                    src={item.thumbnail || item.src}
                                    alt={item.label}
                                    fill
                                    className={`${item.isMobile ? "object-contain" : "object-cover"} object-top group-hover:scale-105 transition-transform duration-700 `}
                                 />
                              )}
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                                 <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 dark:bg-zinc-900/90 p-3 rounded-full shadow-lg text-zinc-900 dark:text-white">
                                    {isPdf ? (
                                       <FileText className="w-6 h-6" />
                                    ) : (
                                       <ImageIcon className="w-6 h-6" />
                                    )}
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className={index % 2 === 1 ? "md:order-1" : ""}>
                           <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                              {item.label}
                           </h3>
                           <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                              {item.description}
                           </p>
                        </div>
                  </motion.div>
               );
            })}
            </div>
         </SectionContainer>

         <Lightbox
            isOpen={selectedImageIndex !== null}
            onClose={() => setSelectedImageIndex(null)}
            images={gallery}
            currentIndex={selectedImageIndex ?? 0}
            onNavigate={(index) => setSelectedImageIndex(index)}
         />
      </section>
   );
};

export default ProjectGallery;
