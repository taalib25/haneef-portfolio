import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function Contact() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <footer id="contact" className="relative py-20 md:py-32 px-4 md:px-6 lg:px-8 overflow-hidden"
      style={{
        scrollMarginTop: '80px',
        overscrollBehavior: 'contain',
        background: 'linear-gradient(180deg, #5BA3C4 0%, #3A8FB7 50%, #2A7A9E 100%)',
      }}
    >
      {/* Mobile-only massive VOTE HANEEF text — left aligned */}
      <div 
        className="block md:hidden"
        style={{
          fontSize: '17vw',
          lineHeight: 0.88,
          letterSpacing: '-0.02em',
          color: '#F5F8FA',
          marginBottom: '2rem',
        }}
        aria-hidden="true"
      >
        <span className="font-display font-black uppercase block">VOTE</span>
        <span className="font-display font-black uppercase block">HANEEF.</span>
      </div>

      {/* Subtle background text - desktop only */}
      <div className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none overflow-hidden" aria-hidden="true">
        <span
          className="font-display font-black uppercase whitespace-nowrap select-none"
          style={{
            fontSize: 'clamp(10rem, 30vw, 20rem)',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(253,248,242,0.04)',
            letterSpacing: '0.05em',
          }}
        >
          VOTE
        </span>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-end pb-8 md:pb-12">
          {/* Left - Big Statement - desktop only */}
          <motion.div
            className="hidden md:block"
            initial={!prefersReducedMotion ? { opacity: 0, y: 20 } : { opacity: 1 }}
            whileInView={!prefersReducedMotion ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-[clamp(3.5rem,10vw,7rem)] text-[#FDF8F2] leading-[0.85] tracking-[0.01em] uppercase mb-6">
              VOTE
              <br />
              HANEEF.
            </h2>
            <p className="font-body text-[0.85rem] text-[rgba(253,248,242,0.4)] tracking-wide">
              District 3220 — Sri Lanka & Maldives · 2025–2026
            </p>
          </motion.div>

          {/* Right - Contact & Links */}
          <motion.div
            className="flex flex-col gap-8 md:pb-2"
            initial={!prefersReducedMotion ? { opacity: 0, y: 20 } : { opacity: 1 }}
            whileInView={!prefersReducedMotion ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            {/* Contact */}
            <div className="space-y-3">
              <a href="mailto:haneef.rotaract3220@gmail.com" className="block font-body text-[0.95rem] text-[rgba(253,248,242,0.7)] hover:text-[#FDF8F2] transition-colors">
                haneef.rotaract3220@gmail.com
              </a>
              <a href="tel:+94770447021" className="block font-body text-[0.95rem] text-[rgba(253,248,242,0.7)] hover:text-[#FDF8F2] transition-colors">
                +94 77 044 7021
              </a>
            </div>

            {/* Social - desktop only */}
            <a 
              href="https://linkedin.com/in/haneefmohamed"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1 font-body text-[0.85rem] text-[rgba(253,248,242,0.4)] hover:text-[rgba(253,248,242,0.8)] transition-colors tracking-wide"
            >
              LinkedIn ↗
            </a>
          </motion.div>
        </div>

        {/* Bottom - Copyright — visible on all screens */}
        <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-[rgba(253,248,242,0.08)]">
          <div className="flex flex-col gap-3">
            <p className="font-body text-[0.65rem] md:text-[0.75rem] text-[rgba(253,248,242,0.3)]">
              © 2025 Rtr. IPP Haneef Mohamed · RTR. Colombo Mid Town · District 3220
            </p>
            <p className="font-body text-[0.6rem] md:text-[0.7rem] text-[rgba(253,248,242,0.2)] hidden md:block">
              10+ years Rotary · 5+ years Rotaract · 40-year legacy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}