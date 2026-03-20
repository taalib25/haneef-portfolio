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
                className="font-display font-bold text-[clamp(3.5rem,10vw,8rem)] leading-[0.75] tracking-[0.02em] text-[#FDF8F2] uppercase"
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
                className="font-sans font-light text-[clamp(0.9rem,1.2vw,1.1rem)] tracking-wide mt-6"
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
        // Mobile Layout — image as background with effects
        <div className="relative h-full w-full">
          {/* VOTE massive outline text behind portrait */}
          <div
            className="absolute inset-0 flex items-center justify-center overflow-hidden"
            style={{ zIndex: 0 }}
          >
            <motion.span
              className="font-display font-black uppercase whitespace-nowrap"
              style={{
                fontSize: 'clamp(6rem, 45vw, 12rem)',
                color: 'transparent',
                WebkitTextStroke: '1px rgba(253,248,242,0.06)',
                letterSpacing: '0.05em',
                userSelect: 'none',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: EASE_SMOOTH }}
            >
              VOTE
            </motion.span>
          </div>

          {/* Portrait background with grayscale and shadow depth */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${potrait})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center 5%',
              backgroundRepeat: 'no-repeat',
              filter: 'grayscale(100%) contrast(1.1) brightness(0.9)',
              zIndex: 1,
            }}
          />

          {/* Vignette shadow for depth */}
          <div
            className="absolute inset-0"
            style={{
              boxShadow: 'inset 0 0 150px 60px rgba(0,0,0,0.6)',
              pointerEvents: 'none',
            }}
          />

          {/* Bottom gradient — crimson fade */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[55%]"
            style={{
              background: 'linear-gradient(to top, #780000 0%, rgba(120,0,0,0.95) 30%, rgba(120,0,0,0.6) 60%, transparent 100%)',
            }}
          />

          {/* Soft glow behind text */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] h-[35%]"
            style={{
              background: 'radial-gradient(ellipse at center bottom, rgba(253,248,242,0.04) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          {/* Text block — centered, lower 15% */}
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 flex flex-col items-center text-center" style={{ marginBottom: '12%', zIndex: 2 }}>
            <motion.h1
              className="font-display font-bold uppercase text-[#FDF8F2] mb-4"
              style={{
                fontSize: 'clamp(6rem, 35vw, 10rem)',
                lineHeight: 0.88,
                textShadow: '0 4px 40px rgba(0,0,0,0.7), 0 2px 15px rgba(0,0,0,0.5)',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE_SMOOTH, delay: 0.15 }}
            >
              <span style={{ display: 'block', letterSpacing: '0.04em' }}>HANEEF</span>
              <span style={{ display: 'block', letterSpacing: '0.04em' }}>MOHAMED</span>
            </motion.h1>

            <motion.p
              className="font-sans"
              style={{
                fontSize: '0.8125rem',
                fontWeight: 400,
                color: 'rgba(253,248,242,0.6)',
                letterSpacing: '0.02em',
                lineHeight: 1.5,
                textShadow: '0 2px 20px rgba(0,0,0,0.6)',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: EASE_SMOOTH, delay: 0.35 }}
            >
              PR Strategist · Rotaract President · DRR Candidate 2025
            </motion.p>

            <motion.div
              className="flex flex-col items-center gap-2 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              <div
                style={{ width: '24px', height: '1px', background: 'rgba(253,248,242,0.25)' }}
              />
              <span
                className="font-display uppercase"
                style={{
                  fontSize: '9px',
                  letterSpacing: '0.18em',
                  color: 'rgba(253,248,242,0.35)',
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
