import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
      setScrolled(window.scrollY > 80);
      
      // Simple scroll spy logic
      const sections = navLinks.map(link => link.href.substring(1));
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
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
          'fixed top-0 left-0 w-full z-50 transition-all duration-300 flex items-center',
          'h-[56px] md:h-[64px] px-6 md:px-12 lg:px-20',
          scrolled 
            ? 'bg-[rgba(253,248,242,0.95)] backdrop-blur-[12px]' 
            : 'bg-transparent'
        )}
      >
        <div className="flex w-full max-w-[1200px] mx-auto justify-between items-center">
          <a
            href="#"
            className="font-mono text-[var(--ta)] text-[var(--t-base)]"
          >
            RTR. HANEEF
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  'font-mono uppercase text-[var(--t-xs)] tracking-widest transition-colors',
                  scrolled 
                    ? 'text-[var(--t1)]' 
                    : 'text-[var(--hta)]', // Light text when over hero
                  activeSection === link.href.substring(1) && 'border-b-2 border-[var(--crimson)]'
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
                ? 'text-[var(--t1)]' 
                : 'text-[var(--hta)]' // Light text when over hero
            )}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={cn(
          'fixed inset-0 z-[60] bg-[var(--bg)] flex flex-col p-6 transition-transform duration-500 ease-out',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex justify-end">
          <button
            className="text-[var(--t1)]"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Menu"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="flex flex-col gap-8 mt-16">
          {navLinks.map((link, index) => (
            <a
              key={link.name + index}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-mono uppercase text-[var(--t-lg)] tracking-widest text-[var(--t1)]"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="mt-auto pb-8">
          <a
            href="mailto:haneef.rotaract3220@gmail.com"
            className="font-mono text-[var(--t-sm)] text-[var(--t2)]"
          >
            haneef.rotaract3220@gmail.com
          </a>
        </div>
      </div>
    </>
  );
}