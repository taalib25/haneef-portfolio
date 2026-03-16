import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function CIGRCompass() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative w-full max-w-[500px] mx-auto aspect-square flex items-center justify-center my-16 md:my-24 group px-4">
      <motion.svg
        viewBox="0 0 500 500"
        className="w-full h-full drop-shadow-xl"
        initial={{ rotate: prefersReducedMotion ? 0 : -90, opacity: 0 }}
        whileInView={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
      >
        {/* Subtle background geometry */}
        <circle
          cx="250"
          cy="250"
          r="160"
          fill="none"
          stroke="var(--cb)"
          strokeWidth="1"
          strokeDasharray="4 6"
        />

        {/* Outer ring */}
        <circle
          cx="250"
          cy="250"
          r="220"
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
                x1="250"
                y1={30}
                x2="250"
                y2={30 + length}
                stroke="var(--navy)"
                strokeWidth={strokeWidth}
                opacity={opacity}
                transform={`rotate(${angle} 250 250)`}
              />
            );
          })}
        </g>

        {/* Cardinal arms */}
        <line x1="250" y1="50" x2="250" y2="250" stroke="var(--navy)" strokeWidth="1.5" opacity="0.5" />
        <line x1="250" y1="450" x2="250" y2="250" stroke="var(--crimson-dark)" strokeWidth="1.5" opacity="0.5" />
        <line x1="50" y1="250" x2="250" y2="250" stroke="var(--navy-light)" strokeWidth="1.5" opacity="0.5" />
        <line x1="450" y1="250" x2="250" y2="250" stroke="var(--crimson)" strokeWidth="1.5" opacity="0.5" />

        {/* Diamond arrowheads */}
        <g>
          {/* North - Navy */}
          <polygon points="250,40 256,50 250,60 244,50" fill="var(--navy)" />
          {/* South - Crimson Dark */}
          <polygon points="250,460 256,450 250,440 244,450" fill="var(--crimson-dark)" />
          {/* West - Navy Light */}
          <polygon points="40,250 50,244 60,250 50,256" fill="var(--navy-light)" />
          {/* East - Crimson */}
          <polygon points="460,250 450,244 440,250 450,256" fill="var(--crimson)" />
        </g>

        {/* Centre circle */}
        <circle cx="250" cy="250" r="24" fill="var(--bg-campaign)" stroke="var(--navy)" strokeWidth="1" />
        <circle cx="250" cy="250" r="8" fill="var(--crimson)" />

        {/* Text Labels (SVG Text for perfect scaling) */}
        <g className="font-display font-bold text-[56px]" textAnchor="middle" dominantBaseline="middle">
          {/* North (C) */}
          <text x="250" y="100" fill="var(--navy)">C</text>
          {/* East (G) */}
          <text x="400" y="255" fill="var(--crimson)">G</text>
          {/* South (R) */}
          <text x="250" y="410" fill="var(--crimson-dark)">R</text>
          {/* West (I) */}
          <text x="100" y="255" fill="var(--navy-light)">I</text>
        </g>

        <g className="font-mono text-[10px] tracking-widest uppercase" textAnchor="middle" fill="var(--ct2)">
          <text x="250" y="135">COMPETENCIES</text>
          <text x="400" y="290">GROWTH</text>
          <text x="250" y="445">RISKS</text>
          <text x="100" y="290">IMPROVEMENTS</text>
        </g>

        {/* Centre Text */}
        <g className="font-mono text-[9px] tracking-[0.2em] uppercase" textAnchor="middle" fill="var(--ct2)">
          <text x="250" y="295">DISTRICT 3220</text>
        </g>
      </motion.svg>
    </div>
  );
}
