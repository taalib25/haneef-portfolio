import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';
import Contact from '../components/sections/Contact';

const services = [
  { title: 'Public Relations Consultancy', description: 'Shaping narratives that move markets and build lasting trust.' },
  { title: 'Crisis Communications', description: 'When silence isn\'t an option — strategic responses that protect and rebuild.' },
  { title: 'High-Level Media Relations', description: 'Direct access to the right desks, the right editors, the right moments.' },
  { title: 'Reputation Management', description: 'Your name is your currency. We help you spend it wisely.' },
  { title: 'Digital Marketing & ORM', subtitle: 'Online Reputation Management', description: 'Controlling the first page of Google, one strategy at a time.' },
  { title: 'Creative Solutions', description: 'Ideas that break templates and start conversations.' },
  { title: 'Intel-Driven Communications', subtitle: 'data-driven insights', description: 'Strategy backed by numbers, not gut feelings.' },
  { title: 'Internal Communications', description: 'Aligning teams from the inside out — because culture starts with clarity.' },
  { title: 'Brand Capacity Building', description: 'Teaching brands to stand on their own, long after we step away.' },
  { title: 'Media Buying', description: 'Every rupee placed with precision. Maximum reach, minimum waste.' },
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
    initial: !prefersReducedMotion ? { opacity: 0, y: 16 } : { opacity: 1 },
    whileInView: !prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1 },
    transition: !prefersReducedMotion ? { duration: 0.35, ease: [0.33, 1, 0.68, 1] as const } : undefined,
    viewport: { once: true, amount: 0.2 },
  };

  const titleAnimation = {
    initial: !prefersReducedMotion ? { opacity: 0, y: 10 } : { opacity: 1 },
    whileInView: !prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1 },
    transition: !prefersReducedMotion ? { duration: 0.3, ease: [0.33, 1, 0.68, 1] as const } : undefined,
    viewport: { once: true, amount: 0.3 },
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
            <motion.div className="mb-8" {...titleAnimation}>
              <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] text-[var(--t1)] leading-[0.95] tracking-[0.025em] uppercase">
                Services
              </h2>
            </motion.div>

            <div className="space-y-0 border-t border-[var(--border)]">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="group py-4 md:py-5 border-b border-[var(--border)] hover:border-[var(--crimson)] transition-colors duration-200"
                  initial={!prefersReducedMotion ? { opacity: 0, x: -8 } : { opacity: 1 }}
                  whileInView={!prefersReducedMotion ? { opacity: 1, x: 0 } : undefined}
                  transition={{ duration: 0.2, delay: index * 0.02 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:gap-6">
                    <div className="md:w-56 md:shrink-0">
                      <h3 className="font-body text-[0.95rem] font-medium text-[var(--t1)] group-hover:text-[var(--crimson)] transition-colors leading-snug">
                        {service.title}
                      </h3>
                      {service.subtitle && (
                        <span className="block font-body text-[0.75rem] text-[var(--t3)] mt-0.5">
                          {service.subtitle}
                        </span>
                      )}
                    </div>
                    <p className="font-body text-[0.9rem] text-[var(--t2)] leading-relaxed md:pt-0.5">
                      {service.description}
                    </p>
                  </div>
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
            <motion.div className="mb-10" {...titleAnimation}>
              <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] text-[var(--t1)] leading-[0.95] tracking-[0.025em] uppercase">
                Education
              </h2>
            </motion.div>

            <div className="space-y-0">
              {educationData.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  className="group py-5 border-b border-[var(--border)] hover:border-[var(--crimson)] transition-colors duration-200"
                  initial={!prefersReducedMotion ? { opacity: 0, y: 16 } : { opacity: 1 }}
                  whileInView={!prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1 }}
                  transition={!prefersReducedMotion ? { duration: 0.3, delay: index * 0.04 } : undefined}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="min-w-0 flex-1">
                      <p className="font-body font-semibold text-[0.95rem] text-[var(--t1)] leading-snug mb-1">
                        {edu.institution}
                      </p>
                      <p className="font-body text-[0.8rem] text-[var(--t2)] leading-relaxed">
                        {edu.qualification}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-body text-[0.8rem] text-[var(--t3)] leading-snug">
                        {edu.year}
                      </p>
                      {edu.active ? (
                        <span className="inline-block mt-1.5 font-body text-[0.65rem] uppercase tracking-wider px-2 py-0.5 bg-[var(--crimson-dim)] border border-[var(--crimson-border)] text-[var(--crimson)] rounded-[2px]">
                          {edu.status}
                        </span>
                      ) : (
                        <p className="mt-1.5 font-body text-[0.65rem] text-[var(--t3)] uppercase tracking-wider">
                          {edu.status}
                        </p>
                      )}
                    </div>
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
