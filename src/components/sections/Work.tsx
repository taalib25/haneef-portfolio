import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '../../lib/cn';
import { useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export default function Work() {
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const ctx = gsap.context(() => {
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

  return (
    <section id="work" ref={containerRef} className="py-[4.5rem] md:py-[7rem] px-6 md:px-12 lg:px-20 bg-[var(--bg)]">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <p className="font-mono text-[var(--ta)] text-[var(--t-xs)] tracking-widest uppercase mb-8">
            [ 02 — WORK ]
          </p>
          <h2 className="font-display text-[var(--t-4xl)] text-[var(--t1)] leading-[0.92] tracking-[-0.025em] uppercase mb-6">
            WHERE THE<br />
            CRAFT LIVES.
          </h2>
          <p className="font-mono text-[var(--t-sm)] text-[var(--t2)] tracking-wide">
            The professional foundation behind the leadership record.
          </p>
        </div>

        {/* Work Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* PR Wire Card */}
          <div
            ref={(el) => cardsRef.current[0] = el}
            className="bg-[var(--bg-card)] border-t-[4px] border-[var(--crimson)] p-8 flex flex-col h-full transition-colors duration-300 hover:bg-[var(--bg-card-hover)]"
          >
            <div className="flex justify-between items-start mb-4">
              <p className="font-mono text-[var(--t-xs)] text-[var(--t2)] uppercase tracking-wide">
                PR Wire
              </p>
              <p className="font-mono text-[var(--t-xs)] text-[var(--t3)] uppercase tracking-wide">
                May 2023 – Present
              </p>
            </div>
            <h3 className="font-display text-[var(--t-xl)] text-[var(--t1)] uppercase mb-6">
              Strategic PR & Reputation Executive
            </h3>
            <div className="font-body text-[var(--t-sm)] text-[var(--t2)] leading-[1.75] mb-8 flex-1">
              <p className="mb-[1.25rem]">
                Develop and execute strategies to create and uphold a positive public image for clients. Seasonal review of all PR activities, with ad-hoc adjustments aligned to current trends and business needs.
              </p>
              <p>
                Work closely with the marketing team to develop communication strategies that cultivate and strengthen relationships with target audiences, external partners, and key media outlets — translating commercial objectives into credible, sustained narratives.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-auto">
              {['Reputation Strategy', 'Media Relations', 'Marketing Communications'].map((tag, i) => (
                <span
                  key={i}
                  className="font-mono text-[var(--t-xs)] text-[var(--navy-light)] bg-[rgba(0,48,73,0.10)] border border-[var(--navy)] px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* ChildFund Card */}
          <div
            ref={(el) => cardsRef.current[1] = el}
            className="bg-[var(--bg-card)] border-t-[4px] border-[var(--crimson)] p-8 flex flex-col h-full transition-colors duration-300 hover:bg-[var(--bg-card-hover)]"
          >
            <div className="flex justify-between items-start mb-4">
              <p className="font-mono text-[var(--t-xs)] text-[var(--t2)] uppercase tracking-wide">
                ChildFund Sri Lanka
              </p>
              <p className="font-mono text-[var(--t-xs)] text-[var(--t3)] uppercase tracking-wide">
                July 2022 – March 2023
              </p>
            </div>
            <h3 className="font-display text-[var(--t-xl)] text-[var(--t1)] uppercase mb-6">
              Business Development Executive
            </h3>
            <div className="font-body text-[var(--t-sm)] text-[var(--t2)] leading-[1.75] mb-8 flex-1">
              <p className="mb-[1.25rem]">
                International development sector organisation working in Sri Lanka for over four decades. Operations across 10 districts — central and provincial — reaching 200,000+ children, youth, families, and communities.
              </p>
              <p>
                Supported business development functions in an organisation where the stakes of every decision are measured in lives, not revenue. Developed a sharper instinct for sustainable impact versus performative activity — a distinction that now defines how Haneef approaches every Rotaract project.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-auto">
              {['Development Sector', 'Community Impact', '10 Districts'].map((tag, i) => (
                <span
                  key={i}
                  className="font-mono text-[var(--t-xs)] text-[var(--navy-light)] bg-[rgba(0,48,73,0.10)] border border-[var(--navy)] px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Education Block */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 pt-8">
          <p className="font-mono text-[var(--t-xs)] text-[var(--t2)] uppercase tracking-wide">
            DIPLOMA IN MARKETING · CIM · Strategy College of Business
          </p>
          <p className="font-mono text-[var(--t-xs)] text-[var(--t2)] uppercase tracking-wide">
            PRIMARY & SECONDARY EDUCATION · Amal International School
          </p>
        </div>
      </div>
    </section>
  );
}
