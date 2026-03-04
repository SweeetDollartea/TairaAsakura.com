"use client";

import { useRouter } from "next/navigation";
import { useRef, useCallback } from "react";
import { ProjectPageExit } from "@/components/ProjectPageExit";

export default function SiteOpticsPage() {
  const router = useRouter();
  const pageRef = useRef<HTMLDivElement>(null);

  const handleExit = useCallback(() => {
    const page = pageRef.current;
    if (!page) return;
    page.classList.add("is-exiting");
    const onEnd = () => {
      page.removeEventListener("animationend", onEnd);
      try {
        sessionStorage.setItem("returningFromProject", "1");
      } catch {}
      router.push("/");
    };
    page.addEventListener("animationend", onEnd);
  }, [router]);

  return (
    <>
      <ProjectPageExit onClick={handleExit} />
      <div ref={pageRef} id="site-optics-page" className="ganson-page">
        <div className="ganson-page__hero" data-reveal>
          <img src="/Images/SiteOptics/Siteoptics1.png" alt="Site Optics SEO services website" width={1440} height={840} />
        </div>

        <div className="ganson-page__inner">
          <section className="ganson-page__meta" aria-label="Project metadata" data-reveal data-reveal-delay="80">
            <h1 className="ganson-page__title">Strategic Objectives for SiteOptics</h1>
            <hr className="ganson-page__divider" aria-hidden />
            <div className="ganson-page__meta-row">
              <div className="ganson-page__meta-group ganson-page__meta-group--content">
                <div className="ganson-page__meta-item">
                  <h6>Background</h6>
                  <p>Born from our collective experience at Silk Commerce, two colleagues and I identified a gap in the market for data-driven SEO services specifically <strong>tailored for B2B merchants</strong>. We set out to launch SiteOptics, an agency designed to translate our deep understanding of e-commerce infrastructure into <strong>actionable growth strategies</strong>.</p>
                </div>
                <div className="ganson-page__meta-item">
                  <h6>The Challenge</h6>
                  <p>Unlike B2C consumers who buy on impulse, B2B clients operate with high scrutiny and longer decision cycles. I needed to structure the user journey to <strong>validate our expertise immediately</strong>. The goal was to funnel analytical users ultimately <strong>guiding them to the Consultation page</strong> to capture high-intent leads.</p>
                </div>
                <div className="ganson-page__meta-item">
                  <h6>The Impact</h6>
                  <ul className="ganson-page__meta-list">
                    <li><strong>Clear value proposition</strong> with a compelling hero and strategic CTAs</li>
                    <li><strong>Responsive design</strong> across desktop, tablet, and mobile</li>
                    <li><strong>Pricing transparency</strong> to reduce friction and build confidence</li>
                  </ul>
                </div>
              </div>
              <div className="ganson-page__meta-group ganson-page__meta-group--details">
                <div className="ganson-page__meta-item">
                  <h6>Role</h6>
                  <p>Web Designer</p>
                </div>
                <div className="ganson-page__meta-item">
                  <h6>Duration</h6>
                  <p>3 weeks</p>
                </div>
              </div>
            </div>
          </section>

          <div className="site-optics__image-block" data-reveal data-reveal-delay="80">
            <img src="/Images/SiteOptics/Siteoptics2.png" alt="Site Optics strategic objectives" width={1440} height={960} />
          </div>
          <div className="site-optics__image-full" data-reveal data-reveal-delay="80">
            <img src="/Images/SiteOptics/Siteoptics3.png" alt="Site Optics branding and style guide" width={1440} height={960} />
          </div>
          <div className="site-optics__structure" data-reveal data-reveal-delay="80">
            <div className="site-optics__structure-inner">
              <div className="site-optics__structure-head">
                <h2 className="site-optics__structure-title">Understanding the structure</h2>
                <p className="site-optics__structure-desc">I designed a high-contrast dark theme that highlights the hero&apos;s value proposition and organizes services into a clean, tabbed layout. The flow ends with a pricing table that uses visual weight to naturally nudge users toward the middle &apos;Growth&apos; plan.</p>
              </div>
              <ul className="site-optics__structure-list">
                <li className="site-optics__structure-item">
                  <span className="site-optics__structure-num">01</span>
                  <div className="site-optics__structure-item-body">
                    <h3 className="site-optics__structure-item-title">Hero Section</h3>
                    <p className="site-optics__structure-item-text">Designed to capture the user&apos;s <strong>eye in seconds</strong>, the high-contrast layout leads them directly to the primary call to action.</p>
                  </div>
                </li>
                <li className="site-optics__structure-item">
                  <span className="site-optics__structure-num">02</span>
                  <div className="site-optics__structure-item-body">
                    <h3 className="site-optics__structure-item-title">Services</h3>
                    <p className="site-optics__structure-item-text">Clear service categories paired with recognized industry logos instantly <strong>validate the agency&apos;s capabilities</strong> to the user.</p>
                  </div>
                </li>
                <li className="site-optics__structure-item">
                  <span className="site-optics__structure-num">03</span>
                  <div className="site-optics__structure-item-body">
                    <h3 className="site-optics__structure-item-title">Pricing</h3>
                    <p className="site-optics__structure-item-text">Call for Quote. Transparent pricing signaling <strong>confidence and honesty</strong> to the business.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="site-optics__hook" data-reveal data-reveal-delay="80">
            <div className="site-optics__hook-inner">
              <div className="site-optics__hook-head">
                <h2 className="site-optics__hook-title">The Hook</h2>
                <p className="site-optics__hook-desc">I designed the hero section to establish immediate authority. Using the dark mode aesthetic reduces eye strain and allows the primary orange accents to direct the user&apos;s attention <strong>instantly to the primary CTA</strong>. The bold typography ensures the value proposition &quot;Top Search&quot; is the <strong>first element read.</strong></p>
              </div>
              <div className="site-optics__hook-preview">
                <img src="/Images/SiteOptics/Siteoptics4.png" alt="Site Optics the hook" width={690} height={480} />
              </div>
            </div>
          </div>
          <div className="site-optics__evidence" data-reveal data-reveal-delay="80">
            <div className="site-optics__evidence-inner">
              <div className="site-optics__evidence-row">
                <div className="site-optics__evidence-head">
                  <h2 className="site-optics__evidence-title">The Evidence &amp; Confidence</h2>
                  <p className="site-optics__evidence-subtitle">Services &amp; Tech Stack</p>
                </div>
                <div className="site-optics__evidence-desc">
                  <p>I intentionally bracketed the core services with <strong>two layers of validation</strong>. The top row &apos;Platforms we specialize in&apos; confirms compatibility with the client&apos;s existing stack. The bottom row &apos;Technology we use&apos; signals <strong>professional capability</strong>.</p>
                  <p>I implemented a tabbed navigation system to <strong>eliminate the wall of texts</strong>. It organizes five distinct sections into a single, interactive container. This keeps the page length manageable and puts the <strong>user in control</strong> of what they want to read.</p>
                </div>
              </div>
              <div className="site-optics__evidence-preview">
                <img src="/Images/SiteOptics/Siteoptics5.png" alt="Site Optics evidence and confidence" width={588} height={544} />
              </div>
            </div>
          </div>
          <div className="site-optics__pricing" data-reveal data-reveal-delay="80">
            <div className="site-optics__pricing-inner">
              <div className="site-optics__pricing-row">
                <div className="site-optics__pricing-head">
                  <h2 className="site-optics__pricing-title">Strategic Pricing</h2>
                  <p className="site-optics__pricing-subtitle">Secondary Conversion</p>
                </div>
                <div className="site-optics__pricing-desc">
                  <p>I designed the pricing table to drive users toward the middle tier. By giving the &apos;Growth plan&apos; more visual weight, <strong>I created a focal point</strong>.</p>
                  <p>However, not every user is ready to purchase the subscription immediately. The &apos;Have any Questions?&apos; section serves as a safety net, providing the same primary CTA from the hero section</p>
                </div>
              </div>
              <div className="site-optics__pricing-preview">
                <img src="/Images/SiteOptics/Siteoptics6.png" alt="Site Optics strategic pricing" width={588} height={445} />
              </div>
            </div>
          </div>
          <div className="site-optics__pricing-plan" data-reveal data-reveal-delay="80">
            <div className="site-optics__pricing-plan-inner">
              <div className="site-optics__pricing-plan-row">
                <div className="site-optics__pricing-plan-head">
                  <h2 className="site-optics__pricing-plan-title">The Pricing Plan Page</h2>
                  <p className="site-optics__pricing-plan-subtitle">Digging deep into the reason &apos;Why&apos;</p>
                </div>
                <div className="site-optics__pricing-plan-desc">
                  <p>The comparison table allows users to verify specific feature availability <strong>line by line</strong>, <strong>removing ambiguity and friction</strong> throughout the process of purchasing the service.</p>
                  <p>The accordion FAQ acts as a safety net, providing common friction points after addressing the price options to <strong>prevent users from leaving the page to search for answers</strong>.</p>
                </div>
              </div>
              <div className="site-optics__pricing-plan-preview">
                <img src="/Images/SiteOptics/Siteoptics7.png" alt="Site Optics pricing plan page" width={1320} height={389} />
              </div>
            </div>
          </div>
          <div className="site-optics__image-full" data-reveal data-reveal-delay="80">
            <img src="/Images/SiteOptics/Siteoptics8.png" alt="Site Optics contact form" width={1440} height={960} />
          </div>

          <footer className="ganson-page__footer" role="contentinfo" data-reveal data-reveal-delay="80">
            <p className="ganson-page__footer-copyright">© 2025 Taira Asakura</p>
            <nav className="ganson-page__footer-social" aria-label="Social links">
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
          </footer>
        </div>
      </div>
    </>
  );
}
