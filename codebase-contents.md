# indus-v2 Codebase

## package.json
```json
{
  "name": "indus-v2",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "framer-motion": "^12.40.0",
    "gsap": "^3.15.0",
    "lenis": "^1.3.23",
    "lucide-react": "^1.17.0",
    "next": "16.2.7",
    "react": "19.2.4",
    "react-dom": "19.2.4"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.2.7",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

## tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}
```

## postcss.config.mjs
```javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

## next.config.ts
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
```

## eslint.config.mjs
```javascript
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
```

## AGENTS.md
```markdown
<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
```

## CLAUDE.md
```markdown
@AGENTS.md
```

## README.md
```markdown
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
```

## next-env.d.ts
```typescript
/// <reference types="next" />
/// <reference types="next/image-types/global" />
import "./.next/types/routes.d.ts";

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.
```

## src/src/app/globals.css
```css
@import "tailwindcss";

/* 
  TAILWIND V4 THEME CONFIGURATION 
  This defines our luxury design tokens 
*/
@theme {
  /* Custom Colors */
  --color-obsidian: #08090A;
  --color-obsidian-2: #0f1113;
  --color-alabaster: #F4F1EA;
  --color-champagne: #D4AF37;
  --color-olive: #2A3B24;
  --color-dim: #5a5a5a;

  /* Custom Fonts (Mapped to next/font variables in layout.tsx) */
  --font-serif: var(--font-cinzel), serif;
  --font-sans: var(--font-inter), sans-serif;
  --font-mono: var(--font-jetbrains), monospace;
}

/* Base Styles */
body {
  background-color: var(--color-obsidian);
  color: var(--color-alabaster);
  font-family: var(--font-sans);
  font-weight: 300;
  letter-spacing: 0.01em;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

::selection {
  background-color: var(--color-champagne);
  color: var(--color-obsidian);
}

/* Film Grain Overlay (Cinematic Texture) */
body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  opacity: 0.05;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

/* Cinematic Vignette (Darkened Edges) */
body::after {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9998;
  background: radial-gradient(ellipse at center, transparent 40%, rgba(0, 0, 0, 0.6) 100%);
}

/* Hide scrollbar but keep functionality for a cleaner luxury feel */
::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
```

## src/src/app/layout.tsx
```tsx
import type { Metadata } from "next";
import { Cinzel, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";

const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel", weight: ["400", "500", "600", "700"], display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", weight: ["400", "500"], display: "swap" });

export const metadata: Metadata = {
    title: "Indus INC | Cultivating Permanence",
    description: "Premium Wholesale Agricultural Products & Grains.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={`${cinzel.variable} ${inter.variable} ${jetbrains.variable}`}>
            <body>
                <Preloader />
                <SmoothScroll />
                {children}
            </body>
        </html>
    );
}
```

## src/src/app/page.tsx
```tsx
"use client";
import { useEffect } from "react";
import gsap from "gsap";

export default function Home() {
    useEffect(() => {
        // Wait for preloader to finish (approx 3.5s), then reveal hero text
        const tl = gsap.timeline({ delay: 3.5 });
        tl.fromTo(".hero-text",
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.5, stagger: 0.2, ease: "power3.out" }
        );
    }, []);

    return (
        <main className="relative">
            {/* Hero Section */}
            <section className="h-screen flex flex-col items-center justify-center text-center px-6 relative z-10">
                <p className="hero-text font-mono text-[11px] tracking-[0.4em] text-champagne uppercase mb-6 opacity-0">
                    Premium Agricultural Export
                </p>
                <h1 className="hero-text font-serif text-[clamp(3rem,10vw,10rem)] font-medium leading-[0.9] tracking-[0.02em] opacity-0">
                    INDUS INC
                </h1>
                <p className="hero-text mt-8 text-sm tracking-[0.25em] uppercase text-alabaster/70 opacity-0">
                    Cultivating <span className="text-champagne">Permanence</span>
                </p>
            </section>

            {/* Spacer sections to test the smooth scroll weight */}
            <section className="h-[100vh] bg-olive/20 flex items-center justify-center border-t border-champagne/10">
                <h2 className="font-serif text-4xl text-alabaster/50">Scroll Engine Active...</h2>
            </section>

            <section className="h-[100vh] flex items-center justify-center border-t border-champagne/10">
                <h2 className="font-serif text-4xl text-alabaster/50">Ready for Phase 3</h2>
            </section>
        </main>
    );
}
```

## src/src/components/Preloader.tsx
```tsx
"use client";
import { useEffect, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => setIsVisible(false), // Remove from DOM when done
        });

        // Draw the wheat stalk
        tl.to(".stalk", { strokeDashoffset: 0, duration: 1.2, ease: "power2.inOut" })
            .to(".leaf1", { strokeDashoffset: 0, duration: 0.6 }, "-=0.4")
            .to(".leaf2", { strokeDashoffset: 0, duration: 0.6 }, "-=0.4")
            .to(".leaf3", { strokeDashoffset: 0, duration: 0.6 }, "-=0.4")
            .to(".grain", { opacity: 1, duration: 0.4 }, "-=0.2")
            .to(".year", { opacity: 1, duration: 0.5 }, "-=0.2")
            // Fade out the whole preloader
            .to(".preloader-container", { opacity: 0, duration: 0.8, delay: 0.5 });
    }, []);

    if (!isVisible) return null;

    return (
        <div className="preloader-container fixed inset-0 bg-obsidian z-[10000] flex flex-col items-center justify-center gap-8">
            <svg viewBox="0 0 80 120" fill="none" stroke="#D4AF37" strokeWidth="1" className="w-20 h-32">
                <path className="stalk" d="M40 120 L40 30" strokeDasharray="100" strokeDashoffset="100" />
                <path className="leaf1" d="M40 80 Q20 75 15 60" strokeDasharray="50" strokeDashoffset="50" />
                <path className="leaf2" d="M40 65 Q60 60 65 45" strokeDasharray="50" strokeDashoffset="50" />
                <path className="leaf3" d="M40 50 Q25 45 20 30" strokeDasharray="50" strokeDashoffset="50" />
                <circle className="grain" cx="40" cy="20" r="3" fill="#D4AF37" opacity="0" />
            </svg>
            <div className="year font-mono text-xs text-champagne tracking-[0.3em] opacity-0">
                EST · 2006
            </div>
        </div>
    );
}
```

## src/src/components/SmoothScroll.tsx
```tsx
"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => { lenis.destroy(); };
    }, []);

    return null;
}
```
