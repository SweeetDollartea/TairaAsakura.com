"use client";

import { motion } from "framer-motion";

export const CaseStudySection = ({ number, title, children, className = "" }: { number: string; title: string; children: React.ReactNode; className?: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`py-24 md:py-24 lg:py-32 border-t border-neutral-200 dark:border-neutral-800 ${className}`}
    >
      <div className="flex flex-col gap-8 mb-12">
        <span className="font-mono text-lg md:text-xl font-bold text-neutral-400 dark:text-neutral-600">
          {number}
        </span>
        <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] leading-tight font-light tracking-tight text-neutral-900 dark:text-white">
          {title}
        </h2>
      </div>
      <div className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
        {children}
      </div>
    </motion.div>
  );
};

