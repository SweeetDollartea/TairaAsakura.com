import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ganson — Taira Asakura",
  description: "Optimizing the BigCommerce Path-to-Purchase for Ganson",
};

export default function GansonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
