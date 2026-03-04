"use client";

import { useRouter } from "next/navigation";
import { useRef, useCallback } from "react";
import { ProjectPageExit } from "@/components/ProjectPageExit";

const DESIGN_DAYS = [
  { id: "day1", img: "designchallenge2", title: "Day 1", desc: "I reimagined the discovery flow with a dark-mode UI, focusing on location-based recommendations and quick-access category filters to help users find plans faster." },
  { id: "day2", img: "designchallenge3", title: "Day 2", desc: "I designed a clean, grid-based interface that simplifies the booking decision. By using visual tags for room capacity and a sticky bottom bar for pricing, the design reduces friction between 'browsing' and 'booking.'", variant: "day2" },
  { id: "day3", img: "designchallenge4", title: "Day 3", desc: "I designed a cohesive post-purchase screen that centers on a visual timeline for package status. By integrating carrier details and a full cost breakdown, the interface reduces the anxiety of 'Where is my order?'", variant: "day3" },
  { id: "day4", img: "designchallenge5", title: "Day 4", desc: "I designed a lock screen widget that prioritizes glanceability for runners. By using a visual progress ring for pace and a micro-chart for splits, users can track performance without breaking their stride to unlock their phone.", variant: "day4" },
  { id: "day5", img: "designchallenge6", title: "Day 5", desc: "I designed a match tracker that prioritizes the live score and game time for instant readability. By layering secondary details like goal scorers below the team names, the design provides a complete match summary at a glance without clutter.", variant: "day5" },
  { id: "day6", img: "designchallenge7", title: "Day 6", desc: "I designed a gamified widget for tracking player props. By using color-coded progress bars (Green for 'Hit', Yellow for 'Pending'), users can instantly gauge the success of their bets without analyzing the raw numbers.", variant: "day6" },
  { id: "day7", img: "designchallenge8", title: "Day 7", desc: "I designed a statistically rich profile page that prioritizes hierarchy. By using a national-flag gradient for visual identity and a tabbed system for data management, the design celebrates the athlete while keeping complex match stats organized.", variant: "day7" },
  { id: "day8", img: "designchallenge9", title: "Day 8", desc: "I designed a premium product page that balances emotion and logic. By pairing an immersive hero image with a clean specification grid, the interface celebrates the car&apos;s beauty while clearly presenting the performance data buyers care about.", variant: "day8" },
  { id: "day9", img: "designchallenge10", title: "Day 9", desc: "I designed a modernized booking flow that uses a floating card system to organize complex travel data. By layering the form over an inspiring background and prioritizing airport codes with bold typography, the design makes starting a trip feel effortless.", variant: "day9" },
  { id: "day10", img: "designchallenge11", title: "Day 10", desc: "I reimagined the Dice App event discovery experience with a focus on personalization. By introducing quick-filter categories and immersive, media-rich event cards, the design helps users find their next gig faster.", variant: "day10" },
  { id: "day11", img: "designchallenge12", title: "Day 11", desc: "I designed an immersive details page that prioritizes atmosphere. By blending the artwork into a deep dark mode and using high-contrast red accents for the 'Buy Tickets' CTA, the interface mimics the cinematic experience while driving conversion.", variant: "day11" },
  { id: "day12", img: "designchallenge13", title: "Day 12", desc: "I reimagined the Yelp app homepage into a context-aware dining assistant. By using time-based greetings ('Ready for Lunch?') and prioritizing large, appetite-inducing photography, the design shifts the experience from 'searching a directory' to 'discovering a meal.'", variant: "day12" },
];

const IMG_BASE = "/Images/Design%20Challenge";

export default function DesignChallengePage() {
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
      <div ref={pageRef} id="design-challenge-page" className="ganson-page">
        <div className="ganson-page__hero" data-reveal>
          <img src={`${IMG_BASE}/designchallenge1.png`} alt="Design Challenge" width={1440} height={960} />
        </div>

        <div className="ganson-page__inner">
          <section className="ganson-page__meta" aria-label="Project metadata" data-reveal data-reveal-delay="80">
            <h1 className="ganson-page__title">Design Challenge</h1>
            <hr className="ganson-page__divider" aria-hidden />
            <div className="ganson-page__meta-row">
              <div className="ganson-page__meta-group ganson-page__meta-group--content">
                <div className="ganson-page__meta-item">
                  <h6>Background</h6>
                  <p>Fresh out of college, I set a strict personal challenge: design and ship one high-fidelity UI concept every single day.</p>
                  <p>The goal was not just &apos;practice,&apos; but to train my design eye for speed and precision without overthinking the initial concept.</p>
                </div>
              </div>
              <div className="ganson-page__meta-group ganson-page__meta-group--details">
                <div className="ganson-page__meta-item">
                  <h6>Role</h6>
                  <p>App Designer</p>
                </div>
                <div className="ganson-page__meta-item">
                  <h6>Duration</h6>
                  <p>12 days</p>
                </div>
              </div>
            </div>
          </section>

          {DESIGN_DAYS.map((day) => (
            <div
              key={day.id}
              className={`design-challenge__day ${day.variant ? `design-challenge__day--${day.variant}` : ""}`}
              data-reveal
              data-reveal-delay="80"
            >
              <div className="design-challenge__day-inner">
                <div className="design-challenge__day-media">
                  <img src={`${IMG_BASE}/${day.img}.png`} alt={`Design Challenge ${day.title}`} width={350} />
                </div>
                <div className="design-challenge__day-content">
                  <h4 className="design-challenge__day-title">{day.title}</h4>
                  <p className="design-challenge__day-desc">{day.desc}</p>
                </div>
              </div>
            </div>
          ))}

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
