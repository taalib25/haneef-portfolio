import { useEffect, useRef } from "react";
import { motion, type Variants } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { awardsData } from "../../data/awards";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { Trophy, Award, Medal, Star, Crown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const EASE_SMOOTH = [0.16, 1, 0.3, 1] as const;

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_SMOOTH },
  },
};

// Prestige tier icons based on award level
const tierIcons = [Crown, Trophy, Medal, Award, Star];

export default function Recognition() {
  const containerRef = useRef<HTMLElement>(null);
  const blocksRef = useRef<(HTMLDivElement | null)[]>([]);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const ctx = gsap.context(() => {
      blocksRef.current.forEach((block) => {
        if (!block) return;
        if (!prefersReducedMotion) {
          gsap.fromTo(
            block,
            {
              opacity: 0,
              y: 20,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: block,
                start: "top 85%",
              },
            },
          );
        } else {
          gsap.set(block, { opacity: 1, y: 0 });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      id="recognition"
      ref={containerRef}
      className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-(--bg)"
    >
      {/* 2px crimson rule at section top (wall of honour) */}
      <div className="h-[2px] w-full bg-(--crimson) mb-12" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header — Hall of Fame Style */}
        <motion.div
          className="mb-20 text-center"
          variants={fadeInUp}
          initial={!prefersReducedMotion ? "hidden" : "visible"}
          whileInView={!prefersReducedMotion ? "visible" : undefined}
          transition={
            !prefersReducedMotion
              ? { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
              : undefined
          }
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Section Label */}
          <motion.p
            className="font-mono text-(--ta) text-t-xs tracking-[0.10em] uppercase mb-4"
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
            [ 05 — HALL OF HONORS ]
          </motion.p>

          {/* Section Headline */}
          <motion.h2
            className="font-display text-[clamp(2.5rem,5vw,4rem)] text-(--t1) leading-[0.95] tracking-[-0.02em] uppercase mb-6"
            variants={fadeInUp}
          >
            A Legacy of
            <br />
            <span className="text-(--crimson)">Excellence</span>
          </motion.h2>

          <motion.p
            className="font-body text-[1.1rem] text-(--t2) italic max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Five distinguished honors across seven years — each representing
            mastery in a different arena of leadership.
          </motion.p>
        </motion.div>

        {/* Prestige divider */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-(--crimson-border)" />
          <Star className="w-5 h-5 text-(--crimson)" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-(--crimson-border)" />
        </div>

        {/* Awards Grid — Hall of Fame Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awardsData.map((award, index) => {
            const TierIcon = tierIcons[index % tierIcons.length];
            const isTopTier = index < 3;

            return (
              <motion.div
                key={index}
                ref={(el) => {
                  blocksRef.current[index] = el;
                }}
                className={`group relative bg-[var(--bg-card)] border ${isTopTier ? 'border-[var(--crimson-border)]' : 'border-(--border)'} p-8 transition-all duration-300 hover:border-[var(--crimson)] hover:shadow-xl hover:shadow-[var(--crimson-dim)]`}
                variants={fadeInUp}
                initial={!prefersReducedMotion ? "hidden" : "visible"}
                whileInView={!prefersReducedMotion ? "visible" : undefined}
                viewport={{ once: true, amount: 0.1 }}
              >
                {/* Prestige badge corner */}
                <div className={`absolute top-0 right-0 w-20 h-20 ${isTopTier ? 'bg-[var(--crimson-dim)]' : 'bg-[var(--navy-dim)]'} clip-path-polygon opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                     style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}>
                  <TierIcon className="w-6 h-6 text-(--crimson) absolute top-2 right-2" />
                </div>

                {/* Icon badge */}
                <div className={`w-14 h-14 ${isTopTier ? 'bg-[var(--crimson-dim)]' : 'bg-[var(--navy-dim)]'} flex items-center justify-center mb-6 rounded-sm group-hover:scale-110 transition-transform duration-300`}>
                  <TierIcon className={`w-7 h-7 ${isTopTier ? 'text-[var(--crimson)]' : 'text-[var(--navy)]'}`} />
                </div>

                {/* Year badge */}
                <div className="mb-4">
                  <span className="font-mono text-[0.75rem] text-(--ta) tracking-[0.10em] uppercase bg-[var(--bg-hero)] px-3 py-1 border border-(--border)">
                    {award.year}
                  </span>
                </div>

                {/* Award Title */}
                <h3 className="font-display text-[1.35rem] text-(--t1) uppercase mb-3 leading-[1.2] group-hover:text-(--crimson) transition-colors duration-300">
                  {award.title}
                </h3>

                {/* Event */}
                <p className="font-body text-[0.9rem] text-(--t2) leading-[1.65] mb-3">
                  {award.event}
                </p>

                {/* Context — italic, smaller */}
                {award.context && (
                  <p className="font-body text-[0.85rem] text-(--t3) italic leading-[1.65]">
                    {award.context}
                  </p>
                )}

                {/* Hover accent bar */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--crimson)] group-hover:w-full transition-all duration-500 ease-[0.16,1,0.3,1]" />
              </motion.div>
            );
          })}
        </div>

        {/* Closing Note — Legacy Statement */}
        <motion.div
          className="mt-20 text-center"
          variants={fadeInUp}
          initial={!prefersReducedMotion ? "hidden" : "visible"}
          whileInView={!prefersReducedMotion ? "visible" : undefined}
          transition={
            !prefersReducedMotion
              ? { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }
              : undefined
          }
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="inline-block bg-[var(--bg-card)] border border-(--cb) px-10 py-8">
            <p className="font-mono text-[0.85rem] text-(--t3) tracking-[0.15em] uppercase mb-3">
              The Foundation
            </p>
            <p className="font-body text-[1rem] text-(--t2) leading-[1.75]">
              10+ years in the Rotary movement · 5+ years with Rotaract Club of Colombo Mid Town ·
              <span className="text-(--crimson)"> Carrying a 40-year legacy forward</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}