"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import homeData from "@/data/home.json";
import SectionContainer from "@/components/shared/SectionContainer";

const Testimonials = () => {
   const { testimonials } = homeData;

   return (
      <section className="py-16 md:py-24 bg-zinc-50 dark:bg-zinc-900/30">
         <SectionContainer>
            <div className="text-center mb-16">
               <h2
                  className="text-4xl md:text-5xl font-bold mb-6"
                  dangerouslySetInnerHTML={{ __html: testimonials.title }}
               />
               <p className="text-zinc-600 dark:text-zinc-400 text-lg">
                  {testimonials.subtitle}
               </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
               {testimonials.items.map((t, index) => (
                  <motion.div
                     key={index}
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{
                        once: true,
                        amount: "some",
                        margin: "0px 0px -50px 0px",
                     }}
                     transition={{ duration: 0.5, delay: index * 0.1 }}
                     className="p-8 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm relative overflow-hidden group"
                  >
                     <Quote className="absolute -top-4 -right-4 w-24 h-24 text-zinc-100 dark:text-zinc-800 -rotate-12 group-hover:rotate-0 transition-transform duration-500" />
                     <div className="flex gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                           <Star
                              key={i}
                              className="w-5 h-5 fill-amber-400 text-amber-400"
                           />
                        ))}
                     </div>
                     <p className="text-zinc-700 dark:text-zinc-300 mb-8 relative z-10 italic">
                        &quot;{t.content}&quot;
                     </p>
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                           {t.name.charAt(0)}
                        </div>
                        <div>
                           <h4 className="font-bold text-zinc-900 dark:text-white">
                              {t.name}
                           </h4>
                           <p className="text-sm text-zinc-500 dark:text-zinc-400">
                              {t.role}
                           </p>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>
         </SectionContainer>
      </section>
   );
};

export default Testimonials;
