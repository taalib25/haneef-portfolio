import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function Contact() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <footer id="contact" className="relative py-16 md:py-24 px-6 md:px-8 lg:px-12"
      style={{
        scrollMarginTop: '80px',
        background: 'linear-gradient(180deg, #096B90 0%, #042B44 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={!prefersReducedMotion ? { opacity: 0, y: 16 } : { opacity: 1 }}
          whileInView={!prefersReducedMotion ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-[clamp(1.5rem,4vw,2.5rem)] text-[#FDF8F2] leading-[0.95] tracking-[0.02em] uppercase mb-10 md:mb-14">
            Let's Connect
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'rgba(253,248,242,0.08)' }}>
          {[
            { label: 'Email', value: 'haneef.rotaract3220@gmail.com', href: 'mailto:haneef.rotaract3220@gmail.com' },
            { label: 'Phone', value: '+94 77 044 7021', href: 'tel:+94770447021' },
            { label: 'Website', value: 'haneefrotaract3220.com', href: 'https://www.haneefrotaract3220.com' },
            { label: 'LinkedIn', value: 'haneef-mohamed', href: 'https://www.linkedin.com/in/haneef-mohamed' },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex flex-col justify-center p-6 md:p-8 hover:bg-[rgba(253,248,242,0.04)] transition-colors duration-300"
              style={{ background: '#042B44' }}
              initial={!prefersReducedMotion ? { opacity: 0 } : { opacity: 1 }}
              whileInView={!prefersReducedMotion ? { opacity: 1 } : undefined}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <span className="font-body text-[0.65rem] uppercase tracking-[0.15em] text-[rgba(253,248,242,0.4)] mb-2">
                {item.label}
              </span>
              <span className="font-body text-[0.9rem] text-[#F5F8FA] group-hover:text-white transition-colors">
                {item.value}
              </span>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="mt-px"
          style={{ background: 'rgba(253,248,242,0.08)' }}
          initial={!prefersReducedMotion ? { opacity: 0 } : { opacity: 1 }}
          whileInView={!prefersReducedMotion ? { opacity: 1 } : undefined}
          transition={{ duration: 0.4, delay: 0.35 }}
          viewport={{ once: true }}
        >
          <div className="p-6 md:p-8" style={{ background: '#042B44' }}>
            <span className="font-body text-[0.65rem] uppercase tracking-[0.15em] text-[rgba(253,248,242,0.4)] mb-2 block">
              Address
            </span>
            <span className="font-body text-[0.9rem] text-[#F5F8FA]">
              77/9, Anagarika Dharmapala Mawatha, Dehiwela
            </span>
          </div>
        </motion.div>

        <div className="mt-12 md:mt-16 pt-8 border-t border-[rgba(253,248,242,0.08)]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <span className="font-body text-[0.7rem] text-[rgba(253,248,242,0.35)]">
              © 2025 Rtr. IPP Haneef Mohamed
            </span>
            <span className="font-body text-[0.65rem] text-[rgba(253,248,242,0.25)]">
              RTR. Colombo Mid Town · District 3220
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}