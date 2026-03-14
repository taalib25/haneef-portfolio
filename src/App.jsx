import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion'

// Smooth scroll progress bar
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-hover)] origin-left z-[1000]"
      style={{ scaleX }}
    />
  )
}

// Navigation
const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[var(--color-bg)]/95 backdrop-blur-md border-b border-[var(--color-border)]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <motion.a 
            href="#"
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xl sm:text-2xl font-bold text-[var(--color-text)] tracking-wider">
              HANEEF
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[var(--color-text)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pb-4"
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

// Section Header Component
const SectionHeader = ({ label, title, subtitle }) => (
  <div className="mb-12 sm:mb-16">
    <span className="text-sm font-medium text-[var(--color-accent)] uppercase tracking-widest">{label}</span>
    <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl text-[var(--color-text)] mt-2">{title}</h2>
    {subtitle && <p className="text-[var(--color-text-secondary)] mt-3 max-w-xl">{subtitle}</p>}
  </div>
)

// Hero Section
const Hero = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 sm:w-80 sm:h-80 bg-[var(--color-accent)]/5 rounded-full blur-3xl" />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-3xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block text-xs sm:text-sm font-medium text-[var(--color-accent)] uppercase tracking-[0.2em] mb-4"
        >
          PR Strategist & Rotaract Leader
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-bold text-5xl sm:text-7xl lg:text-8xl leading-none text-[var(--color-text)] mb-4"
        >
          HANEEF
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg sm:text-xl text-[var(--color-text-secondary)] mb-8"
        >
          Building Narratives, Strengthening Reputations
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-[var(--color-text-secondary)] max-w-lg mx-auto mb-10 text-sm sm:text-base"
        >
          Strategic PR & Reputation Executive with 7+ years leading impactful community service projects and building meaningful connections.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-[var(--color-accent)] text-white font-medium text-sm uppercase tracking-wider hover:bg-[var(--color-accent-hover)]"
          >
            Get In Touch
          </a>
          <a
            href="#experience"
            className="inline-block px-6 py-3 border-2 border-[var(--color-border)] text-[var(--color-text)] font-medium text-sm uppercase tracking-wider hover:border-[var(--color-accent)]"
          >
            View Experience
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

// About Section
const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[var(--color-bg-secondary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="01" title="About Me" />
        
        <div className="max-w-3xl">
          <p className="text-lg sm:text-xl text-[var(--color-text)] leading-relaxed mb-6">
            I'm <span className="text-[var(--color-accent)]">Haneef Mohamed</span> — a PR professional and Rotaract leader passionate about building narratives and strengthening reputations.
          </p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
            Over several years of experience in developing and implementing marketing strategies for various industries. I am flexible and have good business relationships with the people I work with.
          </p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            Learning and applying my experiences in the real world are a constant in my life. I ensure that the wheel of this learning process keeps turning and my work shows this dedication.
          </p>
        </div>
      </div>
    </section>
  )
}

// Experience Section
const Experience = () => {
  const experiences = [
    {
      year: "May 2023 - Present",
      title: "Strategic PR & Reputation Executive",
      company: "PR Wire",
      description: "Develop and execute strategies to create and uphold a positive public image for clients. Support execution of PR strategy, reviewing all PR activities seasonally. Create marketing communication strategies with marketing team. Build relationships with target audience, external partners, and key media outlets.",
      icon: "💼"
    },
    {
      year: "July 2022 - March 2023",
      title: "Business Development Executive",
      company: "ChildFund Sri Lanka",
      description: "International development sector organization working with children and youth. Operating in ten districts, supporting over 200,000 children, youth, families and communities.",
      icon: "👥"
    },
    {
      year: "2024 - 2025",
      title: "President",
      company: "Rotaract Club of Colombo Mid Town",
      description: "Led a team of 50 members, 10+ community service projects. Achieved 20% increase in member satisfaction and 15% improvement in project outcomes.",
      icon: "🎯"
    },
    {
      year: "2023 - 2024",
      title: "Sergeant At Arms",
      company: "Rotaract Club of Colombo Mid Town",
      description: "Maintained order and facilitated smooth club operations.",
      icon: "⚖️"
    },
    {
      year: "2022 - 2023",
      title: "Club Service Director",
      company: "Rotaract Club of Colombo Mid Town",
      description: "Spearheaded new outreach strategy that boosted new member enrollment by 30% within one year.",
      icon: "🤝"
    },
    {
      year: "2019 - 2020",
      title: "Director Public Relations",
      company: "Rotaract Club of Colombo Mid Town",
      description: "Efforts resulting in 2 prestigious awards - Most Outstanding Social Media Campaign and Most Outstanding Digital Communications, increasing club visibility by 40%.",
      icon: "📣"
    }
  ]

  return (
    <section id="experience" className="py-16 sm:py-24 bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="02" title="Experience" />
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-5 sm:p-6 border border-[var(--color-border)] bg-[var(--color-bg-secondary)] hover:border-[var(--color-accent)]/30 transition-all duration-300 rounded-xl"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">{exp.icon}</span>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-lg text-[var(--color-text)]">{exp.title}</h3>
                    <span className="text-xs text-[var(--color-accent)] uppercase tracking-wider whitespace-nowrap">{exp.year}</span>
                  </div>
                  <p className="text-[var(--color-accent)] text-sm mb-3">{exp.company}</p>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Achievements Section
const Achievements = () => {
  const achievements = [
    { 
      title: "Most Popular Rotaractor", 
      year: "2025",
      description: "Rotaract District Conference",
      icon: "🏆"
    },
    { 
      title: "Volunteer of the Year", 
      year: "2024",
      description: "New Generations Asia Awards",
      icon: "⭐"
    },
    { 
      title: "Best Team Leader", 
      year: "2023",
      description: "RYLA",
      icon: "👑"
    },
    { 
      title: "Most Outstanding Social Media Campaign", 
      year: "2020",
      description: "Silver Award",
      icon: "📱"
    },
    { 
      title: "Most Outstanding Digital Communications", 
      year: "2020",
      description: "Bronze Award",
      icon: "💬"
    }
  ]

  return (
    <section id="achievements" className="py-16 sm:py-24 bg-[var(--color-bg-secondary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="03" title="Achievements" />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-5 border border-[var(--color-border)] bg-[var(--color-bg)] hover:border-[var(--color-accent)]/50 transition-all duration-300 rounded-xl text-center"
            >
              <span className="text-4xl mb-3 block">{achievement.icon}</span>
              <h4 className="font-semibold text-[var(--color-text)] mb-1">{achievement.title}</h4>
              <p className="text-[var(--color-accent)] text-sm mb-2">{achievement.year}</p>
              <p className="text-[var(--color-text-secondary)] text-sm">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Skills Section
const Skills = () => {
  const skills = [
    "Team Leadership", "Project Management", "Event Planning", 
    "Communication", "Public Speaking", "Fundraising", 
    "Volunteer Coordination", "Community Outreach", "Collaboration", 
    "Problem-Solving", "Time Management"
  ]

  return (
    <section id="skills" className="py-16 sm:py-24 bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="04" title="Skills" />
        
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className="px-4 py-2 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-[var(--color-text)] text-sm rounded-full hover:border-[var(--color-accent)] transition-colors"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}

// Education Section
const Education = () => {
  const education = [
    {
      title: "Diploma in Marketing",
      institution: "CIM at Strategy College of Business"
    },
    {
      title: "Primary & Secondary Education",
      institution: "Amal International School"
    }
  ]

  return (
    <section className="py-16 sm:py-24 bg-[var(--color-bg-secondary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="05" title="Education" />
        
        <div className="space-y-4 max-w-2xl">
          {education.map((edu, index) => (
            <div key={index} className="p-5 border border-[var(--color-border)] bg-[var(--color-bg)] rounded-xl">
              <h4 className="font-semibold text-[var(--color-text)]">{edu.title}</h4>
              <p className="text-[var(--color-text-secondary)] text-sm">{edu.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Section
const Contact = () => {
  const contactInfo = [
    { label: "Phone", value: "+94 77 044 7021", icon: "📱", href: "tel:+94770447021" },
    { label: "Email", value: "haneef.rotaract3220@gmail.com", icon: "✉️", href: "mailto:haneef.rotaract3220@gmail.com" },
    { label: "Location", value: "Colombo, Sri Lanka", icon: "📍", href: null }
  ]

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[var(--color-bg)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader label="06" title="Get In Touch" />
        
        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.href || '#'}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`p-6 border border-[var(--color-border)] bg-[var(--color-bg-secondary)] hover:border-[var(--color-accent)]/50 transition-all duration-300 rounded-xl ${!info.href ? 'cursor-default' : ''}`}
            >
              <span className="text-3xl mb-3 block">{info.icon}</span>
              <p className="text-xs text-[var(--color-accent)] uppercase tracking-wider mb-1">{info.label}</p>
              <p className="text-[var(--color-text)] text-sm break-all">{info.value}</p>
            </motion.a>
          ))}
        </div>

        <p className="text-[var(--color-text-secondary)] text-sm">
          © {new Date().getFullYear()} Haneef Mohamed — Rotaract Club of Colombo Mid Town
        </p>
      </div>
    </section>
  )
}

// Main App
function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Achievements />
      <Skills />
      <Education />
      <Contact />
    </div>
  )
}

export default App
