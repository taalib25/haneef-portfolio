import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';

const Home = lazy(() => import('./pages/Home'));
const Professional = lazy(() => import('./pages/Professional'));
const Rotaract = lazy(() => import('./pages/Rotaract'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg)]">
      <div className="w-6 h-6 border-2 border-[var(--crimson)] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function PrefetchLinks() {
  const { pathname } = useLocation();
  useEffect(() => {
    const routes = ['/', '/professional', '/rotaract'];
    routes.filter(r => r !== pathname).forEach(route => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = route;
      document.head.appendChild(link);
    });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PrefetchLinks />
      <div className="min-h-screen bg-[var(--bg)] text-[var(--t1)] font-body selection:bg-[var(--crimson)] selection:text-[var(--t1)]">
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
