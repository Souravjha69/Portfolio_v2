<div align="center">

# ⚡ Sourav Kumar Jha — Portfolio

### AI Engineer & Full Stack Developer

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://gsap.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

<br />

**[🌐 Live Demo](https://souravkumarjha.vercel.app)** &nbsp;·&nbsp; **[📄 Resume](https://souravkumarjha.vercel.app/#resume)** &nbsp;·&nbsp; **[📬 Contact](https://souravkumarjha.vercel.app/contact)**

<br />

![Portfolio Preview](public/hero-poster.jpg)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Setup](#-environment-setup)
- [Pages](#-pages)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [Performance](#-performance)
- [Contact](#-contact)

---

## 🎯 Overview

A cinematic, dark-themed personal portfolio built with **Next.js 14 App Router**. Features a full-screen NYC video hero, GSAP-powered scroll animations, smooth page transitions with Framer Motion, and a complete resume section — all in a fully responsive single codebase.

Built to showcase my work as an **AI Engineer and Full Stack Developer** with production experience in LLM integration, MERN stack development, and scalable backend systems.

---

## ✨ Features

- 🎬 **Cinematic Video Hero** — Full-screen NYC background video with letterbox animation, gradient overlays, film grain & scanline effects
- 🌙 **Dark Theme** — Consistent deep black (`#080808`) design system across all pages
- ⚡ **GSAP Animations** — Scroll-triggered reveal animations that play forward and reverse
- 🔄 **Page Transitions** — Smooth black wipe transitions between routes via Framer Motion
- 🖱️ **Custom Cursor** — Smooth-following custom cursor with hover scale effects
- 📱 **Fully Responsive** — Mobile-first design, works on all screen sizes
- 📄 **Resume Section** — PDF-style resume card with browser print-to-PDF download
- 🗺️ **Interactive Map** — SVG world map with animated Philadelphia location pin
- 📅 **Availability Calendar** — Live weekly availability grid
- ❓ **FAQ Accordion** — Animated expand/collapse FAQ section
- 🔍 **Work Filter** — Client-side project filtering by category (AI/LLM, Backend, Full Stack)
- 🎨 **Gradient Accents** — Blue→Violet gradient used consistently on titles and hover states
- ⌨️ **Typing Effect** — Code lines type out character-by-character in the about section

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 3.4 |
| **Animations** | GSAP 3.12 + ScrollTrigger |
| **Transitions** | Framer Motion 11 |
| **Fonts** | Syne (headings) + Space Grotesk (body) via `next/font` |
| **Video CDN** | Vimeo (background=1 embed) |
| **Deployment** | Vercel |
| **Package Manager** | npm |

---

## 📁 Project Structure

```
sourav-portfolio/
│
├── public/
│   ├── hero-poster.jpg          # Video placeholder image (shown before video loads)
│   └── Sourav.jpg               # Profile photo
│
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout — fonts, navbar, page transitions
│   │   ├── page.tsx             # Home page
│   │   ├── about/
│   │   │   └── page.tsx         # About / Story page
│   │   ├── work/
│   │   │   └── page.tsx         # Projects page with filter
│   │   └── contact/
│   │       └── page.tsx         # Contact page
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   └── Navbar.tsx       # Fixed navbar with scroll detection
│   │   ├── sections/
│   │   │   ├── Hero.tsx         # Cinematic video hero section
│   │   │   └── HomeSections.tsx # All other home page sections
│   │   └── ui/
│   │       ├── Cursor.tsx       # Custom cursor component
│   │       └── PageTransition.tsx # Framer Motion page wipe
│   │
│   ├── hooks/
│   │   └── useGSAP.ts           # Reusable GSAP scroll reveal hook
│   │
│   ├── lib/
│   │   └── data.ts              # ← ALL CONTENT LIVES HERE (edit this)
│   │
│   └── styles/
│       └── globals.css          # Global styles, CSS variables, custom classes
│
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** v18 or higher → [nodejs.org](https://nodejs.org)
- **npm** v9 or higher (comes with Node.js)
- **Git** → [git-scm.com](https://git-scm.com)

Verify your versions:

```bash
node --version   # v18.0.0 or higher
npm --version    # 9.0.0 or higher
git --version    # any recent version
```

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/souravkumarjha/portfolio.git
cd portfolio
```

**2. Install dependencies**

```bash
npm install
```

**3. Run the development server**

```bash
npm run dev
```

**4. Open in browser**

```
http://localhost:3000
```

---

## 🔧 Environment Setup

This project has **no required environment variables** for local development.

For the video background, the hero uses a Vimeo embed. If you want to use your own video:

1. Upload your video to [vimeo.com](https://vimeo.com)
2. Get your Vimeo video ID (e.g. `1201312328`)
3. Open `src/components/sections/Hero.tsx`
4. Replace the video ID in the iframe src:

```tsx
// Find this line and replace the ID
src="https://player.vimeo.com/video/YOUR_VIDEO_ID?autoplay=1&muted=1&loop=1&background=1"
```

---

## 📄 Pages

### 🏠 Home (`/`)
Full landing page with:
- Cinematic video hero with letterbox animation
- AI specialization strip (LLM Integration, Drexel M.S., MERN+AI)
- Tech stack marquee ticker
- About section with animated code typing effect
- Project grid (4 projects)
- Stats counters (animated on scroll)
- Experience cards with gradient accent on hover
- Skills grid (4 categories)
- Services grid (6 services)
- Education cards (3 institutions)
- Testimonials
- Resume section (PDF-style, print-to-download)
- CTA strip

### 📖 About (`/about`)
- Large cinematic page hero
- Professional timeline (2021 → 2025)
- Values grid (Engineering First, AI That Works, Bridge Builder)

### 💼 Work (`/work`)
- Filterable project list
- Filter by: All / AI-LLM / Backend / Full Stack
- Each project shows full description, tech stack, year

### 📬 Contact (`/contact`)
- Contact info cards (email, location, phone, status)
- Full contact form (name, email, company, project type, budget, timeline, message)
- SVG world map with animated Philadelphia pin
- Weekly availability grid
- FAQ accordion (5 questions)
- Social links (LinkedIn, GitHub, Email)

---

## ✏️ Customization

### Updating Your Content

All content is in **one single file**: `src/lib/data.ts`

```typescript
// Update personal info
export const personal = {
  name: 'Your Name',
  title: 'Your Title',
  email: 'your@email.com',
  phone: '+1 xxx-xxx-xxxx',
  linkedin: 'https://linkedin.com/in/yourprofile',
  github: 'https://github.com/yourusername',
  location: 'Your City, State',
  status: 'Open to work',
}

// Add/edit projects
export const projects = [
  {
    id: '01',
    title: 'Your Project',
    description: 'Short description',
    tags: ['React', 'Node.js'],
    category: ['fullstack'],
    year: '2024',
    // ...
  }
]
```

Save the file — changes reflect instantly across all pages.

### Changing Theme Colors

Edit CSS variables in `src/styles/globals.css`:

```css
:root {
  --bg: #080808;       /* Main background — change for different dark shade */
  --blue: #4F8EF7;     /* Primary accent color */
  --violet: #A78BFA;   /* Secondary accent color */
  --green: #34D399;    /* Success / available status */
  --amber: #FBBF24;    /* Star ratings */
}
```

### Adding Your Photo

Replace the emoji placeholder in `src/components/sections/HomeSections.tsx`:

```tsx
// Find this line in the About section
<span className="text-8xl relative z-10">👨‍💻</span>

// Replace with your image
import Image from 'next/image'
<Image src="/Sourav.jpg" alt="Sourav Kumar Jha" fill className="object-cover" />
```

Place your photo at `public/Sourav.jpg`.

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

**Option 1 — Via Vercel Dashboard (Easiest)**

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repository
4. Click **Deploy** — Vercel auto-detects Next.js
5. Your site is live in ~2 minutes ✅

**Option 2 — Via Vercel CLI**

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow the prompts, then deploy to production
vercel --prod
```

### Build for Production Locally

```bash
# Create production build
npm run build

# Start production server
npm start
```

### Other Platforms

| Platform | Command | Notes |
|----------|---------|-------|
| **Vercel** | Auto-deploy via GitHub | Recommended |
| **Netlify** | `npm run build` → deploy `/out` | Add `output: 'export'` to next.config |
| **Railway** | Connect GitHub repo | Set start command to `npm start` |
| **DigitalOcean** | App Platform → GitHub | Node.js 18, build: `npm run build` |

---

## ⚡ Performance

### Optimizations Included

- ✅ `next/font` — fonts loaded at build time, zero layout shift
- ✅ GSAP loaded dynamically (client-side only) — no SSR overhead
- ✅ Framer Motion only runs on client — no hydration mismatch
- ✅ Video hosted on Vimeo CDN — never in the Git repo
- ✅ `poster` image shows instantly before video loads
- ✅ `preload="auto"` on video for fast start
- ✅ `playsInline` for iOS support
- ✅ Tailwind CSS purges unused styles at build time

### Lighthouse Scores (approximate)

| Metric | Score |
|--------|-------|
| Performance | 90+ |
| Accessibility | 95+ |
| Best Practices | 100 |
| SEO | 100 |

---

## 📊 Scripts

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Create optimized production build
npm start        # Start production server
npm run lint     # Run ESLint
```

---

## 🤝 Contributing

This is a personal portfolio — not open for general contributions. However if you find a bug or have a suggestion:

1. Open an **Issue** describing the problem
2. I'll review and respond as soon as possible

---

## 📜 License

```
MIT License

Copyright (c) 2025 Sourav Kumar Jha

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 📬 Contact

**Sourav Kumar Jha**

[![Email](https://img.shields.io/badge/Email-souravkumarjha301%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:souravkumarjha301@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-souravkumarjha-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/souravkumarjha)
[![GitHub](https://img.shields.io/badge/GitHub-souravkumarjha-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/souravkumarjha)

---

<div align="center">

**Built with ❤️ using Next.js, GSAP, Tailwind CSS & Framer Motion**

⭐ Star this repo if you found it helpful!

</div>
