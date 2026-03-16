import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "../../lib/cn";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const EASE_SMOOTH = [0.16, 1, 0.3, 1] as const;
const EASE_OUT = "easeOut" as const;

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_SMOOTH },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: EASE_OUT },
  },
};

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setLoaded(true);
    
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
        "relative w-full min-h-[100svh] min-h-[680px] bg-[var(--bg-hero)] overflow-hidden",
        loaded ? "opacity-100" : "opacity-0",
        "duration-500 transition-opacity"
      )}
    >
      {/* Desktop Portrait Image - Full height right panel */}
      {!isMobile && (
        <div 
          className="absolute right-0 top-0 bottom-0 w-[42%] hidden md:block overflow-hidden"
          style={{
            background: 'linear-gradient(to right, var(--bg-hero) 0%, transparent 30%)'
          }}
        >
          <img
            src="/portrait.png"
            alt="Haneef Mohamed"
            className="w-full h-full object-cover object-top"
          />
          {/* Left edge gradient to blend portrait with crimson background */}
          <div 
            className="absolute left-0 top-0 bottom-0 w-1/3 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, var(--bg-hero) 0%, transparent 60%)'
            }}
          />
        </div>
      )}

      {/* Mobile Portrait - Above content */}
      {isMobile && (
        <div className="w-full relative h-[55vw] max-h-[320px] overflow-hidden md:hidden">
          <img
            src="/portrait.png"
            alt="Haneef Mohamed"
            className="w-full h-full object-cover object-top"
          />
          {/* Bottom gradient for mobile portrait */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-[50%]"
            style={{
              background: 'linear-gradient(to bottom, transparent 0%, var(--bg-hero) 60%)'
            }}
          />
        </div>
      )}

      {/* Desktop Layout - Name anchored bottom-left */}
      {!isMobile ? (
        <>
          {/* Main Name - Massive, anchored bottom-left */}
          <motion.div
            className="absolute bottom-[12%] left-[5%] z-10"
            initial={!prefersReducedMotion ? { opacity: 0, y: 60 } : { opacity: 1, y: 0 }}
            whileInView={!prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1 }}
            transition={{ duration: 0.9, ease: EASE_SMOOTH }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h1
              className="font-display font-bold text-[clamp(5rem,14vw,11rem)] text-[color:var(--ht1)] leading-[0.85] tracking-[-0.04em] uppercase"
              style={{ 
                lineHeight: '0.85',
                letterSpacing: '-0.04em'
              }}
            >
              HANEEF<br/>MOHAMED
            </h1>
          </motion.div>

          {/* Horizontal Rule - Below name */}
          <motion.div
            className="absolute left-[5%] z-10"
            style={{ bottom: 'calc(12% + clamp(5rem,14vw,11rem) * 0.85 + 2rem)' }}
            initial={!prefersReducedMotion ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            whileInView={!prefersReducedMotion ? { opacity: 1, scaleX: 1 } : { opacity: 1 }}
            transition={{ duration: 0.8, ease: EASE_SMOOTH, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div 
              className="w-[clamp(320px,50vw,600px)] h-[1px]"
              style={{ background: 'rgba(253,248,242,0.20)' }}
            />
          </motion.div>

          {/* Role Line - Below the rule */}
          <motion.p
            className="absolute left-[5%] z-10 font-body font-light text-[1rem] text-[rgba(253,248,242,0.65)]"
            style={{ bottom: 'calc(12% + clamp(5rem,14vw,11rem) * 0.85 + 3rem)' }}
            initial={!prefersReducedMotion ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            whileInView={!prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1 }}
            transition={{ duration: 0.7, ease: EASE_SMOOTH, delay: 0.3 }}
            viewport={{ once: true }}
          >
            PR Strategist · Rotaract President · DRR Candidate
          </motion.p>

          {/* CTAs - Below the role line */}
          <motion.div
            className="absolute left-[5%] z-10 flex gap-4"
            style={{ bottom: 'calc(12% + clamp(5rem,14vw,11rem) * 0.85 + 5.5rem)' }}
            initial={!prefersReducedMotion ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            whileInView={!prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1 }}
            transition={{ duration: 0.7, ease: EASE_SMOOTH, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a
              href="#story"
              className="inline-flex justify-center items-center bg-[var(--hta)] text-[color:var(--crimson-dark)] font-mono text-[var(--t-sm)] uppercase tracking-widest min-h-[48px] px-8 py-4 border-0 no-underline hover:opacity-90 transition-opacity"
            >
              The Story
            </a>
            <a
              href="#campaign"
              className="inline-flex justify-center items-center border border-[rgba(253,248,242,0.40)] text-[color:var(--ht1)] font-mono text-[var(--t-sm)] uppercase tracking-widest min-h-[48px] px-8 py-4 bg-transparent hover:bg-[rgba(253,248,242,0.05)] transition-colors"
            >
              Campaign
            </a>
          </motion.div>
        </>
      ) : (
        /* Mobile Layout - Simpler, stacked */
        <div className="relative z-10 px-6 pt-8 pb-12 flex flex-col">
          {/* Name */}
          <motion.h1
            className="font-display font-bold text-[clamp(3.5rem,14vw,5.5rem)] text-[color:var(--ht1)] leading-[0.88] tracking-[-0.04em] uppercase mb-6"
            initial={!prefersReducedMotion ? { opacity: 0, y: 40 } : { opacity: 1, y: 0 }}
            whileInView={!prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1 }}
            transition={{ duration: 0.7, ease: EASE_SMOOTH }}
            viewport={{ once: true }}
          >
            HANEEF<br/>MOHAMED
          </motion.h1>

          {/* Horizontal Rule */}
          <motion.div
            className="w-full h-[1px] mb-4"
            style={{ background: 'rgba(253,248,242,0.20)' }}
            initial={!prefersReducedMotion ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            whileInView={!prefersReducedMotion ? { opacity: 1, scaleX: 1 } : { opacity: 1 }}
            transition={{ duration: 0.6, ease: EASE_SMOOTH, delay: 0.1 }}
            viewport={{ once: true }}
          />

          {/* Role Line */}
          <motion.p
            className="font-body font-light text-[0.95rem] text-[rgba(253,248,242,0.65)] mb-6"
            initial={!prefersReducedMotion ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            whileInView={!prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1 }}
            transition={{ duration: 0.6, ease: EASE_SMOOTH, delay: 0.2 }}
            viewport={{ once: true }}
          >
            PR Strategist · Rotaract President · DRR Candidate
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col gap-3"
            initial={!prefersReducedMotion ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            whileInView={!prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1 }}
            transition={{ duration: 0.6, ease: EASE_SMOOTH, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <a
              href="#story"
              className="inline-flex justify-center items-center bg-[var(--hta)] text-[color:var(--crimson-dark)] font-mono text-[var(--t-sm)] uppercase tracking-widest min-h-[52px] py-4 border-0 no-underline"
            >
              The Story
            </a>
            <a
              href="#campaign"
              className="inline-flex justify-center items-center border border-[rgba(253,248,242,0.40)] text-[color:var(--ht1)] font-mono text-[var(--t-sm)] uppercase tracking-widest min-h-[52px] py-4 bg-transparent"
            >
              Campaign
            </a>
          </motion.div>
        </div>
      )}

      {/* Bottom gradient transition */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[120px] z-20 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, var(--bg))",
        }}
      />
    </section>
  );
}
