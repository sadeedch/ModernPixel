"use client";

import { useState } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const oneOffPlans = [
  {
    id: "starter",
    label: "Entry",
    name: "Starter Site",
    tagline: "Trades · Health · Retail",
    price: "$1,200",
    priceSub: "starting from · 1–2 week turnaround",
    features: [
      { text: "Up to 5 pages" },
      { text: "Mobile-first responsive build" },
      { text: "Contact & enquiry form" },
      { text: "Basic SEO foundations" },
      { text: "Google Maps embed" },
      { text: "Performance optimised" },
    ],
    cta: "Get started",
    highlighted: false,
  },
  {
    id: "growth",
    label: "Most popular",
    name: "Growth Site",
    tagline: "Trades · Health · Hospitality",
    price: "$2,800",
    priceSub: "starting from · 2–4 week turnaround",
    features: [
      { text: "Up to 10 pages" },
      { text: "Everything in Starter" },
      { text: "Booking or lead capture flow" },
      { text: "Suburb-targeted SEO pages" },
      { text: "Page copywriting included" },
      { text: "Google Analytics setup" },
    ],
    cta: "Start project",
    highlighted: true,
  },
  {
    id: "premium",
    label: "Premium",
    name: "Premium / SaaS",
    tagline: "Startups · Dashboards · SaaS UI",
    price: "Custom",
    priceSub: "scoped per project · 4–8 weeks",
    features: [
      { text: "Custom UI/UX design" },
      { text: "Full custom build" },
      { text: "Dashboard or portal UI" },
      { text: "Brand system included" },
      { text: "Full strategy session" },
      { text: "Priority support" },
    ],
    cta: "Let's talk",
    highlighted: false,
  },
];

const retainerPlans = [
  {
    id: "maintenance",
    label: "Care",
    name: "Site Maintenance",
    tagline: "For existing websites",
    price: "$300",
    priceSub: "per month · cancel anytime",
    features: [
      { text: "2 hrs of edits per month" },
      { text: "Hosting & uptime monitoring" },
      { text: "Security & backup checks" },
      { text: "Monthly performance report" },
      { text: "Priority response time" },
    ],
    cta: "Get started",
    highlighted: false,
  },
  {
    id: "growth-retainer",
    label: "Most popular",
    name: "Growth Retainer",
    tagline: "Ongoing SEO & conversion work",
    price: "$850",
    priceSub: "per month · minimum 3 months",
    features: [
      { text: "Monthly landing page builds" },
      { text: "SEO blog content (2×/mo)" },
      { text: "Conversion rate tweaks" },
      { text: "Google Analytics reporting" },
      { text: "Everything in Maintenance" },
    ],
    cta: "Start growing",
    highlighted: true,
  },
  {
    id: "partner",
    label: "Agency",
    name: "Agency Partner",
    tagline: "White-label for agencies",
    price: "Custom",
    priceSub: "scoped per arrangement",
    features: [
      { text: "White-label delivery" },
      { text: "Dedicated project manager" },
      { text: "Unlimited revision rounds" },
      { text: "Slack / direct comms" },
      { text: "Monthly strategy sessions" },
    ],
    cta: "Let's talk",
    highlighted: false,
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function PricingSection() {
  const [billing, setBilling] = useState("one-off");
  const plans = billing === "one-off" ? oneOffPlans : retainerPlans;

  return (
    <section style={s.section}>
      <div style={s.bgGlow} aria-hidden="true" />

      {/* Header */}
      <div style={s.header}>
        <span style={s.eyebrow}>— PRICING</span>
        <h2 style={s.heading}>
          Transparent pricing for{" "}
          <span style={s.headingAccent}>Brisbane businesses</span>
        </h2>
        <p style={s.subheading}>
          No lock-in contracts. No surprise invoices. Just clear, honest pricing
          built for Australian SMBs.
        </p>

        {/* Toggle */}
        <div style={s.toggleTrack}>
          <button
            onClick={() => setBilling("one-off")}
            style={billing === "one-off" ? { ...s.toggleBtn, ...s.toggleBtnActive } : s.toggleBtn}
          >
            One-off project
          </button>
          <button
            onClick={() => setBilling("retainer")}
            style={billing === "retainer" ? { ...s.toggleBtn, ...s.toggleBtnActive } : s.toggleBtn}
          >
            Monthly retainer
          </button>
        </div>
      </div>

      {/* Cards */}
      <div style={s.grid}>
        {plans.map((plan) => (
          <div
            key={plan.id}
            style={plan.highlighted ? { ...s.card, ...s.cardHighlighted } : s.card}
          >
            {plan.highlighted && <div style={s.cardGlow} aria-hidden="true" />}

            <span style={plan.highlighted ? { ...s.pill, ...s.pillActive } : s.pill}>
              {plan.label}
            </span>

            <h3 style={s.planName}>{plan.name}</h3>
            <p style={s.planTagline}>{plan.tagline}</p>

            <div style={plan.highlighted ? { ...s.hr, ...s.hrHighlighted } : s.hr} />

            <p style={s.price}>{plan.price}</p>
            <p style={s.priceSub}>{plan.priceSub}</p>

            <ul style={s.featureList}>
              {plan.features.map((f, i) => (
                <li key={i} style={s.featureItem}>
                  <span style={plan.highlighted ? { ...s.tick, ...s.tickActive } : s.tick}>
                    ✦
                  </span>
                  <span style={s.featureText}>{f.text}</span>
                </li>
              ))}
            </ul>

            <a
              href="mailto:contact@modernpixel.com.au"
              style={plan.highlighted ? { ...s.cta, ...s.ctaActive } : s.cta}
            >
              {plan.cta} →
            </a>
          </div>
        ))}
      </div>

      {/* Footer */}
      <p style={s.footerNote}>
        Not sure which plan fits?{" "}
        <a href="tel:0450237005" style={s.footerLink}>
          Book a free strategy call
        </a>{" "}
        and we&apos;ll point you in the right direction.
      </p>
    </section>
  );
}

// ─── Styles ──────────────────────────────────────────────────────────────────

const s = {
  section: {
    position: "relative",
    backgroundColor: "#1a1a35",
    padding: "100px 24px 80px",
    overflow: "hidden",
    fontFamily: "inherit",
  },
  bgGlow: {
    position: "absolute",
    top: "-15%",
    left: "50%",
    transform: "translateX(-50%)",
    width: 900,
    height: 600,
    borderRadius: "50%",
    background: "radial-gradient(ellipse at center, rgba(120,80,220,0.22) 0%, transparent 70%)",
    pointerEvents: "none",
  },
  header: {
    position: "relative",
    textAlign: "center",
    maxWidth: 600,
    margin: "0 auto 64px",
    zIndex: 1,
  },
  eyebrow: {
    display: "inline-block",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.14em",
    color: "#2ee8b0",
    marginBottom: 20,
  },
  heading: {
    fontSize: "clamp(30px, 5vw, 52px)",
    fontWeight: 800,
    lineHeight: 1.08,
    letterSpacing: "-0.03em",
    color: "#ffffff",
    margin: "0 0 18px",
  },
  headingAccent: {
    color: "#c4a8ff",
  },
  subheading: {
    fontSize: 16,
    lineHeight: 1.7,
    color: "rgba(255,255,255,0.65)",
    margin: "0 0 36px",
  },
  toggleTrack: {
    display: "inline-flex",
    backgroundColor: "#22224a",
    border: "1px solid rgba(255,255,255,0.14)",
    borderRadius: 99,
    padding: 4,
  },
  toggleBtn: {
    padding: "9px 22px",
    borderRadius: 99,
    border: "none",
    background: "transparent",
    color: "rgba(255,255,255,0.55)",
    fontSize: 13,
    fontWeight: 500,
    cursor: "pointer",
    fontFamily: "inherit",
  },
  toggleBtnActive: {
    background: "linear-gradient(135deg, #7c4dda 0%, #5b2dc4 100%)",
    color: "#ffffff",
    boxShadow: "0 0 20px rgba(124,77,218,0.5)",
  },
  grid: {
    position: "relative",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
    gap: 20,
    maxWidth: 1060,
    margin: "0 auto",
    zIndex: 1,
  },
  card: {
    position: "relative",
    backgroundColor: "#22224a",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 18,
    padding: "30px 26px",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  cardHighlighted: {
    backgroundColor: "#2a2458",
    border: "1px solid rgba(140,100,255,0.55)",
    boxShadow: "0 0 48px rgba(120,80,220,0.25)",
  },
  cardGlow: {
    position: "absolute",
    top: -70,
    right: -70,
    width: 240,
    height: 240,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(120,80,220,0.28) 0%, transparent 70%)",
    pointerEvents: "none",
  },
  pill: {
    display: "inline-block",
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.5)",
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: "4px 12px",
    borderRadius: 99,
    marginBottom: 18,
    alignSelf: "flex-start",
  },
  pillActive: {
    backgroundColor: "rgba(46,232,176,0.16)",
    color: "#2ee8b0",
  },
  planName: {
    fontSize: 21,
    fontWeight: 700,
    color: "#ffffff",
    margin: "0 0 5px",
    letterSpacing: "-0.02em",
  },
  planTagline: {
    fontSize: 12,
    color: "rgba(255,255,255,0.5)",
    margin: 0,
  },
  hr: {
    height: 1,
    backgroundColor: "rgba(255,255,255,0.1)",
    border: "none",
    margin: "22px 0",
  },
  hrHighlighted: {
    backgroundColor: "rgba(140,100,255,0.28)",
  },
  price: {
    fontSize: 42,
    fontWeight: 800,
    color: "#ffffff",
    letterSpacing: "-0.04em",
    lineHeight: 1,
    margin: "0 0 6px",
  },
  priceSub: {
    fontSize: 11,
    color: "rgba(255,255,255,0.5)",
    margin: "0 0 26px",
    letterSpacing: "0.01em",
  },
  featureList: {
    listStyle: "none",
    padding: 0,
    margin: "0 0 28px",
    display: "flex",
    flexDirection: "column",
    gap: 11,
    flex: 1,
  },
  featureItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: 10,
  },
  tick: {
    fontSize: 9,
    color: "rgba(255,255,255,0.3)",
    marginTop: 4,
    flexShrink: 0,
    lineHeight: 1,
  },
  tickActive: {
    color: "#2ee8b0",
  },
  featureText: {
    fontSize: 14,
    color: "rgba(255,255,255,0.78)",
    lineHeight: 1.55,
  },
  cta: {
    display: "block",
    textAlign: "center",
    padding: "13px 20px",
    borderRadius: 10,
    border: "1px solid rgba(255,255,255,0.16)",
    color: "rgba(255,255,255,0.75)",
    backgroundColor: "rgba(255,255,255,0.07)",
    fontSize: 14,
    fontWeight: 500,
    textDecoration: "none",
    letterSpacing: "0.01em",
  },
  ctaActive: {
    background: "linear-gradient(135deg, #7c4dda 0%, #5b2dc4 100%)",
    border: "1px solid rgba(140,100,255,0.6)",
    color: "#ffffff",
    fontWeight: 600,
    boxShadow: "0 4px 28px rgba(120,80,220,0.45)",
  },
  footerNote: {
    position: "relative",
    textAlign: "center",
    fontSize: 14,
    color: "rgba(255,255,255,0.5)",
    marginTop: 48,
    zIndex: 1,
  },
  footerLink: {
    color: "#2ee8b0",
    textDecoration: "none",
    borderBottom: "1px solid rgba(46,232,176,0.4)",
    paddingBottom: 1,
  },
};
