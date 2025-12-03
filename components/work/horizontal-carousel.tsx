"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ScrollRevealImage } from "./scroll-reveal-image";

type CarouselImage = {
  src: string;
  alt: string;
};

type HorizontalCarouselProps = {
  images: CarouselImage[];
  title: string;
  description: string;
};

export const HorizontalCarousel = ({ 
  images, 
  title, 
  description 
}: HorizontalCarouselProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);

      // Calculate active index using center-based detection
      const container = scrollContainerRef.current;
      const items = Array.from(container.children) as HTMLElement[];

      if (items.length > 0) {
        const viewportCenter = scrollLeft + clientWidth / 2;

        let closestIndex = 0;
        let closestDistance = Infinity;

        items.forEach((item, index) => {
          const rect = item.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();

          // Calculate the center of each image relative to scrollLeft
          const itemCenter = (rect.left - containerRect.left) + rect.width / 2 + scrollLeft;

          const distance = Math.abs(itemCenter - viewportCenter);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        });

        setActiveIndex(closestIndex);
      }
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScroll();
      container.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScroll);
      }
      window.removeEventListener('resize', checkScroll);
    };
  }, [images]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth / 2; // Scroll by half container width
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const firstItem = scrollContainerRef.current.children[0] as HTMLElement;
      if (firstItem) {
        const itemWidth = firstItem.offsetWidth;
        const gap = 24; // 1.5rem (gap-6)
        const scrollPos = index * (itemWidth + gap);
        scrollContainerRef.current.scrollTo({
          left: scrollPos,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <div className="w-full mt-20">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3">
          {title}
        </h3>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl leading-relaxed">
          {description}
        </p>
      </div>

      <div className="relative group">
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto overflow-y-hidden gap-6 scrollbar-hide snap-x snap-mandatory h-[300px] md:h-[400px] lg:h-[500px] items-center"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
          }}
        >
          {images.map((image, index) => (
            <div 
              key={image.src} 
              className="relative shrink-0 snap-start h-full w-auto"
            >
               <ScrollRevealImage 
                   src={image.src}
                   alt={image.alt}
                   width={800}
                   height={600}
                   className="h-full w-auto object-contain rounded-lg"
                   wrapperClassName="h-full w-auto"
                   delay={index * 100} 
               />
            </div>
          ))}
        </div>

        {/* Navigation Overlay */}
        <div className="absolute inset-0 flex items-center justify-between pointer-events-none z-10 px-3">
            <button 
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className="pointer-events-auto p-3 rounded-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm shadow-lg border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white opacity-0 group-hover:opacity-100 group-hover:disabled:opacity-35 disabled:cursor-default disabled:pointer-events-none transition-opacity"
                aria-label="Scroll left"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            <button 
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className="pointer-events-auto p-3 rounded-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm shadow-lg border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white opacity-0 group-hover:opacity-100 group-hover:disabled:opacity-35 disabled:cursor-default disabled:pointer-events-none transition-opacity"
                aria-label="Scroll right"
            >
                <ChevronRight className="w-6 h-6" />
            </button>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center gap-[0.35rem] mt-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-[7px] h-[7px] rounded-full transition-all duration-200 ${
              index === activeIndex 
                ? "bg-[#000000] dark:bg-white scale-[1.15]" 
                : "bg-[#bfbfbf] dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

