import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './lib/scroll'; // Lenis + GSAP initialization

// Lenis + GSAP integration is handled in scroll.ts

// Create a wrapper component to handle Lenis initialization
function AppWithSmoothScroll() {
  return <App />;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWithSmoothScroll />
  </StrictMode>,
);