import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero-name-disk" data-reveal>
        <img src="/Images/Homepage/MyNameDisk.png" alt="" />
      </section>
      <section className="hero-caret" data-reveal data-reveal-delay="80">
        <img src="/Images/Homepage/caret.svg" alt="" aria-hidden />
      </section>
      <section className="section-work" data-reveal data-reveal-delay="120">
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
        <Link href="/tdp" className="section-work__card">
          <img src="/Images/Homepage/TDP.png" alt="TDP" />
          <h2 className="section-work__title">The Distribution Point</h2>
          <p className="section-work__desc">
            Redesigning two Shopify storefronts with smarter navigation and a dramatically improved user journey.
          </p>
          <div className="section-work__meta">
            <span className="section-work__link">Silk Commerce</span>
            <img src="/Images/Homepage/dot.svg" alt="" className="dot-icon" aria-hidden />
            <span>2025</span>
          </div>
        </Link>
        <Link href="/strybuc" className="section-work__card">
          <img src="/Images/Homepage/Strybuc.png" alt="Strybuc Industries" />
          <h2 className="section-work__title">Strybuc Industries</h2>
          <p className="section-work__desc">
            An end-to-end mobile app project—from discovery and UX design to prototype, AR measurement logic, and final App Store delivery.
          </p>
          <div className="section-work__meta">
            <span className="section-work__link">Silk Commerce</span>
            <img src="/Images/Homepage/dot.svg" alt="" className="dot-icon" aria-hidden />
            <span>2024</span>
          </div>
        </Link>
        <Link href="/site-optics" className="section-work__card">
          <img src="/Images/Homepage/Site-Optics.png" alt="Site Optics" />
          <h2 className="section-work__title">Site Optics</h2>
          <p className="section-work__desc">
            A conversion-focused website designed for businesses looking to scale their organic growth by enhancing their SEO
          </p>
          <div className="section-work__meta">
            <span className="section-work__link">Side Project</span>
            <img src="/Images/Homepage/dot.svg" alt="" className="dot-icon" aria-hidden />
            <span>2025</span>
          </div>
        </Link>
        <Link href="/design-challenge" className="section-work__card">
          <img src="/Images/Homepage/Design-Challenge.png" alt="Design Challenge" />
          <h2 className="section-work__title">Design Challenge</h2>
          <p className="section-work__desc">
            To elevate my mobile design skills, I executed a daily practice of conceptualizing and rendering one high-fidelity screen a day.
          </p>
          <div className="section-work__meta">
            <span className="section-work__link">Side Project</span>
            <img src="/Images/Homepage/dot.svg" alt="" className="dot-icon" aria-hidden />
            <span>2024</span>
          </div>
        </Link>
      </section>
      <div className="section-divider" role="separator" aria-hidden data-reveal data-reveal-delay="80" />
      <h2 className="section-exp-heading" data-reveal data-reveal-delay="80">Experience</h2>
      <section className="section-exp" aria-label="Experience" data-reveal data-reveal-delay="120">
        <div className="section-exp__block">
          <div className="section-exp__entry">
            <span className="section-exp__entry-role">Product Designer @Silk Commerce</span>
            <span className="section-exp__entry-date">Sept 2024 - Nov 2025, Irvine</span>
          </div>
          <div className="section-exp__divider" role="separator" aria-hidden />
        </div>
        <div className="section-exp__block">
          <div className="section-exp__entry">
            <span className="section-exp__entry-role">Product Designer @Icarus Development</span>
            <span className="section-exp__entry-date">June 2024 - Sept 2024, (Remote)</span>
          </div>
          <div className="section-exp__divider" role="separator" aria-hidden />
        </div>
        <div className="section-exp__block">
          <div className="section-exp__entry">
            <span className="section-exp__entry-role">Marketing & Online Strategist @Lily Forbes</span>
            <span className="section-exp__entry-date">June 2023 - July 2024, Davis</span>
          </div>
          <div className="section-exp__divider" role="separator" aria-hidden />
        </div>
        <div className="section-exp__block">
          <div className="section-exp__entry">
            <span className="section-exp__entry-role">Marketing Design Intern @The Foundation</span>
            <span className="section-exp__entry-date">July 2023 - Sept 2024, Los Angeles</span>
          </div>
          <div className="section-exp__divider" role="separator" aria-hidden />
        </div>
      </section>
      <div className="section-divider" role="separator" aria-hidden data-reveal data-reveal-delay="80" />
      <div className="section-me" data-reveal data-reveal-delay="120">
        <div className="section-me__container">
          <img src="/Images/Homepage/Me1.jpg" alt="" />
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
              Resume <img src="/Images/Homepage/arrow.svg" alt="" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
