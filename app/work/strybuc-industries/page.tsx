"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { CaseStudySection } from "@/components/work/case-study-section";
import { ScrollRevealImage } from "@/components/work/scroll-reveal-image";
import { HorizontalCarousel } from "@/components/work/horizontal-carousel";
import { ScrollingGallery } from "@/components/work/scrolling-gallery";
import { Footer } from "@/components/ui/footer";
import { footerContent } from "@/lib/footer-config";

const mapImages = (files: string[], label: string) =>
  files.map((file, index) => ({
    src: `/images/Strybuc/${file}.png`,
    alt: `${label} ${index + 1}`,
  }));

export default function StrybucIndustriesPage() {
  const topRowImages = ["s20", "s21", "s22", "s23", "s24", "s25", "s26"];
  const bottomRowImages = ["s27", "s28", "s29", "s30", "s31", "s32", "s33"];
  const submissionRowImages = ["s13", "s14", "s15", "s16", "s17", "s18", "s19"];
  
  const duplicatedTopRow = [...topRowImages, ...topRowImages, ...topRowImages, ...topRowImages];
  const duplicatedBottomRow = [...bottomRowImages, ...bottomRowImages, ...bottomRowImages, ...bottomRowImages];
  const duplicatedSubmissionRow = [
    ...submissionRowImages,
    ...submissionRowImages,
    ...submissionRowImages,
    ...submissionRowImages,
  ];

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
                src="/images/Strybuc/Strybuc Logo 512.png" 
                alt="Strybuc Industries Logo" 
                fill
                className="object-contain"
             />
          </div>
          <div>
             <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight mb-2">
               Strybuc Industries
             </h1>
             <p className="text-lg text-neutral-500 dark:text-neutral-400">
               Mobile Application • Door & Window Replacement Hardware
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
                        Strybuc Industries is a wholesale distributor of window and door hardware, offering a wide selection of parts for builders, contractors, and manufacturers — and known for its large inventory and same-day shipping.
                    </p>
                    <p>
                        For this project, I managed the entire process end to end: I created and maintained the project timeline, led all design phases, and designed the full mobile app (for both Android and iOS) from concept to delivery. The result is a polished, functional app that supports Strybuc’s business needs and gives their customers a smoother, modern way to browse and order hardware.
                    </p>
                </div>
                
                <div className="pt-4 flex flex-wrap gap-3">
                    <a 
                        href="https://apps.apple.com/us/app/strybuc-industries/id6742978608" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white font-medium transition-all hover:border-[#1B9EF7] dark:hover:border-[#1B9EF7] hover:text-[#1B9EF7] dark:hover:text-[#1B9EF7] group"
                    >
                        Apple App Store
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                    <a 
                        href="https://play.google.com/store/apps/details?id=com.strybuc&hl=en" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white font-medium transition-all hover:border-[#34A853] dark:hover:border-[#34A853] hover:text-[#34A853] dark:hover:text-[#34A853] group"
                    >
                        Google Play Store
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
                    <li>Apple and Android App</li>
                    <li>App Development & Design</li>
                </ul>
            </div>

            {/* Right Column: My Role */}
            <div className="md:col-span-3 space-y-8">
                 <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-900 dark:text-white">
                    My Role
                </h2>
                <ul className="space-y-3 text-lg text-neutral-600 dark:text-neutral-400">
                    <li>Project Manager</li>
                    <li>App Design</li>
                </ul>
            </div>
        </motion.div>

        {/* New Case Study Sections */}
        <div className="flex flex-col">
          <CaseStudySection number="001" title="Understanding the Business Requirements">
            <p>
              To build Strybuc’s mobile application effectively, it was crucial for me to deeply understand the business requirements from the very beginning. I documented every detail during discovery calls — from technical constraints to workflow needs and user expectations — ensuring no requirement was overlooked. As the project manager, I provided weekly and sometimes daily updates to keep the client aligned with progress and upcoming milestones.
            </p>
            <p className="mt-6">
              To deliver on time and with accuracy, I created clear user stories and a detailed project timeline, allowing me to track dependencies, manage development phases, and ensure every task stayed on schedule.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
               <div className="w-full">
                  <ScrollRevealImage 
                    src="/images/Strybuc/notes.jpg" 
                    alt="Discovery Phase 1" 
                    width={800}
                    height={1200}
                    className="w-full h-auto rounded-lg"
                  />
               </div>
               <div className="w-full">
                   <ScrollRevealImage 
                    src="/images/Strybuc/timeline.png" 
                    alt="Discovery Phase 2" 
                    width={800}
                    height={1200}
                    className="w-full h-auto rounded-lg"
                    delay={100}
                  />
               </div>
            </div>
          </CaseStudySection>

          <CaseStudySection number="002" title="Designing a Clear and Purposeful User Flow">
            <p>
              A mobile app must guide users toward a clear end goal—and for Strybuc Industries, that goal centered around solving one core pain point: customers struggled to submit clear, accurate photos of their parts. This issue directly impacted the sales team’s ability to identify items and recommend the correct Strybuc replacements.
            </p>
            <p className="mt-6">
              One of the most critical sections of the new app is “Photograph Parts,” a feature designed to let users capture images of their existing window and door hardware. These photos go directly to a dedicated sales representative, who then provides product recommendations or compatible replacements from the Strybuc catalog.
            </p>
            
            <div className="mt-12 w-full space-y-6">
              <div className="w-full">
                <ScrollRevealImage
                  src="/images/Strybuc/loginflow1.jpg"
                  alt="Login User Flow"
                  width={1600}
                  height={900}
                  className="w-full h-auto rounded-lg"
                />
              </div>

              <div className="w-full space-y-4 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                <p>
                  To address the original problem, the redesigned app needed to:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li>Enable users to take high-quality, well-lit photos</li>
                  <li>Capture measurements and dimensions directly in the app</li>
                  <li>Create a seamless flow from capturing images → reviewing → sending</li>
                  <li>Ensure that the sales team receives clean, usable information every time</li>
                  <li>Allow both guest users and logged-in users to follow differing but intuitive paths</li>
                  <li>Maintain a fast, guided, low-friction experience across iOS and Android</li>
                </ul>
                <p>
                  Creating a detailed user flow was essential. By mapping every step—from pressing the camera button to sending the request—I ensured that the experience remained simple, predictable, and aligned with Strybuc’s operational needs. This user flow became the backbone of the mobile application’s design and functionality, ensuring that both customer experience and sales team efficiency dramatically improved.
                </p>
              </div>

              <div className="w-full">
                <ScrollRevealImage
                  src="/images/Strybuc/photographflow1.jpg"
                  alt="Photograph Parts User Flow"
                  width={1600}
                  height={900}
                  className="w-full h-auto rounded-lg"
                  delay={100}
                />
              </div>
            </div>
          </CaseStudySection>

          <CaseStudySection number="003" title="Prototypes">
            <p>
              Creating the first prototype for the Photograph Parts feature quickly revealed one of the biggest challenges of the entire project. Because this tool relied on augmented reality to capture precise measurements, the design itself wasn’t the only concern—the success of the feature depended heavily on technical accuracy in development. The camera needed to understand depth, distance, and positioning to generate reliable measurements from one point to another. As I iterated through the prototype, I realized that even small UI decisions directly impacted how the AR logic behaved. This required continuous back-and-forth with the development team overseas, reviewing builds after hours, troubleshooting measurement inconsistencies, and aligning the business goals with the realities of AR technology. Through close collaboration, rapid prototyping, and constant communication, we were able to refine both the user experience and the measurement accuracy to create a seamless flow from the customer’s camera to the sales representative.
            </p>
            
            <div className="w-full mt-12 overflow-hidden space-y-8">
              {/* Row 1 - Left to Right */}
              <div className="relative w-full flex overflow-hidden">
                <div
                  className="flex gap-8 animate-scroll-right"
                  style={{
                    width: "max-content",
                  }}
                >
                  {duplicatedTopRow.map((img, index) => (
                    <div
                      key={`row1-${index}`}
                      className="relative h-[clamp(250px,30vh,320px)] aspect-auto shrink-0 overflow-hidden"
                    >
                      <img
                        src={`/images/Strybuc/${img}.png`}
                        alt={`Strybuc screen ${index}`}
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
                  {duplicatedBottomRow.map((img, index) => (
                    <div
                      key={`row2-${index}`}
                      className="relative h-[clamp(250px,30vh,320px)] aspect-auto shrink-0 overflow-hidden"
                    >
                      <img
                        src={`/images/Strybuc/${img}.png`}
                        alt={`Strybuc screen ${index}`}
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

          <CaseStudySection number="004" title="The Delivery / App Submission">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8 lg:gap-12 items-center">
              <div className="md:col-span-2 space-y-4">
                <p>
                  Submitting the application to both the Apple App Store and Google Play Store introduced an entirely new layer of complexity, as each platform comes with its own strict requirements, review guidelines, and technical constraints. Beyond designing the app itself, I also managed the operational steps required to prepare the app for public release. This included coordinating with the client to set up and verify their Apple Developer Program and Google Play Console accounts, managing permissions, and ensuring the correct legal and business information was in place.
                </p>
              </div>
              <div className="relative w-full md:col-span-3 md:ml-auto max-w-3xl">
                <ScrollRevealImage 
                  src="/images/Strybuc/S2.png" 
                  alt="Design System Handoff" 
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {["s4", "s5", "s6"].map((img, index) => (
                <ScrollRevealImage
                  key={img}
                  src={`/images/Strybuc/${img}.png`}
                  alt={`App submission asset ${index + 1}`}
                  width={800}
                  height={1200}
                  className="w-[60%] mx-auto h-auto object-contain"
                  delay={index * 100}
                />
              ))}
            </div>

            <p className="mt-8 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Apple and Google each require a full set of store assets—such as listing images, screenshots, app icons, and promotional graphics—each with different dimension requirements, file formats, and device-framing guidelines. I designed all of these assets from scratch, ensuring they aligned with brand standards while also meeting exact technical specifications such as 1284×2778 px for iPhone 14 Pro Max screenshots or 1242×2688 px for iPhone portrait formats. Android added additional variations due to its diverse device ecosystem, requiring multiple resolutions and layout adjustments.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {["s7", "s8", "s9"].map((img, index) => (
                <ScrollRevealImage
                  key={img}
                  src={`/images/Strybuc/${img}.png`}
                  alt={`Store asset ${index + 4}`}
                  width={800}
                  height={1200}
                  className="w-[60%] mx-auto h-auto object-contain"
                  delay={index * 100}
                />
              ))}
            </div>

            <p className="mt-8 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              The submission process also required preparing and validating builds for TestFlight (iOS) and internal testing tracks (Android), addressing platform-specific warnings or errors, configuring privacy labels, setting permissions for camera and photo library access, and completing required metadata such as age ratings, content classifications, and feature descriptions. Throughout the review process, I handled communication with Apple and Google when additional clarifications or changes were requested, making iterative adjustments to ensure compliance with their guidelines.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {["s10", "s11", "s12"].map((img, index) => (
                <ScrollRevealImage
                  key={img}
                  src={`/images/Strybuc/${img}.png`}
                  alt={`Testing asset ${index + 7}`}
                  width={800}
                  height={1200}
                  className="w-[60%] mx-auto h-auto object-contain"
                  delay={index * 100}
                />
              ))}
            </div>

            <p className="mt-8 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Because each store responds differently during review—Apple often performing a more manual, detailed evaluation and Google relying on automated compliance checks—I had to manage the timelines carefully and keep the client updated on approval statuses. Ultimately, successfully launching on both platforms required a blend of design precision, technical understanding, and detailed project coordination to ensure a smooth and timely publication for both iOS and Android users.
            </p>

            <div className="w-full mt-12 mb-6 overflow-hidden">
              <div className="relative w-full flex overflow-hidden">
                <div
                  className="flex gap-8 animate-scroll-right"
                  style={{
                    width: "max-content",
                  }}
                >
                  {duplicatedSubmissionRow.map((img, index) => (
                    <div
                      key={`submission-${index}`}
                      className="relative h-[clamp(250px,30vh,320px)] aspect-auto shrink-0 overflow-hidden"
                    >
                      <img
                        src={`/images/Strybuc/${img}.png`}
                        alt={`App store asset ${index + 1}`}
                        className="h-full w-auto object-cover"
                      />
                    </div>
                  ))}
                </div>
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
            <p className="text-sm font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
              Android Submission
            </p>
          </CaseStudySection>

          <CaseStudySection number="005" title="Conclusion">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8 lg:gap-12 items-center">
              <div className="md:col-span-2 space-y-6">
                <p>
                After four months of intensive work — including daily syncs, late-night development calls, and hundreds of emails — I successfully delivered Strybuc Industries’ first fully redesigned mobile application for both iOS and Android. What began as a simple request to “refresh the app” quickly evolved into a deeply technical product challenge, especially for the Photograph Parts AR feature.
                </p>
                <p>
                Even with challenging requirements, the app launched on time with refined AR functionality, high-fidelity design, and complete store compliance. This project showcases my ability to lead and deliver end-to-end — from listings to UX. Since launch, the new experience has increased communication between customers and sales representatives by 20%, helping users take accurate product photos and connect effortlessly through a modern, dependable mobile workflow.
                </p>
              </div>
              <div className="relative w-full md:col-span-3">
                <ScrollRevealImage 
                  src="/images/Strybuc/s1.png" 
                  alt="Strybuc Project Conclusion" 
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

