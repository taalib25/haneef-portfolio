import { useState, useEffect } from 'react';

export function useScrollSpy(ids: string[], offset: number = 0) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const listener = () => {
      const scrollPosition = window.scrollY + offset;

      let currentId = '';
      for (const id of ids) {
        const element = document.getElementById(id);
        if (element && element.offsetTop <= scrollPosition) {
          currentId = id;
        }
      }

      setActiveId(currentId);
    };

    window.addEventListener('scroll', listener);
    listener(); // Initial check

    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, [ids, offset]);

  return activeId;
}
