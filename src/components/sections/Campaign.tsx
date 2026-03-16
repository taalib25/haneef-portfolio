import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '../../lib/cn';
import CIGRCompass from '../ui/CIGRCompass';

gsap.registerPlugin(ScrollTrigger);

export default function Campaign() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Any scroll animations for campaign section
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="campaign" ref={containerRef} className="py-[4.5rem] md:py-[7rem] px-6 md:px-12 lg:px-20 bg-[var(--bg-campaign)] text-[var(--ct1)]">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header with Video Background */}
        <div className="relative mb-20 text-center py-24 md:py-32 px-6 rounded-3xl overflow-hidden border border-[var(--cb)] shadow-sm">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-[0.15] pointer-events-none mix-blend-multiply"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-background-of-red-and-black-waves-seamless-loop-32731-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-campaign)]/40 to-[var(--bg-campaign)]/90 pointer-events-none" />

          <div className="relative z-10">
            <p className="font-mono text-[var(--cta)] text-[var(--t-xs)] tracking-widest uppercase mb-8">
              [ 04 — THE CAMPAIGN ]
            </p>
            <h2 className="font-display text-[var(--t-4xl)] text-[var(--ct1)] leading-[0.92] tracking-[-0.025em] uppercase mb-6">
              RUNNING FOR<br />
              DISTRICT ROTARACT<br />
              REPRESENTATIVE
            </h2>
            <p className="font-mono text-[var(--t-xs)] text-[var(--cta)] tracking-widest uppercase mb-16">
              District 3220 · Sri Lanka & Maldives · 2025–2026
            </p>
            <p className="font-body text-[var(--t-2xl)] italic text-[var(--ct2)] max-w-[680px] mx-auto text-center">
              "To transform our district into a high-value ecosystem where youth leadership is recognised as a professional standard."
            </p>
          </div>
        </div>

        {/* Why I Am Running */}
        <div className="max-w-[800px] mx-auto mb-32">
          <h3 className="font-mono text-[var(--t-xs)] text-[var(--cta)] tracking-widest uppercase mb-8 text-center">
            WHY I AM RUNNING
          </h3>
          <div className="font-body text-[var(--t-lg)] text-[var(--ct2)] leading-[1.75] space-y-6">
            <p>
              I am running for District Rotaract Representative because I believe our district is at an important crossroads. Over time, the Rotaract experience has gradually shifted toward activity rather than impact. Clubs are active and engaged, but we must ask ourselves whether our efforts are creating the long-term value that Rotaract was originally meant to deliver.
            </p>
            <p>
              My decision to run comes from a simple belief: Rotaract should be a transformative journey for every member who joins. When someone becomes a Rotaractor, they should gain access to leadership opportunities, mentorship, professional development, and meaningful service experiences — not just a roster of events to attend.
            </p>
            <p>
              My purpose is to bridge the gap between the immense potential of our youth and the global strength of the Rotary movement. I want Rotaract to move beyond being seen as just volunteering and instead become a platform for value creation and genuine leadership development.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="flex flex-col md:flex-row border-t border-b border-[var(--cb)] mb-32">
          <div className="flex-1 py-12 md:pr-12 border-b md:border-b-0 md:border-r border-[var(--cb)]">
            <h3 className="font-mono text-[var(--t-xs)] text-[var(--cta)] tracking-widest uppercase mb-6">
              VISION:
            </h3>
            <p className="font-body text-[var(--t-lg)] text-[var(--ct2)] leading-[1.75]">
              To transform our district into a high-value ecosystem where youth leadership is recognised as a professional standard and Rotaract clubs serve as incubators for innovation, leadership, and meaningful community impact.
            </p>
          </div>
          <div className="flex-1 py-12 md:pl-12">
            <h3 className="font-mono text-[var(--t-xs)] text-[var(--cta)] tracking-widest uppercase mb-6">
              MISSION:
            </h3>
            <p className="font-body text-[var(--t-lg)] text-[var(--ct2)] leading-[1.75]">
              To empower Rotaract clubs and members through stronger digital systems, transparent financial governance, and a vocational value chain that connects every member to mentorship, professional development, and global opportunities.
            </p>
          </div>
        </div>

        {/* Three Challenges */}
        <div className="mb-32">
          <h3 className="font-mono text-[var(--t-xs)] text-[var(--cta)] tracking-widest uppercase mb-12 text-center">
            THREE CHALLENGES WE MUST FACE (honest, direct — not political softening)
          </h3>
          <div className="flex flex-col gap-16">
            <div className="relative">
              <span className="absolute -top-6 left-0 font-display text-[48px] text-[rgba(120,0,0,0.06)] leading-none select-none -z-10">01</span>
              <h4 className="font-display text-[var(--t-xl)] text-[var(--ct1)] mb-4">Challenge 1: Membership Retention</h4>
              <p className="font-body text-[var(--t-base)] text-[var(--ct2)] leading-[1.75] max-w-[800px]">
                Many individuals join Rotaract with enthusiasm but lose interest because they do not see the long-term value of their involvement. The answer is not more recruitment campaigns. It is a stronger experience for the members we already have.
              </p>
            </div>
            <div className="relative">
              <span className="absolute -top-6 left-0 font-display text-[48px] text-[rgba(120,0,0,0.06)] leading-none select-none -z-10">02</span>
              <h4 className="font-display text-[var(--t-xl)] text-[var(--ct1)] mb-4">Challenge 2: Financial Stewardship</h4>
              <p className="font-body text-[var(--t-base)] text-[var(--ct2)] leading-[1.75] max-w-[800px]">
                Transparency and financial literacy are essential for any organisation that wishes to build trust. Clubs must operate with clear systems that ensure accountability and responsible financial management — not as a compliance exercise, but as a cultural standard.
              </p>
            </div>
            <div className="relative">
              <span className="absolute -top-6 left-0 font-display text-[48px] text-[rgba(120,0,0,0.06)] leading-none select-none -z-10">03</span>
              <h4 className="font-display text-[var(--t-xl)] text-[var(--ct1)] mb-4">Challenge 3: Meaningful Partnerships</h4>
              <p className="font-body text-[var(--t-base)] text-[var(--ct2)] leading-[1.75] max-w-[800px]">
                Too often, our collaborations are limited to short-term sponsorships. Rotaract should build long-term alliances with organisations, institutions, and Rotary networks that support sustainable projects and professional opportunities — not one-off logo placements.
              </p>
            </div>
          </div>
        </div>

        {/* The CIGR Framework */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="font-mono text-[var(--t-xs)] text-[var(--cta)] tracking-widest uppercase mb-4">
              CIGR Strategic Analysis
            </h3>
            <p className="font-body text-[var(--t-sm)] text-[var(--ct2)] italic">
              My framework for understanding where the district stands — and where it needs to go.
            </p>
          </div>

          <CIGRCompass />

          {/* CIGR Rows */}
          <div className="flex flex-col border-t border-[var(--cb)]">
            {[
              { letter: 'C', title: 'CORE COMPETENCIES', body: 'Our greatest strength lies in our people. Thousands of talented young professionals across our district, immense intellectual capital, and a legacy as one of the most accomplished Rotaract districts in the world. That foundation is real — and it is the platform for everything else.', color: 'var(--navy)' },
              { letter: 'I', title: 'IMPROVEMENTS', body: 'Administrative efficiency and financial literacy must be strengthened. Digital tools and standardised governance systems will simplify operations and improve transparency across clubs — reducing friction so that energy goes toward impact, not administration.', color: 'var(--navy-light)' },
              { letter: 'G', title: 'GROWTH AVENUES', body: 'Significant opportunities exist through digital innovation, stronger Rotary mentorship programmes via the Bridge Programme, and deeper collaboration with external partners who can open professional doors for our members.', color: 'var(--crimson)' },
              { letter: 'R', title: 'RISKS', body: 'Volunteer fatigue and economic uncertainty are real challenges for a youth-driven organisation. We must build systems that support member wellbeing and ensure our projects remain sustainable — not just ambitious.', color: 'var(--crimson-dark)' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row py-6 border-b border-[var(--cb)]">
                <div className="w-[100px] flex-shrink-0 flex items-center justify-center mb-4 md:mb-0">
                  <span className="font-display text-[64px] leading-none" style={{ color: item.color }}>{item.letter}</span>
                </div>
                <div className="hidden md:block w-[1px] bg-[var(--cb)] mx-8" />
                <div className="flex-1 flex flex-col justify-center">
                  <h4 className="font-mono text-[var(--t-xs)] tracking-widest uppercase mb-2" style={{ color: item.color }}>
                    {item.title}
                  </h4>
                  <p className="font-body text-[var(--t-base)] text-[var(--ct2)] leading-[1.75]">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Pillars */}
        <div className="mb-32">
          <h3 className="font-mono text-[var(--t-xs)] text-[var(--cta)] tracking-widest uppercase mb-12 text-center">
            FOUR STRATEGIC PILLARS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            <div>
              <h4 className="font-display text-[var(--t-xl)] text-[var(--ct1)] mb-4">Pillar 1 — Rotaractor Value Chain:</h4>
              <p className="font-body text-[var(--t-base)] text-[var(--ct2)] leading-[1.75]">
                Map the entire member journey from recruitment to alumni engagement. Each year in Rotaract should provide clear, accumulating opportunities for skill development — project management, public speaking, governance — that compound into a genuine professional asset over time.
              </p>
            </div>
            <div>
              <h4 className="font-display text-[var(--t-xl)] text-[var(--ct1)] mb-4">Pillar 2 — The Bridge Programme:</h4>
              <p className="font-body text-[var(--t-base)] text-[var(--ct2)] leading-[1.75]">
                A structured mentorship initiative that connects Rotaractors with Rotarians in their professional fields. Career guidance through the Rotary network — not as a perk, but as a deliberate system integrated into the district's annual architecture.
              </p>
            </div>
            <div>
              <h4 className="font-display text-[var(--t-xl)] text-[var(--ct1)] mb-4">Pillar 3 — Strategic Alliances:</h4>
              <p className="font-body text-[var(--t-base)] text-[var(--ct2)] leading-[1.75]">
                Partnerships must evolve from transactional sponsorships into meaningful long-term collaborations that support both community impact and professional growth. Fewer partnerships. Deeper commitments. Measurable outcomes for members.
              </p>
            </div>
            <div>
              <h4 className="font-display text-[var(--t-xl)] text-[var(--ct1)] mb-4">Pillar 4 — Governance & Accountability:</h4>
              <p className="font-body text-[var(--t-base)] text-[var(--ct2)] leading-[1.75]">
                Digital reporting systems will improve transparency across the district and allow us to measure success by real impact — not event count. Clubs will be equipped with professional project management tools, not improvised spreadsheets.
              </p>
            </div>
          </div>
        </div>

        {/* Three-Phase Action Plan */}
        <div className="mb-32">
          <h3 className="font-mono text-[var(--t-xs)] text-[var(--cta)] tracking-widest uppercase mb-12 text-center">
            THREE-PHASE ACTION PLAN
          </h3>
          <div className="flex flex-col gap-16">
            <div className="relative">
              <span className="absolute -top-6 left-0 font-display text-[64px] text-[rgba(120,0,0,0.06)] leading-none select-none -z-10">01</span>
              <h4 className="font-display text-[var(--t-xl)] text-[var(--ct1)] mb-4">Phase 1 — Purpose-Led Leadership <span className="italic font-light">(First Quarter)</span></h4>
              <p className="font-body text-[var(--t-base)] text-[var(--ct2)] leading-[1.75] max-w-[800px]">
                Workshops that help club leaders clearly define purpose and align activities with meaningful outcomes. Member wellbeing assessments to identify and prevent burnout before it shows up as attrition.
              </p>
            </div>
            <div className="relative">
              <span className="absolute -top-6 left-0 font-display text-[64px] text-[rgba(120,0,0,0.06)] leading-none select-none -z-10">02</span>
              <h4 className="font-display text-[var(--t-xl)] text-[var(--ct1)] mb-4">Phase 2 — Change Management <span className="italic font-light">(Second Quarter)</span></h4>
              <p className="font-body text-[var(--t-base)] text-[var(--ct2)] leading-[1.75] max-w-[800px]">
                Digital systems for reporting, attendance tracking, and financial management. Governance support for clubs to strengthen administrative and financial structures from the ground up — not top-down mandates.
              </p>
            </div>
            <div className="relative">
              <span className="absolute -top-6 left-0 font-display text-[64px] text-[rgba(120,0,0,0.06)] leading-none select-none -z-10">03</span>
              <h4 className="font-display text-[var(--t-xl)] text-[var(--ct1)] mb-4">Phase 3 — Impact Realisation <span className="italic font-light">(Second Half)</span></h4>
              <p className="font-body text-[var(--t-base)] text-[var(--ct2)] leading-[1.75] max-w-[800px]">
                A public digital dashboard showcasing the district's collective contribution to global development goals. Culminating in the Perspective Summit — a district-wide platform for professional development, networking, and leadership growth.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="font-mono text-[var(--t-xs)] text-[var(--cta)] tracking-widest uppercase mb-12 text-center">
            CORE VALUES
          </h3>
          <div className="flex flex-col border-t border-[var(--cb)]">
            {[
              { name: 'SERVICE ABOVE SELF', desc: 'Projects must create genuine and sustainable impact.' },
              { name: 'LEADERSHIP DEVELOPMENT', desc: 'Every Rotaractor deserves the opportunity to grow.' },
              { name: 'INTEGRITY & ACCOUNTABILITY', desc: 'Transparency is not a policy. It is a culture.' },
              { name: 'COLLABORATION', desc: 'Rotaract\'s greatest work happens at the intersections.' },
              { name: 'INNOVATION & ADAPTABILITY', desc: 'A youth movement that stops evolving stops mattering.' }
            ].map((val, i) => (
              <div key={i} className="flex flex-col md:flex-row py-6 border-b border-[var(--cb)]">
                <div className="md:w-[300px] flex-shrink-0 mb-2 md:mb-0">
                  <span className="font-mono text-[var(--t-xs)] text-[var(--cta)] tracking-widest uppercase">
                    {val.name}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="font-body text-[var(--t-base)] text-[var(--ct2)] leading-[1.75]">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-24">
          <a
            href="#contact"
            className="inline-flex justify-center items-center bg-[var(--crimson)] text-[var(--t1)] font-mono text-[var(--t-sm)] uppercase tracking-widest px-8 py-4 hover:bg-[var(--crimson-dark)] transition-colors min-h-[52px]"
          >
            READ THE PLAN
          </a>
        </div>
      </div>
    </section>
  );
}
