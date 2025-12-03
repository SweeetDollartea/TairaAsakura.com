"use client";

import { WaveLoader } from "@/components/ui/wave-loader";

export default function GlobalLoadingScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-neutral-950 z-[9999]">
      <WaveLoader bars={5} message="Loading..." messagePlacement="bottom" />
    </div>
  );
}

