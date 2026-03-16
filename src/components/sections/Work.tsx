import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '../../lib/cn';
import { useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export default function Work() {
  const containerRef = useRef<HTMLElement>(null);
  const entriesRef = useRef<(HTMLDivElement | null)[]>([]);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.batch(entriesRef.current, {
        onEnter: (elements) => {
          elements.forEach((element) => {
            if (!prefersReducedMotion) {
              gsap.fromTo(
                element,
                {
                  opacity: 0,
                  y: 24,
                },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.65,
                  ease: 'power2.out',
                }
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

  return (
    <section id="work" ref={containerRef} className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-[var(--bg)]">
      {/* 2px crimson line at top of section opener */}
      <div className="h-[2px] w-full bg-[var(--crimson)] mb-12" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-20"
          initial={!prefersReducedMotion ? { opacity: 0, y: 24 } : { opacity: 1 }}
          whileInView={!prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1 }}
          transition={!prefersReducedMotion ? { duration: 0.9, ease: [0.16, 1, 0.3, 1] } : undefined}
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Section Label */}
          <motion.p
            className="font-mono text-[var(--ta)] text-[0.8rem] tracking-[0.10em] uppercase mb-6"
            initial={!prefersReducedMotion ? { opacity: 0, x: -12 } : { opacity: 1 }}
            whileInView={!prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 1 }}
            transition={!prefersReducedMotion ? { duration: 0.4, ease: 'easeOut' } : undefined}
            viewport={{ once: true }}
          >
            [ 02 — WORK ]
          </motion.p>

          {/* Section Headline */}
          <motion.h2
            className="font-display text-[clamp(2.5rem,5vw,4rem)] text-[var(--t1)] leading-[0.95] uppercase mb-6"
            initial={!prefersReducedMotion ? { opacity: 0, y: 24 } : { opacity: 1 }}
            whileInView={!prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1 }}
            transition={!prefersReducedMotion ? { duration: 0.9, ease: [0.16, 1, 0.3, 1] } : undefined}
            viewport={{ once: true, amount: 0.1 }}
          >
            WHERE THE<br />
            CRAFT LIVES.
          </motion.h2>

          <motion.p
            className="font-body text-[1.125rem] text-[var(--t2)]"
            initial={!prefersReducedMotion ? { opacity: 0, y: 24 } : { opacity: 1 }}
            whileInView={!prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1 }}
            transition={!prefersReducedMotion ? { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 } : undefined}
            viewport={{ once: true, amount: 0.1 }}
          >
            The professional foundation behind the leadership record.
          </motion.p>
        </motion.div>

        {/* Two-Column Editorial Layout */}
        <div className="relative">
          {/* Vertical divider - desktop only */}
          <div className="hidden md:block absolute left-[47%] top-0 bottom-0 w-px bg-[var(--border)]" />

          <div className="flex flex-col md:flex-row gap-12 md:gap-0">
            {/* PR Wire Entry - Left Column */}
            <motion.div
              ref={(el) => { entriesRef.current[0] = el; }}
              className="md:w-[45%] md:pr-12"
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
              animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Company and Date - quiet row */}
              <div className="flex justify-between items-baseline mb-4 pb-3 border-b border-[var(--border)]">
                <p className="font-body text-[0.85rem] text-[var(--t3)] font-normal">
                  PR Wire
                </p>
                <p className="font-body text-[0.85rem] text-[var(--t3)] font-normal">
                  May 2023 – Present
                </p>
              </div>

              {/* Role Title */}
              <h3 className="font-display font-bold text-[1.75rem] md:text-[1.75rem] text-[var(--t1)] uppercase mb-6 leading-[1.1]">
                Strategic PR & Reputation Executive
              </h3>

              {/* Body Paragraphs */}
              <div className="font-body text-[1.0625rem] text-[var(--t2)] leading-[1.85] mb-8">
                <p className="mb-[1.25rem]">
                  Develop and execute strategies to create and uphold a positive public image for clients. Seasonal review of all PR activities, with ad-hoc adjustments aligned to current trends and business needs.
                </p>
                <p>
                  Work closely with the marketing team to develop communication strategies that cultivate and strengthen relationships with target audiences, external partners, and key media outlets — translating commercial objectives into credible, sustained narratives.
                </p>
              </div>

              {/* Tag Pills */}
              <div className="flex flex-wrap gap-2 mt-[1.5rem]">
                {['Reputation Strategy', 'Media Relations', 'Marketing Communications'].map((tag, i) => (
                  <span
                    key={i}
                    className="font-body text-[0.8rem] font-medium text-[var(--crimson)] bg-[var(--crimson-dim)] border border-[var(--crimson-border)] px-3 py-1 rounded-[2px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* ChildFund Entry - Right Column */}
            <motion.div
              ref={(el) => { entriesRef.current[1] = el; }}
              className="md:w-[45%] md:pl-12 md:ml-auto"
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
              animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              {/* Company and Date - quiet row */}
              <div className="flex justify-between items-baseline mb-4 pb-3 border-b border-[var(--border)]">
                <p className="font-body text-[0.85rem] text-[var(--t3)] font-normal">
                  ChildFund Sri Lanka
                </p>
                <p className="font-body text-[0.85rem] text-[var(--t3)] font-normal">
                  July 2022 – March 2023
                </p>
              </div>

              {/* Role Title */}
              <h3 className="font-display font-bold text-[1.75rem] md:text-[1.75rem] text-[var(--t1)] uppercase mb-6 leading-[1.1]">
                Business Development Executive
              </h3>

              {/* Body Paragraphs */}
              <div className="font-body text-[1.0625rem] text-[var(--t2)] leading-[1.85] mb-8">
                <p className="mb-[1.25rem]">
                  International development sector organisation working in Sri Lanka for over four decades. Operations across 10 districts — central and provincial — reaching 200,000+ children, youth, families, and communities.
                </p>
                <p>
                  Supported business development functions in an organisation where the stakes of every decision are measured in lives, not revenue. Developed a sharper instinct for sustainable impact versus performative activity — a distinction that now defines how Haneef approaches every Rotaract project.
                </p>
              </div>

              {/* Tag Pills */}
              <div className="flex flex-wrap gap-2 mt-[1.5rem]">
                {['Development Sector', 'Community Impact', '10 Districts'].map((tag, i) => (
                  <span
                    key={i}
                    className="font-body text-[0.8rem] font-medium text-[var(--crimson)] bg-[var(--crimson-dim)] border border-[var(--crimson-border)] px-3 py-1 rounded-[2px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Education Block */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 md:gap-2 pt-10 mt-12 border-t border-[var(--border)]"
          initial={!prefersReducedMotion ? { opacity: 0, y: 40 } : { opacity: 1 }}
          whileInView={!prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1 }}
          transition={!prefersReducedMotion ? { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 } : undefined}
          viewport={{ once: true, amount: 0.1 }}
        >
          <p className="font-body text-[0.9rem] text-[var(--t3)] font-normal">
            Diploma in Marketing · CIM · Strategy College of Business
          </p>
          <span className="hidden md:inline text-[var(--t3)]">·</span>
          <p className="font-body text-[0.9rem] text-[var(--t3)] font-normal">
            Primary & Secondary Education · Amal International School
          </p>
        </motion.div>
      </div>
    </section>
  );
}