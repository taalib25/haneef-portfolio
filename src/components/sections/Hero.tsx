import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import potrait from '../../assets/potrait.webp';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = dotRef.current;
    if (!el) return;
    let raf: number;
    const tick = (t: number) => {
      const p = (t % 1800) / 1800;
      el.style.transform = `translateY(${Math.sin(p * Math.PI * 2) * 10}px)`;
      el.style.opacity = String(0.3 + Math.sin(p * Math.PI * 2) * 0.4);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        height: '100svh',
        minHeight: '580px',
        overflow: 'hidden',
        background: '#042B44',
      }}
    >
      {/*
        Portrait covers the ENTIRE section — no separate container,
        no height percentage. object-fit: cover fills everything.
        This makes cutoff impossible — the image always fills the frame.
        A gradient overlay darkens the bottom half for text legibility.
      */}
      <img
        src={potrait}
        alt="Haneef Mohamed"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 18%',
          display: 'block',
          filter: 'grayscale(20%) contrast(1.05) brightness(0.72)',
          zIndex: 1,
        }}
      />

      {/* Bottom gradient — transparent at top, solid navy at bottom */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, rgba(4,43,68,0.10) 0%, rgba(4,43,68,0.45) 40%, rgba(4,43,68,0.90) 68%, #042B44 100%)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Desktop only: left-side wash so portrait doesn't compete with headline */}
      <div
        className="hidden md:block"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to right, rgba(4,43,68,0.0) 35%, rgba(4,43,68,0.88) 100%)',
          zIndex: 3,
          pointerEvents: 'none',
        }}
      />

      {/* Text — anchored to the bottom of the section */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        {/* MOBILE */}
        <div className="block md:hidden" style={{ padding: '0 1.25rem 2.25rem' }}>
          <motion.p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '9px',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#A1CCDC',
              marginBottom: '0.75rem',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            RTR. District 3220 · Sri Lanka & Maldives
          </motion.p>

          <motion.h1
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(2.75rem, 12vw, 3.5rem)',
              lineHeight: 0.88,
              letterSpacing: '-0.025em',
              color: '#F5F8FA',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.12 }}
          >
            Haneef<br />Mohamed
          </motion.h1>

          <motion.p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8125rem',
              fontWeight: 400,
              color: 'rgba(245,248,250,0.60)',
              lineHeight: 1.45,
              marginBottom: '1.75rem',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
          >
            PR Strategist · Rotaract President · DRR Candidate 2025
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}
          >
            <div style={{ width: 20, height: 1, background: 'rgba(161,204,220,0.35)' }} />
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '8px',
              letterSpacing: '0.20em',
              textTransform: 'uppercase',
              color: 'rgba(161,204,220,0.45)',
            }}>
              Scroll
            </span>
          </motion.div>
        </div>

        {/* DESKTOP */}
        <div
          className="hidden md:block"
          style={{
            paddingLeft: 'clamp(2.5rem, 6vw, 5rem)',
            paddingBottom: '8%',
            maxWidth: '58%',
          }}
        >
          <motion.p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.65rem',
              fontWeight: 600,
              letterSpacing: '0.13em',
              textTransform: 'uppercase',
              color: '#A1CCDC',
              marginBottom: '1rem',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            RTR. District 3220 · Sri Lanka & Maldives
          </motion.p>

          <motion.h1
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(4rem, 9vw, 8rem)',
              lineHeight: 0.88,
              letterSpacing: '-0.03em',
              color: '#F5F8FA',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: EASE, delay: 0.1 }}
          >
            HANEEF<br />MOHAMED
          </motion.h1>

          <motion.p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.9rem, 1.1vw, 1.05rem)',
              fontWeight: 400,
              color: 'rgba(245,248,250,0.58)',
              letterSpacing: '0.01em',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.25 }}
          >
            PR Strategist · Rotaract President · DRR Candidate 2025
          </motion.p>
        </div>
      </div>

      {/* Desktop scroll indicator */}
      <motion.div
        className="hidden md:flex"
        style={{
          position: 'absolute',
          bottom: '2rem',
          right: '2rem',
          zIndex: 20,
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: '8px',
          letterSpacing: '0.20em',
          textTransform: 'uppercase',
          color: 'rgba(161,204,220,0.40)',
        }}>
          Scroll
        </span>
        <div style={{
          width: 1,
          height: 40,
          background: 'rgba(161,204,220,0.20)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div
            ref={dotRef}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '45%',
              background: '#A1CCDC',
            }}
          />
        </div>
      </motion.div>

    </section>
  );
}