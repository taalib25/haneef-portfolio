import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import Lenis from 'lenis';

// Initialize Lenis smooth scrolling - Fixed for smooth, non-glitchy experience
function initSmoothScroll() {
  const lenis = new Lenis({
    lerp: 0.1, // Lower = smoother but slower, higher = faster but can feel glitchy
    duration: 1.2, // Longer duration = smoother scroll
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -8 * t)), // Natural easing curve
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1, // Don't amplify wheel input
    touchMultiplier: 1, // Don't amplify touch input
    infinite: false,
  });

  // RequestAnimationFrame loop for smooth updates
  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Clean up on unmount
  return () => {
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