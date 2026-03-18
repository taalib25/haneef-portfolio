import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CIGRGrid from "../ui/CIGRGrid";

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
    <section
      id="campaign"
      ref={containerRef}
      className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-(--bg-campaign) text-(--ct1)"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header with Video Background */}
        <div className="relative mb-20 text-center py-24 md:py-32 px-6 rounded-3xl overflow-hidden border border-(--cb) shadow-sm">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-[0.15] pointer-events-none mix-blend-multiply"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-abstract-background-of-red-and-black-waves-seamless-loop-32731-large.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-linear-to-b from-(--bg-campaign)/40 to-(--bg-campaign)/90 pointer-events-none" />

          <div className="relative z-10">
            <p className="font-mono text-(--cta) text-t-xs tracking-[0.10em] uppercase mb-8">
              [ 04 — THE CAMPAIGN ]
            </p>
            <h2 className="font-display text-t-4xl text-(--ct1) leading-[0.92] tracking-[-0.025em] uppercase mb-6">
              RUNNING FOR
              <br />
              DISTRICT ROTARACT
              <br />
              REPRESENTATIVE
            </h2>
            <p className="font-mono text-t-xs text-(--cta) tracking-[0.10em] uppercase mb-16">
              District 3220 · Sri Lanka & Maldives · 2025–2026
            </p>
          </div>
        </div>

        {/* THE DRR STATEMENT: A Promise, Not a Paragraph */}
        <div className="max-w-4xl mx-auto">
          {/* 2px crimson rule above DRR statement block */}
          <div className="h-[2px] w-full bg-(--crimson) mb-16" />

          <div className="text-center px-4">
            <p className="font-mono text-[0.8rem] text-[#780000] tracking-[0.12em] uppercase mb-6">
              THE PROMISE
            </p>
            
            <p className="font-display text-[clamp(2rem,3.5vw,3rem)] text-(--ct1) leading-[1.15] tracking-[-0.02em]">
              To transform our district into a high-value ecosystem
              <br />
              where youth leadership is recognised as a professional
              <br />
              standard.
            </p>
            
            <p className="font-body text-[0.85rem] italic text-[#9A7F7A] mt-8">
              — Haneef Mohamed, DRR Candidate, District 3220
            </p>
          </div>

          {/* 2px crimson rule below DRR statement block */}
          <div className="h-[2px] w-full bg-(--crimson) mt-16" />
        </div>

        {/* Why I Am Running */}
        <div className="max-w-200 mx-auto mb-32">
          <h3 className="font-mono text-t-xs text-(--cta) tracking-[0.10em] uppercase mb-8 text-center">
            WHY I AM RUNNING
          </h3>
          <div className="font-body text-t-lg text-(--ct2) leading-[1.75] space-y-6">
            <p>
              I am running for District Rotaract Representative because I
              believe our district is at an important crossroads. Over time, the
              Rotaract experience has gradually shifted toward activity rather
              than impact. Clubs are active and engaged, but we must ask
              ourselves whether our efforts are creating the long-term value
              that Rotaract was originally meant to deliver.
            </p>
            <p>
              My decision to run comes from a simple belief: Rotaract should be
              a transformative journey for every member who joins. When someone
              becomes a Rotaractor, they should gain access to leadership
              opportunities, mentorship, professional development, and
              meaningful service experiences — not just a roster of events to
              attend.
            </p>
            <p>
              My purpose is to bridge the gap between the immense potential of
              our youth and the global strength of the Rotary movement. I want
              Rotaract to move beyond being seen as just volunteering and
              instead become a platform for value creation and genuine
              leadership development.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="flex flex-col md:flex-row mb-32 border-t border-b border-(--cb)">
          <div className="flex-1 py-12 md:pr-12 border-b md:border-b-0 md:border-r border-(--cb)">
            <h3 className="font-mono text-t-xs text-(--cta) tracking-[0.10em] uppercase mb-6">
              VISION:
            </h3>
            <p className="font-body text-t-lg text-(--ct2) leading-[1.75]">
              To transform our district into a high-value ecosystem where youth
              leadership is recognised as a professional standard and Rotaract
              clubs serve as incubators for innovation, leadership, and
              meaningful community impact.
            </p>
          </div>
          <div className="flex-1 py-12 md:pl-12">
            <h3 className="font-mono text-t-xs text-(--cta) tracking-[0.10em] uppercase mb-6">
              MISSION:
            </h3>
            <p className="font-body text-t-lg text-(--ct2) leading-[1.75]">
              To empower Rotaract clubs and members through stronger digital
              systems, transparent financial governance, and a vocational value
              chain that connects every member to mentorship, professional
              development, and global opportunities.
            </p>
          </div>
        </div>

        {/* Three Challenges — Political Campaign Style */}
        <div className="mb-32">
          {/* Section header with bold visual treatment */}
          <div className="text-center mb-16">
            <p className="font-mono text-t-xs text-(--cta) tracking-[0.10em] uppercase mb-3">
              THE REALITY
            </p>
            <h3 className="font-display text-[clamp(2rem,4vw,3rem)] text-(--ct1) leading-[0.95] tracking-[-0.02em] uppercase">
              Three Challenges We Must Face
            </h3>
            <p className="font-body text-[1rem] text-(--ct2) italic mt-4">
              Honest. Direct. No political softening.
            </p>
          </div>

          {/* Challenges container - full-width row layout */}
          <div className="space-y-0">
            {/* Challenge 1 */}
            <div className="group relative py-12 md:py-[3rem] flex flex-col md:flex-row md:grid-cols-[140px_1fr] gap-6 md:gap-12 items-start border-t border-[rgba(120,0,0,0.12)] hover:border-[2px] hover:border-[#C1121F] transition-all duration-250 ease hover:border-t-0 hover:border-b-0 hover:border-l-0">
              {/* Number badge - faint crimson, large */}
              <div className="flex flex-col items-start md:items-center mb-4 md:mb-0">
                <span className="font-display text-[clamp(3rem,5vw,5rem)] text-[rgba(193,18,31,0.15)] group-hover:text-[rgba(193,18,31,0.35)] transition-colors duration-250 ease leading-none">
                  01
                </span>
                {/* Keyword label */}
                <span className="font-mono text-[0.7rem] text-[#C1121F] tracking-[0.10em] uppercase mt-2 md:mt-1">
                  Retention
                </span>
              </div>
              
              <div>
                <h4 className="font-display text-[1.5rem] text-(--ct1) mb-4 leading-[1.1] uppercase">
                  Membership Retention
                </h4>
                <p className="font-body text-[1.0625rem] text-[#3A2A22] leading-[1.85]">
                  Many individuals join Rotaract with enthusiasm but lose interest
                  because they do not see the long-term value of their
                  involvement. The answer is not more recruitment campaigns. It is
                  a stronger experience for the members we already have.
                </p>
              </div>
            </div>

            {/* Challenge 2 */}
            <div className="group relative py-12 md:py-[3rem] flex flex-col md:flex-row md:grid-cols-[140px_1fr] gap-6 md:gap-12 items-start border-t border-[rgba(120,0,0,0.12)] hover:border-[2px] hover:border-[#C1121F] transition-all duration-250 ease hover:border-t-0 hover:border-b-0 hover:border-l-0">
              <div className="flex flex-col items-start md:items-center mb-4 md:mb-0">
                <span className="font-display text-[clamp(3rem,5vw,5rem)] text-[rgba(193,18,31,0.15)] group-hover:text-[rgba(193,18,31,0.35)] transition-colors duration-250 ease leading-none">
                  02
                </span>
                <span className="font-mono text-[0.7rem] text-[#C1121F] tracking-[0.10em] uppercase mt-2 md:mt-1">
                  Stewardship
                </span>
              </div>
              
              <div>
                <h4 className="font-display text-[1.5rem] text-(--ct1) mb-4 leading-[1.1] uppercase">
                  Financial Stewardship
                </h4>
                <p className="font-body text-[1.0625rem] text-[#3A2A22] leading-[1.85]">
                  Transparency and financial literacy are essential for any
                  organisation that wishes to build trust. Clubs must operate with
                  clear systems that ensure accountability and responsible
                  financial management — not as a compliance exercise, but as a
                  cultural standard.
                </p>
              </div>
            </div>

            {/* Challenge 3 */}
            <div className="group relative py-12 md:py-[3rem] flex flex-col md:flex-row md:grid-cols-[140px_1fr] gap-6 md:gap-12 items-start border-t border-[rgba(120,0,0,0.12)] hover:border-[2px] hover:border-[#C1121F] transition-all duration-250 ease hover:border-t-0 hover:border-b-0 hover:border-l-0">
              <div className="flex flex-col items-start md:items-center mb-4 md:mb-0">
                <span className="font-display text-[clamp(3rem,5vw,5rem)] text-[rgba(193,18,31,0.15)] group-hover:text-[rgba(193,18,31,0.35)] transition-colors duration-250 ease leading-none">
                  03
                </span>
                <span className="font-mono text-[0.7rem] text-[#C1121F] tracking-[0.10em] uppercase mt-2 md:mt-1">
                  Partnership
                </span>
              </div>
              
              <div>
                <h4 className="font-display text-[1.5rem] text-(--ct1) mb-4 leading-[1.1] uppercase">
                  Meaningful Partnerships
                </h4>
                <p className="font-body text-[1.0625rem] text-[#3A2A22] leading-[1.85]">
                  Too often, our collaborations are limited to short-term
                  sponsorships. Rotaract should build long-term alliances with
                  organisations, institutions, and Rotary networks that support
                  sustainable projects and professional opportunities — not
                  one-off logo placements.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The CIGR Framework */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="font-mono text-t-xs text-(--cta) tracking-[0.10em] uppercase mb-4">
              CIGR Strategic Analysis
            </h3>
            <p className="font-body text-[0.9rem] text-(--ct2) italic">
              My framework for understanding where the district stands — and
              where it needs to go.
            </p>
          </div>

          {/* 2px --cta (#780000) rule full width above CIGR compass */}
          <div className="h-[2px] w-full bg-(--cta) mb-12" />

          {/* CIGR Strategic Analysis Grid */}
          <CIGRGrid />
        </div>

        {/* Strategic Pillars — Framework Layout */}
        <div className="mb-32">
          <h3 className="font-mono text-t-xs text-(--cta) tracking-[0.10em] uppercase mb-4 text-center">
            FOUR STRATEGIC PILLARS
          </h3>
          <p className="font-body text-t-base text-(--ct2) text-center max-w-2xl mx-auto mb-12">
            The foundation of transformation — built on member value, mentorship, partnerships, and transparency.
          </p>

          {/* Pillars container - full-width horizontal bands */}
          <div className="space-y-0 bg-[#FDF0D5]">
            {/* Pillar 1 — Value Chain */}
            <div className="relative flex flex-col md:flex-row py-[2.5rem] md:py-0 border-t border-[rgba(120,0,0,0.10)]">
              {/* Left crimson accent bar - 3px, full height */}
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-[3px] bg-[#C1121F]" />
              
              <div className="w-full md:w-[24px] flex items-start justify-start md:justify-center pr-4 md:pr-0">
                <span className="font-display text-[4.5rem] md:text-[5rem] text-[rgba(193,18,31,0.12)] leading-none">
                  01
                </span>
              </div>
              
              <div className="flex-1 pl-[4rem] md:pl-4 md:pr-8">
                <h4 className="font-display text-[1.5rem] text-(--ct1) mb-[0.75rem] uppercase leading-[1.1]">
                  Rotaractor Value Chain
                </h4>
                <p className="font-body text-[1.0625rem] text-[#3A2A22] leading-[1.85] max-w-[640px]">
                  Map the entire member journey from recruitment to alumni
                  engagement. Each year in Rotaract should provide clear,
                  accumulating opportunities for skill development — project
                  management, public speaking, governance — that compound into a
                  genuine professional asset over time.
                </p>
              </div>
            </div>

            {/* Pillar 2 — Bridge Programme */}
            <div className="relative flex flex-col md:flex-row py-[2.5rem] md:py-0 border-t border-[rgba(120,0,0,0.10)]">
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-[3px] bg-[#C1121F]" />
              
              <div className="w-full md:w-[24px] flex items-start justify-start md:justify-center pr-4 md:pr-0">
                <span className="font-display text-[4.5rem] md:text-[5rem] text-[rgba(193,18,31,0.12)] leading-none">
                  02
                </span>
              </div>
              
              <div className="flex-1 pl-[4rem] md:pl-4 md:pr-8">
                <h4 className="font-display text-[1.5rem] text-(--ct1) mb-[0.75rem] uppercase leading-[1.1]">
                  The Bridge Programme
                </h4>
                <p className="font-body text-[1.0625rem] text-[#3A2A22] leading-[1.85] max-w-[640px]">
                  A structured mentorship initiative that connects Rotaractors
                  with Rotarians in their professional fields. Career guidance
                  through the Rotary network — not as a perk, but as a deliberate
                  system integrated into the district's annual architecture.
                </p>
              </div>
            </div>

            {/* Pillar 3 — Strategic Alliances */}
            <div className="relative flex flex-col md:flex-row py-[2.5rem] md:py-0 border-t border-[rgba(120,0,0,0.10)]">
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-[3px] bg-[#C1121F]" />
              
              <div className="w-full md:w-[24px] flex items-start justify-start md:justify-center pr-4 md:pr-0">
                <span className="font-display text-[4.5rem] md:text-[5rem] text-[rgba(193,18,31,0.12)] leading-none">
                  03
                </span>
              </div>
              
              <div className="flex-1 pl-[4rem] md:pl-4 md:pr-8">
                <h4 className="font-display text-[1.5rem] text-(--ct1) mb-[0.75rem] uppercase leading-[1.1]">
                  Strategic Alliances
                </h4>
                <p className="font-body text-[1.0625rem] text-[#3A2A22] leading-[1.85] max-w-[640px]">
                  Partnerships must evolve from transactional sponsorships into
                  meaningful long-term collaborations that support both community
                  impact and professional growth. Fewer partnerships. Deeper
                  commitments. Measurable outcomes for members.
                </p>
              </div>
            </div>

            {/* Pillar 4 — Governance & Accountability */}
            <div className="relative flex flex-col md:flex-row py-[2.5rem] md:py-0 border-t border-[rgba(120,0,0,0.10)]">
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-[3px] bg-[#C1121F]" />
              
              <div className="w-full md:w-[24px] flex items-start justify-start md:justify-center pr-4 md:pr-0">
                <span className="font-display text-[4.5rem] md:text-[5rem] text-[rgba(193,18,31,0.12)] leading-none">
                  04
                </span>
              </div>
              
              <div className="flex-1 pl-[4rem] md:pl-4 md:pr-8">
                <h4 className="font-display text-[1.5rem] text-(--ct1) mb-[0.75rem] uppercase leading-[1.1]">
                  Governance & Accountability
                </h4>
                <p className="font-body text-[1.0625rem] text-[#3A2A22] leading-[1.85] max-w-[640px]">
                  Digital reporting systems will improve transparency across the
                  district and allow us to measure success by real impact — not
                  event count. Clubs will be equipped with professional project
                  management tools, not improvised spreadsheets.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Three-Phase Action Plan — Campaign Timeline Style */}
        <div className="mb-32">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="font-mono text-t-xs text-(--cta) tracking-[0.10em] uppercase mb-3">
              THE COMMITMENT
            </p>
            <h3 className="font-display text-[clamp(2rem,4vw,3rem)] text-(--ct1) leading-[0.95] tracking-[-0.02em] uppercase">
              Three-Phase Action Plan
            </h3>
            <p className="font-body text-[1rem] text-(--ct2) italic mt-4">
              A clear roadmap for transformation — measurable, accountable, delivered.
            </p>
          </div>

          {/* Timeline container */}
          <div className="relative">
            {/* Vertical timeline line - desktop only */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--crimson)] via-[var(--crimson)] to-[var(--cb)]" />

            <div className="flex flex-col gap-12 md:gap-16">
              {/* Phase 1 */}
              <div className="relative md:flex items-center gap-8 group">
                {/* Timeline node */}
                <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-[var(--crimson)] rounded-full border-4 border-[var(--bg)] z-10 group-hover:scale-125 transition-transform duration-300" />

                {/* Content card - mobile: full width with left margin, desktop: left side */}
                <div className="ml-20 md:ml-0 md:w-[calc(50%-2rem)] md:mr-auto bg-[var(--bg-card)] border border-[var(--cb)] p-8 transition-all duration-300 hover:border-[var(--crimson)] hover:shadow-lg">
                  {/* Phase badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-display text-[3rem] font-bold text-[var(--crimson)] opacity-20">01</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-[var(--crimson)] to-transparent" />
                  </div>

                  <h4 className="font-display text-[1.5rem] text-(--ct1) mb-2 uppercase leading-[1.1]">
                    Purpose-Led Leadership
                  </h4>
                  <p className="font-mono text-[0.75rem] text-(--cta) tracking-[0.15em] uppercase mb-4">
                    First Quarter
                  </p>

                  <p className="font-body text-t-base text-(--ct2) leading-[1.75]">
                    Workshops that help club leaders clearly define purpose and
                    align activities with meaningful outcomes. Member wellbeing
                    assessments to identify and prevent burnout before it shows up
                    as attrition.
                  </p>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="relative md:flex items-center gap-8 group">
                <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-[var(--navy)] rounded-full border-4 border-[var(--bg)] z-10 group-hover:scale-125 transition-transform duration-300" />

                <div className="ml-20 md:ml-0 md:w-[calc(50%-2rem)] md:ml-auto bg-[var(--bg-card)] border border-[var(--cb)] p-8 transition-all duration-300 hover:border-[var(--navy)] hover:shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-display text-[3rem] font-bold text-[var(--navy)] opacity-20">02</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-[var(--navy)] to-transparent" />
                  </div>

                  <h4 className="font-display text-[1.5rem] text-(--ct1) mb-2 uppercase leading-[1.1]">
                    Change Management
                  </h4>
                  <p className="font-mono text-[0.75rem] text-(--cta) tracking-[0.15em] uppercase mb-4">
                    Second Quarter
                  </p>

                  <p className="font-body text-t-base text-(--ct2) leading-[1.75]">
                    Digital systems for reporting, attendance tracking, and
                    financial management. Governance support for clubs to strengthen
                    administrative and financial structures from the ground up — not
                    top-down mandates.
                  </p>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="relative md:flex items-center gap-8 group">
                <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-[var(--crimson-dark)] rounded-full border-4 border-[var(--bg)] z-10 group-hover:scale-125 transition-transform duration-300" />

                <div className="ml-20 md:ml-0 md:w-[calc(50%-2rem)] md:mr-auto bg-[var(--bg-card)] border border-[var(--cb)] p-8 transition-all duration-300 hover:border-[var(--crimson)] hover:shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-display text-[3rem] font-bold text-[var(--crimson-dark)] opacity-20">03</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-[var(--crimson-dark)] to-transparent" />
                  </div>

                  <h4 className="font-display text-[1.5rem] text-(--ct1) mb-2 uppercase leading-[1.1]">
                    Impact Realisation
                  </h4>
                  <p className="font-mono text-[0.75rem] text-(--cta) tracking-[0.15em] uppercase mb-4">
                    Second Half
                  </p>

                  <p className="font-body text-t-base text-(--ct2) leading-[1.75]">
                    A public digital dashboard showcasing the district's collective
                    contribution to global development goals. Culminating in the
                    Perspective Summit — a district-wide platform for professional
                    development, networking, and leadership growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values — Typographic Stack */}
        <div className="mb-16">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="font-mono text-t-xs text-(--cta) tracking-[0.10em] uppercase mb-3">
              THE PRINCIPLES
            </p>
            <h3 className="font-display text-[clamp(2rem,4vw,3rem)] text-(--ct1) leading-[0.95] tracking-[-0.02em] uppercase">
              Core Values
            </h3>
            <p className="font-body text-[1rem] text-(--ct2) italic mt-4">
              The non-negotiables that guide every decision, every action, every outcome.
            </p>
          </div>

          {/* Values - Full-width rows with name left and description right */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-0 bg-[#FDF0D5]">
            {[
              {
                name: "Service Above Self",
                desc: "Projects must create genuine and sustainable impact.",
              },
              {
                name: "Leadership Development",
                desc: "Every Rotaractor deserves the opportunity to grow.",
              },
              {
                name: "Integrity & Accountability",
                desc: "Transparency is not a policy. It is a culture.",
              },
              {
                name: "Collaboration",
                desc: "Rotaract's greatest work happens at the intersections.",
              },
              {
                name: "Innovation & Adaptability",
                desc: "A youth movement that stops evolving stops mattering.",
              },
            ].map((val, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row items-start md:items-center justify-between py-[1.5rem] md:py-0 md:px-8 border-b border-[rgba(120,0,0,0.10)]"
              >
                <h4 className="font-display text-[1.75rem] text-(--ct1) mb-2 md:mb-0 uppercase leading-[1.2]">
                  {val.name}
                </h4>
                <p className="font-body text-[0.95rem] text-[#5A3D3A] italic max-w-[500px] md:ml-8">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA — Campaign Style */}
        <div className="relative mt-24 mb-8">
          {/* Background treatment */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--crimson-dim)] to-[var(--navy-dim)] rounded-2xl" />
          <div className="relative bg-[var(--bg-card)] border border-[var(--cb)] rounded-2xl p-8 md:p-12 text-center">
            <h3 className="font-display text-[clamp(1.75rem,3vw,2.25rem)] text-(--ct1) mb-3 uppercase leading-[1.1]">
              Ready to Transform Our District
            </h3>
            <p className="font-body text-[1rem] text-(--ct2) mb-8 max-w-xl mx-auto">
              Join the movement. Together, we can build a Rotaract district that sets the standard for youth leadership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex justify-center items-center bg-(--crimson) text-[var(--bg)] font-display font-semibold text-[0.95rem] uppercase tracking-[0.08em] min-h-12 px-10 py-4 hover:bg-(--crimson-dark) transition-colors"
              >
                Endorse This Vision
              </a>
              <a
                href="#campaign"
                className="inline-flex justify-center items-center border border-[var(--crimson)] text-(--crimson) font-display font-semibold text-[0.95rem] uppercase tracking-[0.08em] min-h-12 px-10 py-4 hover:bg-[var(--crimson-dim)] transition-colors"
              >
                Share The Plan
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}