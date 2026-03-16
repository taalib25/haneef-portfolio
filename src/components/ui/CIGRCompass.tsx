import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function CIGRCompass() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative w-full max-w-[560px] mx-auto aspect-square flex items-center justify-center my-16 md:my-24 group px-4">
      <motion.svg
        viewBox="0 0 560 560"
        className="w-full h-full drop-shadow-xl"
        initial={{ rotate: prefersReducedMotion ? 0 : -90, opacity: 0 }}
        whileInView={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
      >
        {/* Subtle background geometry */}
        <circle
          cx="280"
          cy="280"
          r="180"
          fill="none"
          stroke="var(--cb)"
          strokeWidth="1"
          strokeDasharray="4 6"
        />

        {/* Outer ring */}
        <circle
          cx="280"
          cy="280"
          r="250"
          fill="none"
          stroke="var(--navy)"
          strokeWidth="1"
          className="group-hover:animate-[spin_30s_linear_infinite] origin-center opacity-20"
        />

        {/* Degree marks */}
        <g className="group-hover:animate-[spin_30s_linear_infinite] origin-center">
          {Array.from({ length: 72 }).map((_, i) => {
            const angle = i * 5;
            const isMajor = angle % 90 === 0;
            const length = isMajor ? 16 : 6;
            const strokeWidth = isMajor ? 2 : 1;
            const opacity = isMajor ? 0.8 : 0.2;

            return (
              <line
                key={i}
                x1="280"
                y1="30"
                x2="280"
                y2={30 + length}
                stroke="var(--navy)"
                strokeWidth={strokeWidth}
                opacity={opacity}
                transform={`rotate(${angle} 280 280)`}
              />
            );
          })}
        </g>

        {/* Cardinal arms */}
        <line x1="280" y1="50" x2="280" y2="280" stroke="var(--navy)" strokeWidth="1.5" opacity="0.5" />
        <line x1="280" y1="510" x2="280" y2="280" stroke="var(--crimson-dark)" strokeWidth="1.5" opacity="0.5" />
        <line x1="50" y1="280" x2="280" y2="280" stroke="var(--navy-light)" strokeWidth="1.5" opacity="0.5" />
        <line x1="510" y1="280" x2="280" y2="280" stroke="var(--crimson)" strokeWidth="1.5" opacity="0.5" />

        {/* Diamond arrowheads */}
        <g>
          {/* North - Navy */}
          <polygon points="280,40 286,50 280,60 274,50" fill="var(--navy)" />
          {/* South - Crimson Dark */}
          <polygon points="280,520 286,510 280,500 274,510" fill="var(--crimson-dark)" />
          {/* West - Navy Light */}
          <polygon points="40,280 50,274 60,280 50,286" fill="var(--navy-light)" />
          {/* East - Crimson */}
          <polygon points="520,280 510,274 500,280 510,286" fill="var(--crimson)" />
        </g>

        {/* Centre circle */}
        <circle cx="280" cy="280" r="24" fill="var(--bg-campaign)" stroke="var(--navy)" strokeWidth="1" />
        <circle cx="280" cy="280" r="8" fill="var(--crimson)" />

        {/* Text Labels (SVG Text for perfect scaling) */}
        <g className="font-display font-bold text-[56px]" textAnchor="middle" dominantBaseline="middle">
          {/* North (C) */}
          <text x="280" y="110" fill="var(--navy)">C</text>
          {/* East (G) */}
          <text x="440" y="285" fill="var(--crimson)">G</text>
          {/* South (R) */}
          <text x="280" y="460" fill="var(--crimson-dark)">R</text>
          {/* West (I) */}
          <text x="120" y="285" fill="var(--navy-light)">I</text>
        </g>

        <g className="font-mono text-[10px] tracking-widest uppercase" textAnchor="middle" fill="var(--ct2)">
          <text x="280" y="145">COMPETENCIES</text>
          <text x="440" y="320">GROWTH</text>
          <text x="280" y="495">RISKS</text>
          <text x="120" y="320">IMPROVEMENTS</text>
        </g>

        {/* Centre Text */}
        <g className="font-mono text-[9px] tracking-[0.2em] uppercase" textAnchor="middle" fill="var(--ct2)">
          <text x="280" y="325">DISTRICT 3220</text>
        </g>
      </motion.svg>

      {/* Caption below compass */}
      <p className="font-mono text-[0.7rem] text-[var(--cta)] text-center mt-6">
        C — COMPETENCIES · I — IMPROVEMENTS · G — GROWTH · R — RISKS
      </p>
    </div>
  );
}
