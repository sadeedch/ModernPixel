import { testimonials } from '@/data/siteData';

const visualContent = [
  {
    badge: 'Clinic website',
    title: 'Book a visit',
    subtitle: 'Fast enquiries from local patients',
    icon: '🏥',
    stat: '+32%',
    statLabel: 'More calls',
    button: 'Call clinic',
    chips: ['Services', 'Booking', 'Reviews'],
  },
  {
    badge: 'Trade services',
    title: 'Request a quote',
    subtitle: 'Clear mobile flow for urgent jobs',
    icon: '🛠️',
    stat: '24/7',
    statLabel: 'Lead ready',
    button: 'Get quote',
    chips: ['Emergency', 'Mobile', 'Suburbs'],
  },
  {
    badge: 'Local brand',
    title: 'Launch-ready site',
    subtitle: 'Premium design with clean messaging',
    icon: '💎',
    stat: '5.0',
    statLabel: 'Trust score',
    button: 'View work',
    chips: ['Brand', 'SEO', 'Speed'],
  },
];

function TestimonialVisual({ index }) {
  const visual = visualContent[index] || visualContent[0];

  return (
    <div className={`testimonial-image testimonial-${index + 1}`}>
      <div className="case-visual-card">
        <div className="case-top-row">
          <div className="case-icon">{visual.icon}</div>
          <div>
            <span>{visual.badge}</span>
            <strong>{visual.title}</strong>
          </div>
        </div>

        <p>{visual.subtitle}</p>

        <div className="case-chips">
          {visual.chips.map((chip) => (
            <span key={chip}>{chip}</span>
          ))}
        </div>

        <div className="case-bottom">
          <div>
            <strong>{visual.stat}</strong>
            <span>{visual.statLabel}</span>
          </div>
          <button>{visual.button}</button>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonial" className="testimonial-section">
      <div className="testimonial-heading reveal">
        <span className="testimonial-kicker">Client feedback</span>
        <h2 className="section-title light">What clients usually care about</h2>
      </div>

      <div className="testimonial-list">
        {testimonials.map((item, index) => (
          <article key={item.name} className="testimonial-card reveal">
            <div className="testimonial-copy">
              <p>“{item.quote}”</p>

              <div className="client-row">
                <span
                  style={{
                    fontSize: '40px',
                    width: '64px',
                    height: '64px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {item.name}
                </span>

                <div>
                  <strong>{item.role}</strong>
                  <small>{item.result}</small>
                </div>
              </div>
            </div>

            <TestimonialVisual index={index} />
          </article>
        ))}
      </div>
    </section>
  );
}