/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Suspense, lazy } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';

const Story = lazy(() => import('./components/sections/Story'));
const Work = lazy(() => import('./components/sections/Work'));
const Philosophy = lazy(() => import('./components/sections/Philosophy'));
const Campaign = lazy(() => import('./components/sections/Campaign'));
const Recognition = lazy(() => import('./components/sections/Recognition'));
const Contact = lazy(() => import('./components/sections/Contact'));

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--t1)] font-body selection:bg-[var(--crimson)] selection:text-[var(--t1)]">
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
  );
}

