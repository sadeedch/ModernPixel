'use client'

import { useRef, useState, useEffect, useCallback } from 'react';

const S = {
  section: { padding: '120px 0 140px', background: 'var(--dark,#17151f)', overflow: 'hidden' },
  header: {
    width: 'min(1320px,calc(100% - 48px))', margin: '0 auto 72px',
    display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '24px',
  },
  kicker: {
    display: 'inline-flex', alignItems: 'center', gap: '10px',
    padding: '8px 14px', border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: '999px', color: '#bba8ff', fontSize: '11px',
    fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '18px',
  },
  dot: { width: '6px', height: '6px', borderRadius: '50%', background: '#6e52bd', display: 'inline-block' },
  title: {
    margin: 0, color: '#fff', fontSize: 'clamp(64px,7.5vw,112px)', fontWeight: 850,
    letterSpacing: '-0.085em', lineHeight: 0.96, fontFamily: 'Manrope,sans-serif',
  },
  navRow: { display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0, paddingBottom: '16px' },
  navBtn: {
    width: '52px', height: '52px', display: 'grid', placeItems: 'center',
    borderRadius: '50%', border: '1px solid rgba(255,255,255,0.14)',
    background: 'rgba(255,255,255,0.06)', color: 'white', fontSize: '22px',
    cursor: 'pointer', transition: '0.22s ease', userSelect: 'none',
  },
  navBtnActive: { background: '#6e52bd', border: '1px solid #6e52bd' },
  track: {
    display: 'flex', gap: '28px', userSelect: 'none', WebkitUserSelect: 'none',
    paddingLeft: 'max(40px,calc((100vw - 1320px)/2 + 24px))',
    paddingRight: '48px', paddingBottom: '20px',
    overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none',
    WebkitOverflowScrolling: 'touch',
  },
  card: {
    flexShrink: 0, width: 'min(820px,84vw)', minHeight: '520px',
    borderRadius: '32px', border: '1px solid rgba(255,255,255,0.08)',
    background: 'linear-gradient(145deg,#1e1c2a 0%,#17151f 100%)',
    boxShadow: '0 40px 100px rgba(0,0,0,0.36)', overflow: 'hidden',
    display: 'grid', gridTemplateColumns: '1.15fr 0.85fr',
    transition: 'transform 0.35s cubic-bezier(.16,1,.3,1),box-shadow 0.35s ease',
  },
  mockupSide: { position: 'relative', overflow: 'hidden', borderRadius: '32px 0 0 32px' },
  browser: {
    position: 'absolute', top: '28px', left: '20px', right: '-20px', bottom: '-20px',
    borderRadius: '12px 12px 0 0', background: '#0f0e18',
    boxShadow: '0 28px 80px rgba(0,0,0,0.55)', overflow: 'hidden',
    display: 'flex', flexDirection: 'column',
  },
  browserChrome: {
    flexShrink: 0, background: '#1a1826', borderBottom: '1px solid rgba(255,255,255,0.07)',
    padding: '9px 12px', display: 'flex', alignItems: 'center', gap: '8px',
  },
  trafficLights: { display: 'flex', gap: '5px', flexShrink: 0 },
  tl: (c) => ({ width: '9px', height: '9px', borderRadius: '50%', background: c }),
  urlBar: {
    flex: 1, height: '22px', background: 'rgba(255,255,255,0.07)', borderRadius: '6px',
    display: 'flex', alignItems: 'center', padding: '0 8px', gap: '5px',
    fontSize: '9px', color: 'rgba(255,255,255,0.38)', fontWeight: 700,
    overflow: 'hidden', whiteSpace: 'nowrap',
  },
  browserScreen: { flex: 1, overflow: 'hidden', position: 'relative' },
  infoSide: {
    padding: '44px 36px', display: 'flex', flexDirection: 'column',
    borderLeft: '1px solid rgba(255,255,255,0.06)',
  },
  num: {
    color: 'rgba(255,255,255,0.22)', fontSize: '11px', fontWeight: 900,
    letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px',
    display: 'flex', alignItems: 'center', gap: '8px',
  },
  numDot: { width: '6px', height: '6px', borderRadius: '50%', background: '#6e52bd', flexShrink: 0 },
  cardTitle: {
    margin: '0 0 12px', color: '#fff', fontSize: 'clamp(24px,2.6vw,34px)', fontWeight: 850,
    letterSpacing: '-0.06em', lineHeight: 1.1, fontFamily: 'Manrope,sans-serif',
  },
  cardDesc: { margin: '0 0 28px', color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontWeight: 700, lineHeight: 1.65 },
  servicesLabel: {
    fontSize: '10px', fontWeight: 900, color: 'rgba(255,255,255,0.28)',
    letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px',
  },
  chips: { display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: 'auto' },
  chip: {
    padding: '6px 10px', border: '1px solid rgba(110,82,189,0.35)',
    borderRadius: '999px', color: '#bba8ff', fontSize: '11px', fontWeight: 800,
    background: 'rgba(110,82,189,0.1)',
  },
  metricsRow: {
    marginTop: '32px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.07)',
    display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px',
  },
  metricVal: {
    color: '#fff', fontSize: 'clamp(26px,2.5vw,34px)', fontWeight: 900,
    letterSpacing: '-0.06em', lineHeight: 1, display: 'block', fontFamily: 'Manrope,sans-serif',
  },
  metricLabel: { color: 'rgba(255,255,255,0.38)', fontSize: '11px', fontWeight: 750, marginTop: '5px', display: 'block' },
  dotsRow: {
    width: 'min(1320px,calc(100% - 48px))', margin: '44px auto 0',
    display: 'flex', alignItems: 'center', gap: '8px',
  },
};

// ── Screen 1: Elevate Electrical (dark premium branding site) ──────────────
function BrandingScreen() {
  // Trade colour palette: dark charcoal bg, orange (#f97316) + amber (#fbbf24) accents
  return (
    <svg viewBox="0 0 600 460" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
      <rect width="600" height="460" fill="#0f0d0a" />
      {/* Nav */}
      <rect width="600" height="48" fill="#18140e" />
      {/* Logo mark — bolt shape via orange square */}
      <rect x="18" y="13" width="22" height="22" rx="5" fill="#f97316" />
      <text x="21" y="29" fontFamily="system-ui,sans-serif" fontSize="13" fontWeight="900" fill="#fff">⚡</text>
      <text x="46" y="28" fontFamily="system-ui,sans-serif" fontSize="11.5" fontWeight="800" fill="#fff">Elevate <tspan fill="#f97316">Electrical</tspan></text>
      {['Services','Gallery','About','Contact'].map((l,i) => (
        <text key={i} x={210+i*72} y="28" fontFamily="system-ui,sans-serif" fontSize="10" fontWeight="600" fill="rgba(255,255,255,0.42)">{l}</text>
      ))}
      {/* CTA — orange */}
      <rect x="488" y="12" width="96" height="24" rx="12" fill="#f97316" />
      <text x="536" y="28" fontFamily="system-ui,sans-serif" fontSize="9.5" fontWeight="800" fill="#fff" textAnchor="middle">Get a Quote</text>

      {/* Hero bg — warm dark charcoal with orange glow */}
      <rect y="48" width="600" height="192" fill="#0f0d0a" />
      <ellipse cx="430" cy="110" rx="190" ry="110" fill="rgba(249,115,22,0.12)" />
      <ellipse cx="500" cy="70" rx="110" ry="70" fill="rgba(251,191,36,0.07)" />

      {/* Kicker pill */}
      <rect x="18" y="62" width="155" height="16" rx="8" fill="rgba(249,115,22,0.15)" />
      <rect x="26" y="68" width="6" height="6" rx="3" fill="#f97316" />
      <text x="38" y="73" fontFamily="system-ui,sans-serif" fontSize="7.5" fontWeight="700" letterSpacing="1" fill="#fbbf24">LICENSED · INSURED · BRISBANE</text>

      {/* H1 */}
      <text x="18" y="100" fontFamily="system-ui,sans-serif" fontSize="26" fontWeight="800" fill="#fff">Brisbane's Trusted</text>
      <text x="18" y="130" fontFamily="system-ui,sans-serif" fontSize="26" fontWeight="800" fill="#f97316">Electrical Specialists</text>
      <text x="18" y="150" fontFamily="system-ui,sans-serif" fontSize="9.5" fill="rgba(255,255,255,0.42)">Residential · Commercial · Solar · Switchboards</text>
      <text x="18" y="165" fontFamily="system-ui,sans-serif" fontSize="9.5" fill="rgba(255,255,255,0.28)">Servicing Brisbane &amp; surrounds since 2011.</text>

      {/* Buttons */}
      <rect x="18" y="178" width="106" height="26" rx="13" fill="#f97316" />
      <text x="71" y="195" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="800" fill="#fff" textAnchor="middle">📞  Call Now</text>
      <rect x="134" y="178" width="96" height="26" rx="13" fill="rgba(255,255,255,0.07)" />
      <text x="182" y="195" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="700" fill="rgba(255,255,255,0.62)" textAnchor="middle">View Our Work</text>

      {/* Trust bar — warm dark */}
      <rect y="240" width="600" height="44" fill="#1c1610" />
      {[{icon:'⚡',label:'Licensed Electrician'},{icon:'🛡',label:'Fully Insured'},{icon:'⭐',label:'5.0 Google Rating'},{icon:'🕐',label:'24/7 Emergency'}].map((t,i) => (
        <g key={i}>
          <text x={24+i*146} y="267" fontFamily="system-ui,sans-serif" fontSize="11">{t.icon}</text>
          <text x={42+i*146} y="267" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="600" fill="rgba(255,255,255,0.58)">{t.label}</text>
        </g>
      ))}

      {/* Section label */}
      <text x="18" y="306" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="700" letterSpacing="1.5" fill="rgba(255,255,255,0.26)">WHAT WE DO</text>

      {/* Service cards — dark warm bg, orange border + accent */}
      {[
        {title:'Residential Wiring',d1:'New builds, renos,',d2:'rewires & switchboards',icon:'🏠'},
        {title:'Commercial',d1:'Shops, offices &',d2:'industrial fit-outs',icon:'🏢'},
        {title:'Solar & Battery',d1:'SunPower installs,',d2:'battery storage systems',icon:'☀️'},
      ].map((c,i) => (
        <g key={i}>
          <rect x={14+i*196} y="316" width="180" height="104" rx="10" fill="#1c1610" />
          <rect x={14+i*196} y="316" width="180" height="104" rx="10" fill="none" stroke="rgba(249,115,22,0.25)" strokeWidth="1" />
          <text x={28+i*196} y="338" fontSize="17">{c.icon}</text>
          <text x={28+i*196} y="356" fontFamily="system-ui,sans-serif" fontSize="10.5" fontWeight="700" fill="#fff">{c.title}</text>
          <text x={28+i*196} y="371" fontFamily="system-ui,sans-serif" fontSize="8.5" fill="rgba(255,255,255,0.36)">{c.d1}</text>
          <text x={28+i*196} y="383" fontFamily="system-ui,sans-serif" fontSize="8.5" fill="rgba(255,255,255,0.36)">{c.d2}</text>
          <text x={28+i*196} y="408" fontFamily="system-ui,sans-serif" fontSize="8.5" fontWeight="700" fill="#f97316">Learn more →</text>
        </g>
      ))}

      {/* Review strip */}
      <rect y="432" width="600" height="28" fill="#18140e" />
      <text x="18" y="450" fontSize="9.5">⭐⭐⭐⭐⭐</text>
      <text x="84" y="450" fontFamily="system-ui,sans-serif" fontSize="8.5" fill="rgba(255,255,255,0.42)">"Fast, professional and fairly priced — will use again."  — Sarah M., Paddington</text>
    </svg>
  );
}

// ── Screen 2: ClarityBookings (clinic booking portal dashboard) ────────────
function PortalScreen() {
  const appts = [
    {name:'Emma Thornton',type:'Initial Consult',time:'9:00 AM',status:'Confirmed',sc:'#34d399'},
    {name:'James Liu',type:'Follow-up',time:'10:15 AM',status:'Pending',sc:'#f7b928'},
    {name:'Priya Nair',type:'Physio Session',time:'11:30 AM',status:'Confirmed',sc:'#34d399'},
    {name:'Daniel Carr',type:'Remedial Massage',time:'1:00 PM',status:'Confirmed',sc:'#34d399'},
    {name:'Sophie Walsh',type:'Initial Consult',time:'2:30 PM',status:'Cancelled',sc:'#f87171'},
  ];
  return (
    <svg viewBox="0 0 600 460" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
      <rect width="600" height="460" fill="#f4f3fb" />
      {/* Sidebar */}
      <rect width="148" height="460" fill="#fff" />
      <line x1="148" y1="0" x2="148" y2="460" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
      <rect x="14" y="15" width="14" height="14" rx="4" fill="#6e52bd" />
      <text x="34" y="26" fontFamily="system-ui,sans-serif" fontSize="11" fontWeight="800" fill="#17151f">Clarity</text>
      <text x="34" y="36" fontFamily="system-ui,sans-serif" fontSize="7.5" fill="rgba(53,55,67,0.4)">Booking Portal</text>
      {['Dashboard','Bookings','Clients','Invoices','Messages','Reports','Settings'].map((label,i) => (
        <g key={i}>
          <rect x="10" y={54+i*38} width="128" height="28" rx="7" fill={i===0?'rgba(110,82,189,0.12)':'transparent'} />
          <rect x="18" y={62+i*38} width="10" height="10" rx="3" fill={i===0?'#6e52bd':'rgba(53,55,67,0.15)'} />
          <text x="34" y={71+i*38} fontFamily="system-ui,sans-serif" fontSize="10"
            fontWeight={i===0?'700':'500'} fill={i===0?'#6e52bd':'rgba(53,55,67,0.52)'}>{label}</text>
          {label==='Messages' && <>
            <rect x="118" y={60+i*38} width="14" height="14" rx="7" fill="#6e52bd" />
            <text x="125" y={71+i*38} fontFamily="system-ui,sans-serif" fontSize="8" fontWeight="800" fill="#fff" textAnchor="middle">3</text>
          </>}
        </g>
      ))}
      <rect x="14" y="424" width="28" height="28" rx="14" fill="rgba(110,82,189,0.18)" />
      <text x="28" y="442" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="700" fill="#6e52bd" textAnchor="middle">JK</text>
      <text x="48" y="436" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="700" fill="#17151f">Dr J. Kim</text>
      <text x="48" y="447" fontFamily="system-ui,sans-serif" fontSize="8" fill="rgba(53,55,67,0.4)">Admin</text>
      {/* Top bar */}
      <rect x="148" y="0" width="452" height="46" fill="#fff" />
      <line x1="148" y1="45" x2="600" y2="45" stroke="rgba(0,0,0,0.07)" strokeWidth="1" />
      <text x="164" y="29" fontFamily="system-ui,sans-serif" fontSize="13" fontWeight="700" fill="#17151f">Good morning, Dr Kim 👋</text>
      <rect x="378" y="12" width="142" height="22" rx="11" fill="#f0eef8" />
      <text x="392" y="27" fontFamily="system-ui,sans-serif" fontSize="9" fill="rgba(53,55,67,0.4)">🔍  Search patients...</text>
      <rect x="532" y="12" width="22" height="22" rx="11" fill="#f0eef8" />
      <text x="543" y="27" fontSize="10" textAnchor="middle">🔔</text>
      {/* KPI cards */}
      {[
        {label:"Today's Bookings",value:'12',sub:'↑ 3 from yesterday',ac:'#6e52bd',bg:'rgba(110,82,189,0.08)'},
        {label:"Today's Revenue",value:'$4,840',sub:'↑ 18% this week',ac:'#34d399',bg:'rgba(52,211,153,0.08)'},
        {label:'New Patients',value:'3',sub:'Added this week',ac:'#f7b928',bg:'rgba(247,185,40,0.08)'},
      ].map((k,i) => (
        <g key={i}>
          <rect x={160+i*148} y="56" width="136" height="72" rx="10" fill="#fff" />
          <rect x={160+i*148} y="56" width="136" height="72" rx="10" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
          <rect x={166+i*148} y="62" width="28" height="28" rx="7" fill={k.bg} />
          <rect x={172+i*148} y="68" width="16" height="16" rx="4" fill={k.ac} opacity="0.7" />
          <text x={166+i*148} y="104" fontFamily="system-ui,sans-serif" fontSize="18" fontWeight="800" fill="#17151f">{k.value}</text>
          <text x={166+i*148} y="117" fontFamily="system-ui,sans-serif" fontSize="8" fontWeight="600" fill="rgba(53,55,67,0.42)">{k.label}</text>
          <text x={166+i*148} y="128" fontFamily="system-ui,sans-serif" fontSize="7.5" fill={k.ac}>{k.sub}</text>
        </g>
      ))}
      {/* Table */}
      <text x="160" y="152" fontFamily="system-ui,sans-serif" fontSize="11" fontWeight="700" fill="#17151f">Today's Appointments</text>
      <text x="476" y="152" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="700" fill="#6e52bd">View all →</text>
      <rect x="158" y="158" width="432" height="22" rx="6" fill="#f0eef8" />
      {['Patient','Type','Time','Status'].map((h,i) => (
        <text key={i} x={[168,275,368,442][i]} y="173" fontFamily="system-ui,sans-serif" fontSize="8" fontWeight="700" fill="rgba(110,82,189,0.65)" letterSpacing="0.5">{h.toUpperCase()}</text>
      ))}
      {appts.map((row,i) => (
        <g key={i}>
          <rect x="158" y={183+i*32} width="432" height="28" rx="6" fill={i%2===0?'#fff':'#faf9fe'} />
          <rect x="166" y={188+i*32} width="18" height="18" rx="9" fill="rgba(110,82,189,0.12)" />
          <text x="175" y={200+i*32} fontFamily="system-ui,sans-serif" fontSize="8" fontWeight="700" fill="#6e52bd" textAnchor="middle">{row.name[0]}</text>
          <text x="190" y={200+i*32} fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="600" fill="#17151f">{row.name}</text>
          <text x="275" y={200+i*32} fontFamily="system-ui,sans-serif" fontSize="9" fill="rgba(53,55,67,0.52)">{row.type}</text>
          <text x="368" y={200+i*32} fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="600" fill="#17151f">{row.time}</text>
          <rect x="435" y={188+i*32} width={row.status==='Confirmed'?56:row.status==='Pending'?46:52} height="16" rx="8" fill={`${row.sc}22`} />
          <text x={row.status==='Confirmed'?463:row.status==='Pending'?458:461} y={200+i*32}
            fontFamily="system-ui,sans-serif" fontSize="8" fontWeight="700" fill={row.sc} textAnchor="middle">{row.status}</text>
        </g>
      ))}
      {/* Revenue chart */}
      <rect x="158" y="352" width="208" height="92" rx="10" fill="#fff" />
      <rect x="158" y="352" width="208" height="92" rx="10" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
      <text x="170" y="369" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="700" fill="#17151f">Weekly Revenue</text>
      <polyline points="170,425 198,415 226,420 254,405 282,411 310,396 338,401"
        fill="none" stroke="#6e52bd" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <polygon points="170,430 198,415 226,420 254,405 282,411 310,396 338,401 338,430"
        fill="rgba(110,82,189,0.1)" />
      {['M','T','W','T','F','S','S'].map((d,i) => (
        <text key={i} x={170+i*28} y="440" fontFamily="system-ui,sans-serif" fontSize="7.5" fill="rgba(53,55,67,0.32)" textAnchor="middle">{d}</text>
      ))}
      {/* Next slots */}
      <rect x="378" y="352" width="212" height="92" rx="10" fill="#fff" />
      <rect x="378" y="352" width="212" height="92" rx="10" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
      <text x="390" y="369" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="700" fill="#17151f">Next Available Slots</text>
      {['3:30 PM Today','9:00 AM Tomorrow','11:00 AM Thu'].map((slot,i) => (
        <g key={i}>
          <rect x="390" y={377+i*22} width="100" height="16" rx="8" fill="rgba(110,82,189,0.08)" />
          <text x="440" y={389+i*22} fontFamily="system-ui,sans-serif" fontSize="8" fontWeight="600" fill="#6e52bd" textAnchor="middle">{slot}</text>
          <rect x="498" y={377+i*22} width="48" height="16" rx="8" fill="#6e52bd" />
          <text x="522" y={389+i*22} fontFamily="system-ui,sans-serif" fontSize="8" fontWeight="700" fill="#fff" textAnchor="middle">Book</text>
        </g>
      ))}
    </svg>
  );
}

// ── Screen 3: ProClean Brisbane (local SEO landing page) ───────────────────
function LandingScreen() {
  const suburbs = ['New Farm','Paddington','Ascot','Hamilton','Bulimba','West End'];
  const suburbW = [54,66,46,62,54,58];
  return (
    <svg viewBox="0 0 600 460" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
      <rect width="600" height="460" fill="#fff" />
      {/* Nav */}
      <rect width="600" height="46" fill="#fff" />
      <line x1="0" y1="45" x2="600" y2="45" stroke="rgba(0,0,0,0.07)" strokeWidth="1" />
      <rect x="16" y="13" width="14" height="14" rx="4" fill="#059669" />
      <text x="36" y="26" fontFamily="system-ui,sans-serif" fontSize="11.5" fontWeight="800" fill="#0a2e1e">ProClean</text>
      {['Services','Areas','Reviews','Pricing'].map((l,i) => (
        <text key={i} x={198+i*72} y="27" fontFamily="system-ui,sans-serif" fontSize="9.5" fontWeight="600" fill="rgba(10,46,30,0.42)">{l}</text>
      ))}
      <text x="418" y="27" fontFamily="system-ui,sans-serif" fontSize="9" fill="rgba(10,46,30,0.48)">📞  0450 237 005</text>
      <rect x="504" y="13" width="82" height="20" rx="10" fill="#059669" />
      <text x="545" y="27" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="700" fill="#fff" textAnchor="middle">Free Quote</text>
      {/* Hero */}
      <rect y="46" width="600" height="190" fill="#f0fdf4" />
      <ellipse cx="440" cy="130" rx="160" ry="110" fill="rgba(5,150,105,0.08)" />
      <text x="16" y="74" fontSize="12">⭐⭐⭐⭐⭐</text>
      <text x="88" y="73" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="700" fill="rgba(10,46,30,0.48)">5.0 · 142 Google Reviews</text>
      <text x="16" y="100" fontFamily="system-ui,sans-serif" fontSize="23" fontWeight="800" fill="#0a2e1e">Brisbane's #1 Rated</text>
      <text x="16" y="126" fontFamily="system-ui,sans-serif" fontSize="23" fontWeight="800" fill="#059669">Cleaning Service</text>
      <text x="16" y="148" fontFamily="system-ui,sans-serif" fontSize="9.5" fill="rgba(10,46,30,0.48)">Same-day availability · Eco-friendly products · Fully insured</text>
      <text x="16" y="162" fontFamily="system-ui,sans-serif" fontSize="9.5" fill="rgba(10,46,30,0.38)">Trusted by 800+ Brisbane households since 2017.</text>
      <rect x="16" y="172" width="118" height="26" rx="13" fill="#059669" />
      <text x="75" y="189" fontFamily="system-ui,sans-serif" fontSize="9.5" fontWeight="700" fill="#fff" textAnchor="middle">Book Online Now</text>
      <rect x="144" y="172" width="110" height="26" rx="13" fill="rgba(5,150,105,0.1)" />
      <text x="199" y="189" fontFamily="system-ui,sans-serif" fontSize="9.5" fontWeight="700" fill="#059669" textAnchor="middle">View Pricing →</text>
      {/* Suburb chips */}
      <rect y="236" width="600" height="44" fill="#fff" />
      <text x="16" y="252" fontFamily="system-ui,sans-serif" fontSize="8" fontWeight="700" letterSpacing="1.2" fill="rgba(10,46,30,0.3)">WE SERVICE</text>
      {suburbs.map((s,i) => {
        const x = suburbW.slice(0,i).reduce((a,w) => a+w+6, 16);
        return (
          <g key={i}>
            <rect x={x} y="256" width={suburbW[i]} height="16" rx="8" fill="rgba(5,150,105,0.1)" />
            <text x={x+suburbW[i]/2} y="268" fontFamily="system-ui,sans-serif" fontSize="7.5" fontWeight="700" fill="#059669" textAnchor="middle">{s}</text>
          </g>
        );
      })}
      {/* Services */}
      <rect y="280" width="600" height="120" fill="#f9fafb" />
      <text x="16" y="302" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="700" letterSpacing="1.2" fill="rgba(10,46,30,0.3)">SERVICES</text>
      {[
        {title:'House Cleaning',d1:'Weekly, fortnightly',d2:'or one-off cleans',icon:'🏠',pop:true},
        {title:'End of Lease',d1:'Bond back guarantee',d2:'included in price',icon:'🔑',pop:false},
        {title:'Commercial',d1:'Offices, gyms &',d2:'retail spaces',icon:'🏢',pop:false},
      ].map((c,i) => (
        <g key={i}>
          <rect x={14+i*196} y="310" width="180" height="84" rx="10" fill="#fff" />
          <rect x={14+i*196} y="310" width="180" height="84" rx="10" fill="none" stroke="rgba(5,150,105,0.15)" strokeWidth="1" />
          {c.pop && <>
            <rect x={134+i*196} y="314" width="52" height="14" rx="7" fill="#059669" />
            <text x={160+i*196} y="325" fontFamily="system-ui,sans-serif" fontSize="7.5" fontWeight="700" fill="#fff" textAnchor="middle">POPULAR</text>
          </>}
          <text x={26+i*196} y="332" fontSize="15">{c.icon}</text>
          <text x={26+i*196} y="350" fontFamily="system-ui,sans-serif" fontSize="10.5" fontWeight="700" fill="#0a2e1e">{c.title}</text>
          <text x={26+i*196} y="364" fontFamily="system-ui,sans-serif" fontSize="8.5" fill="rgba(10,46,30,0.42)">{c.d1}</text>
          <text x={26+i*196} y="376" fontFamily="system-ui,sans-serif" fontSize="8.5" fill="rgba(10,46,30,0.42)">{c.d2}</text>
          <text x={26+i*196} y="388" fontFamily="system-ui,sans-serif" fontSize="8.5" fontWeight="700" fill="#059669">From $120 →</text>
        </g>
      ))}
      {/* Review bar */}
      <rect y="400" width="600" height="60" fill="#fff" />
      <line x1="0" y1="400" x2="600" y2="400" stroke="rgba(0,0,0,0.07)" strokeWidth="1" />
      <rect x="16" y="412" width="36" height="36" rx="18" fill="rgba(5,150,105,0.12)" />
      <text x="34" y="434" fontSize="15" textAnchor="middle">👩</text>
      <text x="59" y="425" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="700" fill="#0a2e1e">Michelle T.</text>
      <text x="117" y="425" fontFamily="system-ui,sans-serif" fontSize="9" fill="#059669">⭐⭐⭐⭐⭐</text>
      <text x="59" y="440" fontFamily="system-ui,sans-serif" fontSize="8.5" fill="rgba(10,46,30,0.48)">"Absolutely spotless. Team was on time, friendly and thorough. Highly recommend!"</text>
      <rect x="470" y="410" width="116" height="28" rx="14" fill="#059669" />
      <text x="528" y="428" fontFamily="system-ui,sans-serif" fontSize="9.5" fontWeight="700" fill="#fff" textAnchor="middle">Get a Free Quote</text>
    </svg>
  );
}

// ── Screen 4: Redline Auto — light booking/pricing page (totally different layout) ──
function MechanicScreen() {
  const services = [
    { name: 'Log Book Service',    price: '$189', time: '2–3 hrs',  popular: true  },
    { name: 'Brake Replacement',   price: '$220', time: '1–2 hrs',  popular: false },
    { name: 'Engine Diagnostics',  price: '$99',  time: '45 min',   popular: false },
    { name: 'Tyres & Alignment',   price: '$149', time: '1 hr',     popular: false },
    { name: 'Air Con Regas',       price: '$120', time: '30 min',   popular: false },
  ];
  return (
    <svg viewBox="0 0 600 460" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>

      {/* ── Full white background ── */}
      <rect width="600" height="460" fill="#f8f8f8" />

      {/* ══ LEFT COLUMN — red sidebar (160px wide) ══ */}
      <rect width="160" height="460" fill="#d26666" />

      {/* Sidebar logo */}
      <rect x="16" y="18" width="28" height="28" rx="8" fill="rgba(255,255,255,0.18)" />
      <text x="30" y="36" fontFamily="system-ui,sans-serif" fontSize="16" textAnchor="middle">🔧</text>
      <text x="52" y="29" fontFamily="system-ui,sans-serif" fontSize="11" fontWeight="800" fill="#fff">Redline</text>
      <text x="52" y="41" fontFamily="system-ui,sans-serif" fontSize="11" fontWeight="800" fill="rgba(255,255,255,0.7)">Auto</text>

      {/* Sidebar divider */}
      <line x1="16" y1="58" x2="144" y2="58" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />

      {/* Sidebar nav */}
      {[
        { label: 'Book a Service', active: true  },
        { label: 'Our Services',   active: false },
        { label: 'Pricing',        active: false },
        { label: 'About Us',       active: false },
        { label: 'Contact',        active: false },
      ].map((item, i) => (
        <g key={i}>
          <rect x="10" y={68 + i * 36} width="140" height="28" rx="7"
            fill={item.active ? 'rgba(255,255,255,0.2)' : 'transparent'} />
          <rect x="18" y={77 + i * 36} width="8" height="10" rx="2"
            fill={item.active ? '#fff' : 'rgba(255,255,255,0.3)'} />
          <text x="32" y={86 + i * 36} fontFamily="system-ui,sans-serif" fontSize="10"
            fontWeight={item.active ? '700' : '500'}
            fill={item.active ? '#fff' : 'rgba(255,255,255,0.6)'}>{item.label}</text>
        </g>
      ))}

      {/* Sidebar trust badges */}
      <line x1="16" y1="256" x2="144" y2="256" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
      {[
        { icon: '✅', label: '12M Warranty' },
        { icon: '🏆', label: '4.9 ★ Google' },
        { icon: '📍', label: 'Fortitude Valley' },
        { icon: '📞', label: '07 3123 4567' },
      ].map((b, i) => (
        <g key={i}>
          <text x="18" y={276 + i * 28} fontSize="10">{b.icon}</text>
          <text x="34" y={276 + i * 28} fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="600" fill="rgba(255,255,255,0.75)">{b.label}</text>
        </g>
      ))}

      {/* Sidebar CTA */}
      <rect x="14" y="396" width="132" height="36" rx="10" fill="rgba(0,0,0,0.22)" />
      <text x="80" y="417" fontFamily="system-ui,sans-serif" fontSize="10" fontWeight="800" fill="#fff" textAnchor="middle">📞 Call Now</text>
      <text x="80" y="428" fontFamily="system-ui,sans-serif" fontSize="8" fill="rgba(255,255,255,0.6)" textAnchor="middle">07 3123 4567</text>

      {/* ══ RIGHT AREA — main content ══ */}

      {/* ── Top bar ── */}
      <rect x="160" y="0" width="440" height="48" fill="#fff" />
      <line x1="160" y1="47" x2="600" y2="47" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
      <text x="176" y="20" fontFamily="system-ui,sans-serif" fontSize="13" fontWeight="800" fill="#1a1a1a">Book a Service</text>
      <text x="176" y="35" fontFamily="system-ui,sans-serif" fontSize="9" fill="rgba(0,0,0,0.4)">Select your vehicle and choose a service below</text>
      {/* Step indicator */}
      {['Vehicle', 'Service', 'Time', 'Confirm'].map((step, i) => (
        <g key={i}>
          <rect x={390 + i * 50} y="16" width="36" height="18" rx="9"
            fill={i === 0 ? '#dc2626' : i === 1 ? 'rgba(220,38,38,0.12)' : '#f3f4f6'} />
          <text x={408 + i * 50} y="29" fontFamily="system-ui,sans-serif" fontSize="7.5"
            fontWeight="700" textAnchor="middle"
            fill={i === 0 ? '#fff' : i === 1 ? '#dc2626' : 'rgba(0,0,0,0.3)'}>{step}</text>
        </g>
      ))}

      {/* ── Vehicle selector ── */}
      <rect x="160" y="48" width="440" height="72" fill="#fff" />
      <line x1="160" y1="119" x2="600" y2="119" stroke="rgba(0,0,0,0.07)" strokeWidth="1" />
      <text x="176" y="66" fontFamily="system-ui,sans-serif" fontSize="10" fontWeight="700" fill="#1a1a1a">Your Vehicle</text>
      {/* Three dropdowns */}
      {[
        { label: 'Make', value: 'Toyota' },
        { label: 'Model', value: 'Camry' },
        { label: 'Year', value: '2019' },
      ].map((d, i) => (
        <g key={i}>
          <rect x={176 + i * 136} y="72" width="122" height="36" rx="8" fill="#f9fafb" />
          <rect x={176 + i * 136} y="72" width="122" height="36" rx="8" fill="none"
            stroke={i === 0 ? '#dc2626' : 'rgba(0,0,0,0.1)'} strokeWidth={i === 0 ? '1.5' : '1'} />
          <text x={184 + i * 136} y="86" fontFamily="system-ui,sans-serif" fontSize="7.5" fill="rgba(0,0,0,0.38)">{d.label}</text>
          <text x={184 + i * 136} y="100" fontFamily="system-ui,sans-serif" fontSize="10" fontWeight="700" fill="#1a1a1a">{d.value}</text>
          <text x={284 + i * 136} y="95" fontFamily="system-ui,sans-serif" fontSize="10" fill="rgba(0,0,0,0.3)" textAnchor="middle">⌄</text>
        </g>
      ))}

      {/* ── Service list ── */}
      <rect x="160" y="120" width="268" height="340" fill="#fff" />
      <text x="176" y="142" fontFamily="system-ui,sans-serif" fontSize="10" fontWeight="700" fill="#1a1a1a">Select a Service</text>
      <text x="176" y="154" fontFamily="system-ui,sans-serif" fontSize="8" fill="rgba(0,0,0,0.35)">Prices shown for Toyota Camry 2019</text>

      {services.map((svc, i) => (
        <g key={i}>
          <rect x="170" y={162 + i * 52} width="250" height="44" rx="8"
            fill={i === 0 ? '#fff5f5' : '#fff'} />
          <rect x="170" y={162 + i * 52} width="250" height="44" rx="8" fill="none"
            stroke={i === 0 ? '#dc2626' : 'rgba(0,0,0,0.08)'} strokeWidth={i === 0 ? '1.5' : '1'} />
          {/* Radio dot */}
          <circle cx="186" cy={184 + i * 52} r="6" fill="none" stroke={i === 0 ? '#dc2626' : 'rgba(0,0,0,0.2)'} strokeWidth="1.5" />
          {i === 0 && <circle cx="186" cy="184" r="3.5" fill="#dc2626" />}
          <text x="198" y={180 + i * 52} fontFamily="system-ui,sans-serif" fontSize="10" fontWeight={i === 0 ? '700' : '600'} fill="#1a1a1a">{svc.name}</text>
          <text x="198" y={193 + i * 52} fontFamily="system-ui,sans-serif" fontSize="8" fill="rgba(0,0,0,0.38)">Est. {svc.time}</text>
          {svc.popular && (
            <>
              <rect x="282" y={164 + i * 52} width="42" height="13" rx="6" fill="#dc2626" />
              <text x="303" y={174 + i * 52} fontFamily="system-ui,sans-serif" fontSize="7" fontWeight="700" fill="#fff" textAnchor="middle">POPULAR</text>
            </>
          )}
          <text x="400" y={186 + i * 52} fontFamily="system-ui,sans-serif" fontSize="12" fontWeight="800"
            fill={i === 0 ? '#dc2626' : '#1a1a1a'} textAnchor="end">{svc.price}</text>
        </g>
      ))}

      {/* ── Quote panel (right column) ── */}
      <rect x="428" y="120" width="172" height="340" fill="#f9fafb" />
      <line x1="428" y1="120" x2="428" y2="460" stroke="rgba(0,0,0,0.07)" strokeWidth="1" />

      <text x="444" y="144" fontFamily="system-ui,sans-serif" fontSize="10" fontWeight="700" fill="#1a1a1a">Your Quote</text>

      {/* Vehicle summary */}
      <rect x="436" y="150" width="156" height="38" rx="8" fill="#fff" />
      <rect x="436" y="150" width="156" height="38" rx="8" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
      <text x="444" y="164" fontFamily="system-ui,sans-serif" fontSize="8.5" fontWeight="700" fill="#1a1a1a">🚗  Toyota Camry 2019</text>
      <text x="444" y="177" fontFamily="system-ui,sans-serif" fontSize="8" fill="rgba(0,0,0,0.38)">2.5L Petrol · Automatic</text>

      {/* Selected service */}
      <text x="444" y="206" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="700" fill="#1a1a1a">Selected</text>
      <rect x="436" y="210" width="156" height="32" rx="8" fill="#fff5f5" />
      <rect x="436" y="210" width="156" height="32" rx="8" fill="none" stroke="rgba(220,38,38,0.2)" strokeWidth="1" />
      <text x="444" y="224" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="700" fill="#dc2626">Log Book Service</text>
      <text x="444" y="235" fontFamily="system-ui,sans-serif" fontSize="8" fill="rgba(0,0,0,0.38)">Incl. oil, filter &amp; 55pt check</text>

      {/* Pricing breakdown */}
      <line x1="436" y1="254" x2="592" y2="254" stroke="rgba(0,0,0,0.07)" strokeWidth="1" />
      {[
        { label: 'Service', value: '$189.00' },
        { label: 'Parts est.', value: '$42.00' },
        { label: 'GST (10%)', value: '$23.10' },
      ].map((row, i) => (
        <g key={i}>
          <text x="444" y={270 + i * 18} fontFamily="system-ui,sans-serif" fontSize="8.5" fill="rgba(0,0,0,0.45)">{row.label}</text>
          <text x="586" y={270 + i * 18} fontFamily="system-ui,sans-serif" fontSize="8.5" fontWeight="600" fill="#1a1a1a" textAnchor="end">{row.value}</text>
        </g>
      ))}
      <line x1="436" y1="324" x2="592" y2="324" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
      <text x="444" y="338" fontFamily="system-ui,sans-serif" fontSize="10" fontWeight="800" fill="#1a1a1a">Total</text>
      <text x="586" y="338" fontFamily="system-ui,sans-serif" fontSize="13" fontWeight="800" fill="#dc2626" textAnchor="end">$254.10</text>
      <text x="444" y="350" fontFamily="system-ui,sans-serif" fontSize="7.5" fill="rgba(0,0,0,0.35)">Est. 2–3 hrs · No hidden fees</text>

      {/* Book CTA */}
      <rect x="436" y="360" width="156" height="36" rx="10" fill="#dc2626" />
      <text x="514" y="382" fontFamily="system-ui,sans-serif" fontSize="10.5" fontWeight="800" fill="#fff" textAnchor="middle">Confirm Booking →</text>

      {/* Warranty note */}
      <text x="514" y="408" fontFamily="system-ui,sans-serif" fontSize="8" fill="rgba(0,0,0,0.35)" textAnchor="middle">✅ Covered by 12-month warranty</text>
      <text x="514" y="420" fontFamily="system-ui,sans-serif" fontSize="8" fill="rgba(0,0,0,0.35)" textAnchor="middle">Pay on the day · No deposit</text>
    </svg>
  );
}

const SCREENS = [BrandingScreen, PortalScreen, LandingScreen, MechanicScreen];
const URLS = ['elevateelectrical.com.au','app.claritybookings.com.au/dashboard','procleanbrisbane.com.au','redlineauto.com.au'];
const CARD_BGTONES = [['#1a0d00','#2a1500'],['#061428','#0d2244'],['#061a0f','#0d2e18'],['#1a0808','#2a0e0e']];
const CARD_ACCENTS = ['#f97316','#2563eb','#059669','#dc2626'];

export default function Work({ workItems: items }) {
  const workItems = items || [
    {
      number:'01', title:'Branding Website',
      description:'A premium electrical contractor site built for trust — licensed, local, and optimised to convert visitors into inbound quote requests.',
      services:['Web Design','Brand Direction'],
      metricOneLabel:'More enquiry clicks', metricOne:'38%',
      metricTwoLabel:'Performance score', metricTwo:'94%',
    },
    {
      number:'02', title:'Booking Portal',
      description:'A clinic management dashboard for a Brisbane allied health practice — live appointments, patient records, and revenue at a glance.',
      services:['UI/UX Design','Dashboard'],
      metricOneLabel:'Faster task flow', metricOne:'2.4x',
      metricTwoLabel:'User satisfaction', metricTwo:'98%',
    },
    {
      number:'03', title:'Growth Landing Page',
      description:'A suburb-targeted cleaning service page built to rank on Google and convert local search traffic into booked jobs around Brisbane.',
      services:['SEO','Landing Page','Analytics'],
      metricOneLabel:'Mobile traffic ready', metricOne:'71%',
      metricTwoLabel:'Lead capture', metricTwo:'24/7',
    },
    {
      number:'04', title:'Auto Service Website',
      description:'A high-converting mechanic site for a Brisbane workshop — online bookings, service pricing, and trust signals built to win walk-ins.',
      services:['Web Design','SEO','Bookings'],
      metricOneLabel:'Online bookings', metricOne:'3.1x',
      metricTwoLabel:'Google ranking', metricTwo:'#1',
    },
  ];

  const trackRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const velocity = useRef(0);
  const lastX = useRef(0);
  const rafId = useRef(null);
  const [active, setActive] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isDrag, setIsDrag] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 680);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const scrollToCard = useCallback((idx) => {
    if (!trackRef.current) return;
    const cards = trackRef.current.querySelectorAll('[data-card]');
    if (!cards[idx]) return;
    const track = trackRef.current;
    const card = cards[idx];
    const trackRect = track.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const offset = card.offsetLeft - (trackRect.width / 2 - cardRect.width / 2);
    track.scrollTo({ left: offset, behavior: 'smooth' });
    setActive(idx);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const cards = track.querySelectorAll('[data-card]');
      const center = track.scrollLeft + track.clientWidth / 2;
      let closest = 0, minDist = Infinity;
      cards.forEach((card, i) => {
        const dist = Math.abs(card.offsetLeft + card.offsetWidth / 2 - center);
        if (dist < minDist) { minDist = dist; closest = i; }
      });
      setActive(closest);
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    return () => track.removeEventListener('scroll', onScroll);
  }, []);

  const onMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeft.current = trackRef.current.scrollLeft;
    lastX.current = e.pageX;
    velocity.current = 0;
    setIsDrag(false);
    if (rafId.current) cancelAnimationFrame(rafId.current);
  };
  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    velocity.current = e.pageX - lastX.current;
    lastX.current = e.pageX;
    trackRef.current.scrollLeft = scrollLeft.current - walk;
    if (Math.abs(walk) > 4) setIsDrag(true);
  };
  const onMouseUp = () => {
    isDragging.current = false;
    let momentum = velocity.current * 8;
    const ease = () => {
      if (!trackRef.current || Math.abs(momentum) < 1) return;
      trackRef.current.scrollLeft -= momentum;
      momentum *= 0.92;
      rafId.current = requestAnimationFrame(ease);
    };
    rafId.current = requestAnimationFrame(ease);
  };
  const onTouchStart = (e) => {
    startX.current = e.touches[0].pageX;
    scrollLeft.current = trackRef.current.scrollLeft;
    lastX.current = e.touches[0].pageX;
    velocity.current = 0;
  };
  const onTouchMove = (e) => {
    const x = e.touches[0].pageX;
    velocity.current = x - lastX.current;
    lastX.current = x;
    trackRef.current.scrollLeft = scrollLeft.current - (x - startX.current) * 1.1;
  };

  return (
    <section id="work" style={{ ...S.section, padding: isMobile ? '72px 0 90px' : '120px 0 140px' }}>

      {/* ── Header ── */}
      <div style={{
        ...S.header,
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'flex-start' : 'flex-end',
        margin: isMobile ? '0 auto 44px' : '0 auto 72px',
        width: isMobile ? 'calc(100% - 32px)' : 'min(1320px,calc(100% - 48px))',
      }}>
        <div>
          {!isMobile && <div style={S.kicker}><span style={S.dot} /> Selected Projects</div>}
          <h2 style={{ ...S.title, fontSize: isMobile ? 'clamp(52px,14vw,80px)' : 'clamp(64px,7.5vw,112px)' }}>
            Recent<br />Works
          </h2>
        </div>
        <div style={{ ...S.navRow, paddingBottom: isMobile ? 0 : '16px' }}>
          <button style={{ ...S.navBtn, opacity: active === 0 ? 0.3 : 1 }} onClick={() => scrollToCard(Math.max(0, active - 1))} aria-label="Previous">←</button>
          <button style={{ ...S.navBtn, ...(active < workItems.length - 1 ? S.navBtnActive : { opacity: 0.3 }) }} onClick={() => scrollToCard(Math.min(workItems.length - 1, active + 1))} aria-label="Next">→</button>
        </div>
      </div>

      {/* ── Scrollable track ── */}
      <div
        ref={trackRef}
        style={{
          ...S.track,
          cursor: isDrag ? 'grabbing' : 'grab',
          paddingLeft: isMobile ? '16px' : 'max(40px,calc((100vw - 1320px)/2 + 24px))',
          paddingRight: isMobile ? '16px' : '48px',
          gap: isMobile ? '16px' : '28px',
        }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
      >
        {workItems.map((item, i) => {
          const Screen = SCREENS[i % SCREENS.length];
          const [bg1, bg2] = CARD_BGTONES[i % CARD_BGTONES.length];
          const accent = CARD_ACCENTS[i % CARD_ACCENTS.length];
          const isHovered = hoveredCard === i;

          return (
            <article
              key={item.number}
              data-card={i}
              style={{
                ...S.card,
                // Mobile: full-width single column, desktop: side-by-side
                width: isMobile ? 'calc(100vw - 32px)' : 'min(820px,84vw)',
                minHeight: isMobile ? 'auto' : '520px',
                gridTemplateColumns: isMobile ? '1fr' : '1.15fr 0.85fr',
                gridTemplateRows: isMobile ? 'auto 230px' : '1fr',
                ...(isHovered && !isMobile ? { transform: 'translateY(-10px)', boxShadow: '0 60px 130px rgba(0,0,0,0.46)' } : {}),
              }}
              onMouseEnter={() => !isDrag && setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* INFO — order 1 on mobile (top), order 2 on desktop (right) */}
              <div style={{
                ...S.infoSide,
                order: isMobile ? 1 : 2,
                padding: isMobile ? '28px 24px 24px' : '44px 36px',
                borderLeft: isMobile ? 'none' : '1px solid rgba(255,255,255,0.06)',
                borderBottom: isMobile ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}>
                <div style={S.num}><span style={S.numDot} />Project {item.number}</div>
                <h3 style={{ ...S.cardTitle, fontSize: isMobile ? '26px' : 'clamp(24px,2.6vw,34px)', marginBottom: isMobile ? '8px' : '12px' }}>
                  {item.title}
                </h3>
                <p style={{ ...S.cardDesc, fontSize: isMobile ? '13px' : '13px', marginBottom: isMobile ? '18px' : '28px' }}>
                  {item.description}
                </p>
                <div style={S.servicesLabel}>Services</div>
                <div style={S.chips}>
                  {item.services.map(s => <span key={s} style={S.chip}>{s}</span>)}
                </div>
                <div style={{ ...S.metricsRow, marginTop: isMobile ? '20px' : '32px', paddingTop: isMobile ? '16px' : '24px' }}>
                  <div>
                    <AnimatedValue value={item.metricOne} style={{ ...S.metricVal, fontSize: isMobile ? '28px' : 'clamp(26px,2.5vw,34px)' }} active={active === i} />
                    <span style={S.metricLabel}>{item.metricOneLabel}</span>
                  </div>
                  <div>
                    <AnimatedValue value={item.metricTwo} style={{ ...S.metricVal, fontSize: isMobile ? '28px' : 'clamp(26px,2.5vw,34px)' }} active={active === i} />
                    <span style={S.metricLabel}>{item.metricTwoLabel}</span>
                  </div>
                </div>
              </div>

              {/* MOCKUP — order 2 on mobile (bottom strip), order 1 on desktop (left) */}
              <div style={{
                ...S.mockupSide,
                order: isMobile ? 2 : 1,
                borderRadius: isMobile ? '0 0 32px 32px' : '32px 0 0 32px',
                height: isMobile ? '230px' : 'auto',
              }}>
                <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(145deg,${bg1},${bg2})` }} />
                <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at 30% 30%,${accent}28,transparent 62%)`, pointerEvents: 'none' }} />
                <div style={{
                  ...S.browser,
                  top: isMobile ? '14px' : '28px',
                  left: isMobile ? '14px' : '20px',
                  right: isMobile ? '-14px' : '-20px',
                  bottom: isMobile ? '-14px' : '-20px',
                }}>
                  <div style={S.browserChrome}>
                    <div style={S.trafficLights}>
                      <div style={S.tl('#ff5f57')} /><div style={S.tl('#ffbd2e')} /><div style={S.tl('#28c840')} />
                    </div>
                    <div style={S.urlBar}>
                      <span style={{ fontSize: '8px', opacity: 0.5 }}>🔒</span>
                      <span style={{ color: 'rgba(255,255,255,0.52)' }}>{URLS[i % URLS.length]}</span>
                    </div>
                    <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: 'rgba(255,255,255,0.07)', flexShrink: 0 }} />
                  </div>
                  <div style={S.browserScreen}><Screen /></div>
                </div>
                {/* Index badge */}
                <div style={{
                  position: 'absolute', bottom: '14px', left: '14px',
                  padding: '4px 10px',
                  background: 'rgba(255,255,255,0.07)', backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.1)', borderRadius: '999px',
                  color: 'rgba(255,255,255,0.48)', fontSize: '10px', fontWeight: 900, letterSpacing: '0.06em',
                }}>
                  {item.number} / {String(workItems.length).padStart(2, '0')}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* ── Dot navigation ── */}
      <div style={{
        ...S.dotsRow,
        width: isMobile ? 'calc(100% - 32px)' : 'min(1320px,calc(100% - 48px))',
        margin: isMobile ? '28px auto 0' : '44px auto 0',
      }}>
        {workItems.map((_, i) => (
          <button key={i} aria-label={`Project ${i + 1}`}
            style={{
              height: '4px', borderRadius: '999px', border: 'none', padding: 0, cursor: 'pointer',
              background: active === i ? '#6e52bd' : 'rgba(255,255,255,0.15)',
              width: active === i ? '28px' : '14px', transition: '0.3s ease',
            }}
            onClick={() => scrollToCard(i)}
          />
        ))}
        <span style={{ marginLeft: 'auto', color: 'rgba(255,255,255,0.22)', fontSize: '12px', fontWeight: 800, letterSpacing: '0.04em' }}>
          {isMobile ? 'Swipe to explore →' : 'Drag to explore →'}
        </span>
      </div>
    </section>
  );
}

function AnimatedValue({ value, style, active }) {
  const [displayed, setDisplayed] = useState(value);
  const fired = useRef(false);
  useEffect(() => {
    if (!active || fired.current) return;
    fired.current = true;
    const match = value.match(/^([\d.]+)(.*)$/);
    if (!match) return;
    const target = parseFloat(match[1]);
    const suffix = match[2];
    const startVal = target * 0.3;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min((now - t0) / 900, 1);
      const e = 1 - Math.pow(1 - p, 3);
      const cur = startVal + (target - startVal) * e;
      setDisplayed(`${Number.isInteger(target)?Math.round(cur):cur.toFixed(1)}${suffix}`);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, value]);
  return <span style={style}>{displayed}</span>;
}