# Appovex — Next.js Website

A production-ready Next.js 14 website for Appovex, built with Tailwind CSS, Framer Motion, and TypeScript.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Syne (headlines) + Manrope (body) via `next/font/google`
- **Language:** TypeScript

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

---

## Project Structure

```
appovex/
├── app/
│   ├── globals.css          # Global styles + Tailwind directives
│   ├── layout.tsx           # Root layout — fonts, metadata
│   ├── page.tsx             # Homepage
│   ├── not-found.tsx        # 404 page
│   ├── about/
│   │   └── page.tsx         # About page
│   ├── services/
│   │   └── page.tsx         # Services overview
│   ├── start/
│   │   └── page.tsx         # Launch Your Project (lead capture form)
│   └── work/
│       └── page.tsx         # Portfolio / case studies
│
├── components/
│   ├── Navbar.tsx           # Sticky nav with mobile menu
│   ├── Hero.tsx             # Hero section with animated entrance
│   ├── Ticker.tsx           # Scrolling services ticker
│   ├── Advantage.tsx        # "Startup Advantage" section
│   ├── Services.tsx         # Four service pillars grid
│   ├── Global.tsx           # Global-first section
│   ├── Process.tsx          # 4-step process (dark bg)
│   ├── CTA.tsx              # Email capture CTA section
│   └── Footer.tsx           # Footer with links
│
├── tailwind.config.ts       # Custom colors, fonts, animations
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## Customisation Guide

### Colors
Edit `tailwind.config.ts` to change brand colors:
```ts
colors: {
  electric: {
    DEFAULT: '#5B4FE9',   // Primary accent — change this to your brand color
    dark: '#3D33C4',
    light: '#EAE8FD',
  },
  ...
}
```

### Fonts
Change fonts in `app/layout.tsx` — import any Google Font via `next/font/google` and update the CSS variables in `tailwind.config.ts`.

### Content
All page copy is written directly in the component files. For a CMS-backed version, connect [Sanity.io](https://sanity.io) or [Contentful](https://contentful.com) and replace the static arrays with fetch calls.

### Form Submission
The forms in `components/CTA.tsx` and `app/start/page.tsx` currently use local state. To connect to a real backend:

1. **Formspree** — simplest, no backend needed:
   ```tsx
   <form action="https://formspree.io/f/YOUR_ID" method="POST">
   ```

2. **Resend + API route** — add `app/api/contact/route.ts` and call it from the form.

3. **Tally.so / Typeform** — embed or redirect to an external form tool.

---

## Deployment

### Vercel (recommended)
```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deploys.

### Other platforms
Any Node.js host works: Railway, Render, Fly.io, or a standard VPS with `npm run build && npm start`.

---

## Adding New Pages

1. Create a folder under `app/` — e.g. `app/blog/`
2. Add a `page.tsx` file inside it
3. Import `Navbar` and `Footer` from `@/components`
4. The route is automatically available at `/blog`

---

Built by Appovex · [appovex.com](https://appovex.com)
