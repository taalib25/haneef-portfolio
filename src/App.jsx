import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

// Scroll progress
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div 
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#D69E2E] to-[#B7791F] z-50" 
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
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-[#1A365D]/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-2xl font-bold tracking-tight text-[#1A365D]" style={{ fontFamily: 'Playfair Display, serif' }}>
            HANEEF<span className="text-[#D69E2E]">.</span>
          </a>
          
          <div className="hidden md:flex items-center gap-6">
            {links.map(link => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-[#1A365D] hover:text-[#D69E2E] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                {link.name}
              </a>
            ))}
            <a href="#contact" className="btn btn-sm gap-2 bg-[#1A365D] text-white border-none hover:bg-[#D69E2E]">
              Contact
            </a>
          </div>

          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            <svg className="w-6 h-6 text-[#1A365D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {links.map(link => (
              <a key={link.name} href={link.href} className="block py-2 text-[#1A365D]" onClick={() => setMobileOpen(false)}>
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

// Journey Path Component
const JourneyPath = ({ type, isActive }) => {
  const paths = {
    professional: [
      { year: "2019", title: "Director Public Relations", org: "Rotaract Club of Colombo Mid Town", award: "2 Prestigious Awards" },
      { year: "2022", title: "Business Development Executive", org: "ChildFund Sri Lanka" },
      { year: "2023", title: "Strategic PR & Reputation Executive", org: "PR Wire" },
      { year: "Present", title: "Building Brands", org: "Corporate Communications" }
    ],
    volunteer: [
      { year: "2019", title: "Director Public Relations", org: "Rotaract Club of Colombo Mid Town" },
      { year: "2022", title: "Club Service Director", org: "Rotaract Club of Colombo Mid Town" },
      { year: "2023", title: "Sergeant At Arms", org: "Rotaract Club of Colombo Mid Town" },
      { year: "2024", title: "President", org: "Rotaract Club of Colombo Mid Town" }
    ]
  }

  return (
    <div className="relative pl-8">
      {/* Animated path line */}
      <motion.div 
        className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#D69E2E] via-[#B7791F] to-[#1A365D]"
        initial={{ height: 0 }}
        animate={{ height: '100%' }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      
      <div className="space-y-6">
        {paths[type].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -20 }}
            transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -left-6 top-2 w-4 h-4 rounded-full bg-white border-2 border-[#D69E2E]" />
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg border-l-4 border-[#D69E2E] hover:shadow-xl transition-shadow">
              <span className="text-xs font-bold text-[#D69E2E] uppercase tracking-wider">{item.year}</span>
              <h4 className="text-[#1A365D] font-semibold mt-1" style={{ fontFamily: 'Playfair Display, serif' }}>{item.title}</h4>
              <p className="text-sm text-gray-600">{item.org}</p>
              {item.award && (
                <span className="inline-block mt-2 text-xs bg-[#D69E2E] text-white px-2 py-1 rounded-full">🏆 {item.award}</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// Stats Component
const Stats = ({ type }) => {
  const stats = {
    professional: [
      { value: "7+", label: "Years Experience" },
      { value: "50+", label: "Projects Delivered" },
      { value: "5", label: "Industry Awards" }
    ],
    volunteer: [
      { value: "50+", label: "Members Led" },
      { value: "10+", label: "Projects Executed" },
      { value: "3", label: "Club Roles" }
    ]
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {stats[type].map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + i * 0.1 }}
          className="text-center"
        >
          <p className="text-3xl font-bold text-[#1A365D]" style={{ fontFamily: 'Playfair Display, serif' }}>{stat.value}</p>
          <p className="text-xs text-gray-600 uppercase tracking-wider">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  )
}

// Hero Section - Redesigned
const Hero = () => {
  const [activeTab, setActiveTab] = useState('professional')

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-[#F7F5F0] via-white to-[#EDE8DF] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-[400px] h-[400px] bg-[#D69E2E]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 -left-20 w-[300px] h-[300px] bg-[#1A365D]/10 rounded-full blur-[80px]" />
        
        {/* Subtle geometric pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1A365D" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-32 relative z-10 w-full">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-[#1A365D] text-white text-xs font-medium rounded-full mb-6">
            PR Strategist & Rotaract Leader
          </span>
          
          <h1 className="text-6xl md:text-8xl font-black text-[#1A365D] leading-none tracking-tight mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            HANEEEF<br />
            <span className="text-[#D69E2E]">MOHAMED</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 font-light mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
            Building narratives. Strengthening reputations. Leading with purpose.
          </p>
          
          {/* Toggle Tabs */}
          <div className="inline-flex bg-white rounded-full p-1 shadow-lg border border-gray-200">
            <button
              onClick={() => setActiveTab('professional')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'professional' 
                  ? 'bg-[#1A365D] text-white shadow-md' 
                  : 'text-gray-600 hover:text-[#1A365D]'
              }`}
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              💼 Professional
            </button>
            <button
              onClick={() => setActiveTab('volunteer')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'volunteer' 
                  ? 'bg-[#D69E2E] text-white shadow-md' 
                  : 'text-gray-600 hover:text-[#D69E2E]'
              }`}
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              🎯 Volunteer
            </button>
          </div>
        </motion.div>

        {/* Journey Visualization */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Left - Journey Path */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{activeTab === 'professional' ? '💼' : '🎯'}</span>
              <h3 className="text-xl font-bold text-[#1A365D]" style={{ fontFamily: 'Playfair Display, serif' }}>
                {activeTab === 'professional' ? 'The Professional Journey' : 'The Volunteer Journey'}
              </h3>
            </div>
            
            <AnimatePresence mode="wait">
              <JourneyPath key={activeTab} type={activeTab} isActive={true} />
            </AnimatePresence>
          </motion.div>

          {/* Right - Stats & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Stats */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-gray-100">
              <h4 className="text-lg font-semibold text-[#1A365D] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Key Metrics</h4>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Stats type={activeTab} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Highlight Card */}
            <motion.div 
              key={`${activeTab}-highlight`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-[#1A365D] to-[#2D4A7C] rounded-2xl p-6 shadow-xl text-white"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl">⭐</span>
                <div>
                  <h4 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {activeTab === 'professional' ? 'Current Role' : 'Current Leadership'}
                  </h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {activeTab === 'professional' 
                      ? 'Leading strategic communications at PR Wire, crafting compelling narratives for diverse clients across industries.'
                      : 'Leading the Rotaract Club of Colombo Mid Town as President, driving community impact through innovative service projects.'
                    }
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a 
            href="#contact" 
            className="btn btn-lg bg-[#1A365D] text-white border-none hover:bg-[#D69E2E] hover:scale-105 transition-all gap-2 px-8"
          >
            Get in Touch
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a 
            href="#experience" 
            className="btn btn-lg border-2 border-[#1A365D] text-[#1A365D] hover:bg-[#1A365D] hover:text-white transition-all px-8"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            View Full Journey
          </a>
        </motion.div>
      </div>
    </section>
  )
}

// About Section
const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="inline-block px-3 py-1 bg-[#D69E2E]/10 text-[#D69E2E] text-xs font-semibold rounded-full mb-4">
              01 / About
            </div>
            <h2 className="text-5xl font-bold text-[#1A365D] mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>About Me</h2>
          </div>
          <div className="space-y-6 text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            <p className="text-lg">
              I'm <span className="text-[#1A365D] font-semibold">Haneef Mohamed</span> — a PR professional and Rotaract leader passionate about building meaningful connections and strengthening reputations.
            </p>
            <p>
              Over several years of experience in developing and implementing marketing strategies for various industries. I am flexible and do have a good business relationship with the people I work with.
            </p>
            <p>
              My leadership philosophy centers on <span className="text-[#1A365D] font-semibold">Strategic Empathy</span> — understanding people before guiding them, creating environments where others can succeed.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Experience Section with Tabs
const Experience = () => {
  const [activeTab, setActiveTab] = useState('professional')

  const professionalExperience = [
    {
      period: "May 2023 - Present",
      title: "Strategic PR & Reputation Executive",
      company: "PR Wire",
      description: "Develop and execute strategies to create and uphold positive public image for clients. Support execution of PR strategy, reviewing all PR activities seasonally. Create marketing communication strategies with marketing team. Build relationships with target audience, external partners, and key media outlets.",
      metrics: ["Strategic Planning", "Media Relations", "Marketing Strategy", "Brand Management"]
    },
    {
      period: "July 2022 - March 2023",
      title: "Business Development Executive",
      company: "ChildFund Sri Lanka",
      description: "International development sector organization working with children and youth. Operating in ten districts, supporting over 200,000 children, youth, families and communities.",
      metrics: ["200K+ Beneficiaries", "10 Districts", "Business Development", "Partnership Building"]
    }
  ]

  const volunteerExperience = [
    {
      period: "2024 - 2025",
      title: "President",
      company: "Rotaract Club of Colombo Mid Town",
      description: "Led team of 50 members, 10+ community projects, 20% member satisfaction increase.",
      metrics: ["50 Members Led", "10+ Projects", "20% Satisfaction Increase", "Club Growth"]
    },
    {
      period: "2023 - 2024",
      title: "Director Strategic Alliance",
      company: "Rotaract District 3220",
      description: "Spearheading Mrs. India volunteer partnership (100+ volunteers).",
      metrics: ["100+ Volunteers", "International Partnership", "Cross-Border Collaboration"]
    },
    {
      period: "2023 - 2024",
      title: "Sergeant At Arms",
      company: "Rotaract Club of Colombo Mid Town",
      description: "Maintained order and facilitated smooth club operations.",
      metrics: ["Club Operations", "Event Management", "Member Coordination"]
    },
    {
      period: "2022 - 2023",
      title: "Club Service Director",
      company: "Rotaract Club of Colombo Mid Town",
      description: "Boosted new member enrollment by 30%.",
      metrics: ["30% Member Growth", "Community Service", "Member Recruitment"]
    },
    {
      period: "2020 - 2021",
      title: "International Service Director",
      company: "Rotaract Club of Colombo Mid Town",
      description: "Led international service initiatives and global partnerships.",
      metrics: ["International Projects", "Global Networking", "Service Leadership"]
    },
    {
      period: "2019 - 2020",
      title: "Director Public Relations",
      company: "Rotaract Club of Colombo Mid Town",
      description: "Won 2 prestigious awards, 40% visibility increase.",
      metrics: ["2 Awards Won", "40% Visibility Increase", "Digital Communications", "Social Media Excellence"]
    }
  ]

  const currentExperience = activeTab === 'professional' ? professionalExperience : volunteerExperience

  return (
    <section id="experience" className="py-24 bg-gradient-to-br from-[#1A365D] via-[#1A365D] to-[#0F2744]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span 
            className="inline-block px-4 py-1 rounded-full text-sm font-medium tracking-wider mb-4"
            style={{ backgroundColor: '#D69E2E', color: '#1A365D' }}
          >
            02 / EXPERIENCE
          </span>
          <h2 
            className="text-5xl font-bold mb-4"
            style={{ fontFamily: 'Playfair Display, serif', color: '#FFFFFF' }}
          >
            Experience
          </h2>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif', color: '#D69E2E' }}
          >
            {activeTab === 'professional' 
              ? 'Building careers and strengthening organizations' 
              : 'Leading communities and creating impact'}
          </p>
        </motion.div>

        {/* Tab Toggle */}
        <div className="flex justify-center mb-12">
          <div 
            className="inline-flex rounded-lg p-1"
            style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
          >
            <button
              onClick={() => setActiveTab('professional')}
              className={`px-8 py-3 rounded-md font-medium transition-all duration-300 ${
                activeTab === 'professional' ? 'shadow-lg' : ''
              }`}
              style={{ 
                fontFamily: 'Inter, sans-serif',
                backgroundColor: activeTab === 'professional' ? '#D69E2E' : 'transparent',
                color: activeTab === 'professional' ? '#1A365D' : '#FFFFFF'
              }}
            >
              Professional
            </button>
            <button
              onClick={() => setActiveTab('volunteer')}
              className={`px-8 py-3 rounded-md font-medium transition-all duration-300 ${
                activeTab === 'volunteer' ? 'shadow-lg' : ''
              }`}
              style={{ 
                fontFamily: 'Inter, sans-serif',
                backgroundColor: activeTab === 'volunteer' ? '#D69E2E' : 'transparent',
                color: activeTab === 'volunteer' ? '#1A365D' : '#FFFFFF'
              }}
            >
              Volunteer
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div 
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 transform md:-translate-x-1/2"
            style={{ backgroundColor: '#D69E2E' }}
          />

          {currentExperience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`relative flex items-center mb-12 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Dot on timeline */}
              <div 
                className="absolute left-8 md:left-1/2 w-5 h-5 rounded-full transform -translate-x-1/2 z-10 border-4"
                style={{ 
                  backgroundColor: '#D69E2E', 
                  borderColor: '#1A365D' 
                }}
              />

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 md:w-5/12 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <div 
                  className="p-6 rounded-xl shadow-xl"
                  style={{ 
                    backgroundColor: '#FFFFFF',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  <span 
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
                    style={{ 
                      backgroundColor: '#D69E2E', 
                      color: '#1A365D' 
                    }}
                  >
                    {exp.period}
                  </span>
                  <h3 
                    className="text-xl font-bold mb-1"
                    style={{ 
                      fontFamily: 'Playfair Display, serif', 
                      color: '#1A365D' 
                    }}
                  >
                    {exp.title}
                  </h3>
                  <p 
                    className="text-sm font-semibold mb-3"
                    style={{ color: '#D69E2E' }}
                  >
                    {exp.company}
                  </p>
                  <p 
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: '#4A5568' }}
                  >
                    {exp.description}
                  </p>
                  
                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2 justify-start md:justify-inherit">
                    {exp.metrics.map((metric, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 rounded text-xs font-medium"
                        style={{ 
                          backgroundColor: '#1A365D', 
                          color: '#FFFFFF' 
                        }}
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Empty space for other side */}
              <div className="hidden md:block md:w-5/12" />
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
    { title: "Most Popular Rotaractor", year: "2025", org: "Rotaract District Conference" },
    { title: "Volunteer of the Year", year: "2024", org: "New Generations Asia Awards" },
    { title: "Best Team Leader", year: "2023", org: "RYLA" },
    { title: "Social Media Campaign", year: "2020", org: "Silver Award" },
    { title: "Digital Communications", year: "2020", org: "Bronze Award" }
  ]

  return (
    <section id="achievements" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="inline-block px-3 py-1 bg-[#D69E2E]/10 text-[#D69E2E] text-xs font-semibold rounded-full mb-4">
          03 / Recognition
        </div>
        <h2 className="text-5xl font-bold text-[#1A365D] mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>Awards & Honors</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#F7F5F0] rounded-xl p-6 border border-gray-100 hover:border-[#D69E2E]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl">🏅</span>
                <span className="px-2 py-1 bg-[#1A365D] text-white text-xs rounded-full">{award.year}</span>
              </div>
              <h3 className="text-[#1A365D] font-semibold mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>{award.title}</h3>
              <p className="text-gray-600 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>{award.org}</p>
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
    <section id="skills" className="py-24 bg-[#F7F5F0]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="inline-block px-3 py-1 bg-[#D69E2E]/10 text-[#D69E2E] text-xs font-semibold rounded-full mb-4">
          04 / Capabilities
        </div>
        <h2 className="text-5xl font-bold text-[#1A365D] mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>Skills</h2>
        
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="px-4 py-2 bg-white text-gray-700 rounded-full border border-gray-200 hover:bg-[#1A365D] hover:text-white hover:border-[#1A365D] transition-all cursor-pointer shadow-sm"
              style={{ fontFamily: 'Inter, sans-serif' }}
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
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="inline-block px-3 py-1 bg-[#D69E2E]/10 text-[#D69E2E] text-xs font-semibold rounded-full mb-4">
          05 / Education
        </div>
        <h2 className="text-5xl font-bold text-[#1A365D] mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>Education</h2>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {education.map((edu, i) => (
            <div key={i} className="bg-[#F7F5F0] rounded-xl p-6 border border-gray-100 hover:border-[#D69E2E]/30 transition-colors">
              <h3 className="text-[#1A365D] font-semibold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{edu.title}</h3>
              <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>{edu.institution}</p>
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
    { 
      label: "Phone", 
      value: "+94 77 044 7021", 
      href: "tel:+94770447021", 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    { 
      label: "Email", 
      value: "haneef.rotaract3220@gmail.com", 
      href: "mailto:haneef.rotaract3220@gmail.com", 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      label: "Location", 
      value: "Colombo, Sri Lanka", 
      href: null, 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ]

  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1A365D]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D69E2E]/10 rounded-full blur-3xl" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-[#1A365D]/10 text-[#1A365D] text-sm font-semibold tracking-wider uppercase rounded-full mb-4">
            06 / Contact
          </div>
          <h2 
            className="text-5xl md:text-6xl font-bold text-[#1A365D] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Get In Touch
          </h2>
          <p 
            className="text-lg text-gray-600 max-w-xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Have a question or want to work together? I'd love to hear from you.
          </p>
        </motion.div>
        
        {/* Contact Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {contacts.map((contact, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-[#D69E2E] transition-all duration-300 ${contact.href ? 'cursor-pointer group' : ''}`}
            >
              <a 
                href={contact.href}
                className="block text-center"
                target={contact.href?.startsWith('http') ? '_blank' : undefined}
                rel={contact.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {/* Icon */}
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-gradient-to-br from-[#1A365D] to-[#1A365D]/80 flex items-center justify-center text-white group-hover:from-[#D69E2E] group-hover:to-[#D69E2E]/80 transition-all duration-300">
                  {contact.icon}
                </div>
                
                {/* Label */}
                <p 
                  className="text-xs text-gray-400 uppercase tracking-widest font-medium mb-2"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {contact.label}
                </p>
                
                {/* Value */}
                <p 
                  className={`text-[#1A365D] font-semibold text-sm leading-snug group-hover:text-[#D69E2E] transition-colors ${contact.href ? 'group-hover:underline underline-offset-4' : ''}`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {contact.value}
                </p>
              </a>
            </motion.div>
          ))}
        </motion.div>
        
        {/* LinkedIn & CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          {/* LinkedIn Button */}
          <a 
            href="https://linkedin.com/in/haneef-mohamed"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 bg-[#1A365D] text-white rounded-full hover:bg-[#2C5282] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span 
              className="font-medium text-sm"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Connect on LinkedIn
            </span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          
          {/* Get In Touch CTA */}
          <a 
            href="mailto:haneef.rotaract3220@gmail.com"
            className="group flex items-center gap-3 px-8 py-3 bg-[#D69E2E] text-white font-semibold rounded-full hover:bg-[#B7791F] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span style={{ fontFamily: 'Inter, sans-serif' }}>
              Get In Touch
            </span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
        
        {/* Footer */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center text-gray-400 text-sm mt-16"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          © {new Date().getFullYear()} Haneef Mohamed. All rights reserved.
        </motion.p>
      </div>
    </section>
  )
}

// Main App
function App() {
  return (
    <div className="bg-[#F7F5F0] min-h-screen text-[#1A365D]">
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
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
