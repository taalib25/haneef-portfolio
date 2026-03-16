
import { motion } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export default function CIGRCompass() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative w-full max-w-140 mx-auto aspect-square flex items-center justify-center my-16 md:my-24 group px-4">
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

        {/* Degree marks: 72 ticks every 5 degrees */}
        <g className="group-hover:animate-[spin_30s_linear_infinite] origin-center">
          {Array.from({ length: 72 }).map((_, i) => {
            const angle = i * 5;
            const isMajor = angle % 90 === 0;
            const length = isMajor ? 16 : 6;
            const strokeWidth = isMajor ? 2 : 1;
            const opacity = isMajor ? 0.8 : 0.2;

            // Calculate inner and outer points for the tick marks
            const innerRadius = 250 - length;
            const x1 = 280 + (innerRadius * Math.sin((angle * Math.PI) / 180));
            const y1 = 280 - (innerRadius * Math.cos((angle * Math.PI) / 180));
            const x2 = 280 + (250 * Math.sin((angle * Math.PI) / 180));
            const y2 = 280 - (250 * Math.cos((angle * Math.PI) / 180));

            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="var(--navy)"
                strokeWidth={strokeWidth}
                opacity={opacity}
              />
            );
          })}
        </g>

        {/* Cardinal arms: lines from center to outer ring at 0°, 90°, 180°, 270° */}
        <g>
          {/* North (0°) */}
          <line
            x1="280"
            y1="280"
            x2="280"
            y2="30"
            stroke="var(--navy)"
            strokeWidth="1.5"
            opacity="0.5"
          />
          {/* South (180°) */}
          <line
            x1="280"
            y1="280"
            x2="280"
            y2="530"
            stroke="var(--crimson-dark)"
            strokeWidth="1.5"
            opacity="0.5"
          />
          {/* West (270°) */}
          <line
            x1="280"
            y1="280"
            x2="30"
            y2="280"
            stroke="var(--navy-light)"
            strokeWidth="1.5"
            opacity="0.5"
          />
          {/* East (90°) */}
          <line
            x1="280"
            y1="280"
            x2="530"
            y2="280"
            stroke="var(--crimson)"
            strokeWidth="1.5"
            opacity="0.5"
          />
        </g>

        {/* Diamond arrowheads at the end of cardinal arms (outside outer ring) */}
        <g>
          {/* North arrowhead */}
          <polygon
            points="280,10 286,20 280,30 274,20"
            fill="var(--navy)"
          />
          {/* South arrowhead */}
          <polygon
            points="280,550 286,540 280,530 274,540"
            fill="var(--crimson-dark)"
          />
          {/* West arrowhead */}
          <polygon
            points="10,280 20,286 30,280 20,274"
            fill="var(--navy-light)"
          />
          {/* East arrowhead */}
          <polygon
            points="530,280 540,286 530,290 540,274"
            fill="var(--crimson)"
          />
        </g>

        {/* Letters at radius 220 from center (C, G, R, I) */}
        <g
          className="font-display font-bold text-[56px]"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {/* North (C) at angle 0° */}
          <text
            x="280"
            y="60"
            fill="var(--navy)"
            transform="rotate(0 280 280)"
          >
            C
          </text>
          {/* East (G) at angle 90° */}
          <text
            x="500"
            y="280"
            fill="var(--crimson)"
            transform="rotate(90 280 280)"
          >
            G
          </text>
          {/* South (R) at angle 180° */}
          <text
            x="280"
            y="500"
            fill="var(--crimson-dark)"
            transform="rotate(180 280 280)"
          >
            R
          </text>
          {/* West (I) at angle 270° */}
          <text
            x="60"
            y="280"
            fill="var(--navy-light)"
            transform="rotate(270 280 280)"
          >
            I
          </text>
        </g>

        {/* Labels underneath letters (monospace, uppercase, tracking wide) */}
        <g
          className="font-mono text-[10px] tracking-widest uppercase"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="var(--ct2)"
        >
          {/* North Label (COMPETENCIES) */}
          <text x="280" y="100">
            COMPETENCIES
          </text>
          {/* East Label (GROWTH) */}
          <text x="540" y="280">
            GROWTH
          </text>
          {/* South Label (RISKS) */}
          <text x="280" y="460">
            RISKS
          </text>
          {/* West Label (IMPROVEMENTS) */}
          <text x="20" y="280">
            IMPROVEMENTS
          </text>
        </g>

        {/* Centre circle (dot) and ring */}
        <circle
          cx="280"
          cy="280"
          r="24"
          fill="var(--bg-campaign)"
          stroke="var(--navy)"
          strokeWidth="1"
        />
        <circle cx="280" cy="280" r="8" fill="var(--crimson)" />

        {/* Centre Text: DISTRICT 3220 */}
        <g
          className="font-mono text-[9px] tracking-[0.2em] uppercase"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="var(--ct2)"
        >
          <text x="280" y="325">
            DISTRICT 3220
          </text>
        </g>
      </motion.svg>

      {/* Caption below compass */}
      <p className="font-mono text-t-xs text-(--cta) text-center mt-6">
        C — COMPETENCIES · I — IMPROVEMENTS · G — GROWTH · R — RISKS
      </p>
    </div>
  );
}