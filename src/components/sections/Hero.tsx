import { useEffect, useState } from 'react';
import { cn } from '../../lib/cn';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      id="hero"
      className={cn(
        'relative w-full min-h-[100svh] flex flex-col justify-center items-center bg-[var(--bg)] overflow-hidden transition-opacity duration-300',
        loaded ? 'opacity-100' : 'opacity-0'
      )}
    >
      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-3 gap-8 w-full max-w-[1400px] px-12 lg:px-20 items-center z-10 pt-20">
        {/* Left Details */}
        <div className="flex flex-col items-end text-right space-y-16">
          <div>
            <p className="font-mono text-[var(--ta)] text-[var(--t-xs)] tracking-widest uppercase mb-3">Role</p>
            <h2 className="font-display text-[var(--t-2xl)] text-[var(--t1)] uppercase leading-[1.1]">PR Strategist</h2>
          </div>
          <div>
            <p className="font-mono text-[var(--ta)] text-[var(--t-xs)] tracking-widest uppercase mb-3">Current</p>
            <h2 className="font-display text-[var(--t-2xl)] text-[var(--t1)] uppercase leading-[1.1]">Rotaract<br/>President</h2>
          </div>
        </div>

        {/* Center Image */}
        <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-[var(--crimson-border)] shadow-[0_0_40px_rgba(193,18,31,0.15)] group">
          <img 
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" 
            alt="Haneef Mohamed" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent opacity-90" />
          <div className="absolute bottom-8 left-0 right-0 text-center px-4">
            <h1 className="font-display text-[var(--t-3xl)] text-[var(--t1)] uppercase tracking-tight mb-4">Haneef<br/>Mohamed</h1>
            <div className="flex justify-center gap-4">
              <a href="#story" className="inline-flex justify-center items-center bg-[var(--crimson)] text-[var(--ct1)] font-mono text-[10px] uppercase tracking-widest px-6 py-3 hover:bg-[var(--crimson-dark)] transition-colors">
                The Story
              </a>
              <a href="#campaign" className="inline-flex justify-center items-center border border-[var(--crimson-border)] text-[var(--ta)] font-mono text-[10px] uppercase tracking-widest px-6 py-3 hover:bg-[var(--crimson-dim)] transition-colors bg-[var(--bg)]/50 backdrop-blur-sm">
                Campaign
              </a>
            </div>
          </div>
        </div>

        {/* Right Details */}
        <div className="flex flex-col items-start text-left space-y-16">
          <div>
            <p className="font-mono text-[var(--ta)] text-[var(--t-xs)] tracking-widest uppercase mb-3">Candidate</p>
            <h2 className="font-display text-[var(--t-2xl)] text-[var(--t1)] uppercase leading-[1.1]">District Rotaract<br/>Representative</h2>
          </div>
          <div>
            <p className="font-mono text-[var(--ta)] text-[var(--t-xs)] tracking-widest uppercase mb-3">Region</p>
            <h2 className="font-display text-[var(--t-2xl)] text-[var(--t1)] uppercase leading-[1.1]">District 3220<br/><span className="text-[var(--t2)] text-[var(--t-lg)] mt-2 block">Sri Lanka & Maldives</span></h2>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col w-full px-6 pt-24 pb-12 z-10 min-h-[100svh] justify-center">
        <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-10 border border-[var(--crimson-border)]">
          <img 
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" 
            alt="Haneef Mohamed" 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/40 to-transparent opacity-90" />
          <div className="absolute bottom-6 left-6 right-6">
            <h1 className="font-display text-[var(--t-4xl)] text-[var(--t1)] uppercase tracking-tight leading-[0.9] mb-3">Haneef<br/>Mohamed</h1>
            <p className="font-mono text-[var(--ta)] text-[var(--t-xs)] tracking-widest uppercase">Candidate for DRR 3220</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 mb-10">
          <div>
            <p className="font-mono text-[var(--ta)] text-[10px] tracking-widest uppercase mb-2">Role</p>
            <h2 className="font-display text-[var(--t-lg)] text-[var(--t1)] uppercase leading-tight">PR Strategist</h2>
          </div>
          <div>
            <p className="font-mono text-[var(--ta)] text-[10px] tracking-widest uppercase mb-2">Current</p>
            <h2 className="font-display text-[var(--t-lg)] text-[var(--t1)] uppercase leading-tight">Rotaract<br/>President</h2>
          </div>
        </div>

        <div className="flex flex-col gap-3 w-full">
          <a href="#story" className="w-full inline-flex justify-center items-center bg-[var(--crimson)] text-[var(--ct1)] font-mono text-[var(--t-sm)] uppercase tracking-widest px-8 py-4 hover:bg-[var(--crimson-dark)] transition-colors">
            READ THE STORY ↓
          </a>
          <a href="#campaign" className="w-full inline-flex justify-center items-center border border-[var(--crimson-border)] text-[var(--ta)] font-mono text-[var(--t-sm)] uppercase tracking-widest px-8 py-4 hover:bg-[var(--crimson-dim)] transition-colors">
            THE CAMPAIGN
          </a>
        </div>
      </div>
    </section>
  );
}
