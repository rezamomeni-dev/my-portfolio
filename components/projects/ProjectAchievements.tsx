"use client";

import { motion } from "framer-motion";
import {
   Trophy,
   Mail,
   Timer,
   Users,
   TrendingUp,
   Zap,
   DollarSign,
} from "lucide-react";
import SectionContainer from "@/components/shared/SectionContainer";
import { ProjectAchievement } from "@/types/project";

interface ProjectAchievementsProps {
   achievements: ProjectAchievement[];
}

const getIcon = (title: string) => {
   const t = title.toLowerCase();
   if (t.includes("email") || t.includes("mail"))
      return <Mail className="w-6 h-6" />;
   if (t.includes("turnaround") || t.includes("time") || t.includes("faster"))
      return <Timer className="w-6 h-6" />;
   if (t.includes("user") || t.includes("adoption") || t.includes("growth"))
      return <Users className="w-6 h-6" />;
   if (t.includes("growth") || t.includes("scale"))
      return <TrendingUp className="w-6 h-6" />;
   if (t.includes("performance") || t.includes("boost") || t.includes("fast"))
      return <Zap className="w-6 h-6" />;
   if (
      t.includes("transaction") ||
      t.includes("volume") ||
      t.includes("money") ||
      t.includes("$")
   )
      return <DollarSign className="w-6 h-6" />;
   return <Trophy className="w-6 h-6" />;
};

const ProjectAchievements = ({ achievements }: ProjectAchievementsProps) => {
   if (!achievements || achievements.length === 0) return null;

   return (
      <section className="bg-white dark:bg-black">
         <SectionContainer>
            <div className="flex flex-col mb-16">
               <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                     <Trophy className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
                     Key Achievements
                  </h2>
               </div>
               <p className="text-zinc-600 dark:text-zinc-400 text-lg">
                  Quantifiable results and impact delivered during this project.
               </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {achievements.map((achievement, index) => (
                  <motion.div
                     key={index}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: index * 0.1 }}
                     className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-primary/50 transition-all group"
                  >
                     <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform shadow-sm">
                        {getIcon(achievement.title)}
                     </div>
                     <div className="text-4xl font-bold text-zinc-900 dark:text-white mb-2">
                        {achievement.metric}
                     </div>
                     <div className="text-lg font-bold text-zinc-900 dark:text-white mb-3">
                        {achievement.title}
                     </div>
                     <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {achievement.description}
                     </p>
                  </motion.div>
               ))}
            </div>
         </SectionContainer>
      </section>
   );
};

export default ProjectAchievements;
