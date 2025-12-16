"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Footer } from "@/components/ui/footer";
import { footerContent } from "@/lib/footer-config";

const experiences = [
  {
    period: "Sept 2024 - Present",
    role: "Web Designer & Project Manager",
    company: "Silk Commerce",
    points: [
      "Designed and led the creative direction of websites and applications across diverse industries using Figma, ensuring alignment with client brand identity and business goals",
      "Contributed to reduce the cart abandonment rate by 25% by collaborating with clients and developers to translate complex business requirements into an interactive user experience",
      "Directed full lifecycle Shopify B2B/B2C and mobile app implementations by coordinating cross-functional teams and maintaining clear scope and milestones, while managing and designing a mobile app end to end that launched an AR-based feature improving customer–sales communication by 20%",
      "Facilitated discovery sessions and produced detailed technical documentation— including user stories, workflows, and acceptance criteria—while guiding multidisciplinary teams to deliver optimized e-commerce solutions aligned with business goals",
    ],
  },
  {
    period: "June 2024 - Sept 2024",
    role: "Product Designer",
    company: "Icarus Development",
    points: [
      "Led the conception, planning, and prototyping of a calendar-sharing app aimed at improving user experience for efficient scheduling and collaboration",
      "Designed intuitive workflows and interfaces that streamline shared calendar management",
      "Converted finalized designs into functional code for both iOS and Android platforms",
    ],
  },
  {
    period: "June 2023 - July 2024",
    role: "Marketing & Online Strategist",
    company: "Lily Forbes",
    points: [
      "Increased engagement and online sales by 5% through designing a visually appealing and user-friendly e-commerce website",
      "Researched potential partners with similar customer base to expand its presence",
      "Increased followers on Instagram by 10% by actively capturing and uploading videos and photographs of the new season's launch",
    ],
  },
  {
    period: "July 2023 - Sept 2023",
    role: "Marketing Design Intern",
    company: "The Foundation",
    points: [
      "Supported marketing efforts for clients, Kappa sportswear brand and Mori Leaf iced tea brand",
      "Increased Instagram engagement by 15% and sales by 8% for Kappa through a strategic content plan, collaborating with the marketing team, directing photo shoots, researching successful campaigns, and creating mood boards",
      "Solely designed concept soccer jerseys for each MLS team for potential partnerships",
      "Increased sales revenue by 3% by creating presentations for premium grocery stores like Erewhon and Sprouts",
    ],
  },
];


export default function AboutPage() {
  return (
    <main className="min-h-screen w-full bg-white dark:bg-neutral-950 pt-32 pb-10 md:pb-20 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start"
        >
          <div className="relative mx-auto md:mx-0 w-[80%] md:w-[70%] lg:w-[60%] h-[340px] md:h-[420px] lg:h-[500px] overflow-hidden shadow-xl">
            <Image
              src="/images/me/me.png"
              alt="Taira Asakura portrait"
              fill
              className="object-cover grayscale"
              priority
            />
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
            <div className="space-y-3">
              <p className="font-semibold">こんにちは（konnichiwa), Hi - I'm Taira</p>
            </div>

            <div className="space-y-3">
              <p>
                I'm a designer based in California. Previously @SilkCommerce.<br></br>
                I design websites and manage digital projects with a focus on clarity,
                usability, and strong outcomes. I enjoy working hands-on with clients
                and developers to turn ideas into experiences that feel simple,
                intentional, and effective.
              </p>
              <br></br>
              <p>
              When I'm away from my screen, I'm usually playing tennis, DJing minimal house music, or traveling and hunting for the best cup of americano.
              </p>
              <div className="pt-4">
                <a 
                  href="/images/me/Taira-Asakura-Resume.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white font-medium transition-all hover:border-[#2F9955] hover:text-[#2F9955] dark:hover:border-[#2F9955] dark:hover:text-[#2F9955] group"
                >
                  See Resume
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

          </div>
        </motion.div>

        <section className="mt-48">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-3"
            >
              <h2 className="text-3xl font-semibold text-neutral-900 dark:text-white">
                Experiences
              </h2>
            </motion.div>

            <div className="space-y-8">
              {experiences.map((item, index) => (
                <motion.div
                  key={`${item.role}-${item.company}`}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group flex flex-col gap-1 pb-6 border-b border-transparent last:border-b-0"
                >
                  <p className="text-base font-semibold text-neutral-900 dark:text-white group-hover:text-black dark:group-hover:text-white">
                    {item.company}
                  </p>
                  <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 italic">
                    {item.role}
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    {item.period}
                  </p>
                  <ul className="mt-2 space-y-2 text-base text-neutral-600 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-neutral-100">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer {...footerContent} />
    </main>
  );
}

