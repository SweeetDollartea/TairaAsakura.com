"use client";

import { useOverlay } from "@/contexts/OverlayContext";
import { useEffect } from "react";

/**
 * Listens for clicks on .section-work__card and opens the project detail overlay.
 * Uses event delegation so the homepage can stay a server component.
 */
export function OverlayTrigger() {
  const { openOverlay } = useOverlay();

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(".section-work__card");
      if (!target) return;
      if (target instanceof HTMLAnchorElement && target.getAttribute("href")) return;
      e.preventDefault();
      e.stopPropagation();
      openOverlay();
    };
    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, [openOverlay]);

  return null;
}
