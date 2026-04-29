import { testimonials } from '@/data/siteData';

export default function Testimonials() {
  return (
    <section id="testimonial" className="testimonial-section">
      <div className="testimonial-heading reveal">
        <span className="testimonial-kicker">Realistic client feedback</span>
        <h2 className="section-title light">What clients usually care about</h2>
        <p>No fake celebrity-style reviews. Just the kind of outcomes small businesses actually want, better trust, clearer messaging, stronger mobile pages, and more enquiries.</p>
      </div>
      <div className="testimonial-list">
        {testimonials.map((item, index) => (
          <article key={item.name} className="testimonial-card reveal">
            <div className="testimonial-copy">
              <p>“{item.quote}”</p>
              <div className="client-row">
                <span>{item.name}</span>
                <div><strong>{item.role}</strong><small>{item.result}</small></div>
              </div>
            </div>
            <div className={`testimonial-image testimonial-${index + 1}`}>
              <div className="review-browser">
                <div className="review-dots"><i /><i /><i /></div>
                <div className="review-lines"><span /><span /><span /></div>
                <div className="review-score">5.0 ★</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
