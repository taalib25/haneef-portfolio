export default function Contact() {
  return (
    <section id="contact" className="py-[4.5rem] md:py-[7rem] px-6 md:px-12 lg:px-20 bg-[var(--bg)]">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <p className="font-mono text-[var(--ta)] text-[var(--t-xs)] tracking-widest uppercase mb-8">
            [ 06 — CONNECT ]
          </p>
          <h2 className="font-display text-[var(--t-4xl)] text-[var(--t1)] leading-[0.92] tracking-[-0.025em] uppercase mb-6">
            LET'S TALK.
          </h2>
          <p className="font-body text-[var(--t-lg)] text-[var(--t2)] max-w-[680px] leading-[1.75]">
            Whether it is a collaboration, a conversation about the campaign, or a question about District 3220 — the door is open.
          </p>
        </div>

        {/* Two-audience split */}
        <div className="flex flex-col md:flex-row border-t border-[var(--crimson-border)] md:border-t-0">
          {/* Block 1 — Campaign / Rotaract */}
          <div className="flex-1 py-12 md:pr-12 border-b md:border-b-0 md:border-r border-[var(--crimson-border)] flex flex-col items-start">
            <p className="font-mono text-[var(--t-xs)] text-[var(--navy-light)] tracking-widest uppercase mb-6">
              FOR ROTARACT & CAMPAIGN
            </p>
            <h3 className="font-display text-[var(--t-2xl)] text-[var(--t1)] uppercase mb-4">
              DISTRICT 3220
            </h3>
            <p className="font-body text-[var(--t-sm)] text-[var(--t2)] mb-12">
              Rotaract conversations, DRR enquiries
            </p>
            <a
              href="mailto:haneef.rotaract3220@gmail.com?subject=District 3220 Enquiry"
              className="inline-flex justify-center items-center bg-[var(--crimson)] text-[var(--t1)] font-mono text-[var(--t-sm)] uppercase tracking-widest px-8 py-4 hover:bg-[var(--crimson-dark)] transition-colors min-h-[52px] mt-auto"
            >
              REACH OUT →
            </a>
          </div>

          {/* Block 2 — Professional */}
          <div className="flex-1 py-12 md:pl-12 flex flex-col items-start">
            <p className="font-mono text-[var(--t-xs)] text-[var(--navy-light)] tracking-widest uppercase mb-6">
              FOR PROFESSIONAL ENQUIRIES
            </p>
            <h3 className="font-display text-[var(--t-2xl)] text-[var(--t1)] uppercase mb-4">
              PR WIRE & BEYOND
            </h3>
            <p className="font-body text-[var(--t-sm)] text-[var(--t2)] mb-12">
              Collaborations, PR strategy, media
            </p>
            <a
              href="mailto:haneef.rotaract3220@gmail.com?subject=Professional Enquiry"
              className="inline-flex justify-center items-center bg-[var(--navy)] text-[var(--t1)] font-mono text-[var(--t-sm)] uppercase tracking-widest px-8 py-4 hover:bg-[#002233] transition-colors min-h-[52px] mt-auto"
            >
              GET IN TOUCH →
            </a>
          </div>
        </div>

        {/* Email + Phone */}
        <div className="mt-24 text-center flex flex-col items-center gap-4">
          <a
            href="tel:+94770447021"
            className="font-mono text-[var(--t-xs)] text-[var(--t3)] tracking-widest uppercase hover:text-[var(--t1)] transition-colors"
          >
            +94 77 044 7021 [CALL]
          </a>
          <a
            href="mailto:haneef.rotaract3220@gmail.com"
            className="font-mono text-[var(--t-xs)] text-[var(--t3)] tracking-widest uppercase hover:text-[var(--t1)] transition-colors"
          >
            haneef.rotaract3220@gmail.com [EMAIL]
          </a>
        </div>
      </div>
    </section>
  );
}
