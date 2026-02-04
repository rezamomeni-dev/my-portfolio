"use client";

import { motion } from "framer-motion";
import { Image as ImageIcon } from "lucide-react";
import Image from "next/image";

interface GalleryItem {
  src: string;
  label: string;
  description: string;
}

interface ProjectGalleryProps {
  gallery: GalleryItem[];
}

const ProjectGallery = ({ gallery }: ProjectGalleryProps) => {
  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-3 mb-4">
             <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <ImageIcon className="w-6 h-6" />
             </div>
             <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Interface Previews</h2>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
             A closer look at the user experience and interface design.
          </p>
        </div>

        <div className="grid gap-12">
           {gallery.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                 <div className={`relative aspect-video rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-xl bg-zinc-100 dark:bg-zinc-800 group ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <Image
                      src={item.src}
                      alt={item.label}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                 </div>
                 <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">{item.label}</h3>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                       {item.description}
                    </p>
                 </div>
              </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
