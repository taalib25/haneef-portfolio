import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Scroll progress
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div 
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-red-600 to-red-400 z-50" 
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
    <nav className={`navbar fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-neutral/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-2xl font-bold tracking-tight text-white">
            HANEEF<span className="text-red-500">.</span>
          </a>
          
          <div className="hidden md:flex items-center gap-6">
            {links.map(link => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-neutral-content hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
            <a href="#contact" className="btn btn-primary btn-sm gap-2">
              Contact
            </a>
          </div>

          <label className="md:hidden swap swap-rotate">
            <input type="checkbox" checked={mobileOpen} onChange={(e) => setMobileOpen(e.target.checked)} />
            <svg className="swap-off fill-current w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5,6H19V8H5V6M5,11H19V13H5V11M5,16H19V18H5V16Z"/></svg>
          </label>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {links.map(link => (
              <a key={link.name} href={link.href} className="block py-2 text-neutral-content hover:text-white" onClick={() => setMobileOpen(false)}>
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

// Hero Section
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-[#0a0a0a] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -right-40 w-[500px] h-[500px] bg-red-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -left-40 w-[400px] h-[400px] bg-red-500/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 py-32 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="badge badge-outline badge-lg text-red-500 border-red-500 mb-6">
            PR Strategist & Rotaract Leader
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black text-white leading-none tracking-tight mb-4">
            HANEEF<br />
            <span className="text-neutral/50">MOHAMED</span>
          </h1>
          
          <p className="text-2xl text-neutral-content font-light mb-10 max-w-xl">
            Building narratives. Strengthening reputations. Leading with purpose.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="btn btn-primary btn-lg gap-2">
              Get in Touch
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="#experience" className="btn btn-outline btn-lg text-white border-neutral">
              View Experience
            </a>
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="absolute bottom-0 left-0 right-0 bg-neutral/20 backdrop-blur-sm border-t border-neutral/30">
        <div className="max-w-6xl mx-auto px-6 py-6 flex gap-12">
          <div>
            <p className="text-4xl font-bold text-white">7+</p>
            <p className="text-xs text-neutral-content uppercase tracking-widest">Years</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-white">50+</p>
            <p className="text-xs text-neutral-content uppercase tracking-widest">Projects</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-white">5</p>
            <p className="text-xs text-neutral-content uppercase tracking-widest">Awards</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// About Section
const About = () => {
  return (
    <section id="about" className="py-24 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="badge badge-primary badge-outline mb-4">01 / About</div>
            <h2 className="text-5xl font-bold text-white mb-8">About Me</h2>
          </div>
          <div className="space-y-6 text-neutral-content leading-relaxed">
            <p className="text-lg">
              I'm <span className="text-white font-semibold">Haneef Mohamed</span> — a PR professional and Rotaract leader passionate about building meaningful connections and strengthening reputations.
            </p>
            <p>
              Over several years of experience in developing and implementing marketing strategies for various industries. I am flexible and do have a good business relationship with the people I work with.
            </p>
            <p>
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
    { period: "May 2023 - Present", title: "Strategic PR & Reputation Executive", company: "PR Wire", description: "Develop and execute strategies to create and uphold positive public image for clients. Support execution of PR strategy, reviewing all PR activities seasonally. Create marketing communication strategies with marketing team. Build relationships with target audience, external partners, and key media outlets." },
    { period: "July 2022 - March 2023", title: "Business Development Executive", company: "ChildFund Sri Lanka", description: "International development sector organization working with children and youth. Operating in ten districts, supporting over 200,000 children, youth, families and communities." },
    { period: "2024 - 2025", title: "President", company: "Rotaract Club of Colombo Mid Town", description: "Led a team of 50 members, overseeing the execution of 10+ community service projects, resulting in a 20% increase in member satisfaction and a 15% improvement in project outcomes." },
    { period: "2023 - 2024", title: "Sergeant At Arms", company: "Rotaract Club of Colombo Mid Town", description: "Maintained order and facilitated smooth club operations." },
    { period: "2022 - 2023", title: "Club Service Director", company: "Rotaract Club of Colombo Mid Town", description: "Spearheaded a new outreach strategy that boosted new member enrollment by 30% within one year." },
    { period: "2019 - 2020", title: "Director Public Relations", company: "Rotaract Club of Colombo Mid Town", description: "Efforts resulting in 2 prestigious awards for Most Outstanding Social Media Campaign and Most Outstanding Digital Communications, increasing club visibility by 40%." }
  ]

  return (
    <section id="experience" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="badge badge-primary badge-outline mb-4">02 / Experience</div>
        <h2 className="text-5xl font-bold text-white mb-16">Experience</h2>
        
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-red-500 to-transparent" />
          
          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-12 py-6 group"
              >
                <div className="absolute left-2 top-8 w-4 h-4 rounded-full bg-neutral border-4 border-[#0a0a0a] group-hover:bg-red-500 transition-colors" />
                
                <div className="badge badge-ghost badge-sm mb-2">{exp.period}</div>
                <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                <div className="text-red-500 text-sm font-medium mb-2">{exp.company}</div>
                <p className="text-neutral-content text-sm leading-relaxed max-w-2xl">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Achievements Section
const Achievements = () => {
  const achievements = [
    { title: "Most Popular Rotaractor", year: "2025", org: "Rotaract District Conference" },
    { title: "Volunteer of the Year", year: "2024", org: "New Generations Asia Awards" },
    { title: "Best Team Leader", year: "2023", org: "RYLA" },
    { title: "Social Media Campaign", year: "2020", org: "Silver Award" },
    { title: "Digital Communications", year: "2020", org: "Bronze Award" }
  ]

  return (
    <section id="achievements" className="py-24 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="badge badge-primary badge-outline mb-4">03 / Recognition</div>
        <h2 className="text-5xl font-bold text-white mb-12">Awards & Honors</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card bg-neutral/50 border border-neutral hover:border-red-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="card-body">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">🏅</span>
                  <span className="badge badge-primary badge-outline">{award.year}</span>
                </div>
                <h3 className="card-title text-white">{award.title}</h3>
                <p className="text-neutral-content text-sm">{award.org}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Skills Section
const Skills = () => {
  const skills = ["Team Leadership", "Project Management", "Event Planning", "Communication", "Public Speaking", "Fundraising", "Volunteer Coordination", "Community Outreach", "Collaboration", "Problem-Solving", "Time Management"]

  return (
    <section id="skills" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="badge badge-primary badge-outline mb-4">04 / Capabilities</div>
        <h2 className="text-5xl font-bold text-white mb-12">Skills</h2>
        
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="badge badge-lg badge-outline text-neutral-content hover:bg-red-500 hover:text-white hover:border-red-500 transition-all cursor-pointer p-4"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Education Section
const Education = () => {
  const education = [
    { title: "Diploma in Marketing", institution: "CIM at Strategy College of Business" },
    { title: "Primary & Secondary Education", institution: "Amal International School" }
  ]

  return (
    <section className="py-24 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="badge badge-primary badge-outline mb-4">05 / Education</div>
        <h2 className="text-5xl font-bold text-white mb-12">Education</h2>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {education.map((edu, i) => (
            <div key={i} className="card bg-neutral/50 border border-neutral hover:border-red-500/30 transition-colors">
              <div className="card-body">
                <h3 className="card-title text-white">{edu.title}</h3>
                <p className="text-neutral-content">{edu.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Section
const Contact = () => {
  const contacts = [
    { label: "Phone", value: "+94 77 044 7021", href: "tel:+94770447021", icon: "📞" },
    { label: "Email", value: "haneef.rotaract3220@gmail.com", href: "mailto:haneef.rotaract3220@gmail.com", icon: "✉️" },
    { label: "Location", value: "Colombo, Sri Lanka", href: null, icon: "📍" }
  ]

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="badge badge-primary badge-outline mb-4">06 / Contact</div>
        <h2 className="text-5xl font-bold text-white mb-6">Get In Touch</h2>
        <p className="text-xl text-neutral-content mb-16">Ready to make an impact? Let's connect.</p>
        
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {contacts.map((contact, i) => (
            contact.href ? (
              <a 
                key={i} 
                href={contact.href}
                className="card bg-neutral/50 border border-neutral hover:border-red-500 hover:-translate-y-1 transition-all group"
              >
                <div className="card-body items-center py-8">
                  <span className="text-3xl mb-3">{contact.icon}</span>
                  <p className="text-xs text-neutral-content uppercase tracking-wider mb-1">{contact.label}</p>
                  <p className="text-white font-medium text-sm">{contact.value}</p>
                </div>
              </a>
            ) : (
              <div key={i} className="card bg-neutral/50 border border-neutral">
                <div className="card-body items-center py-8">
                  <span className="text-3xl mb-3">{contact.icon}</span>
                  <p className="text-xs text-neutral-content uppercase tracking-wider mb-1">{contact.label}</p>
                  <p className="text-white font-medium text-sm">{contact.value}</p>
                </div>
              </div>
            )
          ))}
        </div>

        <p className="text-neutral-content/50 text-sm">
          © {new Date().getFullYear()} Haneef Mohamed. All rights reserved.
        </p>
      </div>
    </section>
  )
}

// Main App
function App() {
  return (
    <div data-theme="night" className="bg-[#0a0a0a] min-h-screen text-white">
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
