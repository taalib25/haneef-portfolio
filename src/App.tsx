import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Professional from './pages/Professional';
import Rotaract from './pages/Rotaract';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[var(--bg)] text-[var(--t1)] font-body selection:bg-[var(--crimson)] selection:text-[var(--t1)]">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/professional" element={<Professional />} />
          <Route path="/rotaract" element={<Rotaract />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
