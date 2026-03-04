"use client";

import { createContext, useCallback, useContext, useState } from "react";

type OverlayContextValue = {
  isOpen: boolean;
  openOverlay: () => void;
  closeOverlay: () => void;
};

const OverlayContext = createContext<OverlayContextValue | null>(null);

export function OverlayProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const openOverlay = useCallback(() => setIsOpen(true), []);
  const closeOverlay = useCallback(() => setIsOpen(false), []);
  return (
    <OverlayContext.Provider value={{ isOpen, openOverlay, closeOverlay }}>
      {children}
    </OverlayContext.Provider>
  );
}

export function useOverlay() {
  const ctx = useContext(OverlayContext);
  if (!ctx) throw new Error("useOverlay must be used within OverlayProvider");
  return ctx;
}
