import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Distribution Point — Taira Asakura",
  description: "The Distribution Point & Cahaba Designs",
};

export default function TDPLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
