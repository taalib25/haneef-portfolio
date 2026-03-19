import { motion, type Variants } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Contact() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="contact" className="py-14 md:py-20 px-4 md:px-6 lg:px-8 bg-[var(--bg-hero)]">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header - CIGR Style */}
        <motion.div
          className="mb-10 md:mb-16"
          initial={!prefersReducedMotion ? "hidden" : "visible"}
          whileInView={!prefersReducedMotion ? "visible" : undefined}
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.p
            className="font-mono text-[9.5px] text-[var(--hta)] tracking-[0.10em] uppercase mb-4 md:mb-6"
            variants={fadeInUp}
          >
            [ 06 — GET IN TOUCH ]
          </motion.p>

          <motion.h2
            className="font-display text-[clamp(2rem,4vw,3.25rem)] text-[var(--ht1)] leading-[0.92] tracking-[-0.025em] uppercase mb-6"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            <motion.span variants={fadeInUp}>VOTE HANEEF.</motion.span>{" "}
            <motion.span variants={fadeInUp}>DISTRICT 3220.</motion.span>
          </motion.h2>

          <motion.p
            className="font-body text-t-base text-[var(--ht2)] max-w-[800px] mx-auto leading-[1.85]"
            variants={fadeInUp}
            initial={!prefersReducedMotion ? "hidden" : "visible"}
            whileInView={!prefersReducedMotion ? "visible" : undefined}
            viewport={{ once: true, amount: 0.1 }}
          >
            Running for District Rotaract Representative · Sri Lanka & Maldives · 2025–2026
          </motion.p>
        </motion.div>

        {/* Campaign CTAs */}
        <motion.div
          className="flex flex-col md:flex-row gap-6 md:gap-8 mb-16"
          variants={fadeInUp}
          initial={!prefersReducedMotion ? "hidden" : "visible"}
          whileInView={!prefersReducedMotion ? "visible" : undefined}
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Support Campaign - Primary */}
          <a
            href="mailto:haneef.rotaract3220@gmail.com?subject=Support%20the%20Campaign"
            className="flex-1 min-h-[60px] px-12 py-4 bg-[var(--ht1)] text-[var(--crimson)] font-mono text-[0.875rem] uppercase tracking-widest rounded-none hover:opacity-90 transition-opacity duration-300 flex items-center justify-center"
          >
            SUPPORT THE CAMPAIGN →
          </a>

          {/* Get in Touch - Secondary */}
          <a
            href="mailto:haneef.rotaract3220@gmail.com?subject=Get%20in%20Touch"
            className="flex-1 min-h-[60px] px-12 py-4 border-[1px] border-[var(--ht1)] text-[var(--ht1)] font-mono text-[0.875rem] uppercase tracking-widest rounded-none hover:bg-[var(--ht1)/0.1] transition-colors duration-300 flex items-center justify-center"
          >
            GET IN TOUCH →
          </a>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="font-mono text-[0.875rem] text-[var(--ht2)]"
          variants={fadeInUp}
          initial={!prefersReducedMotion ? "hidden" : "visible"}
          whileInView={!prefersReducedMotion ? "visible" : undefined}
          viewport={{ once: true, amount: 0.1 }}
        >
          <p>haneef.rotaract3220@gmail.com · +94 77 044 7021</p>
        </motion.div>
      </div>
    </section>
  );
}