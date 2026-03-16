import { useEffect, useRef } from 'react';
import { motion, type Variants } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { awardsData } from '../../data/awards';
import { useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] 
    }
  }
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
              ease: 'power2.out',
              scrollTrigger: {
                trigger: block,
                start: 'top 85%',
              },
            }
          );
        } else {
          gsap.set(block, { opacity: 1, y: 0 });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section id="recognition" ref={containerRef} className="py-[5rem] md:py-[8rem] px-6 md:px-12 lg:px-20 bg-[var(--bg)]">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-20"
          variants={fadeInUp}
          initial={!prefersReducedMotion ? "hidden" : "visible"}
          whileInView={!prefersReducedMotion ? "visible" : undefined}
          transition={!prefersReducedMotion ? { duration: 0.9, ease: [0.16, 1, 0.3, 1] } : undefined}
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Section Label */}
          <motion.p 
            className="font-mono text-[var(--ta)] text-[0.7rem] tracking-[0.20em] uppercase mb-6"
            initial={!prefersReducedMotion ? { opacity: 0, x: -12 } : { opacity: 1 }}
            whileInView={!prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 1 }}
            transition={!prefersReducedMotion ? { duration: 0.4, ease: 'easeOut' } : undefined}
            viewport={{ once: true }}
          >
            [ 05 — RECOGNITION ]
          </motion.p>
          
          {/* Section Headline — Larger */}
          <motion.h2 
            className="font-display text-[clamp(3.5rem,6vw,6rem)] text-[var(--t1)] leading-[0.92] tracking-[-0.025em] uppercase mb-6"
            variants={fadeInUp}
          >
            THE RECORD<br />
            SPEAKS.
          </motion.h2>
          
          <motion.p 
            className="font-body text-[1.125rem] italic text-[var(--t2)]"
            variants={fadeInUp}
          >
            Five awards across seven years — each one earned in a different arena.
          </motion.p>
        </motion.div>

        {/* Awards List — More dramatic, larger titles */}
        <div className="flex flex-col">
          {awardsData.map((award, index) => (
            <motion.div
              key={index}
              ref={(el) => blocksRef.current[index] = el}
              className="py-[4rem] border-b border-[var(--border)] first:border-t"
              variants={itemVariant}
              initial={!prefersReducedMotion ? "hidden" : "visible"}
              whileInView={!prefersReducedMotion ? "visible" : undefined}
              viewport={{ once: true, amount: 0.1 }}
            >
              {/* Year label */}
              <p className="font-mono text-[0.7rem] text-[var(--ta)] tracking-[0.20em] uppercase mb-6">
                {award.year}
              </p>
              
              {/* Award Title — Much larger, clamp 2.5-4rem */}
              <h3 className="font-display text-[clamp(2.5rem,4vw,4rem)] text-[var(--t1)] uppercase mb-6 leading-[0.95]">
                {award.title}
              </h3>
              
              {/* Event */}
              <p className="font-mono text-[0.7rem] text-[var(--t2)] tracking-[0.20em] uppercase mb-4">
                {award.event}
              </p>
              
              {/* Context */}
              {award.context && (
                <p className="font-body text-[1.0625rem] italic text-[var(--t3)] leading-[1.75] max-w-[800px]">
                  {award.context}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Closing Note */}
        <motion.div 
          className="mt-20 max-w-[680px]"
          variants={fadeInUp}
          initial={!prefersReducedMotion ? "hidden" : "visible"}
          whileInView={!prefersReducedMotion ? "visible" : undefined}
          transition={!prefersReducedMotion ? { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 } : undefined}
          viewport={{ once: true, amount: 0.1 }}
        >
          <p className="font-mono italic text-[0.85rem] text-[var(--t3)] leading-[1.75]">
            10+ years in the Rotary movement. Over 5 years as a standing member of the Rotaract Club of Colombo Mid Town — a club carrying a 40-year legacy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
