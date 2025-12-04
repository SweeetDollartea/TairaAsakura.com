"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface PortfolioItem {
  id: string;
  title: string;
  subtitle?: string;
  category?: string;
  content?: string;
  image?: string;
  link?: string;
}

interface AccordionItemProps {
  item: PortfolioItem;
  isOpen: boolean;
  onHover: (id: string | null) => void;
  index: number;
}

const AccordionItem = ({ item, isOpen, onHover, index }: AccordionItemProps) => {
  const isGanson = item.id === "01";
  const isTdp = item.id === "02";
  const isStrybuc = item.id === "03";
  const isClickableCard = isGanson || isTdp || isStrybuc;
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleChange = () => setIsMobile(mediaQuery.matches);
    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile) {
      onHover(item.id);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      onHover(null);
    }
  };

  const handleCardClick = (e?: React.MouseEvent) => {
    if (isMobile) {
      e?.preventDefault();
      onHover(isOpen ? null : item.id);
    } else if (isClickableCard && item.link) {
      router.push(item.link);
    }
  };

  const cardContent = (
    <motion.div
      initial={false}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={isMobile || isClickableCard ? handleCardClick : undefined}
      className={cn(
        "group relative z-0 w-full cursor-pointer overflow-hidden border-b border-neutral-200 dark:border-neutral-800",
        "transition-colors duration-500 ease-in-out",
        isOpen ? "bg-neutral-50 dark:bg-neutral-900" : "bg-transparent"
      )}
    >
      <div className="relative z-10 flex w-full flex-col py-6 px-4 md:px-6 md:py-8">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col gap-1">
            {item.category && (
              <motion.span 
                className="text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400"
                animate={{ y: isOpen ? -4 : 0, opacity: isOpen ? 1 : 0.7 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {item.category}
              </motion.span>
            )}
            <motion.h3
              className={cn(
                "text-2xl md:text-4xl font-medium text-neutral-900 dark:text-white transition-colors duration-300",
                isOpen ? "text-black dark:text-white" : "text-neutral-600 dark:text-neutral-400"
              )}
              animate={{ y: isOpen ? -2 : 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {item.title}
            </motion.h3>
          </div>
          
          {/* Arrow indicator that rotates */}
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="ml-4 text-neutral-400"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
              className="overflow-hidden"
            >
              <div className="flex flex-col md:flex-row gap-8 pt-6 md:pt-8">
                {item.image && (
                  <div
                    className={
                      item.id === "01"
                        ? "relative h-auto w-full md:w-1/3 shrink-0 overflow-hidden rounded-lg bg-neutral-200 dark:bg-neutral-800"
                        : "relative h-48 w-full md:h-64 md:w-1/3 shrink-0 overflow-hidden rounded-lg bg-neutral-200 dark:bg-neutral-800"
                    }
                  >
                    <img
                      src={
                        item.id === "01"
                          ? "/images/Ganson/g48.png"
                          : item.id === "02"
                          ? "/images/TDP&Cahaba/tdp0-6.png"
                          : item.id === "03"
                          ? "/images/Strybuc/s34.png"
                          : item.id === "04"
                          ? "/images/TeakWarehouse/t1.png"
                          : item.image
                      }
                       alt={item.title}
                      className={item.id === "01" ? "w-full h-auto object-contain" : "h-full w-full object-cover"}
                     />
                  </div>
                )}
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="flex flex-col justify-between"
                >
                  <div>
                    {item.subtitle && (
                      <p className="mb-4 text-lg font-medium text-neutral-800 dark:text-neutral-200">
                        {item.subtitle}
                      </p>
                    )}
                    <p className="max-w-xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                      {item.content}
                    </p>
                  </div>
                  
                  {item.link && !isClickableCard && item.id !== "04" && (
                    <div className="mt-6">
                      <Link 
                        href={item.link}
                        className="text-sm font-semibold underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-black dark:decoration-neutral-700 dark:hover:decoration-white"
                      >
                        View Case Study
                      </Link>
                    </div>
                  )}

                  {isClickableCard && item.link && (
                    <div className="mt-6">
                      <Link 
                        href={item.link}
                        className="text-sm font-semibold underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-black dark:decoration-neutral-700 dark:hover:decoration-white"
                      >
                        Open Project
                      </Link>
                    </div>
                  )}
                </motion.div>
              </div>
              <div className="h-6" /> {/* Bottom spacing inside animation */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );

  return cardContent;
};

interface PortfolioAccordionProps {
  items: PortfolioItem[];
}

export function PortfolioAccordion({ items }: PortfolioAccordionProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="w-full divide-y divide-neutral-200 dark:divide-neutral-800 border-t border-neutral-200 dark:border-neutral-800">
      {items.map((item, index) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={hoveredId === item.id}
          onHover={setHoveredId}
          index={index}
        />
      ))}
    </div>
  );
}

