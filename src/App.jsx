import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Scroll Progress
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-red-600 z-50"
      style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
    />
  )
}

// Navigation
const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-sm border-b border-zinc-800' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-2xl font-black tracking-tighter text-white">
          HANEEF<span className="text-red-600">.</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors uppercase tracking-wider">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="px-4 py-2 bg-red-600 text-white text-sm font-bold uppercase tracking-wider hover:bg-red-700 transition-colors whitespace-nowrap">
            Contact
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-black/95 px-6 py-4 border-t border-zinc-800">
          {links.map(link => (
            <a key={link.name} href={link.href} className="block py-3 text-zinc-400 hover:text-white" onClick={() => setMobileOpen(false)}>
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

// Hero Section
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-black relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute left-1/4 top-1/4 w-[400px] h-[400px] bg-red-900/20 rounded-full blur-[100px]" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[800px] bg-zinc-900/50 rounded-full" />
      
      <div className="max-w-6xl mx-auto px-6 py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-red-500 font-bold tracking-[0.3em] uppercase mb-6 text-sm md:text-base"
          >
            PR Strategist & Rotaract Leader
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] tracking-tighter mb-8"
          >
            HANEEF<br />
            <span className="text-zinc-600">MOHAMED</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-10 max-w-xl"
          >
            Building narratives. Strengthening reputations. Leading with purpose.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-bold uppercase tracking-wider hover:bg-red-700 transition-all hover:scale-105 hover:shadow-lg hover:shadow-red-600/25">
              Get In Touch
            </a>
            <a href="#experience" className="inline-flex items-center justify-center px-8 py-4 border-2 border-zinc-700 text-white font-bold uppercase tracking-wider hover:border-red-600 hover:text-red-500 transition-all group">
              View Work
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-8 text-right">
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}>
          <p className="text-5xl font-black text-white">7+</p>
          <p className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Years Experience</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }}>
          <p className="text-5xl font-black text-white">50+</p>
          <p className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Projects Led</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }}>
          <p className="text-5xl font-black text-white">5</p>
          <p className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Awards Won</p>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-zinc-600 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1 h-2 bg-red-600 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

// About Section
const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-red-500 font-bold tracking-[0.2em] uppercase mb-4 text-sm">01 / About</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8">
              Transforming vision into <span className="text-red-600">impact</span>
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
              I'm <span className="text-white font-bold">Haneef Mohamed</span> — a PR professional and Rotaract leader passionate about building meaningful connections and strengthening reputations.
            </p>
            <p className="text-zinc-400 leading-relaxed text-lg">
              With over 7 years of experience in developing and implementing marketing strategies, I bring flexibility and strong business relationships to every project. Learning and applying experiences in the real world is a constant in my life.
            </p>
            <p className="text-zinc-400 leading-relaxed text-lg">
              My leadership philosophy centers on <span className="text-white font-bold">Strategic Empathy</span> — understanding people before guiding them, creating environments where others can succeed.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Experience Section  
const Experience = () => {
  const experiences = [
    {
      period: "May 2023 - Present",
      title: "Strategic PR & Reputation Executive",
      company: "PR Wire",
      description: "Developing and executing strategies to create and uphold positive public images for clients. Creating marketing communication strategies and building media relationships."
    },
    {
      period: "July 2022 - March 2023",
      title: "Business Development Executive", 
      company: "ChildFund Sri Lanka",
      description: "International development sector organization supporting over 200,000 children, youth, families and communities across 10 districts in Sri Lanka."
    },
    {
      period: "2024 - 2025",
      title: "President",
      company: "Rotaract Club of Colombo Mid Town",
      description: "Led team of 50 members. 10+ community projects. Achieved 20% increase in member satisfaction and 15% improvement in outcomes."
    },
    {
      period: "2019 - 2024",
      title: "Various Leadership Roles",
      company: "Rotaract Club of Colombo Mid Town",
      description: "Director PR, Club Service Director, International Service Director. Won awards for social media and digital communications (40% visibility increase)."
    }
  ]

  return (
    <section id="experience" className="py-24 md:py-32 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-red-500 font-bold tracking-[0.2em] uppercase mb-4 text-sm">02 / Experience</p>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-16">Track Record</h2>
        </motion.div>
        
        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative pl-8 md:pl-12 border-l-2 border-zinc-800 hover:border-red-600 transition-all duration-300"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-zinc-800 group-hover:bg-red-600 rounded-full transition-colors duration-300" />
              
              <div className="flex flex-col md:flex-row md:items-baseline md:gap-6 mb-3">
                <span className="text-sm text-zinc-500 font-medium mb-1 md:mb-0">{exp.period}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">{exp.title}</h3>
              <p className="text-red-500 font-semibold mb-3 text-lg">{exp.company}</p>
              <p className="text-zinc-400 max-w-2xl leading-relaxed">{exp.description}</p>
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
    { title: "Most Popular Rotaractor", year: "2025", org: "Rotaract District Conference", icon: "🏆" },
    { title: "Volunteer of the Year", year: "2024", org: "New Generations Asia Awards", icon: "⭐" },
    { title: "Best Team Leader", year: "2023", org: "RYLA", icon: "👑" },
    { title: "Social Media Campaign", year: "2020", org: "Silver Award", icon: "📱" },
    { title: "Digital Communications", year: "2020", org: "Bronze Award", icon: "💬" }
  ]

  return (
    <section id="achievements" className="py-24 md:py-32 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-red-500 font-bold tracking-[0.2em] uppercase mb-4 text-sm">03 / Recognition</p>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-12">Awards & Honors</h2>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-black border border-zinc-800 p-8 hover:border-red-600 hover:shadow-lg hover:shadow-red-600/10 transition-all duration-300 group"
            >
              <span className="text-5xl mb-6 block">{award.icon}</span>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">{award.title}</h3>
              <p className="text-zinc-500 text-sm mb-3">{award.org}</p>
              <p className="text-red-600 font-black text-2xl">{award.year}</p>
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
    "Team Leadership", "Project Management", "Event Planning", "Communication",
    "Public Speaking", "Fundraising", "Volunteer Coordination", "Community Outreach",
    "Collaboration", "Problem-Solving", "Time Management"
  ]

  return (
    <section id="skills" className="py-24 md:py-32 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-red-500 font-bold tracking-[0.2em] uppercase mb-4 text-sm">04 / Capabilities</p>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-12">Skills</h2>
        </motion.div>
        
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Section
const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-red-500 font-bold tracking-[0.2em] uppercase mb-4 text-sm">05 / Contact</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8">Let's Work<br /><span className="text-red-600">Together</span></h2>
          <p className="text-xl text-zinc-400 mb-12">Ready to make an impact? Let's connect.</p>
        </motion.div>
        
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          <motion.a 
            href="tel:+94770447021" 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="p-6 bg-zinc-900 border border-zinc-800 hover:border-red-600 transition-all duration-300 group"
          >
            <p className="text-zinc-500 text-sm uppercase mb-2 tracking-wider">Phone</p>
            <p className="text-white font-bold group-hover:text-red-500 transition-colors">+94 77 044 7021</p>
          </motion.a>
          <motion.a 
            href="mailto:haneef.rotaract3220@gmail.com" 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="p-6 bg-zinc-900 border border-zinc-800 hover:border-red-600 transition-all duration-300 group"
          >
            <p className="text-zinc-500 text-sm uppercase mb-2 tracking-wider">Email</p>
            <p className="text-white font-bold group-hover:text-red-500 transition-colors text-sm">haneef.rotaract3220<br />@gmail.com</p>
          </motion.a>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            whileHover={{ y: -5 }}
            className="p-6 bg-zinc-900 border border-zinc-800 hover:border-red-600 transition-all duration-300"
          >
            <p className="text-zinc-500 text-sm uppercase mb-2 tracking-wider">Location</p>
            <p className="text-white font-bold">Colombo, Sri Lanka</p>
          </motion.div>
        </div>

        <p className="text-zinc-600 text-sm">
          © {new Date().getFullYear()} Haneef Mohamed. All rights reserved.
        </p>
      </div>
    </section>
  )
}

// Main App
function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Achievements />
      <Skills />
      <Contact />
    </div>
  )
}

export default App
