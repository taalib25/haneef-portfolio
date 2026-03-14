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
          <a href="#contact" className="px-5 py-2 bg-red-600 text-white text-sm font-bold uppercase tracking-wider hover:bg-red-700 transition-colors">
            Let's Talk
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
      {/* Bold background element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px]" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[800px] bg-zinc-900/50 rounded-full" />
      
      <div className="max-w-6xl mx-auto px-6 py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-red-500 font-bold tracking-[0.3em] uppercase mb-6">
            PR Strategist & Rotaract Leader
          </p>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tighter mb-8">
            HANEEF<br />
            <span className="text-zinc-700">MOHAMED</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-10 max-w-xl">
            Building narratives. Strengthening reputations. Leading with purpose.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-bold uppercase tracking-wider hover:bg-red-700 transition-all hover:scale-105">
              Get In Touch
            </a>
            <a href="#experience" className="inline-flex items-center justify-center px-8 py-4 border border-zinc-700 text-white font-bold uppercase tracking-wider hover:border-white transition-all">
              View Work
            </a>
          </div>
        </motion.div>
      </div>

      {/* Side stats */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-8 text-right">
        <div>
          <p className="text-4xl font-black text-white">7+</p>
          <p className="text-sm text-zinc-500 uppercase tracking-wider">Years Experience</p>
        </div>
        <div>
          <p className="text-4xl font-black text-white">50+</p>
          <p className="text-sm text-zinc-500 uppercase tracking-wider">Projects Led</p>
        </div>
        <div>
          <p className="text-4xl font-black text-white">5</p>
          <p className="text-sm text-zinc-500 uppercase tracking-wider">Awards Won</p>
        </div>
      </div>
    </section>
  )
}

// About Section
const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-red-500 font-bold tracking-[0.2em] uppercase mb-4">01 / About</p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-8">
              Transforming vision into <span className="text-red-600">impact</span>
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-zinc-300 leading-relaxed">
              I'm <span className="text-white font-semibold">Haneef Mohamed</span> — a PR professional and Rotaract leader passionate about building meaningful connections and strengthening reputations.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              With over 7 years of experience in developing and implementing marketing strategies, I bring flexibility and strong business relationships to every project. Learning and applying experiences in the real world is a constant in my life.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              My leadership philosophy centers on <span className="text-white font-semibold">Strategic Empathy</span> — understanding people before guiding them, creating environments where others can succeed.
            </p>
          </div>
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
        <p className="text-red-500 font-bold tracking-[0.2em] uppercase mb-4">02 / Experience</p>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-16">Track Record</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative pl-8 border-l-2 border-zinc-800 hover:border-red-600 transition-colors"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-zinc-800 group-hover:bg-red-600 rounded-full transition-colors" />
              
              <span className="text-sm text-zinc-500 font-medium mb-2 block">{exp.period}</span>
              <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
              <p className="text-red-500 font-semibold mb-3">{exp.company}</p>
              <p className="text-zinc-400 max-w-2xl">{exp.description}</p>
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
    <section id="achievements" className="py-24 md:py-32 bg-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-red-500 font-bold tracking-[0.2em] uppercase mb-4">03 / Recognition</p>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-12">Awards & Honors</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-black border border-zinc-800 p-8 hover:border-red-600/50 transition-all group"
            >
              <span className="text-4xl mb-4 block">{award.icon}</span>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">{award.title}</h3>
              <p className="text-zinc-500 text-sm">{award.org}</p>
              <p className="text-red-600 font-bold mt-3">{award.year}</p>
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
        <p className="text-red-500 font-bold tracking-[0.2em] uppercase mb-4">04 / Capabilities</p>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-12">Skills</h2>
        
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="px-6 py-3 bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium hover:bg-red-600 hover:text-white hover:border-red-600 transition-all cursor-default"
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
        <p className="text-red-500 font-bold tracking-[0.2em] uppercase mb-4">05 / Contact</p>
        <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Let's Work<br /><span className="text-red-600">Together</span></h2>
        <p className="text-xl text-zinc-400 mb-12">Ready to make an impact? Let's connect.</p>
        
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          <a href="tel:+94770447021" className="p-6 bg-zinc-900 border border-zinc-800 hover:border-red-600 transition-all group">
            <p className="text-zinc-500 text-sm uppercase mb-2">Phone</p>
            <p className="text-white font-bold group-hover:text-red-500 transition-colors">+94 77 044 7021</p>
          </a>
          <a href="mailto:haneef.rotaract3220@gmail.com" className="p-6 bg-zinc-900 border border-zinc-800 hover:border-red-600 transition-all group">
            <p className="text-zinc-500 text-sm uppercase mb-2">Email</p>
            <p className="text-white font-bold group-hover:text-red-500 transition-colors text-sm">haneef.rotaract3220<br />@gmail.com</p>
          </a>
          <div className="p-6 bg-zinc-900 border border-zinc-800">
            <p className="text-zinc-500 text-sm uppercase mb-2">Location</p>
            <p className="text-white font-bold">Colombo, Sri Lanka</p>
          </div>
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
