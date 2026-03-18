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
      className="py-16 md:py-20 px-4 md:px-6 lg:px-8 bg-[var(--bg)]"
    >
      {/* 2px crimson line at top of section opener */}
      <div className="h-[2px] w-full bg-[var(--crimson)] mb-12 md:mb-16" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          {/* Section Label */}
          <p className="font-mono text-[9.5px] text-(--ta) tracking-[0.10em] uppercase mb-4">
            [ 05 — HALL OF HONORS ]
          </p>

          {/* Section Headline */}
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] text-(--t1) leading-[0.95] tracking-[-0.025em] uppercase mb-6">
            Five Honors.
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
              className="award-item py-[1.15rem] md:py-[1.4rem] border-b border-[rgba(120,0,0,0.12)] first:border-t first:border-[rgba(120,0,0,0.12)] transition-colors duration-200 ease group"
            >
              {/* Desktop grid layout */}
              <div className="hidden md:grid md:grid-cols-[120px_1fr_1.5fr] md:gap-10 md:items-baseline">
                {/* Year */}
                <span className="font-mono text-[9px] tracking-[0.06em] text-[rgba(193,18,31,0.35)] flex-shrink-0">
                  {award.year}
                </span>

                {/* Award Title */}
                <h3 className="font-display text-[1.2rem] font-bold text-(--t1) tracking-[-0.015em] leading-[1.1] transition-colors duration-200 ease group-hover:text-(--crimson)">
                  {award.title}
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
                {/* Year badge */}
                <span className="font-mono text-[9px] tracking-[0.06em] text-[rgba(193,18,31,0.35)] inline-block mb-2">
                  {award.year}
                </span>

                {/* Award Title */}
                <h3 className="font-display text-[1.1rem] font-bold text-(--t1) tracking-[-0.015em] leading-[1.1] transition-colors duration-200 ease group-hover:text-(--crimson) mb-2">
                  {award.title}
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

        {/* Closing Note — Legacy Statement */}
        <div className="mt-16">
          <div className="border-t border-b border-[rgba(120,0,0,0.12)] py-8">
            <p className="font-mono text-[9px] tracking-[0.12em] text-(--t3) uppercase mb-3">
              The Foundation
            </p>
            <p className="font-body text-[1rem] text-(--t2) leading-[1.75]">
              10+ years in the Rotary movement · 5+ years with Rotaract Club of Colombo Mid Town ·
              <span className="text-(--crimson)"> Carrying a 40-year legacy forward</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
