import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion'

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-accent-warm)] to-[var(--color-accent)] origin-left z-[1000]"
      style={{ scaleX }}
    />
  )
}

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      const sections = ['about', 'journey', 'projects', 'achievements', 'contact']
      const scrollPosition = window.scrollY + 200
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Journey', href: '#journey' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' }
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'py-3' 
            : 'py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-500 ${
            scrolled 
              ? 'bg-[var(--color-bg)]/90 backdrop-blur-xl shadow-lg shadow-black/10 rounded-full px-6 py-3 border border-[var(--color-border)]' 
              : 'px-2'
          }`}>
            <motion.a 
              href="#"
              className="flex items-center gap-3"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={(e) => handleNavClick(e, '#')}
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 relative">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="var(--color-accent)" strokeWidth="2"/>
                  <circle cx="50" cy="50" r="35" fill="none" stroke="var(--color-accent)" strokeWidth="1" opacity="0.5"/>
                  <circle cx="50" cy="50" r="12" fill="var(--color-accent)"/>
                  {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                    <line
                      key={i}
                      x1="50" y1="38"
                      x2="50" y2="15"
                      stroke="var(--color-accent)"
                      strokeWidth="3"
                      transform={`rotate(${angle} 50 50)`}
                    />
                  ))}
                </svg>
              </div>
              <span className="text-lg sm:text-xl font-[var(--font-display)] tracking-wider text-[var(--color-text)]">
                HANEEF
              </span>
            </motion.a>

            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-4 py-2 text-sm font-medium uppercase tracking-wider transition-colors duration-300 rounded-full ${
                    activeSection === item.href.slice(1)
                      ? 'text-[var(--color-accent)]'
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text)]'
                  }`}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  {activeSection === item.href.slice(1) && (
                    <motion.span 
                      layoutId="activeNav"
                      className="absolute inset-0 bg-[var(--color-accent)]/10 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="ml-3 px-5 py-2.5 bg-[var(--color-accent)] text-white text-sm font-medium uppercase tracking-wider rounded-full hover:bg-[var(--color-accent-hover)] shadow-lg shadow-[var(--color-accent)]/25"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Connect
              </motion.a>
            </div>

            <motion.button 
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <motion.span 
                  animate={{ 
                    rotate: mobileMenuOpen ? 45 : 0, 
                    y: mobileMenuOpen ? 7 : 0,
                    width: mobileMenuOpen ? 20 : 20
                  }}
                  className="h-0.5 bg-current origin-left rounded-full"
                  style={{ backgroundColor: 'var(--color-text)' }}
                />
                <motion.span 
                  animate={{ opacity: mobileMenuOpen ? 0 : 1, width: mobileMenuOpen ? 0 : 14 }}
                  className="h-0.5 bg-current rounded-full"
                  style={{ backgroundColor: 'var(--color-text)' }}
                />
                <motion.span 
                  animate={{ 
                    rotate: mobileMenuOpen ? -45 : 0, 
                    y: mobileMenuOpen ? -7 : 0,
                    width: mobileMenuOpen ? 20 : 20
                  }}
                  className="h-0.5 bg-current origin-left rounded-full"
                  style={{ backgroundColor: 'var(--color-text)' }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-[var(--color-bg)] border-l border-[var(--color-border)] z-50 md:hidden"
            >
              <div className="flex flex-col h-full pt-20 px-6">
                <nav className="space-y-1">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`block py-3 px-4 text-lg font-medium uppercase tracking-wider rounded-lg transition-colors ${
                        activeSection === item.href.slice(1)
                          ? 'text-[var(--color-accent)] bg-[var(--color-accent)]/10'
                          : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-bg-secondary)]'
                      }`}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </nav>
                <motion.a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-6 block py-4 px-6 bg-[var(--color-accent)] text-white text-center font-medium uppercase tracking-wider rounded-xl shadow-lg shadow-[var(--color-accent)]/25"
                >
                  Let's Connect
                </motion.a>
                
                <div className="mt-auto pb-8">
                  <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider">
                    Service Above Self
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

const Hero = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[var(--color-accent)]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[var(--color-accent-warm)]/5 rounded-full blur-[80px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-[var(--color-accent)]/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-[var(--color-border)]/50 rounded-full" />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-8"
        >
          <div className="w-36 h-36 sm:w-44 sm:h-44 mx-auto rounded-full border-4 border-[var(--color-accent)] overflow-hidden shadow-[0_0_40px_rgba(198,12,48,0.25)]">
            <img 
              src="/profile.jpg" 
              alt="Haneef Mohamed" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="w-full h-full bg-[var(--color-bg-tertiary)] flex items-center justify-center hidden">
              <span className="font-[var(--font-display)] text-5xl sm:text-6xl text-[var(--color-accent)]">H</span>
            </div>
          </div>
        </motion.div>
        
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block text-xs sm:text-sm font-medium text-[var(--color-accent)] uppercase tracking-[0.3em] mb-6"
        >
          Rotaract Club of Colombo Mid Town
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-[var(--font-display)] text-[clamp(3.5rem,12vw,8rem)] leading-[0.9] tracking-[0.02em] mb-4 text-[var(--color-text)]"
        >
          HANEEF
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="font-[var(--font-heading)] text-xl sm:text-2xl md:text-3xl text-[var(--color-text-secondary)] italic max-w-2xl mx-auto mb-4"
        >
          45th President · <span className="text-[var(--color-accent)] not-italic font-medium">Immediate Past President</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-[var(--color-text-secondary)] max-w-xl mx-auto mb-12 text-lg leading-relaxed"
        >
          Revived <span className="text-[var(--color-accent)] font-medium">Project iGenius</span> after 5-year hiatus — securing the club's first international recognition in 9 years.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-accent)] text-white font-medium text-sm uppercase tracking-[0.15em] rounded-full hover:bg-[var(--color-accent-hover)] shadow-lg shadow-[var(--color-accent)]/25"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            View My Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </motion.a>
          <motion.a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[var(--color-border)] text-[var(--color-text)] font-medium text-sm uppercase tracking-[0.15em] rounded-full hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-8 sm:gap-16"
      >
        {[
          { number: '5+', label: 'Years Active' },
          { number: '1st', label: 'International Win (9 yrs)' },
          { number: '45th', label: 'President' }
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <div className="font-[var(--font-display)] text-3xl sm:text-4xl text-[var(--color-accent)]">{stat.number}</div>
            <div className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mt-1">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-[var(--color-border)] rounded-full flex items-start justify-center p-1.5"
        >
          <motion.div className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

const SectionHeader = ({ label, title, subtitle, align = 'left' }) => (
  <motion.div 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className={`mb-16 md:mb-20 ${align === 'center' ? 'text-center' : ''}`}
  >
    <div className={`flex items-baseline gap-4 md:gap-6 mb-4 ${align === 'center' ? 'justify-center' : ''}`}>
      <span className="font-[var(--font-display)] text-xl md:text-2xl text-[var(--color-accent)] tracking-widest">
        {label}
      </span>
      <div className="h-[1px] flex-1 max-w-[100px] bg-[var(--color-border)]" />
    </div>
    <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-medium text-[var(--color-text)] leading-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-4 text-[var(--color-text-secondary)] text-lg max-w-2xl">
        {subtitle}
      </p>
    )}
  </motion.div>
)

const About = () => {
  return (
    <section id="about" className="py-24 md:py-36 bg-[var(--color-bg-secondary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          label="01" 
          title="About Me" 
          subtitle="A transformative leader dedicated to community service and youth empowerment in Sri Lanka's Rotaract movement."
        />
        
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            <p className="font-[var(--font-heading)] text-2xl md:text-3xl leading-relaxed text-[var(--color-text)]">
              I'm <span className="text-[var(--color-accent)]">Haneef Mohamed</span> — a passionate advocate for positive change.
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
              As the 45th President of the Rotaract Club of Colombo Mid Town (2024-2025), I'm now serving as Immediate Past President (IPP), dedicated to elevating community service and youth empowerment to new heights.
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              My defining achievement came when I revived <span className="text-[var(--color-accent)] font-medium">Project iGenius</span> after a 5-year hiatus — resulting in the club's first international recognition in 9 years. This milestone represents my commitment to reviving legacy projects and achieving what others thought impossible.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/10 to-transparent rounded-2xl" />
            <div className="relative p-8 md:p-10 border border-[var(--color-border)] bg-[var(--color-bg-tertiary)] rounded-2xl shadow-xl">
              <div className="space-y-6">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 flex items-center justify-center bg-[var(--color-accent)]/10 rounded-xl">
                    <svg className="w-7 h-7 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-[var(--font-display)] text-xl tracking-wider text-[var(--color-text)] mb-2">Service</h4>
                    <p className="text-[var(--color-text-secondary)]">Making a tangible difference in our community through meaningful action and dedication.</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 flex items-center justify-center bg-[var(--color-accent)]/10 rounded-xl">
                    <svg className="w-7 h-7 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-[var(--font-display)] text-xl tracking-wider text-[var(--color-text)] mb-2">Leadership</h4>
                    <p className="text-[var(--color-text-secondary)]">Guiding teams to achieve meaningful goals and inspiring the next generation of leaders.</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 flex items-center justify-center bg-[var(--color-accent)]/10 rounded-xl">
                    <svg className="w-7 h-7 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-[var(--font-display)] text-xl tracking-wider text-[var(--color-text)] mb-2">Impact</h4>
                    <p className="text-[var(--color-text-secondary)]">Creating lasting change in our society through sustainable community initiatives.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const Journey = () => {
  const milestones = [
    {
      year: "2025 - Present",
      title: "Immediate Past President (IPP)",
      description: "Transitioning from presidential leadership, focused on guiding the club's next chapter and supporting new initiatives while mentoring future leaders.",
      icon: "👑"
    },
    {
      year: "2024 - 2025",
      title: "45th President",
      description: "Led the Rotaract Club of Colombo Mid Town through a transformative year. Revived Project iGenius after 5-year hiatus, achieving the club's first international recognition in 9 years.",
      icon: "🎯"
    },
    {
      year: "2019",
      title: "Co-Director of Public Relations",
      description: "Managed club communications, brand visibility, and community outreach efforts. Built strong relationships with media and partner organizations.",
      icon: "📣"
    },
    {
      year: "2019",
      title: "Joined Rotaract",
      description: "Began my journey as a dedicated member of the Rotaract Club of Colombo Mid Town, driven by a passion for community service.",
      icon: "🌟"
    }
  ]

  return (
    <section id="journey" className="py-24 md:py-36 bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          label="02" 
          title="My Journey"
          subtitle="A timeline of growth, leadership, and service to the community."
        />
        
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-border)] to-[var(--color-border)] transform md:-translate-x-1/2" />
          
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="absolute left-4 md:left-1/2 w-5 h-5 bg-[var(--color-accent)] rounded-full transform -translate-x-1/2 z-10 shadow-lg shadow-[var(--color-accent)]/40 border-4 border-[var(--color-bg)]" />
                
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-3rem)] ${
                  index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
                }`}>
                  <div className={`flex items-center gap-3 mb-3 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}>
                    <span className="text-4xl">{milestone.icon}</span>
                    <span className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wider">
                      {milestone.year}
                    </span>
                  </div>
                  <h3 className="font-[var(--font-heading)] text-2xl md:text-3xl font-medium text-[var(--color-text)] mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project iGenius",
      description: "An inter-school quiz competition featuring 10 themed rounds with audio and visual elements. Originally launched around 2013, I successfully revived this flagship initiative after a 5-year hiatus during my 2024-25 presidency. This achievement marked the club's first international recognition in 9 years — a historic milestone for the Rotaract Club of Colombo Mid Town.",
      category: "Education & Innovation",
      impact: "First International Win in 9 Years",
      year: "2024-2025",
      role: "45th President & Project Reviver",
      stats: [
        { label: "Rounds", value: "10" },
        { label: "Hiatus Ended", value: "5 yrs" },
        { label: "Recognition", value: "International" }
      ],
      featured: true,
      link: null
    },
    {
      id: 2,
      title: "Youth Empowerment Initiative",
      description: "Rotaract District 3220 encompasses 80+ clubs with 3,500+ members. Our club runs BrighterBee 360°, focusing on rural school infrastructure development, and Rota Ready, a leadership orientation program. These initiatives collectively reach over 136,000 beneficiaries annually, nurturing the next generation of community leaders.",
      category: "Youth Development",
      impact: "136,000+ Annual Beneficiaries",
      year: "Ongoing",
      role: "District Initiative Participant",
      stats: [
        { label: "District Clubs", value: "80+" },
        { label: "Members", value: "3,500+" },
        { label: "Programs", value: "BrighterBee 360°, Rota Ready" }
      ],
      featured: false,
      link: "https://rotaract3220.org"
    },
    {
      id: 3,
      title: "Community Health Camp",
      description: "Comprehensive health initiative focusing on Non-Communicable Disease (NCD) screenings including blood pressure and blood sugar tests, mental health awareness sessions, and general health check-ups for underserved communities. The club also conducts Blind Walk events to support and raise awareness for the vision-impaired community.",
      category: "Health & Wellness",
      impact: "NCD Screenings & Mental Health",
      year: "Ongoing",
      role: "Coordinator & Organizer",
      stats: [
        { label: "Focus", value: "NCD Screening" },
        { label: "Services", value: "BP, Sugar, Check-ups" },
        { label: "Special", value: "Blind Walk" }
      ],
      featured: false,
      link: null
    },
    {
      id: 4,
      title: "Haritha Arana - Environmental Initiative",
      description: "A 10-year phased reforestation project in Kiriyankalli, North Western Province. Launched in 2019, this initiative is part of District 3220's 'One Million Tree Stories' campaign, which has already planted over 430,000 trees. The project focuses on sustainable environmental restoration and community awareness.",
      category: "Environment",
      impact: "Part of 430,000+ Trees Initiative",
      year: "2019 - Present",
      role: "Environmental Team Lead",
      stats: [
        { label: "Duration", value: "10 Years" },
        { label: "Location", value: "Kiriyankalli" },
        { label: "District Goal", value: "1M Trees" }
      ],
      featured: false,
      link: null
    }
  ]

  return (
    <section id="projects" className="py-24 md:py-36 bg-[var(--color-bg-secondary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          label="03" 
          title="Projects" 
          subtitle="Transformative initiatives that create lasting impact in our community."
        />
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`group relative p-8 md:p-12 border transition-all duration-500 rounded-2xl overflow-hidden ${
                project.featured 
                  ? 'border-[var(--color-accent)]/30 bg-gradient-to-br from-[var(--color-accent)]/5 via-[var(--color-bg)] to-[var(--color-bg)] shadow-xl shadow-[var(--color-accent)]/10' 
                  : 'border-[var(--color-border)] bg-[var(--color-bg)] hover:border-[var(--color-accent)]/30 hover:shadow-xl'
              }`}
            >
              {project.featured && (
                <div className="absolute top-6 right-6 md:top-8 md:right-8">
                  <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider bg-[var(--color-accent)] text-white rounded-full shadow-lg shadow-[var(--color-accent)]/30">
                    Featured Achievement
                  </span>
                </div>
              )}

              <div className="absolute top-6 right-6 md:top-8 md:right-auto md:left-8">
                <span className="font-[var(--font-display)] text-6xl md:text-8xl text-[var(--color-border)] leading-none opacity-50">
                  0{project.id}
                </span>
              </div>

              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wider">
                    {project.year}
                  </span>
                  <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="font-[var(--font-heading)] text-2xl md:text-4xl font-medium text-[var(--color-text)] mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-[var(--color-text-muted)] uppercase tracking-wider mb-6">
                  {project.role}
                </p>
                
                <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8 max-w-3xl text-lg">
                  {project.description}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8 max-w-xl">
                  {project.stats.map((stat, i) => (
                    <div key={i} className="text-center p-4 bg-[var(--color-bg-secondary)] rounded-xl border border-[var(--color-border)]">
                      <div className="font-[var(--font-display)] text-2xl text-[var(--color-accent)]">{stat.value}</div>
                      <div className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-[var(--color-accent)]/10 rounded-full">
                      <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <span className="text-base font-medium text-[var(--color-accent)]">{project.impact}</span>
                  </div>
                  
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      Learn More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

const Achievements = () => {
  const achievements = [
    { 
      title: "First International Recognition in 9 Years", 
      year: "2024-2025",
      description: "Revived Project iGenius after 5-year hiatus — historic achievement for Rotaract Club of Colombo Mid Town",
      icon: "🏆"
    },
    { 
      title: "45th President", 
      year: "2024-2025",
      description: "Elected as the 45th President of Rotaract Club of Colombo Mid Town — a testament to leadership and trust",
      icon: "👑"
    },
    { 
      title: "Club Revitalization", 
      year: "2024-2025",
      description: "Transformed club trajectory with innovative projects and renewed energy, inspiring members old and new",
      icon: "⭐"
    }
  ]

  const skills = [
    { name: "Strategic Leadership", level: 95 },
    { name: "Project Management", level: 90 },
    { name: "Team Building", level: 88 },
    { name: "Public Relations", level: 92 },
    { name: "Community Outreach", level: 90 },
    { name: "Event Coordination", level: 85 }
  ]

  return (
    <section id="achievements" className="py-24 md:py-36 bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          label="04" 
          title="Achievements"
          subtitle="Milestones that mark the journey of service and leadership."
        />
        
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-[var(--font-heading)] text-2xl text-[var(--color-text)] mb-8">Highlights</h3>
            <div className="space-y-5">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 border border-[var(--color-border)] bg-[var(--color-bg-secondary)] hover:border-[var(--color-accent)]/30 hover:shadow-lg transition-all duration-300 rounded-xl"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{achievement.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-[var(--color-text)] text-lg">{achievement.title}</h4>
                        <span className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider bg-[var(--color-accent)]/10 px-2 py-1 rounded-full">{achievement.year}</span>
                      </div>
                      <p className="text-[var(--color-text-secondary)]">{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-[var(--font-heading)] text-2xl text-[var(--color-text)] mb-8">Core Competencies</h3>
            <div className="space-y-7">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-3">
                    <span className="text-base font-medium text-[var(--color-text)]">{skill.name}</span>
                    <span className="text-sm font-semibold text-[var(--color-accent)]">{skill.level}%</span>
                  </div>
                  <div className="h-2.5 bg-[var(--color-bg-secondary)] rounded-full overflow-hidden border border-[var(--color-border)]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-warm)] rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const Contact = () => {
  const contactInfo = [
    { label: "Email", value: "haneef.rotaract@gmail.com", icon: "✉️", href: "mailto:haneef.rotaract@gmail.com" },
    { label: "Location", value: "Colombo, Sri Lanka", icon: "📍", href: null },
    { label: "Club", value: "Rotaract Club of Colombo Mid Town", icon: "🎯", href: "https://www.rotaractcolomomidtown.org" }
  ]

  const socialLinks = [
    { name: "LinkedIn", url: "#" },
    { name: "Instagram", url: "#" },
    { name: "Facebook", url: "#" }
  ]

  return (
    <section id="contact" className="py-24 md:py-36 bg-[var(--color-bg-secondary)] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-[var(--color-accent)]/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-[var(--font-display)] text-xl md:text-2xl text-[var(--color-accent)] tracking-widest"
          >
            05
          </motion.span>
          
          <h2 className="font-[var(--font-display)] text-5xl sm:text-6xl md:text-7xl tracking-wide text-[var(--color-text)] mt-4 mb-8 leading-tight">
            Let's<br />
            <span className="text-[var(--color-accent)]">Connect</span>
          </h2>
          
          <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-12 leading-relaxed">
            Interested in collaborating on community projects or want to learn more about my Rotaract journey? I'd love to hear from you!
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {contactInfo.map((info, i) => (
              <motion.a
                key={i}
                href={info.href || '#'}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl hover:border-[var(--color-accent)]/30 hover:shadow-lg transition-all duration-300 group"
              >
                <span className="text-3xl mb-3 block">{info.icon}</span>
                <span className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider block mb-2">{info.label}</span>
                <span className="text-sm text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">{info.value}</span>
              </motion.a>
            ))}
          </div>
          
          <motion.a
            href="mailto:haneef.rotaract@gmail.com"
            className="inline-block font-[var(--font-heading)] text-2xl md:text-3xl italic text-[var(--color-text)] border-b-2 border-[var(--color-accent)] pb-2 hover:text-[var(--color-accent)] transition-colors mb-16"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            haneef.rotaract@gmail.com
          </motion.a>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4, color: 'var(--color-accent)' }}
                className="text-base font-medium uppercase tracking-[0.15em] text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <footer className="mt-24 md:mt-32 pt-8 border-t border-[var(--color-border)] text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="45" fill="none" stroke="var(--color-accent)" strokeWidth="2"/>
                <circle cx="50" cy="50" r="12" fill="var(--color-accent)"/>
                {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                  <line
                    key={i}
                    x1="50" y1="38"
                    x2="50" y2="15"
                    stroke="var(--color-accent)"
                    strokeWidth="3"
                    transform={`rotate(${angle} 50 50)`}
                  />
                ))}
              </svg>
            </div>
            <span className="text-[var(--color-text-muted)] font-[var(--font-display)] tracking-wider">ROTARACT</span>
          </div>
          <p className="text-sm text-[var(--color-text-muted)]">
            © {new Date().getFullYear()} Haneef Mohamed — Rotaract Club of Colombo Mid Town
          </p>
          <p className="text-xs text-[var(--color-text-muted)]/60 mt-2 uppercase tracking-widest">
            Service Above Self
          </p>
        </footer>
      </div>
    </section>
  )
}

function App() {
  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Journey />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </>
  )
}

export default App
