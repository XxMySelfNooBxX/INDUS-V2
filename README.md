# Indus INC — v2

A complete ground-up rebuild of the Indus INC corporate website. This isn't just a coat of paint — the entire codebase, design language, and feature set are new. The goal was to ditch the typical B2B commodity site look and build something that actually feels premium.

---

## What This Is

Indus INC is a wholesale supplier and exporter of agricultural commodities (founded 2006), and also runs a civil infrastructure division. The website serves both sides of the business, while positioning the brand above the competition visually and functionally.

---

## Pages

| Route | What's on it |
|---|---|
| `/` | Homepage with hero, brand intro, stats, and four division cards |
| `/about` | Company background and story |
| `/products` | Full commodity catalog — paddy, rice, grains, oilseeds, pulses, specialty crops, and spices |
| `/services` | Infrastructure division — dams, irrigation, road construction, supply chain tech |
| `/equipment` | Agriculture machinery with a gallery and dynamic slug pages |
| `/contact` | Contact form with server-side email dispatch |

---

## Features

**Preloader**
GSAP-animated SVG wheat stalk that draws itself on first load, then fades out and reveals the brand name. Runs once per session using `sessionStorage`.

**Particle Canvas**
A full-screen HTML5 Canvas animation lives permanently in the background of the homepage. 120 gold particles drift upward with subtle horizontal drift. Tuned down from 200 for better performance on mid-range devices.

**Custom Cursor**
A two-piece cursor — an instant inner dot and a smoothly lagging outer ring — that expands on hover over interactive elements. Only activates on pointer-capable devices, so it won't interfere on touch screens.

**Scroll Reveal**
Custom `useScrollReveal` hook built on `IntersectionObserver`. Sections fade and slide in as you scroll down. No third-party animation library needed for this.

**Products Catalog**
Seven product categories in an alternating broken-grid layout. Each product has a name, short description, extended description, technical specs, and a differentiator — surfaced through a `VarietyCard` component that expands inline.

**Services (Asymmetric Grid)**
Each service alternates image-left / text-right with a grayscale-to-color hover reveal on images. CTA at the bottom opens an `InquiryModal`.

**Equipment Gallery**
Dynamic slug-based routing for individual equipment pages via `[slug]`, plus a shared `EquipmentGallery` component.

**Contact Form**
Full client-side validation. On submit, fires a Next.js Server Action that dispatches the email via **Resend**. Includes a custom `CountrySelect` component for international dialing codes.

---

## Tech Stack

- **Framework:** Next.js 16 (App Router) with React 19
- **Styling:** Tailwind CSS v4
- **Animations:** GSAP (preloader timeline), Framer Motion, Lenis (smooth scroll)
- **Icons:** Lucide React
- **Email:** Resend (via Server Actions)
- **Fonts:** Playfair Display, Inter, JetBrains Mono — all loaded via `next/font/google`
- **Language:** TypeScript

---

## Design System

Three-color palette: Obsidian black background, Champagne gold (`#D4AF37`) as the accent, Alabaster for body text. All referenced as Tailwind theme tokens.

Typography hierarchy: `font-serif` (Playfair Display) for headings, `font-sans` (Inter) for body, `font-mono` (JetBrains Mono) for labels and UI tags.

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The contact form needs a Resend API key. Create a `.env.local` at the root:

```
RESEND_API_KEY=your_key_here
```

---

## Project Structure

```
src/
├── app/
│   ├── about/
│   ├── actions/        # Server Actions (contact form → Resend)
│   ├── contact/
│   ├── equipment/
│   │   └── [slug]/     # Dynamic equipment detail pages
│   ├── products/
│   ├── services/
│   ├── globals.css
│   ├── layout.tsx      # Root layout: Preloader, Nav, Footer, CustomCursor
│   └── page.tsx        # Homepage
├── components/
│   ├── ContactForm.tsx
│   ├── CountrySelect.tsx
│   ├── CustomCursor.tsx
│   ├── EquipmentGallery.tsx
│   ├── Footer.tsx
│   ├── HeroCanvas.tsx
│   ├── InquiryModal.tsx
│   ├── Navigation.tsx
│   ├── Preloader.tsx
│   └── VarietyCard.tsx
├── hooks/
│   └── useScrollReveal.ts
├── data/
└── lib/
```
