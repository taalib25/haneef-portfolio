import { useState, useEffect } from 'react';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState('crimson');

  const toggle = () => {
    const next = theme === 'crimson' ? 'navy' : 'crimson';
    setTheme(next);
    if (next === 'navy') {
      document.documentElement.setAttribute('data-theme', 'navy');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', next);
  };

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'navy') {
      setTheme('navy');
      document.documentElement.setAttribute('data-theme', 'navy');
    }
  }, []);

  return (
    <button
      onClick={toggle}
      aria-label="Switch colour theme"
      className="w-7 h-7 rounded-full border-2 border-current flex-shrink-0 transition-colors duration-300"
      style={{
        background: theme === 'crimson' ? '#096B90' : '#C1121F',
      }}
    />
  );
}
