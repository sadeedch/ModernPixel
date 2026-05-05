'use client';

import { useEffect, useState } from 'react';

const projectTypes = [
  'New website',
  'Redesign existing website',
  'Landing page',
  'SEO-ready website',
  'SaaS / dashboard UI',
  'Booking or enquiry flow',
  'Not sure yet',
];

export default function WebsiteReviewLeadForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleOpenFromLink = (event) => {
      const link = event.target.closest('a[href="#website-review"]');

      if (!link) return;

      event.preventDefault();
      setIsOpen(true);
    };

    document.addEventListener('click', handleOpenFromLink);

    return () => {
      document.removeEventListener('click', handleOpenFromLink);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const closeForm = () => {
    setIsOpen(false);
    setStatus('idle');
    setMessage('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    if (data.botcheck) return;

    setStatus('loading');
    setMessage('');

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      const subject = encodeURIComponent('New Website Review Request');
      const body = encodeURIComponent(`
Name: ${data.name}
Business: ${data.businessName}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Current website: ${data.currentWebsite || 'Not provided'}
Project type: ${data.projectType}

Message:
${data.projectMessage}
      `);

      window.location.href = `mailto:contact@modernpixel.com.au?subject=${subject}&body=${body}`;

      setStatus('success');
      setMessage(
        'Your email app should open now. To make this form submit automatically, add a Web3Forms access key.'
      );

      form.reset();
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: 'New Website Review Request - ModernPixel',
          from_name: 'ModernPixel Website',
          name: data.name,
          business_name: data.businessName,
          email: data.email,
          phone: data.phone || 'Not provided',
          current_website: data.currentWebsite || 'Not provided',
          project_type: data.projectType,
          message: data.projectMessage,
          botcheck: data.botcheck || '',
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Something went wrong.');
      }

      setStatus('success');
      setMessage(
        'Thanks, your request has been sent. We’ll review your details and get back to you shortly.'
      );

      form.reset();
    } catch (error) {
      setStatus('error');
      setMessage(
        'Something went wrong. Please email contact@modernpixel.com.au directly.'
      );
    }
  };

  return (
    <>

      <button
  type="button"
  className="lead-float-button lead-float-kooka"
  onClick={() => setIsOpen(true)}
  aria-label="Open free website review form"
>
  <span className="kooka-badge" aria-hidden="true">
    <span className="kooka-head">
      <i className="kooka-crest" />
      <i className="kooka-eye" />
      <i className="kooka-beak-top" />
      <i className="kooka-beak-bottom" />
      <i className="kooka-neck" />
    </span>
    <span className="kooka-arrow">↗</span>
  </span>

  <span className="lead-float-copy">
    <small>Free expert review</small>
    <strong>Website Review</strong>
  </span>
</button>

      <div className={`lead-modal ${isOpen ? 'open' : ''}`} aria-hidden={!isOpen}>
        <button
          type="button"
          className="lead-modal-backdrop"
          onClick={closeForm}
          aria-label="Close form"
        />

        <aside className="lead-panel" aria-label="Free website review form">
          <button type="button" className="lead-close" onClick={closeForm}>
            ×
          </button>

          <div className="lead-proof">
            <span className="lead-kicker">ModernPixel Website Review</span>

            <h2>Want a website that looks premium and brings more enquiries?</h2>

            <p>
              Tell us a little about your business and we’ll suggest the best
              next step, whether that is a redesign, a landing page, or a new
              website.
            </p>

            <div className="lead-proof-grid">
              <div>
                <strong>24/7</strong>
                <span>Lead capture ready</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Mobile-first layout</span>
              </div>
              <div>
                <strong>SEO</strong>
                <span>Foundations included</span>
              </div>
              <div>
                <strong>Fast</strong>
                <span>Next.js-ready builds</span>
              </div>
            </div>
          </div>

          <form className="lead-form" onSubmit={handleSubmit}>
            <div className="lead-form-heading">
              <span>Quick enquiry</span>
              <h3>Free website review</h3>
              <p>
                No pressure. Send your details and we’ll tell you what can be
                improved.
              </p>
            </div>

            <input
              type="checkbox"
              name="botcheck"
              className="lead-botcheck"
              tabIndex="-1"
              autoComplete="off"
            />

            <div className="lead-field-grid">
              <label>
                Name *
                <input name="name" type="text" required placeholder="Your name" />
              </label>

              <label>
                Business name *
                <input
                  name="businessName"
                  type="text"
                  required
                  placeholder="Business name"
                />
              </label>

              <label>
                Email *
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@email.com"
                />
              </label>

              <label>
                Phone
                <input name="phone" type="tel" placeholder="0450 000 000" />
              </label>
            </div>

            <label>
              Current website
              <input
                name="currentWebsite"
                type="text"
                placeholder="https://yourwebsite.com.au"
              />
            </label>

            <label>
              What do you need help with? *
              <select name="projectType" required defaultValue="">
                <option value="" disabled>
                  Select one
                </option>

                {projectTypes.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>

            <label>
              What are you trying to improve? *
              <textarea
                name="projectMessage"
                required
                rows="5"
                placeholder="Example: My current website looks old, I want it to look more premium and get more quote requests."
              />
            </label>

            {message && <p className={`lead-status ${status}`}>{message}</p>}

            <button
              type="submit"
              className="lead-submit"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending...' : 'Request My Free Review'}
            </button>

            <p className="lead-small">
              Prefer email? Contact us directly at contact@modernpixel.com.au
            </p>
          </form>
        </aside>
      </div>
    </>
  );
}
