import { useEffect, useRef } from 'react';
import { motion, type Variants } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '../../lib/cn';
import { useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

// Animation variant for opacity cascade
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Philosophy() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Effects specifically for opacity cascade in headline
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headlineRef.current && !prefersReducedMotion) {
        const lines = headlineRef.current.children;

        gsap.fromTo(lines[0],
          { opacity: 0 },
          {
            opacity: 0.13,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 70%',
            },
          }
        );

        gsap.fromTo(lines[1],
          { opacity: 0 },
          {
            opacity: 0.40,
            duration: 0.8,
            delay: 0.18,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 70%',
            },
          }
        );

        gsap.fromTo(lines[2],
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.8,
            delay: 0.36,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 70%',
              onEnter: () => {
                Array.prototype.forEach.call(lines, (line, i) => {
                  line.classList.remove('opacity-0');
                });
                lines[0].classList.add('opacity-[0.13]');
                lines[1].classList.add('opacity-[0.40]');
                lines[2].classList.add('opacity-100');
              }
            },
          }
        );
      } else if (headlineRef.current && prefersReducedMotion) {
        const lines = headlineRef.current.children;
        lines[0].classList.add('opacity-[0.13]');
        lines[1].classList.add('opacity-[0.40]');
        lines[2].classList.add('opacity-100');
      }
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section id="philosophy" ref={containerRef} className="py-[5rem] md:py-[8rem] px-6 md:px-12 lg:px-20 bg-[var(--bg)]">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="w-full mb-20 text-center">
          <motion.p 
            className="font-mono text-[var(--ta)] text-[0.7rem] tracking-[0.20em] uppercase mb-8"
            initial={!prefersReducedMotion ? { opacity: 0, x: -12 } : { opacity: 1 }}
            whileInView={!prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 1 }}
            transition={!prefersReducedMotion ? { duration: 0.4, ease: 'easeOut' } : undefined}
            viewport={{ once: true }}
          >
            [ 03 — PHILOSOPHY ]
          </motion.p>
          
          {/* Opacity Cascade Headline — Larger: clamp(4rem, 7vw, 7rem) */}
          <div 
            ref={headlineRef} 
            className="font-display text-[clamp(4rem,7vw,7rem)] leading-[0.92] tracking-[-0.025em] uppercase mb-12 flex flex-col items-center"
          >
            <div className="text-[var(--t1)] opacity-0">LEAD WITH</div>
            <div className="text-[var(--t1)] opacity-0">STRATEGIC</div>
            <div className="text-[var(--crimson)] opacity-0">EMPATHY.</div>
          </div>

          <motion.div
            variants={fadeInUp}
            initial={!prefersReducedMotion ? "hidden" : "visible"}
            whileInView={!prefersReducedMotion ? "visible" : undefined}
            transition={!prefersReducedMotion ? { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.5 } : undefined}
            viewport={{ once: true, amount: 0.1 }}
            className="font-body text-[1.25rem] text-[var(--t2)] max-w-[600px] mx-auto leading-[1.75] text-center"
          >
            As a communications professional, I have learned that effective leadership begins with understanding people before trying to guide them. Leadership is not about authority. It is about designing the conditions in which others can succeed.
          </motion.div>
        </div>

        {/* Three Principles — More vertical breathing room: gap-16 (4rem) */}
        <motion.div
          variants={fadeInUp}
          initial={!prefersReducedMotion ? "hidden" : "visible"}
          whileInView={!prefersReducedMotion ? "visible" : undefined}
          transition={!prefersReducedMotion ? { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.6 } : undefined}
          viewport={{ once: true, amount: 0.1 }}
          className="w-full flex flex-col md:flex-row gap-12 md:gap-16"
        >
          {/* Column 1 */}
          <div className="flex-1 py-8 md:py-0 md:px-8 md:border-r border-[var(--border)] md:first:pl-0">
            <h3 className="font-mono text-[0.7rem] text-[var(--ta)] tracking-[0.20em] uppercase mb-6">
              VISIONARY YET GROUNDED
            </h3>
            <p className="font-body text-[1.0625rem] text-[var(--t2)] leading-[1.8]">
              Leadership must anticipate future opportunities while remaining connected to the everyday realities faced by Rotaract clubs and members. It cannot afford to be abstract — it must be practical and felt at the club level.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex-1 py-8 md:py-0 md:px-8 border-t md:border-t-0 md:border-r border-[var(--border)]">
            <h3 className="font-mono text-[0.7rem] text-[var(--ta)] tracking-[0.20em] uppercase mb-6">
              FACILITATE, DON'T CONTROL
            </h3>
            <p className="font-body text-[1.0625rem] text-[var(--t2)] leading-[1.8]">
              The responsibility of district leadership is to enable club leaders — by removing obstacles and providing the tools they need to succeed. Not to direct from above, but to support from within.
            </p>
          </div>

          {/* Column 3 */}
          <div className="flex-1 py-8 md:py-0 md:px-8 border-t md:border-t-0 border-[var(--border)] md:last:pr-0">
            <h3 className="font-mono text-[0.7rem] text-[var(--ta)] tracking-[0.20em] uppercase mb-6">
              LEAD WITH PURPOSE
            </h3>
            <p className="font-body text-[1.0625rem] text-[var(--t2)] leading-[1.8]">
              Every initiative must begin with a clear understanding of why it matters. When people understand the purpose behind their work, they become far more motivated to create meaningful impact.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
