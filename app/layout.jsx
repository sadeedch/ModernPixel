import './globals.css';

const siteUrl = 'https://www.modernpixel.com.au';

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'ModernPixel | Web Design & Next.js Websites Brisbane',
    template: '%s | ModernPixel',
  },

  description:
    'ModernPixel builds premium websites, Next.js landing pages, SaaS UI, SEO foundations, and digital growth systems for businesses in Brisbane and across Australia.',

  applicationName: 'ModernPixel',
  authors: [{ name: 'ModernPixel' }],
  creator: 'ModernPixel',
  publisher: 'ModernPixel',

  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: 'ModernPixel | Web Design & Next.js Websites Brisbane',
    description:
      'Premium websites, SaaS interfaces, SEO-ready landing pages, and digital growth systems for Australian businesses.',
    url: '/',
    siteName: 'ModernPixel',
    locale: 'en_AU',
    type: 'website',
    images: [
      {
        url: '/og-modernpixel.jpg',
        width: 1200,
        height: 630,
        alt: 'ModernPixel web design agency in Brisbane',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'ModernPixel | Web Design & Next.js Websites Brisbane',
    description:
      'Premium websites, SaaS UI, SEO foundations, and conversion-focused digital experiences for Australian businesses.',
    images: ['/og-modernpixel.jpg'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU">
      <body>{children}</body>
    </html>
  );
}