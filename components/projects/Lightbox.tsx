"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useCallback } from "react";
import { ProjectGalleryItem } from "@/types/project";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: ProjectGalleryItem[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

const Lightbox = ({ isOpen, onClose, images, currentIndex, onNavigate }: LightboxProps) => {
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-sm"
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
            className="absolute left-4 md:left-8 z-10 p-4 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={`relative w-full h-full flex items-center justify-center ${currentImage.isMobile ? "max-w-md mx-auto" : ""}`}
          >
            {currentImage.src.toLowerCase().endsWith(".pdf") ||
            currentImage.type === "pdf" ? (
              <iframe
                src={`${currentImage.src}#toolbar=0&navpanes=0&scrollbar=0`}
                className="w-full h-full rounded-lg bg-white"
                title={currentImage.label}
              />
            ) : (
              <Image
                src={currentImage.src}
                alt={currentImage.label}
                fill
                className="object-contain"
                priority
              />
            )}
          </motion.div>

          <button
            onClick={handleNext}
            className="absolute right-4 md:right-8 z-10 p-4 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white"
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
