/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Suspense, lazy, useState, useLayoutEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';

const Story = lazy(() => import('./components/sections/Story'));
const Work = lazy(() => import('./components/sections/Work'));
const Philosophy = lazy(() => import('./components/sections/Philosophy'));
const Campaign = lazy(() => import('./components/sections/Campaign'));
const Recognition = lazy(() => import('./components/sections/Recognition'));
const Contact = lazy(() => import('./components/sections/Contact'));

export default function App() {
  const [showContent, setShowContent] = useState(false);

  useLayoutEffect(() => {
    // Brief loading window to let fonts, images, and styles settle
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--t1)] font-body selection:bg-[var(--crimson)] selection:text-[var(--t1)]">
      {/* Loading overlay — fades out once content is ready */}
      <div
        className="fixed inset-0 z-[9999] bg-[var(--bg)]"
        style={{
          opacity: showContent ? 0 : 1,
          visibility: showContent ? 'hidden' : 'visible',
          transition: 'opacity 0.5s ease, visibility 0s linear 0.5s',
          pointerEvents: 'none',
        }}
      />

      <div style={{ opacity: showContent ? 1 : 0, transition: 'opacity 0.4s ease 0.1s' }}>
        <Navbar />
        
        <main className="relative">
          <Hero />
          
          <Suspense fallback={<div className="h-screen bg-[var(--bg)]" />}>
            <Story />
            <Work />
            <Philosophy />
            <Campaign />
            <Recognition />
            <Contact />
          </Suspense>
        </main>
      </div>
    </div>
  );
}

