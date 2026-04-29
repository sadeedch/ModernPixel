import './globals.css';

export const metadata = {
  title: 'ModernPixel Digital',
  description:
    'Premium websites, SaaS UI, SEO foundations, and digital growth systems for Australian businesses.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
