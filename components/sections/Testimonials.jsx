// import { testimonials } from '@/data/siteData';

// const visualContent = [
//   {
//     badge: 'Clinic website',
//     title: 'Book a visit',
//     subtitle: 'Fast enquiries from local patients',
//     icon: '🏥',
//     stat: '+32%',
//     statLabel: 'More calls',
//     button: 'Call clinic',
//     chips: ['Services', 'Booking', 'Reviews'],
//   },
//   {
//     badge: 'Trade services',
//     title: 'Request a quote',
//     subtitle: 'Clear mobile flow for urgent jobs',
//     icon: '🛠️',
//     stat: '24/7',
//     statLabel: 'Lead ready',
//     button: 'Get quote',
//     chips: ['Emergency', 'Mobile', 'Suburbs'],
//   },
//   {
//     badge: 'Local brand',
//     title: 'Launch-ready site',
//     subtitle: 'Premium design with clean messaging',
//     icon: '💎',
//     stat: '5.0',
//     statLabel: 'Trust score',
//     button: 'View work',
//     chips: ['Brand', 'SEO', 'Speed'],
//   },
// ];

// function TestimonialVisual({ index }) {
//   const visual = visualContent[index] || visualContent[0];

//   return (
//     <div className={`testimonial-image testimonial-${index + 1}`}>
//       <div className="case-visual-card">
//         <div className="case-top-row">
//           <div className="case-icon">{visual.icon}</div>
//           <div>
//             <span>{visual.badge}</span>
//             <strong>{visual.title}</strong>
//           </div>
//         </div>

//         <p>{visual.subtitle}</p>

//         <div className="case-chips">
//           {visual.chips.map((chip) => (
//             <span key={chip}>{chip}</span>
//           ))}
//         </div>

//         <div className="case-bottom">
//           <div>
//             <strong>{visual.stat}</strong>
//             <span>{visual.statLabel}</span>
//           </div>
//           <button>{visual.button}</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function Testimonials() {
//   return (
//     <section id="testimonial" className="testimonial-section">
//       <div className="testimonial-heading reveal">
//         <span className="testimonial-kicker">Client feedback</span>
//         <h2 className="section-title light">What clients usually care about</h2>
//       </div>

//       <div className="testimonial-list">
//         {testimonials.map((item, index) => (
//           <article key={item.name} className="testimonial-card reveal">
//             <div className="testimonial-copy">
//               <p>“{item.quote}”</p>

//               <div className="client-row">
//                 <span
//                   style={{
//                     fontSize: '40px',
//                     width: '64px',
//                     height: '64px',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                   }}
//                 >
//                   {item.name}
//                 </span>

//                 <div>
//                   <strong>{item.role}</strong>
//                   <small>{item.result}</small>
//                 </div>
//               </div>
//             </div>

//             <TestimonialVisual index={index} />
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// }



const testimonialCases = [
  {
    type: 'clinic',
    quote:
      'The new site made our services so much clearer. Pages load fast, it is easy to book, and we are getting more local patient enquiries from Google.',
    name: 'Dr. Sarah T.',
    role: 'Owner, Brisbane Family Clinic',
    result: '+46% new patient booking enquiries in 60 days',
    avatar: 'ST',
  },
  {
    type: 'trade',
    quote:
      'People can now request a quote in seconds on mobile. The site feels more trustworthy, and the quality of leads has been noticeably better.',
    name: 'Mark R.',
    role: 'Director, Apex Electrical',
    result: '+72% quote requests in 90 days',
    avatar: 'MR',
  },
  {
    type: 'studio',
    quote:
      'ModernPixel finally gave us the premium look we wanted. Our message is clearer, and I can update the site myself without calling anyone.',
    name: 'Olivia M.',
    role: 'Founder, Luna Skin Studio',
    result: '+35% enquiries in the first month',
    avatar: 'OM',
  },
];

function ClinicPreview() {
  return (
    <div className="mp-preview mp-preview-clinic">
      <div className="mp-preview-nav">
        <div className="mp-preview-brand">
          <span>✚</span>
          <strong>Brisbane<br />Family Clinic</strong>
        </div>

        <div className="mp-preview-links">
          <span>Services</span>
          <span>Team</span>
          <span>Fees</span>
          <button>Book appointment</button>
        </div>
      </div>

      <div className="mp-preview-main">
        <div className="mp-preview-copy">
          <h3>Quality care for you and your family</h3>
          <p>Trusted GP services in Brisbane. Appointments in clinic or online.</p>

          <div className="mp-preview-actions">
            <button>Book appointment</button>
            <button>Our services</button>
          </div>

          <div className="mp-rating">
            <span>Rated 4.9 by patients</span>
            <strong>★★★★★</strong>
          </div>
        </div>

        <div className="mp-clinic-room">
          <div className="mp-room-desk" />
          <div className="mp-room-cross">✚</div>
          <div className="mp-room-plant" />
        </div>
      </div>

      <div className="mp-service-strip">
        <span>GP consults</span>
        <span>Skin checks</span>
        <span>Children’s health</span>
        <span>Mental health</span>
      </div>

      <div className="mp-preview-bottom">
        <span>Next available: Today 2:30pm</span>
        <button>View availability</button>
      </div>
    </div>
  );
}

function TradePreview() {
  return (
    <div className="mp-preview mp-preview-trade">
      <div className="mp-preview-nav">
        <div className="mp-preview-brand">
          <span>⚡</span>
          <strong>APEX<br />Electrical</strong>
        </div>

        <div className="mp-preview-links">
          <span>Services</span>
          <span>Areas</span>
          <span>Reviews</span>
          <button>Request quote</button>
        </div>
      </div>

      <div className="mp-trade-grid">
        <div>
          <span className="mp-emergency-pill">24/7 emergency service</span>
          <h3>Reliable. Local. Always On.</h3>
          <p>Electrical services for homes and businesses across Brisbane.</p>

          <div className="mp-trade-points">
            <span>Licensed</span>
            <span>Upfront pricing</span>
            <span>Fast response</span>
          </div>
        </div>

        <div className="mp-quote-form-card">
          <strong>Get a fast quote</strong>
          <small>Takes less than 30 seconds</small>

          <div>Select service</div>
          <div>Suburb</div>

          <button>Request my quote</button>
          <small>We will be in touch within 1 hour</small>
        </div>
      </div>

      <div className="mp-trade-bottom">
        <span>Need urgent help?</span>
        <strong>0400 123 456</strong>
      </div>
    </div>
  );
}

function StudioPreview() {
  return (
    <div className="mp-preview mp-preview-studio">
      <div className="mp-preview-nav">
        <div className="mp-studio-logo">
          <strong>LUNA</strong>
          <span>Skin Studio</span>
        </div>

        <div className="mp-preview-links">
          <span>Services</span>
          <span>Products</span>
          <span>FAQs</span>
          <button>Book now</button>
        </div>
      </div>

      <div className="mp-studio-main">
        <div>
          <h3>Healthy skin. Confident you.</h3>
          <p>Advanced skin treatments in a calm, personalised studio environment.</p>

          <div className="mp-preview-actions">
            <button>Book consultation</button>
            <button>Our treatments</button>
          </div>
        </div>

        <div className="mp-studio-room">
          <div className="mp-treatment-bed" />
          <div className="mp-studio-shelf" />
          <div className="mp-studio-arch" />
        </div>
      </div>

      <div className="mp-studio-strip">
        <span>5.0 Google rating</span>
        <span>Premium products</span>
        <span>Expert therapists</span>
        <span>Personalised care</span>
      </div>
    </div>
  );
}

function WebsitePreview({ type }) {
  if (type === 'clinic') return <ClinicPreview />;
  if (type === 'trade') return <TradePreview />;
  return <StudioPreview />;
}

export default function Testimonials() {
  return (
    <section id="testimonial" className="mp-testimonials">
      <div className="mp-testimonial-glow mp-testimonial-glow-one" />
      <div className="mp-testimonial-glow mp-testimonial-glow-two" />

      <div className="mp-testimonial-heading reveal">
        <span className="mp-testimonial-kicker">Client feedback</span>

        <h2>
          What clients <span>actually</span> care about
        </h2>

        <p>
          Clear messaging, faster pages, stronger trust, and enquiry flows that make it easier for customers to take action.
        </p>
      </div>

      <div className="mp-testimonial-list">
        {testimonialCases.map((item, index) => (
          <article
            key={item.name}
            className={`mp-testimonial-card mp-testimonial-card-${item.type} reveal`}
            style={{ '--delay': `${index * 110}ms` }}
          >
            <div className="mp-testimonial-copy">
              <span className="mp-quote-mark">“</span>

              <p>{item.quote}</p>

              <div className="mp-client-line" />

              <div className="mp-client-row">
                <div className={`mp-client-avatar mp-client-avatar-${item.type}`}>
                  <span>{item.avatar}</span>
                </div>

                <div>
                  <strong>{item.name}</strong>
                  <small>{item.role}</small>

                  <em>
                    <span>↗</span>
                    {item.result}
                  </em>
                </div>
              </div>
            </div>

            <div className="mp-preview-wrap">
              <WebsitePreview type={item.type} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}