import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { awardsData } from '../../data/awards';
import { useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export default function Recognition() {
  const containerRef = useRef<HTMLElement>(null);
  const blocksRef = useRef<(HTMLDivElement | null)[]>([]);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const ctx = gsap.context(() => {
      blocksRef.current.forEach((block) => {
        if (!block) return;
        gsap.fromTo(
          block,
          {
            opacity: 0,
            y: prefersReducedMotion ? 0 : 20,
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
      });
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section id="recognition" ref={containerRef} className="py-[4.5rem] md:py-[7rem] px-6 md:px-12 lg:px-20 bg-[var(--bg)]">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <p className="font-mono text-[var(--ta)] text-[var(--t-xs)] tracking-widest uppercase mb-8">
            [ 05 — RECOGNITION ]
          </p>
          <h2 className="font-display text-[var(--t-4xl)] text-[var(--t1)] leading-[0.92] tracking-[-0.025em] uppercase mb-6">
            THE RECORD<br />
            SPEAKS.
          </h2>
          <p className="font-body italic text-[var(--t-sm)] text-[var(--t2)]">
            Five awards across seven years — each one earned in a different arena.
          </p>
        </div>

        {/* Awards List */}
        <div className="flex flex-col">
          {awardsData.map((award, index) => (
            <div
              key={index}
              ref={(el) => blocksRef.current[index] = el}
              className="py-12 border-b border-[rgba(193,18,31,0.15)] first:border-t"
            >
              <p className="font-mono text-[var(--t-xs)] text-[var(--ta)] tracking-widest uppercase mb-4">
                {award.year}
              </p>
              <h3 className="font-display text-[var(--t-3xl)] text-[var(--t1)] uppercase mb-4">
                {award.title}
              </h3>
              <p className="font-mono text-[var(--t-xs)] text-[var(--t2)] tracking-widest uppercase mb-4">
                {award.event}
              </p>
              {award.context && (
                <p className="font-body italic text-[var(--t-sm)] text-[var(--t3)]">
                  {award.context}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Closing Note */}
        <div className="mt-16 max-w-[680px]">
          <p className="font-mono italic text-[var(--t-xs)] text-[var(--t3)] leading-[1.75]">
            10+ years in the Rotary movement. Over 5 years as a standing member of the Rotaract Club of Colombo Mid Town — a club carrying a 40-year legacy.
          </p>
        </div>
      </div>
    </section>
  );
}
