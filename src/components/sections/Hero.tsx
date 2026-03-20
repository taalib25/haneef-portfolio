import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/cn';
import potrait from '../../assets/potrait.webp';

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
            className="absolute right-0 top-0 bottom-0 w-[38%] overflow-hidden"
            style={{ zIndex: 1 }}
          >
            <img
              src={potrait}
              alt="Haneef Mohamed"
              className="w-full h-full object-cover"
              style={{
                display: 'block',
                filter: 'grayscale(100%) contrast(1.1) brightness(0.9)',
                objectPosition: '40% 8%'
              }}
            />
          </div>

          {/* Text Content - Left aligned, not centered */}
          <div className="absolute inset-0 flex flex-col justify-end pb-[10%] z-20">
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
        // Mobile Layout — single absolute-positioned container, no negative margins
        <div className="relative h-full w-full">

          {/* Portrait — fills top 68% of viewport */}
          <div
            className="absolute top-0 left-0 right-0 overflow-hidden"
            style={{ height: '68%' }}
          >
            <img
              src={potrait}
              alt="Haneef Mohamed"
              className="w-full h-full object-cover"
              style={{
                display: 'block',
                filter: 'grayscale(15%) contrast(1.05) brightness(0.88)',
                objectPosition: 'center 20%',
              }}
            />
            {/* Gradient fades portrait into crimson hero bg — NO blue tint */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to bottom, transparent 0%, rgba(120,0,0,0.55) 55%, #780000 100%)',
                pointerEvents: 'none',
              }}
            />
          </div>

          {/* Text block — pinned to the bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 px-5 pb-6 flex flex-col justify-end"
            style={{ height: '40%' }}
          >
            {/* Name */}
            <motion.h1
              className="font-display font-bold uppercase text-[#FDF8F2] leading-[0.88] tracking-[-0.025em] mb-3"
              style={{ fontSize: 'clamp(2.8rem, 13vw, 3.8rem)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE_SMOOTH, delay: 0.15 }}
            >
              Haneef<br />Mohamed
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              className="font-body mb-5"
              style={{
                fontSize: '0.8125rem',
                fontWeight: 400,
                color: 'rgba(253,248,242,0.65)',
                letterSpacing: '0.01em',
                lineHeight: 1.45,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: EASE_SMOOTH, delay: 0.35 }}
            >
              PR Strategist · Rotaract President · DRR Candidate 2025
            </motion.p>

            {/* Scroll hint — simple line + label, no bouncing arrows */}
            <motion.div
              className="flex flex-col items-start gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              <div
                style={{ width: '24px', height: '1px', background: 'rgba(253,248,242,0.30)' }}
              />
              <span
                className="font-display uppercase"
                style={{
                  fontSize: '9px',
                  letterSpacing: '0.18em',
                  color: 'rgba(253,248,242,0.38)',
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
