"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { CaseStudySection } from "@/components/work/case-study-section";
import { ScrollRevealImage } from "@/components/work/scroll-reveal-image";
import { HorizontalCarousel } from "@/components/work/horizontal-carousel";
import { ScrollingGallery } from "@/components/work/scrolling-gallery";
import { PromptGallery } from "@/components/work/prompt-gallery";
import { Footer } from "@/components/ui/footer";
import { footerContent } from "@/lib/footer-config";

const mapImages = (files: string[], prefix: string, label: string) =>
  files.map((file, index) => ({
    src: `/images/${prefix}/${file}.png`,
    alt: `${label} ${index + 1}`,
  }));

export default function GansonEngineeringPage() {
  const productLandingImages = mapImages(
    ["g15", "g16", "g17", "g18", "g19"],
    "Ganson",
    "Product Landing Page"
  );

  const productDetailImages = mapImages(
    ["g20", "g21", "g22", "g23", "g24"],
    "Ganson",
    "Product Detail Page"
  );

  const searchImages = mapImages(
    ["g25", "g26", "g27"],
    "Ganson",
    "Search Results Page"
  );

  const ancillaryImages = mapImages(
    ["g28", "g29", "g30", "g31", "g32", "g33"],
    "Ganson",
    "Ancillary Page"
  );

  return (
    <main className="min-h-screen w-full bg-white dark:bg-neutral-950 pt-32 pb-20 px-6 md:px-12">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex flex-col md:flex-row gap-6 items-start md:items-center"
        >
          <div className="relative w-40 h-40 md:w-52 md:h-52 shrink-0">
             <Image 
                src="/images/Ganson/ganson.png" 
                alt="Ganson Engineering Logo" 
                fill
                className="object-contain"
             />
          </div>
          <div>
             <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight mb-2">
               Ganson Engineering
             </h1>
             <p className="text-lg text-neutral-500 dark:text-neutral-400">
               B2C & B2B E-Commerce Website • Printing and Supplies
             </p>
          </div>
        </motion.div>

        {/* Content Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-12 lg:gap-24 mb-32"
        >
            
            {/* Left Column: Details */}
            <div className="md:col-span-6 space-y-8">
                <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-900 dark:text-white">
                    Details
                </h2>
                <div className="space-y-6 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    <p>
                        Ganson Engineering is a leading provider of industrial printing equipment, serving businesses across various industries with high-quality machinery and solutions.
                    </p>
                    <p>
                        I led the full creative redesign of the online storefront, transforming it into a modern, user-centric e-commerce experience. The redesign focused on improving product discoverability, streamlining the purchasing process, and creating an intuitive interface that reflects the company's expertise in industrial printing technology.
                    </p>
                </div>
                
                <div className="pt-4">
                    <a 
                        href="https://ganson-store.com/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white font-medium transition-all hover:border-green-600 hover:text-green-600 dark:hover:border-green-500 dark:hover:text-green-500 group"
                    >
                        Visit Website
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                </div>
            </div>

            {/* Middle Column: Team */}
            <div className="md:col-span-3 space-y-8">
                <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-900 dark:text-white">
                    Team
                </h2>
                <ul className="space-y-3 text-lg text-neutral-600 dark:text-neutral-400">
                    <li>Client Project</li>
                    <li>BigCommerce</li>
                    <li>Full Redesign</li>
                </ul>
            </div>

            {/* Right Column: My Role */}
            <div className="md:col-span-3 space-y-8">
                 <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-900 dark:text-white">
                    My Role
                </h2>
                <ul className="space-y-3 text-lg text-neutral-600 dark:text-neutral-400">
                    <li>Web Design</li>
                    <li>E-commerce UX/UI</li>
                    <li>Visual Design</li>
                    <li>User Research</li>
                </ul>
            </div>
        </motion.div>

        {/* New Case Study Sections */}
        <div className="flex flex-col">
          <CaseStudySection number="001" title="User Stories">
            <p>
              The old Ganson Engineering site had major usability issues — users struggled to navigate the large product catalog, the visual identity felt outdated, and analytics showed many product views but very few checkouts. Through discovery sessions, we uncovered core problems like an inconsistent design system, unclear pathways to products, and friction during checkout.
            </p>
            <p className="mt-6">
              I then mapped guest and logged-in user stories to understand the essential tasks users needed: browsing categories, filtering products, viewing details, adding items to cart, checking out, and accessing order or shipping info. These insights guided a simplified information architecture and a refreshed visual direction aimed at making products easier to find and creating a smoother, more trustworthy buying experience.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
               <div className="w-full">
                  <ScrollRevealImage 
                    src="/images/Ganson/Guest-Brainwriting.jpg" 
                    alt="Guest Brainwriting User Flow" 
                    width={800}
                    height={1200}
                    className="w-full h-auto rounded-lg"
                  />
               </div>
               <div className="w-full">
                   <ScrollRevealImage 
                    src="/images/Ganson/Loggedin-Brainwriting.jpg" 
                    alt="Logged-in Brainwriting User Flow" 
                    width={800}
                    height={1200}
                    className="w-full h-auto rounded-lg"
                    delay={100}
                  />
               </div>
            </div>
          </CaseStudySection>

          <CaseStudySection number="002" title="User Flows">
            <p>
              Understanding the user flow was essential for identifying where users dropped off and how to streamline the buying experience. I mapped both guest and logged-in paths from landing on a category page to completing checkout. This helped me identify pain points and opportunities for improvement.            </p>
            <p className="mt-6">
              By visualizing each step, I could see exactly where to reduce unnecessary actions, clarify choices, and support returning customers with a faster, more efficient checkout process. This flow became the foundation for improving navigation, simplifying forms, and creating a smoother end-to-end shopping experience.
            </p>
            
            <div className="mt-12 w-full">
              <ScrollRevealImage 
                src="/images/Ganson/user-flow.jpg" 
                alt="User Flow Diagram" 
                width={1600}
                height={900}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </CaseStudySection>

          <CaseStudySection number="003" title="Prototypes">
            <p>
              I began by prototyping the core pages that drive the shopping experience — the Home Page, Product Listing Page, and Product Detail Page. These pages carry the most weight in helping users understand the catalog, compare options, and move toward checkout, so refining them first was essential.
            </p>
            <p className="mt-6">
            By redesigning these core screens first, I established a cleaner structure, more intuitive navigation, and a consistent visual language. Once the foundation was solid, I expanded into ancillary pages such as Contact Us, About Us, Blog pages.
            </p>
            
            <ScrollingGallery />
          </CaseStudySection>

          <CaseStudySection number="004" title="The Delivery">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8 lg:gap-12 items-center">
              <div className="md:col-span-2">
                <p>
                  Once the core experience and supporting pages were fully prototyped, I focused on delivering a polished, production-ready design system. This included exporting clean assets, providing clear layout specs, and ensuring every page — from the homepage to the smallest subcategory — aligned with the updated visual direction. The final handoff presented the redesigned experience exactly as intended: modern, consistent, and optimized for real users.
                </p>
              </div>
              <div className="relative w-full md:col-span-3">
                <ScrollRevealImage 
                  src="/images/Ganson/g13.png" 
                  alt="The Delivery - Design System Handoff" 
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            <HorizontalCarousel 
              images={productLandingImages}
              title="Product Landing Pages"
              description="The redesigned Product Listing Pages create a cleaner, more structured browsing experience that helps users quickly find the right products."
            />

            <HorizontalCarousel 
              images={productDetailImages}
              title="Product Detail Pages"
              description="The Product Detail Page was refined to present information more clearly, helping users understand the product quickly and move confidently toward checkout."
            />

            <HorizontalCarousel 
              images={searchImages}
              title="Search Results Page"
              description="The Search Results Page was simplified to highlight relevant products clearly and help users find what they need with less friction."
            />

            <HorizontalCarousel 
              images={ancillaryImages}
              title="Ancillary Pages"
              description="The ancillary pages — including Contact Us, About Us, and Shipping — were streamlined to support the core experience while giving users quick access to essential information."
            />

            <PromptGallery />
          </CaseStudySection>

          <CaseStudySection number="005" title="Conclusion">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8 lg:gap-12 items-center">
              <div className="md:col-span-2">
                <p>
                  After producing 85 high-fidelity pages, holding five design calls, and spending a month and a half partnering closely with the client, I transformed their biggest pain points into a seamless user experience — ultimately helping increase their conversion rate, reduce cart abandonment by 25%, and strengthen overall customer confidence.
                </p>
              </div>
              <div className="relative w-full md:col-span-3">
                <ScrollRevealImage 
                  src="/images/Ganson/g47-1.png" 
                  alt="Ganson Engineering Project Conclusion" 
                  width={1600}
                  height={900}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </CaseStudySection>
        </div>

      </div>
      <Footer {...footerContent} />
    </main>
  );
}
