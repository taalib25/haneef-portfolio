import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CIGRGrid from "../ui/CIGRGrid";

gsap.registerPlugin(ScrollTrigger);

export default function Campaign() {
  const containerRef = useRef<HTMLElement>(null);
  const phaseStepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const valueItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const runningForRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // "Running for" highlight animation
      if (runningForRef.current) {
        const highlight = runningForRef.current.querySelector('.highlight-overlay');
        if (highlight) {
          gsap.fromTo(
            highlight,
            { width: '0%' },
            {
              width: '100%',
              duration: 1.2,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: runningForRef.current,
                start: 'top 75%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      }

      // Three-Phase Action Plan animations
      phaseStepsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power2.out",
            delay: i * 0.12,
            scrollTrigger: {
              trigger: ".phase-track",
              start: "top 78%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Core Values animations
      valueItemsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 14 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: "power2.out",
            delay: i * 0.07,
            scrollTrigger: {
              trigger: el,
              start: "top 86%",
              toggleActions: "play none none none",
            },
          }
        );
      });
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
              <div ref={runningForRef} className="inline-block relative">
                <span className="relative z-10">RUNNING FOR</span>
                <span className="highlight-overlay absolute inset-0 bg-[rgba(255,220,0,0.35)] z-0" style={{ width: '0%', left: 0, top: 0, bottom: 0 }} />
              </div>
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
              To transform our district into a place where youth
              <br />
              leadership is recognised as a professional standard.
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
          <div className="font-body text-[1.0625rem] text-(--ct2) leading-[1.75] space-y-6 italic">
            <p>
              I am running for District Rotaract Representative because I
              believe our district is at a crossroads. Over time, the
              Rotaract experience has shifted toward activity rather than
              impact. Clubs are active, but we need to ask whether our efforts
              create the long-term value Rotaract was meant to deliver.
            </p>
            <p>
              My decision to run comes from a simple belief: Rotaract should
              be a transformative experience for every member. When someone
              joins, they should gain access to leadership opportunities,
              mentorship, professional development, and meaningful service —
              not just a roster of events to attend.
            </p>
            <p>
              I want to bridge the gap between the potential of our youth and
              the global strength of the Rotary movement. Rotaract should move
              beyond being seen as just volunteering and instead become a
              platform for real leadership development.
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
              To transform our district into a place where youth leadership is
              recognised as a professional standard and Rotaract clubs serve as
              centers for innovation, leadership, and meaningful community impact.
            </p>
          </div>
          <div className="flex-1 py-12 md:pl-12">
            <h3 className="font-mono text-t-xs text-(--cta) tracking-[0.10em] uppercase mb-6">
              MISSION:
            </h3>
            <p className="font-body text-t-lg text-(--ct2) leading-[1.75]">
              To empower Rotaract clubs and members through stronger digital
              systems, transparent financial governance, and a clear path that
              connects every member to mentorship, professional development,
              and global opportunities.
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
            <h3 className="font-display text-[clamp(2rem,4vw,3rem)] text-[#780000] leading-[0.95] tracking-[-0.02em] uppercase">
              Three Challenges We Must Face
            </h3>
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
                  Many people join Rotaract with enthusiasm but lose interest
                  because they do not see long-term value in their involvement.
                  The answer is not more recruitment campaigns. It is creating a
                  stronger experience for the members we already have.
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
                  organisation that wants to build trust. Clubs must operate with
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
            <p className="font-body text-[0.9rem] text-(--ct2) italic justify-center">
              My framework for understanding where the district stands and
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
          <div className="text-left mb-12">
            <p className="font-mono text-t-xs text-(--cta) tracking-[0.10em] uppercase mb-4">
              FOUR STRATEGIC PILLARS
            </p>
            <h3 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] text-(--ct1) leading-[0.95] tracking-[-0.025em] uppercase mb-4">
              The Framework
            </h3>
            <p className="font-body text-t-base text-(--ct2) max-w-2xl">
              Built on member value, mentorship, partnerships, and transparency.
            </p>
          </div>

          {/* Pillars container - full-width horizontal bands with new grid */}
          <div className="space-y-0 bg-[#FDF0D5]">
            {/* Pillar 1 — Value Chain */}
            <div className="relative flex border-t border-[rgba(120,0,0,0.10)]">
              {/* Left crimson accent bar - 3px, full height */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#C1121F]" />

              {/* Number column - 60px width */}
              <div className="w-[60px] flex-shrink-0 flex items-center justify-center border-r border-[rgba(193,18,31,0.15)]">
                <span className="font-display text-[3rem] font-bold text-[rgba(193,18,31,0.25)] leading-none">
                  01
                </span>
              </div>

              {/* Content column */}
              <div className="flex-1 py-[2.5rem] pl-6 pr-4">
                <h4 className="font-display text-[1.35rem] text-[#003049] mb-[0.6rem] font-semibold uppercase leading-[1.1]">
                  Rotaractor Value Chain
                </h4>
                <p className="font-body text-[1.0625rem] text-[#3A2A22] leading-[1.85] max-w-[640px]">
                  Map the entire member journey from recruitment to alumni
                  engagement. Each year in Rotaract should provide clear
                  opportunities for skill development — project management,
                  public speaking, governance — that compound into a genuine
                  professional asset over time.
                </p>
              </div>
            </div>

            {/* Pillar 2 — Bridge Programme */}
            <div className="relative flex border-t border-[rgba(120,0,0,0.10)]">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#C1121F]" />

              <div className="w-[60px] flex-shrink-0 flex items-center justify-center border-r border-[rgba(193,18,31,0.15)]">
                <span className="font-display text-[3rem] font-bold text-[rgba(193,18,31,0.25)] leading-none">
                  02
                </span>
              </div>

              <div className="flex-1 py-[2.5rem] pl-6 pr-4">
                <h4 className="font-display text-[1.35rem] text-[#003049] mb-[0.6rem] font-semibold uppercase leading-[1.1]">
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
            <div className="relative flex border-t border-[rgba(120,0,0,0.10)]">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#C1121F]" />

              <div className="w-[60px] flex-shrink-0 flex items-center justify-center border-r border-[rgba(193,18,31,0.15)]">
                <span className="font-display text-[3rem] font-bold text-[rgba(193,18,31,0.25)] leading-none">
                  03
                </span>
              </div>

              <div className="flex-1 py-[2.5rem] pl-6 pr-4">
                <h4 className="font-display text-[1.35rem] text-[#003049] mb-[0.6rem] font-semibold uppercase leading-[1.1]">
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
            <div className="relative flex border-t border-[rgba(120,0,0,0.10)]">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#C1121F]" />

              <div className="w-[60px] flex-shrink-0 flex items-center justify-center border-r border-[rgba(193,18,31,0.15)]">
                <span className="font-display text-[3rem] font-bold text-[rgba(193,18,31,0.25)] leading-none">
                  04
                </span>
              </div>

              <div className="flex-1 py-[2.5rem] pl-6 pr-4">
                <h4 className="font-display text-[1.35rem] text-[#003049] mb-[0.6rem] font-semibold uppercase leading-[1.1]">
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
            <p className="font-mono text-[9.5px] text-(--cta) tracking-[0.10em] uppercase mb-3">
              THE COMMITMENT
            </p>
            <h3 className="font-display text-[clamp(2rem,4vw,3rem)] text-[#780000] leading-[0.95] tracking-[-0.025em] uppercase">
              Three-Phase Action Plan
            </h3>
            <p className="font-body text-[1rem] text-(--ct2) italic mt-4">
              A clear roadmap for transformation — measurable, accountable, delivered.
            </p>
          </div>

          {/* Mobile: vertical step track (below 768px) */}
          {/* Desktop: three columns (768px and above) */}
          <div className="phase-track md:phase-track-hidden relative md:static">
            {/* Mobile connecting line */}
            <div className="md:hidden absolute left-[calc(1.25rem+19px)] top-2 bottom-12 w-px bg-[rgba(193,18,31,0.16)]" />

            {/* Phase Step 1 */}
            <div
              ref={(el) => { phaseStepsRef.current[0] = el; }}
              className="phase-step-0 phase-step flex md:block gap-5 md:gap-0 pb-8 md:pb-0 md:p-6 last:pb-0"
            >
              {/* Mobile circle (left column, 40px) */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full border-[1.5px] border-(--crimson) bg-(--bg-campaign) flex items-center justify-center relative z-10 md:hidden">
                <span className="font-display text-[1rem] font-bold text-(--crimson)">01</span>
              </div>

              {/* Content (right column on mobile, full on desktop) */}
              <div className="flex-1 pt-[0.4rem] md:pt-0">
                {/* Desktop: large background number */}
                <span className="hidden md:block font-display text-[5rem] font-bold tracking-[-0.04em] text-[rgba(193,18,31,0.07)] mb-[-1rem]">
                  01
                </span>

                {/* Phase kicker */}
                <p className="font-mono text-[9px] tracking-[0.08em] text-(--crimson) uppercase mb-[0.35rem]">
                  Phase 01 — First Quarter
                </p>

                {/* Phase title */}
                <h4 className="font-display text-[1.1rem] md:text-[1rem] font-bold text-(--ct1) tracking-[-0.015em] leading-[1.15] mb-[0.6rem]">
                  Purpose-Led Leadership
                </h4>

                {/* Divider */}
                <div className="h-px w-full bg-[rgba(15,6,8,0.08)] mb-[0.6rem]" />

                {/* Body paragraphs */}
                <p className="font-body text-[0.9375rem] md:text-[0.875rem] text-(--ct2) leading-[1.75] mb-[0.45rem]">
                  Workshops that help club leaders define their purpose
                  and align their activities with meaningful outcomes.
                </p>
                <p className="font-body text-[0.9375rem] md:text-[0.875rem] text-(--ct2) leading-[1.75] mb-0">
                  Member wellbeing assessments to identify and prevent burnout
                  before it shows up as attrition.
                </p>
              </div>
            </div>

            {/* Phase Step 2 - Mobile */}
            <div
              ref={(el) => { phaseStepsRef.current[1] = el; }}
              className="phase-step-1 phase-step flex md:block gap-5 md:gap-0 pb-8 md:pb-0 md:p-6 last:pb-0"
            >
              {/* Mobile circle (left column, 40px) */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full border-[1.5px] border-(--crimson) bg-(--bg-campaign) flex items-center justify-center relative z-10 md:hidden">
                <span className="font-display text-[1rem] font-bold text-(--crimson)">02</span>
              </div>

              {/* Content (right column on mobile, full on desktop) */}
              <div className="flex-1 pt-[0.4rem] md:pt-0">
                {/* Desktop: large background number */}
                <span className="hidden md:block font-display text-[5rem] font-bold tracking-[-0.04em] text-[rgba(193,18,31,0.07)] mb-[-1rem]">
                  02
                </span>

                {/* Phase kicker */}
                <p className="font-mono text-[9px] tracking-[0.08em] text-(--crimson) uppercase mb-[0.35rem]">
                  Phase 02 — Second Quarter
                </p>

                {/* Phase title */}
                <h4 className="font-display text-[1.1rem] md:text-[1rem] font-bold text-(--ct1) tracking-[-0.015em] leading-[1.15] mb-[0.6rem]">
                  Change Management
                </h4>

                {/* Divider */}
                <div className="h-px w-full bg-[rgba(15,6,8,0.08)] mb-[0.6rem]" />

                {/* Body paragraphs */}
                <p className="font-body text-[0.9375rem] md:text-[0.875rem] text-(--ct2) leading-[1.75] mb-[0.45rem]">
                  Digital systems that simplify reporting, attendance tracking,
                  and financial management.
                </p>
                <p className="font-body text-[0.9375rem] md:text-[0.875rem] text-(--ct2) leading-[1.75] mb-0">
                  Clubs receive governance support to strengthen administrative
                  and financial structures from the ground up — not top-down mandates.
                </p>
              </div>
            </div>

            {/* Phase Step 3 - Mobile */}
            <div
              ref={(el) => { phaseStepsRef.current[2] = el; }}
              className="phase-step-2 phase-step flex md:block gap-5 md:gap-0 pb-8 md:pb-0 md:p-6 last:pb-0"
            >
              {/* Mobile circle (left column, 40px) */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full border-[1.5px] border-(--crimson) bg-(--bg-campaign) flex items-center justify-center relative z-10 md:hidden">
                <span className="font-display text-[1rem] font-bold text-(--crimson)">03</span>
              </div>

              {/* Content (right column on mobile, full on desktop) */}
              <div className="flex-1 pt-[0.4rem] md:pt-0">
                {/* Desktop: large background number */}
                <span className="hidden md:block font-display text-[5rem] font-bold tracking-[-0.04em] text-[rgba(193,18,31,0.07)] mb-[-1rem]">
                  03
                </span>

                {/* Phase kicker */}
                <p className="font-mono text-[9px] tracking-[0.08em] text-(--crimson) uppercase mb-[0.35rem]">
                  Phase 03 — Second Half
                </p>

                {/* Phase title */}
                <h4 className="font-display text-[1.1rem] md:text-[1rem] font-bold text-(--ct1) tracking-[-0.015em] leading-[1.15] mb-[0.6rem]">
                  Impact Realisation
                </h4>

                {/* Divider */}
                <div className="h-px w-full bg-[rgba(15,6,8,0.08)] mb-[0.6rem]" />

                {/* Body paragraphs */}
                <p className="font-body text-[0.9375rem] md:text-[0.875rem] text-(--ct2) leading-[1.75] mb-[0.45rem]">
                  A public digital dashboard showcasing the district's collective
                  contribution to global development goals.
                </p>
                <p className="font-body text-[0.9375rem] md:text-[0.875rem] text-(--ct2) leading-[1.75] mb-0">
                  Culminating in the Perspective Summit — a district-wide platform
                  focused on professional development, networking, and leadership growth.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values — Typographic Stack */}
        <div className="mb-16">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="font-mono text-[9.5px] text-(--cta) tracking-[0.10em] uppercase mb-3">
              THE PRINCIPLES
            </p>
            <h3 className="font-display text-[clamp(2rem,4vw,3rem)] text-[#780000] leading-[0.95] tracking-[-0.025em] uppercase">
              Core Values
            </h3>
            <p className="font-body text-[1rem] text-(--ct2) italic mt-4">
              The non-negotiables that guide every decision, every action, every outcome.
            </p>
          </div>

          {/* Values container */}
          <div className="px-5 md:px-0 pb-8">
            {/* Value Item 1 */}
            <div
              ref={(el) => { valueItemsRef.current[0] = el; }}
              className="value-item py-[1.15rem] md:py-[1.4rem] border-b border-[rgba(120,0,0,0.12)] first:border-t first:border-[rgba(120,0,0,0.12)] transition-colors duration-200 ease group"
            >
              {/* Desktop grid layout */}
              <div className="hidden md:grid md:grid-cols-[220px_1fr] md:gap-10 md:items-center">
                {/* Left column: number + name */}
                <div className="flex items-baseline gap-[0.7rem]">
                  <span className="font-mono text-[9px] tracking-[0.06em] text-[rgba(193,18,31,0.35)] flex-shrink-0">01</span>
                  <h4 className="font-display text-[1.2rem] font-bold text-(--ct1) tracking-[-0.015em] leading-[1.1] transition-colors duration-200 ease group-hover:text-(--crimson)">
                    Service Above Self
                  </h4>
                </div>
                {/* Right column: description */}
                <p className="font-body text-[1rem] text-(--ct2) leading-[1.75]">
                  Projects should create real and sustainable impact in the communities we serve.
                </p>
              </div>

              {/* Mobile layout */}
              <div className="md:hidden">
                {/* Top row: number + name */}
                <div className="flex items-baseline gap-[0.7rem] mb-[0.45rem]">
                  <span className="font-mono text-[9px] tracking-[0.06em] text-[rgba(193,18,31,0.35)] flex-shrink-0">01</span>
                  <h4 className="font-display text-[1.1rem] font-bold text-(--ct1) tracking-[-0.015em] leading-[1.1] transition-colors duration-200 ease group-hover:text-(--crimson)">
                    Service Above Self
                  </h4>
                </div>
                {/* Description below, indented to align under name */}
                <p className="font-body text-[0.9375rem] text-(--ct2) leading-[1.72] pl-[calc(9px+0.7rem+2px)]">
                  Our projects should create genuine and sustainable impact within the communities we serve.
                </p>
              </div>
            </div>

            {/* Value Item 2 */}
            <div
              ref={(el) => { valueItemsRef.current[1] = el; }}
              className="value-item py-[1.15rem] md:py-[1.4rem] border-b border-[rgba(120,0,0,0.12)] transition-colors duration-200 ease group"
            >
              <div className="hidden md:grid md:grid-cols-[220px_1fr] md:gap-10 md:items-center">
                <div className="flex items-baseline gap-[0.7rem]">
                  <span className="font-mono text-[9px] tracking-[0.06em] text-[rgba(193,18,31,0.35)] flex-shrink-0">02</span>
                  <h4 className="font-display text-[1.2rem] font-bold text-(--ct1) tracking-[-0.015em] leading-[1.1] transition-colors duration-200 ease group-hover:text-(--crimson)">
                    Leadership Development
                  </h4>
                </div>
                <p className="font-body text-[1rem] text-(--ct2) leading-[1.75]">
                  Every Rotaractor should have the opportunity to build their skills, develop
                  confidence, and grow as a leader.
                </p>
              </div>

              <div className="md:hidden">
                <div className="flex items-baseline gap-[0.7rem] mb-[0.45rem]">
                  <span className="font-mono text-[9px] tracking-[0.06em] text-[rgba(193,18,31,0.35)] flex-shrink-0">02</span>
                  <h4 className="font-display text-[1.1rem] font-bold text-(--ct1) tracking-[-0.015em] leading-[1.1] transition-colors duration-200 ease group-hover:text-(--crimson)">
                    Leadership Development
                  </h4>
                </div>
                <p className="font-body text-[0.9375rem] text-(--ct2) leading-[1.72] pl-[calc(9px+0.7rem+2px)]">
                  Every Rotaractor should have the opportunity to strengthen their skills, build
                  confidence, and grow as a leader.
                </p>
              </div>
            </div>

            {/* Value Item 3 */}
            <div
              ref={(el) => { valueItemsRef.current[2] = el; }}
              className="value-item py-[1.15rem] md:py-[1.4rem] border-b border-[rgba(120,0,0,0.12)] transition-colors duration-200 ease group"
            >
              <div className="hidden md:grid md:grid-cols-[220px_1fr] md:gap-10 md:items-center">
                <div className="flex items-baseline gap-[0.7rem]">
                  <span className="font-mono text-[9px] tracking-[0.06em] text-[rgba(193,18,31,0.35)] flex-shrink-0">03</span>
                  <h4 className="font-display text-[1.2rem] font-bold text-(--ct1) tracking-[-0.015em] leading-[1.1] transition-colors duration-200 ease group-hover:text-(--crimson)">
                    Integrity & Accountability
                  </h4>
                </div>
                <p className="font-body text-[1rem] text-(--ct2) leading-[1.75]">
                  Transparency builds trust and keeps our organisation strong and credible.
                </p>
              </div>

              <div className="md:hidden">
                <div className="flex items-baseline gap-[0.7rem] mb-[0.45rem]">
                  <span className="font-mono text-[9px] tracking-[0.06em] text-[rgba(193,18,31,0.35)] flex-shrink-0">03</span>
                  <h4 className="font-display text-[1.1rem] font-bold text-(--ct1) tracking-[-0.015em] leading-[1.1] transition-colors duration-200 ease group-hover:text-(--crimson)">
                    Integrity & Accountability
                  </h4>
                </div>
                <p className="font-body text-[0.9375rem] text-(--ct2) leading-[1.72] pl-[calc(9px+0.7rem+2px)]">
                  Transparency builds trust and ensures that our organisation remains strong and credible.
                </p>
              </div>
            </div>

            {/* Value Item 4 */}
            <div
              ref={(el) => { valueItemsRef.current[3] = el; }}
              className="value-item py-[1.15rem] md:py-[1.4rem] border-b border-[rgba(120,0,0,0.12)] transition-colors duration-200 ease group"
            >
              <div className="hidden md:grid md:grid-cols-[220px_1fr] md:gap-10 md:items-center">
                <div className="flex items-baseline gap-[0.7rem]">
                  <span className="font-mono text-[9px] tracking-[0.06em] text-[rgba(193,18,31,0.35)] flex-shrink-0">04</span>
                  <h4 className="font-display text-[1.2rem] font-bold text-(--ct1) tracking-[-0.015em] leading-[1.1] transition-colors duration-200 ease group-hover:text-(--crimson)">
                    Collaboration & Partnership
                  </h4>
                </div>
                <p className="font-body text-[1rem] text-(--ct2) leading-[1.75]">
                  Rotaract achieves its greatest impact when clubs, Rotarians, institutions, and
                  corporate partners work together toward a common purpose.
                </p>
              </div>

              <div className="md:hidden">
                <div className="flex items-baseline gap-[0.7rem] mb-[0.45rem]">
                  <span className="font-mono text-[9px] tracking-[0.06em] text-[rgba(193,18,31,0.35)] flex-shrink-0">04</span>
                  <h4 className="font-display text-[1.1rem] font-bold text-(--ct1) tracking-[-0.015em] leading-[1.1] transition-colors duration-200 ease group-hover:text-(--crimson)">
                    Collaboration & Partnership
                  </h4>
                </div>
                <p className="font-body text-[0.9375rem] text-(--ct2) leading-[1.72] pl-[calc(9px+0.7rem+2px)]">
                  Rotaract achieves its greatest impact when clubs, Rotarians, institutions, and
                  corporate partners work together toward a common purpose.
                </p>
              </div>
            </div>

            {/* Value Item 5 */}
            <div
              ref={(el) => { valueItemsRef.current[4] = el; }}
              className="value-item py-[1.15rem] md:py-[1.4rem] border-b border-[rgba(120,0,0,0.12)] transition-colors duration-200 ease group"
            >
              <div className="hidden md:grid md:grid-cols-[220px_1fr] md:gap-10 md:items-center">
                <div className="flex items-baseline gap-[0.7rem]">
                  <span className="font-mono text-[9px] tracking-[0.06em] text-[rgba(193,18,31,0.35)] flex-shrink-0">05</span>
                  <h4 className="font-display text-[1.2rem] font-bold text-(--ct1) tracking-[-0.015em] leading-[1.1] transition-colors duration-200 ease group-hover:text-(--crimson)">
                    Innovation & Adaptability
                  </h4>
                </div>
                <p className="font-body text-[1rem] text-(--ct2) leading-[1.75]">
                  As a youth-driven movement, we must adapt to meet the needs of our
                  members and communities.
                </p>
              </div>

              <div className="md:hidden">
                <div className="flex items-baseline gap-[0.7rem] mb-[0.45rem]">
                  <span className="font-mono text-[9px] tracking-[0.06em] text-[rgba(193,18,31,0.35)] flex-shrink-0">05</span>
                  <h4 className="font-display text-[1.1rem] font-bold text-(--ct1) tracking-[-0.015em] leading-[1.1] transition-colors duration-200 ease group-hover:text-(--crimson)">
                    Innovation & Adaptability
                  </h4>
                </div>
                <p className="font-body text-[0.9375rem] text-(--ct2) leading-[1.72] pl-[calc(9px+0.7rem+2px)]">
                  As a youth-driven movement, we must continuously evolve to meet the needs of our
                  members and communities.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
