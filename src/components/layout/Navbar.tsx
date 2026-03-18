import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/cn';

const navLinks = [
  { name: 'The Story', href: '#story' },
  { name: 'Work', href: '#work' },
  { name: 'Philosophy', href: '#philosophy' },
  { name: 'Campaign', href: '#campaign' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state when past hero section
      setScrolled(window.scrollY > 100);
      
      // Simple scroll spy logic
      const sections = navLinks.map(link => link.href.substring(1));
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out',
          'h-[52px] md:h-[52px] px-4 md:px-6 lg:px-8',
          scrolled
            ? 'bg-[rgba(253,248,242,0.85)] backdrop-blur-[16px] saturate-[180%] border-b border-[rgba(15,6,8,0.06)]'
            : 'bg-transparent border-none'
        )}
      >
        <div className="flex w-full max-w-6xl mx-auto justify-center items-center h-full gap-8">
          {/* Identity - Centered with text effect */}
          <a
            href="#"
            className={cn(
              'font-display font-semibold text-[0.85rem] uppercase tracking-[0.14em] transition-all duration-500',
              'relative group',
              scrolled
                ? 'text-[var(--t1)]'
                : 'text-[rgba(253,248,242,0.95)]'
            )}
          >
            <span className={cn(
              'transition-all duration-500',
              !scrolled && 'text-shadow-subtle'
            )}>
              RTR. HANEEF
            </span>
            {/* Subtle underline accent on hover */}
            <span className={cn(
              'absolute -bottom-1 left-0 h-px w-0 transition-all duration-300',
              scrolled ? 'bg-[var(--ta)]' : 'bg-[rgba(253,248,242,0.8)]',
              'group-hover:w-full'
            )} />
          </a>

          {/* Desktop Nav - Centered */}
          <div className="hidden md:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  'font-display font-medium text-[0.8rem] uppercase tracking-[0.12em] transition-all duration-300',
                  'relative group',
                  scrolled
                    ? activeSection === link.href.substring(1)
                      ? 'text-[var(--ta)]'  // Active = crimson
                      : 'text-[var(--t2)] hover:text-[var(--ta)]'  // Default muted warm, hover crimson
                    : 'text-[rgba(253,248,242,0.75)] hover:text-[rgba(253,248,242,0.95)]'  // Over hero: light gray, hover lighter
                )}
              >
                {link.name}
                {/* Subtle dot indicator for active section */}
                {activeSection === link.href.substring(1) && scrolled && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[var(--ta)] rounded-full" />
                )}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              'md:hidden transition-colors',
              scrolled
                ? 'text-[var(--t2)]'
                : 'text-[var(--ht1)]' // White on crimson
            )}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer with Framer Motion animations */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay with fade */}
            <motion.div
              className="fixed inset-0 z-[60] bg-black/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer with slide and fade */}
            <motion.div
              className="fixed top-0 right-0 z-[61] flex flex-col h-full w-[min(280px,85vw)] p-6"
              style={{ background: 'rgba(253,248,242,0.97)' }}
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Close button */}
              <div className="flex justify-end mb-12">
                <motion.button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[var(--t1)] hover:text-[var(--ta)] transition-colors"
                  aria-label="Close menu"
                  whileTap={{ scale: 0.9 }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </motion.button>
              </div>

              {/* Nav links with stagger */}
              <motion.div
                className="flex flex-col gap-8 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.2 }}
              >
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name + index}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-display text-[1.5rem] uppercase text-[var(--t1)]"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.15 + (index * 0.05),
                      duration: 0.3,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </motion.div>

              {/* Email at bottom */}
              <motion.div
                className="mt-auto pb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.2 }}
              >
                <a
                  href="mailto:haneef.rotaract3220@gmail.com"
                  className="font-body text-[0.95rem] text-[var(--t2)]"
                >
                  haneef.rotaract3220@gmail.com
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}