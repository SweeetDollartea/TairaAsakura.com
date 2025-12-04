"use client";

import { PortfolioAccordion } from "@/components/ui/portfolio-accordion";
import { Footer } from "@/components/ui/footer";
import { footerContent } from "@/lib/footer-config";

const items = [
  {
    id: "01",
    category: "E-Commerce",
    title: "Ganson Engineering",
    subtitle: "A streamlined BigCommerce redesign built for clarity, efficiency, and better conversions.",
    content: "I led a complete redesign of Ganson Engineering’s BigCommerce site, solving navigation issues and strengthening the shopping flow. The updated, user-centered experience increased customer clarity and contributed to a 25% reduction in cart abandonment.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    link: "/work/ganson-engineering",
  },
  {
    id: "02",
    category: "E-Commerce",
    title: "TDP & Cahaba Designs",
    subtitle: "Redesigning two Shopify storefronts with smarter navigation and a dramatically improved user journey.",
    content: "A complete visual refresh of the TDP and Cahaba Shopify experiences — cleaner UI, clearer structure, and a stronger brand presence — lowering bounce rate of the TDP's bounce rate from 65% to 35%.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2670&auto=format&fit=crop",
    link: "/work/tdp-cahaba",
  },
  {
    id: "03",
    category: "Mobile App",
    title: "Strybuc Industries",
    subtitle: "An end-to-end mobile app project—from discovery and UX design to prototype, AR measurement logic, and final App Store delivery.",
    content: "I redesigned Strybuc’s parts-identification workflow into a simple, intuitive mobile app. Users can snap photos, measure parts, and request replacements instantly. I managed everything from UX to launch across iOS and Android, increasing the communication rate between customers and sales reps by 20%.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2816&auto=format&fit=crop",
    link: "/work/strybuc-industries",
  },
  {
    id: "04",
    category: "E-Commerce",
    title: "Teak Warehouse",
    subtitle: "Coming Soon!",
    content: "",
    image: "https://images.unsplash.com/photo-1515023115689-582473487759?q=80&w=2670&auto=format&fit=crop",
    link: "#",
  }
];


export default function ProjectsPage() {
  return (
    <main className="min-h-screen w-full bg-white dark:bg-neutral-950 pt-32 pb-20 px-6 md:px-12">
      <div className="container mx-auto max-w-5xl">
        <div className="mt-8 mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight">
            Projects
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-xl">
            Modern design, delivered with clarity and consistency.
          </p>
        </div>
        
        <PortfolioAccordion items={items} />
      </div>
      <Footer {...footerContent} />
    </main>
  );
}
