"use client";

import { motion } from "framer-motion";
import {
   Code,
   Layout,
   Zap,
   Users,
   LucideIcon,
} from "lucide-react";
import homeData from "@/data/home.json";

const iconMap: Record<string, LucideIcon> = {
   "Frontend Architecture": Code,
   "UI/UX Development": Layout,
   "Performance Optimization": Zap,
   "Technical Leadership": Users,
};

const stylesMap: Record<string, { bg: string; text: string }> = {
   "Frontend Architecture": { bg: "bg-blue-500/10", text: "text-blue-500" },
   "UI/UX Development": { bg: "bg-purple-500/10", text: "text-purple-500" },
   "Performance Optimization": {
      bg: "bg-amber-500/10",
      text: "text-amber-500",
   },
   "Technical Leadership": {
      bg: "bg-emerald-500/10",
      text: "text-emerald-500",
   },
};

const Services = () => {
   const { services } = homeData;

   return (
      <section className="py-16 md:py-24 bg-zinc-50 dark:bg-zinc-900/50">
         <div className="max-w-5xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
               <div className="max-w-2xl">
                  <h2
                     className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-white"
                     dangerouslySetInnerHTML={{ __html: services.title }}
                  />
                  <p className="text-zinc-600 dark:text-zinc-400 text-lg">
                     {services.subtitle}
                  </p>
               </div>
               {/* <button className="text-primary font-medium flex items-center gap-2 hover:gap-3 transition-all">
             View All Services <ArrowUpRight className="w-5 h-5" />
          </button> */}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
               {services.items.map((service, index) => {
                  const Icon = iconMap[service.title] || Code;
                  const styles = stylesMap[service.title] || {
                     bg: "bg-primary/10",
                     text: "text-primary",
                  };

                  return (
                     <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: "some", margin: "0px 0px -50px 0px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="group p-8 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all"
                     >
                        <div
                           className={`w-14 h-14 ${styles.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                        >
                           <Icon className={`w-7 h-7 ${styles.text}`} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white">
                           {service.title}
                        </h3>
                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                           {service.description}
                        </p>
                        <div className="h-1 w-0 group-hover:w-full bg-primary transition-all duration-500" />
                     </motion.div>
                  );
               })}
            </div>
         </div>
      </section>
   );
};

export default Services;
