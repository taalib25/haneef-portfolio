import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { timelineData } from '../../data/timeline';
import { cn } from '../../lib/cn';
import { useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export default function Story() {
  const containerRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline line animation
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: 'top',
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top center',
              end: 'bottom center',
              scrub: 1.5,
            },
          }
        );
      }

      // Card entrance animations
      ScrollTrigger.batch(cardsRef.current, {
        onEnter: (elements) => {
          gsap.fromTo(
            elements,
            {
              opacity: 0,
              y: prefersReducedMotion ? 0 : 24,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.65,
              ease: 'power2.out',
              stagger: 0.15,
            }
          );
        },
        once: true,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  const getBorderColor = (type: string) => {
    switch (type) {
      case 'LEADERSHIP': return 'border-l-crimson';
      case 'DISTRICT': return 'border-l-navy';
      case 'PROFESSIONAL': return 'border-l-navy-light';
      case 'AWARD': return 'border-l-crimson-dark';
      default: return 'border-l-crimson';
    }
  };

  return (
    <section id="story" ref={containerRef} className="py-[4.5rem] md:py-[7rem] px-6 md:px-12 lg:px-20 bg-[var(--bg)] relative">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <p className="font-mono text-[var(--ta)] text-[var(--t-xs)] tracking-widest uppercase mb-8">
            [ 01 — THE STORY ]
          </p>
          <h2 className="font-display text-[var(--t-4xl)] text-[var(--t1)] leading-[0.92] tracking-[-0.025em] uppercase mb-12">
            ONE CAREER.<br />
            TWO ARENAS.<br />
            ONE DIRECTION.
          </h2>
          <p className="font-body text-[var(--t-2xl)] text-[var(--t2)] max-w-[680px] leading-[1.75]">
            My professional journey has been shaped by the power of perspective. As a Public Relations professional, I build narratives, strengthen reputations, and create meaningful connections between people, organisations, and ideas. That same instinct — to understand before leading, to communicate before directing — is what drives everything I do in Rotaract.
          </p>
          <p className="font-body text-[var(--t-2xl)] text-[var(--t2)] max-w-[680px] leading-[1.75] mt-8">
            I do not separate my career from my service. The skills that make me effective at PR Wire are the same ones I bring to a club meeting — strategic communication, stakeholder management, and the ability to build trust across very different audiences. For me, Rotaract has never been volunteering in the traditional sense. It has been a laboratory for leadership.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-32">
          {/* The Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-[var(--crimson-dim)] -translate-x-1/2">
            <div ref={lineRef} className="w-full h-full bg-[var(--crimson)]" />
          </div>

          <div className="flex flex-col gap-16 md:gap-24 relative z-10">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              const isHero = item.isHero;

              return (
                <div
                  key={index}
                  ref={(el) => cardsRef.current[index] = el}
                  className={cn(
                    'relative w-full flex',
                    'md:justify-between items-center',
                    isEven ? 'md:flex-row-reverse' : 'md:flex-row'
                  )}
                >
                  {/* Dot */}
                  <div className="absolute left-[20px] md:left-1/2 w-[14px] h-[14px] rounded-full bg-[var(--crimson)] border-[2.5px] border-[var(--bg)] -translate-x-1/2 z-20" />

                  {/* Spacer for alternating layout on desktop */}
                  <div className="hidden md:block w-[calc(50%-40px)]" />

                  {/* Card */}
                  <div
                    className={cn(
                      'w-full pl-[48px] md:pl-0 md:w-[calc(50%-40px)] flex',
                      isEven ? 'md:justify-start' : 'md:justify-end'
                    )}
                  >
                    <article
                      role="article"
                      aria-label={`${item.year} ${item.title}`}
                      className={cn(
                        'bg-[var(--bg-card)] p-6 md:p-8 w-full transition-colors duration-300 hover:bg-[var(--bg-card-hover)]',
                        isHero ? 'max-w-[580px] border border-[rgba(193,18,31,0.35)] shadow-[0_0_60px_12px_rgba(193,18,31,0.07)]' : 'max-w-[540px] border-l-[4px]',
                        !isHero && getBorderColor(item.type)
                      )}
                    >
                      <div className="mb-6">
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-mono text-[var(--t-xs)] text-[var(--ta)] tracking-widest uppercase">
                            {item.year}
                          </span>
                        </div>
                        <h3 className="font-display text-[var(--t-xl)] text-[var(--t1)] mb-2 uppercase">
                          {item.title}
                        </h3>
                        <p className="font-mono text-[var(--t-xs)] text-[var(--t2)] uppercase tracking-wide">
                          {item.organisation}
                        </p>
                      </div>

                      <div className="h-[1px] w-full bg-[var(--crimson-border)] mb-6" />

                      <div className="font-body text-[var(--t-sm)] text-[var(--t2)] leading-[1.75]">
                        {item.body.split('\n\n').map((paragraph, i) => (
                          <p key={i} className="mb-[1.25rem] last:mb-0">
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      {item.statPills && item.statPills.length > 0 && (
                        <div className="flex flex-wrap gap-3 mt-8">
                          {item.statPills.map((pill, i) => (
                            <span
                              key={i}
                              className="font-mono text-[var(--t-xs)] text-[var(--t1)] bg-[rgba(193,18,31,0.10)] border border-[var(--crimson-border)] px-3 py-1.5 rounded-full"
                            >
                              {pill}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      {item.awards && item.awards.length > 0 && (
                        <div className="mt-8 pt-6 border-t border-[var(--crimson-border)]">
                          <p className="font-mono text-[var(--t-xs)] text-[var(--ta)] tracking-widest uppercase mb-4">AWARDS</p>
                          <ul className="flex flex-col gap-2">
                            {item.awards.map((award, i) => (
                              <li key={i} className="font-body text-[var(--t-sm)] text-[var(--t2)] italic">
                                {award}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </article>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
