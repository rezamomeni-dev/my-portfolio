"use client";

import { motion } from "framer-motion";
import { Code, Layout, Zap, Users, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Frontend Architecture",
    description: "Designing scalable and maintainable frontend systems using modern frameworks and Clean Architecture principles.",
    icon: Code,
    color: "bg-blue-500",
  },
  {
    title: "UI/UX Development",
    description: "Crafting pixel-perfect, responsive, and highly interactive user interfaces that provide exceptional user experiences.",
    icon: Layout,
    color: "bg-purple-500",
  },
  {
    title: "Performance Optimization",
    description: "Boosting application speed and efficiency through code splitting, lazy loading, and advanced caching strategies.",
    icon: Zap,
    color: "bg-amber-500",
  },
  {
    title: "Technical Mentorship",
    description: "Leading development teams, conducting code reviews, and mentoring junior developers to foster best practices.",
    icon: Users,
    color: "bg-emerald-500",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-white">
               Excellence in Tailored <span className="text-primary italic">Solutions</span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg">
               Delivering high-quality software solutions by combining technical expertise with creative vision.
            </p>
          </div>
          <button className="text-primary font-medium flex items-center gap-2 hover:gap-3 transition-all">
             View All Services <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-8 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all"
            >
              <div className={`w-14 h-14 ${service.color}/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className={`w-7 h-7 ${service.color.replace('bg-', 'text-')}`} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white">{service.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="h-1 w-0 group-hover:w-full bg-primary transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
