import { useEffect, useRef } from 'react';
import { motion, type Variants } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '../../lib/cn';
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

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.16, 1, 0.3, 1] 
    }
  }
};

export default function Work() {
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.batch(cardsRef.current, {
        onEnter: (elements) => {
          elements.forEach((element, i) => {
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
                  delay: i * 0.15,
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
      <div className="h-[2px] w-[60px] bg-[var(--crimson)] mb-12" />
      
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
            className="font-mono text-[var(--ta)] text-[0.875rem] tracking-[0.20em] uppercase mb-6"
            initial={!prefersReducedMotion ? { opacity: 0, x: -12 } : { opacity: 1 }}
            whileInView={!prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 1 }}
            transition={!prefersReducedMotion ? { duration: 0.4, ease: 'easeOut' } : undefined}
            viewport={{ once: true }}
          >
            [ 02 — WORK ]
          </motion.p>
          
          {/* Section Headline — Larger */}
          <motion.h2 
            className="font-display text-[clamp(3.5rem,6vw,6rem)] text-[var(--t1)] leading-[0.92] tracking-[-0.025em] uppercase mb-6"
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
        
        {/* Work Cards — Cleaner, flat design */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          variants={staggerContainer}
          initial={!prefersReducedMotion ? "hidden" : "visible"}
          whileInView={!prefersReducedMotion ? "visible" : undefined}
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* PR Wire Card */}
          <motion.div
            ref={(el) => cardsRef.current[0] = el}
            className="bg-[var(--bg-card)] border-t-[3px] border-t-[var(--crimson)] border border-[var(--border)] p-[2.5rem] flex flex-col h-full transition-colors duration-300 hover:bg-[var(--bg-card-hover)] hover:border-t-[var(--crimson)]"
            variants={itemVariant}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header row: Company and Date */}
            <div className="flex justify-between items-start mb-4 border-b border-[var(--border)] pb-2">
              <p className="font-mono text-[0.875rem] text-[var(--t3)] uppercase tracking-wider">
                PR WIRE
              </p>
              <p className="font-mono text-[0.875rem] text-[var(--t3)] uppercase tracking-wider">
                May 2023 – Present
              </p>
            </div>
            
            {/* Role — Large and confident */}
            <h3 className="font-display font-bold text-[1.75rem] text-[var(--t1)] uppercase mb-6 leading-[1.1]">
              Strategic PR & Reputation Executive
            </h3>
            
            {/* Horizontal rule */}
            <div className="h-[1px] w-full bg-[var(--border)] mb-6" />
            
            {/* Body */}
            <div className="font-body text-[1.0625rem] text-[var(--t2)] leading-[1.8] mb-8 flex-1">
              <p className="mb-[1.25rem]">
                Develop and execute strategies to create and uphold a positive public image for clients. Seasonal review of all PR activities, with ad-hoc adjustments aligned to current trends and business needs.
              </p>
              <p>
                Work closely with the marketing team to develop communication strategies that cultivate and strengthen relationships with target audiences, external partners, and key media outlets — translating commercial objectives into credible, sustained narratives.
              </p>
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-3 mt-auto">
              {['Reputation Strategy', 'Media Relations', 'Marketing Communications'].map((tag, i) => (
                <span
                  key={i}
                  className="font-mono text-[0.875rem] text-[var(--crimson)] bg-[var(--crimson-dim)] border border-[var(--crimson-border)] px-3 py-1.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
          
          {/* ChildFund Card */}
          <motion.div
            ref={(el) => cardsRef.current[1] = el}
            className="bg-[var(--bg-card)] border-t-[3px] border-t-[var(--crimson)] border border-[var(--border)] p-[2.5rem] flex flex-col h-full transition-colors duration-300 hover:bg-[var(--bg-card-hover)] hover:border-t-[var(--crimson)]"
            variants={itemVariant}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            {/* Header row: Company and Date */}
            <div className="flex justify-between items-start mb-4 border-b border-[var(--border)] pb-2">
              <p className="font-mono text-[0.875rem] text-[var(--t3)] uppercase tracking-wider">
                CHILDFUND SRI LANKA
              </p>
              <p className="font-mono text-[0.875rem] text-[var(--t3)] uppercase tracking-wider">
                July 2022 – March 2023
              </p>
            </div>
            
            {/* Role — Large and confident */}
            <h3 className="font-display font-bold text-[1.75rem] text-[var(--t1)] uppercase mb-6 leading-[1.1]">
              Business Development Executive
            </h3>
            
            {/* Horizontal rule */}
            <div className="h-[1px] w-full bg-[var(--border)] mb-6" />
            
            {/* Body */}
            <div className="font-body text-[1.0625rem] text-[var(--t2)] leading-[1.8] mb-8 flex-1">
              <p className="mb-[1.25rem]">
                International development sector organisation working in Sri Lanka for over four decades. Operations across 10 districts — central and provincial — reaching 200,000+ children, youth, families, and communities.
              </p>
              <p>
                Supported business development functions in an organisation where the stakes of every decision are measured in lives, not revenue. Developed a sharper instinct for sustainable impact versus performative activity — a distinction that now defines how Haneef approaches every Rotaract project.
              </p>
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-3 mt-auto">
              {['Development Sector', 'Community Impact', '10 Districts'].map((tag, i) => (
                <span
                  key={i}
                  className="font-mono text-[0.875rem] text-[var(--crimson)] bg-[var(--crimson-dim)] border border-[var(--crimson-border)] px-3 py-1.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
        
        {/* Education Block */}
        <motion.div 
          className="flex flex-col md:flex-row gap-8 md:gap-16 pt-8 border-t border-[var(--border)]"
          initial={!prefersReducedMotion ? { opacity: 0, y: 40 } : { opacity: 1 }}
          whileInView={!prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1 }}
          transition={!prefersReducedMotion ? { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 } : undefined}
          viewport={{ once: true, amount: 0.1 }}
        >
          <p className="font-mono text-[0.875rem] text-[var(--t2)] uppercase tracking-wider">
            DIPLOMA IN MARKETING · CIM · Strategy College of Business
          </p>
          <p className="font-mono text-[0.875rem] text-[var(--t2)] uppercase tracking-wider">
            PRIMARY & SECONDARY EDUCATION · Amal International School
          </p>
        </motion.div>
      </div>
    </section>
  );
}