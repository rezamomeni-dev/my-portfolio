"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    role: "Engineering Manager",
    content: "Mohammad is an exceptional developer who consistently delivers high-quality code. His expertise in React and Next.js was instrumental in our project's success.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    role: "Product Designer",
    content: "Working with Mohammad was a pleasure. He has a great eye for detail and perfectly translated our designs into functional, high-performance interfaces.",
    rating: 5,
  },
  {
    name: "Mike Johnson",
    role: "CEO, TechFlow",
    content: "A true professional. Mohammad's leadership and technical knowledge helped us migrate our legacy system to a modern stack ahead of schedule.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-900/30">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Review From Our <span className="text-primary italic">Customers</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
             What professionals say about working with me.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm relative overflow-hidden group"
            >
              <Quote className="absolute -top-4 -right-4 w-24 h-24 text-zinc-100 dark:text-zinc-800 -rotate-12 group-hover:rotate-0 transition-transform duration-500" />
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
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
                  <h4 className="font-bold text-zinc-900 dark:text-white">{t.name}</h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
