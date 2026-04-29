export default function robots() {
  const baseUrl = 'https://www.modernpixel.com.au';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}