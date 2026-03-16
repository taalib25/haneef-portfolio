import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';

// Initialize Lenis smooth scrolling
function initSmoothScroll() {
  const lenis = new Lenis({
    lerp: 0.08, // slow, heavy scroll like a printed page turning
    smoothWheel: true,
    touchMultiplier: 1.5, // responsive on touch
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth easing
  });

  // Integrate with GSAP's ticker for ScrollTrigger compatibility
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  
  gsap.ticker.lagSmoothing(0);

  // Clean up on unmount
  return () => {
    gsap.ticker.remove((time) => {
      lenis.raf(time * 1000);
    });
    lenis.destroy();
  };
}

// Create a wrapper component to handle Lenis initialization
function AppWithSmoothScroll() {
  useEffect(() => {
    const cleanup = initSmoothScroll();
    return cleanup;
  }, []);

  return <App />;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWithSmoothScroll />
  </StrictMode>,
);