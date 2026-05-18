# Agentic — Landing Page

AI automation consulting landing page for Agentic, built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and shadcn/ui.

## Stack

- **Framework**: Next.js 16 App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui (base-ui)
- **Animation**: Framer Motion
- **i18n**: next-intl
- **Deployment**: Vercel

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

French version is available at [http://localhost:3000/fr](http://localhost:3000/fr).

## Project Structure

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx       # Locale layout with SEO metadata
│   │   └── page.tsx         # Main landing page
│   ├── globals.css
│   └── layout.tsx           # Root layout (minimal)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Credibility.tsx
│   │   ├── Problem.tsx
│   │   ├── Solution.tsx
│   │   ├── CaseStudy.tsx
│   │   ├── Benefits.tsx
│   │   ├── Process.tsx
│   │   ├── Founders.tsx
│   │   ├── FAQ.tsx
│   │   └── FinalCTA.tsx
│   └── ui/
│       ├── SectionWrapper.tsx
│       ├── AnimatedCard.tsx
│       ├── GradientSeparator.tsx
│       └── FounderCard.tsx
├── i18n/
│   ├── routing.ts
│   └── request.ts
└── middleware.ts             # next-intl locale routing

messages/
├── en.json                  # English copy
└── fr.json                  # French copy
```

## Editing Copy

All site copy lives in `messages/en.json` and `messages/fr.json`. No copy is hardcoded inside components. Edit those files to update any text on the site.

## Adding a Language

1. Add the locale to `src/i18n/routing.ts`
2. Create `messages/<locale>.json` with all keys from `en.json`
3. The middleware will handle routing automatically

## Deployment

### Vercel (recommended)

1. Push this repository to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Vercel will detect Next.js automatically
4. No environment variables are required by default

Optional: set `NEXT_PUBLIC_SITE_URL` to your production domain for correct Open Graph URLs.

### Manual

```bash
npm run build
npm start
```

## Environment Variables

See `.env.example`. No secrets are required for production.

## Contact

Primary CTA target: `adrien@vdbranden.com`
