import { useEffect, useRef } from "react";
import { motion, type Variants } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { awardsData } from "../../data/awards";
import { useReducedMotion } from "../../hooks/useReducedMotion";

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

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: EASE_SMOOTH,
    },
  },
};

export default function Recognition() {
  const containerRef = useRef<HTMLElement>(null);
  const blocksRef = useRef<(HTMLDivElement | null)[]>([]);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const ctx = gsap.context(() => {
      blocksRef.current.forEach((block, i) => {
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
        {/* Section Header */}
        <motion.div
          className="mb-20"
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
            className="font-mono text-(--ta) text-t-xs tracking-[0.20em] uppercase mb-6"
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
            [ 05 — RECOGNITION ]
          </motion.p>

          {/* Section Headline — Larger */}
          <motion.h2
            className="font-display text-t-4xl text-(--t1) leading-[0.92] tracking-[-0.025em] uppercase mb-6"
            variants={fadeInUp}
          >
            THE RECORD
            <br />
            SPEAKS.
          </motion.h2>

          <motion.p
            className="font-body text-t-lg italic text-(--t2)"
            variants={fadeInUp}
          >
            Five awards across seven years — each one earned in a different
            arena.
          </motion.p>
        </motion.div>

        {/* First award gets 1px --crimson-border rule instead of neutral one */}
        <div className="h-[1px] bg-(--crimson-border) mb-6" />

        {/* Awards List — Wall of Honour */}
        <div className="flex flex-col">
          {awardsData.map((award, index) => (
            <motion.div
              key={index}
              ref={(el) => {
                blocksRef.current[index] = el;
              }}
              className={`py-20 ${index < awardsData.length - 1 ? "border-b border-(--border)" : ""}`}
              variants={itemVariant}
              initial={!prefersReducedMotion ? "hidden" : "visible"}
              whileInView={!prefersReducedMotion ? "visible" : undefined}
              viewport={{ once: true, amount: 0.1 }}
            >
              {/* Year label above rule */}
              <p className="font-mono text-t-xs text-(--ta) tracking-[0.20em] uppercase mb-4">
                {award.year}
              </p>

              {/* Container for the animated underline */}
              <div className="relative mb-4">
                {/* Award Title — Monumental with wipe animation */}
                <motion.h3
                  className="font-display text-t-3xl text-(--t1) uppercase mb-0 leading-[0.95]"
                  initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
                  whileInView={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                >
                  {award.title}
                  {/* Animated underline: 2px --crimson, width 0→60px on view */}
                  <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-(--crimson) transition-all duration-[0.4s] delay-[0.6s] ease-[0.16,1,0.3,1] group-hover:w-[60px]">
                  </span>
                </motion.h3>
              </div>

              {/* Event and context */}
              <motion.p
                className="font-body text-[1rem] text-(--t2) italic leading-[1.75] max-w-200"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.2,
                }}
                viewport={{ once: true }}
              >
                {award.event}
                {award.context && ` — ${award.context}`}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Closing Note */}
        <motion.div
          className="mt-20 max-w-170"
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
          <p className="font-mono italic text-[0.875rem] text-(--t3) leading-[1.75]">
            10+ years in the Rotary movement. Over 5 years as a standing member
            of the Rotaract Club of Colombo Mid Town — a club carrying a 40-year
            legacy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}