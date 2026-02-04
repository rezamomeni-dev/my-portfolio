"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer: "I specialize in React.js, Next.js, TypeScript, and Tailwind CSS. I also have extensive experience with Redux, Storybook, and various testing tools like Jest and Cypress.",
  },
  {
    question: "Do you follow specific architectural patterns?",
    answer: "Yes, I am a strong advocate for Clean Architecture and SOLID principles. I focus on building decoupled, testable, and maintainable systems that can evolve over time.",
  },
  {
    question: "How do you handle project management?",
    answer: "I thrive in Agile environments, utilizing Scrum or Kanban methodologies. I'm comfortable leading daily stand-ups, sprint planning, and conducting thorough code reviews.",
  },
  {
    question: "Are you available for freelance projects?",
    answer: "I am always open to discussing interesting new projects or collaborations. Feel free to reach out with your requirements and timeline.",
  },
];

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) => {
  return (
    <div className="border-b border-zinc-200 dark:border-zinc-800 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left hover:text-primary transition-colors group"
      >
        <span className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-primary">{question}</span>
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
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">FAQ</h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            Your professional questions, answered here.
          </p>
        </div>

        <div className="bg-zinc-50 dark:bg-zinc-900/30 rounded-[2rem] p-8 md:p-12 border border-zinc-200 dark:border-zinc-800">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
