"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { CaseStudySection } from "@/components/work/case-study-section";
import { ScrollRevealImage } from "@/components/work/scroll-reveal-image";
import { HorizontalCarousel } from "@/components/work/horizontal-carousel";
import { Footer } from "@/components/ui/footer";
import { footerContent } from "@/lib/footer-config";

const mapImages = (files: string[], label: string) =>
  files.map((file, index) => ({
    src: `/images/TDP&Cahaba/${file}.png`,
    alt: `${label} ${index + 1}`,
  }));

export default function TDPCahabaPage() {
  const homepageConcepts = mapImages(
    ["t13", "t14", "t15", "t16", "t17", "t18"],
    "Homepage concept"
  );

  const productFlows = mapImages(
    ["t19", "t20", "t21", "t22"],
    "Product storytelling layout"
  );

  const editorialMoments = mapImages(
    ["t13", "t14"],
    "Editorial narrative"
  );

  const productLandingPages = mapImages(
    ["t15", "t16", "t17"],
    "Product Landing & Detail Pages"
  );

  const myAccountImages = mapImages(
    ["t18", "t19"],
    "My Accounts"
  );

  const prototypeGalleryImages = [
    "t1",
    "t2",
    "t3",
    "t4",
    "t5",
    "t6",
    "t7",
    "t8",
    "t9",
    "t10",
    "t11",
    "t12",
  ];

  const duplicatedPrototypeGallery = [
    ...prototypeGalleryImages,
    ...prototypeGalleryImages,
    ...prototypeGalleryImages,
    ...prototypeGalleryImages,
  ];

  const myAccountRow1 = ["t18", "t19", "t20", "t21", "t22", "t23", "t24", "t25", "t26"];
  const myAccountRow2 = ["t27", "t28", "t29", "t30", "t18", "t19", "t20", "t21", "t22"];

  const duplicatedAccountRow1 = [...myAccountRow1, ...myAccountRow1, ...myAccountRow1, ...myAccountRow1];
  const duplicatedAccountRow2 = [...myAccountRow2, ...myAccountRow2, ...myAccountRow2, ...myAccountRow2];

  const cahabaRow1 = ["c2", "c3", "c4", "c5", "c6", "c7"];
  const cahabaRow2 = ["c8", "c9", "c10", "c11", "c12", "c13"];

  const duplicatedCahabaRow1 = [...cahabaRow1, ...cahabaRow1, ...cahabaRow1, ...cahabaRow1];
  const duplicatedCahabaRow2 = [...cahabaRow2, ...cahabaRow2, ...cahabaRow2, ...cahabaRow2];

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
          <div className="flex gap-4">
            <div className="relative w-40 h-40 md:w-52 md:h-52 shrink-0">
              <Image
                src="/images/TDP&Cahaba/TDP-1.png"
                alt="TDP storefront collage"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-40 h-40 md:w-52 md:h-52 shrink-0">
              <Image
                src="/images/TDP&Cahaba/Cahaba-1.png"
                alt="Cahaba Designs collage"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight mb-2">
              TDP &amp; Cahaba Designs
            </h1>
            <p className="text-lg text-neutral-500 dark:text-neutral-400">
              Dual-brand Shopify experience • Outdoor Living &amp; Interior Finishes
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
          {/* Details */}
          <div className="md:col-span-6 space-y-8">
            <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-900 dark:text-white">
              Details
            </h2>
            <div className="space-y-6 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              <p>
                As the creative lead for both The Distribution Point (TDP) and Cahaba Designs, 
                I supported their full website redesigns within the Shopify ecosystem. Most of 
                the focus for this project centered on TDP, where the priority was enhancing B2B 
                functionality and modernizing the overall experience to better serve their 
                wholesale customers. 
              </p>
              <p>
                In under 4 weeks, I guided the visual direction, selected the themes for both 
                brands, and helped shape the structure of their new online storefronts to create 
                cleaner navigation, stronger product discovery, and a more intuitive purchasing flow.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href="https://www.thedistributionpoint.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white font-medium transition-all hover:border-[#da291c] hover:text-[#da291c] dark:hover:border-green-500 dark:hover:text-green-500 group"
              >
                Visit TDP
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="https://www.cahabadesigns.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white font-medium transition-all hover:border-[#277594] hover:text-[#277594] dark:hover:border-green-500 dark:hover:text-green-500 group"
              >
                Visit Cahaba Designs
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          {/* Team */}
          <div className="md:col-span-3 space-y-8">
            <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-900 dark:text-white">
              Team
            </h2>
            <ul className="space-y-3 text-lg text-neutral-600 dark:text-neutral-400">
              <li>Client Project</li>
              <li>Shopify Themes</li>
              <li>Full Redesign + Customizations</li>
            </ul>
          </div>

          {/* My Role */}
          <div className="md:col-span-3 space-y-8">
            <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-900 dark:text-white">
              My Role
            </h2>
            <ul className="space-y-3 text-lg text-neutral-600 dark:text-neutral-400">
              <li>B2B + B2C Experience Strategy</li>
              <li>Visual &amp; Interaction Design</li>
              <li>Design Systems</li>
              <li>Shopify UIUX</li>
            </ul>
          </div>
        </motion.div>

        {/* Case Study Sections */}
        <div className="flex flex-col">
          <CaseStudySection number="001" title="Discovery & Foundation of the Build">
            {/* Row 1: Intro Text */}
            <div className="w-full mb-16">
              <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                My process began with a deep exploration of native Shopify themes to understand which ones could support two very different storefronts without requiring two entirely separate builds. I compared each theme’s navigation flexibility, homepage modules, product storytelling layouts, and account tooling, evaluating how well they aligned with TDP’s B2B workflows versus Cahaba’s inspiration-driven catalog experience.
                <br /><br />
                Themes like Empire and Warehouse offered strong B2B foundations—clean grids, robust filtering, and utility-focused layouts—while others leaned more toward editorial merchandising, which better matched Cahaba’s visual direction.
                </p>
              </div>

            {/* Row 2: Full-width tdp0-1.jpg */}
            <div className="w-full mb-16">
                <ScrollRevealImage
                src="/images/TDP&Cahaba/tdp0-1.jpg"
                alt="TDP Mapping Part 1"
                width={2000}
                height={1200}
                className="w-full h-auto rounded-lg object-contain"
              />
            </div>

            {/* Row 3: Loggedin.jpg & Guestuser.jpg */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              <ScrollRevealImage
                src="/images/TDP&Cahaba/Loggedin.jpg"
                alt="Logged-In User Stories"
                width={1600}
                height={1200}
                className="w-full h-auto rounded-lg object-contain"
              />
                <ScrollRevealImage
                src="/images/TDP&Cahaba/Guestuser.jpg"
                alt="Guest User Stories"
                width={1600}
                height={1200}
                className="w-full h-auto rounded-lg object-contain"
                />
              </div>

            {/* Row 4: Second Text Block */}
            <div className="w-full mb-16">
              <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                Once I identified the themes with the right structural strengths, I shifted focus to TDP’s requirements specifically, analyzing the differences between its guest and logged-in experiences. Guest users only see a limited informational view, while logged-in customers unlock pricing, real-time warehouse stock numbers, customized shipping behavior, and expanded navigation options. Understanding this split was essential in ensuring the chosen theme could flex across access levels while maintaining consistent UX patterns.
                </p>
              </div>

            {/* Row 5: Full-width tdp0-2.jpg */}
            <div className="w-full mb-16">
              <ScrollRevealImage
                src="/images/TDP&Cahaba/tdp0-2.jpg"
                alt="TDP Mapping Part 2"
                width={2000}
                height={1200}
                className="w-full h-auto rounded-lg object-contain"
              />
            </div>

            {/* Row 6: Cahaba + Shopify side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              <ScrollRevealImage
                src="/images/TDP&Cahaba/cahabauserstory.jpg"
                alt="Cahaba User Stories"
                width={1600}
                height={1200}
                className="w-full h-auto rounded-lg object-contain"
              />
              <ScrollRevealImage
                src="/images/TDP&Cahaba/Shopifytheme.jpg"
                alt="Shopify Theme Selection"
                width={1600}
                height={1200}
                className="w-full h-auto rounded-lg object-contain"
              />
            </div>

            {/* Row 7: Third Text Block */}
            <div className="w-full">
              <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                Understanding the user stories for both TDP and Cahaba Designs — and the clear differences between guest users and logged-in B2B customers — was essential to defining each site’s purpose. Through this process, several pain points surfaced: a weak online presence that made it hard to convert sign-ups into customers, and outdated B2B features where navigation and UX no longer aligned with their business goals. These insights guided the redesign and informed the functionality needed to support their users effectively.
              </p>
            </div>
          </CaseStudySection>

          <CaseStudySection number="002" title="Prototypes">
            <p>
              With a clear understanding of each site’s user stories and business goals, I translated these insights into high-fidelity Figma prototypes for both TDP and Cahaba Designs. These prototypes solidified the structure, interactions, and B2B functionality needed to support their users and served as the foundation for the final Shopify builds.
            </p>

            <div className="w-full overflow-hidden mt-20">
                <div
                  className="flex gap-8 animate-scroll-right"
                style={{
                  width: "max-content",
                }}
                >
                {duplicatedPrototypeGallery.map((img, index) => (
                      <div
                    key={`${img}-${index}`}
                    className="relative h-[clamp(350px,45vh,520px)] aspect-auto shrink-0 overflow-hidden"
                      >
                        <img
                          src={`/images/TDP&Cahaba/${img}.png`}
                      alt={`Theme image ${index + 1}`}
                          className="h-full w-auto object-cover"
                        />
                      </div>
                ))}
              </div>

              <style jsx>{`
                @keyframes scroll-right {
                  0% {
                    transform: translateX(-50%);
                  }
                  100% {
                    transform: translateX(0);
                  }
                }
                .animate-scroll-right {
                  animation: scroll-right 60s linear infinite;
                }
                @media (max-width: 768px) {
                  .animate-scroll-right {
                    animation-duration: 40s;
                  }
                }
              `}</style>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
              {/* Left Column: Text + tdp0-3 + tdp0-4 */}
              <div className="flex flex-col gap-20">
                <div className="w-full">
                  <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                    Understanding the value of strong design assets was key to keeping the entire system consistent across both TDP and Cahaba Designs. I created a clear set of reusable components — including color palettes, typography styles, spacing rules, and UI elements — to ensure every page aligned visually and functionally. By defining these assets early, I was able to prototype faster, maintain a cohesive look across 65+ high-fidelity screens, and make updates efficiently without breaking the overall design language. This asset system became the visual foundation and helped guide the development team to deliver the website in a timely matter.
                  </p>
                </div>

                <ScrollRevealImage
                  src="/images/TDP&Cahaba/tdp0-3.png"
                  alt="TDP layout 3"
                  width={1600}
                  height={1200}
                  className="w-full h-auto object-cover"
                />

                <ScrollRevealImage
                  src="/images/TDP&Cahaba/tdp0-4.png"
                  alt="TDP layout 4"
                  width={1600}
                  height={1200}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Right Column: tdp0-5 full height */}
              <div className="relative h-full w-full min-h-[500px] md:min-h-0">
                <ScrollRevealImage
                  src="/images/TDP&Cahaba/tdp0-5.png"
                  alt="TDP layout 5"
                  width={1600}
                  height={2000}
                  className="w-full h-full rounded-lg object-cover"
                  wrapperClassName="absolute inset-0 h-full w-full"
                />
              </div>
            </div>

          </CaseStudySection>

          <CaseStudySection number="003" title="The Delivery">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8 lg:gap-12 items-center">
              <div className="md:col-span-2">
                <p>
                  Bringing all the prototypes, assets, and user insights together, I translated the digital frames into a fully realized experience. Because this project had an accelerated timeline, I led design calls every other day to keep the client aligned, gather new requirements, and refine details that surfaced beyond the initial discovery phase. This tight feedback loop ensured we delivered a polished, functional product on time without compromising quality.
                </p>
              </div>
              <div className="relative w-full md:col-span-3">
                <ScrollRevealImage
                  src="/images/TDP&Cahaba/tdp-31-1.png"
                  alt="Final Shopify theme system"
                  width={1600}
                  height={900}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <HorizontalCarousel
              images={editorialMoments}
              title="Homepage for Logged-In Users & Guest Users"
              description="The homepage experience was adapted for both guest and logged-in users, ensuring each saw the navigation, actions, and content most relevant to their needs."
            />

            <HorizontalCarousel
              images={productLandingPages}
              title="Product Landing & Detail Pages"
              description="The Product Listing Page was redesigned to simplify filtering, improve product comparability, and make inventory visibility clearer for B2B buyers. The Product Detail Page highlights key specifications, pricing, and warehouse availability to help users make faster, more informed purchasing decisions."
            />

            <div className="space-y-4 mb-12">
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                My Accounts
              </h3>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-4xl">
                A dedicated MyAccount area was designed to support TDP’s B2B workflows, giving users clear access to profiles, addresses, invoice history, orders, and saved carts — all essential for fast, reliable day-to-day operations.
              </p>
            </div>

            <div className="w-full mt-12 overflow-hidden space-y-8">
              {/* Row 1 - Left to Right */}
              <div className="relative w-full flex overflow-hidden">
                <div
                  className="flex gap-8 animate-scroll-right"
                  style={{
                    width: "max-content",
                  }}
                >
                  {duplicatedAccountRow1.map((img, index) => (
                    <div
                      key={`row1-${index}`}
                      className="relative h-[clamp(250px,30vh,320px)] aspect-auto shrink-0 overflow-hidden"
                    >
                      <img
                        src={`/images/TDP&Cahaba/${img}.png`}
                        alt={`My Account screen ${index}`}
                        className="h-full w-auto object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 2 - Right to Left */}
              <div className="relative w-full flex overflow-hidden">
                <div
                  className="flex gap-8 animate-scroll-left"
                  style={{
                    width: "max-content",
                  }}
                >
                  {duplicatedAccountRow2.map((img, index) => (
                      <div
                      key={`row2-${index}`}
                      className="relative h-[clamp(250px,30vh,320px)] aspect-auto shrink-0 overflow-hidden"
                      >
                        <img
                          src={`/images/TDP&Cahaba/${img}.png`}
                        alt={`My Account screen ${index}`}
                          className="h-full w-auto object-cover"
                        />
                      </div>
                  ))}
                </div>
              </div>

              <style jsx>{`
                @keyframes scroll-left {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }
                @keyframes scroll-right {
                  0% {
                    transform: translateX(-50%);
                  }
                  100% {
                    transform: translateX(0);
                  }
                }
                .animate-scroll-left {
                  animation: scroll-left 60s linear infinite;
                }
                .animate-scroll-right {
                  animation: scroll-right 60s linear infinite;
                }
                @media (max-width: 768px) {
                  .animate-scroll-left,
                  .animate-scroll-right {
                    animation-duration: 40s;
                  }
                }
              `}</style>
            </div>

            {/* Cahaba Designs Section */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8 lg:gap-12 items-center mt-32">
              <div className="md:col-span-2 space-y-4">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                  Cahaba Designs
                </h3>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  It was equally important to deliver a polished experience for Cahaba Designs, ensuring their catalog-focused site remained simple, elegant, and optimized for mobile browsing.
                </p>
              </div>
              <div className="relative w-full md:col-span-3">
                <ScrollRevealImage
                  src="/images/TDP&Cahaba/c14-1.png"
                  alt="Cahaba Designs mobile experience"
                  width={1600}
                  height={900}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="w-full mt-12 overflow-hidden space-y-8">
              {/* Row 1 - Left to Right */}
              <div className="relative w-full flex overflow-hidden">
                <div
                  className="flex gap-8 animate-scroll-right"
                  style={{
                    width: "max-content",
                  }}
                >
                  {duplicatedCahabaRow1.map((img, index) => (
                    <div
                      key={`cahaba-row1-${index}`}
                      className="relative h-[clamp(250px,30vh,320px)] aspect-auto shrink-0 overflow-hidden"
                    >
                      <img
                        src={`/images/TDP&Cahaba/${img}.png`}
                        alt={`Cahaba design ${index}`}
                        className="h-full w-auto object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 2 - Right to Left */}
              <div className="relative w-full flex overflow-hidden">
                <div
                  className="flex gap-8 animate-scroll-left"
                  style={{
                    width: "max-content",
                  }}
                >
                  {duplicatedCahabaRow2.map((img, index) => (
                    <div
                      key={`cahaba-row2-${index}`}
                      className="relative h-[clamp(250px,30vh,320px)] aspect-auto shrink-0 overflow-hidden"
                    >
                      <img
                        src={`/images/TDP&Cahaba/${img}.png`}
                        alt={`Cahaba design ${index}`}
                        className="h-full w-auto object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <style jsx>{`
                @keyframes scroll-left {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }
                @keyframes scroll-right {
                  0% {
                    transform: translateX(-50%);
                  }
                  100% {
                    transform: translateX(0);
                  }
                }
                .animate-scroll-left {
                  animation: scroll-left 60s linear infinite;
                }
                .animate-scroll-right {
                  animation: scroll-right 60s linear infinite;
                }
                @media (max-width: 768px) {
                  .animate-scroll-left,
                  .animate-scroll-right {
                    animation-duration: 40s;
                  }
                }
              `}</style>
            </div>
          </CaseStudySection>

          <CaseStudySection number="004" title="Conclusion">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8 lg:gap-12 items-center">
              <div className="md:col-span-2">
                <p>
                After delivering 62 high-fidelity pages and leading nine design meetings, I launched two fully polished Shopify sites with custom B2B and catalog features. The redesign strengthened each brand’s online presence, improved customer awareness, and lowered the bounce rate from 65% to 35% — all while preserving the familiar flow their users relied on.
                </p>
              </div>
              <div className="relative w-full md:col-span-3">
                <ScrollRevealImage
                  src="/images/TDP&Cahaba/c15.png"
                  alt="TDP & Cahaba Conclusion"
                  width={1600}
                  height={900}
                  className="w-full h-auto rounded-lg"
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
