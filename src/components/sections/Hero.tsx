import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Award, Menu, X, House } from 'lucide-react';
import potrait from '../../assets/potrait.webp';
import { getRoutePreloadHandlers } from '../../lib/routePreload';

const EASE_SMOOTH = [0.16, 1, 0.3, 1] as const;
const MOBILE_SWITCHER_BOTTOM_OFFSET = 16;
const MOBILE_SWITCHER_APPROX_HEIGHT = 40;
const MOBILE_TEXT_TO_SWITCHER_GAP = 6;
const MOBILE_BOTTOM_RESERVED = MOBILE_SWITCHER_BOTTOM_OFFSET + MOBILE_SWITCHER_APPROX_HEIGHT + MOBILE_TEXT_TO_SWITCHER_GAP;

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [mobileQuickMenuOpen, setMobileQuickMenuOpen] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)');
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    setIsMobile(mql.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  const preloadHandlers = (href: string) => getRoutePreloadHandlers(href);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (event: MediaQueryListEvent) => setPrefersReducedMotion(event.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const cacheKey = 'hero-image-loaded';
    if (sessionStorage.getItem(cacheKey) === 'true') {
      setImageLoaded(true);
      return;
    }
    const img = new Image();
    img.src = potrait;
    img.onload = () => {
      sessionStorage.setItem(cacheKey, 'true');
      setImageLoaded(true);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full overflow-x-hidden"
      style={{
        height: isMobile ? '100svh' : '100dvh',
        minHeight: isMobile ? '100dvh' : '600px',
        scrollMarginTop: '80px',
        background: `linear-gradient(
          to bottom,
          #5BA3C4 0%,
          #3A8FB7 50%,
          #2A7A9E 100%
        )`,
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          opacity: 0.2,
          backgroundImage: `
            linear-gradient(var(--hta) 1px, transparent 1px),
            linear-gradient(90deg, var(--hta) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          backgroundPosition: 'center top',
          maskImage: 'linear-gradient(to bottom, black 0%, black 35%, transparent 70%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 35%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Loading skeleton - shown until image loads */}
      <AnimatePresence>
        {!imageLoaded && (
          <motion.div
            className="absolute inset-0 z-50 flex items-center justify-center"
            style={{
              background: `linear-gradient(
                to bottom,
                #5BA3C4 0%,
                #3A8FB7 100%
              )`,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="w-16 h-16 border-2 border-[rgba(253,248,242,0.3)] border-t-[rgba(253,248,242,0.8)] rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content - revealed after image loads */}
      <AnimatePresence>
        {imageLoaded && (
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: EASE_SMOOTH }}
          >
            {/* Desktop Layout */}
            {!isMobile ? (
              <>
                {/* Subtle radial glow behind portrait */}
                <div
                  style={{
                    position: 'absolute',
                    top: '15%',
                    right: '15%',
                    width: '35%',
                    height: '50%',
                    background: 'radial-gradient(ellipse at center, rgba(253,248,242,0.06) 0%, transparent 65%)',
                    zIndex: 0,
                    pointerEvents: 'none',
                  }}
                />

                {/* Portrait Image */}
                <div
                  className="absolute right-0 top-0 overflow-hidden"
                  style={{ zIndex: 1, width: '37.5%', height: '110%', right: '10%', top: '-4%' }}
                >
                  <motion.img
                    src={potrait}
                    alt="Haneef Mohamed portrait"
                    width={600}
                    height={800}
                    initial={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: '38% 10%',
                      maskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, black 100%)',
                      WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, black 100%)',
                    }}
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 pointer-events-none"
                    style={{
                      height: '14%',
                      background: 'linear-gradient(to bottom, transparent 0%, rgba(42, 122, 158, 0.12) 45%, rgba(42, 122, 158, 0.28) 100%)',
                      filter: 'blur(10px)',
                      opacity: 0.7,
                    }}
                  />
                </div>

                {/* Text Content + Navigation Buttons */}
                <div className="absolute inset-0 flex flex-col justify-end pb-[8%]" style={{ zIndex: 10 }}>
                  <div className="w-[61%] pl-12 md:pl-16 lg:pl-20">
                    {/* HANEEF MOHAMED */}
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                    >
                      <span className="font-display font-light text-[clamp(0.72rem,1.32vw,1.05rem)] tracking-[0.25em] uppercase block mb-3" style={{ color: 'rgba(253,248,242,0.55)' }}>
                        Rtr. IPP
                      </span>
                      <h1 className="font-display font-black text-[clamp(3.05rem,8.45vw,7.6rem)] leading-[0.75] tracking-[-0.024em] text-[#FDF8F2] uppercase">
                        HANEEF
                        <br />
                        <span className="text-[clamp(2.8rem,7.8vw,6.9rem)]">MOHAMED</span>
                      </h1>
                    </motion.div>

                    {/* Sub-headline */}
                    <motion.p
                      className="font-display uppercase text-[clamp(0.82rem,1.12vw,0.95rem)] tracking-[0.11em] mt-6"
                      style={{ color: 'rgba(253,248,242,0.76)', fontWeight: 500 }}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: EASE_SMOOTH, delay: 0.5 }}
                    >
                      PR Strategist • Rotaract President
                    </motion.p>

                    {/* Description */}
                    <motion.p
                      className="font-sans italic text-[clamp(0.84rem,1.04vw,0.93rem)] leading-[1.9] mt-6 max-w-[74ch] tracking-[0.012em]"
                      style={{ color: 'rgba(253,248,242,0.83)', fontWeight: 360 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: EASE_SMOOTH, delay: 0.6 }}
                    >
                      Public Relations professional driven by the power of perspective. I build narratives, strengthen reputations, and create meaningful connections that inspire action. My Rotaract journey shaped my ability to lead with clarity and build networks that create opportunities. At the core of everything I do is a simple intention: create work that matters and lead with Purpose in Focus.
                    </motion.p>

                    {/* Navigation Buttons - Artistic Integration */}
                    <motion.div
                      className="flex flex-row gap-4 mt-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: EASE_SMOOTH, delay: 0.7 }}
                    >
                      <Link
                        to="/professional"
                        {...preloadHandlers('/professional')}
                        className="group relative inline-flex items-center gap-3 px-6 py-3.5 font-display text-[0.68rem] tracking-[0.15em] uppercase text-[#FDF8F2] overflow-hidden rounded-lg transition-all duration-300"
                        style={{
                          background: 'rgba(253,248,242,0.1)',
                          backdropFilter: 'blur(12px)',
                          border: '1px solid rgba(253,248,242,0.2)',
                        }}
                      >
                        <span className="absolute inset-0 bg-[rgba(253,248,242,0.15)] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        <Briefcase size={14} className="relative z-10 opacity-70 group-hover:opacity-100 transition-opacity" />
                        <span className="relative z-10">Professional</span>
                      </Link>

                      <Link
                        to="/rotaract"
                        {...preloadHandlers('/rotaract')}
                        className="group relative inline-flex items-center gap-3 px-6 py-3.5 font-display text-[0.68rem] tracking-[0.15em] uppercase text-[#FDF8F2] overflow-hidden rounded-lg transition-all duration-300"
                        style={{
                          background: 'rgba(253,248,242,0.1)',
                          backdropFilter: 'blur(12px)',
                          border: '1px solid rgba(253,248,242,0.2)',
                        }}
                      >
                        <span className="absolute inset-0 bg-[rgba(253,248,242,0.15)] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        <Award size={14} className="relative z-10 opacity-70 group-hover:opacity-100 transition-opacity" />
                        <span className="relative z-10">Rotaract</span>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </>
            ) : (
              /* Mobile Layout */
              <div
                className="relative h-full w-full"
                style={{
                  paddingTop: 'max(env(safe-area-inset-top, 0px), 8px)',
                }}
              >
                {/* VOTE watermark */}
                <div
                  className="absolute inset-0 flex items-center justify-center overflow-hidden"
                  style={{ zIndex: 0 }}
                >
                  <motion.span
                    className="font-display font-black uppercase whitespace-nowrap"
                    style={{
                      fontSize: 'clamp(8rem, 50vw, 14rem)',
                      color: 'transparent',
                      WebkitTextStroke: '1px rgba(253,248,242,0.05)',
                      letterSpacing: '0.10em',
                      userSelect: 'none',
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, ease: EASE_SMOOTH }}
                    aria-hidden="true"
                  >
                    VOTE
                  </motion.span>
                </div>

                {/* Radial glow */}
                <div
                  style={{
                    position: 'absolute',
                    top: '10%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '70%',
                    height: '60%',
                    background: 'radial-gradient(ellipse at center, rgba(253,248,242,0.08) 0%, transparent 70%)',
                    zIndex: 0,
                    pointerEvents: 'none',
                  }}
                />

                {/* Portrait */}
                <div
                  className="absolute inset-0 flex items-start justify-center"
                  style={{ zIndex: 1, transform: 'translateY(1%)' }}
                >
                  <motion.img
                    src={potrait}
                    alt=""
                    width={600}
                    height={800}
                    initial={{ opacity: 0, scale: 1.15, filter: 'blur(15px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    style={{
                      objectFit: 'contain',
                      objectPosition: 'center top',
                      width: '92%',
                      height: '66%',
                      maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                      WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                    }}
                    aria-hidden="true"
                  />
                  <div
                    className="absolute bottom-[20%] left-[8%] right-[8%] pointer-events-none"
                    style={{
                      height: '10%',
                      background: 'linear-gradient(to bottom, transparent 0%, rgba(42, 122, 158, 0.16) 50%, rgba(42, 122, 158, 0.24) 100%)',
                      filter: 'blur(12px)',
                      opacity: 0.55,
                    }}
                  />
                </div>

                {/* Text + Buttons */}
                <div
                  className="absolute left-0 right-0 px-5 md:px-8 flex flex-col items-center justify-end"
                  style={{ zIndex: 10, bottom: `calc(env(safe-area-inset-bottom, 0px) + ${MOBILE_BOTTOM_RESERVED}px)` }}
                >
                  {/* Name */}
                  <motion.div
                    className="w-full max-w-[92vw]"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                  >
                    <span className="font-display font-light uppercase tracking-[0.25em] block mb-2 text-center" style={{ fontSize: 'clamp(0.7rem, 3vw, 1rem)', color: 'rgba(253,248,242,0.55)' }}>
                      Rtr. IPP
                    </span>
                    <h1
                      className="font-display uppercase"
                      style={{
                        fontSize: 'clamp(2.9rem, 15.2vw, 4.35rem)',
                        lineHeight: 0.8,
                        letterSpacing: '-0.022em',
                        textAlign: 'center',
                        color: '#FDF8F2',
                        fontWeight: 950,
                        marginBottom: '0.15rem',
                        textShadow: '0 4px 12px rgba(0,0,0,0.25), 0 14px 34px rgba(0,0,0,0.45), 0 0 28px rgba(9,36,53,0.28)',
                      }}
                    >
                      <span style={{ display: 'block', fontSize: 'clamp(2.95rem, 15.8vw, 4.45rem)' }}>HANEEF</span>
                      <span style={{ display: 'block', fontSize: 'clamp(2.9rem, 15.4vw, 4.35rem)' }}>MOHAMED</span>
                    </h1>
                  </motion.div>

                  {/* Sub-headline */}
                  <motion.p
                    className="font-display uppercase"
                    style={{
                      fontSize: 'clamp(0.7rem, 2.55vw, 0.84rem)',
                      fontWeight: 520,
                      color: 'rgba(253,248,242,0.78)',
                      letterSpacing: '0.085em',
                      lineHeight: 1.45,
                      textAlign: 'center',
                      paddingLeft: '1.2rem',
                      paddingRight: '1.2rem',
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, ease: EASE_SMOOTH, delay: 0.5 }}
                  >
                    PR Strategist • Rotaract President
                  </motion.p>

                  {/* Description - Mobile */}
                  <motion.p
                    className="font-sans italic text-center max-w-[36ch] mx-auto"
                    style={{
                      fontSize: 'clamp(0.86rem, 3vw, 0.96rem)',
                      color: 'rgba(253,248,242,0.84)',
                      lineHeight: 1.72,
                      letterSpacing: '0.01em',
                      fontWeight: 360,
                      paddingLeft: '1rem',
                      paddingRight: '1rem',
                      marginTop: '0.5rem',
                    }}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: EASE_SMOOTH, delay: 0.6 }}
                  >
                    Public Relations professional driven by perspective. I build narratives, strengthen reputations, and create connections that inspire action. My Rotaract journey shaped my leadership and network-building. At my core: create work that matters and lead with Purpose in Focus.
                  </motion.p>

                </div>

                {/* Floating Route Switcher - Mobile */}
                <motion.div
                  className="fixed left-1/2 -translate-x-1/2 w-[248px] max-w-[calc(100%-1.5rem)] rounded-xl p-1.5 flex items-center gap-1.5"
                  style={{
                    zIndex: 30,
                    bottom: `calc(env(safe-area-inset-bottom, 0px) + ${MOBILE_SWITCHER_BOTTOM_OFFSET}px)`,
                    background: 'rgba(8, 45, 69, 0.62)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(253,248,242,0.22)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                  }}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: EASE_SMOOTH, delay: 0.85 }}
                >
                  <Link
                    to="/professional"
                    {...preloadHandlers('/professional')}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg font-display text-[0.62rem] tracking-[0.1em] uppercase text-[#FDF8F2] transition-colors"
                    style={{ background: 'rgba(253,248,242,0.13)' }}
                  >
                    <Briefcase size={11} className="opacity-85" />
                    <span>Professional</span>
                  </Link>
                  <Link
                    to="/rotaract"
                    {...preloadHandlers('/rotaract')}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg font-display text-[0.62rem] tracking-[0.1em] uppercase text-[#FDF8F2] transition-colors"
                    style={{ background: 'rgba(253,248,242,0.13)' }}
                  >
                    <Award size={11} className="opacity-85" />
                    <span>Rotaract</span>
                  </Link>
                </motion.div>

                {/* Quick Hamburger - Mobile Home */}
                <motion.button
                  type="button"
                  className="fixed top-4 right-4 inline-flex items-center justify-center"
                  style={{
                    zIndex: 35,
                    color: 'rgba(245, 248, 250, 0.82)',
                    textShadow: '0 2px 10px rgba(0,0,0,0.28)',
                  }}
                  onClick={() => setMobileQuickMenuOpen((v) => !v)}
                  aria-label="Open quick navigation"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: EASE_SMOOTH, delay: 0.65 }}
                >
                  {mobileQuickMenuOpen ? <X size={17} /> : <Menu size={17} />}
                </motion.button>

                <AnimatePresence>
                  {mobileQuickMenuOpen && (
                    <motion.div
                      className="fixed top-14 right-3 w-[170px] rounded-xl p-1.5 flex flex-col gap-1.5"
                      style={{
                        zIndex: 36,
                        background: 'rgba(8, 45, 69, 0.72)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(253,248,242,0.2)',
                        boxShadow: '0 12px 28px rgba(0,0,0,0.26)',
                      }}
                      initial={{ opacity: 0, y: -8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.96 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        to="/"
                        {...preloadHandlers('/')}
                        onClick={() => setMobileQuickMenuOpen(false)}
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-lg font-display text-[0.62rem] tracking-[0.1em] uppercase text-[#FDF8F2]"
                        style={{ background: 'rgba(253,248,242,0.12)' }}
                      >
                        <House size={11} />
                        <span>Home</span>
                      </Link>
                      <Link
                        to="/professional"
                        {...preloadHandlers('/professional')}
                        onClick={() => setMobileQuickMenuOpen(false)}
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-lg font-display text-[0.62rem] tracking-[0.1em] uppercase text-[#FDF8F2]"
                        style={{ background: 'rgba(253,248,242,0.12)' }}
                      >
                        <Briefcase size={11} />
                        <span>Professional</span>
                      </Link>
                      <Link
                        to="/rotaract"
                        {...preloadHandlers('/rotaract')}
                        onClick={() => setMobileQuickMenuOpen(false)}
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-lg font-display text-[0.62rem] tracking-[0.1em] uppercase text-[#FDF8F2]"
                        style={{ background: 'rgba(253,248,242,0.12)' }}
                      >
                        <Award size={11} />
                        <span>Rotaract</span>
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
