import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CIGRGrid from "../ui/CIGRGrid";

gsap.registerPlugin(ScrollTrigger);

export default function Campaign() {
  const containerRef = useRef<HTMLElement>(null);
  const phaseStepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const valueItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
      className="py-14 md:py-20 px-4 md:px-6 lg:px-8 bg-(--bg-campaign) text-(--ct1)"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header - DRR Banner - CIGR Style */}
        <div className="relative mb-10 md:mb-16 text-center py-12 md:py-16 px-6 border border-(--cb)">
          <div className="relative z-10">
            <p className="font-mono text-(--ta) text-[9.5px] tracking-[0.10em] uppercase mb-4 md:mb-6">
              [ 04 — DISTRICT REPRESENTATIVE ]
            </p>
            <h2 className="font-display text-t-4xl text-[#780000] leading-[0.95] tracking-[-0.025em] uppercase mb-4 md:mb-6">
              District 3220 · <span className="text-[#C1121F]">Sri Lanka</span> & <span className="text-[#C1121F]">Maldives</span>
            </h2>
            <p className="font-mono text-t-xs text-(--crimson) tracking-[0.10em] uppercase">
              2025–2026
            </p>
          </div>
        </div>

        {/* THE DRR STATEMENT: A Promise, Not a Paragraph */}
        <div className="max-w-4xl mx-auto">
          {/* 2px crimson rule above DRR statement block */}
          <div className="h-[2px] w-full bg-(--crimson) mb-12" />

          <div className="text-center px-4">
            <p className="font-mono text-[0.8rem] text-[#780000] tracking-[0.12em] uppercase mb-6">
              THE PROMISE
            </p>

            <p className="font-display text-[clamp(1.25rem,2.5vw,1.75rem)] text-(--ct1) leading-[1.4] tracking-[-0.01em]">
              To transform our district into a place where youth
              <br />
              leadership is recognised as a professional standard.
            </p>

            <p className="font-body text-[0.85rem] italic text-[#9A7F7A] mt-6">
              — Haneef Mohamed, DRR Candidate, District 3220
            </p>
          </div>

          {/* 2px crimson rule below DRR statement block */}
          <div className="h-[2px] w-full bg-(--crimson) mt-12" />
        </div>

        {/* Why I Am Running */}
        <div className="max-w-3xl mx-auto mb-20 md:mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-[32px] h-[2px] bg-(--crimson)" />
            <p className="font-mono text-[0.7rem] text-(--crimson) tracking-[0.10em] uppercase">
              Why I Am Running
            </p>
          </div>
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
        <div className="flex flex-col md:flex-row mb-20 md:mb-24 border-t border-b border-(--cb)">
          <div className="flex-1 py-10 md:pr-10 border-b md:border-b-0 md:border-r border-(--cb)">
            <h3 className="font-mono text-[0.7rem] text-(--crimson) tracking-[0.10em] uppercase mb-4">
              VISION:
            </h3>
            <p className="font-body text-[1rem] text-(--ct2) leading-[1.75]">
              To transform our district into a place where youth leadership is
              recognised as a professional standard and Rotaract clubs serve as
              centers for innovation, leadership, and meaningful community impact.
            </p>
          </div>
          <div className="flex-1 py-10 md:pl-10">
            <h3 className="font-mono text-[0.7rem] text-(--crimson) tracking-[0.10em] uppercase mb-4">
              MISSION:
            </h3>
            <p className="font-body text-[1rem] text-(--ct2) leading-[1.75]">
              To empower Rotaract clubs and members through stronger digital
              systems, transparent financial governance, and a clear path that
              connects every member to mentorship, professional development,
              and global opportunities.
            </p>
          </div>
        </div>

        {/* Three Challenges — Political Campaign Style */}
        <div className="mb-20 md:mb-24">
          {/* Section header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-[32px] h-[2px] bg-(--crimson)" />
              <p className="font-mono text-[0.7rem] text-(--crimson) tracking-[0.10em] uppercase">
                The Reality
              </p>
            </div>
            <h3 className="font-display text-t-4xl text-[#780000] leading-[0.95] tracking-[-0.025em] uppercase">
              Three Challenges We Must Face
            </h3>
          </div>

          {/* Challenges container - full-width row layout */}
          <div className="space-y-0">
            {/* Challenge 1 */}
            <div className="group relative py-10 md:py-[2.5rem] flex flex-col md:flex-row md:grid-cols-[100px_1fr] gap-6 md:gap-10 items-start border-t border-[rgba(120,0,0,0.12)] hover:border-[2px] hover:border-[#C1121F] transition-all duration-250 ease hover:border-t-0 hover:border-b-0 hover:border-l-0">
              {/* Number badge - crimson */}
              <div className="flex flex-col items-start md:items-center mb-3 md:mb-0">
                <span className="font-display text-[clamp(2.5rem,4vw,4rem)] text-[rgba(193,18,31,0.15)] group-hover:text-[rgba(193,18,31,0.35)] transition-colors duration-250 ease leading-none">
                  01
                </span>
                {/* Keyword label */}
                <span className="font-mono text-[0.65rem] text-[#C1121F] tracking-[0.10em] uppercase mt-1 md:mt-1">
                  Retention
                </span>
              </div>

              <div>
                <h4 className="font-display text-[1.35rem] text-(--ct1) mb-3 leading-[1.1] uppercase">
                  Membership Retention
                </h4>
                <p className="font-body text-[1rem] text-(--ct2) leading-[1.75]">
                  Many people join Rotaract with enthusiasm but lose interest
                  because they do not see long-term value in their involvement.
                  The answer is not more recruitment campaigns. It is creating a
                  stronger experience for the members we already have.
                </p>
              </div>
            </div>

            {/* Challenge 2 */}
            <div className="group relative py-10 md:py-[2.5rem] flex flex-col md:flex-row md:grid-cols-[100px_1fr] gap-6 md:gap-10 items-start border-t border-[rgba(120,0,0,0.12)] hover:border-[2px] hover:border-[#C1121F] transition-all duration-250 ease hover:border-t-0 hover:border-b-0 hover:border-l-0">
              <div className="flex flex-col items-start md:items-center mb-3 md:mb-0">
                <span className="font-display text-[clamp(2.5rem,4vw,4rem)] text-[rgba(193,18,31,0.15)] group-hover:text-[rgba(193,18,31,0.35)] transition-colors duration-250 ease leading-none">
                  02
                </span>
                <span className="font-mono text-[0.65rem] text-[#C1121F] tracking-[0.10em] uppercase mt-1 md:mt-1">
                  Stewardship
                </span>
              </div>

              <div>
                <h4 className="font-display text-[1.35rem] text-(--ct1) mb-3 leading-[1.1] uppercase">
                  Financial Stewardship
                </h4>
                <p className="font-body text-[1rem] text-(--ct2) leading-[1.75]">
                  Transparency and financial literacy are essential for any
                  organisation that wants to build trust. Clubs must operate with
                  clear systems that ensure accountability and responsible
                  financial management — not as a compliance exercise, but as a
                  cultural standard.
                </p>
              </div>
            </div>

            {/* Challenge 3 */}
            <div className="group relative py-10 md:py-[2.5rem] flex flex-col md:flex-row md:grid-cols-[100px_1fr] gap-6 md:gap-10 items-start border-t border-[rgba(120,0,0,0.12)] hover:border-[2px] hover:border-[#C1121F] transition-all duration-250 ease hover:border-t-0 hover:border-b-0 hover:border-l-0">
              <div className="flex flex-col items-start md:items-center mb-3 md:mb-0">
                <span className="font-display text-[clamp(2.5rem,4vw,4rem)] text-[rgba(193,18,31,0.15)] group-hover:text-[rgba(193,18,31,0.35)] transition-colors duration-250 ease leading-none">
                  03
                </span>
                <span className="font-mono text-[0.65rem] text-[#C1121F] tracking-[0.10em] uppercase mt-1 md:mt-1">
                  Partnership
                </span>
              </div>

              <div>
                <h4 className="font-display text-[1.35rem] text-(--ct1) mb-3 leading-[1.1] uppercase">
                  Meaningful Partnerships
                </h4>
                <p className="font-body text-[1rem] text-(--ct2) leading-[1.75]">
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
        <div className="mb-20 md:mb-24">
          <div className="text-left mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-[32px] h-[2px] bg-(--crimson)" />
              <p className="font-mono text-[0.7rem] text-(--crimson) tracking-[0.10em] uppercase">
                Four Strategic Pillars
              </p>
            </div>
            <h3 className="font-display text-t-4xl text-(--ct1) leading-[0.95] tracking-[-0.025em] uppercase mb-4">
              The Framework
            </h3>
            <p className="font-body text-[1rem] text-(--ct2) max-w-2xl">
              Built on member value, mentorship, partnerships, and transparency.
            </p>
          </div>

          {/* Pillars container - full-width horizontal bands */}
          <div className="space-y-0">
            {/* Pillar 1 — Value Chain */}
            <div className="relative flex border-t border-[rgba(193,18,31,0.15)]">
              {/* Number column - 48px */}
              <div className="w-[48px] flex-shrink-0 flex items-center justify-center border-r border-[rgba(193,18,31,0.15)]">
                <span className="font-mono text-[0.75rem] font-bold text-[#C1121F] leading-none uppercase">
                  01
                </span>
              </div>

              {/* Content column */}
              <div className="flex-1 py-[1.5rem] pl-4 pr-4 md:pl-6 md:pr-6">
                <h4 className="font-display text-[1.1rem] text-(--ct1) mb-2 font-bold uppercase leading-[1.1]">
                  Rotaractor Value Chain
                </h4>
                <div className="h-px w-full bg-[rgba(15,6,8,0.07)] mb-3" />
                <p className="font-body text-[0.9375rem] text-(--ct2) leading-[1.75] max-w-[640px]">
                  Map the entire member journey from recruitment to alumni
                  engagement. Each year in Rotaract should provide clear
                  opportunities for skill development — project management,
                  public speaking, governance — that compound into a genuine
                  professional asset over time.
                </p>
              </div>
            </div>

            {/* Pillar 2 — Bridge Programme */}
            <div className="relative flex border-t border-[rgba(193,18,31,0.15)]">
              <div className="w-[48px] flex-shrink-0 flex items-center justify-center border-r border-[rgba(193,18,31,0.15)]">
                <span className="font-mono text-[0.75rem] font-bold text-[#C1121F] leading-none uppercase">
                  02
                </span>
              </div>

              <div className="flex-1 py-[1.5rem] pl-4 pr-4 md:pl-6 md:pr-6">
                <h4 className="font-display text-[1.1rem] text-(--ct1) mb-2 font-bold uppercase leading-[1.1]">
                  The Bridge Programme
                </h4>
                <div className="h-px w-full bg-[rgba(15,6,8,0.07)] mb-3" />
                <p className="font-body text-[0.9375rem] text-(--ct2) leading-[1.75] max-w-[640px]">
                  A structured mentorship initiative that connects Rotaractors
                  with Rotarians in their professional fields. Career guidance
                  through the Rotary network — not as a perk, but as a deliberate
                  system integrated into the district's annual architecture.
                </p>
              </div>
            </div>

            {/* Pillar 3 — Strategic Alliances */}
            <div className="relative flex border-t border-[rgba(193,18,31,0.15)]">
              <div className="w-[48px] flex-shrink-0 flex items-center justify-center border-r border-[rgba(193,18,31,0.15)]">
                <span className="font-mono text-[0.75rem] font-bold text-[#C1121F] leading-none uppercase">
                  03
                </span>
              </div>

              <div className="flex-1 py-[1.5rem] pl-4 pr-4 md:pl-6 md:pr-6">
                <h4 className="font-display text-[1.1rem] text-(--ct1) mb-2 font-bold uppercase leading-[1.1]">
                  Strategic Alliances
                </h4>
                <div className="h-px w-full bg-[rgba(15,6,8,0.07)] mb-3" />
                <p className="font-body text-[0.9375rem] text-(--ct2) leading-[1.75] max-w-[640px]">
                  Partnerships must evolve from transactional sponsorships into
                  meaningful long-term collaborations that support both community
                  impact and professional growth. Fewer partnerships. Deeper
                  commitments. Measurable outcomes for members.
                </p>
              </div>
            </div>

            {/* Pillar 4 — Governance & Accountability */}
            <div className="relative flex border-t border-[rgba(193,18,31,0.15)] border-b">
              <div className="w-[48px] flex-shrink-0 flex items-center justify-center border-r border-[rgba(193,18,31,0.15)]">
                <span className="font-mono text-[0.75rem] font-bold text-[#C1121F] leading-none uppercase">
                  04
                </span>
              </div>

              <div className="flex-1 py-[1.5rem] pl-4 pr-4 md:pl-6 md:pr-6">
                <h4 className="font-display text-[1.1rem] text-(--ct1) mb-2 font-bold uppercase leading-[1.1]">
                  Governance & Accountability
                </h4>
                <div className="h-px w-full bg-[rgba(15,6,8,0.07)] mb-3" />
                <p className="font-body text-[0.9375rem] text-(--ct2) leading-[1.75] max-w-[640px]">
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
        <div className="mb-20 md:mb-24">
          {/* Section header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-[32px] h-[2px] bg-(--crimson)" />
              <p className="font-mono text-[0.7rem] text-(--crimson) tracking-[0.10em] uppercase">
                The Commitment
              </p>
            </div>
            <h3 className="font-display text-t-4xl text-[#780000] leading-[0.95] tracking-[-0.025em] uppercase">
              Three-Phase Action Plan
            </h3>
            <p className="font-body text-[1rem] text-(--ct2) italic mt-4">
              A clear roadmap for transformation — measurable, accountable, delivered.
            </p>
          </div>

          {/* Mobile: vertical step track (below 768px) */}
          {/* Desktop: three columns in one row */}
          <div className="phase-track md:phase-track-hidden relative md:static">
            {/* Mobile connecting line */}
            <div className="md:hidden absolute left-[calc(1.25rem+16px)] top-2 bottom-10 w-px bg-[rgba(193,18,31,0.16)]" />

            {/* Phase Step 1 - Mobile */}
            <div
              ref={(el) => { phaseStepsRef.current[0] = el; }}
              className="phase-step flex md:hidden gap-4 pb-8"
            >
              {/* Mobile circle */}
              <div className="flex-shrink-0 w-8 h-8 rounded-full border-[1.5px] border-(--crimson) bg-(--bg) flex items-center justify-center relative z-10">
                <span className="font-display text-[0.875rem] font-bold text-(--crimson)">01</span>
              </div>
              <div className="flex-1 pt-[0.25rem]">
                <p className="font-mono text-[0.65rem] tracking-[0.06em] text-(--crimson) uppercase mb-1">
                  Phase 01 — First Quarter
                </p>
                <h4 className="font-display text-[1.05rem] font-bold text-(--ct1) tracking-[-0.015em] leading-[1.15] mb-2">
                  Purpose-Led Leadership
                </h4>
                <div className="h-px w-full bg-[rgba(15,6,8,0.08)] mb-2" />
                <p className="font-body text-[0.9rem] text-(--ct2) leading-[1.7]">
                  Workshops that help club leaders define their purpose and align their activities with meaningful outcomes. Member wellbeing assessments to identify and prevent burnout before it shows up as attrition.
                </p>
              </div>
            </div>

            {/* Phase Step 2 - Mobile */}
            <div
              ref={(el) => { phaseStepsRef.current[1] = el; }}
              className="phase-step flex md:hidden gap-4 pb-8"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full border-[1.5px] border-(--crimson) bg-(--bg) flex items-center justify-center relative z-10">
                <span className="font-display text-[0.875rem] font-bold text-(--crimson)">02</span>
              </div>
              <div className="flex-1 pt-[0.25rem]">
                <p className="font-mono text-[0.65rem] tracking-[0.06em] text-(--crimson) uppercase mb-1">
                  Phase 02 — Second Quarter
                </p>
                <h4 className="font-display text-[1.05rem] font-bold text-(--ct1) tracking-[-0.015em] leading-[1.15] mb-2">
                  Change Management
                </h4>
                <div className="h-px w-full bg-[rgba(15,6,8,0.08)] mb-2" />
                <p className="font-body text-[0.9rem] text-(--ct2) leading-[1.7]">
                  Digital systems that simplify reporting, attendance tracking, and financial management. Clubs receive governance support to strengthen administrative and financial structures from the ground up.
                </p>
              </div>
            </div>

            {/* Phase Step 3 - Mobile */}
            <div
              ref={(el) => { phaseStepsRef.current[2] = el; }}
              className="phase-step flex md:hidden gap-4 pb-8"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full border-[1.5px] border-(--crimson) bg-(--bg) flex items-center justify-center relative z-10">
                <span className="font-display text-[0.875rem] font-bold text-(--crimson)">03</span>
              </div>
              <div className="flex-1 pt-[0.25rem]">
                <p className="font-mono text-[0.65rem] tracking-[0.06em] text-(--crimson) uppercase mb-1">
                  Phase 03 — Second Half
                </p>
                <h4 className="font-display text-[1.05rem] font-bold text-(--ct1) tracking-[-0.015em] leading-[1.15] mb-2">
                  Impact Realisation
                </h4>
                <div className="h-px w-full bg-[rgba(15,6,8,0.08)] mb-2" />
                <p className="font-body text-[0.9rem] text-(--ct2) leading-[1.7]">
                  A public digital dashboard showcasing the district's collective contribution to global development goals. Culminating in the Perspective Summit — a district-wide platform focused on professional development, networking, and leadership growth.
                </p>
              </div>
            </div>

            {/* Desktop: three phases in one row */}
            <div className="hidden md:grid md:grid-cols-[1fr_1px_1fr_1px_1fr] relative">
              {/* Top crimson border */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-(--crimson)" />

              {/* Phase 1 */}
              <div className="p-6 pt-10">
                <p className="font-mono text-[0.7rem] tracking-[0.06em] text-(--crimson) uppercase mb-2">
                  Phase 01
                </p>
                <h4 className="font-display text-[1.1rem] font-bold text-(--ct1) tracking-[-0.015em] leading-[1.15] mb-3">
                  Purpose-Led Leadership
                </h4>
                <div className="h-px w-full bg-[rgba(15,6,8,0.07)] mb-3" />
                <p className="font-body text-[0.9rem] text-(--ct2) leading-[1.7]">
                  Workshops that help club leaders define their purpose and align their activities with meaningful outcomes. Member wellbeing assessments to identify and prevent burnout before it shows up as attrition.
                </p>
              </div>

              {/* Divider 1 */}
              <div className="bg-[rgba(193,18,31,0.15)]" />

              {/* Phase 2 */}
              <div className="p-6 pt-10">
                <p className="font-mono text-[0.7rem] tracking-[0.06em] text-(--crimson) uppercase mb-2">
                  Phase 02
                </p>
                <h4 className="font-display text-[1.1rem] font-bold text-(--ct1) tracking-[-0.015em] leading-[1.15] mb-3">
                  Change Management
                </h4>
                <div className="h-px w-full bg-[rgba(15,6,8,0.07)] mb-3" />
                <p className="font-body text-[0.9rem] text-(--ct2) leading-[1.7]">
                  Digital systems that simplify reporting, attendance tracking, and financial management. Clubs receive governance support to strengthen administrative and financial structures from the ground up.
                </p>
              </div>

              {/* Divider 2 */}
              <div className="bg-[rgba(193,18,31,0.15)]" />

              {/* Phase 3 */}
              <div className="p-6 pt-10">
                <p className="font-mono text-[0.7rem] tracking-[0.06em] text-(--crimson) uppercase mb-2">
                  Phase 03
                </p>
                <h4 className="font-display text-[1.1rem] font-bold text-(--ct1) tracking-[-0.015em] leading-[1.15] mb-3">
                  Impact Realisation
                </h4>
                <div className="h-px w-full bg-[rgba(15,6,8,0.07)] mb-3" />
                <p className="font-body text-[0.9rem] text-(--ct2) leading-[1.7]">
                  A public digital dashboard showcasing the district's collective contribution to global development goals. Culminating in the Perspective Summit — a district-wide platform focused on professional development, networking, and leadership growth.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values — 3-Column Grid */}
        <div className="mb-16">
          {/* Section header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-[32px] h-[2px] bg-(--crimson)" />
              <p className="font-mono text-[0.7rem] text-(--crimson) tracking-[0.10em] uppercase">
                The Principles
              </p>
            </div>
            <h3 className="font-display text-t-4xl text-[#780000] leading-[0.95] tracking-[-0.025em] uppercase">
              Core Values
            </h3>
            <p className="font-body text-[1rem] text-(--ct2) italic mt-4">
              The non-negotiables that guide every decision, every action, every outcome.
            </p>
          </div>

          {/* Values grid - 3 columns on desktop, 2 on tablet, 1 on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(193,18,31,0.12)] border border-[rgba(193,18,31,0.12)]">
            {/* Value 1 */}
            <div
              ref={(el) => { valueItemsRef.current[0] = el; }}
              className="bg-[rgba(193,18,31,0.04)] p-6 md:p-7"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-[0.65rem] tracking-[0.06em] text-(--crimson) uppercase">01</span>
                {/* Simple crimson circle icon */}
                <div className="w-6 h-6 rounded-full bg-[rgba(193,18,31,0.12)] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-(--crimson)" />
                </div>
              </div>
              <h4 className="font-display text-[1.1rem] font-bold text-(--ct1) tracking-[-0.015em] leading-[1.1] mb-3">
                Service Above Self
              </h4>
              <p className="font-body text-[0.875rem] text-(--ct2) leading-[1.7]">
                Projects should create real and sustainable impact in the communities we serve.
              </p>
            </div>

            {/* Value 2 */}
            <div
              ref={(el) => { valueItemsRef.current[1] = el; }}
              className="bg-[rgba(193,18,31,0.04)] p-6 md:p-7"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-[0.65rem] tracking-[0.06em] text-(--crimson) uppercase">02</span>
                <div className="w-6 h-6 rounded-full bg-[rgba(193,18,31,0.12)] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-(--crimson)" />
                </div>
              </div>
              <h4 className="font-display text-[1.1rem] font-bold text-(--ct1) tracking-[-0.015em] leading-[1.1] mb-3">
                Leadership Development
              </h4>
              <p className="font-body text-[0.875rem] text-(--ct2) leading-[1.7]">
                Every Rotaractor should have the opportunity to strengthen their skills, build confidence, and grow as a leader.
              </p>
            </div>

            {/* Value 3 */}
            <div
              ref={(el) => { valueItemsRef.current[2] = el; }}
              className="bg-[rgba(193,18,31,0.04)] p-6 md:p-7"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-[0.65rem] tracking-[0.06em] text-(--crimson) uppercase">03</span>
                <div className="w-6 h-6 rounded-full bg-[rgba(193,18,31,0.12)] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-(--crimson)" />
                </div>
              </div>
              <h4 className="font-display text-[1.1rem] font-bold text-(--ct1) tracking-[-0.015em] leading-[1.1] mb-3">
                Integrity & Accountability
              </h4>
              <p className="font-body text-[0.875rem] text-(--ct2) leading-[1.7]">
                Transparency builds trust and ensures that our organisation remains strong and credible.
              </p>
            </div>

            {/* Value 4 */}
            <div
              ref={(el) => { valueItemsRef.current[3] = el; }}
              className="bg-[rgba(193,18,31,0.04)] p-6 md:p-7"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-[0.65rem] tracking-[0.06em] text-(--crimson) uppercase">04</span>
                <div className="w-6 h-6 rounded-full bg-[rgba(193,18,31,0.12)] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-(--crimson)" />
                </div>
              </div>
              <h4 className="font-display text-[1.1rem] font-bold text-(--ct1) tracking-[-0.015em] leading-[1.1] mb-3">
                Collaboration & Partnership
              </h4>
              <p className="font-body text-[0.875rem] text-(--ct2) leading-[1.7]">
                Rotaract achieves its greatest impact when clubs, Rotarians, institutions, and corporate partners work together toward a common purpose.
              </p>
            </div>

            {/* Value 5 - spans 2 columns on desktop for balance */}
            <div
              ref={(el) => { valueItemsRef.current[4] = el; }}
              className="bg-[rgba(193,18,31,0.04)] p-6 md:p-7 md:col-span-2 lg:col-span-1"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-[0.65rem] tracking-[0.06em] text-(--crimson) uppercase">05</span>
                <div className="w-6 h-6 rounded-full bg-[rgba(193,18,31,0.12)] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-(--crimson)" />
                </div>
              </div>
              <h4 className="font-display text-[1.1rem] font-bold text-(--ct1) tracking-[-0.015em] leading-[1.1] mb-3">
                Innovation & Adaptability
              </h4>
              <p className="font-body text-[0.875rem] text-(--ct2) leading-[1.7]">
                As a youth-driven movement, we must continuously evolve to meet the needs of our members and communities.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
