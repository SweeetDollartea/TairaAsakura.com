import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strybuc Industries — Taira Asakura",
  description: "Modernizing Hardware Identification with AR",
};

export default function StrybucLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
