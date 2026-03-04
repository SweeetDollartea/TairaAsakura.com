"use client";

import { useRouter } from "next/navigation";
import { useRef, useCallback } from "react";

export default function GansonPage() {
  const router = useRouter();
  const pageRef = useRef<HTMLDivElement>(null);

  const handleExit = useCallback(() => {
    const page = pageRef.current;
    if (!page) return;
    page.classList.add("is-exiting");
    const onEnd = () => {
      page.removeEventListener("animationend", onEnd);
      router.push("/");
    };
    page.addEventListener("animationend", onEnd);
  }, [router]);

  return (
    <>
      <button
        type="button"
        className="ganson-page__exit"
        onClick={handleExit}
        aria-label="Back to homepage"
      >
        <svg
          className="ganson-page__exit-icon"
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

      <div ref={pageRef} id="ganson-page" className="ganson-page">
        <div className="ganson-page__hero">
          <img
            src="/Images/Ganson/hero.png"
            alt="Ganson Thermal Printheads"
            width={1440}
            height={840}
          />
        </div>

        <div className="ganson-page__inner">
        <section className="ganson-page__meta" aria-label="Project metadata">
          <h1 className="ganson-page__title">
            Optimizing the BigCommerce Path-to-Purchase for Ganson
          </h1>
          <hr className="ganson-page__divider" aria-hidden />
          <div className="ganson-page__meta-row">
            <div className="ganson-page__meta-group ganson-page__meta-group--content">
              <div className="ganson-page__meta-item">
                <h6>Background</h6>
                <p>
                  Ganson Engineering serves a large base of B2B and B2C clients.
                  However, their{" "}
                  <strong>
                    BigCommerce store was outdated and hard to navigate
                  </strong>
                  . Users struggled to find parts in the massive catalog. This
                  created a disconnect between their brand reputation and the
                  online customer experience.
                </p>
              </div>
              <div className="ganson-page__meta-item">
                <h6>The Challenge</h6>
                <p>
                  <strong>Turn high traffic into completed sales</strong>.
                  Analytics showed users were browsing but not buying. The site
                  had too much friction. I needed to fix the Information
                  Architecture (IA) and visual design. The challenge was to stop
                  cart abandonment and simplify the buying process for B2C and
                  B2B customers.
                </p>
              </div>
              <div className="ganson-page__meta-item">
                <h6>The Impact</h6>
                <ul className="ganson-page__meta-list">
                  <li>
                    <strong>25% reduction in cart abandonment</strong>
                  </li>
                  <li>
                    <strong>85+ Production-Ready Screens delivered</strong>,
                    enabling a seamless handoff for development
                  </li>
                  <li>
                    Simplified Procurement by unifying B2B and B2C workflows into a
                    single, intuitive interface
                  </li>
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
                <p>3 months</p>
              </div>
              <div className="ganson-page__meta-item">
                <h6>Website</h6>
                <p>ganson-store.com</p>
              </div>
              <div className="ganson-page__meta-item ganson-page__meta-item--metrics">
                <h6>Key Metrics</h6>
                <p>Average Order Value (AOV), Conversion Rate</p>
              </div>
            </div>
          </div>
        </section>

        <div className="ganson-page__image-block">
          <img
            src="/Images/Ganson/ganson1.png"
            alt="Ganson project"
            width={1440}
            height={960}
          />
        </div>

        <section
          className="ganson-conversions"
          aria-label="Conversions and workflow"
        >
          <div className="ganson-conversions__inner">
            <div className="ganson-conversions__header">
              <h2 className="ganson-conversions__title">
                Maximizing Conversions & Workflow Efficiency
              </h2>
              <p className="ganson-conversions__subtext">
                Users weren&apos;t just &quot;browsing&quot;. They were
                mission-critical buyers looking for specific products to buy in
                bulk. The design needed to prioritize find-ability over
                discovery.
              </p>
            </div>
            <div className="ganson-conversions__points">
              <div className="ganson-conversions__point">
                <div className="ganson-conversions__point-row">
                  <span className="ganson-conversions__point-num">01</span>
                  <h3 className="ganson-conversions__point-title">
                    Product Clarity
                  </h3>
                </div>
                <p className="ganson-conversions__point-desc">
                  Implementing a high-clarity search and filtering architecture
                </p>
              </div>
              <div className="ganson-conversions__point">
                <div className="ganson-conversions__point-row">
                  <span className="ganson-conversions__point-num">02</span>
                  <h3 className="ganson-conversions__point-title">
                    Recurring Revenue
                  </h3>
                </div>
                <p className="ganson-conversions__point-desc">
                  Enhancing product organization and re-ordering tools
                </p>
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
            <img src="/Images/Ganson/ganson6.png" alt="Product detail page: breadcrumbs, product images, title, SKU, pricing, quantity, Add to Cart and Add to Wishlist" width={1440} height={960} />
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
                <p className="ganson-feature__user-story-quote">
                  &ldquo;As a Technical Buyer, I need to validate specific attributes (like SKU, Condition, and Specs) immediately so that I can confirm compatibility without scrolling through unrelated
                  information.&rdquo;
                </p>
              </div>
            </div>
          </div>
          <div className="ganson-feature__grid ganson-product-layout__single">
            <div className="ganson-feature__item">
              <img
                src="/Images/Ganson/ganson7.png"
                alt="Feature 3: Information Organization — Description, Specifications, Other Details, Related Products"
                width={1440}
                height={960}
              />
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

        <div className="ganson-page__image-block" aria-label="Additional screens: product detail, about us, compare products">
          <img
            src="/Images/Ganson/ganson9.png"
            alt="Additional screens: product detail, about us, compare products on mobile"
            width={1440}
            height={960}
          />
        </div>

        <section className="ganson-feature ganson-feature--3" aria-label="Feature 3: Seamless Branding">
          <div className="ganson-feature__header">
            <div className="ganson-feature__header-row">
              <div className="ganson-feature__header-left">
                <p className="ganson-feature__header-num">Feature #3</p>
                <p className="ganson-feature__header-title">Seamless Branding</p>
              </div>
              <div className="ganson-feature__header-right">
                <p className="ganson-feature__user-story-label">User Story</p>
                <p className="ganson-feature__user-story-quote">&ldquo;As a B2B buyer, I need the store to reflect my company&apos;s brand so that purchasing feels consistent with our identity.&rdquo;</p>
              </div>
            </div>
          </div>
          <div className="ganson-feature__grid">
            <div className="ganson-feature__grid-row">
              <div className="ganson-feature__item">
                <div className="ganson-feature__item-panel ganson-feature__item-panel--green">
                  <img src="/Images/Ganson/ganson2.png" alt="Product detail" width={588} height={400} />
                </div>
                <p className="ganson-feature__caption">Customizable theme and branded experience for B2B accounts, aligning the storefront with each client&apos;s visual identity.</p>
              </div>
              <div className="ganson-feature__item">
                <div className="ganson-feature__item-panel ganson-feature__item-panel--green">
                  <img src="/Images/Ganson/ganson3.png" alt="Related products" width={588} height={400} />
                </div>
                <p className="ganson-feature__caption">Related products and accessories grid to support discovery while maintaining a clean, branded layout.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="ganson-product-layout" aria-label="Product layout and information structure">
          <div className="ganson-feature__header">
            <div className="ganson-feature__header-row">
              <div className="ganson-feature__header-left">
                <p className="ganson-feature__header-num">Product Layout</p>
                <p className="ganson-feature__header-title">Information Structure</p>
              </div>
              <div className="ganson-feature__header-right">
                <p className="ganson-feature__user-story-label">User Story</p>
                <p className="ganson-feature__user-story-quote">&ldquo;I need to see product media, pricing, and add-to-cart in one clear view so I can make a fast decision.&rdquo;</p>
              </div>
            </div>
          </div>
          <div className="ganson-feature__grid ganson-product-layout__single">
            <div className="ganson-feature__item">
              <div className="ganson-feature__item-panel ganson-feature__item-panel--light">
                <img src="/Images/Ganson/ganson1.png" alt="Product detail layout" width={1440} height={960} />
              </div>
              <p className="ganson-feature__caption">Structured product detail with clear hierarchy: product media, name, pricing, quantity selector, add to cart, description, variations, and breadcrumbs for easy navigation.</p>
            </div>
          </div>
        </section>

        <section className="ganson-feature ganson-feature--4" aria-label="Feature 4: Information Organization">
          <div className="ganson-feature__header">
            <div className="ganson-feature__header-row">
              <div className="ganson-feature__header-left">
                <p className="ganson-feature__header-num">Feature #4</p>
                <p className="ganson-feature__header-title">Information Organization</p>
              </div>
              <div className="ganson-feature__header-right">
                <p className="ganson-feature__user-story-label">User Story</p>
                <p className="ganson-feature__user-story-quote">&ldquo;I need specs, features, and downloads in one place so I can evaluate the product without leaving the page.&rdquo;</p>
              </div>
            </div>
          </div>
          <div className="ganson-feature__grid">
            <div className="ganson-feature__grid-row">
              <div className="ganson-feature__item">
                <div className="ganson-feature__item-panel ganson-feature__item-panel--coral">
                  <img src="/Images/Ganson/ganson2.png" alt="Tabs: Overview, Specifications, Features, Downloads" width={588} height={400} />
                </div>
                <p className="ganson-feature__caption">Tabbed content (Overview, Specifications, Features, Downloads) keeps information organized and reduces cognitive load.</p>
              </div>
              <div className="ganson-feature__item">
                <div className="ganson-feature__item-panel ganson-feature__item-panel--coral">
                  <img src="/Images/Ganson/ganson3.png" alt="Related products" width={588} height={400} />
                </div>
                <p className="ganson-feature__caption">Related products and accessories section with clear add actions for quick reordering.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="ganson-feature ganson-feature--5" aria-label="Feature 5: Project Lists and Re-ordering">
          <div className="ganson-feature__header">
            <div className="ganson-feature__header-row">
              <div className="ganson-feature__header-left">
                <p className="ganson-feature__header-num">Feature #5</p>
                <p className="ganson-feature__header-title">Project Lists & Re-ordering</p>
              </div>
              <div className="ganson-feature__header-right">
                <p className="ganson-feature__user-story-label">User Story</p>
                <p className="ganson-feature__user-story-quote">&ldquo;I need to manage my project list, adjust quantities, and get a quote without starting over.&rdquo;</p>
              </div>
            </div>
          </div>
          <div className="ganson-feature__grid ganson-product-layout__single">
            <div className="ganson-feature__item">
              <div className="ganson-feature__item-panel ganson-feature__item-panel--light">
                <img src="/Images/Ganson/ganson1.png" alt="Project list and quote" width={1440} height={960} />
              </div>
              <p className="ganson-feature__caption">Project list with search, My Project and Quote tabs, editable table (SKU, Product Name, Quantity, Unit Price, Total), plus Add Product and Get Quote actions.</p>
            </div>
          </div>
        </section>

        <footer className="ganson-page__footer" role="contentinfo">
          <p className="ganson-page__footer-copyright">© 2025 Taira Asakura</p>
          <div className="ganson-page__footer-pagination" aria-hidden>
            <span className="ganson-page__footer-dot" />
            <span className="ganson-page__footer-dot" />
            <span className="ganson-page__footer-dot" />
          </div>
        </footer>
        </div>
      </div>
    </>
  );
}
