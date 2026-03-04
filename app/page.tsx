import Link from "next/link";
import { ExperienceEntry } from "@/components/ExperienceEntry";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="hero-name-disk flex justify-center">
        <img
          src="/Images/Homepage/MyName-Disk.svg"
          alt=""
          className="block w-full max-w-[600px] h-auto object-contain"
        />
      </section>
      <section className="hero-caret">
        <img src="/Images/Homepage/caret.svg" alt="" aria-hidden />
      </section>
      <section className="section-work">
        <Link href="/ganson" className="section-work__card">
          <img src="/Images/Homepage/Ganson.png" alt="Ganson Engineering" />
          <h2 className="section-work__title">Ganson Engineering</h2>
          <p className="section-work__desc">
            Redesigned the brainwriting experience with a clean, intuitive interface that enables teams to capture and share ideas seamlessly.
          </p>
          <div className="section-work__meta">
            <span className="section-work__link">Silk Commerce</span>
            <img src="/Images/Homepage/dot.svg" alt="" className="dot-icon" aria-hidden />
            <span>2025</span>
          </div>
        </Link>
        <div className="section-work__card">
          <img src="/Images/Homepage/TDP.png" alt="TDP" />
          <h2 className="section-work__title">TDP</h2>
          <p className="section-work__desc">
            E-commerce and Shopify theme design for TDP &amp; Cahaba.
          </p>
          <div className="section-work__meta">
            <a href="#" className="section-work__link">Client Name</a>
            <img src="/Images/Homepage/dot.svg" alt="" className="dot-icon" aria-hidden />
            <span>2025</span>
          </div>
        </div>
        <div className="section-work__card">
          <img src="/Images/Homepage/Strybuc.png" alt="Strybuc" />
          <h2 className="section-work__title">Strybuc</h2>
          <p className="section-work__desc">
            Photography and inventory management app for Strybuc Industries.
          </p>
          <div className="section-work__meta">
            <a href="#" className="section-work__link">Client Name</a>
            <img src="/Images/Homepage/dot.svg" alt="" className="dot-icon" aria-hidden />
            <span>2025</span>
          </div>
        </div>
        <div className="section-work__card">
          <img src="/Images/Homepage/SIte-Optics.png" alt="Site Optics" />
          <h2 className="section-work__title">Site Optics</h2>
          <p className="section-work__desc">
            Website design and development for Site Optics.
          </p>
          <div className="section-work__meta">
            <a href="#" className="section-work__link">Client Name</a>
            <img src="/Images/Homepage/dot.svg" alt="" className="dot-icon" aria-hidden />
            <span>2025</span>
          </div>
        </div>
        <div className="section-work__card">
          <img src="/Images/Homepage/Design-Challenge.svg" alt="Design Challenge" />
          <h2 className="section-work__title">Design Challenge</h2>
          <p className="section-work__desc">
            Design challenge project showcasing creative problem-solving.
          </p>
          <div className="section-work__meta">
            <a href="#" className="section-work__link">Client Name</a>
            <img src="/Images/Homepage/dot.svg" alt="" className="dot-icon" aria-hidden />
            <span>2025</span>
          </div>
        </div>
      </section>
      <div className="section-divider" role="separator" aria-hidden />
      <h2 className="section-exp-heading">Experience</h2>
      <section className="section-exp" aria-label="Experience">
        <ExperienceEntry
          role="Product Designer / Project Manager @Silk Commerce"
          date="Sept 2024 - Nov 2025, Irvine"
        />
        <ExperienceEntry role="Founder @Lintra" date="Jan 2026 - Present, Remote" />
        <ExperienceEntry role="[Placeholder Role]" date="[Placeholder Date]" />
        <ExperienceEntry role="[Placeholder Role]" date="[Placeholder Date]" />
      </section>
      <div className="section-divider" role="separator" aria-hidden />
      <div className="section-me">
        <div className="section-me__container">
          <img src="/Images/Homepage/me.png" alt="" />
          <div className="section-me__content">
            <p className="section-me__intro">Hi, I&apos;m Taira</p>
            <p className="section-me__bio">
              I&apos;m a product designer based in California. Previously @SilkCommerce. I design websites and manage digital projects with a focus on clarity, usability, and strong outcomes. I enjoy working hands-on with clients and developers to turn ideas into experiences that feel simple, intentional, and effective.
            </p>
            <a
              href="/Images/Homepage/Taira-Asakura-Resume.pdf"
              className="section-me__resume-link"
              aria-label="View Taira Asakura Resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
              <img src="/Images/Homepage/arrow.svg" alt="" aria-hidden />
            </a>
          </div>
          <nav className="section-me__social" aria-label="Social links">
            <a href="https://x.com/tairaasakura" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer">
              <img src="/Images/Homepage/x.svg" alt="" aria-hidden />
            </a>
            <a href="https://www.linkedin.com/in/taira-asakura/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <img src="/Images/Homepage/linkedin.svg" alt="" aria-hidden />
            </a>
            <a href="mailto:Asakurataira@gmail.com" aria-label="Email">
              <img src="/Images/Homepage/mail.svg" alt="" aria-hidden />
            </a>
          </nav>
        </div>
      </div>
    </main>
  );
}
