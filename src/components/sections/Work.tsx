import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '../../lib/cn';
import { useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    institution: 'Achievers International Campus',
    qualification: 'Master of Business Administration',
    year: '2026–Present',
    status: 'Reading',
    active: true,
  },
  {
    institution: 'Ivey Campus',
    qualification: 'Post Graduate Diploma in Strategic Management and Leadership',
    year: '2025–Present',
    status: 'Reading',
    active: true,
  },
  {
    institution: 'Amal International School',
    qualification: 'Primary & Secondary Education',
    year: '',
    status: '',
    active: false,
  },
];

export default function Work() {
  const containerRef = useRef<HTMLElement>(null);
  const entriesRef = useRef<(HTMLDivElement | null)[]>([]);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.batch(entriesRef.current, {
        onEnter: (elements) => {
          elements.forEach((element) => {
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
    <section id="work" ref={containerRef} className="py-14 md:py-20 px-4 md:px-6 lg:px-8 bg-[var(--bg)]" style={{ scrollMarginTop: '80px' }}>
      {/* 2px crimson line at top of section opener */}
      <div className="h-[2px] w-full bg-[var(--crimson)] mb-12" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header - CIGR Style */}
        <motion.div
          className="mb-10 md:mb-16"
          initial={!prefersReducedMotion ? { opacity: 0, y: 24 } : { opacity: 1 }}
          whileInView={!prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1 }}
          transition={!prefersReducedMotion ? { duration: 0.9, ease: [0.16, 1, 0.3, 1] } : undefined}
          viewport={{ once: true, amount: 0.1 }}
        >

          {/* Section Headline */}
          <motion.h2
            className="font-display text-[clamp(2.5rem,5vw,4rem)] text-[var(--t1)] leading-[0.95] uppercase mb-6"
            initial={!prefersReducedMotion ? { opacity: 0, y: 24 } : { opacity: 1 }}
            whileInView={!prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1 }}
            transition={!prefersReducedMotion ? { duration: 0.9, ease: [0.16, 1, 0.3, 1] } : undefined}
            viewport={{ once: true, amount: 0.1 }}
          >
            WHERE THE<br />
            <span className="text-[var(--crimson)]">CAREER</span><br />
            SERVES THE<br />
            <span className="text-[var(--crimson)]">MISSION</span>
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

        {/* Two-Column Editorial Layout */}
        <div className="relative">
          {/* Vertical divider - desktop only */}
          <div className="hidden md:block absolute left-[47%] top-0 bottom-0 w-px bg-[var(--border)]" />

          <div className="flex flex-col md:flex-row gap-12 md:gap-0">
            {/* PR Wire Entry - Left Column */}
            <motion.div
              ref={(el) => { entriesRef.current[0] = el; }}
              className="md:w-[45%] md:pr-12"
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
              animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Company and Date - quiet row */}
              <div className="flex justify-between items-baseline mb-4 pb-3 border-b border-[var(--border)]">
                <p className="font-body text-[0.9rem] text-[var(--t2)] font-medium">
                  PR Wire
                </p>
                <p className="font-body text-[0.9rem] text-[var(--t2)] font-medium">
                  May 2023 – Present
                </p>
              </div>

              {/* Role Title */}
              <h3 className="font-display font-bold text-[1.75rem] md:text-[1.75rem] text-[var(--tb)] uppercase mb-6 leading-[1.1]">
                Strategic PR & Reputation Executive
              </h3>

              {/* Body Paragraphs */}
              <div className="font-body text-[1.0625rem] text-[var(--t2)] leading-[1.85] mb-8">
                <p className="mb-[1.25rem]">
                  Develop and execute strategies that build and maintain a positive public image for clients. Review all PR activities seasonally, making ad-hoc adjustments based on current trends and business needs.
                </p>
                <p>
                  Work with the marketing team to develop communication strategies that build relationships with target audiences, external partners, and key media outlets. Translate commercial objectives into narratives that hold up over time.
                </p>
              </div>

              {/* Tag Pills */}
              <div className="flex flex-wrap gap-2 mt-[1.5rem]">
                {['Reputation Strategy', 'Media Relations', 'Marketing Communications'].map((tag, i) => (
                  <span
                    key={i}
                    className="font-body text-[0.8rem] font-medium text-[var(--crimson)] bg-[var(--crimson-dim)] border border-[var(--crimson-border)] px-3 py-1 rounded-[2px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* ChildFund Entry - Right Column */}
            <motion.div
              ref={(el) => { entriesRef.current[1] = el; }}
              className="md:w-[45%] md:pl-12 md:ml-auto"
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
              animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              {/* Company and Date - quiet row */}
              <div className="flex justify-between items-baseline mb-4 pb-3 border-b border-[var(--border)]">
                <p className="font-body text-[0.9rem] text-[var(--t2)] font-medium">
                  ChildFund Sri Lanka
                </p>
                <p className="font-body text-[0.9rem] text-[var(--t2)] font-medium">
                  July 2022 – March 2023
                </p>
              </div>

              {/* Role Title */}
              <h3 className="font-display font-bold text-[1.75rem] md:text-[1.75rem] text-[var(--tb)] uppercase mb-6 leading-[1.1]">
                Business Development Executive
              </h3>

              {/* Body Paragraphs */}
              <div className="font-body text-[1.0625rem] text-[var(--t2)] leading-[1.85] mb-8">
                <p className="mb-[1.25rem]">
                  International development organisation working in Sri Lanka for over four decades. Operations across 10 districts, reaching 200,000+ children, youth, families, and communities.
                </p>
                <p>
                  Supported business development in an organisation where decisions affect lives, not revenue. Learned to distinguish between work that creates real impact and work that just looks good in a report. That distinction shapes how I approach every Rotaract project.
                </p>
              </div>

              {/* Tag Pills */}
              <div className="flex flex-wrap gap-2 mt-[1.5rem]">
                {['Development Sector', 'Community Impact', '10 Districts'].map((tag, i) => (
                  <span
                    key={i}
                    className="font-body text-[0.8rem] font-medium text-[var(--crimson)] bg-[var(--crimson-dim)] border border-[var(--crimson-border)] px-3 py-1 rounded-[2px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={!prefersReducedMotion ? { opacity: 0, y: 40 } : { opacity: 1 }}
          whileInView={!prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1 }}
          transition={!prefersReducedMotion ? { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 } : undefined}
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Section Header */}
          <div className="mt-14 md:mt-16 mb-6 md:mb-8">
            <h2 className="font-display text-[clamp(1.5rem,6vw,2.5rem)] md:text-[clamp(1.75rem,4vw,2.5rem)] text-[var(--t1)] leading-[0.95] tracking-[0.025em] uppercase mb-4 md:mb-6">
              Education
            </h2>
          </div>

          {/* Education Rows */}
          {educationData.map((edu, i) => (
            <div
              key={i}
              className="education-row"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                padding: '0.85rem 0',
                borderBottom: '1px solid rgba(15,6,8,0.07)',
              }}
            >
              {/* Left: institution + qualification */}
              <div>
                <p className="edu-institution font-sans font-bold text-[var(--t1)]" style={{ fontSize: '1.15rem', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '0.15rem' }}>
                  {edu.institution}
                </p>
                <p className="edu-qualification font-body text-[var(--t2)]" style={{ fontSize: '0.9rem', fontWeight: 450, lineHeight: 1.4 }}>
                  {edu.qualification}
                </p>
              </div>
              {/* Right: year + status */}
              {(edu.year || edu.status) && (
                <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: '1rem' }}>
                  {edu.year && (
                    <p className="edu-year font-sans text-[var(--ta)]" style={{ fontSize: '0.85rem', letterSpacing: '0.04em', fontWeight: 500 }}>
                      {edu.year}
                    </p>
                  )}
                  {edu.status && (
                    edu.active ? (
                      <span
                        className="reading-pill font-sans uppercase"
                        style={{
                          fontSize: '9px',
                          letterSpacing: '0.10em',
                          marginTop: '3px',
                          display: 'inline-block',
                          padding: '3px 10px',
                          background: 'color-mix(in srgb, var(--crimson) 8%, transparent)',
                          border: '1px solid color-mix(in srgb, var(--crimson) 20%, transparent)',
                          color: 'var(--crimson)',
                          borderRadius: '2px',
                        }}
                      >
                        {edu.status}
                      </span>
                    ) : (
                      <p className="font-sans text-[var(--t3)] uppercase" style={{ fontSize: '9px', letterSpacing: '0.10em', marginTop: '3px', fontWeight: 500 }}>
                        {edu.status}
                      </p>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Stats — dual layout: mobile stacked, desktop horizontal */}
        <motion.div
          className="mt-14 md:mt-16"
          initial={!prefersReducedMotion ? { opacity: 0, y: 30 } : { opacity: 1 }}
          whileInView={!prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1 }}
          transition={!prefersReducedMotion ? { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 } : undefined}
          viewport={{ once: true, amount: 0.2 }}
        >
          {(() => {
            const stats = [
              { label: 'Years in Rotaract', value: '7+' },
              { label: 'Projects as President', value: '18' },
              { label: 'Members Led', value: '50' },
              { label: 'Volunteers Coordinated', value: '100+' },
              { label: 'District Awards', value: '5' },
            ];
            return (
              <>
                {/* MOBILE: stacked rows */}
                <div className="md:hidden" style={{ width: '100%' }}>
                  {stats.map((stat, i, arr) => (
                    <div key={i} style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.85rem 0',
                      borderBottom: i < arr.length - 1 ? '1px solid rgba(15,6,8,0.08)' : 'none',
                    }}>
                      {/* Label — left, small */}
                      <span style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.65rem',
                        fontWeight: 600,
                        letterSpacing: '0.10em',
                        textTransform: 'uppercase',
                        color: 'var(--t3)',
                      }}>
                        {stat.label}
                      </span>
                      {/* Number — right, BIG */}
                      <span style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(2rem, 8vw, 2.75rem)',
                        fontWeight: 900,
                        lineHeight: 1,
                        letterSpacing: '-0.03em',
                        color: 'var(--crimson)',
                      }}>
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* DESKTOP: horizontal row */}
                <div className="hidden md:flex" style={{
                  width: '100%',
                  borderTop: '1px solid rgba(15,6,8,0.08)',
                  borderBottom: '1px solid rgba(15,6,8,0.08)',
                }}>
                  {stats.map((stat, i, arr) => (
                    <div key={i} style={{
                      flex: 1,
                      padding: '1.25rem 0',
                      textAlign: 'center',
                      borderRight: i < arr.length - 1 ? '1px solid rgba(15,6,8,0.08)' : 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '0.4rem',
                    }}>
                      <span style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(2rem, 3.5vw, 3.5rem)',
                        fontWeight: 900,
                        lineHeight: 1,
                        letterSpacing: '-0.03em',
                        color: 'var(--crimson)',
                      }}>
                        {stat.value}
                      </span>
                      <span style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.65rem',
                        fontWeight: 600,
                        letterSpacing: '0.10em',
                        textTransform: 'uppercase',
                        color: 'var(--t3)',
                      }}>
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </>
            );
          })()}
        </motion.div>

        {/* District Trainings & Forums List */}
        <div className="hidden md:block">
          <motion.div
            className="mt-8 md:mt-10"
            initial={!prefersReducedMotion ? { opacity: 0, y: 20 } : { opacity: 1 }}
            whileInView={!prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1 }}
            transition={!prefersReducedMotion ? { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.25 } : undefined}
            viewport={{ once: true, amount: 0.1 }}
          >
            <p className="font-mono text-[9.5px] text-[var(--ta)] tracking-[0.10em] uppercase mb-4">
              DISTRICT TRAININGS & FORUMS
            </p>
            <div style={{ height: 1, background: 'rgba(15,6,8,0.08)', marginBottom: '1rem' }} />

            {/* Mobile: 4-row infinite marquee chips */}
            <div className="md:hidden" style={{ overflow: 'hidden', margin: '0 -1.25rem' }}>
              {[
                ['PETS SETS (2024)', 'PETS SETS (2023)', 'PETS SETS (2019)', '35th Dist. Assembly (2025)', '34th Dist. Conference (2025)', '34th Dist. Assembly (2024)'],
                ['33rd Dist. Conference (2024)', '33rd Dist. Assembly (2023)', '32nd Dist. Conference (2023)', '32nd Training Assembly (2022)', '31st Dist. Assembly (2021)', '30th Dist. Assembly (2020)'],
                ['29th Dist. Conference (2020)', '29th Dist. Assembly (2019)', '28th Dist. Conference (2019)', 'RYLA (2023)', 'RYLA (2019)', 'Rotasia Bangalore (2024)'],
                ['Rotary Dist. Conference (2023)', 'Rotary Dist. Conference (2024)', 'Rotary Dist. Conference (2025)', 'Rotary Learning Assembly (2024)', 'PETS SETS (2024)', 'PETS SETS (2023)'],
              ].map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className={`marquee-row ${rowIndex % 2 === 0 ? 'marquee-left' : 'marquee-right'}`}
                  style={{
                    display: 'flex',
                    gap: '0.5rem',
                    marginBottom: '0.5rem',
                    width: 'fit-content',
                  }}
                >
                  {/* Double the items for seamless loop */}
                  {[...row, ...row].map((event, i) => (
                    <span
                      key={i}
                      className="font-body"
                      style={{
                        flexShrink: 0,
                        fontSize: '0.65rem',
                        fontWeight: 500,
                        color: 'var(--t3)',
                        background: 'rgba(15,6,8,0.03)',
                        border: '1px solid rgba(15,6,8,0.06)',
                        borderRadius: '100px',
                        padding: '0.35rem 0.7rem',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {event}
                    </span>
                  ))}
                </div>
              ))}
            </div>

            {/* Desktop: Grid */}
            <div
              className="hidden md:grid"
              style={{
                gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                gap: '0.4rem 2rem',
              }}
            >
              {[
                'PETS SETS (2024) — President Elect',
                'PETS SETS (2023) — RDSC',
                'PETS SETS (2019) — Proxy',
                '35th Rotaract District Assembly (2025)',
                '34th Rotaract District Conference (2025)',
                '34th Rotaract District Assembly (2024)',
                '33rd Rotaract District Conference (2024)',
                '33rd Rotaract District Assembly (2023)',
                '32nd Rotaract District Conference (2023)',
                '32nd Rotaract District Training Assembly (2022)',
                '31st Rotaract District Assembly (2021)',
                '30th Rotaract District Assembly (2020)',
                '29th Rotaract District Conference (2020)',
                '29th Rotaract District Assembly (2019)',
                '28th Rotaract District Conference (2019)',
                'Rotary Youth Leadership Awards (2023)',
                'Rotary Youth Leadership Awards (2019)',
                'Rotasia Bangalore (2024)',
                'Rotary District Conference (2023)',
                'Rotary District Conference (2024)',
                'Rotary District Conference (2025)',
                'Rotary District Learning Assembly (2024)',
              ].map((event, i) => (
                <p
                  key={i}
                  className="font-body text-[var(--t2)]"
                  style={{ fontSize: '0.8rem', fontWeight: 450, lineHeight: 1.6 }}
                >
                  {event}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
