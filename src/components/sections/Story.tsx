import { useEffect, useRef } from "react";
import { getReducedMotion } from "../../lib/scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { timelineData } from "../../data/timeline";

gsap.registerPlugin(ScrollTrigger);

const COLOR_MAP: Record<string, string> = {
  LEADERSHIP: "var(--crimson)",
  PROFESSIONAL: "var(--navy)",
  DISTRICT: "var(--navy-light)",
};

const SOLID_COLOR_MAP: Record<string, string> = {
  LEADERSHIP: "#C1121F",
  PROFESSIONAL: "#003049",
  DISTRICT: "#669BBC",
};

export default function Story() {
  const timelineSectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);
  const entriesRef = useRef<(HTMLDivElement | null)[]>([]);
  const prefersReducedMotion = getReducedMotion();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const lineEl = lineRef.current;
      const sectionEl = timelineSectionRef.current;

      if (!sectionEl) return;

      if (prefersReducedMotion) {
        gsap.set(".timeline-entry", { opacity: 1, y: 0 });
        gsap.set(".timeline-dot", { scale: 1, opacity: 1 });
        if (lineEl) gsap.set(lineEl, { height: "100%" });
        return;
      }

      // ── PATH LINE (desktop only)
      if (lineEl && sectionEl && window.innerWidth >= 768) {
        gsap.to(lineEl, {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionEl,
            start: "top 60%",
            end: "bottom 80%",
            scrub: 1.2,
          },
        });
      }

      // ── ENTRY REVEALS (all screen sizes)
      const entryElements = entriesRef.current.filter((el) => el !== null) as HTMLDivElement[];
      const dotElements = dotsRef.current.filter((el) => el !== null) as HTMLDivElement[];

      // Check which entries are already in viewport on load
      entryElements.forEach((entry) => {
        const rect = entry.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.9;

        if (isInView) {
          gsap.set(entry, { opacity: 1, y: 0 });
          return;
        }

        gsap.fromTo(
          entry,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: "power2.out",
            scrollTrigger: {
              trigger: entry,
              start: "top 80%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      });

      // ── DOT ANIMATIONS (desktop only)
      if (window.innerWidth >= 768) {
        dotElements.forEach((dot) => {
          gsap.fromTo(
            dot,
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.4,
              ease: "back.out(2)",
              scrollTrigger: {
                trigger: dot,
                start: "top 82%",
                toggleActions: "play none none none",
                once: true,
              },
            }
          );
        });
      }
    }, timelineSectionRef);

    return () => {
      ctx.revert();
    };
  }, [prefersReducedMotion]);

  return (
    <section
      id="story"
      ref={timelineSectionRef}
      className="relative py-10 md:py-16 px-4 md:px-6 lg:px-8 bg-[var(--bg)]"
      style={{ scrollMarginTop: "80px" }}
    >
      {/* 2px crimson line at top of section opener */}
      <div className="h-[2px] w-full bg-[var(--crimson)] mb-8 md:mb-12" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 md:mb-16">
          {/* Main Headline */}
          <h2 className="font-display text-t-3xl md:text-t-hero text-[var(--t1)] leading-[0.92] tracking-[-0.025em] uppercase">
            ONE CAREER.
            <br />
            <span className="text-[var(--crimson)]">TWO ARENAS.</span>
            <br />
            ONE DIRECTION.
          </h2>
        </div>

        <div className="space-y-3 md:space-y-4 mt-6 md:mt-8">
          <p className="font-body text-t-base text-[var(--t2)] leading-[1.75] max-w-none">
            My work in Public Relations is built on one skill: understanding people before trying to lead them. I build narratives, protect reputations, and connect organisations with the audiences that matter. That same instinct drives how I approach Rotaract. Listen first. Communicate clearly. Then lead.
          </p>
        </div>

        {/* Timeline Body */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-0">
          {/* LEFT: the path column (desktop only) */}
          <div
            ref={pathRef}
            className="relative flex-shrink-0 hidden md:block"
            style={{ width: "40px" }}
          >
            {/* Background guide line */}
            <div
              className="absolute top-0 bottom-0 left-1/2"
              style={{
                width: "1px",
                background: "rgba(193,18,31,0.15)",
                transform: "translateX(-50%)",
              }}
            />
            {/* The fill line that GSAP animates */}
            <div
              ref={lineRef}
              className="absolute top-0 left-1/2"
              style={{
                width: "2px",
                height: "0",
                background: "var(--crimson)",
                transform: "translateX(-50%)",
                transformOrigin: "top",
              }}
            />
          </div>

          {/* RIGHT: entries */}
          <div className="flex-1 space-y-6 md:space-y-8">
            {timelineData.map((item, index) => {
              const isHero = item.isHero;
              const typeColor = COLOR_MAP[item.type] || COLOR_MAP.LEADERSHIP;
              const solidTypeColor = SOLID_COLOR_MAP[item.type] || SOLID_COLOR_MAP.LEADERSHIP;

              // Responsive font sizes using clamp()
              const yearFontSize = isHero
                ? "clamp(1.3rem, 4vw, 1.9rem)"
                : "clamp(1.1rem, 3.5vw, 1.5rem)";
              const roleFontSize = isHero
                ? "clamp(1rem, 2.5vw, 1.2rem)"
                : "clamp(0.95rem, 2vw, 1.1rem)";

              return (
                <div
                  key={index}
                  ref={(el) => {
                    entriesRef.current[index] = el;
                  }}
                  className="timeline-entry relative pl-4 md:pl-8"
                  style={{
                    paddingTop: "0.5rem",
                    paddingBottom: isHero ? "2rem" : "1.5rem",
                    // Mobile: border-left instead of dot
                    borderLeft: window.innerWidth < 768 ? `2px solid ${typeColor}` : "none",
                    opacity: 1, // Will be overridden by GSAP
                  }}
                >
                  {/* Dot positioned on the path - hidden on mobile */}
                  <div
                    ref={(el) => {
                      dotsRef.current[index] = el;
                    }}
                    className="timeline-dot absolute rounded-full border-2 border-white hidden md:block"
                    style={{
                      left: "-2.25rem",
                      top: "12px",
                      width: "12px",
                      height: "12px",
                      background: typeColor,
                      boxShadow: `0 0 0 3px ${solidTypeColor}26`,
                      zIndex: 10,
                    }}
                  />

                  {/* Entry content */}
                  <div
                    className="w-full pt-4"
                  >
                    {/* Year - always on its own line, above role */}
                    <div
                      className="font-display leading-[1] tracking-[-0.02em] block mb-[0.15rem]"
                      style={{
                        fontSize: yearFontSize,
                        color: typeColor,
                        fontWeight: 700,
                        fontFeatureSettings: "'liga' 0",
                      }}
                    >
                      {item.year}
                    </div>

                    {/* Short bar under year */}
                    <div
                      className="w-[24px] h-[2px] mb-[0.75rem]"
                      style={{ background: typeColor }}
                    />

                    {/* Role title - separate line below year */}
                    <div
                      className="font-display text-[var(--t1)] leading-[1] tracking-[-0.015em] block mb-[0.2rem]"
                      style={{
                        fontSize: roleFontSize,
                        fontWeight: 700,
                      }}
                    >
                      {item.title}
                    </div>

                    {/* Organisation - quiet, supporting */}
                    <p
                      className="font-body text-[0.85rem] md:text-[0.9rem] mb-[0.75rem]"
                      style={{
                        color: "var(--t3)",
                        fontWeight: 500,
                      }}
                    >
                      {item.organisation}
                    </p>

                    {/* Divider */}
                    <div className="h-px w-full mb-[0.75rem]" style={{ background: "rgba(15,6,8,0.07)" }} />

                    {/* Body */}
                    <div
                      className="font-body leading-[1.8] text-left text-[var(--t2)]"
                      style={{
                        fontSize: "1rem",
                        fontWeight: 450,
                      }}
                    >
                      {item.body.split("\n\n").map((paragraph, i) => (
                        <p key={i} className="mb-3 last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {/* Stat pills - limit to 3 on mobile */}
                    {item.statPills && item.statPills.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3 md:mt-4">
                        {item.statPills.slice(0, window.innerWidth < 768 ? 3 : undefined).map((pill, i) => (
                          <span
                            key={i}
                            className="font-body font-medium px-3 py-1.5 rounded text-xs md:text-sm border"
                            style={{
                              color: typeColor,
                              borderColor: `${solidTypeColor}40`,
                              backgroundColor: `${solidTypeColor}0D`,
                            }}
                          >
                            {pill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
