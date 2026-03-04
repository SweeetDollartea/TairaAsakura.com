"use client";

import { useOverlay } from "@/contexts/OverlayContext";
import { useEffect } from "react";

export function ProjectDetailOverlay() {
  const { isOpen, closeOverlay } = useOverlay();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  return (
    <div
      id="project-detail-overlay"
      className={`project-detail-overlay ${isOpen ? "is-open" : ""}`}
      aria-hidden={!isOpen}
      role="dialog"
      aria-label="Project detail"
    >
      <button
        type="button"
        className="project-detail-overlay__exit"
        onClick={closeOverlay}
        aria-label="Close project detail"
      >
        <svg
          className="project-detail-overlay__exit-icon"
          viewBox="0 0 20 20"
          stroke="currentColor"
          fill="none"
          strokeWidth={2}
          strokeLinecap="round"
          aria-hidden
        >
          <path d="M4 4l12 12M16 4L4 16" />
        </svg>
      </button>
      <div className="project-detail-overlay__hero">
        <img
          src="/Images/Ganson/hero.png"
          alt="Ganson Thermal Printheads"
          width={1440}
          height={840}
        />
      </div>
      <div className="project-detail-overlay__inner">
        <section className="project-detail-overlay__meta" aria-label="Project metadata">
          <h2 className="project-detail-overlay__title">
            Optimizing the BigCommerce Path-to-Purchase for Ganson
          </h2>
          <hr className="project-detail-overlay__divider" aria-hidden />
          <div className="project-detail-overlay__meta-row">
            <div className="project-detail-overlay__meta-group project-detail-overlay__meta-group--content">
              <div className="project-detail-overlay__meta-item">
                <h6>Background</h6>
                <p>Ganson Engineering serves a large base of B2B and B2C clients. However, their <strong>BigCommerce store was outdated and hard to navigate</strong>. Users struggled to find parts in the massive catalog. This created a disconnect between their brand reputation and the online customer experience.</p>
              </div>
              <div className="project-detail-overlay__meta-item">
                <h6>The Challenge</h6>
                <p><strong>Turn high traffic into completed sales</strong>. Analytics showed users were browsing but not buying. The site had too much friction. I needed to fix the Information Architecture (IA) and visual design. The challenge was to stop cart abandonment and simplify the buying process for B2C and B2B customers.</p>
              </div>
              <div className="project-detail-overlay__meta-item">
                <h6>The Impact</h6>
                <ul className="project-detail-overlay__meta-list">
                  <li><strong>25% reduction in cart abandonment</strong></li>
                  <li><strong>85+ Production-Ready Screens delivered</strong>, enabling a seamless handoff for development</li>
                  <li>Simplified Procurement by unifying B2B and B2C workflows into a single, intuitive interface</li>
                </ul>
              </div>
            </div>
            <div className="project-detail-overlay__meta-group project-detail-overlay__meta-group--details">
              <div className="project-detail-overlay__meta-item">
                <h6>Role</h6>
                <p>Product Designer</p>
              </div>
              <div className="project-detail-overlay__meta-item">
                <h6>Duration</h6>
                <p>3 months</p>
              </div>
              <div className="project-detail-overlay__meta-item">
                <h6>Website</h6>
                <p>ganson-store.com</p>
              </div>
            </div>
          </div>
        </section>
        <div className="project-detail-overlay__image-block">
          <img
            src="/Images/Ganson/ganson1.png"
            alt="Ganson project"
            width={1440}
            height={960}
          />
        </div>
        <section className="project-detail-overlay__conversions" aria-label="Conversions and workflow">
          <div className="project-detail-overlay__conversions-inner">
            <div className="project-detail-overlay__conversions-header">
              <h2 className="project-detail-overlay__conversions-title">Maximizing Conversions & Workflow Efficiency</h2>
              <p className="project-detail-overlay__conversions-subtext">Users weren&apos;t just &quot;browsing&quot;. They were mission-critical buyers looking for specific products to buy in bulk. The design needed to prioritize find-ability over discovery.</p>
            </div>
            <div className="project-detail-overlay__conversions-points">
              <div className="project-detail-overlay__conversions-point">
                <div className="project-detail-overlay__conversions-point-row">
                  <span className="project-detail-overlay__conversions-point-num">01</span>
                  <h3 className="project-detail-overlay__conversions-point-title">Product Clarity</h3>
                </div>
                <p className="project-detail-overlay__conversions-point-desc">Implementing a high-clarity search and filtering architecture</p>
              </div>
              <div className="project-detail-overlay__conversions-point">
                <div className="project-detail-overlay__conversions-point-row">
                  <span className="project-detail-overlay__conversions-point-num">02</span>
                  <h3 className="project-detail-overlay__conversions-point-title">Recurring Revenue</h3>
                </div>
                <p className="project-detail-overlay__conversions-point-desc">Enhancing product organization and re-ordering tools</p>
              </div>
            </div>
          </div>
        </section>
        <section className="ganson-feature ganson-feature--1" aria-label="Feature 1: Increasing Findability">
          <div className="ganson-feature__header">
            <div className="ganson-feature__header-row">
              <div className="ganson-feature__header-left">
                <p className="ganson-feature__header-num">Feature #1</p>
                <p className="ganson-feature__header-title">Increasing Findability</p>
              </div>
              <div className="ganson-feature__header-right">
                <p className="ganson-feature__user-story-label">User Story</p>
                <p className="ganson-feature__user-story-quote">&ldquo;As a maintenance technician, I need to find a specific replacement part by its serial number and buy it immediately.&rdquo;</p>
              </div>
            </div>
          </div>
          <div className="ganson-feature__grid">
            <div className="ganson-feature__grid-row">
              <div className="ganson-feature__item">
                <div className="ganson-feature__item-panel ganson-feature__item-panel--blue">
                  <img src="/Images/Ganson/ganson2.png" alt="Search and mega menu" width={588} height={400} />
                </div>
                <p className="ganson-feature__caption">Designed an oversized, high-contrast search field integrated directly into the mega menu which removes visual distractions and ensures that both Guest and B2B users can locate a product the moment the page loads.</p>
              </div>
              <div className="ganson-feature__item">
                <div className="ganson-feature__item-panel ganson-feature__item-panel--blue">
                  <img src="/Images/Ganson/ganson3.png" alt="Category landing page" width={588} height={400} />
                </div>
                <p className="ganson-feature__caption">I replaced the traditional marketing home page with a category landing page. This design improved users to browse the catalog immediately, reducing the click-depth to find a product by 50%.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="feature-2-seamless-browsing" className="ganson-feature ganson-feature--2" aria-label="Feature 2: Seamless Browsing">
          <div className="ganson-feature__header">
            <div className="ganson-feature__header-row">
              <div className="ganson-feature__header-left">
                <p className="ganson-feature__header-num">Feature #2</p>
                <p className="ganson-feature__header-title">Seamless Browsing</p>
              </div>
              <div className="ganson-feature__header-right">
                <p className="ganson-feature__user-story-label">User Story</p>
                <p className="ganson-feature__user-story-quote">&ldquo;As a Technical Buyer, I need to rapidly scan and filter products by key specifications directly in the feed so I can identify the correct part without navigating to product detail pages.&rdquo;</p>
              </div>
            </div>
          </div>
          <div className="ganson-feature__grid">
            <div className="ganson-feature__grid-row">
              <div className="ganson-feature__item">
                <img src="/Images/Ganson/ganson4.png" alt="Product category page with filtering and comparison tool" width={588} height={400} />
              </div>
              <div className="ganson-feature__item">
                <img src="/Images/Ganson/ganson5.png" alt="Search results with product matches and key specs" width={588} height={400} />
              </div>
            </div>
          </div>
          <p className="ganson-feature__caption ganson-feature__caption--block">To reduce the friction of finding technical parts, I implemented a <strong>robust comparison tool and filtering logic</strong> that empowers users to isolate specific attributes (Left). Complementing this, the search results (Right) were designed for <strong>rapid validation</strong>, exposing essential data points upfront to <strong>accelerate</strong> the procurement workflow.</p>
        </section>

        <section className="ganson-product-layout ganson-product-layout--detail-page" aria-label="Product detail page">
          <h2 className="ganson-product-layout__label">Product Detail Page</h2>
          <div className="ganson-product-layout__hero">
            <img
              src="/Images/Ganson/ganson6.png"
              alt="Product detail page: breadcrumbs, product images, title, SKU, pricing, quantity, Add to Cart and Add to Wishlist"
              width={1440}
              height={960}
            />
          </div>
        </section>

        <section className="ganson-feature ganson-feature--info-org" aria-label="Feature 3: Information Organization">
          <div className="ganson-feature__header">
            <div className="ganson-feature__header-row">
              <div className="ganson-feature__header-left">
                <p className="ganson-feature__header-num">Feature #3</p>
                <p className="ganson-feature__header-title">Information Organization</p>
              </div>
              <div className="ganson-feature__header-right">
                <p className="ganson-feature__user-story-label">User Story</p>
                <p className="ganson-feature__user-story-quote">&ldquo;As a Technical Buyer, I need to validate specific attributes (like SKU, Condition, and Specs) immediately so that I can confirm compatibility without scrolling through unrelated information.&rdquo;</p>
              </div>
            </div>
          </div>
          <div className="ganson-feature__grid ganson-product-layout__single">
            <div className="ganson-feature__item">
              <img src="/Images/Ganson/ganson7.png" alt="Feature 3: Information Organization — Description, Specifications, Other Details, Related Products" width={1440} height={960} />
            </div>
          </div>
          <p className="ganson-feature__caption ganson-feature__caption--block">
            To reduce the friction of finding technical parts, I implemented a <strong>robust comparison tool and filtering logic</strong> that empowers users to isolate specific attributes (Left).
            Complementing this, the <strong>search results (Right)</strong> were designed for <strong>rapid validation</strong>, exposing essential data points upfront to accelerate the procurement
            workflow.
          </p>
        </section>

        <section className="ganson-feature ganson-feature--4-reorder" aria-label="Feature 4: Project Lists and Re-ordering">
          <div className="ganson-feature__header">
            <div className="ganson-feature__header-row">
              <div className="ganson-feature__header-left">
                <p className="ganson-feature__header-num">Feature #4</p>
                <p className="ganson-feature__header-title">Project Lists &amp; Re-ordering</p>
              </div>
              <div className="ganson-feature__header-right">
                <p className="ganson-feature__user-story-label">User Story</p>
                <p className="ganson-feature__user-story-quote">
                  &ldquo;As a Procurement Manager, I need to organize parts into separate lists (&lsquo;Warehouse A&rsquo; vs. &lsquo;Warehouse B&rsquo;) so that I can quickly re-order for specific
                  projects without searching for individual items every month.&rdquo;
                </p>
              </div>
            </div>
          </div>
          <div className="ganson-feature__grid ganson-product-layout__single">
            <div className="ganson-feature__item">
              <img
                src="/Images/Ganson/ganson8.png"
                alt="Feature 4: Project Lists and Re-ordering — wishlist view with project lists and actions"
                width={1440}
                height={960}
              />
            </div>
          </div>
        </section>

        <div className="project-detail-overlay__image-block" aria-label="Additional screens: product detail, about us, compare products">
          <img
            src="/Images/Ganson/ganson9.png"
            alt="Additional screens: product detail, about us, compare products on mobile"
            width={1440}
            height={960}
          />
        </div>
      </div>
    </div>
  );
}
