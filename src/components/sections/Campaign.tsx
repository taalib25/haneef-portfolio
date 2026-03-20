import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CIGRGrid from "../ui/CIGRGrid";

gsap.registerPlugin(ScrollTrigger);

export default function Campaign() {
  const containerRef = useRef<HTMLElement>(null);
  const runningRef = useRef<HTMLSpanElement>(null);
  const phaseStepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const valueItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const challengeRowsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // "Running for" highlight animation - follows scroll and stays
      if (runningRef.current) {
        const word = runningRef.current;
        const highlight = word.querySelector('.running-highlight');
        
        if (highlight) {
          gsap.to(highlight, {
            width: "calc(100% + 16px)",
            ease: "none",
            scrollTrigger: {
              trigger: word,
              start: "top 80%",
              end: "top 30%",
              scrub: 2,
              toggleActions: "play none none none",
              once: true,
            },
          });
        }
      }

      // Three-Phase Action Plan animations
      phaseStepsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            delay: i * 0.12,
            scrollTrigger: {
              trigger: el.parentElement,
              start: "top 78%",
              toggleActions: "play none none none",
              once: true,
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
            duration: 0.5,
            ease: "power2.out",
            delay: i * 0.06,
            scrollTrigger: {
              trigger: el,
              start: "top 86%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      });

      // Challenges animations
      challengeRowsRef.current.forEach((el) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, x: -12 },
          {
            opacity: 1,
            x: 0,
            duration: 0.55,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 84%",
              toggleActions: "play none none none",
              once: true,
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
      className="py-14 md:py-20 bg-[var(--bg-campaign)] text-[var(--ct1)]"
    >
      {/* ── DRR BANNER - Full width crimson rectangle */}
      <div className="bg-[var(--crimson-dark)] relative overflow-hidden -mx-4 md:-mx-6 lg:-mx-8 px-4 md:px-6 lg:px-8 py-14 md:py-20 text-center">
        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* "Running for" with highlight */}
        <div className="font-display text-[clamp(2.5rem,10vw,5rem)] font-bold text-white leading-[0.92] tracking-[0.02em] uppercase mb-8">
          <span ref={runningRef} className="running-word relative inline-block">
            <span className="running-text relative z-10 mix-blend-difference text-white">RUNNING FOR</span>
            <span className="running-highlight absolute left-[-10px] bottom-[-10px] h-[125%] bg-white rounded-[8px] z-0" style={{ width: '0%' }}></span>
          </span>
        </div>

        <div className="font-display font-bold leading-[0.95] tracking-[0.02em] uppercase mb-4">
          <span className="text-[clamp(3rem,12vw,6rem)] text-[#FDF8F2]">DISTRICT ROTARACT</span>
          <br />
          <span className="text-[clamp(3.5rem,14vw,7rem)] text-[#FDF8F2]">REPRESENTATIVE</span>
        </div>

        <div className="font-display text-[clamp(0.9rem,2.5vw,1.2rem)] font-medium leading-[1.4] tracking-[0.03em] uppercase">
          <span className="text-[rgba(253,240,213,0.4)]">DISTRICT 3220 — SRI LANKA & MALDIVES</span>
          <span className="text-[rgba(253,240,213,0.4)] mx-2">·</span>
          <span className="text-[rgba(253,240,213,0.5)]">2025—2026</span>
        </div>

      </div>

        {/* Vision & Mission - Highlighted rounded boxes */}
        <div className="px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Vision Box */}
            <div className="bg-[var(--crimson-dark)] rounded-2xl p-8 md:p-10 border border-[rgba(255,255,255,0.1)]">
              <h3 className="font-display text-[clamp(1.8rem,4vw,2.2rem)] font-bold text-white mb-5 tracking-[0.015em] uppercase">
                Vision
              </h3>
              <p className="font-body text-[1rem] text-[rgba(253,248,242,0.95)] leading-[1.75] font-[450]">
                To transform our district into a place where youth leadership is
                recognised as a professional standard and Rotaract clubs serve as
                centers for innovation, leadership, and meaningful community impact.
              </p>
            </div>

            {/* Mission Box */}
            <div className="bg-[var(--crimson-dark)] rounded-2xl p-8 md:p-10 border border-[rgba(255,255,255,0.1)]">
              <h3 className="font-display text-[clamp(1.8rem,4vw,2.2rem)] font-bold text-white mb-5 tracking-[0.015em] uppercase">
                Mission
              </h3>
              <p className="font-body text-[1rem] text-[rgba(253,248,242,0.95)] leading-[1.75] font-[450]">
                To empower Rotaract clubs and members through stronger digital
                systems, transparent financial governance, and a clear path that
                connects every member to mentorship, professional development,
                and global opportunities.
              </p>
            </div>
        </div>
      </div>

      {/* ── THE PROMISE BLOCK - Quote section */}
      <div className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Accent line */}
          <div className="h-[1px] w-20 bg-[var(--crimson)] mx-auto mb-8" />
          
          {/* Section title */}
          <div className="inline-block mb-10">
            <p className="font-display text-[clamp(0.9rem,2vw,1.1rem)] tracking-[0.12em] text-[var(--ct1)] uppercase font-semibold">
              The Promise
            </p>
          </div>
          
          {/* Quote with attribution below, right-aligned */}
          <div className="max-w-3xl mx-auto">
            {/* Quote - original style */}
            <blockquote className="font-sans text-[clamp(1.3rem,3.5vw,2rem)] text-[var(--ct1)] leading-[1.5] font-medium italic text-left mb-4">
              "To transform our district into a place where youth leadership is
              recognised as a professional standard."
            </blockquote>
            
            {/* Attribution - below quote, right-aligned, super subtle */}
            <div className="flex flex-col items-end">
              <p className="font-sans text-[0.7rem] text-[var(--ct3)] tracking-[0.08em] uppercase opacity-60">
                Haneef Mohamed
              </p>
              <p className="font-sans text-[0.65rem] text-[var(--ct3)] tracking-[0.05em] uppercase opacity-40">
                DRR Candidate, District 3220
              </p>
            </div>
          </div>
          
          <div className="h-[1px] w-20 bg-[var(--crimson)] mx-auto mt-12" />
        </div>
      </div>

      {/* ── WHY I AM RUNNING */}
      <div className="max-w-3xl mx-auto mb-20 md:mb-24 px-4 md:px-6 lg:px-8">
        <div className="text-center md:text-left mb-10">
          <div className="inline-block">
            <p className="font-display text-[clamp(0.9rem,2vw,1.1rem)] tracking-[0.12em] text-[var(--ct1)] uppercase font-semibold">
              Why I Am Running
            </p>
          </div>
        </div>
        <div className="font-body text-[1.0625rem] text-[var(--ct2)] leading-[1.75] space-y-6 italic">
          <p>
            I am running for District Rotaract Representative because I believe
            our district is at a crossroads. Over time, the Rotaract experience
            has shifted toward activity rather than impact. Clubs are active, but
            we need to ask whether our efforts create the long-term value Rotaract
            was meant to deliver.
          </p>
          <p>
            My decision to run comes from a simple belief: Rotaract should be a
            transformative experience for every member. When someone joins, they
            should gain access to leadership opportunities, mentorship,
            professional development, and meaningful service — not just a roster
            of events to attend.
          </p>
          <p>
            I want to bridge the gap between the potential of our youth and the
            global strength of the Rotary movement. Rotaract should move beyond
            being seen as just volunteering and instead become a platform for
            real leadership development.
          </p>
        </div>
      </div>

      {/* ── THREE CHALLENGES */}
      <div className="mb-20 md:mb-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header - left aligned */}
          <div className="mb-12">
            <p className="font-display text-[9.5px] tracking-[0.13em] text-[var(--crimson)] uppercase mb-4">
              The Reality
            </p>
            <h3 className="font-display text-[clamp(1.5rem,4vw,2.2rem)] font-bold text-[var(--cta)] tracking-[0.025em] leading-[0.92] uppercase">
              Three Challenges We Must Face
            </h3>
          </div>

          <div className="space-y-0">
            {/* Challenge 1 */}
            <div
              ref={(el) => { challengeRowsRef.current[0] = el; }}
              className="group flex gap-6 md:gap-10 items-start py-8 border-t border-[var(--campaign-border-light)] hover:border-t-[var(--crimson)] transition-colors duration-200"
            >
              <div className="flex-shrink-0 w-[60px]">
                <span className="font-display text-[clamp(2.5rem,5vw,3.5rem)] font-bold text-[var(--campaign-number-faint)] group-hover:text-[var(--campaign-number-hover)] transition-colors duration-200 leading-none block">
                  01
                </span>
                <span className="font-display text-[8.5px] tracking-[0.10em] text-[var(--crimson)] uppercase">
                  Retention
                </span>
              </div>
              <div className="flex-1 pt-1">
                <h4 className="font-sans text-[1.2rem] md:text-[1.35rem] font-bold text-[var(--ct1)] tracking-[0.012em] leading-[1.1] uppercase mb-3">
                  Membership Retention
                </h4>
                <p className="font-body text-[0.9375rem] text-[var(--ct2)] leading-[1.8] font-[450]">
                  Many people join Rotaract with enthusiasm but lose interest because
                  they do not see long-term value in their involvement. The answer
                  is not more recruitment campaigns. It is creating a stronger
                  experience for the members we already have.
                </p>
              </div>
            </div>

            {/* Challenge 2 */}
            <div
              ref={(el) => { challengeRowsRef.current[1] = el; }}
              className="group flex gap-6 md:gap-10 items-start py-8 border-t border-[var(--campaign-border-light)] hover:border-t-[var(--crimson)] transition-colors duration-200"
            >
              <div className="flex-shrink-0 w-[60px]">
                <span className="font-display text-[clamp(2.5rem,5vw,3.5rem)] font-bold text-[var(--campaign-number-faint)] group-hover:text-[var(--campaign-number-hover)] transition-colors duration-200 leading-none block">
                  02
                </span>
                <span className="font-display text-[8.5px] tracking-[0.10em] text-[var(--crimson)] uppercase">
                  Stewardship
                </span>
              </div>
              <div className="flex-1 pt-1">
                <h4 className="font-sans text-[1.2rem] md:text-[1.35rem] font-bold text-[var(--ct1)] tracking-[0.012em] leading-[1.1] uppercase mb-3">
                  Financial Stewardship
                </h4>
                <p className="font-body text-[0.9375rem] text-[var(--ct2)] leading-[1.8] font-[450]">
                  Transparency and financial literacy are essential for any
                  organisation that wants to build trust. Clubs must operate with
                  clear systems that ensure accountability and responsible financial
                  management — not as a compliance exercise, but as a cultural
                  standard.
                </p>
              </div>
            </div>

            {/* Challenge 3 */}
            <div
              ref={(el) => { challengeRowsRef.current[2] = el; }}
              className="group flex gap-6 md:gap-10 items-start py-8 border-t border-b border-[var(--campaign-border-light)] hover:border-t-[var(--crimson)] transition-colors duration-200"
            >
              <div className="flex-shrink-0 w-[60px]">
                <span className="font-display text-[clamp(2.5rem,5vw,3.5rem)] font-bold text-[var(--campaign-number-faint)] group-hover:text-[var(--campaign-number-hover)] transition-colors duration-200 leading-none block">
                  03
                </span>
                <span className="font-display text-[8.5px] tracking-[0.10em] text-[var(--crimson)] uppercase">
                  Partnership
                </span>
              </div>
              <div className="flex-1 pt-1">
                <h4 className="font-sans text-[1.2rem] md:text-[1.35rem] font-bold text-[var(--ct1)] tracking-[0.012em] leading-[1.1] uppercase mb-3">
                  Meaningful Partnerships
                </h4>
                <p className="font-body text-[0.9375rem] text-[var(--ct2)] leading-[1.8] font-[450]">
                  Too often, our collaborations are limited to short-term
                  sponsorships. Rotaract should build long-term alliances with
                  organisations, institutions, and Rotary networks that support
                  sustainable projects and professional opportunities — not one-off
                  logo placements.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* ── CIGR FRAMEWORK */}
        <div className="mb-32 px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
          {/* Section header - left aligned, large */}
          <div className="mb-6">
            <p className="font-display text-[9.5px] tracking-[0.13em] text-[var(--cta)] uppercase mb-4">
              Strategic Framework
            </p>
            <h3 className="font-display text-[clamp(1.5rem,4vw,2.2rem)] font-bold text-[var(--cta)] tracking-[0.025em] leading-[0.92] uppercase mb-2">
              CIGR Analysis
            </h3>
            <p className="font-body text-[0.875rem] italic text-[var(--ct2)] font-[450]">
              Understanding where the district stands — and where it needs to go.
            </p>
          </div>

          <div className="h-[2px] w-full bg-[var(--cta)] mb-5" />

          <CIGRGrid />
          </div>
        </div>

        {/* ── STRATEGIC PILLARS */}
        <div className="mb-20 md:mb-24 px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="font-display text-[9.5px] tracking-[0.13em] text-[var(--crimson)] uppercase mb-4">
              Four Strategic Pillars
            </p>
            <h3 className="font-display text-[clamp(1.5rem,4vw,2.2rem)] font-bold text-[var(--ct1)] tracking-[0.025em] leading-[0.92] uppercase mb-4">
              The Framework
            </h3>
            <p className="font-body text-[0.875rem] italic text-[var(--ct2)] font-[450]">
              Built on member value, mentorship, partnerships, and transparency.
            </p>
          </div>

          <div className="space-y-0">
            {/* Pillar 1 */}
            <div className="relative flex border-t border-[var(--campaign-border)]">
              <div className="w-12 md:w-14 flex-shrink-0 flex items-center justify-center border-r border-[var(--campaign-border)]">
                <span className="font-sans text-[1rem] md:text-[1.1rem] font-bold text-[var(--crimson)]">
                  01
                </span>
              </div>
              <div className="flex-1 py-[1.5rem] pl-4 pr-4 md:pl-6 md:pr-6">
                <h4 className="font-sans text-[1rem] md:text-[1.15rem] font-bold text-[var(--ct1)] tracking-[0.012em] leading-[1.1] uppercase mb-2">
                  Rotaractor Value Chain
                </h4>
                <div className="h-px w-full bg-[var(--border)] mb-3" />
                <p className="font-body text-[0.9375rem] text-[var(--ct2)] leading-[1.75] max-w-[640px]">
                  Map the entire member journey from recruitment to alumni
                  engagement. Each year in Rotaract should provide clear
                  opportunities for skill development — project management,
                  public speaking, governance — that compound into a genuine
                  professional asset over time.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="relative flex border-t border-[var(--campaign-border)]">
              <div className="w-12 md:w-14 flex-shrink-0 flex items-center justify-center border-r border-[var(--campaign-border)]">
                <span className="font-sans text-[1rem] md:text-[1.1rem] font-bold text-[var(--crimson)]">
                  02
                </span>
              </div>
              <div className="flex-1 py-[1.5rem] pl-4 pr-4 md:pl-6 md:pr-6">
                <h4 className="font-sans text-[1rem] md:text-[1.15rem] font-bold text-[var(--ct1)] tracking-[0.012em] leading-[1.1] uppercase mb-2">
                  The Bridge Programme
                </h4>
                <div className="h-px w-full bg-[var(--border)] mb-3" />
                <p className="font-body text-[0.9375rem] text-[var(--ct2)] leading-[1.75] max-w-[640px]">
                  A structured mentorship initiative that connects Rotaractors
                  with Rotarians in their professional fields. Career guidance
                  through the Rotary network — not as a perk, but as a deliberate
                  system integrated into the district's annual architecture.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="relative flex border-t border-[var(--campaign-border)]">
              <div className="w-12 md:w-14 flex-shrink-0 flex items-center justify-center border-r border-[var(--campaign-border)]">
                <span className="font-sans text-[1rem] md:text-[1.1rem] font-bold text-[var(--crimson)]">
                  03
                </span>
              </div>
              <div className="flex-1 py-[1.5rem] pl-4 pr-4 md:pl-6 md:pr-6">
                <h4 className="font-sans text-[1rem] md:text-[1.15rem] font-bold text-[var(--ct1)] tracking-[0.012em] leading-[1.1] uppercase mb-2">
                  Strategic Alliances
                </h4>
                <div className="h-px w-full bg-[var(--border)] mb-3" />
                <p className="font-body text-[0.9375rem] text-[var(--ct2)] leading-[1.75] max-w-[640px]">
                  Partnerships must evolve from transactional sponsorships into
                  meaningful long-term collaborations that support both community
                  impact and professional growth. Fewer partnerships. Deeper
                  commitments. Measurable outcomes for members.
                </p>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="relative flex border-t border-b border-[var(--campaign-border)]">
              <div className="w-12 md:w-14 flex-shrink-0 flex items-center justify-center border-r border-[var(--campaign-border)]">
                <span className="font-sans text-[1rem] md:text-[1.1rem] font-bold text-[var(--crimson)]">
                  04
                </span>
              </div>
              <div className="flex-1 py-[1.5rem] pl-4 pr-4 md:pl-6 md:pr-6">
                <h4 className="font-sans text-[1rem] md:text-[1.15rem] font-bold text-[var(--ct1)] tracking-[0.012em] leading-[1.1] uppercase mb-2">
                  Governance & Accountability
                </h4>
                <div className="h-px w-full bg-[var(--border)] mb-3" />
                <p className="font-body text-[0.9375rem] text-[var(--ct2)] leading-[1.75] max-w-[640px]">
                  Digital reporting systems will improve transparency across the
                  district and allow us to measure success by real impact — not
                  event count. Clubs will be equipped with professional project
                  management tools, not improvised spreadsheets.
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>

        {/* ── THREE-PHASE ACTION PLAN */}
        <div className="mb-20 md:mb-24 px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-12">
            <p className="font-display text-[9.5px] tracking-[0.13em] text-[var(--crimson)] uppercase mb-4">
              The Commitment
            </p>
            <h3 className="font-display text-[clamp(1.5rem,4vw,2.2rem)] font-bold text-[var(--ct1)] tracking-[0.025em] leading-[0.92] uppercase">
              Three-Phase Action Plan
            </h3>
            <p className="font-body text-[0.875rem] italic text-[var(--ct2)] font-[450] mt-2">
              A clear roadmap for transformation — measurable, accountable, delivered.
            </p>
          </div>

          {/* Mobile: vertical step track */}
          <div className="phase-track md:hidden relative">
            {/* Connecting line */}
            <div className="absolute left-[15px] top-2 bottom-10 w-px bg-[var(--crimson-border)]" />

            {/* Phase 1 */}
            <div
              ref={(el) => { phaseStepsRef.current[0] = el; }}
              className="phase-step flex gap-4 pb-8"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full border-[1.5px] border-[var(--crimson-border)] bg-[var(--bg)] flex items-center justify-center relative z-10">
                <span className="font-sans text-[0.875rem] font-bold text-[var(--crimson)]">
                  01
                </span>
              </div>
              <div className="flex-1 pt-[0.25rem]">
                <p className="font-display text-[9px] tracking-[0.06em] text-[var(--crimson)] uppercase mb-1">
                  Phase 01 — First Quarter
                </p>
                <h4 className="font-sans text-[1.05rem] font-bold text-[var(--ct1)] tracking-[0.015em] leading-[1.15] mb-2">
                  Purpose-Led Leadership
                </h4>
                <div className="h-px w-full bg-[var(--border-medium)] mb-2" />
                <p className="font-body text-[0.8125rem] text-[var(--ct2)] leading-[1.7]">
                  Workshops that help club leaders define their purpose and align
                  their activities with meaningful outcomes. Member wellbeing
                  assessments to identify and prevent burnout before it shows up
                  as attrition.
                </p>
              </div>
            </div>

            {/* Phase 2 */}
            <div
              ref={(el) => { phaseStepsRef.current[1] = el; }}
              className="phase-step flex gap-4 pb-8"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full border-[1.5px] border-[var(--crimson-border)] bg-[var(--bg)] flex items-center justify-center relative z-10">
                <span className="font-sans text-[0.875rem] font-bold text-[var(--crimson)]">
                  02
                </span>
              </div>
              <div className="flex-1 pt-[0.25rem]">
                <p className="font-display text-[9px] tracking-[0.06em] text-[var(--crimson)] uppercase mb-1">
                  Phase 02 — Second Quarter
                </p>
                <h4 className="font-sans text-[1.05rem] font-bold text-[var(--ct1)] tracking-[0.015em] leading-[1.15] mb-2">
                  Change Management
                </h4>
                <div className="h-px w-full bg-[var(--border-medium)] mb-2" />
                <p className="font-body text-[0.8125rem] text-[var(--ct2)] leading-[1.7]">
                  Digital systems that simplify reporting, attendance tracking, and
                  financial management. Clubs receive governance support to
                  strengthen administrative and financial structures from the
                  ground up.
                </p>
              </div>
            </div>

            {/* Phase 3 */}
            <div
              ref={(el) => { phaseStepsRef.current[2] = el; }}
              className="phase-step flex gap-4 pb-8"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full border-[1.5px] border-[var(--crimson-border)] bg-[var(--bg)] flex items-center justify-center relative z-10">
                <span className="font-sans text-[0.875rem] font-bold text-[var(--crimson)]">
                  03
                </span>
              </div>
              <div className="flex-1 pt-[0.25rem]">
                <p className="font-display text-[9px] tracking-[0.06em] text-[var(--crimson)] uppercase mb-1">
                  Phase 03 — Second Half
                </p>
                <h4 className="font-sans text-[1.05rem] font-bold text-[var(--ct1)] tracking-[0.015em] leading-[1.15] mb-2">
                  Impact Realisation
                </h4>
                <div className="h-px w-full bg-[var(--border-medium)] mb-2" />
                <p className="font-body text-[0.8125rem] text-[var(--ct2)] leading-[1.7]">
                  A public digital dashboard showcasing the district's collective
                  contribution to global development goals. Culminating in the
                  Perspective Summit — a district-wide platform focused on
                  professional development, networking, and leadership growth.
                </p>
              </div>
            </div>
          </div>

          {/* Desktop: three phases in one row */}
          <div className="hidden md:grid md:grid-cols-[1fr_1px_1fr_1px_1fr] relative">
            {/* Top crimson border */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-[var(--crimson)]" />

            {/* Phase 1 */}
            <div className="p-6 pt-10">
              <span className="font-sans text-[4.5rem] font-bold tracking-[0.04em] text-[var(--campaign-ghost-number)] leading-[1] block mb-[-0.75rem]">
                01
              </span>
              <p className="font-display text-[9px] tracking-[0.06em] text-[var(--crimson)] uppercase mb-2">
                Phase 01 — First Quarter
              </p>
              <h4 className="font-sans text-[1.1rem] font-bold text-[var(--ct1)] tracking-[0.015em] leading-[1.15] mb-3">
                Purpose-Led Leadership
              </h4>
              <div className="h-px w-full bg-[var(--border)] mb-3" />
              <p className="font-body text-[0.875rem] text-[var(--ct2)] leading-[1.7]">
                Workshops that help club leaders define their purpose and align
                their activities with meaningful outcomes. Member wellbeing
                assessments to identify and prevent burnout before it shows up as
                attrition.
              </p>
            </div>

            {/* Divider 1 */}
            <div className="bg-[var(--campaign-border)]" />

            {/* Phase 2 */}
            <div className="p-6 pt-10">
              <span className="font-sans text-[4.5rem] font-bold tracking-[0.04em] text-[var(--campaign-ghost-number)] leading-[1] block mb-[-0.75rem]">
                02
              </span>
              <p className="font-display text-[9px] tracking-[0.06em] text-[var(--crimson)] uppercase mb-2">
                Phase 02 — Second Quarter
              </p>
              <h4 className="font-sans text-[1.1rem] font-bold text-[var(--ct1)] tracking-[0.015em] leading-[1.15] mb-3">
                Change Management
              </h4>
              <div className="h-px w-full bg-[var(--border)] mb-3" />
              <p className="font-body text-[0.875rem] text-[var(--ct2)] leading-[1.7]">
                Digital systems that simplify reporting, attendance tracking, and
                financial management. Clubs receive governance support to
                strengthen administrative and financial structures from the ground
                up.
              </p>
            </div>

            {/* Divider 2 */}
            <div className="bg-[var(--campaign-border)]" />

            {/* Phase 3 */}
            <div className="p-6 pt-10">
              <span className="font-sans text-[4.5rem] font-bold tracking-[0.04em] text-[var(--campaign-ghost-number)] leading-[1] block mb-[-0.75rem]">
                03
              </span>
              <p className="font-display text-[9px] tracking-[0.06em] text-[var(--crimson)] uppercase mb-2">
                Phase 03 — Second Half
              </p>
              <h4 className="font-sans text-[1.1rem] font-bold text-[var(--ct1)] tracking-[0.015em] leading-[1.15] mb-3">
                Impact Realisation
              </h4>
              <div className="h-px w-full bg-[var(--border)] mb-3" />
              <p className="font-body text-[0.875rem] text-[var(--ct2)] leading-[1.7]">
                A public digital dashboard showcasing the district's collective
                contribution to global development goals. Culminating in the
                Perspective Summit — a district-wide platform focused on
                professional development, networking, and leadership growth.
              </p>
            </div>
          </div>
          </div>
        </div>

        {/* ── CORE VALUES — Token Grid */}
        <div className="mb-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="font-display text-[9.5px] tracking-[0.13em] text-[var(--crimson)] uppercase mb-4">
              The Principles
            </p>
            <h3 className="font-display text-[clamp(1.5rem,4vw,2.2rem)] font-bold text-[var(--ct1)] tracking-[0.025em] leading-[0.92] uppercase">
              Core Values
            </h3>
            <p className="font-body text-[0.875rem] italic text-[var(--ct2)] font-[450] mt-2">
              The non-negotiables that guide every decision, every action, every outcome.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {values.map((v, i) => (
              <div
                key={i}
                ref={(el) => { valueItemsRef.current[i] = el; }}
                className="group bg-[var(--campaign-bg-subtle-2)] border border-[var(--campaign-border-medium)] p-5 md:p-6 flex flex-col gap-3 hover:bg-[var(--campaign-bg-subtle)] hover:border-[var(--campaign-border)] transition-all duration-200 last:sm:col-span-2 last:lg:col-span-1"
              >
                <span className="font-display text-[9px] tracking-[0.08em] text-[var(--campaign-text-muted)] uppercase">
                  0{i + 1}
                </span>
                <h4 className="font-sans text-[1rem] md:text-[1.05rem] font-bold text-[var(--ct1)] tracking-[0.012em] leading-[1.15] group-hover:text-[var(--crimson)] transition-colors duration-200">
                  {v.name}
                </h4>
                <p className="font-body text-[0.8125rem] text-[var(--ct2)] leading-[1.65] font-[450]">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
          </div>
        </div>
    </section>
  );
}

const values = [
  {
    name: "Service Above Self",
    description:
      "Projects should create real and sustainable impact in the communities we serve.",
  },
  {
    name: "Leadership Development",
    description:
      "Every Rotaractor should have the opportunity to strengthen their skills, build confidence, and grow as a leader.",
  },
  {
    name: "Integrity & Accountability",
    description:
      "Transparency builds trust and ensures that our organisation remains strong and credible.",
  },
  {
    name: "Collaboration & Partnership",
    description:
      "Rotaract achieves its greatest impact when clubs, Rotarians, institutions, and corporate partners work together toward a common purpose.",
  },
  {
    name: "Innovation & Adaptability",
    description:
      "As a youth-driven movement, we must continuously evolve to meet the needs of our members and communities.",
  },
];
