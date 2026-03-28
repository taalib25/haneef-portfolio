import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
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

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
      </div>
    </BrowserRouter>
  );
}
