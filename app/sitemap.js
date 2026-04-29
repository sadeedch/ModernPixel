export default function sitemap() {
  const baseUrl = 'https://www.modernpixel.com.au';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}