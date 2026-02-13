"use client";

import React from "react";
import { m } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionContainer from "../shared/SectionContainer";
import { CertificatesProps } from "@/types/resume";

const Certificates = ({ items }: CertificatesProps) => {
   return (
      <SectionContainer id="certificates">
         <m.div
            initial={{ y: 10 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
         >
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">
               Certificates
            </h2>
            <div className="h-px bg-zinc-200 dark:bg-zinc-800 w-full mb-12"></div>

            <div className="space-y-12">
               {items.map((item, index) => (
                  <div
                     key={index}
                     className="flex flex-col md:flex-row gap-8 md:gap-24"
                  >
                     <div className="md:w-48 shrink-0">
                        <span className="text-zinc-500 text-sm font-medium uppercase tracking-wider">
                           {item.date}
                        </span>
                        {item.credentialId && (
                           <p className="text-zinc-400 dark:text-zinc-600 text-xs mt-1">
                              ID: {item.credentialId}
                           </p>
                        )}
                     </div>

                     <div className="flex-1 group">
                        <div className="flex items-center justify-between mb-1">
                           <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-primary transition-colors">
                              {item.title}
                           </h3>
                           {item.credentialUrl && (
                              <a
                                 href={item.credentialUrl}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1 text-sm font-medium"
                              >
                                 Show credential <ExternalLink className="w-4 h-4" />
                              </a>
                           )}
                        </div>
                        <p className="text-zinc-600 dark:text-zinc-400 font-medium mb-3">
                           {item.organization}
                        </p>

                        {item.skills && item.skills.length > 0 && (
                           <div className="flex flex-wrap gap-2">
                              {item.skills.map((skill) => (
                                 <span
                                    key={skill}
                                    className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-md text-[10px] text-zinc-600 dark:text-zinc-400 font-medium"
                                 >
                                    {skill}
                                 </span>
                              ))}
                           </div>
                        )}
                     </div>
                  </div>
               ))}
            </div>
         </m.div>
      </SectionContainer>
   );
};

export default Certificates;
