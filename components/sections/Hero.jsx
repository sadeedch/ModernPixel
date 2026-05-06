'use client';

import { useEffect, useRef } from 'react';
import { navItems } from '@/data/siteData';
import HeroArtwork from '@/components/visuals/HeroArtwork';
import Image from 'next/image';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const onMove = (event) => {
      if (!heroRef.current) return;

      const rect = heroRef.current.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;

      heroRef.current.style.setProperty('--mx', `${px * 14}px`);
      heroRef.current.style.setProperty('--my', `${py * 14}px`);
      heroRef.current.style.setProperty('--rx', `${py * -2}deg`);
      heroRef.current.style.setProperty('--ry', `${px * 2.5}deg`);
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-grid" />

      <nav className="top-nav reveal">
        {/* <a className="logo" href="#home" aria-label="ModernPixel home">
          <span className="logo-icon">
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
          </span>
          <strong>ModernPixel</strong>
        </a> */}

 <Image
  src="/logo2.png"
  alt="ModernPixel"
  width={340}
  height={80}
  priority
  style={{
    objectFit: 'contain',
    objectPosition: 'left center',
    width: '220px',
    height: 'auto',
  }}
/>


        <div className="nav-pill">
          {navItems.map((item) => {
            const href =
              item.toLowerCase() === 'about'
                ? '#about'
                : `#${item.toLowerCase()}`;

            return (
              <a key={item} href={href}>
                {item}
              </a>
            );
          })}
        </div>

        <a className="buy-button" href="mailto:contact@modernpixel.com.au">
          Start Project
        </a>
      </nav>

      <div className="hero-word" aria-hidden="true">
        ModernPixel
      </div>

      <div className="hero-center reveal">
        <div className="rating-row">
          <strong>5.0</strong>
          <span className="star">★</span>
          <span className="mini-avatars">
            <i>MP</i>
            <i>UX</i>
            <i>SEO</i>
          </span>
          <b>Premium Digital Websites</b>
        </div>

        <h1 style={{fontSize: "150px", color: "rgb(18, 18, 95)"}}>Scale Your Brand </h1>
        <h1 style={{fontSize: "80px", color: "rgb(114, 114, 138)"}}>with</h1>
         <h1 style={{fontSize: "120px" , color: "rgb(18, 18, 95)"}}>Modern Web Design</h1>

        <p>
          ModernPixel is a Brisbane based web design agency 
          creating premium websites, SaaS interfaces, and SEO-ready digital
          experiences for Australian businesses that want to look sharper and
          convert better.
        </p>

        <a href="tel:0450237005" className="hero-button">
          Get started <span>→</span>
        </a>


        <div className="hero-media-wrap reveal" style={{marginTop: "100px"}}>
          <HeroArtwork />
        </div>
      </div>
    </section>
  );
}