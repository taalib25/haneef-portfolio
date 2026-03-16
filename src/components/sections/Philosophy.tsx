import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '../../lib/cn';
import { useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headlineRef.current) {
        const lines = headlineRef.current.children;
        
        gsap.fromTo(
          lines[0],
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

        gsap.fromTo(
          lines[1],
          { opacity: 0 },
          {
            opacity: 0.40,
            duration: 0.8,
            delay: prefersReducedMotion ? 0 : 0.18,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 70%',
            },
          }
        );

        gsap.fromTo(
          lines[2],
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.8,
            delay: prefersReducedMotion ? 0 : 0.36,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 70%',
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section id="philosophy" ref={containerRef} className="py-[4.5rem] md:py-[7rem] px-6 md:px-12 lg:px-20 bg-[var(--bg)]">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="w-full mb-20 text-center">
          <p className="font-mono text-[var(--ta)] text-[var(--t-xs)] tracking-widest uppercase mb-12">
            [ 03 — PHILOSOPHY ]
          </p>
          
          <div ref={headlineRef} className="font-display text-[var(--t-4xl)] leading-[0.92] tracking-[-0.025em] uppercase mb-12 flex flex-col items-center">
            <span className="text-[var(--t1)] opacity-0">LEAD WITH</span>
            <span className="text-[var(--t1)] opacity-0">STRATEGIC</span>
            <span className="text-[var(--crimson)] opacity-0">EMPATHY.</span>
          </div>

          <p className="font-body text-[var(--t-2xl)] text-[var(--t2)] max-w-[600px] mx-auto leading-[1.75] text-center">
            As a communications professional, I have learned that effective leadership begins with understanding people before trying to guide them. Leadership is not about authority. It is about designing the conditions in which others can succeed.
          </p>
        </div>

        {/* Three Principles */}
        <div className="w-full flex flex-col md:flex-row mt-16">
          {/* Column 1 */}
          <div className="flex-1 py-8 md:py-0 md:px-8 md:border-r border-[var(--crimson-border)] md:first:pl-0">
            <h3 className="font-mono text-[var(--t-xs)] text-[var(--ta)] tracking-widest uppercase mb-6">
              VISIONARY YET GROUNDED
            </h3>
            <p className="font-body text-[var(--t-sm)] text-[var(--t2)] leading-[1.8]">
              Leadership must anticipate future opportunities while remaining connected to the everyday realities faced by Rotaract clubs and members. It cannot afford to be abstract — it must be practical and felt at the club level.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex-1 py-8 md:py-0 md:px-8 border-t md:border-t-0 md:border-r border-[var(--crimson-border)]">
            <h3 className="font-mono text-[var(--t-xs)] text-[var(--ta)] tracking-widest uppercase mb-6">
              FACILITATE, DON'T CONTROL
            </h3>
            <p className="font-body text-[var(--t-sm)] text-[var(--t2)] leading-[1.8]">
              The role of district leadership is to enable club leaders — by removing obstacles and providing the tools they need to succeed. Not to direct from above, but to support from within.
            </p>
          </div>

          {/* Column 3 */}
          <div className="flex-1 py-8 md:py-0 md:px-8 border-t md:border-t-0 border-[var(--crimson-border)] md:last:pr-0">
            <h3 className="font-mono text-[var(--t-xs)] text-[var(--ta)] tracking-widest uppercase mb-6">
              LEAD WITH PURPOSE
            </h3>
            <p className="font-body text-[var(--t-sm)] text-[var(--t2)] leading-[1.8]">
              Every initiative must begin with a clear understanding of why it matters. When people understand the purpose behind their work, they become far more motivated to create meaningful impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
