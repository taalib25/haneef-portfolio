import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Mouse position
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring for the ring
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if device has a fine pointer (mouse)
    const isCoarse = window.matchMedia('(pointer: coarse)').matches;
    if (isCoarse) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if target or any parent has data-cursor="hover" or is a link/button
      const isInteractive = target.closest('a, button, [data-cursor="hover"]');
      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Dot (Instant) */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[var(--crimson)] rounded-full pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2"
        style={{
          x: mouseX,
          y: mouseY,
        }}
      />
      
      {/* Ring (Lagged) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-[var(--t2)] rounded-full pointer-events-none z-[99] -translate-x-1/2 -translate-y-1/2"
        style={{
          x: ringX,
          y: ringY,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? 'var(--crimson)' : 'var(--t2)',
          backgroundColor: isHovering ? 'color-mix(in srgb, var(--crimson) 10%, transparent)' : 'transparent',
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}