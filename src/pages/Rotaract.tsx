import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { timelineData } from '../data/timeline';
import { awardsData } from '../data/awards';
import Campaign from '../components/sections/Campaign';
import Contact from '../components/sections/Contact';
import { Mail, Phone, ChevronLeft, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TYPE_COLORS: Record<string, { main: string; border: string; dim: string }> = {
  LEADERSHIP: { main: 'var(--crimson)', border: 'var(--crimson-border)', dim: 'var(--crimson-dim)' },
  DISTRICT: { main: 'var(--navy)', border: 'var(--navy-border)', dim: 'var(--navy-dim)' },
};

const rotaractTimeline = timelineData.filter(
  (item) => item.type === 'LEADERSHIP' || item.type === 'DISTRICT'
);

export default function Rotaract() {
  const prefersReducedMotion = useReducedMotion();
  const timelineRef = useRef<HTMLDivElement>(null);
  const entriesRef = useRef<(HTMLDivElement | null)[]>([]);
  const awardItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      entriesRef.current.forEach((el, i) => {
        if (!el) return;
        if (!prefersReducedMotion) {
          gsap.fromTo(
            el,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.55,
              ease: 'power2.out',
              delay: i * 0.08,
              scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none none',
                once: true,
              },
            }
          );
        } else {
          gsap.set(el, { opacity: 1, y: 0 });
        }
      });

      awardItemsRef.current.forEach((el, i) => {
        if (!el) return;
        if (!prefersReducedMotion) {
          gsap.fromTo(
            el,
            { opacity: 0, y: 14 },
            {
              opacity: 1,
              y: 0,
              duration: 0.55,
              ease: 'power2.out',
              delay: i * 0.07,
              scrollTrigger: {
                trigger: el,
                start: 'top 86%',
                toggleActions: 'play none none none',
                once: true,
              },
            }
          );
        } else {
          gsap.set(el, { opacity: 1, y: 0 });
        }
      });
    });

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  const navigateTimeline = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setActiveTimelineIndex((prev) => (prev > 0 ? prev - 1 : rotaractTimeline.length - 1));
    } else {
      setActiveTimelineIndex((prev) => (prev < rotaractTimeline.length - 1 ? prev + 1 : 0));
    }
  };

  const fadeInUp = {
    initial: !prefersReducedMotion ? { opacity: 0, y: 24 } : { opacity: 1 },
    whileInView: !prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1 },
    transition: !prefersReducedMotion ? { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } : undefined,
    viewport: { once: true, amount: 0.15 },
  };

  const titleAnimation = {
    initial: !prefersReducedMotion ? { opacity: 0, y: 16 } : { opacity: 1 },
    whileInView: !prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1 },
    transition: !prefersReducedMotion ? { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } : undefined,
    viewport: { once: true, amount: 0.3 },
  };

  return (
    <main className="relative min-h-screen bg-[var(--bg)]">
      <div className="h-[2px] w-full bg-[var(--crimson)]" />

      <div className="py-14 md:py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div className="mb-16 md:mb-20" {...fadeInUp}>
            <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] text-[var(--t1)] leading-[0.95] uppercase mb-6">
              ROTARACT<br />
              <span className="text-[var(--crimson)]">JOURNEY</span>
            </h1>
            <p className="font-body text-[1.125rem] text-[var(--t2)] max-w-2xl">
              Seven years of service, leadership, and impact across club and district levels — building communities and developing youth leaders.
            </p>
          </motion.div>

          <motion.section className="mb-20 md:mb-24" ref={timelineRef} {...fadeInUp}>
            <motion.div className="mb-10" {...titleAnimation}>
              <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] text-[var(--t1)] leading-[0.95] tracking-[0.025em] uppercase">
                Leadership Journey
              </h2>
              <p className="font-body text-[var(--t2)] mt-2 text-sm">
                Club and district leadership positions over 7+ years
              </p>
            </motion.div>

            <div className="relative">
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-[var(--border)]" />

              <div className="space-y-6 md:space-y-8 md:pl-8">
                {rotaractTimeline.map((item, index) => {
                  const colors = TYPE_COLORS[item.type] || TYPE_COLORS.LEADERSHIP;
                  const isActive = index === activeTimelineIndex;

                  return (
                    <motion.div
                      key={`${item.year}-${index}`}
                      ref={(el) => { entriesRef.current[index] = el; }}
                      className={`relative pl-4 md:pl-6 py-4 border-l-2 md:border-l-0 transition-all duration-300 ${isActive ? 'opacity-100' : 'md:opacity-70'}`}
                      style={{
                        borderLeftColor: colors.main,
                      }}
                      onClick={() => setActiveTimelineIndex(index)}
                    >
                      <div
                        className="absolute left-[-5px] md:left-[-29px] top-5 w-2.5 h-2.5 rounded-full hidden md:block"
                        style={{ background: colors.main }}
                      />

                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span
                          className="font-display text-[clamp(1.1rem,2.5vw,1.4rem)] font-bold"
                          style={{ color: colors.main }}
                        >
                          {item.year}
                        </span>
                        <span
                          className="font-body text-[0.7rem] uppercase tracking-wider px-2 py-0.5 rounded"
                          style={{
                            background: colors.dim,
                            color: colors.main,
                            border: `1px solid ${colors.border}`,
                          }}
                        >
                          {item.type}
                        </span>
                        {item.isHero && (
                          <span className="font-body text-[0.65rem] uppercase tracking-wider px-2 py-0.5 rounded bg-[var(--crimson)] text-white">
                            Presidential Year
                          </span>
                        )}
                      </div>

                      <h3 className="font-sans text-[1.1rem] md:text-[1.2rem] font-bold text-[var(--t1)] mb-1">
                        {item.title}
                      </h3>
                      <p className="font-body text-[0.9rem] text-[var(--t3)] mb-3">
                        {item.organisation}
                      </p>

                      <div className="font-body text-[0.95rem] text-[var(--t2)] leading-[1.75] mb-3">
                        {item.body.split('\n\n').map((paragraph, i) => (
                          <p key={i} className="mb-2 last:mb-0">
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      {item.statPills && item.statPills.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {item.statPills.map((pill, i) => (
                            <span
                              key={i}
                              className="font-body text-[0.75rem] font-medium px-2.5 py-1 rounded border"
                              style={{
                                color: colors.main,
                                borderColor: colors.border,
                                background: colors.dim,
                              }}
                            >
                              {pill}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              <div className="flex justify-center gap-4 mt-8 md:hidden" aria-live="polite" aria-atomic="true">
                <button
                  onClick={() => navigateTimeline('prev')}
                  className="p-2 rounded-full border border-[var(--border)] hover:border-[var(--crimson)] hover:text-[var(--crimson)] transition-colors"
                  aria-label="Previous timeline item"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="font-body text-[var(--t2)] py-2">
                  {activeTimelineIndex + 1} / {rotaractTimeline.length}
                </span>
                <button
                  onClick={() => navigateTimeline('next')}
                  className="p-2 rounded-full border border-[var(--border)] hover:border-[var(--crimson)] hover:text-[var(--crimson)] transition-colors"
                  aria-label="Next timeline item"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.section>

          <motion.section className="mb-20 md:mb-24" {...fadeInUp}>
            <motion.div className="mb-10" {...titleAnimation}>
              <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] text-[var(--t1)] leading-[0.95] tracking-[0.025em] uppercase">
                Before Rotaract
              </h2>
              <p className="font-body text-[var(--t2)] mt-2 text-sm">
                Interact Club of Amal International School
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {[
                { year: '2016–17', role: 'President' },
                { year: '2015–16', role: 'Assistant Secretary' },
                { year: '2014–15', role: 'Public Relations Director' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-baseline gap-4 py-4 border-b border-[var(--border)] md:border-b-0 md:flex-col md:p-6 md:border md:rounded-lg md:hover:border-[var(--crimson)] transition-colors"
                  initial={!prefersReducedMotion ? { opacity: 0, y: 16 } : { opacity: 1 }}
                  whileInView={!prefersReducedMotion ? { opacity: 1, y: 0 } : undefined}
                  transition={{ duration: 0.4, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <span className="font-display text-[1.1rem] font-bold text-[var(--crimson)] shrink-0">
                    {item.year}
                  </span>
                  <span className="font-body text-[0.95rem] text-[var(--t2)]">
                    {item.role}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section className="mb-20 md:mb-24" {...fadeInUp}>
            <motion.div className="mb-10" {...titleAnimation}>
              <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] text-[var(--t1)] leading-[0.95] tracking-[0.025em] uppercase">
                Awards & Recognition
              </h2>
              <p className="font-body text-[var(--t2)] mt-2 text-sm">
                Nine honors across seven years of service
              </p>
            </motion.div>

            <div className="space-y-0">
              {awardsData.map((award, index) => (
                <div
                  key={index}
                  ref={(el) => { awardItemsRef.current[index] = el; }}
                  className="award-item py-4 md:py-5 border-b border-[var(--campaign-border-light)] first:border-t first:border-[var(--campaign-border-light)] transition-colors duration-200 group hover:border-[var(--crimson)]"
                >
                  <div className="hidden md:grid md:grid-cols-[100px_1fr_1.5fr] md:gap-8 md:items-baseline">
                    <span className="font-display text-[1rem] font-semibold text-[var(--t3)] tracking-[0.01em]">
                      {award.year}
                    </span>
                    <h3 className="font-sans text-[1.1rem] font-bold text-[var(--t1)] tracking-[0.015em] leading-[1.1] group-hover:text-[var(--crimson)] transition-colors">
                      {award.title}
                      {award.level && (
                        <span className="text-[var(--t3)]"> — {award.level}</span>
                      )}
                    </h3>
                    <div>
                      <p className="font-body text-[0.95rem] text-[var(--t2)] leading-[1.75]">
                        {award.event}
                      </p>
                      {award.context && (
                        <p className="font-body text-[0.875rem] text-[var(--t3)] leading-[1.65] mt-1">
                          {award.context}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="md:hidden">
                    <span className="font-display text-[0.95rem] font-semibold text-[var(--t3)] tracking-[0.01em] block mb-1">
                      {award.year}
                    </span>
                    <h3 className="font-sans text-[1rem] font-bold text-[var(--t1)] tracking-[0.015em] leading-[1.1] group-hover:text-[var(--crimson)] transition-colors mb-2">
                      {award.title}
                      {award.level && (
                        <span className="text-[var(--t3)]"> — {award.level}</span>
                      )}
                    </h3>
                    <div className="h-px w-full bg-[var(--border-light)] mb-2" />
                    <p className="font-body text-[0.9rem] text-[var(--t2)] leading-[1.72]">
                      {award.event}
                    </p>
                    {award.context && (
                      <p className="font-body text-[0.85rem] text-[var(--t3)] leading-[1.65] mt-1">
                        {award.context}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>

      {/* TODO: Re-enable when DRR campaign is active
      <Campaign />

      <section className="py-14 md:py-20 px-4 md:px-6 lg:px-8 bg-[var(--bg)]">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp}>
            <div className="h-[2px] w-full bg-[var(--crimson)] mb-12" />

            <motion.div className="mb-10" {...titleAnimation}>
              <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] text-[var(--t1)] leading-[0.95] tracking-[0.025em] uppercase">
                Campaign Contact
              </h2>
              <p className="font-body text-[var(--t2)] mt-2 max-w-xl">
                For DRR campaign inquiries, collaboration opportunities, or to learn more about the vision for District 3220.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="mailto:haneef.rotaract3220@gmail.com"
                className="group flex items-center gap-4 p-6 border border-[var(--border)] rounded-lg hover:border-[var(--crimson)] transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--crimson-dim)] flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[var(--crimson)]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-sans text-[0.8rem] uppercase tracking-wider text-[var(--t3)] mb-1">
                    Email
                  </p>
                  <p className="font-body text-[var(--t1)] group-hover:text-[var(--crimson)] transition-colors">
                    haneef.rotaract3220@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+94770447021"
                className="group flex items-center gap-4 p-6 border border-[var(--border)] rounded-lg hover:border-[var(--crimson)] transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--crimson-dim)] flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[var(--crimson)]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-sans text-[0.8rem] uppercase tracking-wider text-[var(--t3)] mb-1">
                    Phone
                  </p>
                  <p className="font-body text-[var(--t1)] group-hover:text-[var(--crimson)] transition-colors">
                    +94 77 044 7021
                  </p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Contact />
      */}
    </main>
  );
}
