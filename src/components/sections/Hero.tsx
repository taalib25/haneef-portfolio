import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Award } from 'lucide-react';
import potrait from '../../assets/potrait.webp';

const EASE_SMOOTH = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)');
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    setIsMobile(mql.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (event: MediaQueryListEvent) => setPrefersReducedMotion(event.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Preload image
  useEffect(() => {
    const img = new Image();
    img.src = potrait;
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full overflow-x-hidden"
      style={{
        height: '100vh',
        height: '100dvh',
        minHeight: '600px',
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
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
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
                  style={{ zIndex: 1, width: '32%', height: '100%', right: '4%' }}
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
                      objectPosition: '40% 8%',
                      maskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, black 100%)',
                      WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, black 100%)',
                    }}
                  />
                </div>

                {/* Text Content + Navigation Buttons */}
                <div className="absolute inset-0 flex flex-col justify-end pb-[8%]" style={{ zIndex: 10 }}>
                  <div className="w-[65%] pl-8 md:pl-12 lg:pl-16">
                    {/* HANEEF MOHAMED */}
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                    >
                      <span className="font-display font-light text-[clamp(0.8rem,1.5vw,1.2rem)] tracking-[0.25em] uppercase block mb-3" style={{ color: 'rgba(253,248,242,0.55)' }}>
                        Rtr. IPP
                      </span>
                      <h1 className="font-display font-bold text-[clamp(4rem,12vw,11rem)] leading-[0.72] tracking-[-0.02em] text-[#FDF8F2] uppercase">
                        HANEEF
                        <br />
                        <span className="text-[clamp(3.5rem,10vw,9.5rem)]">MOHAMED</span>
                      </h1>
                    </motion.div>

                    {/* Sub-headline */}
                    <motion.p
                      className="font-display font-light text-[clamp(0.9rem,1.2vw,1rem)] tracking-wide mt-6"
                      style={{ color: 'rgba(253,248,242,0.65)' }}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: EASE_SMOOTH, delay: 0.5 }}
                    >
                      PR Strategist · Rotaract President · DRR Candidate 2025
                    </motion.p>

                    {/* Navigation Buttons - Artistic Integration */}
                    <motion.div
                      className="flex flex-row gap-4 mt-10"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: EASE_SMOOTH, delay: 0.7 }}
                    >
                      <Link
                        to="/professional"
                        className="group relative inline-flex items-center gap-3 px-6 py-3.5 font-display text-[0.75rem] tracking-[0.15em] uppercase text-[#FDF8F2] overflow-hidden rounded-lg transition-all duration-300"
                        style={{
                          background: 'rgba(253,248,242,0.1)',
                          backdropFilter: 'blur(12px)',
                          border: '1px solid rgba(253,248,242,0.2)',
                        }}
                      >
                        <span className="absolute inset-0 bg-[rgba(253,248,242,0.15)] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        <Briefcase size={16} className="relative z-10 opacity-70 group-hover:opacity-100 transition-opacity" />
                        <span className="relative z-10">Professional</span>
                      </Link>

                      <Link
                        to="/rotaract"
                        className="group relative inline-flex items-center gap-3 px-6 py-3.5 font-display text-[0.75rem] tracking-[0.15em] uppercase text-[#FDF8F2] overflow-hidden rounded-lg transition-all duration-300"
                        style={{
                          background: 'rgba(253,248,242,0.1)',
                          backdropFilter: 'blur(12px)',
                          border: '1px solid rgba(253,248,242,0.2)',
                        }}
                      >
                        <span className="absolute inset-0 bg-[rgba(253,248,242,0.15)] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        <Award size={16} className="relative z-10 opacity-70 group-hover:opacity-100 transition-opacity" />
                        <span className="relative z-10">Rotaract</span>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </>
            ) : (
              /* Mobile Layout */
              <div className="relative h-full w-full">
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
                  style={{ zIndex: 1 }}
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
                      width: '94%',
                      height: '79%',
                      maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                      WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                    }}
                    aria-hidden="true"
                  />
                </div>

                {/* Text + Buttons */}
                <div
                  className="absolute bottom-0 left-0 right-0 px-6 md:px-8 pb-12 flex flex-col items-center justify-end"
                  style={{ zIndex: 10 }}
                >
                  {/* Name */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                  >
                    <span className="font-display font-light uppercase tracking-[0.25em] block mb-3 text-center" style={{ fontSize: 'clamp(0.7rem, 3vw, 1rem)', color: 'rgba(253,248,242,0.55)' }}>
                      Rtr. IPP
                    </span>
                    <h1
                      className="font-display uppercase"
                      style={{
                        fontSize: 'clamp(3.5rem, 18vw, 5rem)',
                        lineHeight: 0.72,
                        letterSpacing: '-0.03em',
                        textAlign: 'center',
                        color: '#FDF8F2',
                        fontWeight: 900,
                        marginBottom: '0.4rem',
                        textShadow: '0 2px 20px rgba(0,0,0,0.25)',
                      }}
                    >
                      <span style={{ display: 'block', fontSize: 'clamp(4rem, 23vw, 6rem)' }}>HANEEF</span>
                      <span style={{ display: 'block', fontSize: 'clamp(3rem, 17vw, 4.5rem)' }}>MOHAMED</span>
                    </h1>
                  </motion.div>

                  {/* Sub-headline */}
                  <motion.p
                    className="font-display font-light"
                    style={{
                      fontSize: 'clamp(0.65rem, 2.5vw, 0.8rem)',
                      fontWeight: 400,
                      color: 'rgba(253,248,242,0.70)',
                      letterSpacing: '0.03em',
                      lineHeight: 1.5,
                      textAlign: 'center',
                      paddingLeft: '1.5rem',
                      paddingRight: '1.5rem',
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, ease: EASE_SMOOTH, delay: 0.5 }}
                  >
                    PR Strategist · Rotaract President · DRR Candidate 2025
                  </motion.p>

                  {/* Navigation Buttons - Mobile */}
                  <motion.div
                    className="flex flex-col gap-3 w-full max-w-[320px] mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: EASE_SMOOTH, delay: 0.7 }}
                  >
                    <Link
                      to="/professional"
                      className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 font-display text-[0.7rem] tracking-[0.15em] uppercase text-[#FDF8F2] overflow-hidden rounded-lg transition-all duration-300"
                      style={{
                        background: 'rgba(253,248,242,0.12)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(253,248,242,0.25)',
                      }}
                    >
                      <span className="absolute inset-0 bg-[rgba(253,248,242,0.2)] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                      <Briefcase size={14} className="relative z-10 opacity-70 group-hover:opacity-100 transition-opacity" />
                      <span className="relative z-10">Professional</span>
                    </Link>

                    <Link
                      to="/rotaract"
                      className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 font-display text-[0.7rem] tracking-[0.15em] uppercase text-[#FDF8F2] overflow-hidden rounded-lg transition-all duration-300"
                      style={{
                        background: 'rgba(253,248,242,0.12)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(253,248,242,0.25)',
                      }}
                    >
                      <span className="absolute inset-0 bg-[rgba(253,248,242,0.2)] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                      <Award size={14} className="relative z-10 opacity-70 group-hover:opacity-100 transition-opacity" />
                      <span className="relative z-10">Rotaract</span>
                    </Link>
                  </motion.div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
