import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/cn';
import { getRoutePreloadHandlers } from '../../lib/routePreload';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Professional', href: '/professional' },
  { name: 'Rotaract', href: '/rotaract' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Home page has dark hero background, other pages have light backgrounds
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hide navbar on Home page - AFTER all hooks
  if (isHomePage) {
    return null;
  }

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname === href;
  };

  const preloadHandlers = (href: string) => getRoutePreloadHandlers(href);

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out',
          'h-[52px] md:h-[52px] px-4 md:px-6 lg:px-8',
          'bg-[rgba(253,248,242,0.18)] border-none backdrop-blur-[6px] saturate-[115%]',
          'md:bg-[rgba(253,248,242,0.28)] md:backdrop-blur-[8px] md:saturate-[120%] md:border-b md:border-[rgba(15,6,8,0.04)]'
        )}
      >
        <div className="flex w-full max-w-6xl mx-auto justify-between md:justify-center items-center h-full gap-8">
          <Link
            to="/"
            {...preloadHandlers('/')}
            className={cn(
              'hidden md:block font-display font-semibold text-[0.85rem] uppercase tracking-[0.14em] transition-all duration-500',
              'relative group',
              // Home page: light text when not scrolled, dark when scrolled
              // Other pages: always dark text
              isHomePage
                ? scrolled
                  ? 'text-[var(--t1)]'
                  : 'text-[rgba(253,248,242,0.95)]'
                : 'text-[var(--t1)]'
            )}
          >
            <span className={cn(
              'transition-all duration-500',
              !scrolled && isHomePage && 'text-shadow-subtle'
            )}>
              RTR. IPP HANEEF
            </span>
            <span className={cn(
              'absolute -bottom-1 left-0 h-px w-0 transition-all duration-300',
              scrolled || !isHomePage ? 'bg-[var(--ta)]' : 'bg-[rgba(253,248,242,0.8)]',
              'group-hover:w-full'
            )} />
          </Link>

          <div className="hidden md:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                {...preloadHandlers(link.href)}
                className={cn(
                  'font-display font-medium text-[0.8rem] uppercase tracking-[0.12em] transition-all duration-300',
                  'relative group',
                  // Home page: light text when not scrolled, dark when scrolled
                  // Other pages: always dark text
                  isHomePage
                    ? scrolled
                      ? isActive(link.href)
                        ? 'text-[var(--ta)]'
                        : 'text-[var(--t2)] hover:text-[var(--ta)]'
                      : 'text-[rgba(253,248,242,0.75)] hover:text-[rgba(253,248,242,0.95)]'
                    : isActive(link.href)
                      ? 'text-[var(--ta)]'
                      : 'text-[var(--t2)] hover:text-[var(--ta)]'
                )}
              >
                {link.name}
                {isActive(link.href) && (scrolled || !isHomePage) && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[var(--ta)] rounded-full" />
                )}
              </Link>
            ))}
          </div>

          <div className="md:hidden flex items-center justify-between w-full">
            <Link
              to="/"
              {...preloadHandlers('/')}
              className={cn(
                'font-display font-semibold text-[1rem] uppercase tracking-[0.12em] transition-all duration-500',
                isHomePage
                  ? scrolled
                    ? 'text-[var(--t1)]'
                    : 'text-[rgba(253,248,242,0.95)]'
                  : 'text-[var(--t1)]'
              )}
            >
              <span className={cn(
                'transition-all duration-500',
                !scrolled && isHomePage && 'text-shadow-subtle'
              )}>
              RTR. IPP HANEEF
              </span>
            </Link>

            <button
              className={cn(
                'transition-colors',
                isHomePage
                  ? scrolled
                    ? 'text-[var(--t2)]'
                    : 'text-[var(--ht1)]'
                  : 'text-[var(--t2)]'
              )}
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={22} />
            </button>
          </div>

          <div className="hidden md:block" />
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-black/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              className="fixed top-0 right-0 z-[61] flex flex-col h-full w-[min(280px,85vw)] p-6"
              style={{ background: 'rgba(253,248,242,0.97)' }}
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex justify-end mb-12">
                <motion.button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[var(--t1)] hover:text-[var(--ta)] transition-colors"
                  aria-label="Close menu"
                  whileTap={{ scale: 0.9 }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </motion.button>
              </div>

              <motion.div
                className="flex flex-col gap-8 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.2 }}
              >
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name + index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.15 + (index * 0.05),
                      duration: 0.3,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                  >
                    <Link
                      to={link.href}
                      {...preloadHandlers(link.href)}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        'font-display text-[1.5rem] uppercase transition-colors',
                        isActive(link.href)
                          ? 'text-[var(--crimson)]'
                          : 'text-[var(--t1)]'
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

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
