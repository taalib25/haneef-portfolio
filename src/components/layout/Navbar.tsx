import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
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
          'fixed top-0 left-0 w-full z-50 transition-all duration-400 ease-in-out',
          'h-[52px] px-6 md:px-12 lg:px-20',
          scrolled 
            ? 'bg-[rgba(253,248,242,0.85)] backdrop-blur-[16px] saturate-[180%] border-b border-[rgba(15,6,8,0.06)]' 
            : 'bg-transparent border-none'
        )}
      >
        <div className="flex w-full max-w-[1200px] mx-auto justify-between items-center">
          {/* Left: Identity */}
          <a
            href="#"
            className={cn(
              'font-mono text-[0.65rem] uppercase tracking-widest',
              scrolled 
                ? 'text-[var(--t3)]' 
                : 'text-[rgba(253,248,242,0.50)]'
            )}
          >
            RTR. HANEEF
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  'font-mono text-[0.65rem] uppercase tracking-widest transition-colors duration-200',
                  scrolled 
                    ? activeSection === link.href.substring(1) 
                      ? 'text-[var(--ta)]'  // Active = crimson
                      : 'text-[var(--t3)] hover:text-[var(--ta)]'  // Default muted warm, hover crimson
                    : 'text-[rgba(253,248,242,0.50)] hover:text-[rgba(253,248,242,0.80)]'  // Over hero: light gray, hover lighter
                )}
              >
                {link.name}
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
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[60] flex flex-col p-6"
          style={{ background: 'rgba(253,248,242,0.97)' }}
          onClick={(e) => {
            // Close drawer when clicking outside content area
            if (e.target === e.currentTarget) {
              setMobileMenuOpen(false);
            }
          }}
        >
          <div className="flex justify-end mb-12">
            {/* No close button - tap outside to close */}
          </div>
          
          <div className="flex flex-col gap-12 mt-8">
            {navLinks.map((link, index) => (
              <a
                key={link.name + index}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-[1.5rem] uppercase text-[var(--t1)]"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-auto pb-8">
            <a
              href="mailto:haneef.rotaract3220@gmail.com"
              className="font-mono text-[0.75rem] text-[var(--t2)] uppercase tracking-wider"
            >
              haneef.rotaract3220@gmail.com
            </a>
          </div>
        </div>
      )}
    </>
  );
}