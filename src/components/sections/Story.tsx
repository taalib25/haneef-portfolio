import { useEffect, useRef } from "react";
import { motion, type Variants } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { timelineData } from "../../data/timeline";
import { cn } from "../../lib/cn";
import { useReducedMotion } from "../../hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

const EASE_SMOOTH = [0.16, 1, 0.3, 1] as const;

// Animation variants for scrolling effects
const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE_SMOOTH,
    },
  },
};

export default function Story() {
  const containerRef = useRef<HTMLElement>(null);
  const entriesRef = useRef<(HTMLDivElement | null)[]>([]);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entry entrance animations
      ScrollTrigger.batch(entriesRef.current, {
        onEnter: (elements) => {
          elements.forEach((element, i) => {
            if (!prefersReducedMotion) {
              gsap.fromTo(
                element,
                {
                  opacity: 0,
                  y: 30,
                },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.65,
                  ease: "power2.out",
                  delay: i * 0.05,
                },
              );
            } else {
              gsap.set(element, { opacity: 1, y: 0 });
            }
          });
        },
        once: true,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  const getTypeBadgeStyle = (type: string) => {
    switch (type) {
      case "LEADERSHIP":
        return "bg-(--crimson-dim) text-(--crimson) border-(--crimson-border)";
      case "DISTRICT":
        return "bg-[var(--navy-dim)] text-[var(--navy)] border-[var(--navy-border)]";
      case "PROFESSIONAL":
        return "bg-[var(--navy-dim)] text-[var(--navy-light)] border-[var(--navy-border)]";
      case "AWARD":
        return "bg-(--crimson-dim) text-[var(--crimson-dark)] border-(--crimson-border)";
      default:
        return "bg-(--crimson-dim) text-(--crimson) border-(--crimson-border)";
    }
  };

  return (
    <section
      id="story"
      ref={containerRef}
      className="py-12 md:py-16 px-4 md:px-6 lg:px-8 bg-(--bg)"
    >
      {/* 2px crimson line at top of section opener (full width) */}
      <div className="h-[2px] w-full bg-(--crimson) mb-12" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={
            !prefersReducedMotion ? { opacity: 0, y: 24 } : { opacity: 1 }
          }
          whileInView={
            !prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1 }
          }
          transition={
            !prefersReducedMotion
              ? { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
              : undefined
          }
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Section Label — Chapter-book style */}
          <motion.p
            className="font-mono text-(--ta) text-t-xs tracking-[0.10em] uppercase mb-4 md:mb-6"
            initial={
              !prefersReducedMotion ? { opacity: 0, x: -12 } : { opacity: 1 }
            }
            whileInView={
              !prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 1 }
            }
            transition={
              !prefersReducedMotion
                ? { duration: 0.4, ease: "easeOut" }
                : undefined
            }
            viewport={{ once: true }}
          >
            [ 01 — THE STORY ]
          </motion.p>

          {/* Section Headline — Scaled down */}
          <motion.h2
            className="font-display text-t-4xl text-(--t1) leading-[0.92] tracking-[-0.025em] uppercase mb-6 md:mb-8"
            initial={
              !prefersReducedMotion ? { opacity: 0, y: 24 } : { opacity: 1 }
            }
            whileInView={
              !prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1 }
            }
            transition={
              !prefersReducedMotion
                ? { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.05 }
                : undefined
            }
            viewport={{ once: true, amount: 0.1 }}
          >
            ONE CAREER.
            <br />
            TWO ARENAS.
            <br />
            ONE DIRECTION.
          </motion.h2>

          {/* Opening paragraph */}
          <motion.div
            variants={staggerContainer}
            initial={!prefersReducedMotion ? "hidden" : "visible"}
            whileInView={!prefersReducedMotion ? "visible" : undefined}
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-4 md:space-y-6 max-w-6xl"
          >
            <motion.p
              className="font-body text-t-base text-(--t2) leading-[1.75]"
              variants={itemVariant}
            >
              My professional journey has been shaped by the power of
              perspective. As a Public Relations professional, I build
              narratives, strengthen reputations, and create meaningful
              connections between people, organisations, and ideas. That same
              instinct — to understand before leading, to communicate before
              directing — is what drives everything I do in Rotaract.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Timeline — Vertical Magazine Stack with Year Anchors */}
        <motion.div
          className="relative"
          initial={!prefersReducedMotion ? { opacity: 0 } : { opacity: 1 }}
          whileInView={!prefersReducedMotion ? { opacity: 1 } : { opacity: 1 }}
          transition={
            !prefersReducedMotion
              ? { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }
              : undefined
          }
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="flex flex-col">
            {timelineData.map((item, index) => {
              const isHero = item.isHero;

              return (
                <motion.div
                  key={index}
                  ref={(el) => {
                    entriesRef.current[index] = el;
                  }}
                  className={cn(
                    "relative w-full py-6 md:py-8",
                    // Hero entry gets 4px crimson left border
                    isHero && "border-l-4 border-l-(--crimson) pl-4 md:pl-6",
                    // Non-hero entries get bottom separator
                    !isHero && "border-b border-(--border)"
                  )}
                >
                   {/* Desktop: Two column layout */}
                  <div className="flex flex-col md:flex-row gap-3 md:gap-4">
                    {/* Left column: Year and Type */}
                    <div className="md:w-28 shrink-0 flex flex-row md:flex-col gap-2 md:gap-2 items-start md:items-start pt-1">
                      {/* Year — Refined typography, less prominent */}
                      <span
                        className={cn(
                          "font-display text-[1.5rem] md:text-[1.75rem] text-(--t1) leading-[1] tracking-[-0.02em] relative whitespace-nowrap",
                          isHero ? "text-(--crimson)" : "", // Hero entry has crimson year
                        )}
                      >
                        {item.year}
                        {/* Subtle crimson underline on year labels */}
                        <span className="absolute left-0 bottom-[-3px] h-[1.5px] w-[30px] bg-(--crimson) transition-all duration-300 ease-[0.16,1,0.3,1] group-hover:w-[60px]">
                        </span>
                      </span>

                      {/* Type tag — small pill below year */}
                      <span
                        className={cn(
                          "font-mono text-[0.75rem] tracking-[0.15em] uppercase px-2 py-0.5 border rounded-sm",
                          isHero
                            ? "bg-(--crimson-dim) text-(--crimson) border-(--crimson-border)"
                            : getTypeBadgeStyle(item.type),
                        )}
                      >
                        {item.type}
                      </span>
                    </div>

                    {/* Right column: Content */}
                      <div className="flex-1 max-w-6xl group">
                       {/* Vertical separator line on left edge of right column */}
                      <div
                        className={cn(
                          "absolute left-28 top-0 bottom-0 w-px pointer-events-none",
                          isHero
                            ? "bg-(--crimson) h-[calc(100%-3rem)]"
                            : "bg-(--border)",
                        )}
                      />

                      {/* Title — Hero gets larger size */}
                      <h3
                        className={cn(
                          "font-display text-(--t1) mb-3 uppercase leading-[1.1] transition-colors duration-300 ease-[0.16,1,0.3,1]",
                          isHero ? "text-[1.75rem]" : "text-[1.5rem]",
                          // Title colour shift to --ta on hover
                          "hover:text-(--ta)"
                        )}
                      >
                        {item.title}
                      </h3>

                      {/* Organisation — Jakarta Sans sentence case, quiet */}
                      <p className="font-body text-[0.85rem] text-(--t3) font-normal mb-3">
                        {item.organisation}
                      </p>

                      {/* Body text — Left-aligned for readability */}
                       <div className="font-body text-t-base text-(--t2) leading-[1.75] max-w-6xl">
                        {item.body.split("\n\n").map((paragraph, i) => (
                          <p key={i} className="mb-4 last:mb-0">
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      {/* Stat Pills — Match Work section style */}
                      {item.statPills && item.statPills.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {item.statPills.map((pill, i) => (
                            <span
                              key={i}
                              className={cn(
                                "font-body text-[0.8rem] font-medium px-3 py-1 rounded-[2px]",
                                isHero
                                  ? "text-(--crimson) bg-(--crimson-dim) border border-(--crimson-border)"
                                  : "text-(--crimson) bg-(--crimson-dim) border border-(--crimson-border)",
                              )}
                            >
                              {pill}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Awards */}
                      {item.awards && item.awards.length > 0 && (
                        <div className="mt-3 pt-2.5 border-t border-(--border)">
                          <p className="font-mono text-[0.8rem] text-(--ta) tracking-widest uppercase mb-1.5">
                            AWARDS
                          </p>
                          <ul className="flex flex-col gap-1.5">
                            {item.awards.map((award, i) => (
                              <li
                                key={i}
                                className="font-body text-[0.9rem] text-(--t2) italic"
                              >
                                {award}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}