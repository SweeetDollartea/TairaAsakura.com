"use client";

import { useRouter } from "next/navigation";
import { useRef, useCallback } from "react";
import { ProjectPageExit } from "@/components/ProjectPageExit";

export default function TDPPage() {
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
      <div ref={pageRef} id="tdp-page" className="ganson-page">
        <div className="ganson-page__hero" data-reveal>
          <img src="/Images/TDP/tdp1.png" alt="The Distribution Point — TDP & Cahaba Designs Shopify storefront" width={1440} height={840} />
        </div>

        <div className="ganson-page__inner">
          <section className="ganson-page__meta" aria-label="Project metadata" data-reveal data-reveal-delay="80">
            <h1 className="ganson-page__title">The Distribution Point &amp; Cahaba Designs</h1>
            <hr className="ganson-page__divider" aria-hidden />
            <div className="ganson-page__meta-row">
              <div className="ganson-page__meta-group ganson-page__meta-group--content">
                <div className="ganson-page__meta-item">
                  <h6>Background</h6>
                  <p>The Distribution Point (TDP) needed to modernize their wholesale operations on Shopify. TDP operates a complex B2B ecosystem, requiring a <strong>robust e-commerce architecture</strong>.</p>
                </div>
                <div className="ganson-page__meta-item">
                  <h6>The Challenge</h6>
                  <p>Delivering complex logic in a <strong>4-week sprint</strong>. I had to architect a fully functional B2B portal, designing a deep &quot;My Account&quot; hub (for invoices and user management) while simultaneously building custom product pages that visualized real-time inventory across two distinct warehouses.</p>
                </div>
                <div className="ganson-page__meta-item">
                  <h6>The Impact</h6>
                  <ul className="ganson-page__meta-list">
                    <li>Executed a high-velocity sprint, delivering <strong>62 high-fidelity pages</strong></li>
                    <li>Successfully launched <strong>two Shopify ecosystems</strong> (TDP & Cahaba Designs), implementing complex B2B logic and multi-warehouse catalog features</li>
                    <li>Drove <strong>measurable engagement</strong>, reducing the bounce rate from 65% to 35% by strengthening brand presence while preserving critical user workflows</li>
                  </ul>
                </div>
              </div>
              <div className="ganson-page__meta-group ganson-page__meta-group--details">
                <div className="ganson-page__meta-item">
                  <h6>Role</h6>
                  <p>Product Designer</p>
                </div>
                <div className="ganson-page__meta-item">
                  <h6>Duration</h6>
                  <p>4 weeks</p>
                </div>
                <div className="ganson-page__meta-item">
                  <h6>Website</h6>
                  <p>
                    <a href="https://www.thedistributionpoint.com/" target="_blank" rel="noopener noreferrer">www.thedistributionpoint.com</a>
                    <br />
                    <a href="https://www.cahabadesigns.com/" target="_blank" rel="noopener noreferrer">www.cahabadesigns.com</a>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="tdp-feature" aria-label="Feature 1: Different customer groups" data-reveal data-reveal-delay="80">
            <div className="tdp-feature__inner">
              <div className="tdp-feature__header">
                <p className="tdp-feature__header-num">Feature #1</p>
                <p className="tdp-feature__header-title">Identifying different customer groups</p>
              </div>
              <div className="tdp-feature__points">
                <div className="tdp-feature__point">
                  <div className="tdp-feature__point-row">
                    <span className="tdp-feature__point-num">01</span>
                    <h3 className="tdp-feature__point-title">Guest Customers</h3>
                  </div>
                  <p className="tdp-feature__point-desc">Highlighting logistics capabilities and brand partnerships to convert visitors into registered dealers</p>
                </div>
                <div className="tdp-feature__point">
                  <div className="tdp-feature__point-row">
                    <span className="tdp-feature__point-num">02</span>
                    <h3 className="tdp-feature__point-title">Logged-in Customers</h3>
                  </div>
                  <p className="tdp-feature__point-desc">Pivots to transaction, surfacing &quot;Trending&quot; SKUs and &quot;Special Offers&quot; to accelerate the path to checkout</p>
                </div>
              </div>
            </div>
            <div className="tdp-feature__grid">
              <div className="tdp-feature__grid-row">
                <div className="tdp-feature__item">
                  <img src="/Images/TDP/tdp2.png" alt="TDP Guest view" width={588} height={400} />
                  <p className="tdp-feature__caption">Guest customer experience</p>
                </div>
                <div className="tdp-feature__item">
                  <img src="/Images/TDP/tdp3.png" alt="TDP Logged-in view" width={588} height={400} />
                  <p className="tdp-feature__caption">Logged-in customer experience</p>
                </div>
              </div>
            </div>
          </section>

          <section className="tdp-feature-2" aria-label="Feature 2: Inventory Visibility" data-reveal data-reveal-delay="80">
            <div className="tdp-feature-2__header">
              <div className="tdp-feature-2__header-row">
                <div className="tdp-feature-2__header-left">
                  <p className="tdp-feature-2__header-num">Feature #2</p>
                  <p className="tdp-feature-2__header-title">Inventory Visibility</p>
                </div>
                <div className="tdp-feature-2__header-right">
                  <p className="tdp-feature-2__user-story-label">User Story</p>
                  <p className="tdp-feature-2__user-story-quote">&ldquo;As a Logistics Manager, I need to see exactly how much stock is available in each warehouse directly on the listing page so I can build accurate shipments without clicking into every single product.&rdquo;</p>
                </div>
              </div>
            </div>
            <div className="tdp-feature-2__grid">
              <div className="tdp-feature-2__grid-row">
                <div className="tdp-feature-2__item">
                  <img src="/Images/TDP/tdp4.png" alt="TDP inventory visibility" width={588} height={400} />
                </div>
                <div className="tdp-feature-2__item">
                  <img src="/Images/TDP/tdp5.png" alt="TDP warehouse stock display" width={588} height={400} />
                </div>
              </div>
            </div>
          </section>

          <div className="ganson-page__image-block ganson-page__image-block--labeled">
            <h4 className="ganson-page__image-block-label">My Accounts (B2B Users)</h4>
            <img src="/Images/TDP/tdp6.png" alt="TDP project screen" width={1440} height={960} />
          </div>

          <section className="tdp-feature-3" aria-label="Feature 3: Interactions & User Journey" data-reveal data-reveal-delay="80">
            <div className="tdp-feature-3__header">
              <div className="tdp-feature-3__header-row">
                <div className="tdp-feature-3__header-left">
                  <p className="tdp-feature-3__header-num">Feature #3</p>
                  <p className="tdp-feature-3__header-title">Interactions &amp; User Journey</p>
                </div>
                <div className="tdp-feature-3__header-right">
                  <p className="tdp-feature-3__header-desc">By refining the interactions within these administrative journeys, we transform high-friction data entry into a seamless, self-service workflow.</p>
                </div>
              </div>
            </div>
            <div className="tdp-feature-3__grid">
              <div className="tdp-feature-3__grid-row">
                <div className="tdp-feature-3__item">
                  <img src="/Images/TDP/tdp7.png" alt="Change Password interface" width={588} height={400} />
                  <p className="tdp-feature-3__caption">Our client research has showed that users often change their password. Creating a dedicated page isolated this sensitive task from the daily ordering workflow.</p>
                </div>
                <div className="tdp-feature-3__item">
                  <img src="/Images/TDP/tdp8.png" alt="Change Password with real-time validation" width={588} height={400} />
                  <p className="tdp-feature-3__caption">By exposing complex password requirements in real-time, the system guides users to a valid password before they click save, eliminating the frustration of failed submissions.</p>
                </div>
              </div>
              <div className="tdp-feature-3__grid-row">
                <div className="tdp-feature-3__item">
                  <img src="/Images/TDP/tdp9.png" alt="Billing and Shipping Information" width={588} height={400} />
                  <p className="tdp-feature-3__caption">Users needed a smart interaction to change their shipping address with a click of a button.</p>
                </div>
                <div className="tdp-feature-3__item">
                  <img src="/Images/TDP/tdp10.png" alt="Use as Billing Address prompt" width={588} height={400} />
                  <p className="tdp-feature-3__caption">Upon changing the shipping address, users are prompted to update their billing address.</p>
                </div>
              </div>
              <div className="tdp-feature-3__grid-row">
                <div className="tdp-feature-3__item">
                  <img src="/Images/TDP/tdp11.png" alt="Email Invoice with inline validation" width={588} height={400} />
                  <p className="tdp-feature-3__caption">By providing clear inline validation, visually flagging missing fields in the invoice, it prevents failed deliveries of email invoicing.</p>
                </div>
                <div className="tdp-feature-3__item">
                  <img src="/Images/TDP/tdp12.png" alt="Invoice sent successfully notification" width={588} height={400} />
                  <p className="tdp-feature-3__caption">The notification on the top right provides immediate feedback by confirming with the user that the invoice has been sent successfully.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="tdp-final-designs" aria-label="Final Designs">
            <div className="tdp-final-designs__inner">
              <div className="tdp-final-designs__header">
                <h3 className="tdp-final-designs__title">Final Designs</h3>
                <p className="tdp-final-designs__subtitle">TDP &amp; Cahaba Designs</p>
              </div>
              <p className="tdp-final-designs__desc">The Distribution Point&apos;s website was the main focus of this task, providing custom product landing, product detail, my accounts B2B, and homepages. Cahaba Designs was constructed only using native features on Shopify.</p>
            </div>
          </section>

          <div className="ganson-page__image-block">
            <img src="/Images/TDP/tdp13.png" alt="TDP project screen" width={1440} height={960} />
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
