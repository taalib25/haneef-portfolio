import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import potrait from '../../assets/potrait.webp';

const EASE_SMOOTH = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)');
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);

    setIsMobile(mql.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{
        height: '100dvh',
        minHeight: '600px',
        // Both desktop and mobile use gradient with depth (crimson tones only)
        background: `linear-gradient(
          to bottom,
          var(--color-crimson) 0%,
          color-mix(in srgb, var(--color-crimson) 85%, #000) 60%,
          color-mix(in srgb, var(--color-crimson) 95%, #000) 100%
        )`,
      }}
    >
      {/* Desktop Layout */}
      {!isMobile ? (
        <>
          {/* Subtle radial glow behind portrait for depth - positioned at head level */}
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

          {/* Portrait Image - Full height right panel with 20% padding */}
          <div
            className="absolute right-0 bottom-0 overflow-hidden"
            style={{ zIndex: 1, width: '32%', height: '92%',right: '4%' }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundImage: `url(${potrait})`,
                backgroundSize: 'cover',
                backgroundPosition: '40% 8%',
                maskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, black 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, black 100%)',
              }}
            />
          </div>

          {/* Text Content - Left aligned, not centered */}
          <div className="absolute inset-0 flex flex-col justify-end pb-[10%]" style={{ zIndex: 10 }}>
            <div className="w-[65%] pl-8 md:pl-12 lg:pl-16">
              {/* Identity label */}

              {/* HANEEF MOHAMED - Really big bold text */}
              <motion.h1
                className="font-display font-bold text-[clamp(3.5rem,10vw,9rem)] leading-[0.75] tracking-[0.02em] text-[#FDF8F2] uppercase"
                initial={{ opacity: 0, scale: 0.92, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.1, ease: EASE_SMOOTH, delay: 0.1 }}
              >
                HANEEF
                <br />
                MOHAMED
              </motion.h1>

              {/* Sub-headline */}
              <motion.p
                className="font-display font-light text-[clamp(0.9rem,1.2vw,1rem)] tracking-wide mt-6"
                style={{ color: 'rgba(253,248,242,0.65)' }}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE_SMOOTH, delay: 0.2 }}
              >
                PR Strategist · Rotaract President · DRR Candidate 2025
              </motion.p>
            </div>
          </div>

          {/* Scroll Indicator - Bottom Left aligned with text */}
          <motion.div
            className="absolute bottom-8 left-8 md:left-12 lg:left-16 flex flex-col items-center gap-3"
            style={{ zIndex: 20 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: EASE_SMOOTH, delay: 0.4 }}
          >
            <span className="font-display text-[0.65rem] uppercase tracking-[0.2em] text-[rgba(253,248,242,0.5)]">
              Scroll
            </span>
            <div className="w-6 h-10 border-2 border-[rgba(253,248,242,0.4)] rounded-full flex justify-center pt-2">
              <motion.div
                className="w-1.5 h-1.5 bg-[rgba(253,248,242,0.8)] rounded-full"
                animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </>
      ) : (
        // Mobile Layout — gradient background with depth, poster typography
        <div className="relative h-full w-full">

          {/* VOTE massive outline text — decorative watermark behind portrait */}
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
            >
              VOTE
            </motion.span>
          </div>

          {/* Subtle radial glow behind portrait for depth */}
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

          {/* Portrait — moved 10% up, with bottom fade for text legibility */}
          <div
            className="absolute inset-0 flex items-start justify-center"
            style={{ zIndex: 1, marginTop: '-8%' }}
          >
            <div
              style={{
                backgroundImage: `url(${potrait})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center top',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '85%',
                /* Fade from transparent at bottom to full image at top */
                maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
              }}
            />
          </div>

          {/*
           * Bottom text block — poster typography, moved 10% up.
           */}
          <div
            className="absolute bottom-0 left-0 right-0 px-2 pb-8 flex flex-col items-center justify-end"
            style={{ zIndex: 10, marginTop: '-10%' }}
          >
            {/* Identity label — centered on mobile */}
            <motion.h1
              className="font-display uppercase"
              style={{
                fontSize: '16vw',
                lineHeight: 0.75,
                letterSpacing: '-0.025em',
                textAlign: 'center',
                color: '#FDF8F2',
                fontWeight: 900,
                marginBottom: '0.4rem',
                marginTop: '-10%',
                textShadow: '0 2px 20px rgba(0,0,0,0.25)',
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE_SMOOTH, delay: 0.1 }}
            >
              <span style={{ display: 'block', fontSize: '21vw' }}>HANEEF</span>
              <span style={{ display: 'block' }}>MOHAMED</span>
            </motion.h1>

            {/* Sub-headline — centered on mobile */}
            <motion.p
              className="font-display"
              style={{
                fontSize: '0.68rem',
                fontWeight: 400,
                color: 'rgba(253,248,242,0.70)',
                letterSpacing: '0.03em',
                lineHeight: 1.5,
                textAlign: 'center',
                paddingLeft: '2rem',
                paddingRight: '2rem',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: EASE_SMOOTH, delay: 0.2 }}
            >
              PR Strategist · Rotaract President · DRR Candidate 2025
            </motion.p>

            {/* Scroll indicator — centered with animated bounce dot */}
            <motion.div
              className="flex flex-col items-center gap-2 mt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                className="w-1 h-3 rounded-full"
                style={{ background: 'rgba(253,248,242,0.6)' }}
                animate={{ y: [0, 6, 0], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <span
                className="font-display uppercase"
                style={{
                  fontSize: '7px',
                  letterSpacing: '0.20em',
                  color: 'rgba(253,248,242,0.5)',
                }}
              >
                Scroll
              </span>
            </motion.div>
          </div>
        </div>
      )}
    </section>
  );
}