import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Site Optics — Taira Asakura",
  description: "Strategic Objectives for SiteOptics",
};

export default function SiteOpticsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
