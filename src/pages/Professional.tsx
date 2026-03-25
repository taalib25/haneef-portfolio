import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { Briefcase, GraduationCap, Award, TrendingUp, Users, Globe } from 'lucide-react';
import Contact from '../components/sections/Contact';

const services = [
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Data-driven campaigns that build brand presence and drive measurable engagement across digital channels.',
  },
  {
    icon: Award,
    title: 'Public Relations',
    description: 'Strategic reputation management and media relations that shape public perception and build lasting credibility.',
  },
  {
    icon: Globe,
    title: 'Media Buying',
    description: 'Strategic media placement and procurement to maximize reach and optimize advertising investment.',
  },
  {
    icon: Users,
    title: 'Brand Strategy',
    description: 'Comprehensive brand positioning and messaging frameworks that resonate with target audiences.',
  },
  {
    icon: Briefcase,
    title: 'Business Development',
    description: 'Growth strategies and partnership development that expand market presence and drive revenue.',
  },
];

const workExperience = [
  {
    company: 'Wire Communication Consultancy Holdings',
    role: 'Business Growth Executive',
    period: 'Feb 2025 – Present',
    description: 'Senior role overseeing business growth across subsidiaries including PR Wire. Managing strategic initiatives and expanding market presence.',
    tags: ['Business Growth', 'Strategic Planning', 'Group Level'],
  },
  {
    company: 'PR Wire',
    role: 'Strategic PR & Reputation Executive',
    period: 'May 2023 – Feb 2025',
    description: 'Develop and execute strategies that build and maintain positive public image for clients. Work with marketing teams to develop communication strategies that build relationships with target audiences, external partners, and key media outlets.',
    tags: ['Reputation Strategy', 'Media Relations', 'Marketing Communications'],
  },
  {
    company: 'ChildFund Sri Lanka',
    role: 'Business Development Executive',
    period: 'Jul 2022 – Mar 2023',
    description: 'International development organisation working across 10 districts, reaching 200,000+ children, youth, families, and communities. Supported business development where decisions affect lives, not just revenue.',
    tags: ['Development Sector', 'Community Impact', '10 Districts'],
  },
  {
    company: 'Traffic Tours',
    role: 'Sales Executive',
    period: 'May 2021 – Apr 2022',
    description: 'Sales and client management in the travel industry. Developed customer relationships and consistently met revenue targets.',
    tags: ['Sales', 'Client Management', 'Travel Industry'],
  },
  {
    company: 'Crepe Runner',
    role: 'Manager',
    period: 'Feb 2020 – Feb 2021',
    description: 'Full operations management including staffing, inventory, and customer experience. Built foundational management skills for subsequent leadership roles.',
    tags: ['Operations', 'Team Management', 'Customer Experience'],
  },
  {
    company: 'Bubble ME',
    role: 'Team Leader',
    period: 'Nov 2018 – Feb 2020',
    description: 'First professional role involving team leadership and coordination from an early age. Developed early management capabilities.',
    tags: ['Team Leadership', 'Operations'],
  },
];

const educationData = [
  {
    institution: 'Achievers International Campus',
    qualification: 'Master of Business Administration',
    year: '2026 – Present',
    status: 'Reading',
    active: true,
  },
  {
    institution: 'Ivey Campus',
    qualification: 'Post Graduate Diploma in Strategic Management and Leadership',
    year: '2025 – Present',
    status: 'Reading',
    active: true,
  },
  {
    institution: 'CIM (Chartered Institute of Marketing)',
    qualification: 'Diploma in Marketing',
    year: 'Completed',
    status: 'Completed',
    active: false,
  },
  {
    institution: 'Amal International School',
    qualification: 'Primary & Secondary Education',
    year: 'Completed',
    status: 'Completed',
    active: false,
  },
];

export default function Professional() {
  const prefersReducedMotion = useReducedMotion();

  const fadeInUp = {
    initial: !prefersReducedMotion ? { opacity: 0, y: 24 } : { opacity: 1 },
    whileInView: !prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1 },
    transition: !prefersReducedMotion ? { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } : undefined,
    viewport: { once: true, amount: 0.1 },
  };

  return (
    <main className="relative min-h-screen bg-[var(--bg)]">
      <div className="h-[2px] w-full bg-[var(--crimson)]" />

      <div className="py-14 md:py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div className="mb-16 md:mb-20" {...fadeInUp}>
            <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] text-[var(--t1)] leading-[0.95] uppercase mb-6">
              PROFESSIONAL<br />
              <span className="text-[var(--crimson)]">JOURNEY</span>
            </h1>
            <p className="font-body text-[1.125rem] text-[var(--t2)] max-w-2xl">
              Over 7 years of experience spanning PR, business development, and strategic communications — building the professional foundation behind the leadership record.
            </p>
          </motion.div>

          <motion.section className="mb-20 md:mb-24" {...fadeInUp}>
            <div className="mb-10">
              <p className="font-display text-[9.5px] tracking-[0.13em] text-[var(--crimson)] uppercase mb-4">
                Expertise
              </p>
              <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] text-[var(--t1)] leading-[0.95] tracking-[0.025em] uppercase">
                Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="group bg-[var(--bg-campaign)] border border-[var(--border)] p-6 hover:border-[var(--crimson)] transition-colors duration-200"
                  initial={!prefersReducedMotion ? { opacity: 0, y: 20 } : { opacity: 1 }}
                  whileInView={!prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1 }}
                  transition={!prefersReducedMotion ? { duration: 0.5, delay: index * 0.05 } : undefined}
                  viewport={{ once: true }}
                >
                  <service.icon className="w-6 h-6 text-[var(--crimson)] mb-4" strokeWidth={1.5} />
                  <h3 className="font-sans text-[1.1rem] font-bold text-[var(--t1)] tracking-[0.012em] mb-2 group-hover:text-[var(--crimson)] transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-body text-[0.875rem] text-[var(--t2)] leading-[1.65]">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section className="mb-20 md:mb-24" {...fadeInUp}>
            <div className="mb-10">
              <p className="font-display text-[9.5px] tracking-[0.13em] text-[var(--crimson)] uppercase mb-4">
                Career
              </p>
              <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] text-[var(--t1)] leading-[0.95] tracking-[0.025em] uppercase">
                Work Experience
              </h2>
            </div>

            <div className="space-y-0">
              {workExperience.map((job, index) => (
                <motion.div
                  key={`${job.company}-${index}`}
                  className="group py-8 border-t border-[var(--border)] last:border-b hover:border-t-[var(--crimson)] transition-colors duration-200"
                  initial={!prefersReducedMotion ? { opacity: 0, y: 20 } : { opacity: 1 }}
                  whileInView={!prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1 }}
                  transition={!prefersReducedMotion ? { duration: 0.5, delay: index * 0.05 } : undefined}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-baseline mb-3 pb-3 border-b border-[var(--border-light)]">
                    <p className="font-body text-[0.9rem] text-[var(--t2)] font-medium">
                      {job.company}
                    </p>
                    <p className="font-body text-[0.85rem] text-[var(--t3)]">
                      {job.period}
                    </p>
                  </div>

                  <h3 className="font-display font-bold text-[1.35rem] md:text-[1.5rem] text-[var(--t1)] uppercase mb-3 leading-[1.1]">
                    {job.role}
                  </h3>

                  <p className="font-body text-[1rem] text-[var(--t2)] leading-[1.75] mb-4">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-body text-[0.75rem] font-medium text-[var(--crimson)] bg-[var(--crimson-dim)] border border-[var(--crimson-border)] px-3 py-1 rounded-[2px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section {...fadeInUp}>
            <div className="mb-10">
              <p className="font-display text-[9.5px] tracking-[0.13em] text-[var(--crimson)] uppercase mb-4">
                Academic
              </p>
              <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] text-[var(--t1)] leading-[0.95] tracking-[0.025em] uppercase flex items-center gap-3">
                <GraduationCap className="w-8 h-8 text-[var(--crimson)]" strokeWidth={1.5} />
                Education
              </h2>
            </div>

            <div className="space-y-0">
              {educationData.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  className="education-row"
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    padding: '1rem 0',
                    borderBottom: '1px solid rgba(15,6,8,0.07)',
                  }}
                  initial={!prefersReducedMotion ? { opacity: 0, y: 20 } : { opacity: 1 }}
                  whileInView={!prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1 }}
                  transition={!prefersReducedMotion ? { duration: 0.5, delay: index * 0.05 } : undefined}
                  viewport={{ once: true }}
                >
                  <div>
                    <p className="font-sans font-bold text-[var(--t1)]" style={{ fontSize: '1.15rem', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '0.15rem' }}>
                      {edu.institution}
                    </p>
                    <p className="font-body text-[var(--t2)]" style={{ fontSize: '0.9rem', fontWeight: 450, lineHeight: 1.4 }}>
                      {edu.qualification}
                    </p>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: '1rem' }}>
                    <p className="font-sans text-[var(--ta)]" style={{ fontSize: '0.85rem', letterSpacing: '0.04em', fontWeight: 500 }}>
                      {edu.year}
                    </p>
                    {edu.active ? (
                      <span
                        className="font-sans uppercase"
                        style={{
                          fontSize: '9px',
                          letterSpacing: '0.10em',
                          marginTop: '3px',
                          display: 'inline-block',
                          padding: '3px 10px',
                          background: 'color-mix(in srgb, var(--crimson) 8%, transparent)',
                          border: '1px solid color-mix(in srgb, var(--crimson) 20%, transparent)',
                          color: 'var(--crimson)',
                          borderRadius: '2px',
                        }}
                      >
                        {edu.status}
                      </span>
                    ) : (
                      <p className="font-sans text-[var(--t3)] uppercase" style={{ fontSize: '9px', letterSpacing: '0.10em', marginTop: '3px', fontWeight: 500 }}>
                        {edu.status}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>

      <Contact />
    </main>
  );
}
