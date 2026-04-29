'use client';

import { useEffect, useRef } from 'react';

export default function SiteEffects() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.16 }
    );

    revealItems.forEach((item) => observer.observe(item));

    const onMouseMove = (event) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    };

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      document.documentElement.style.setProperty('--scroll', String(progress));
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor-light" />
      <div className="scroll-line" />
    </>
  );
}
