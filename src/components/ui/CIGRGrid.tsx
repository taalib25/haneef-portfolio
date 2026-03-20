import { motion } from 'framer-motion';

export default function CIGRGrid() {
  const cigrData = [
    {
      letter: 'C',
      title: 'CORE COMPETENCIES',
      body: 'Our greatest strength lies in our people. Thousands of talented young professionals across our district, immense intellectual capital, and a legacy as one of the most accomplished Rotaract districts in the world. That foundation is real — and it is the platform for everything else.',
      color: 'var(--navy)',
      bgColor: 'var(--campaign-bg-subtle)'
    },
    {
      letter: 'I',
      title: 'IMPROVEMENTS',
      body: 'Administrative efficiency and financial literacy must be strengthened. Digital tools and standardised governance systems will simplify operations and improve transparency across clubs — reducing friction so that energy goes toward impact, not administration.',
      color: 'var(--navy-light)',
      bgColor: 'var(--campaign-bg-subtle)'
    },
    {
      letter: 'G',
      title: 'GROWTH AVENUES',
      body: 'Significant opportunities exist through digital innovation, stronger Rotary mentorship programmes via the Bridge Programme, and deeper collaboration with external partners who can open professional doors for our members.',
      color: 'var(--crimson)',
      bgColor: 'var(--campaign-bg-subtle)'
    },
    {
      letter: 'R',
      title: 'RISKS',
      body: 'Volunteer fatigue and economic uncertainty are real challenges for a youth-driven organisation. We must build systems that support member wellbeing and ensure our projects remain sustainable — not just ambitious.',
      color: 'var(--crimson-dark)',
      bgColor: 'var(--campaign-bg-subtle)'
    }
  ];

  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-[2px] border-[rgba(0,0,0,0.2)]">
        {cigrData.map((item, index) => (
          <motion.div
            key={index}
            className="p-6 md:p-8 border-[1.5px] border-[rgba(0,0,0,0.15)]"
            style={{ backgroundColor: item.bgColor }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
              delay: index * 0.1
            }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <span
                className="font-display text-[6rem] md:text-[8rem] leading-none block mb-4 font-bold"
                style={{ color: item.color }}
              >
                {item.letter}
              </span>
              <p className="font-mono text-[1.05rem] tracking-[0.20em] uppercase mb-4" style={{ color: item.color }}>
                {item.title}
              </p>
            </div>
            <p className="font-body text-[1.15rem] text-[var(--ct2)] leading-[1.75]">
              {item.body}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}