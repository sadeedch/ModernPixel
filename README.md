# ModernPixel Pixgro Inspired Website

A modular Next.js landing page for ModernPixel.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Structure

```txt
app/
  globals.css
  layout.jsx
  page.jsx
components/
  effects/SiteEffects.jsx
  layout/Footer.jsx
  sections/
    About.jsx
    ContactFaq.jsx
    CrossMarquee.jsx
    Hero.jsx
    Services.jsx
    Testimonials.jsx
    Work.jsx
  visuals/HeroArtwork.jsx
data/siteData.js
```

For most text changes, edit `data/siteData.js`.
For section markup, edit the matching file inside `components/sections`.
For animations and styling, edit `app/globals.css`.
