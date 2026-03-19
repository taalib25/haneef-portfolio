import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/cn';
import potrait from '../../assets/potrait.png';

const EASE_SMOOTH = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <section
      id="hero"
      className={cn(
        'relative w-full h-screen overflow-hidden',
      )}
      style={{
        background: 'var(--bg-hero)'
      }}
    >
      {/* Desktop Layout */}
      {!isMobile ? (
        <>
          {/* Portrait Image - Full height right panel */}
          <div
            className="absolute right-0 top-0 bottom-0 w-[35%] overflow-hidden"
            style={{ zIndex: 1 }}
          >
            <img
              src={potrait}
              alt="Haneef Mohamed"
              className="w-full h-full object-cover object-center"
              style={{
                display: 'block',
                filter: 'grayscale(100%) contrast(1.1) brightness(0.9)'
              }}
            />
          </div>

          {/* Text Content - Left aligned, not centered */}
          <div className="absolute inset-0 flex flex-col justify-center z-20">
            <div className="w-[65%] pl-8 md:pl-12 lg:pl-16">
              {/* VOTE FOR - smaller text above */}
              <motion.p
                className="font-display font-semibold text-[clamp(0.9rem,1.5vw,1.2rem)] uppercase tracking-[0.2em] text-[rgba(253,248,242,0.7)] mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE_SMOOTH }}
              >
                Vote For
              </motion.p>

              {/* HANEEF MOHAMED - Really big bold text */}
              <motion.h1
                className="font-display font-bold text-[clamp(3.5rem,10vw,8rem)] leading-[0.75] tracking-[-0.03em] text-[#FDF8F2] uppercase"
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
                className="font-body font-light text-[clamp(0.9rem,1.2vw,1.1rem)] tracking-wide mt-6"
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
            className="absolute bottom-8 left-8 md:left-12 lg:left-16 z-20 flex flex-col items-center gap-3"
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
        // Mobile Layout - Clean portrait with bold name overlay
        <div className="relative h-full flex flex-col">
          {/* Portrait Image - Full viewport width, behind text */}
          <div className="absolute inset-0 z-10 h-[55vh] overflow-hidden">
            <img
              src={potrait}
              alt="Haneef Mohamed"
              className="w-full h-full object-cover object-center"
              style={{
                display: 'block',
                filter: 'grayscale(100%) contrast(1.15) brightness(0.85)',
                maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)'
              }}
            />
            {/* Vignette shadow overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)',
                pointerEvents: 'none'
              }}
            />
          </div>

          {/* Dark gradient overlay for text contrast */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background: 'linear-gradient(to bottom, rgba(120,0,0,0.3) 0%, rgba(120,0,0,0.6) 50%, var(--bg-hero) 100%)'
            }}
          />

          {/* Content - Above portrait */}
          <div className="relative z-20 flex-1 flex flex-col">
            {/* Name - positioned over portrait */}
            <div className="flex-1 flex items-center justify-center px-6 pb-8">
              <motion.h1
                className="font-display font-bold text-[clamp(3.5rem,16vw,7rem)] leading-[0.75] tracking-[-0.02em] text-[#FDF8F2] uppercase text-center"
                style={{
                  textShadow: '0 8px 32px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)'
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, ease: EASE_SMOOTH, delay: 0.2 }}
              >
                HANEEF
                <br />
                MOHAMED
              </motion.h1>
            </div>

            {/* Bottom section with tagline and scroll indicator */}
            <div className="flex flex-col justify-center px-6 pb-8">
              {/* Tagline */}
              <motion.p
                className="font-body font-light text-[0.8rem] tracking-wide text-center"
                style={{
                  color: 'rgba(253,248,242,0.85)',
                  textShadow: '0 2px 8px rgba(0,0,0,0.4)'
                }}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE_SMOOTH, delay: 0.4 }}
              >
                PR Strategist · Rotaract President · DRR Candidate 2025
              </motion.p>

              {/* Clear Scroll Indicator - Arrow style */}
              <motion.div
                className="flex flex-col items-center gap-3 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <motion.div
                  className="flex flex-col items-center gap-1"
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="w-4 h-4 border-r-2 border-b-2 border-[rgba(253,248,242,0.8)] rotate-45" />
                  <div className="w-4 h-4 border-r-2 border-b-2 border-[rgba(253,248,242,0.8)] rotate-45 -mt-2" />
                </motion.div>
                <span className="font-display text-[0.6rem] uppercase tracking-[0.25em] text-[rgba(253,248,242,0.6)]">
                  Scroll
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
