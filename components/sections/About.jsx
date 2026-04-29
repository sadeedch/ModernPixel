import { stats } from '@/data/siteData';

export default function About() {
  return (
    <section
      id="about"
      className="intro-section"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <div
        className="intro-copy reveal"
        style={{
          textAlign: 'center',
          margin: '0 auto',
          maxWidth: '900px',
          width: '100%',
        }}
      >
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