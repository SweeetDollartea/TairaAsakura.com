"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const experiences = [
  {
    period: "Sept 2024 - November 2024",
    role: "Web Designer & Project Manager",
    company: "Silk Commerce",
    points: [
      "Led creative direction and design of multi-industry websites and apps in Figma.",
      "Reduced cart abandonment by 25% through UX improvements informed by discovery and developer collaboration.",
      "Directed full Shopify B2B/B2C implementations, coordinated cross-functional teams, and managed an AR-enabled mobile app improving customer–sales communication by 20%.",
      "Produced technical documentation, user stories, workflows, and acceptance criteria to align business goals with development execution.",
    ],
  },
  {
    period: "June 2024 - Sept 2024",
    role: "Product Designer",
    company: "Icarus Development",
    points: [
      "Led conception and prototyping of a calendar-sharing app improving team scheduling efficiency.",
      "Designed intuitive workflows for shared calendar management.",
      "Converted final UI designs into functional iOS and Android code.",
    ],
  },
  {
    period: "June 2023 - July 2024",
    role: "Marketing & Online Strategist",
    company: "Lily Forbes",
    points: [
      "Designed an improved e-commerce site increasing engagement and online sales by 5%.",
      "Expanded brand presence through partnership research and content strategy.",
      "Increased Instagram followers by 10% through photo and video content creation.",
    ],
  },
  {
    period: "July 2023 - Sept 2023",
    role: "Marketing Design Intern",
    company: "The Foundation",
    points: [
      "Directed photoshoots, built mood boards, and supported content campaigns for Kappa & Mori Leaf.",
      "Increased Instagram engagement by 15% and sales by 8% for Kappa.",
      "Designed concept soccer jerseys for all MLS teams and crafted presentations that helped secure partnerships with retailers like Erewhon and Sprouts.",
    ],
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full bg-white dark:bg-neutral-950 pt-32 pb-20 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start"
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
              When I’m away from my screen, I’m usually playing tennis, DJing minimal house music, or traveling and hunting for the best cup of americano.
              </p>
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
    </main>
  );
}

