import { useEffect, useRef } from "react";
import { motion, type Variants } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "../../hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

// Animation variant for opacity cascade
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Philosophy() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Effects specifically for opacity cascade in headline
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headlineRef.current && !prefersReducedMotion) {
        const lines = headlineRef.current.children;

        gsap.fromTo(
          lines[0],
          { opacity: 0 },
          {
            opacity: 0.13,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 70%",
            },
          },
        );

        gsap.fromTo(
          lines[1],
          { opacity: 0 },
          {
            opacity: 0.4,
            duration: 0.8,
            delay: 0.18,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 70%",
            },
          },
        );

        gsap.fromTo(
          lines[2],
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.8,
            delay: 0.36,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 70%",
              onEnter: () => {
                Array.prototype.forEach.call(lines, (line: Element) => {
                  line.classList.remove("opacity-0");
                });
                lines[0].classList.add("opacity-[0.13]");
                lines[1].classList.add("opacity-[0.40]");
                lines[2].classList.add("opacity-100");
              },
            },
          },
        );
      } else if (headlineRef.current && prefersReducedMotion) {
        const lines = headlineRef.current.children;
        lines[0].classList.add("opacity-[0.13]");
        lines[1].classList.add("opacity-[0.40]");
        lines[2].classList.add("opacity-100");
      }
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      id="philosophy"
      ref={containerRef}
      className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-(--bg)"
    >
      {/* 2px crimson line at top of section opener */}
      <div className="h-[2px] w-[60px] bg-(--crimson) mb-12" />
      
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="w-full mb-20 text-center">
          <motion.p
            className="font-mono text-(--ta) text-t-xs tracking-[0.20em] uppercase mb-8"
            initial={
              !prefersReducedMotion ? { opacity: 0, x: -12 } : { opacity: 1 }
            }
            whileInView={
              !prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 1 }
            }
            transition={
              !prefersReducedMotion
                ? { duration: 0.4, ease: "easeOut" }
                : undefined
            }
            viewport={{ once: true }}
          >
            [ 03 — PHILOSOPHY ]
          </motion.p>

          {/* Opacity Cascade Headline — Larger: clamp(4.5rem, 8vw, 8rem) per ADDENDUM */}
          <div
            ref={headlineRef}
            className="font-display text-t-hero leading-[0.92] tracking-[-0.025em] uppercase mb-12 flex flex-col items-center"
          >
            <div className="text-(--t1) opacity-0">LEAD WITH</div>
            <div className="text-(--t1) opacity-0">STRATEGIC</div>
            <div className="text-(--crimson) opacity-0">EMPATHY.</div>
          </div>

          <motion.div
            variants={fadeInUp}
            initial={!prefersReducedMotion ? "hidden" : "visible"}
            whileInView={!prefersReducedMotion ? "visible" : undefined}
            transition={
              !prefersReducedMotion
                ? { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.5 }
                : undefined
            }
            viewport={{ once: true, amount: 0.1 }}
            className="font-body text-t-base text-(--t2) max-w-[700px] mx-auto leading-[1.85] text-center italic"
          >
            As a communications professional, I have learned that effective
            leadership begins with understanding people before trying to guide
            them. Leadership is not about authority. It is about designing the
            conditions in which others can succeed.
          </motion.div>
        </div>

        {/* Full-width statement bar below columns: background --crimson, padding 2rem 3rem, text #FDF8F2 italic */}
        <div className="w-full bg-(--crimson) py-12 px-6 md:py-[3rem] md:px-[3rem] mb-16">
          <p className="font-body text-[1rem] text-(--bg) max-w-[700px] mx-auto leading-[1.75] text-center italic">
            As a communications professional, I have learned that effective
            leadership begins with understanding people before trying to guide
            them. Leadership is not about authority. It is about designing the
            conditions in which others can succeed.
          </p>
        </div>

        {/* Three Principles — More vertical breathing room: gap-16 (4rem) */}
        <motion.div
          variants={fadeInUp}
          initial={!prefersReducedMotion ? "hidden" : "visible"}
          whileInView={!prefersReducedMotion ? "visible" : undefined}
          transition={
            !prefersReducedMotion
              ? { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.6 }
              : undefined
          }
          viewport={{ once: true, amount: 0.1 }}
          className="w-full flex flex-col md:flex-row gap-12 md:gap-16"
        >
          {/* Column 1 */}
          <div className="flex-1 py-8 md:py-0 md:px-8 md:border-r border-(--border) md:first:pl-0">
            <h3 className="font-mono text-t-xs text-(--ta) tracking-[0.20em] uppercase mb-6">
              VISIONARY YET GROUNDED
            </h3>
            <p className="font-body text-t-base text-(--t2) leading-[1.85]">
              True visionaries inspire not through grand gestures, but through consistent actions rooted in genuine care. I lead with a clear long-term vision while staying grounded in the present realities and needs of my team.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex-1 py-8 md:py-0 md:px-8 border-t md:border-t-0 md:border-r border-(--border)">
            <h3 className="font-mono text-t-xs text-(--ta) tracking-[0.20em] uppercase mb-6">
              FACILITATE, DON'T CONTROL
            </h3>
            <p className="font-body text-t-base text-(--t2) leading-[1.85]">
              The responsibility of leadership is to enable others to succeed by removing obstacles and providing tools. Not to direct from above, but to support from within.
            </p>
          </div>

          {/* Column 3 */}
          <div className="flex-1 py-8 md:py-0 md:px-8 border-t md:border-t-0 border-(--border) md:last:pr-0">
            <h3 className="font-mono text-t-xs text-(--ta) tracking-[0.20em] uppercase mb-6">
              LEAD WITH PURPOSE
            </h3>
            <p className="font-body text-t-base text-(--t2) leading-[1.85]">
              Every initiative must begin with a clear understanding of why it
              matters. When people understand the purpose behind their work,
              they become far more motivated to create meaningful impact.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}