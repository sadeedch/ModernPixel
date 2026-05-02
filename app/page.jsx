import SiteEffects from '@/components/effects/SiteEffects';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import CrossMarquee from '@/components/sections/CrossMarquee';
import Work from '@/components/sections/Work';
import Testimonials from '@/components/sections/Testimonials';
import ContactFaq from '@/components/sections/ContactFaq';
import Footer from '@/components/layout/Footer';

export default function HomePage() {

  const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'ModernPixel',
  url: 'https://www.modernpixel.com.au',
  logo: 'https://www.modernpixel.com.au/logo.png',
  image: 'https://www.modernpixel.com.au/og-modernpixel.jpg',
  description:
    'ModernPixel builds premium websites, Next.js landing pages, SaaS UI, SEO foundations, and digital growth systems for businesses in Brisbane and across Australia.',
  telephone: '+61450237005',
  email: 'contact@modernpixel.com.au',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Brisbane',
    addressRegion: 'QLD',
    addressCountry: 'AU',
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Brisbane',
    },
    {
      '@type': 'Country',
      name: 'Australia',
    },
  ],
  priceRange: '$$',
  sameAs: [
    'https://www.linkedin.com/company/modernpixel'
  ],
  serviceType: [
    'Web Design',
    'Next.js Website Development',
    'React Development',
    'SEO Website Design',
    'SaaS UI Design',
    'Landing Page Design',
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where is ModernPixel based?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ModernPixel is based in Brisbane, Australia, and works with businesses across Australia.',
      },
    },
    {
      '@type': 'Question',
      name: 'What type of websites does ModernPixel build?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ModernPixel builds premium business websites, landing pages, clinic websites, booking-focused websites, SaaS interfaces, and SEO-ready Next.js websites.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can ModernPixel build websites in Next.js?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. ModernPixel builds modern websites using Next.js, React, Tailwind, SEO metadata, responsive layouts, and clean deployment workflows.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does ModernPixel include SEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ModernPixel includes technical SEO foundations such as page structure, metadata, headings, responsive layout, performance checks, and content hierarchy.',
      },
    },
  ],
};
  return (

    <>
      <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(localBusinessSchema),
    }}
  />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(faqSchema),
    }}
  />
    <main className="mp-site">
      <SiteEffects />
      <Hero />
      <Services />
      <br/><br/>
      <About />
      <CrossMarquee />
      <Work />
      <Testimonials />
      <ContactFaq />
      <Footer />
    </main>
    </>
  );
}
