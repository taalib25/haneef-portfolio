import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/cn';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const EASE_SMOOTH = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();

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
        'relative w-full h-screen min-h-[700px] overflow-hidden',
      )}
      style={{
        background: `
          radial-gradient(circle at 30% 60%, rgba(255,255,255,0.04) 0%, transparent 60%),
          radial-gradient(circle at 80% 20%, rgba(255,255,255,0.03) 0%, transparent 50%),
          #780000
        `
      }}
    >
      {/* Desktop Portrait Image - Full height right panel */}
      {!isMobile && (
        <div
          className="absolute right-0 top-0 bottom-0 w-[45%] hidden md:block overflow-hidden"
          style={{ zIndex: 1 }}
        >
          <img
            src="https://placehold.co/480x600/780000/FDF8F2?text=Haneef"
            alt="Haneef Mohamed"
            className="w-full h-full object-cover object-top"
            style={{ display: 'block' }}
          />
        </div>
      )}

      {/* Mobile Portrait - Above content */}
      {isMobile && (
        <div
          className="w-full relative h-[60vw] max-h-[280px] overflow-hidden md:hidden"
          style={{ zIndex: 1 }}
        >
          <img
            src="https://placehold.co/480x600/780000/FDF8F2?text=Haneef"
            alt="Haneef Mohamed"
            className="w-full h-full object-cover object-top"
            style={{ display: 'block' }}
          />
        </div>
      )}

      {/* Desktop Layout - Content anchored bottom-left */}
      {!isMobile ? (
        <>
          {/* Small label */}
          <motion.p
            className="absolute left-[5%] z-20 font-display font-semibold text-[0.7rem] uppercase tracking-[0.06em]"
            style={{
              bottom: 'calc(12% + clamp(3rem, 6vw, 5.5rem) * 0.85 + 5.5rem)',
              color: 'rgba(253,248,242,0.55)'
            }}
            initial={!prefersReducedMotion ? { opacity: 0, y: 20 } : { opacity: 1 }}
            animate={!prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1 }}
            transition={{ duration: 0.7, ease: EASE_SMOOTH, delay: 0.4 }}
          >
            RTR. HANEEF MOHAMED
          </motion.p>

          {/* Main Name */}
          <motion.h1
            className="absolute bottom-[12%] left-[5%] z-20 font-display font-bold text-[clamp(3rem,6vw,5.5rem)] text-[#FDF8F2] leading-[0.88] tracking-[-0.025em] uppercase"
            initial={!prefersReducedMotion ? { opacity: 0, y: 60 } : { opacity: 1, y: 0 }}
            animate={!prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1 }}
            transition={{ duration: 0.9, ease: EASE_SMOOTH }}
          >
            HANEEF
            <br />
            MOHAMED
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            className="absolute left-[5%] z-20 font-body font-light text-[0.9rem] tracking-wide"
            style={{
              bottom: 'calc(12% + clamp(3rem, 6vw, 5.5rem) * 0.85 + 2.5rem)',
              color: 'rgba(253,248,242,0.6)'
            }}
            initial={!prefersReducedMotion ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            animate={!prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1 }}
            transition={{ duration: 0.7, ease: EASE_SMOOTH, delay: 0.3 }}
          >
            PR Strategist · Rotaract President · DRR Candidate 2025
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="absolute left-[5%] z-20 flex gap-4"
            style={{
              bottom: 'calc(12% + clamp(3rem, 6vw, 5.5rem) * 0.85 + 6.5rem)',
            }}
            initial={!prefersReducedMotion ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            animate={!prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1 }}
            transition={{ duration: 0.7, ease: EASE_SMOOTH, delay: 0.5 }}
          >
            <a
              href="#campaign"
              className="inline-flex justify-center items-center bg-[#FDF8F2] text-[#780000] font-display font-semibold text-[0.75rem] uppercase tracking-[0.06em] h-[48px] px-7 border-0 no-underline hover:opacity-90 transition-opacity"
            >
              VOTE HANEEF
            </a>
            <a
              href="#story"
              className="inline-flex justify-center items-center border border-[rgba(253,248,242,0.40)] text-[#FDF8F2] font-display font-semibold text-[0.75rem] uppercase tracking-[0.06em] h-[48px] px-7 bg-transparent hover:bg-[rgba(253,248,242,0.05)] transition-colors"
            >
              THE CAMPAIGN
            </a>
          </motion.div>
        </>
      ) : (
        // Mobile Layout
        <div className="relative z-20 flex flex-col pt-0">
          {/* Name - centered on mobile */}
          <motion.h1
            className="font-display font-bold text-[clamp(2.25rem,10vw,3.5rem)] text-[#FDF8F2] leading-[0.88] tracking-[-0.025em] uppercase text-center px-5 pt-6 pb-3"
            initial={!prefersReducedMotion ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
            animate={!prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1 }}
            transition={{ duration: 0.6, ease: EASE_SMOOTH, delay: 0.1 }}
          >
            HANEEF
            <br />
            MOHAMED
          </motion.h1>

          {/* Sub-headline - centered */}
          <motion.p
            className="font-body font-light text-[0.85rem] tracking-wide text-center px-5 pb-6"
            style={{ color: 'rgba(253,248,242,0.6)' }}
            initial={!prefersReducedMotion ? { opacity: 0, y: 15 } : { opacity: 1, y: 0 }}
            animate={!prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1 }}
            transition={{ duration: 0.5, ease: EASE_SMOOTH, delay: 0.2 }}
          >
            PR Strategist · Rotaract President · DRR Candidate 2025
          </motion.p>

          {/* Single CTA button - full width */}
          <motion.div
            className="px-5 pb-8"
            initial={!prefersReducedMotion ? { opacity: 0, y: 15 } : { opacity: 1, y: 0 }}
            animate={!prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1 }}
            transition={{ duration: 0.5, ease: EASE_SMOOTH, delay: 0.3 }}
          >
            <a
              href="#campaign"
              className="inline-flex justify-center items-center bg-[#FDF8F2] text-[#780000] font-display font-semibold text-[0.75rem] uppercase tracking-[0.06em] h-[48px] w-full border-0 no-underline hover:opacity-90 transition-opacity"
            >
              VOTE HANEEF
            </a>
          </motion.div>

          {/* Gradient transition to page */}
          <div
            className="h-[80px] w-full"
            style={{
              background: 'linear-gradient(to bottom, #780000, #FDF8F2)'
            }}
          />
        </div>
      )}
    </section>
  );
}
