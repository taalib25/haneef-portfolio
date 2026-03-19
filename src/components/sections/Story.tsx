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
    // Skip path animation on mobile
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return;
    }

    const ctx = gsap.context(() => {
      const lineEl = lineRef.current;
      const sectionEl = timelineSectionRef.current;

      if (!lineEl || !sectionEl) return;

      if (prefersReducedMotion) {
        gsap.set(".timeline-entry", { opacity: 1, y: 0 });
        gsap.set(".timeline-dot", { scale: 1, opacity: 1 });
        gsap.set(lineEl, { height: "100%" });
        return;
      }

      // Path line draws as user scrolls through the section
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

      // Entry reveal animations
      const entryElements = entriesRef.current.filter((el) => el !== null) as HTMLDivElement[];
      const dotElements = dotsRef.current.filter((el) => el !== null) as HTMLDivElement[];

      entryElements.forEach((entry) => {
        gsap.fromTo(
          entry,
          {
            opacity: 0,
            y: 28,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: entry,
              start: "top 82%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Dot pop animations
      dotElements.forEach((dot) => {
        gsap.fromTo(
          dot,
          {
            scale: 0,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: dot,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });
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
        {/* Section Header - CIGR Style */}
        <div className="mb-10 md:mb-16">
          {/* Section Label with number */}
          <p className="font-mono text-[9.5px] text-[var(--ta)] tracking-[0.10em] uppercase mb-4 md:mb-6">
            [ 01 — THE STORY ]
          </p>

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
          {/* LEFT: the path column */}
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
              const yearFontSize = isHero ? "2.25rem" : "1.75rem";
              const roleFontSize = isHero ? "1.4rem" : "1.25rem";
              const borderSize = isHero ? "3px" : "2px";

              return (
                <div
                  key={index}
                  ref={(el) => {
                    entriesRef.current[index] = el;
                  }}
                  className="timeline-entry relative md:pl-8"
                  style={{
                    paddingTop: "0.5rem",
                    paddingBottom: isHero ? "2.5rem" : "1.5rem",
                    opacity: 1,
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

                  {/* Entry content card */}
                  <div
                    className="w-full"
                    style={{
                      borderTop: `${borderSize} solid ${typeColor}`,
                      ...(isHero && {
                        backgroundColor: "rgba(193,18,31,0.04)",
                        padding: "1.25rem",
                        borderRadius: "0 0 8px 8px",
                      }),
                    }}
                  >
                    {/* Year and Role row */}
                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-3 mb-2 md:mb-3">
                      <div
                        className="font-display text-[var(--t1)] leading-[1] tracking-[-0.02em] block"
                        style={{
                          fontSize: yearFontSize,
                          color: typeColor,
                          fontWeight: 600,
                          fontFeatureSettings: "'liga' 0",
                        }}
                      >
                        {item.year}
                      </div>
                      <div
                        className="font-display text-[var(--t1)] leading-[1] tracking-[-0.015em]"
                        style={{
                          fontSize: roleFontSize,
                          fontWeight: 700,
                        }}
                      >
                        {item.title}
                      </div>
                    </div>

                    {/* Organisation */}
                    <p
                      className="font-body text-xs md:text-sm mb-2 md:mb-3"
                      style={{
                        color: "var(--t3)",
                        fontWeight: 400,
                      }}
                    >
                      {item.organisation}
                    </p>

                    {/* Body */}
                    <div
                      className="font-body leading-[1.75] text-left text-[var(--t2)]"
                      style={{
                        fontSize: "0.95rem",
                        lineHeight: "1.75",
                      }}
                    >
                      {item.body.split("\n\n").map((paragraph, i) => (
                        <p key={i} className="mb-3 last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {/* Stat pills */}
                    {item.statPills && item.statPills.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3 md:mt-4">
                        {item.statPills.map((pill, i) => (
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
