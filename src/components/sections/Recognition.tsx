import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { awardsData } from "../../data/awards";
import { useReducedMotion } from "../../hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export default function Recognition() {
  const containerRef = useRef<HTMLElement>(null);
  const awardItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const ctx = gsap.context(() => {
      awardItemsRef.current.forEach((el, i) => {
        if (!el) return;
        if (!prefersReducedMotion) {
          gsap.fromTo(
            el,
            { opacity: 0, y: 14 },
            {
              opacity: 1,
              y: 0,
              duration: 0.55,
              ease: "power2.out",
              delay: i * 0.07,
              scrollTrigger: {
                trigger: el,
                start: "top 86%",
                toggleActions: "play none none none",
              },
            }
          );
        } else {
          gsap.set(el, { opacity: 1, y: 0 });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      id="recognition"
      ref={containerRef}
      className="py-14 md:py-20 px-4 md:px-6 lg:px-8 bg-[var(--bg)]"
      style={{ scrollMarginTop: '80px' }}
    >
      {/* 2px crimson line at top of section opener */}
      <div className="h-[2px] w-full bg-[var(--crimson)] mb-12 md:mb-16" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header - CIGR Style */}
        <div className="mb-10 md:mb-16">

          {/* Section Headline */}
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] text-(--t1) leading-[0.95] tracking-[0.025em] uppercase mb-6">
            Nine Honors
            <br />
            <span className="text-(--crimson)">Seven Years.</span>
          </h2>

          <p className="font-body text-[1rem] text-(--t2) italic max-w-2xl">
            Each award represents a different arena of leadership — from club
            service to district-level initiatives to regional recognition.
          </p>
        </div>

        {/* Awards List — Editorial Style */}
        <div className="mb-16">
          {awardsData.map((award, index) => (
            <div
              key={index}
              ref={(el) => { awardItemsRef.current[index] = el; }}
              className="award-item py-[1.15rem] md:py-[1.4rem] border-b border-[var(--campaign-border-light)] first:border-t first:border-[var(--campaign-border-light)] transition-colors duration-200 ease group"
            >
              {/* Desktop grid layout */}
              <div className="hidden md:grid md:grid-cols-[120px_1fr_1.5fr] md:gap-10 md:items-baseline">
                {/* Year - stays in one line, faded */}
                <span className="font-display text-[1.1rem] font-semibold text-[rgba(122,101,96,0.5)] tracking-[0.01em] flex-shrink-0 whitespace-nowrap">
                  {award.year}
                </span>

                {/* Award Title with level text */}
                <h3 className="font-sans text-[1.2rem] font-bold text-(--t1) tracking-[0.015em] leading-[1.1] transition-colors duration-200 ease group-hover:text-(--crimson)">
                  {award.title}{award.level && <span className="text-[rgba(122,101,96,0.6)]"> — {award.level}</span>}
                </h3>

                {/* Event + Context */}
                <div>
                  <p className="font-body text-[1rem] text-(--t2) leading-[1.75] mb-1">
                    {award.event}
                  </p>
                  {award.context && (
                    <p className="font-body text-[0.9375rem] text-(--t3) leading-[1.72]">
                      {award.context}
                    </p>
                  )}
                </div>
              </div>

              {/* Mobile layout */}
              <div className="md:hidden">
                {/* Year - stays in one line, faded */}
                <span className="font-display text-[1.05rem] font-semibold text-[rgba(122,101,96,0.5)] tracking-[0.01em] inline-block mb-1 whitespace-nowrap">
                  {award.year}
                </span>

                {/* Award Title with level text */}
                <h3 className="font-sans text-[1.1rem] font-bold text-(--t1) tracking-[0.015em] leading-[1.1] transition-colors duration-200 ease group-hover:text-(--crimson) mb-2">
                  {award.title}{award.level && <span className="text-[rgba(122,101,96,0.6)]"> — {award.level}</span>}
                </h3>

                {/* Divider */}
                <div className="h-px w-full bg-[rgba(15,6,8,0.08)] mb-3" />

                {/* Event */}
                <p className="font-body text-[0.9375rem] text-(--t2) leading-[1.72] mb-1">
                  {award.event}
                </p>

                {/* Context */}
                {award.context && (
                  <p className="font-body text-[0.875rem] text-(--t3) leading-[1.65]">
                    {award.context}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
