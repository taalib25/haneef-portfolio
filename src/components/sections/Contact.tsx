import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { Mail, Phone, Globe, MapPin, Linkedin } from 'lucide-react';
import { openAppOrWeb, deepLinks } from '../../lib/deepLinks';

export default function Contact() {
  const prefersReducedMotion = useReducedMotion();

  const contactItems = [
    { icon: Mail, value: 'haneef.rotaract3220@gmail.com', href: 'mailto:haneef.rotaract3220@gmail.com' },
    { icon: Phone, value: '+94 77 044 7021', href: 'tel:+94770447021' },
    { icon: Globe, value: 'haneefrotaract3220.com', href: 'https://www.haneefrotaract3220.com' },
    { icon: Linkedin, value: 'haneef-mohamed', deepLink: deepLinks.linkedin('haneef-mohamed') },
    { icon: MapPin, value: '77/9, Anagarika Dharmapala Mawatha, Dehiwela', href: null },
  ];

  return (
    <footer id="contact" className="relative py-16 md:py-24 px-6 md:px-8 lg:px-12"
      style={{
        scrollMarginTop: '80px',
        background: 'linear-gradient(180deg, #3A8FB7 0%, #2A7A9E 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 md:gap-16">
          <motion.div
            className="md:w-1/2"
            initial={!prefersReducedMotion ? { opacity: 0, y: 16 } : { opacity: 1 }}
            whileInView={!prefersReducedMotion ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-[clamp(3rem,10vw,6rem)] text-[#FDF8F2] leading-[0.85] tracking-[-0.03em] uppercase">
              Let's<br />Connect
            </h2>
          </motion.div>

          <div className="md:w-1/2 md:pt-2">
            <div className="flex flex-col gap-5">
              {contactItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4"
                  initial={!prefersReducedMotion ? { opacity: 0, x: 16 } : { opacity: 1 }}
                  whileInView={!prefersReducedMotion ? { opacity: 1, x: 0 } : undefined}
                  transition={{ duration: 0.4, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                >
                  <div className="w-10 h-10 rounded-full border border-[rgba(253,248,242,0.2)] flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-[#FDF8F2]" strokeWidth={1.5} />
                  </div>
                  {item.deepLink ? (
                    <button
                      onClick={(e) => openAppOrWeb(item.deepLink!, e)}
                      className="font-body text-[0.9rem] text-[rgba(253,248,242,0.85)] hover:text-[#FDF8F2] transition-colors text-left"
                    >
                      {item.value}
                    </button>
                  ) : item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="font-body text-[0.9rem] text-[rgba(253,248,242,0.85)] hover:text-[#FDF8F2] transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="font-body text-[0.9rem] text-[rgba(253,248,242,0.85)]">
                      {item.value}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="mt-12 md:mt-16 pt-6 border-t border-[rgba(253,248,242,0.15)]"
          initial={!prefersReducedMotion ? { opacity: 0 } : { opacity: 1 }}
          whileInView={!prefersReducedMotion ? { opacity: 1 } : undefined}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <span className="font-body text-[0.7rem] text-[rgba(253,248,242,0.5)]">
              © 2025 Rtr. IPP Haneef Mohamed
            </span>
            <span className="font-body text-[0.65rem] text-[rgba(253,248,242,0.4)]">
              RTR. Colombo Mid Town · District 3220
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}