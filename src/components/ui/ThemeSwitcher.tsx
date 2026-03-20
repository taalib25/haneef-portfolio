import { useState, useEffect } from 'react';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState('navy');

  const toggle = () => {
    const next = theme === 'navy' ? 'crimson' : 'navy';
    setTheme(next);
    if (next === 'crimson') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', 'navy');
    }
    localStorage.setItem('theme', next);
  };

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'crimson') {
      setTheme('crimson');
      document.documentElement.removeAttribute('data-theme');
    }
  }, []);

  return (
    <button
      onClick={toggle}
      aria-label="Switch colour theme"
      className="w-7 h-7 rounded-full border-2 border-current flex-shrink-0 transition-colors duration-300"
      style={{
        background: theme === 'crimson' ? '#C1121F' : '#096B90',
      }}
    />
  );
}
