import { useEffect, useRef } from 'react';
import { motion, type Variants } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { timelineData } from '../../data/timeline';
import { cn } from '../../lib/cn';
import { useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

// Animation variants for scrolling effects
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
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.16, 1, 0.3, 1] 
    }
  }
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
              gsap.fromTo(element,
                {
                  opacity: 0,
                  y: 30,
                },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.65,
                  ease: 'power2.out',
                  delay: i * 0.05,
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

  const getTypeBadgeStyle = (type: string) => {
    switch (type) {
      case 'LEADERSHIP': return 'bg-[var(--crimson-dim)] text-[var(--crimson)] border-[var(--crimson-border)]';
      case 'DISTRICT': return 'bg-[var(--navy-dim)] text-[var(--navy)] border-[var(--navy-border)]';
      case 'PROFESSIONAL': return 'bg-[var(--navy-dim)] text-[var(--navy-light)] border-[var(--navy-border)]';
      case 'AWARD': return 'bg-[var(--crimson-dim)] text-[var(--crimson-dark)] border-[var(--crimson-border)]';
      default: return 'bg-[var(--crimson-dim)] text-[var(--crimson)] border-[var(--crimson-border)]';
    }
  };

  return (
    <section id="story" ref={containerRef} className="py-[5rem] md:py-[8rem] px-6 md:px-12 lg:px-20 bg-[var(--bg)]">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <motion.div 
          className="mb-[6rem]"
          initial={!prefersReducedMotion ? { opacity: 0, y: 24 } : { opacity: 1 }}
          whileInView={!prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1 }}
          transition={!prefersReducedMotion ? { duration: 0.9, ease: [0.16, 1, 0.3, 1] } : undefined}
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Section Label — Chapter-book style */}
          <motion.p 
            className="font-mono text-[var(--ta)] text-[0.7rem] tracking-[0.20em] uppercase mb-6"
            initial={!prefersReducedMotion ? { opacity: 0, x: -12 } : { opacity: 1 }}
            whileInView={!prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 1 }}
            transition={!prefersReducedMotion ? { duration: 0.4, ease: 'easeOut' } : undefined}
            viewport={{ once: true }}
          >
            [ 01 — THE STORY ]
          </motion.p>
          
          {/* Section Headline — Massive */}
          <motion.h2 
            className="font-display text-[clamp(3.5rem,6vw,6rem)] text-[var(--t1)] leading-[0.92] tracking-[-0.025em] uppercase mb-8"
            initial={!prefersReducedMotion ? { opacity: 0, y: 24 } : { opacity: 1 }}
            whileInView={!prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1 }}
            transition={!prefersReducedMotion ? { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.05 } : undefined}
            viewport={{ once: true, amount: 0.1 }}
          >
            ONE CAREER.<br />
            TWO ARENAS.<br />
            ONE DIRECTION.
          </motion.h2>
          
          {/* Opening paragraph */}
          <motion.div 
            variants={staggerContainer}
            initial={!prefersReducedMotion ? "hidden" : "visible"}
            whileInView={!prefersReducedMotion ? "visible" : undefined}
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-6 max-w-[600px]"
          >
            <motion.p 
              className="font-body text-[1.0625rem] text-[var(--t2)] leading-[1.75]"
              variants={itemVariant}
            >
              My professional journey has been shaped by the power of perspective. As a Public Relations professional, I build narratives, strengthen reputations, and create meaningful connections between people, organisations, and ideas. That same instinct — to understand before leading, to communicate before directing — is what drives everything I do in Rotaract.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Timeline — Vertical Magazine Stack */}
        <motion.div 
          className="relative"
          initial={!prefersReducedMotion ? { opacity: 0 } : { opacity: 1 }}
          whileInView={!prefersReducedMotion ? { opacity: 1 } : { opacity: 1 }}
          transition={!prefersReducedMotion ? { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 } : undefined}
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Top border line */}
          <div className="w-full h-[1px] bg-[var(--border)] mb-0" />

          <div className="flex flex-col">
            {timelineData.map((item, index) => {
              const isHero = item.isHero;

              return (
                <motion.div
                  key={index}
                  ref={(el) => entriesRef.current[index] = el}
                  className={cn(
                    'relative w-full py-[2.5rem] md:py-[2.5rem] border-b border-[var(--border)]',
                    isHero && 'border-l-[4px] border-l-[var(--crimson)] pl-4 md:pl-6'
                  )}
                  initial={!prefersReducedMotion ? { opacity: 0, y: 24 } : { opacity: 1 }}
                  whileInView={!prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1 }}
                  transition={!prefersReducedMotion ? { duration: 0.6, ease: [0.16, 1, 0.3, 1] } : undefined}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {/* Desktop: Two column layout */}
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                    {/* Left column: Year and Type */}
                    <div className="md:w-[180px] flex-shrink-0 flex flex-row md:flex-col gap-3 md:gap-4 items-start">
                      {/* Year — Environmental typography */}
                      <span className="font-mono text-[0.7rem] text-[var(--t3)] tracking-wider uppercase min-w-[70px]">
                        {item.year}
                      </span>
                      
                      {/* Type badge */}
                      <span className={cn(
                        'font-mono text-[0.65rem] tracking-wider uppercase px-2.5 py-1 border rounded-sm',
                        getTypeBadgeStyle(item.type)
                      )}>
                        {item.type}
                      </span>
                    </div>

                    {/* Right column: Content */}
                    <div className="flex-1 max-w-[680px]">
                      {/* Title — Larger for hero card */}
                      <h3 className={cn(
                        'font-display text-[var(--t1)] mb-2 uppercase leading-[1.1]',
                        isHero ? 'text-[2.25rem]' : 'text-[1.75rem]'
                      )}>
                        {item.title}
                      </h3>
                      
                      {/* Organisation */}
                      <p className="font-mono text-[0.7rem] text-[var(--t2)] uppercase tracking-wide mb-5">
                        {item.organisation}
                      </p>

                      {/* Body text */}
                      <div className="font-body text-[1.0625rem] text-[var(--t2)] leading-[1.8]">
                        {item.body.split('\n\n').map((paragraph, i) => (
                          <p key={i} className="mb-[1.25rem] last:mb-0">
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      {/* Stat Pills */}
                      {item.statPills && item.statPills.length > 0 && (
                        <div className="flex flex-wrap gap-3 mt-6">
                          {item.statPills.map((pill, i) => (
                            <span
                              key={i}
                              className={cn(
                                'font-mono text-[0.75rem] text-[var(--t1)] px-3 py-1.5',
                                isHero 
                                  ? 'bg-[var(--crimson-dim)] border border-[var(--crimson-border)]' 
                                  : 'bg-[var(--bg-card)] border border-[var(--border)]'
                              )}
                            >
                              {pill}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      {/* Awards */}
                      {item.awards && item.awards.length > 0 && (
                        <div className="mt-6 pt-5 border-t border-[var(--border)]">
                          <p className="font-mono text-[0.65rem] text-[var(--ta)] tracking-widest uppercase mb-3">AWARDS</p>
                          <ul className="flex flex-col gap-2">
                            {item.awards.map((award, i) => (
                              <li key={i} className="font-body text-[0.95rem] text-[var(--t2)] italic">
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
