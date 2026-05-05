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
  className="lead-float-button lead-float-kooka-v2"
  onClick={() => setIsOpen(true)}
  aria-label="Open free website review form"
>
  <span className="kooka-v2" aria-hidden="true">
    <svg viewBox="0 0 92 90" xmlns="http://www.w3.org/2000/svg" className="kooka-svg">
      {/* Ground shadow */}
      <ellipse cx="38" cy="87" rx="19" ry="3.5" fill="rgba(0,0,0,0.2)" />

      {/* Body — warm brown */}
      <ellipse cx="34" cy="67" rx="22" ry="17" fill="#7C5A1E" />

      {/* Blue wing patch — kookaburra trait */}
      <path d="M14 63 Q10 53 14 44 Q22 37 30 46 Q24 55 19 65 Z" fill="#4A7AB5" />
      <path d="M17 65 Q13 55 16 47 Q22 42 27 49 Q23 57 20 66 Z" fill="#2D5A8A" opacity="0.45" />

      {/* Tail feathers */}
      <path d="M13 66 Q4 72 2 80 Q10 74 15 68 Z" fill="#4A2E0A" />
      <path d="M12 70 Q3 76 1 84 Q9 79 14 72 Z" fill="#7C5A1E" opacity="0.6" />

      {/* White chest and belly */}
      <ellipse cx="40" cy="72" rx="13" ry="14" fill="#F5EFE0" />

      {/* Neck — cream, bridges head to body */}
      <path d="M36 54 Q44 49 53 52 Q55 60 51 64 Q42 65 37 60 Z" fill="#F5EFE0" />

      {/* Head — large and round, key kookaburra trait */}
      <ellipse cx="54" cy="40" rx="21" ry="18" fill="#F5EFE0" />

      {/* Crown — dark brown streaks on top */}
      <path d="M37 35 Q48 17 73 28 Q68 20 52 18 Q38 18 37 35 Z" fill="#3D2208" />
      <path d="M45 33 Q53 21 69 29 Q65 24 54 23 Q46 23 45 33 Z" fill="#C8A870" opacity="0.35" />

      {/* ═══ EYE STRIPE — most distinctive kookaburra feature ═══ */}
      <path d="M35 36 Q46 27 72 36 L70 44 Q46 34 35 44 Z" fill="#1E1004" />

      {/* Pale supercilium above the stripe */}
      <path d="M43 33 Q53 27 69 33 Q66 29 54 28 Q46 28 43 33 Z" fill="rgba(255,255,255,0.45)" />

      {/* Eye — drawn AFTER stripe so it sits on top */}
      <circle cx="63" cy="39" r="6.5" fill="white" />
      <circle cx="64" cy="38" r="4.5" fill="#0F0C1C" />
      <circle cx="66" cy="36.5" r="1.6" fill="white" />

      {/* ═══ BEAK — long and heavy, the kookaburra's signature ═══ */}
      {/* Upper mandible */}
      <path d="M72 36 L92 41.5 L73 47 Z" fill="#3D2208" />
      {/* Lower mandible — slightly shorter and lighter */}
      <path d="M73 45 L89 49 L75 53 Z" fill="#5C3610" />
      {/* Beak midline seam */}
      <line x1="72" y1="45" x2="91" y2="45.5" stroke="#2A1604" strokeWidth="0.7" opacity="0.5" />

      {/* Feet / claws */}
      <path
        d="M30 83 L24 90 M30 83 L32 90 M42 83 L36 90 M42 83 L44 90"
        stroke="#7C5A1E"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  </span>

  <span className="lead-float-copy">
    <small>Need a sharper site?</small>
    <strong>Free Website Review</strong>
  </span>
  <span className="lead-float-arrow" aria-hidden="true">↙</span>
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
