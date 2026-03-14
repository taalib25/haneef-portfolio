import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Phone, Mail, MapPin, Linkedin, Twitter, Award, Users, TrendingUp, Briefcase } from 'lucide-react'

// Scroll progress
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
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all ${scrolled ? 'bg-[#0a0a0a]/95 border-b border-zinc-800' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight text-white">
          HANEEF<span className="text-red-600">.</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="px-4 py-2 bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition-colors flex items-center gap-2">
            Contact <ArrowRight size={14} />
          </a>
        </div>

        <button className="md:hidden text-white p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#0a0a0a] px-6 py-4 border-t border-zinc-800">
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

// Hero
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-[#0a0a0a] relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-red-600/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 py-32 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-red-500 font-semibold tracking-widest uppercase text-sm mb-4">
            PR Strategist & Rotaract Leader
          </p>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-none tracking-tight mb-6">
            HANEEF<br />
            <span className="text-zinc-600">MOHAMED</span>
          </h1>
          
          <p className="text-xl text-zinc-400 mb-8 max-w-lg">
            Building narratives. Strengthening reputations. Leading with purpose.
          </p>
          
          <div className="flex gap-4">
            <a href="#contact" className="px-6 py-3 bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors inline-flex items-center gap-2">
              Get in Touch <ArrowRight size={16} />
            </a>
            <a href="#experience" className="px-6 py-3 border border-zinc-700 text-white font-semibold hover:border-zinc-500 transition-colors">
              View Experience
            </a>
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="absolute bottom-10 left-6 right-6 max-w-6xl mx-auto flex gap-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center">
            <Users className="text-red-500" size={18} />
          </div>
          <div>
            <p className="text-2xl font-bold text-white">7+</p>
            <p className="text-xs text-zinc-500 uppercase tracking-wider">Years</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center">
            <Briefcase className="text-red-500" size={18} />
          </div>
          <div>
            <p className="text-2xl font-bold text-white">50+</p>
            <p className="text-xs text-zinc-500 uppercase tracking-wider">Projects</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center">
            <Award className="text-red-500" size={18} />
          </div>
          <div>
            <p className="text-2xl font-bold text-white">5</p>
            <p className="text-xs text-zinc-500 uppercase tracking-wider">Awards</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// About
const About = () => {
  return (
    <section id="about" className="py-20 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-red-500 font-semibold text-sm tracking-widest uppercase mb-2">01 / About</p>
            <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
          </div>
          <div className="space-y-4 text-zinc-400 leading-relaxed">
            <p>
              I'm <span className="text-white font-medium">Haneef Mohamed</span> — a PR professional and Rotaract leader passionate about building meaningful connections and strengthening reputations.
            </p>
            <p>
              With over 7 years of experience in developing and implementing marketing strategies, I bring flexibility and strong business relationships to every project.
            </p>
            <p>
              My leadership philosophy centers on <span className="text-white font-medium">Strategic Empathy</span> — understanding people before guiding them, creating environments where others can succeed.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Experience
const Experience = () => {
  const experiences = [
    {
      period: "May 2023 - Present",
      title: "Strategic PR & Reputation Executive",
      company: "PR Wire",
      description: "Develop and execute strategies to create and uphold positive public image for clients. Create marketing communication strategies and build media relationships."
    },
    {
      period: "July 2022 - March 2023",
      title: "Business Development Executive", 
      company: "ChildFund Sri Lanka",
      description: "International development sector organization supporting over 200,000 children, youth, families and communities across 10 districts."
    },
    {
      period: "2024 - 2025",
      title: "President",
      company: "Rotaract Club of Colombo Mid Town",
      description: "Led team of 50 members, 10+ community projects. Achieved 20% increase in member satisfaction and 15% improvement in outcomes."
    },
    {
      period: "2019 - 2024",
      title: "Leadership Roles",
      company: "Rotaract Club of Colombo Mid Town",
      description: "Director PR, Club Service Director, International Service Director. Won awards for social media and digital communications (40% visibility increase)."
    }
  ]

  return (
    <section id="experience" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-red-500 font-semibold text-sm tracking-widest uppercase mb-2">02 / Experience</p>
        <h2 className="text-4xl font-bold text-white mb-12">Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              <div className="w-24 flex-shrink-0">
                <span className="text-sm text-zinc-500">{exp.period}</span>
              </div>
              <div className="flex-1 pb-8 border-b border-zinc-800">
                <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                <p className="text-red-500 text-sm mb-2">{exp.company}</p>
                <p className="text-zinc-400 text-sm leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Achievements
const Achievements = () => {
  const achievements = [
    { title: "Most Popular Rotaractor", year: "2025", org: "Rotaract District Conference" },
    { title: "Volunteer of the Year", year: "2024", org: "New Generations Asia Awards" },
    { title: "Best Team Leader", year: "2023", org: "RYLA" },
    { title: "Social Media Campaign", year: "2020", org: "Silver Award" },
    { title: "Digital Communications", year: "2020", org: "Bronze Award" }
  ]

  return (
    <section id="achievements" className="py-20 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-red-500 font-semibold text-sm tracking-widest uppercase mb-2">03 / Recognition</p>
        <h2 className="text-4xl font-bold text-white mb-12">Awards & Honors</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] border border-zinc-800 p-6 hover:border-red-600/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <Award className="text-red-600" size={24} />
                <span className="text-red-500 font-semibold">{award.year}</span>
              </div>
              <h3 className="text-white font-semibold mb-1">{award.title}</h3>
              <p className="text-zinc-500 text-sm">{award.org}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Skills
const Skills = () => {
  const skills = [
    "Team Leadership", "Project Management", "Event Planning", "Communication",
    "Public Speaking", "Fundraising", "Volunteer Coordination", "Community Outreach",
    "Collaboration", "Problem-Solving", "Time Management"
  ]

  return (
    <section id="skills" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-red-500 font-semibold text-sm tracking-widest uppercase mb-2">04 / Capabilities</p>
        <h2 className="text-4xl font-bold text-white mb-8">Skills</h2>
        
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-[#1a1a1a] border border-zinc-800 text-zinc-300 text-sm font-medium hover:border-red-600 hover:text-white transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

// Education
const Education = () => {
  const education = [
    { title: "Diploma in Marketing", institution: "CIM at Strategy College of Business" },
    { title: "Primary & Secondary Education", institution: "Amal International School" }
  ]

  return (
    <section className="py-20 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-red-500 font-semibold text-sm tracking-widest uppercase mb-2">05 / Education</p>
        <h2 className="text-4xl font-bold text-white mb-8">Education</h2>
        
        <div className="space-y-4 max-w-2xl">
          {education.map((edu, i) => (
            <div key={i} className="bg-[#1a1a1a] border border-zinc-800 p-4">
              <h3 className="text-white font-semibold">{edu.title}</h3>
              <p className="text-zinc-500 text-sm">{edu.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact
const Contact = () => {
  const contacts = [
    { icon: Phone, label: "Phone", value: "+94 77 044 7021", href: "tel:+94770447021" },
    { icon: Mail, label: "Email", value: "haneef.rotaract3220@gmail.com", href: "mailto:haneef.rotaract3220@gmail.com" },
    { icon: MapPin, label: "Location", value: "Colombo, Sri Lanka", href: null }
  ]

  return (
    <section id="contact" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-red-500 font-semibold text-sm tracking-widest uppercase mb-2">06 / Contact</p>
        <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
        <p className="text-zinc-400 mb-12">Ready to make an impact? Let's connect.</p>
        
        <div className="grid sm:grid-cols-3 gap-4">
          {contacts.map((contact, i) => {
            const Icon = contact.icon
            return contact.href ? (
              <a
                key={i}
                href={contact.href}
                className="bg-[#1a1a1a] border border-zinc-800 p-6 hover:border-red-600 transition-colors group"
              >
                <Icon className="text-red-600 mx-auto mb-3" size={24} />
                <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">{contact.label}</p>
                <p className="text-white font-medium text-sm">{contact.value}</p>
              </a>
            ) : (
              <div key={i} className="bg-[#1a1a1a] border border-zinc-800 p-6">
                <Icon className="text-red-600 mx-auto mb-3" size={24} />
                <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">{contact.label}</p>
                <p className="text-white font-medium text-sm">{contact.value}</p>
              </div>
            )
          })}
        </div>

        <p className="text-zinc-600 text-sm mt-12">
          &copy; {new Date().getFullYear()} Haneef Mohamed. All rights reserved.
        </p>
      </div>
    </section>
  )
}

// Main
function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white font-sans">
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
