import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initSmoothScroll } from './lib/scroll';
import { syncRuntimeSeoUrls } from './lib/seo';

const cleanupSmoothScroll = initSmoothScroll();
syncRuntimeSeoUrls();

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
