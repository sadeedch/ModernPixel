'use client';

import { useState } from 'react';
import { services } from '@/data/siteData';

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="services" className="services-panel">
      <div className="services-inner">
        <div className="service-list reveal">
          {services.map((service, index) => (
            <button
              key={service.title}
              className={`service-row ${activeService === index ? 'active' : ''}`}
              onMouseEnter={() => setActiveService(index)}
              onFocus={() => setActiveService(index)}
              type="button"
            >
              <span>{service.title}</span>
            </button>
          ))}
        </div>

        <div className="service-preview reveal">
          <div className="preview-stack back-one" />
          <div className="preview-stack back-two" />
          <div className="preview-image">
            <div className="silhouette" />
            <div className="preview-title">{services[activeService].imageTitle}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
