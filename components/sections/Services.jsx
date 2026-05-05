// 'use client';

// import { useState } from 'react';
// import { services } from '@/data/siteData';

// export default function Services() {
//   const [activeService, setActiveService] = useState(0);

//   return (
//     <section id="services" className="services-panel">
//       <div className="services-inner">
//         <div className="service-list reveal">
//           {services.map((service, index) => (
//             <button
//               key={service.title}
//               className={`service-row ${activeService === index ? 'active' : ''}`}
//               onMouseEnter={() => setActiveService(index)}
//               onFocus={() => setActiveService(index)}
//               type="button"
//             >
//               <span>{service.title}</span>
//             </button>
//           ))}
//         </div>

//         <div className="service-preview reveal">
//           <div className="preview-stack back-one" />
//           <div className="preview-stack back-two" />
//           <div className="preview-image">
//             <div className="silhouette" />
//             <div className="preview-title">{services[activeService].imageTitle}</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';

import { useState, useEffect, useRef } from 'react';

const services = [
  {
    title: 'Website Design',
    subtitle: 'Crafting digital experiences that convert',
    tag: '01',
    accent: '#6C63FF',
  },
  {
    title: 'UI/UX Design',
    subtitle: 'Interfaces built around real human behaviour',
    tag: '02',
    accent: '#A78BFA',
  },
  {
    title: 'Digital Marketing',
    subtitle: 'Growth strategies backed by data',
    tag: '03',
    accent: '#34D399',
  },
  {
    title: 'Brand Systems',
    subtitle: 'Visual identity that scales with you',
    tag: '04',
    accent: '#F472B6',
  },
];

/* ── Animated SVG previews ─────────────────────────────────────────────── */

function WebsiteDesignPreview() {
  return (
    <svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id="wdBg" x1="0" y1="0" x2="340" y2="260" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1a1535" />
          <stop offset="1" stopColor="#0f0e1a" />
        </linearGradient>
        <linearGradient id="wdAccent" x1="0" y1="0" x2="1" y2="0">
          <stop stopColor="#6C63FF" />
          <stop offset="1" stopColor="#A78BFA" />
        </linearGradient>
        <clipPath id="wdClip">
          <rect x="20" y="20" width="300" height="220" rx="12" />
        </clipPath>
      </defs>

      {/* Browser shell */}
      <rect x="20" y="20" width="300" height="220" rx="12" fill="#1e1b35" />
      <rect x="20" y="20" width="300" height="38" rx="12" fill="#16132a" />
      <rect x="20" y="46" width="300" height="12" fill="#16132a" />

      {/* Browser dots */}
      <circle cx="40" cy="39" r="5" fill="#FF5F57" />
      <circle cx="57" cy="39" r="5" fill="#FEBC2E" />
      <circle cx="74" cy="39" r="5" fill="#28C840" />

      {/* URL bar */}
      <rect x="90" y="30" width="160" height="18" rx="9" fill="#2a2550" />
      <text x="170" y="43" textAnchor="middle" fill="#6C63FF" fontSize="9" fontFamily="monospace">yoursite.com</text>

      {/* Hero section in browser */}
      <rect x="30" y="68" width="280" height="90" rx="6" fill="url(#wdAccent)" opacity="0.12" />
      <rect x="30" y="68" width="280" height="90" rx="6" stroke="#6C63FF" strokeWidth="0.5" strokeOpacity="0.3" />

      {/* Hero text lines */}
      <rect x="50" y="85" width="140" height="10" rx="5" fill="#6C63FF" opacity="0.8">
        <animate attributeName="width" from="0" to="140" dur="0.8s" fill="freeze" />
      </rect>
      <rect x="50" y="102" width="100" height="7" rx="3.5" fill="#A78BFA" opacity="0.5">
        <animate attributeName="width" from="0" to="100" dur="0.9s" begin="0.2s" fill="freeze" />
      </rect>
      <rect x="50" y="116" width="80" height="7" rx="3.5" fill="#A78BFA" opacity="0.3">
        <animate attributeName="width" from="0" to="80" dur="1s" begin="0.4s" fill="freeze" />
      </rect>

      {/* CTA button */}
      <rect x="50" y="130" width="72" height="22" rx="11" fill="url(#wdAccent)" opacity="0.9" />
      <text x="86" y="145" textAnchor="middle" fill="white" fontSize="8" fontWeight="600">Get Started</text>

      {/* Card row */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={30 + i * 97} y="168" width="86" height="58" rx="6" fill="#2a2550" opacity="0.7" />
          <rect x={30 + i * 97} y="168" width="86" height="58" rx="6" stroke="#6C63FF" strokeWidth="0.5" strokeOpacity="0.2" />
          <rect x={40 + i * 97} y="178" width="30" height="3" rx="1.5" fill="#6C63FF" opacity="0.7" />
          <rect x={40 + i * 97} y="186" width="60" height="2.5" rx="1.25" fill="#ffffff" opacity="0.15" />
          <rect x={40 + i * 97} y="192" width="45" height="2.5" rx="1.25" fill="#ffffff" opacity="0.1" />
          <rect x={40 + i * 97} y="198" width="50" height="2.5" rx="1.25" fill="#ffffff" opacity="0.1" />
          <rect x={40 + i * 97} y="208" width="40" height="14" rx="7" fill="#6C63FF" opacity="0.3" />
        </g>
      ))}

      {/* Animated cursor */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0; 40,-10; 80,30; 40,60; 0,0" dur="4s" repeatCount="indefinite" />
        <path d="M86 137 L86 150 L89 146 L93 153 L95 152 L91 145 L96 145 Z" fill="white" opacity="0.9" />
      </g>
    </svg>
  );
}

function UIUXPreview() {
  return (
    <svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id="uxGrad" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#7C3AED" />
          <stop offset="1" stopColor="#A78BFA" />
        </linearGradient>
      </defs>

      {/* Layer cards stacked */}
      {/* Back card */}
      <rect x="60" y="60" width="200" height="145" rx="14" fill="#1a163a" stroke="#A78BFA" strokeWidth="0.5" strokeOpacity="0.3" transform="rotate(-6, 160, 132)" />
      {/* Mid card */}
      <rect x="55" y="65" width="210" height="145" rx="14" fill="#20194a" stroke="#A78BFA" strokeWidth="0.5" strokeOpacity="0.5" transform="rotate(-2, 160, 137)" />

      {/* Front card — component showcase */}
      <rect x="50" y="70" width="240" height="150" rx="14" fill="#261e52" stroke="#A78BFA" strokeWidth="1" strokeOpacity="0.6" />

      {/* Top avatar row */}
      <circle cx="80" cy="105" r="20" fill="url(#uxGrad)" opacity="0.8" />
      <text x="80" y="110" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">AK</text>
      <rect x="108" y="96" width="80" height="7" rx="3.5" fill="#ffffff" opacity="0.6" />
      <rect x="108" y="108" width="55" height="5" rx="2.5" fill="#A78BFA" opacity="0.5" />

      {/* Toggle switch */}
      <rect x="235" y="99" width="38" height="18" rx="9" fill="#A78BFA" opacity="0.9" />
      <circle cx="247" cy="108" r="7" fill="white">
        <animate attributeName="cx" values="247;267;247" dur="3s" repeatCount="indefinite" />
      </circle>
      <rect x="244" y="108" width="24" height="0.5" rx="0.25" fill="#A78BFA" opacity="0" />

      {/* Progress bar */}
      <rect x="70" y="136" width="200" height="6" rx="3" fill="#1a1535" />
      <rect x="70" y="136" width="140" height="6" rx="3" fill="url(#uxGrad)" opacity="0.9">
        <animate attributeName="width" values="60;140;60" dur="4s" repeatCount="indefinite" />
      </rect>
      <text x="280" y="142" fill="#A78BFA" fontSize="8" textAnchor="end">70%</text>

      {/* Tag pills */}
      {['Design', 'Prototype', 'Test'].map((tag, i) => (
        <g key={tag}>
          <rect x={70 + i * 72} y="152" width={tag.length * 6 + 16} height="18" rx="9"
            fill={i === 0 ? '#7C3AED' : '#2a2260'} stroke="#A78BFA" strokeWidth="0.5" strokeOpacity="0.5" />
          <text x={70 + i * 72 + (tag.length * 6 + 16) / 2} y="164" textAnchor="middle" fill={i === 0 ? 'white' : '#A78BFA'} fontSize="8">{tag}</text>
        </g>
      ))}

      {/* Input field */}
      <rect x="70" y="180" width="200" height="26" rx="8" fill="#1a1535" stroke="#A78BFA" strokeWidth="0.5" strokeOpacity="0.4" />
      <text x="82" y="197" fill="#A78BFA" fontSize="9" opacity="0.5">Search components...</text>
      <rect x="256" y="186" width="8" height="8" rx="2" fill="#A78BFA" opacity="0.5" />

      {/* Floating label */}
      <rect x="168" y="52" width="72" height="22" rx="6" fill="#A78BFA" opacity="0.9">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
      </rect>
      <text x="204" y="67" textAnchor="middle" fill="white" fontSize="9" fontWeight="600">Component</text>

      {/* Connector line */}
      <line x1="204" y1="74" x2="204" y2="84" stroke="#A78BFA" strokeWidth="1" strokeOpacity="0.6" strokeDasharray="2 2" />
    </svg>
  );
}

function DigitalMarketingPreview() {
  const bars = [42, 65, 50, 80, 60, 95, 72];
  const maxH = 80;

  return (
    <svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#34D399" />
          <stop offset="1" stopColor="#059669" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="340" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#34D399" stopOpacity="0" />
          <stop offset="0.3" stopColor="#34D399" />
          <stop offset="1" stopColor="#34D399" />
        </linearGradient>
      </defs>

      {/* Dashboard BG */}
      <rect x="20" y="20" width="300" height="220" rx="14" fill="#0f1f18" />
      <rect x="20" y="20" width="300" height="220" rx="14" stroke="#34D399" strokeWidth="0.5" strokeOpacity="0.2" />

      {/* Stat cards */}
      {[
        { label: 'Reach', value: '2.4M', delta: '+18%' },
        { label: 'Conv.', value: '8.7%', delta: '+3.2%' },
        { label: 'ROAS', value: '4.2x', delta: '+0.8x' },
      ].map((s, i) => (
        <g key={s.label}>
          <rect x={30 + i * 98} y="30" width="86" height="48" rx="8" fill="#0a2e1e" stroke="#34D399" strokeWidth="0.5" strokeOpacity="0.3" />
          <text x={73 + i * 98} y="50" textAnchor="middle" fill="#34D399" fontSize="15" fontWeight="700">{s.value}</text>
          <text x={73 + i * 98} y="62" textAnchor="middle" fill="#6ee7b7" fontSize="8" opacity="0.6">{s.label}</text>
          <rect x={100 + i * 98} y="32" width={s.delta.length * 5 + 6} height="13" rx="4" fill="#059669" opacity="0.4" />
          <text x={103 + i * 98} y="42" fill="#34D399" fontSize="8">{s.delta}</text>
        </g>
      ))}

      {/* Grid lines */}
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1="30" y1={90 + i * 25} x2="310" y2={90 + i * 25} stroke="#34D399" strokeWidth="0.3" strokeOpacity="0.15" />
      ))}

      {/* Bar chart */}
      {bars.map((val, i) => {
        const h = (val / 100) * maxH;
        return (
          <g key={i}>
            <rect x={38 + i * 40} y={165 - h} width="22" height={h} rx="4" fill="url(#barGrad)" opacity="0.85">
              <animate attributeName="height" from="0" to={h} dur={`${0.4 + i * 0.1}s`} fill="freeze" />
              <animate attributeName="y" from="165" to={165 - h} dur={`${0.4 + i * 0.1}s`} fill="freeze" />
            </rect>
          </g>
        );
      })}

      {/* Line chart overlay */}
      <polyline
        points={bars.map((val, i) => `${49 + i * 40},${165 - (val / 100) * maxH}`).join(' ')}
        fill="none"
        stroke="#34D399"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="200"
        strokeDashoffset="200"
      >
        <animate attributeName="stroke-dashoffset" from="200" to="0" dur="1.5s" fill="freeze" />
      </polyline>

      {/* Data point highlight */}
      <circle cx="209" cy={165 - (95 / 100) * maxH} r="5" fill="#34D399">
        <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
      </circle>
      <rect x="212" y={165 - (95 / 100) * maxH - 16} width="32" height="14" rx="4" fill="#34D399" />
      <text x="228" y={165 - (95 / 100) * maxH - 5} textAnchor="middle" fill="#0a2e1e" fontSize="8" fontWeight="700">95%</text>

      {/* X-axis labels */}
      {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
        <text key={i} x={49 + i * 40} y="178" textAnchor="middle" fill="#34D399" fontSize="8" opacity="0.4">{d}</text>
      ))}

      {/* Funnel bottom */}
      <rect x="30" y="185" width="280" height="42" rx="8" fill="#0a2e1e" />
      <text x="42" y="200" fill="#6ee7b7" fontSize="8" opacity="0.7">Campaign Performance</text>
      <rect x="42" y="205" width="200" height="6" rx="3" fill="#0f1f18" />
      <rect x="42" y="205" width="168" height="6" rx="3" fill="#34D399" opacity="0.7">
        <animate attributeName="width" from="0" to="168" dur="1.2s" fill="freeze" />
      </rect>
      <text x="252" y="212" fill="#34D399" fontSize="8">84%</text>
      <text x="42" y="222" fill="#6ee7b7" fontSize="8" opacity="0.4">vs. prev. period</text>
      <text x="270" y="222" fill="#34D399" fontSize="8">↑ 12%</text>
    </svg>
  );
}

function BrandSystemsPreview() {
  const swatches = ['#F472B6', '#FB923C', '#FBBF24', '#34D399', '#60A5FA', '#A78BFA'];

  return (
    <svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id="bsGrad" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#F472B6" />
          <stop offset="1" stopColor="#A78BFA" />
        </linearGradient>
      </defs>

      {/* BG */}
      <rect x="20" y="20" width="300" height="220" rx="14" fill="#1a0d1e" />
      <rect x="20" y="20" width="300" height="220" rx="14" stroke="#F472B6" strokeWidth="0.5" strokeOpacity="0.25" />

      {/* Logo mark */}
      <g transform="translate(40, 35)">
        <circle cx="24" cy="24" r="22" fill="url(#bsGrad)" opacity="0.15" stroke="#F472B6" strokeWidth="1" strokeOpacity="0.4" />
        <path d="M24 12 L34 28 L24 36 L14 28 Z" fill="url(#bsGrad)" opacity="0.9" />
        <text x="80" y="22" fill="#F472B6" fontSize="16" fontWeight="700" letterSpacing="-0.5">AXIOM</text>
        <text x="80" y="36" fill="#C084FC" fontSize="9" opacity="0.6" letterSpacing="3">STUDIO</text>
      </g>

      {/* Typography showcase */}
      <rect x="30" y="90" width="280" height="58" rx="8" fill="#1f0f27" stroke="#F472B6" strokeWidth="0.5" strokeOpacity="0.2" />
      <text x="44" y="113" fill="#F472B6" fontSize="22" fontWeight="800" letterSpacing="-0.5" fontStyle="italic">Aa</text>
      <text x="80" y="108" fill="#e879f9" fontSize="9" fontWeight="600">Clash Display</text>
      <text x="80" y="120" fill="#c084fc" fontSize="8" opacity="0.6">ABCDEFGHIJKLMNOPQRSTUVWXYZ</text>
      <text x="80" y="132" fill="#a855f7" fontSize="8" opacity="0.4">abcdefghijklmnopqrstuvwxyz 0–9</text>

      <line x1="162" y1="96" x2="162" y2="142" stroke="#F472B6" strokeWidth="0.5" strokeOpacity="0.2" />

      <text x="174" y="112" fill="#F472B6" fontSize="18" fontWeight="300" letterSpacing="2">Aa</text>
      <text x="198" y="108" fill="#e879f9" fontSize="9" fontWeight="600">Satoshi</text>
      <text x="198" y="120" fill="#c084fc" fontSize="8" opacity="0.6">Regular 400</text>
      <text x="198" y="132" fill="#a855f7" fontSize="8" opacity="0.4">Body / UI text</text>

      {/* Color palette */}
      <text x="44" y="165" fill="#F472B6" fontSize="8" opacity="0.6" fontWeight="600" letterSpacing="1">COLOUR PALETTE</text>
      {swatches.map((c, i) => (
        <g key={c}>
          <rect x={44 + i * 44} y="172" width="36" height="36" rx="8" fill={c} opacity="0.85" />
          <rect x={44 + i * 44} y="172" width="36" height="36" rx="8" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
          {i === 0 && (
            <g>
              <rect x="44" y="202" width="36" height="14" rx="4" fill="#F472B6" opacity="0.9" />
              <text x="62" y="213" textAnchor="middle" fill="white" fontSize="7" fontWeight="600">Primary</text>
            </g>
          )}
        </g>
      ))}

      {/* Grid / spacing system */}
      <rect x="30" y="218" width="280" height="14" rx="4" fill="#1f0f27" />
      {[0, 4, 8, 16, 24, 32, 40, 48].map((sp, i) => (
        <g key={sp}>
          <rect x={36 + i * 33} y="220" width={Math.max(sp / 4, 2)} height="10" rx="1" fill="#F472B6" opacity={0.2 + i * 0.1} />
          <text x={36 + i * 33} y="228" fill="#F472B6" fontSize="6" opacity="0.4">{sp}</text>
        </g>
      ))}

      {/* Animated ring */}
      <circle cx="170" cy="45" r="0" fill="#F472B6" opacity="0.3">
        <animate attributeName="r" values="0;80;0" dur="3s" repeatCount="indefinite" begin="0.5s" />
        <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite" begin="0.5s" />
      </circle>
    </svg>
  );
}

const previews = [WebsiteDesignPreview, UIUXPreview, DigitalMarketingPreview, BrandSystemsPreview];

/* ── Main component ────────────────────────────────────────────────────── */

export default function Services() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const prevRef = useRef(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    checkMobile();

    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleHover = (index) => {
    if (index === active) return;

    setAnimating(true);

    setTimeout(() => {
      prevRef.current = active;
      setActive(index);
      setAnimating(false);
    }, 180);
  };

  const PreviewComponent = previews[active];

  return (
    <section
      id="services"
      style={{
        background:
          'linear-gradient(135deg, #0f0e1a 0%, #12102a 60%, #0f0e1a 100%)',
        minHeight: isMobile ? 'auto' : '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: isMobile ? '70px 0 86px' : '80px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: isMobile ? '28%' : '50%',
          left: isMobile ? '50%' : '25%',
          transform: 'translate(-50%, -50%)',
          width: isMobile ? '420px' : '600px',
          height: isMobile ? '420px' : '600px',
          background: `radial-gradient(circle, ${services[active].accent}18 0%, transparent 70%)`,
          transition: 'background 0.6s ease',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: isMobile ? '0 22px' : '0 30px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 600px',
          gap: isMobile ? '38px' : '48px',
          alignItems: 'center',
        }}
      >
        {/* Service list */}
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: isMobile ? '34px' : '48px',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '1px',
                background: services[active].accent,
                transition: 'background 0.4s',
              }}
            />

            <span
              style={{
                color: services[active].accent,
                fontSize: '11px',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                fontWeight: 600,
                transition: 'color 0.4s',
              }}
            >
              What We Do
            </span>
          </div>

          {services.map((service, index) => {
            const isActive = active === index;

            return (
              <button
                key={service.title}
                onMouseEnter={() => !isMobile && handleHover(index)}
                onFocus={() => handleHover(index)}
                onClick={() => handleHover(index)}
                type="button"
                style={{
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  display: 'block',
                }}
              >
                <div
                  style={{
                    height: '1px',
                    background: isActive
                      ? `linear-gradient(to right, ${service.accent}80, ${service.accent}10)`
                      : 'rgba(255,255,255,0.07)',
                    transition: 'background 0.4s ease',
                  }}
                />

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: isMobile ? '22px 0' : '28px 0',
                    position: 'relative',
                  }}
                >
                  {isActive && !isMobile && (
                    <div
                      style={{
                        position: 'absolute',
                        left: '-48px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '3px',
                        height: '40px',
                        background: service.accent,
                        borderRadius: '2px',
                        transition: 'background 0.4s',
                      }}
                    />
                  )}

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: isMobile ? '16px' : '24px',
                      minWidth: 0,
                    }}
                  >
                    <span
                      style={{
                        fontSize: '11px',
                        fontFamily: 'monospace',
                        color: isActive
                          ? service.accent
                          : 'rgba(255,255,255,0.24)',
                        transition: 'color 0.4s',
                        minWidth: '24px',
                      }}
                    >
                      {service.tag}
                    </span>

                    <div style={{ textAlign: 'left', minWidth: 0 }}>
                      <div
                        style={{
                          fontSize: isMobile
                            ? 'clamp(28px, 8vw, 42px)'
                            : 'clamp(24px, 4vw, 70px)',
                          fontWeight: 800,
                          letterSpacing: '-1px',
                          color: isActive
                            ? '#ffffff'
                            : 'rgba(255,255,255,0.35)',
                          transition: 'color 0.4s ease, transform 0.3s ease',
                          transform:
                            isActive && !isMobile
                              ? 'translateX(8px)'
                              : 'translateX(0)',
                          lineHeight: 1.05,
                        }}
                      >
                        {service.title}
                      </div>

                      <div
                        style={{
                          fontSize: isMobile ? '14px' : '13px',
                          color: isActive ? service.accent : 'transparent',
                          transition: 'color 0.4s ease',
                          marginTop: '7px',
                          fontWeight: 500,
                          letterSpacing: '0.2px',
                          maxWidth: isMobile ? '240px' : 'none',
                          lineHeight: 1.35,
                        }}
                      >
                        {service.subtitle}
                      </div>
                    </div>
                  </div>

                  <svg
                    width={isMobile ? '22' : '24'}
                    height={isMobile ? '22' : '24'}
                    viewBox="0 0 24 24"
                    fill="none"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive
                        ? 'translateX(0) rotate(0deg)'
                        : 'translateX(-8px) rotate(-45deg)',
                      transition: 'all 0.35s ease',
                      color: service.accent,
                      flexShrink: 0,
                    }}
                  >
                    <path
                      d="M5 12H19M12 5L19 12L12 19"
                      stroke={service.accent}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            );
          })}

          <div
            style={{
              height: '1px',
              background: 'rgba(255,255,255,0.07)',
            }}
          />
        </div>

        {/* Preview panel */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            maxWidth: isMobile ? '420px' : 'none',
            margin: isMobile ? '0 auto' : 0,
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: isMobile ? '-12px' : '-20px',
              borderRadius: isMobile ? '22px' : '28px',
              background: `radial-gradient(ellipse at center, ${services[active].accent}20 0%, transparent 70%)`,
              transition: 'background 0.6s ease',
            }}
          />

          <div
            style={{
              width: '100%',
              aspectRatio: '340 / 260',
              borderRadius: isMobile ? '18px' : '20px',
              border: `1px solid ${services[active].accent}30`,
              background: '#0f0e1a',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: `0 0 ${
                isMobile ? '38px' : '60px'
              } ${services[active].accent}20, inset 0 1px 0 rgba(255,255,255,0.05)`,
              opacity: animating ? 0 : 1,
              transform: animating
                ? 'scale(0.97) translateY(6px)'
                : 'scale(1) translateY(0)',
              transitionProperty: 'border-color, box-shadow, opacity, transform',
              transitionDuration: '0.4s, 0.4s, 0.2s, 0.2s',
            }}
          >
            <PreviewComponent />
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: isMobile ? '-14px' : '-18px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: services[active].accent,
              color: '#0f0e1a',
              fontSize: isMobile ? '10px' : '11px',
              fontWeight: 700,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              padding: isMobile ? '6px 13px' : '6px 16px',
              borderRadius: '20px',
              whiteSpace: 'nowrap',
              transition: 'background 0.4s ease',
            }}
          >
            {services[active].title}
          </div>
        </div>
      </div>
    </section>
  );
}
