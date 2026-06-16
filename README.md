# CreditU Technologies — Website

A modern, fully responsive marketing website for **CreditU Technologies Pvt Ltd**, inspired by [fibe.in](https://www.fibe.in/).

Built with **Next.js 14 (App Router) + TypeScript + Tailwind CSS** with a Fibe-style purple gradient theme.

## Sections

- Sticky **Header** with CreditU logo
- **Hero** with live EMI calculator card
- **Trust Bar** (RBI / ISO / PCI-DSS / SOC 2)
- **Products**: Instant Cash, Personal, EMI Card, Business, Education, LAP
- **How It Works** (4 steps)
- **Digital KYC / VKYC** (HyperVerge-powered)
- **Why Choose Us**, **Stats**, **Testimonials**, **Partners**
- **About**, **FAQ**, **Contact** form, **CTA**
- Comprehensive **Footer** with disclaimers, socials & legal links

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Run dev server (http://localhost:3000)
npm run dev

# 3. Production build
npm run build
npm run start
```

## Project structure

```
creditu-website/
├── app/
│   ├── globals.css       # Tailwind base + brand tokens
│   ├── layout.tsx        # Root layout, SEO metadata
│   └── page.tsx          # Home page composition
├── components/           # All UI sections
│   ├── Header.tsx
│   ├── Logo.tsx
│   ├── Hero.tsx
│   ├── TrustBar.tsx
│   ├── Products.tsx
│   ├── HowItWorks.tsx
│   ├── KYCSection.tsx
│   ├── WhyChooseUs.tsx
│   ├── Stats.tsx
│   ├── Testimonials.tsx
│   ├── Partners.tsx
│   ├── About.tsx
│   ├── FAQ.tsx
│   ├── Contact.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
├── public/
│   └── logo.svg          # CreditU brand logo
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## Brand tokens

Defined in `tailwind.config.ts`:

| Token              | Value     | Usage                       |
| ------------------ | --------- | --------------------------- |
| `brand-600`        | `#6e3aff` | Primary purple (Fibe-like)  |
| `accent-navy`      | `#0b3c6d` | CreditU logo navy           |
| `accent-green`     | `#12a24a` | CreditU logo green          |
| `accent-gold`      | `#f9be1a` | CreditU logo gold           |

## Deployment

Deploy on **Vercel** (zero-config):

```bash
npx vercel --prod
```

Or use the bundled `vercel-deploy` skill.
