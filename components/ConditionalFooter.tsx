"use client";

import { usePathname } from "next/navigation";
import { Footer } from "./Footer";

const PROJECT_PAGES = ["/ganson", "/tdp", "/strybuc", "/site-optics", "/design-challenge"];

export function ConditionalFooter() {
  const pathname = usePathname();
  const isProjectPage = pathname ? PROJECT_PAGES.some((p) => pathname.startsWith(p)) : false;
  if (isProjectPage) return null;
  return <Footer />;
}
