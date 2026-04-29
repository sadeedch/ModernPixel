import { workItems } from '@/data/siteData';

export default function Work() {
  return (
    <section id="work" className="work-section">
      <h2 className="section-title reveal">Recent Works</h2>
      <div className="work-stack">
        {workItems.map((item, index) => (
          <article key={item.number} className={`work-card reveal tone-${item.tone}`} style={{ '--i': index }}>
            <div className="work-left">
              <div className="work-number"><span /> {item.number}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <div className="phone-art">
              <div className="phone-body">
                <div className="phone-notch" />
                <div className="phone-screen" />
              </div>
            </div>
            <div className="work-right">
              <h4>Services Provided</h4>
              <div className="chip-row">
                {item.services.map((service) => <span key={service}>{service}</span>)}
              </div>
              <div className="metrics">
                <div><small>{item.metricOneLabel}</small><strong>{item.metricOne}</strong></div>
                <div><small>{item.metricTwoLabel}</small><strong>{item.metricTwo}</strong></div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
