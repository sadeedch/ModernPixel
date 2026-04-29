'use client';

import { useState } from 'react';
import { faqs } from '@/data/siteData';

export default function ContactFaq() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="contact-section">
      <div className="contact-copy reveal">
        <span className="intro-label inline"><span /> Contact</span>
        <h2>Ready to make your website feel premium?</h2> <br/><br/><br/>
        <p>Tell us what you are building and we’ll help you shape a sharp, modern, conversion-focused digital experience.</p>
      </div>
      <div className="faq-box reveal">
        {faqs.map(([question, answer], index) => (
          <button key={question} className={`faq-item ${openFaq === index ? 'open' : ''}`} onClick={() => setOpenFaq(openFaq === index ? -1 : index)} type="button">
            <span><b>{question}</b><i>{openFaq === index ? '−' : '+'}</i></span>
            <em>{answer}</em>
          </button>
        ))}
      </div>
    </section>
  );
}
