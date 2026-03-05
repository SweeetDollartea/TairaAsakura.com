"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function useScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const revealEls = document.querySelectorAll("[data-reveal]");
    if (!revealEls.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0 }
    );

    revealEls.forEach((el) => {
      const delay = parseInt(el.getAttribute("data-reveal-delay") ?? "0", 10);
      if (delay) {
        (el as HTMLElement).style.transitionDelay = `${delay}ms`;
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);
}
