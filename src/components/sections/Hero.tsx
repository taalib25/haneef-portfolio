import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/cn";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const EASE_SMOOTH = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <section
      id="hero"
      className={cn(
        "relative w-full h-screen min-h-[700px] bg-(--bg-hero) overflow-hidden",
      )}
    >
      {/* Ray effect - subtle lighter crimson lines radiating from center */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Multiple subtle ray lines at varying angles */}
        <div
          className="absolute inset-0"
          style={{
            background: `repeating-linear-gradient(
              90deg,
              transparent,
              transparent 120px,
              rgba(253, 248, 242, 0.03) 120px,
              rgba(253, 248, 242, 0.03) 121px
            )`
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `repeating-linear-gradient(
              60deg,
              transparent,
              transparent 150px,
              rgba(253, 248, 242, 0.02) 150px,
              rgba(253, 248, 242, 0.02) 151px
            )`
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `repeating-linear-gradient(
              120deg,
              transparent,
              transparent 180px,
              rgba(253, 248, 242, 0.02) 180px,
              rgba(253, 248, 242, 0.02) 181px
            )`
          }}
        />
      </div>

      {/* Desktop Portrait Image - Full height right panel */}
      {!isMobile && (
        <div
          className="absolute right-0 top-0 bottom-0 w-[42%] hidden md:block overflow-hidden"
        >
          <img
            src="/portrait.png"
            alt="Haneef Mohamed"
            className="w-full h-full object-cover object-top"
          />
          {/* Left edge solid color overlay to blend portrait with crimson background */}
          <div
            className="absolute left-0 top-0 bottom-0 w-1/3 pointer-events-none"
            style={{
              backgroundColor: "var(--bg-hero)",
              opacity: "0.6",
            }}
          />
        </div>
      )}

      {/* Mobile Portrait - Above content */}
      {isMobile && (
        <div className="w-full relative h-[60vw] max-h-[320px] overflow-hidden md:hidden">
          <img
            src="/portrait.png"
            alt="Haneef Mohamed"
            className="w-full h-full object-cover object-top"
          />
          {/* Bottom solid color overlay for mobile portrait */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[40%]"
            style={{
              backgroundColor: "var(--bg-hero)",
              opacity: "0.5",
            }}
          />
        </div>
      )}

      {/* Desktop Layout - Name anchored bottom-left */}
      {!isMobile ? (
        <>
          {/* Main Name - Massive, anchored bottom-left */}
          <motion.div
            className="absolute bottom-[8%] left-[4%] z-10"
            initial={!prefersReducedMotion ? { opacity: 0, y: 60 } : { opacity: 1, y: 0 }}
            animate={!prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1 }}
            transition={{ duration: 0.9, ease: EASE_SMOOTH }}
          >
            <h1
              className="font-display font-bold text-[clamp(4rem,10vw,7rem)] text-(--ht1) leading-[0.85] tracking-[-0.04em] uppercase"
              style={{
                lineHeight: "0.85",
                letterSpacing: "-0.04em",
              }}
            >
              HANEEF
              <br />
              MOHAMED
            </h1>
          </motion.div>

          {/* Horizontal Rule - Below name */}
          <motion.div
            className="absolute left-[4%] z-10"
            style={{
              bottom: "calc(8% + clamp(4rem,10vw,7rem) * 0.85 + 2rem)",
            }}
            initial={!prefersReducedMotion ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            animate={!prefersReducedMotion ? { opacity: 1, scaleX: 1 } : { opacity: 1 }}
            transition={{ duration: 0.8, ease: EASE_SMOOTH, delay: 0.2 }}
          >
            <div
              className="w-[clamp(320px,50vw,600px)] h-px"
              style={{ background: "rgba(253,248,242,0.20)" }}
            />
          </motion.div>

          {/* Role Line - Smaller, cleaner, no monospace */}
          <motion.p
            className="absolute left-[4%] z-10 font-body font-light text-[1.05rem] text-[rgba(253,248,242,0.65)] tracking-wide"
            style={{
              bottom: "calc(8% + clamp(4rem,10vw,7rem) * 0.85 + 3rem)",
            }}
            initial={!prefersReducedMotion ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            animate={!prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1 }}
            transition={{ duration: 0.7, ease: EASE_SMOOTH, delay: 0.3 }}
          >
            PR Strategist · Rotaract President · DRR Candidate
          </motion.p>

          {/* CTAs - Clean buttons with display font, not monospace */}
          <motion.div
            className="absolute left-[4%] z-10 flex gap-4"
            style={{
              bottom: "calc(8% + clamp(4rem,10vw,7rem) * 0.85 + 5.5rem)",
            }}
            initial={!prefersReducedMotion ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            animate={!prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1 }}
            transition={{ duration: 0.7, ease: EASE_SMOOTH, delay: 0.4 }}
          >
            <a
              href="#story"
              className="inline-flex justify-center items-center bg-(--hta) text-(--crimson-dark) font-display font-semibold text-[0.95rem] uppercase tracking-[0.08em] min-h-12 px-8 py-4 border-0 no-underline hover:opacity-90 transition-opacity"
            >
              The Story
            </a>
            <a
              href="#campaign"
              className="inline-flex justify-center items-center border border-[rgba(253,248,242,0.40)] text-(--ht1) font-display font-semibold text-[0.95rem] uppercase tracking-[0.08em] min-h-12 px-8 py-4 bg-transparent hover:bg-[rgba(253,248,242,0.05)] transition-colors"
            >
              Campaign
            </a>
          </motion.div>
        </>
      ) : (
        // Mobile Layout - Simpler, stacked
        <div className="relative z-10 px-5 pt-8 pb-10 flex flex-col">
          {/* Name */}
          <motion.h1
            className="font-display font-bold text-[clamp(2.8rem,11vw,4rem)] text-(--ht1) leading-[0.9] tracking-[-0.03em] uppercase mb-3"
            initial={!prefersReducedMotion ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
            animate={!prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1 }}
            transition={{ duration: 0.6, ease: EASE_SMOOTH }}
          >
            HANEEF
            <br />
            MOHAMED
          </motion.h1>

          {/* Horizontal Rule */}
          <motion.div
            className="w-full h-px mb-3"
            style={{ background: "rgba(253,248,242,0.20)" }}
            initial={!prefersReducedMotion ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            animate={!prefersReducedMotion ? { opacity: 1, scaleX: 1 } : { opacity: 1 }}
            transition={{ duration: 0.5, ease: EASE_SMOOTH, delay: 0.1 }}
          />

          {/* Role Line - Smaller, cleaner */}
          <motion.p
            className="font-body font-light text-[0.95rem] text-[rgba(253,248,242,0.65)] tracking-wide mb-5"
            initial={!prefersReducedMotion ? { opacity: 0, y: 15 } : { opacity: 1, y: 0 }}
            animate={!prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1 }}
            transition={{ duration: 0.5, ease: EASE_SMOOTH, delay: 0.15 }}
          >
            PR Strategist · Rotaract President · DRR Candidate
          </motion.p>

          {/* CTAs - Clean buttons with display font */}
          <motion.div
            className="flex flex-col gap-2.5"
            initial={!prefersReducedMotion ? { opacity: 0, y: 15 } : { opacity: 1, y: 0 }}
            animate={!prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1 }}
            transition={{ duration: 0.5, ease: EASE_SMOOTH, delay: 0.25 }}
          >
            <a
              href="#story"
              className="inline-flex justify-center items-center bg-(--hta) text-(--crimson-dark) font-display font-semibold text-[0.85rem] uppercase tracking-[0.06em] min-h-11 py-3.5 border-0 no-underline"
            >
              The Story
            </a>
            <a
              href="#campaign"
              className="inline-flex justify-center items-center border border-[rgba(253,248,242,0.35)] text-(--ht1) font-display font-semibold text-[0.85rem] uppercase tracking-[0.06em] min-h-11 py-3.5 bg-transparent hover:bg-[rgba(253,248,242,0.05)] transition-colors"
            >
              Campaign
            </a>
          </motion.div>
        </div>
      )}
    </section>
  );
}
