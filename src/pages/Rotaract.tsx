import { Fragment, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { timelineData } from '../data/timeline';
import { awardsData } from '../data/awards';
import Contact from '../components/sections/Contact';
import haneef1 from '../assets/haneef_1.webp';
import haneef2 from '../assets/haneef_2.webp';
import haneef3 from '../assets/haneef_3.webp';
import haneef4 from '../assets/haneef_4.webp';

gsap.registerPlugin(ScrollTrigger);

const TYPE_COLORS: Record<string, { main: string; border: string; dim: string }> = {
  LEADERSHIP: { main: 'var(--crimson)', border: 'var(--crimson-border)', dim: 'var(--crimson-dim)' },
  DISTRICT: { main: 'var(--navy)', border: 'var(--navy-border)', dim: 'var(--navy-dim)' },
};

const rotaractTimeline = timelineData.filter(
  (item) => item.type === 'LEADERSHIP' || item.type === 'DISTRICT'
);

type FeaturedImage = {
  src: string;
  alt: string;
  awardTitle: string;
  caption: string;
  cropBottom?: boolean;
  portrait45?: boolean;
};

const featuredImages: FeaturedImage[] = [
  {
    src: haneef1,
    alt: 'Most Popular Rotaractor award',
    awardTitle: 'Most Popular Rotaractor',
    caption: 'Most Popular Rotaractor',
    cropBottom: true,
  },
  {
    src: haneef2,
    alt: 'Volunteer of the Year award',
    awardTitle: 'Volunteer of the Year',
    caption: 'Volunteer of the Year',
    cropBottom: false,
    portrait45: true,
  },
];
const featuredImageByAwardTitle = new Map(
  featuredImages.map((image, index) => [image.awardTitle, { ...image, imageIndex: index }])
);

const roleImageByTitle = new Map([
  [
    'Committee Member CSR',
    {
      src: haneef3,
      alt: 'RSAMDIO appointment ceremony',
      caption: 'RSAMDIO Appointment',
      landscapeOnly: false,
    },
  ],
  [
    'Director of Strategic Alliance',
    {
      src: haneef4,
      alt: 'Mrs India volunteer leadership role',
      caption: 'Mrs. India Volunteer Lead',
      landscapeOnly: true,
    },
  ],
]);

export default function Rotaract() {
  const prefersReducedMotion = useReducedMotion();
  const [isMobileViewport, setIsMobileViewport] = useState(() => (
    typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches
  ));
  const [isCoarsePointer, setIsCoarsePointer] = useState(() => (
    typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches
  ));
  const [isMobileSafeMode, setIsMobileSafeMode] = useState(() => (
    typeof document !== 'undefined' && document.documentElement.classList.contains('mobile-safe-scroll')
  ));
  const timelineRef = useRef<HTMLDivElement>(null);
  const entriesRef = useRef<(HTMLDivElement | null)[]>([]);
  const awardItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const featuredImageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const useDesktopGsapReveal = !prefersReducedMotion && !isMobileViewport && !isCoarsePointer && !isMobileSafeMode;
  const useMobileInViewReveal = !prefersReducedMotion && !useDesktopGsapReveal && !isMobileSafeMode;

  useEffect(() => {
    const viewportMql = window.matchMedia('(max-width: 767px)');
    const pointerMql = window.matchMedia('(pointer: coarse)');
    const onViewportChange = (event: MediaQueryListEvent) => setIsMobileViewport(event.matches);
    const onPointerChange = (event: MediaQueryListEvent) => setIsCoarsePointer(event.matches);

    setIsMobileViewport(viewportMql.matches);
    setIsCoarsePointer(pointerMql.matches);

    viewportMql.addEventListener('change', onViewportChange);
    pointerMql.addEventListener('change', onPointerChange);
    return () => {
      viewportMql.removeEventListener('change', onViewportChange);
      pointerMql.removeEventListener('change', onPointerChange);
    };
  }, []);

  useEffect(() => {
    const updateSafeMode = () => {
      setIsMobileSafeMode(document.documentElement.classList.contains('mobile-safe-scroll'));
    };
    const onVisibilityChange = () => {
      if (document.visibilityState === 'visible') updateSafeMode();
    };

    updateSafeMode();
    window.addEventListener('resize', updateSafeMode);
    window.addEventListener('pageshow', updateSafeMode);
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      window.removeEventListener('resize', updateSafeMode);
      window.removeEventListener('pageshow', updateSafeMode);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (!useDesktopGsapReveal) {
      const allElements = [
        ...entriesRef.current,
        ...awardItemsRef.current,
        ...featuredImageRefs.current,
      ];

      allElements.forEach((el) => {
        if (!el) return;
        gsap.set(el, { opacity: 1, y: 0, scale: 1, clearProps: 'transform' });
      });
      return;
    }

    const ctx = gsap.context(() => {
      entriesRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 12 },
          {
            opacity: 1,
            y: 0,
            duration: 0.24,
            ease: 'power3.out',
            delay: i * 0.03,
            scrollTrigger: {
              trigger: el,
              start: 'top 92%',
              toggleActions: 'play none none none',
              once: true,
            },
          }
        );
      });

      awardItemsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.2,
            ease: 'power3.out',
            delay: i * 0.025,
            scrollTrigger: {
              trigger: el,
              start: 'top 92%',
              toggleActions: 'play none none none',
              once: true,
            },
          }
        );
      });

      featuredImageRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 20, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.38,
            ease: 'power3.out',
            delay: i * 0.06,
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              toggleActions: 'play none none none',
              once: true,
            },
          }
        );
      });
    });
    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
    };
  }, [useDesktopGsapReveal]);

  const fadeInUp = {
    initial: useDesktopGsapReveal ? { opacity: 0, y: 16 } : { opacity: 1 },
    whileInView: useDesktopGsapReveal ? { opacity: 1, y: 0 } : { opacity: 1 },
    transition: useDesktopGsapReveal ? { duration: 0.35, ease: [0.33, 1, 0.68, 1] as const } : undefined,
    viewport: { once: true, amount: 0.2 },
  };

  const titleAnimation = {
    initial: useDesktopGsapReveal ? { opacity: 0, y: 10 } : { opacity: 1 },
    whileInView: useDesktopGsapReveal ? { opacity: 1, y: 0 } : { opacity: 1 },
    transition: useDesktopGsapReveal ? { duration: 0.3, ease: [0.33, 1, 0.68, 1] as const } : undefined,
    viewport: { once: true, amount: 0.3 },
  };

  return (
    <main className="relative min-h-[100dvh] bg-[var(--bg)] pb-[max(env(safe-area-inset-bottom),0px)]">
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
                  const roleImage = roleImageByTitle.get(item.title);

                  return (
                    <motion.div
                      key={`${item.year}-${index}`}
                      ref={(el) => { entriesRef.current[index] = el; }}
                      className="relative pl-4 md:pl-6 py-4 border-l-2 md:border-l-0"
                      initial={useMobileInViewReveal ? { opacity: 0.96, y: 8 } : undefined}
                      whileInView={useMobileInViewReveal ? { opacity: 1, y: 0 } : undefined}
                      transition={useMobileInViewReveal ? { duration: 0.24, delay: index * 0.015, ease: [0.33, 1, 0.68, 1] } : undefined}
                      viewport={useMobileInViewReveal ? { once: true, amount: 0.08 } : undefined}
                      style={{
                        borderLeftColor: colors.main,
                      }}
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

                      <div className={roleImage ? 'md:grid md:grid-cols-[1fr_460px] md:gap-8 md:items-start' : undefined}>
                        <div>
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
                        </div>

                        {roleImage && (
                          <div className={roleImage.landscapeOnly ? 'hidden md:block' : 'mt-5 md:mt-0'}>
                            <div className="overflow-hidden rounded-md border border-[var(--border)]">
                              <img
                                src={roleImage.src}
                                alt={roleImage.alt}
                                className={roleImage.landscapeOnly ? 'w-full aspect-[16/9] object-cover' : 'w-full h-auto max-h-[220px] md:max-h-[420px] object-contain'}
                                loading="lazy"
                                decoding="async"
                              />
                            </div>
                            <p className="font-body text-[0.7rem] text-[var(--t3)] mt-2 uppercase tracking-[0.08em]">
                              {roleImage.caption}
                            </p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>


            </div>
          </motion.section>

          <motion.section className="mb-20 md:mb-24" {...fadeInUp}>
            <motion.div className="mb-10" {...titleAnimation}>
              <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] text-[var(--t1)] leading-[0.95] tracking-[0.025em] uppercase">
                Interact Journey
              </h2>
              <p className="font-body text-[var(--t2)] mt-2 text-sm">
                Interact Club of Amal International School
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-[11px] md:left-6 top-0 bottom-0 w-px bg-[var(--border)]" />

              {[
                { year: '2016–17', role: 'President' },
                { year: '2015–16', role: 'Assistant Secretary' },
                { year: '2014–15', role: 'Public Relations Director' },
              ].map((item, index) => (
                <motion.div
                  key={item.year}
                  className="relative pl-10 md:pl-14 py-5 border-l-2 border-[var(--crimson)] md:border-l-0"
                  initial={useDesktopGsapReveal ? { opacity: 0, y: 12 } : { opacity: 1 }}
                  whileInView={useDesktopGsapReveal ? { opacity: 1, y: 0 } : undefined}
                  transition={useDesktopGsapReveal ? { duration: 0.25, delay: index * 0.08, ease: [0.33, 1, 0.68, 1] } : undefined}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className="absolute left-[-5px] md:left-[-9px] top-6 w-2.5 h-2.5 rounded-full bg-[var(--crimson)]" />

                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-display text-[1.1rem] md:text-[1.2rem] font-bold text-[var(--crimson)]">
                      {item.year}
                    </span>
                    <span className="font-body text-[0.95rem] text-[var(--t2)]">
                      {item.role}
                    </span>
                  </div>
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
              {awardsData.map((award, index) => {
                const featured = featuredImageByAwardTitle.get(award.title);

                return (
                <Fragment key={`${award.year}-${award.title}-${index}`}>
                  <div
                    ref={(el) => { awardItemsRef.current[index] = el; }}
                    className="award-item py-4 md:py-5 border-b border-[var(--campaign-border-light)] first:border-t first:border-[var(--campaign-border-light)] transition-colors duration-200 group hover:border-[var(--crimson)]"
                    style={useMobileInViewReveal ? { opacity: 1, transform: 'none' } : undefined}
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

                  {featured && (
                      <div
                        ref={(el) => {
                          featuredImageRefs.current[featured.imageIndex] = el;
                        }}
                        className="py-6 md:py-14"
                        style={useMobileInViewReveal ? { opacity: 1, transform: 'none' } : undefined}
                      >
                        <div className="overflow-hidden md:rounded-lg" style={{ borderTop: '2px solid var(--ta)' }}>
                          <img
                            src={featured.src}
                            alt={featured.alt}
                            className={featured.cropBottom
                              ? 'w-full h-[230px] md:h-[500px] object-cover object-top'
                              : featured.portrait45
                                ? 'w-full max-w-[340px] md:max-w-[430px] mx-auto aspect-[4/5] object-contain object-center'
                                : 'w-full h-auto max-h-[250px] md:max-h-[520px] object-contain'}
                            loading={featured.imageIndex === 0 ? 'eager' : 'lazy'}
                            fetchPriority={featured.imageIndex === 0 ? 'high' : 'auto'}
                            decoding="async"
                          />
                        </div>
                        <p className="font-body text-[0.75rem] text-[var(--t3)] mt-4 text-center uppercase tracking-[0.10em]">
                          {featured.caption}
                        </p>
                      </div>
                  )}
                </Fragment>
                );
              })}
            </div>
          </motion.section>
        </div>
      </div>

      <Contact />
    </main>
  );
}
