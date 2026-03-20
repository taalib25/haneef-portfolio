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
        // On mobile use crimson as base; desktop keeps the dark hero bg
        background: isMobile ? 'var(--color-crimson)' : 'var(--bg-hero)',
      }}
    >
      {/* Desktop Layout */}
      {!isMobile ? (
        <>
          {/* Portrait Image - Full height right panel */}
          <div
            className="absolute right-0 top-0 bottom-0 w-[30%] overflow-hidden"
            style={{ zIndex: 1 }}
          >
            <img
              src={potrait}
              alt="Haneef Mohamed"
              loading="eager"
              fetchPriority="high"
              className="w-full h-full object-cover"
              style={{
                display: 'block',
                maxWidth: '100%',
                maxHeight: '100%',
                objectPosition: '40% 8%',
              }}
            />
          </div>

          {/* Text Content - Left aligned, not centered */}
          <div className="absolute inset-0 flex flex-col justify-end pb-[10%]" style={{ zIndex: 10 }}>
            <div className="w-[65%] pl-8 md:pl-12 lg:pl-16">
              {/* Identity label */}
              <motion.p
                className="font-display text-[0.65rem] tracking-[0.10em] uppercase mb-4"
                style={{ color: 'rgba(253,248,242,0.50)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: EASE_SMOOTH }}
              >
                RTR. HANEEF MOHAMED · DISTRICT 3220
              </motion.p>

              {/* HANEEF MOHAMED - Really big bold text */}
              <motion.h1
                className="font-display font-bold text-[clamp(4rem,12vw,10rem)] leading-[0.75] tracking-[0.02em] text-[#FDF8F2] uppercase"
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
        // Mobile Layout — crimson gradient background, poster typography
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

          {/*
           * Gradient overlay: light crimson at top → deeper crimson at bottom.
           * Pure crimson tones only - no black, so the image keeps its natural colors.
           */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(
                to bottom,
                color-mix(in srgb, var(--color-crimson) 25%, #fff) 0%,
                color-mix(in srgb, var(--color-crimson) 55%, #fff) 50%,
                var(--color-crimson) 100%
              )`,
              zIndex: -1,
            }}
          />

          {/* Portrait — sits on top of the crimson gradient, scaled larger */}
          <div
            className="absolute inset-0 flex items-start justify-center pt-2"
            style={{ zIndex: 1 }}
          >
            <div
              style={{
                backgroundImage: `url(${potrait})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center top',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '85%',
              }}
            />
          </div>

          {/*
           * Bottom text block — poster typography.
           * Font is sized to ~32vw so that "HANEEF" and "MOHAMED" fill the screen width
           * and bleed slightly past the edges — clipped by overflow-hidden for poster effect.
           */}
          <div
            className="absolute bottom-0 left-0 right-0 pb-8 flex flex-col items-center justify-end"
            style={{ zIndex: 10 }}
          >
            {/* Identity label — centered on mobile */}
            <motion.p
              className="font-display uppercase mb-1"
              style={{
                fontSize: '0.65rem',
                letterSpacing: '0.10em',
                color: 'rgba(253,248,242,0.55)',
                textAlign: 'center',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              RTR. HANEEF MOHAMED · DISTRICT 3220
            </motion.p>

            <motion.h1
              className="font-display uppercase w-full overflow-hidden"
              style={{
                fontSize: '32vw',
                lineHeight: 0.78,
                letterSpacing: '-0.025em',
                textAlign: 'center',
                color: '#FDF8F2',
                fontWeight: 900,
                marginBottom: '0.5rem',
                // Allow the wide characters to bleed; section clips them
                whiteSpace: 'nowrap',
              }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE_SMOOTH, delay: 0.1 }}
            >
              <span style={{ display: 'block' }}>HANEEF</span>
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

            {/* Scroll indicator — centered */}
            <motion.div
              className="flex flex-col items-center gap-2 mt-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              <div
                style={{ width: '20px', height: '1px', background: 'rgba(253,248,242,0.25)' }}
              />
              <span
                className="font-display uppercase"
                style={{
                  fontSize: '8px',
                  letterSpacing: '0.15em',
                  color: 'rgba(253,248,242,0.4)',
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