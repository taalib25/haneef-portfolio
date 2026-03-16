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
    <section id="contact" className="py-[5rem] md:py-[8rem] px-6 md:px-12 lg:px-20 bg-[var(--bg-hero)]">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Dramatic Question */}
        <motion.div
          className="mb-12"
          initial={!prefersReducedMotion ? "hidden" : "visible"}
          whileInView={!prefersReducedMotion ? "visible" : undefined}
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h2 
            className="font-display text-[clamp(4rem,8vw,7rem)] text-[color:var(--ht1)] leading-[0.92] tracking-[-0.025em] uppercase mb-8"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.span key={i} variants={fadeInUp}>
                {['READY', 'TO', 'TALK?'][i]}{" "}
              </motion.span>
            ))}
          </motion.h2>
          
          <motion.p 
            className="font-body text-[1.125rem] text-[rgba(253,248,242,0.65)] max-w-[800px] mx-auto"
            variants={fadeInUp}
            initial={!prefersReducedMotion ? "hidden" : "visible"}
            whileInView={!prefersReducedMotion ? "visible" : undefined}
            viewport={{ once: true, amount: 0.1 }}
          >
            Campaign conversations, Rotaract enquiries, or professional collaborations.
          </motion.p>
        </motion.div>

        {/* Two Doors */}
        <motion.div
          className="flex flex-col md:flex-row gap-6 md:gap-8 mb-16"
          variants={fadeInUp}
          initial={!prefersReducedMotion ? "hidden" : "visible"}
          whileInView={!prefersReducedMotion ? "visible" : undefined}
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Campaign Button */}
          <a
            href="mailto:haneef.rotaract3220@gmail.com?subject=Campaign%20Conversation"
            className="flex-1 min-h-[60px] px-12 py-4 border-[1px] border-[rgba(253,248,242,0.30)] text-[color:var(--ht1)] font-mono text-[0.75rem] uppercase tracking-widest rounded-none hover:bg-[rgba(253,248,242,0.10)] hover:border-[rgba(253,248,242,0.60)] transition-all duration-300 flex items-center justify-center"
          >
            FOR DISTRICT 3220 →
          </a>
          
          {/* Professional Button */}
          <a
            href="mailto:haneefmohamed.pr@gmail.com?subject=Professional%20Collaboration"
            className="flex-1 min-h-[60px] px-12 py-4 bg-[var(--hta)] text-[var(--crimson-dark)] font-mono text-[0.75rem] uppercase tracking-widest rounded-none hover:bg-white transition-colors duration-300 flex items-center justify-center"
          >
            FOR PROFESSIONAL WORK →
          </a>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="font-mono text-[0.7rem] text-[rgba(253,248,242,0.45)]"
          variants={fadeInUp}
          initial={!prefersReducedMotion ? "hidden" : "visible"}
          whileInView={!prefersReducedMotion ? "visible" : undefined}
          viewport={{ once: true, amount: 0.1 }}
        >
          <p>haneef.rotaract3220@gmail.com · +94 77 123 4567</p>
        </motion.div>
      </div>
    </section>
  );
}