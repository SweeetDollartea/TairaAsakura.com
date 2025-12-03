"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { WaveLoader } from "@/components/ui/wave-loader";

export function RouteLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timeout);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 dark:bg-neutral-950/80 backdrop-blur-sm z-[9999] pointer-events-none">
      <WaveLoader message="Loading..." />
    </div>
  );
}

