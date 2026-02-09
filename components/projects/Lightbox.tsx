"use client";

import { m, AnimatePresence  } from "framer-motion";
import { X, ChevronLeft, ChevronRight, FileText } from "lucide-react";
import Image from "next/image";
import { useEffect, useCallback } from "react";
import { LightboxProps } from "@/types/project";

const Lightbox = ({
   isOpen,
   onClose,
   images,
   currentIndex,
   onNavigate
}: LightboxProps) => {
   const handlePrevious = useCallback(() => {
      onNavigate((currentIndex - 1 + images.length) % images.length);
   }, [currentIndex, images.length, onNavigate]);

   const handleNext = useCallback(() => {
      onNavigate((currentIndex + 1) % images.length);
   }, [currentIndex, images.length, onNavigate]);

   useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
         if (!isOpen) return;
         if (e.key === "Escape") onClose();
         if (e.key === "ArrowLeft") handlePrevious();
         if (e.key === "ArrowRight") handleNext();
      };

      if (isOpen) {
         document.body.style.overflow = "hidden";
         window.addEventListener("keydown", handleKeyDown);
      } else {
         document.body.style.overflow = "unset";
      }

      return () => {
         document.body.style.overflow = "unset";
         window.removeEventListener("keydown", handleKeyDown);
      };
   }, [isOpen, onClose, handlePrevious, handleNext]);

   const currentImage = images[currentIndex];

   return (
      <AnimatePresence>
         {isOpen && (
            <m.div
               initial={{ }}
               animate={{ }}
               exit={{ }}
               className="fixed top-0 left-0 inset-0 z-100 flex flex-col bg-black/95 backdrop-blur-sm w-screen h-screen"
            >
               {/* Header */}
               <div className="flex items-center justify-between p-6 text-white">
                  <div className="flex flex-col">
                     <h3 className="text-xl font-bold">{currentImage.label}</h3>
                     <p className="text-sm text-zinc-400">
                        {currentIndex + 1} / {images.length}
                     </p>
                  </div>
                  <button
                     onClick={onClose}
                     className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                     aria-label="Close Lightbox"
                  >
                     <X className="w-6 h-6" />
                  </button>
               </div>

               {/* Main content */}
               <div className="flex-1 relative flex items-center justify-center p-4 md:p-12 overflow-hidden">
                  <button
                     onClick={handlePrevious}
                     className="absolute top-0 lg:top-auto left-4 md:left-8 z-50 p-2 md:p-4 rounded-full bg-white/10 hover:bg-white/12 transition-colors text-white"
                     aria-label="Previous Image"
                  >
                     <ChevronLeft className="w-8 h-8" />
                  </button>

                  <m.div
                     key={currentIndex}
                     initial={{ scale: 0.9, x: 20 }}
                     animate={{ scale: 1, x: 0 }}
                     exit={{ scale: 0.9, x: -20 }}
                     transition={{
                        type: "spring",
                        damping: 25,
                        stiffness: 200
                     }}
                     className={`relative w-full h-full flex items-center justify-center max-w-7xl ${currentImage.isMobile ? "max-w-md mx-auto" : ""}`}
                  >
                     {currentImage.src.toLowerCase().endsWith(".pdf") ||
                     currentImage.type === "pdf" ? (
                        <div className="flex flex-col items-center justify-center p-8 text-center bg-white rounded-lg h-full w-full">
                           <FileText className="w-16 h-16 text-zinc-400 mb-4" />
                           {/* <p className="text-zinc-900 font-medium mb-4">
                              PDF preview not available in this browser.
                           </p> */}
                           <a
                              href={currentImage.src}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
                           >
                              Open PDF in new tab
                           </a>
                        </div>
                     ) : (
                        <Image
                           src={currentImage.src}
                           alt={currentImage.label}
                           fill
                           sizes="100vw"
                           className="object-contain"
                           priority
                        />
                     )}
                  </m.div>

                  <button
                     onClick={handleNext}
                     className="absolute top-0 lg:top-auto right-4 md:right-8 z-50 p-2 md:p-4 rounded-full bg-white/10 hover:bg-white/12 transition-colors text-white"
                     aria-label="Next Image"
                  >
                     <ChevronRight className="w-8 h-8" />
                  </button>
               </div>

               {/* Footer */}
               <div className="p-8 bg-gradient-to-t from-black to-transparent text-white text-center">
                  <p className="max-w-3xl mx-auto text-lg text-zinc-300 leading-relaxed">
                     {currentImage.description}
                  </p>
               </div>
            </m.div>
         )}
      </AnimatePresence>
   );
};

export default Lightbox;
