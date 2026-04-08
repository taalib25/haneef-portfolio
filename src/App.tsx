import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/layout/Navbar';
import {
  loadHome,
  loadProfessional,
  loadRotaract,
  preloadAllRoutesOnIdle,
} from './lib/routePreload';

const Home = lazy(loadHome);
const Professional = lazy(loadProfessional);
const Rotaract = lazy(loadRotaract);

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function PageLoader() {
  return (
    <div className="min-h-[100dvh] flex items-center justify-center bg-[var(--bg)]">
      <div className="w-6 h-6 border-2 border-[var(--crimson)] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function RuntimePreload() {
  useEffect(() => {
    preloadAllRoutesOnIdle();
  }, []);
  return null;
}

function GlobalScrollGuard() {
  const { pathname } = useLocation();

  useEffect(() => {
    const unlockScroll = () => {
      const root = document.documentElement;
      const body = document.body;
      const isMobileSafeMode = root.classList.contains('mobile-safe-scroll');

      root.style.overflowY = '';
      body.style.overflowY = '';

      if (isMobileSafeMode) {
        root.style.overflowY = 'auto';
        body.style.overflowY = 'auto';
      }
    };

    const onPageShow = () => unlockScroll();
    const onVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        unlockScroll();
      }
    };

    window.addEventListener('pageshow', onPageShow);
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      window.removeEventListener('pageshow', onPageShow);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const isMobileSafeMode = root.classList.contains('mobile-safe-scroll');

    root.style.overflowY = '';
    body.style.overflowY = '';

    if (isMobileSafeMode) {
      root.style.overflowY = 'auto';
      body.style.overflowY = 'auto';
    }
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <GlobalScrollGuard />
      <RuntimePreload />
      <div className="min-h-[100dvh] bg-[var(--bg)] text-[var(--t1)] font-body selection:bg-[var(--crimson)] selection:text-[var(--t1)]">
        <Navbar />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/professional" element={<Professional />} />
            <Route path="/rotaract" element={<Rotaract />} />
          </Routes>
        </Suspense>
        <Analytics />
      </div>
      <Analytics />
    </BrowserRouter>
  );
}
