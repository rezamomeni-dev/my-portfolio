"use client";

import { m, AnimatePresence  } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import homeData from "@/data/home.json";
import SectionContainer from "@/components/shared/SectionContainer";
import { FAQItemProps, HomeData } from "@/types/home";

const typedHomeData = homeData as HomeData;

const FAQItem = ({
   question,
   answer,
   isOpen,
   onClick
}: FAQItemProps) => {
   return (
      <div className="border-b border-zinc-200 dark:border-zinc-800 last:border-0">
         <button
            onClick={onClick}
            className="w-full py-6 flex items-center justify-between text-left hover:text-primary transition-colors group"
         >
            <span className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-primary">
               {question}
            </span>
            <div className="flex-shrink-0 ml-4">
               {isOpen ? (
                  <Minus className="w-6 h-6 text-primary" />
               ) : (
                  <Plus className="w-6 h-6 text-zinc-400 group-hover:text-primary" />
               )}
            </div>
         </button>
         <AnimatePresence>
            {isOpen && (
               <m.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
               >
                  <p className="pb-8 text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed max-w-3xl">
                     {answer}
                  </p>
               </m.div>
            )}
         </AnimatePresence>
      </div>
   );
};

const FAQ = () => {
   const { faq } = typedHomeData;
   const [openIndex, setOpenIndex] = useState<number | null>(0);

   return (
      <section className="py-16 md:py-24 bg-white dark:bg-black">
         <SectionContainer>
            <div className="text-center mb-12 md:mb-16">
               <h2 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-white">
                  {faq.title}
               </h2>
               <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
                  {faq.subtitle}
               </p>
            </div>

            <div className="bg-zinc-50 dark:bg-zinc-900/30 rounded-[2rem] p-6 md:p-12 border border-zinc-200 dark:border-zinc-800">
               {faq.items.map((item, index) => (
                  <FAQItem
                     key={index}
                     question={item.question}
                     answer={item.answer}
                     isOpen={openIndex === index}
                     onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                     }
                  />
               ))}
            </div>
         </SectionContainer>
      </section>
   );
};

export default FAQ;
