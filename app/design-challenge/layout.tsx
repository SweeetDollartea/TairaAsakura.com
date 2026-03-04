import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design Challenge — Taira Asakura",
  description: "Design Challenge",
};

export default function DesignChallengeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
