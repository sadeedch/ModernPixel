import { stats } from '@/data/siteData';

export default function About() {
  return (
    <section id="about" className="intro-section">
      <span />
      <div className="intro-copy reveal">
        We’re a creative web agency driven by design, strategy, and storytelling. Our mission is to help Australian businesses stand out through bold ideas, thoughtful design, and high-performing digital experiences.
      </div>
      <div className="stats-row reveal">
        {stats.map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
