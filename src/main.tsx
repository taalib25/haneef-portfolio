import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initSmoothScroll } from './lib/scroll';

const cleanupSmoothScroll = initSmoothScroll();

if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    cleanupSmoothScroll();
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
