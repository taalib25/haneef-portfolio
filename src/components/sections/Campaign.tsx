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
            <p className="font-mono text-(--cta) text-t-xs tracking-[0.20em] uppercase mb-8">
              [ 04 — THE CAMPAIGN ]
            </p>
            <h2 className="font-display text-t-4xl text-(--ct1) leading-[0.92] tracking-[-0.025em] uppercase mb-6">
              RUNNING FOR
              <br />
              DISTRICT ROTARACT
              <br />
              REPRESENTATIVE
            </h2>
            <p className="font-mono text-t-xs text-(--cta) tracking-[0.20em] uppercase mb-16">
              District 3220 · Sri Lanka & Maldives · 2025–2026
            </p>
            <p className="font-body text-[1.15rem] italic text-(--ct2) max-w-170 mx-auto text-center">
              "To transform our district into a high-value ecosystem where youth
              leadership is recognised as a professional standard."
            </p>
          </div>
        </div>

        {/* Why I Am Running */}
        <div className="max-w-200 mx-auto mb-32">
          <h3 className="font-mono text-t-xs text-(--cta) tracking-[0.20em] uppercase mb-8 text-center">
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
        <div className="flex flex-col md:flex-row border-t border-b border-(--cb) mb-32">
          <div className="flex-1 py-12 md:pr-12 border-b md:border-b-0 md:border-r border-(--cb)">
            <h3 className="font-mono text-t-xs text-(--cta) tracking-[0.20em] uppercase mb-6">
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
            <h3 className="font-mono text-t-xs text-(--cta) tracking-[0.20em] uppercase mb-6">
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

        {/* Three Challenges */}
        <div className="mb-32">
          <h3 className="font-mono text-t-xs text-(--cta) tracking-[0.20em] uppercase mb-12 text-center">
            THREE CHALLENGES WE MUST FACE (honest, direct — not political
            softening)
          </h3>
          <div className="flex flex-col gap-16">
            <div className="relative">
              <span className="absolute -top-6 left-0 font-display text-[48px] text-[rgba(120,0,0,0.06)] leading-none select-none -z-10">
                01
              </span>
              <h4 className="font-display text-(length:--t-xl) text-(--ct1) mb-4">
                Challenge 1: Membership Retention
              </h4>
              <p className="font-body text-t-base text-(--ct2) leading-[1.75] max-w-200">
                Many individuals join Rotaract with enthusiasm but lose interest
                because they do not see the long-term value of their
                involvement. The answer is not more recruitment campaigns. It is
                a stronger experience for the members we already have.
              </p>
            </div>
            <div className="relative">
              <span className="absolute -top-6 left-0 font-display text-[48px] text-[rgba(120,0,0,0.06)] leading-none select-none -z-10">
                02
              </span>
              <h4 className="font-display text-(length:--t-xl) text-(--ct1) mb-4">
                Challenge 2: Financial Stewardship
              </h4>
              <p className="font-body text-t-base text-(--ct2) leading-[1.75] max-w-200">
                Transparency and financial literacy are essential for any
                organisation that wishes to build trust. Clubs must operate with
                clear systems that ensure accountability and responsible
                financial management — not as a compliance exercise, but as a
                cultural standard.
              </p>
            </div>
            <div className="relative">
              <span className="absolute -top-6 left-0 font-display text-[48px] text-[rgba(120,0,0,0.06)] leading-none select-none -z-10">
                03
              </span>
              <h4 className="font-display text-(length:--t-xl) text-(--ct1) mb-4">
                Challenge 3: Meaningful Partnerships
              </h4>
              <p className="font-body text-t-base text-(--ct2) leading-[1.75] max-w-200">
                Too often, our collaborations are limited to short-term
                sponsorships. Rotaract should build long-term alliances with
                organisations, institutions, and Rotary networks that support
                sustainable projects and professional opportunities — not
                one-off logo placements.
              </p>
            </div>
          </div>
        </div>

        {/* The CIGR Framework */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="font-mono text-t-xs text-(--cta) tracking-[0.20em] uppercase mb-4">
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

        {/* Strategic Pillars — Creative Card Display */}
        <div className="mb-32">
          <h3 className="font-mono text-t-xs text-(--cta) tracking-[0.20em] uppercase mb-4 text-center">
            FOUR STRATEGIC PILLARS
          </h3>
          <p className="font-body text-t-base text-(--ct2) text-center max-w-2xl mx-auto mb-12">
            The foundation of transformation — built on member value, mentorship, partnerships, and transparency.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pillar 1 — Value Chain */}
            <div className="group relative bg-[var(--bg-card)] border border-[var(--cb)] p-8 transition-all duration-300 hover:border-[var(--crimson)] hover:shadow-lg">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[var(--crimson-dim)] flex items-center justify-center rounded-bl-lg">
                <span className="font-display text-[2.5rem] font-bold text-[var(--crimson)]">01</span>
              </div>
              <div className="mb-6">
                <svg className="w-10 h-10 text-[var(--crimson)] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <h4 className="font-display text-[1.75rem] text-(--ct1) mb-3 uppercase leading-[1.1]">
                  Rotaractor Value Chain
                </h4>
              </div>
              <p className="font-body text-t-base text-(--ct2) leading-[1.75] text-justify">
                Map the entire member journey from recruitment to alumni
                engagement. Each year in Rotaract should provide clear,
                accumulating opportunities for skill development — project
                management, public speaking, governance — that compound into a
                genuine professional asset over time.
              </p>
            </div>

            {/* Pillar 2 — Bridge Programme */}
            <div className="group relative bg-[var(--bg-card)] border border-[var(--cb)] p-8 transition-all duration-300 hover:border-[var(--navy)] hover:shadow-lg">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[var(--navy-dim)] flex items-center justify-center rounded-bl-lg">
                <span className="font-display text-[2.5rem] font-bold text-[var(--navy)]">02</span>
              </div>
              <div className="mb-6">
                <svg className="w-10 h-10 text-[var(--navy)] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                <h4 className="font-display text-[1.75rem] text-(--ct1) mb-3 uppercase leading-[1.1]">
                  The Bridge Programme
                </h4>
              </div>
              <p className="font-body text-t-base text-(--ct2) leading-[1.75] text-justify">
                A structured mentorship initiative that connects Rotaractors
                with Rotarians in their professional fields. Career guidance
                through the Rotary network — not as a perk, but as a deliberate
                system integrated into the district's annual architecture.
              </p>
            </div>

            {/* Pillar 3 — Strategic Alliances */}
            <div className="group relative bg-[var(--bg-card)] border border-[var(--cb)] p-8 transition-all duration-300 hover:border-[var(--crimson)] hover:shadow-lg">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[var(--crimson-dim)] flex items-center justify-center rounded-bl-lg">
                <span className="font-display text-[2.5rem] font-bold text-[var(--crimson)]">03</span>
              </div>
              <div className="mb-6">
                <svg className="w-10 h-10 text-[var(--crimson)] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <h4 className="font-display text-[1.75rem] text-(--ct1) mb-3 uppercase leading-[1.1]">
                  Strategic Alliances
                </h4>
              </div>
              <p className="font-body text-t-base text-(--ct2) leading-[1.75] text-justify">
                Partnerships must evolve from transactional sponsorships into
                meaningful long-term collaborations that support both community
                impact and professional growth. Fewer partnerships. Deeper
                commitments. Measurable outcomes for members.
              </p>
            </div>

            {/* Pillar 4 — Governance & Accountability */}
            <div className="group relative bg-[var(--bg-card)] border border-[var(--cb)] p-8 transition-all duration-300 hover:border-[var(--navy)] hover:shadow-lg">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[var(--navy-dim)] flex items-center justify-center rounded-bl-lg">
                <span className="font-display text-[2.5rem] font-bold text-[var(--navy)]">04</span>
              </div>
              <div className="mb-6">
                <svg className="w-10 h-10 text-[var(--navy)] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 className="font-display text-[1.75rem] text-(--ct1) mb-3 uppercase leading-[1.1]">
                  Governance & Accountability
                </h4>
              </div>
              <p className="font-body text-t-base text-(--ct2) leading-[1.75] text-justify">
                Digital reporting systems will improve transparency across the
                district and allow us to measure success by real impact — not
                event count. Clubs will be equipped with professional project
                management tools, not improvised spreadsheets.
              </p>
            </div>
          </div>
        </div>

        {/* Three-Phase Action Plan */}
        <div className="mb-32">
          <h3 className="font-mono text-t-xs text-(--cta) tracking-[0.20em] uppercase mb-12 text-center">
            THREE-PHASE ACTION PLAN
          </h3>
          <div className="flex flex-col gap-16">
            <div className="relative">
              <span className="absolute -top-6 left-0 font-display text-[64px] text-[rgba(120,0,0,0.06)] leading-none select-none -z-10">
                01
              </span>
              <h4 className="font-display text-(length:--t-xl) text-(--ct1) mb-4">
                Phase 1 — Purpose-Led Leadership{" "}
                <span className="italic font-light">(First Quarter)</span>
              </h4>
              <p className="font-body text-t-base text-(--ct2) leading-7 max-w-200">
                Workshops that help club leaders clearly define purpose and
                align activities with meaningful outcomes. Member wellbeing
                assessments to identify and prevent burnout before it shows up
                as attrition.
              </p>
            </div>
            <div className="relative">
              <span className="absolute -top-6 left-0 font-display text-[64px] text-[rgba(120,0,0,0.06)] leading-none select-none -z-10">
                02
              </span>
              <h4 className="font-display text-(length:--t-xl) text-(--ct1) mb-4">
                Phase 2 — Change Management{" "}
                <span className="italic font-light">(Second Quarter)</span>
              </h4>
              <p className="font-body text-t-base text-(--ct2) leading-7 max-w-200">
                Digital systems for reporting, attendance tracking, and
                financial management. Governance support for clubs to strengthen
                administrative and financial structures from the ground up — not
                top-down mandates.
              </p>
            </div>
            <div className="relative">
              <span className="absolute -top-6 left-0 font-display text-[64px] text-[rgba(120,0,0,0.06)] leading-none select-none -z-10">
                03
              </span>
              <h4 className="font-display text-(length:--t-xl) text-(--ct1) mb-4">
                Phase 3 — Impact Realisation{" "}
                <span className="italic font-light">(Second Half)</span>
              </h4>
              <p className="font-body text-t-base text-(--ct2) leading-7 max-w-200">
                A public digital dashboard showcasing the district's collective
                contribution to global development goals. Culminating in the
                Perspective Summit — a district-wide platform for professional
                development, networking, and leadership growth.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="font-mono text-t-xs text-(--cta) tracking-[0.20em] uppercase mb-12 text-center">
            CORE VALUES
          </h3>
          <div className="flex flex-col border-t border-(--cb)">
            {[
              {
                name: "SERVICE ABOVE SELF",
                desc: "Projects must create genuine and sustainable impact.",
              },
              {
                name: "LEADERSHIP DEVELOPMENT",
                desc: "Every Rotaractor deserves the opportunity to grow.",
              },
              {
                name: "INTEGRITY & ACCOUNTABILITY",
                desc: "Transparency is not a policy. It is a culture.",
              },
              {
                name: "COLLABORATION",
                desc: "Rotaract's greatest work happens at the intersections.",
              },
              {
                name: "INNOVATION & ADAPTABILITY",
                desc: "A youth movement that stops evolving stops mattering.",
              },
            ].map((val, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row py-6 border-b border-(--cb)"
              >
                <div className="md:w-75 shrink-0 mb-2 md:mb-0">
                  <span className="font-mono text-t-xs tracking-[0.20em] uppercase">
                    {val.name}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="font-body text-t-base text-(--ct2) leading-7">
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
            className="inline-flex justify-center items-center bg-(--crimson) text-(--t1) font-mono text-(length:--t-sm) uppercase tracking-widest px-8 py-4 hover:bg-(--crimson-dark) transition-colors min-h-13 rounded-sm"
          >
            CONTACT ME
          </a>
        </div>
      </div>
    </section>
  );
}