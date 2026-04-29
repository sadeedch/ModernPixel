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
  return (
    <main className="mp-site">
      <SiteEffects />
      <Hero />
      <Services />
      <About />
      <CrossMarquee />
      <Work />
      <Testimonials />
      <ContactFaq />
      <Footer />
    </main>
  );
}
