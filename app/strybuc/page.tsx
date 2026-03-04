"use client";

import { useRouter } from "next/navigation";
import { useRef, useCallback, useEffect } from "react";
import { ProjectPageExit } from "@/components/ProjectPageExit";

export default function StrybucPage() {
  const router = useRouter();
  const pageRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoBlockRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const video = videoRef.current;
    const videoBlock = videoBlockRef.current;
    if (!video || !videoBlock) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(videoBlock);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ProjectPageExit onClick={handleExit} />
      <div ref={pageRef} id="strybuc-page" className="ganson-page">
        <div className="ganson-page__hero" data-reveal>
          <img src="/Images/Strybuc/strybuc1.png" alt="Strybuc Industries mobile app" width={1440} height={840} />
        </div>

        <div className="ganson-page__inner">
          <section className="ganson-page__meta" aria-label="Project metadata" data-reveal data-reveal-delay="80">
            <h1 className="ganson-page__title">Modernizing Hardware Identification with AR</h1>
            <hr className="ganson-page__divider" aria-hidden />
            <div className="ganson-page__meta-row">
              <div className="ganson-page__meta-group ganson-page__meta-group--content">
                <div className="ganson-page__meta-item">
                  <h6>Background</h6>
                  <p><strong>Strybuc needed to bridge the gap between field contractors and internal sales reps</strong>. The goal was to build a mobile app that mirrored their full B2B catalog while leveraging mobile capabilities. The core objective was a seamless &quot;Photograph Parts&quot; workflow, enabling contractors to capture hardware issues on-site and immediately connect with experts for replacements.</p>
                </div>
                <div className="ganson-page__meta-item">
                  <h6>The Challenge</h6>
                  <p><strong>Eliminating the operational friction of unidentified parts</strong>. Customers frequently sent unclear photos, causing shipping errors and support delays. The challenge was to design a precision AR-assisted capture flow that guided users to take dimensionally accurate, &quot;sales-ready&quot; images, effectively ending the back-and-forth communication loops.</p>
                </div>
                <div className="ganson-page__meta-item">
                  <h6>The Impact</h6>
                  <ul className="ganson-page__meta-list">
                    <li>Drove a <strong>20% increase</strong> in customer engagement</li>
                    <li>Managed a successful <strong>dual-platform launch (iOS & Android)</strong> on schedule, navigating strict App Store compliance and complex AR technical challenges</li>
                    <li>Modernized the <strong>sales intake workflow</strong>, replacing low-quality images with a standardized, AR-assisted process that empowers reps to identify parts immediately</li>
                  </ul>
                </div>
              </div>
              <div className="ganson-page__meta-group ganson-page__meta-group--details">
                <div className="ganson-page__meta-item">
                  <h6>Role</h6>
                  <p>Product Designer & Project Manager</p>
                </div>
                <div className="ganson-page__meta-item">
                  <h6>Duration</h6>
                  <p>4 months</p>
                </div>
                <div className="ganson-page__meta-item">
                  <h6>Store Links</h6>
                  <p><a href="https://apps.apple.com/us/app/strybuc-industries/id6742978608" target="_blank" rel="noopener noreferrer">Apple Store</a></p>
                  <p><a href="https://play.google.com/store/apps/details?id=com.strybuc&hl=en_US" target="_blank" rel="noopener noreferrer">Google Play Store</a></p>
                </div>
              </div>
            </div>
          </section>

          <section className="strybuc-feature-1" aria-label="Feature 1" data-reveal data-reveal-delay="80">
            <div className="strybuc-feature-1__inner">
              <div className="strybuc-feature-1__header">
                <div className="strybuc-feature-1__header-row">
                  <div className="strybuc-feature-1__header-left">
                    <p className="strybuc-feature-1__header-num">Feature #1</p>
                    <p className="strybuc-feature-1__header-title">Photograph Parts Workflow</p>
                  </div>
                  <div className="strybuc-feature-1__header-right">
                    <p className="strybuc-feature-1__user-story-label">User Story</p>
                    <p className="strybuc-feature-1__user-story-quote">&ldquo;Rather than hiding premium features, I used a &apos;disabled&apos; state for guests. This creates a &apos;velvet rope&apos; effect, showcasing the value of membership to encourage account creation.&rdquo;</p>
                  </div>
                </div>
              </div>
              <div className="strybuc-feature-1__grid">
                <div className="strybuc-feature-1__grid-row">
                  <div className="strybuc-feature-1__item">
                    <img src="/Images/Strybuc/strybuc2.png" alt="Strybuc photograph parts flow" width={588} height={400} />
                    <p className="strybuc-feature-1__caption">Guest</p>
                  </div>
                  <div className="strybuc-feature-1__item">
                    <img src="/Images/Strybuc/strybuc3.png" alt="Strybuc part identification" width={588} height={400} />
                    <p className="strybuc-feature-1__caption">Logged In</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="ganson-page__image-block ganson-page__image-block--labeled">
            <h4 className="ganson-page__image-block-label ganson-page__image-block-label--light">Photograph Parts</h4>
            <img src="/Images/Strybuc/strybuc4.png" alt="Strybuc app screen" width={1440} height={960} />
          </div>

          <section className="strybuc-discovery" aria-labelledby="strybuc-discovery-title" data-reveal data-reveal-delay="80">
            <div className="strybuc-discovery__inner">
              <div className="strybuc-discovery__header">
                <h2 id="strybuc-discovery-title" className="strybuc-discovery__title">Discovery & Strategic Workflow Design</h2>
                <p className="strybuc-discovery__subtext">By integrating Augmented Reality (AR) measurement tools, users can capture dimensionally accurate photos of their hardware. These images are instantly routed to Strybuc sales representatives, who use the data to suggest the exact replacement options—transforming a complex support ticket into a seamless sales opportunity.</p>
              </div>
              <div className="strybuc-discovery__points">
                <div className="strybuc-discovery__point">
                  <div className="strybuc-discovery__point-row">
                    <span className="strybuc-discovery__point-num">01</span>
                    <h3 className="strybuc-discovery__point-title">Business Requirements</h3>
                  </div>
                  <p className="strybuc-discovery__point-desc">Documented every detail during discovery calls, from technical constraints to workflow needs and user expectations</p>
                </div>
                <div className="strybuc-discovery__point">
                  <div className="strybuc-discovery__point-row">
                    <span className="strybuc-discovery__point-num">02</span>
                    <h3 className="strybuc-discovery__point-title">Purpose Workflow</h3>
                  </div>
                  <p className="strybuc-discovery__point-desc">Making the process of sending part(s) using AR seamless and easy to understand.</p>
                </div>
                <div className="strybuc-discovery__point">
                  <div className="strybuc-discovery__point-row">
                    <span className="strybuc-discovery__point-num">03</span>
                    <h3 className="strybuc-discovery__point-title">User Testing</h3>
                  </div>
                  <p className="strybuc-discovery__point-desc">Understand pain points and validate solutions through rigorous user testing.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="strybuc-section-2" aria-label="Feature 2: Understanding the business requirements" data-reveal data-reveal-delay="80">
            <div className="strybuc-section-2__inner">
              <div className="strybuc-section-2__header">
                <div className="strybuc-section-2__header-row">
                  <div className="strybuc-section-2__header-left">
                    <p className="strybuc-section-2__header-num">Feature #2</p>
                    <p className="strybuc-section-2__header-title"><strong>Understanding the business requirements</strong></p>
                  </div>
                  <div className="strybuc-section-2__header-right">
                    <p className="strybuc-section-2__user-story-label">User Story</p>
                    <p className="strybuc-section-2__user-story-quote">&ldquo;As a Contractor on-site, I need to capture dimensionally accurate photos of broken hardware using <strong>AR tools</strong> so that a sales representative can identify the exact specs and provide me with the correct replacement options&rdquo;</p>
                  </div>
                </div>
              </div>
              <div className="strybuc-section-2__content">
                <img src="/Images/Strybuc/strybuc5.png" alt="Strybuc AR capture workflow and notes" width={1440} height={960} />
                <div className="strybuc-section-2__caption">
                  <p>To build Strybuc&apos;s mobile application effectively, it was crucial for me to deeply understand the business requirements <strong>from the very beginning</strong>. I documented <strong>every detail during discovery calls</strong> — from technical constraints to workflow needs and user expectations — <strong>ensuring no requirement was overlooked</strong>. As the project manager, I <strong>provided weekly and daily updates</strong> to keep the client aligned with progress and upcoming milestones.</p>
                  <p>To deliver on time and with accuracy, I created <strong>clear user stories and a detailed project timeline,</strong> allowing me to track dependencies, manage development phases, and ensure every task stayed on schedule.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="strybuc-section-3" aria-label="Feature 3: Designing a clear workflow" data-reveal data-reveal-delay="80">
            <div className="strybuc-section-3__inner">
              <div className="strybuc-section-3__header-row">
                <div className="strybuc-section-3__header-left">
                  <p className="strybuc-section-3__header-num">Feature #3</p>
                  <p className="strybuc-section-3__header-subtitle">Designing a <strong>clear workflow</strong></p>
                </div>
                <div className="strybuc-section-3__header-right">
                  <p className="strybuc-section-3__user-story-label">User Story</p>
                  <p className="strybuc-section-3__user-story-quote">&ldquo;As a Field Contractor, I need a guided, <strong>step-by-step workflow</strong> that helps me capture precise AR measurements and photos&rdquo;</p>
                </div>
              </div>
              <div className="strybuc-section-3__content">
                <img src="/Images/Strybuc/strybuc6.png" alt="Strybuc login flow" width={1200} height={336} />
                <div className="strybuc-section-3__caption">
                  <p>Creating a detailed user flow was essential. By mapping every step—from pressing the camera button to sending the request—I ensured that the experience remained simple, predictable, and aligned with Strybuc&apos;s operational needs. This user flow became the backbone of the mobile application&apos;s design and functionality, ensuring that both customer experience and sales team efficiency dramatically improved.</p>
                  <p>To address the original problem, the redesigned app needed to:</p>
                  <ul>
                    <li>Enable users to take high-quality, well-lit photos</li>
                    <li>Capture measurements and dimensions directly in the app</li>
                    <li>Create a seamless flow from capturing images → reviewing → sending</li>
                    <li>Ensure that the sales team receives clean, usable information every time</li>
                    <li>Allow both guest users and logged-in users to follow differing but intuitive paths</li>
                    <li>Maintain a fast, guided, low-friction experience across iOS and Android</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="strybuc-section-4" aria-label="Feature 4: Testing" data-reveal data-reveal-delay="80">
            <div className="strybuc-section-4__inner">
              <div className="strybuc-section-4__header">
                <div className="strybuc-section-4__header-left">
                  <p className="strybuc-section-4__header-num">Feature #4</p>
                  <p className="strybuc-section-4__header-title">Testing</p>
                </div>
                <p className="strybuc-section-4__header-desc">Since accurate measurements were crucial to this feature, user testing, especially on both Android and iPhone devices, were crucial.</p>
              </div>
              <div className="strybuc-section-4__content">
                <img src="/Images/Strybuc/strybuc7.png" alt="Strybuc user testing across devices" width={1440} height={960} />
                <div className="strybuc-section-4__caption">
                  <p>Creating the first prototype for the Photograph Parts feature quickly <strong>revealed one of the biggest challenges</strong> of the entire project. Because this tool <strong>relied on augmented reality to capture precise measurements, the design itself wasn&apos;t the only concern</strong>—the success of the feature depended <strong>heavily on technical accuracy</strong> in development.</p>
                  <p>The camera needed to understand <strong>depth, distance, and positioning</strong> to generate reliable measurements from one point to another. As I iterated through the prototype, I realized that even small UI decisions directly impacted <strong>how the AR logic behaved</strong>. This required continuous back-and-forth with the development team overseas, reviewing builds after hours, troubleshooting measurement inconsistencies, and aligning the business goals with the realities of AR technology. Through <strong>close collaboration, rapid prototyping, and constant communication</strong>, we were able to refine both the user experience and the measurement accuracy to <strong>create a seamless flow from the customer&apos;s camera</strong> to the sales representative.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="strybuc-section-5" aria-labelledby="strybuc-section-5-title">
            <div className="strybuc-section-5__inner">
              <div className="strybuc-section-5__header">
                <p id="strybuc-section-5-title" className="strybuc-section-5__title-line1">Final Delivery and</p>
                <p className="strybuc-section-5__title-line2">Submission</p>
              </div>
              <p className="strybuc-section-5__desc">After 4 months, I delivered Strybuc Industries&apos; first fully redesigned mobile application for both iOS and Android. What began as a simple request to &quot;refresh the app&quot; quickly evolved into a deeply technical product challenge, especially for the Photograph Parts AR feature.</p>
            </div>
          </section>

          <div ref={videoBlockRef} className="ganson-page__image-block ganson-page__image-block--video" id="strybuc-video-block">
            <img src="/Images/Strybuc/strybuc8.png" alt="Strybuc app screen" width={1440} height={960} />
            <div className="ganson-page__video-overlay">
              <video ref={videoRef} src="/Images/Strybuc/strybuc9.mov" playsInline muted loop aria-label="Strybuc app demo" />
            </div>
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
