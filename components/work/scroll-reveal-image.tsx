"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export const ScrollRevealImage = ({ src, alt, width, height, className = "", wrapperClassName = "", delay = 0 }: { src: string; alt: string; width: number; height: number; className?: string; wrapperClassName?: string; delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`relative w-full transition-all duration-[600ms] ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      } ${wrapperClassName}`}
      style={{ 
        willChange: "opacity, transform",
        transitionDelay: `${delay}ms`
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    </div>
  );
};

