"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const PROJECT_PAGES = ["ganson", "tdp", "strybuc", "site-optics", "design-challenge"];

export function ScrollRestore({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  useScrollReveal();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const segment = pathname?.split("/").filter(Boolean).pop() || "index";
    const key = `scrollPos_${segment}`;

    const saveScroll = () => {
      try {
        sessionStorage.setItem(key, String(window.scrollY || 0));
      } catch {}
    };

    const restoreScroll = () => {
      try {
        const saved = sessionStorage.getItem(key);
        if (saved !== null) {
          const y = parseInt(saved, 10);
          if (!isNaN(y) && y > 0) window.scrollTo(0, y);
        }
      } catch {}
    };

    history.scrollRestoration = "manual";

    const handleScroll = () => {
      let t: ReturnType<typeof setTimeout>;
      return () => {
        clearTimeout(t);
        t = setTimeout(saveScroll, 150);
      };
    };
    const debouncedSave = handleScroll();

    const onScroll = () => {
      clearTimeout((globalThis as unknown as { _scrollT?: ReturnType<typeof setTimeout> })._scrollT);
      (globalThis as unknown as { _scrollT?: ReturnType<typeof setTimeout> })._scrollT = setTimeout(saveScroll, 150);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pagehide", saveScroll);
    window.addEventListener("beforeunload", saveScroll);

    const isReturning = (() => {
      try {
        return sessionStorage.getItem("returningFromProject");
      } catch {
        return null;
      }
    })();
    const isProjectPage = pathname ? PROJECT_PAGES.some((p) => pathname.includes(p)) : false;

    if (isProjectPage) {
      window.scrollTo(0, 0);
    } else if (isReturning) {
      try {
        document.documentElement.classList.add("returning-from-project");
        sessionStorage.removeItem("returningFromProject");
      } catch {}
      requestAnimationFrame(restoreScroll);
    } else {
      setTimeout(restoreScroll, 100);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pagehide", saveScroll);
      window.removeEventListener("beforeunload", saveScroll);
    };
  }, [pathname]);

  return <>{children}</>;
}
