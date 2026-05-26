# Architecture — aiteam Landing Page

## 1. Overview

Single-page SaaS-style landing page for **aiteam**, an AI-powered platform that automatically builds software via Telegram.

## 2. Tech Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | **Next.js 14+ (App Router)** | SSR/SSG, file-based routing, built-in image optimisation |
| Language | **TypeScript** | Type safety across all components |
| Styling | **Tailwind CSS** | Utility-first, matches design spec colour palette directly |
| Animations | **Framer Motion** | Scroll-reveal, hover effects, hero gradient pulse |
| Deployment | **Vercel** | Zero-config Next.js hosting, edge network |

No backend is required for this project.

## 3. Folder Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout: metadata, fonts, dark body
│   │   ├── page.tsx            # Single page: imports all sections
│   │   └── globals.css         # Body bg/text, smooth scroll, CSS vars
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── Pipeline.tsx
│   │   ├── AIAgents.tsx
│   │   ├── Features.tsx
│   │   ├── TechStack.tsx
│   │   ├── FinalCTA.tsx
│   │   ├── Footer.tsx
│   │   └── ui/                 # Shared primitives: Button, Card, Badge, Container
│   └── types/
│       └── index.ts            # Shared TypeScript types if needed
├── public/
│   └── (static assets)
├── tailwind.config.ts
└── next.config.ts
docs/
└── architecture.md
README.md
```

Rules:
- One component per file, named after the section or the shared primitive.
- No barrel/index re-export files.
- Max ~200 lines per file; extract helpers when it grows beyond ~40 lines.

## 4. Design Decisions

### Colours (defined in Tailwind config)

| Token | Hex | Usage |
|-------|-----|-------|
| `bg-primary` | `#0B1121` | Page background |
| `accent` | `#3B82F6` | CTAs, highlights, glow effects |
| `card-bg` | `#1E2938` | Card surfaces |
| `muted` | `#94A3B8` | Secondary text, icons |
| `heading` | `#F8FAFC` | Primary text, headings |

### Dark Mode

- **Dark mode only** — no light mode toggle.
- `globals.css` sets `body` background to `#0B1121` and text to `#F8FAFC`.
- Tailwind `darkMode: 'class'` not needed; all utility classes target dark by default.

### Typography

- Google Font: **Inter** (loaded via `next/font/google`).
- Loaded in `app/layout.tsx` with `subsets: ['latin']`.
- Scale: `text-5xl` → `text-3xl` (hero headline), responsive down to mobile.

### Responsive Strategy

- **Mobile-first** — build for 320 px first, enhance upward.
- Breakpoints: `sm` (640), `md` (768), `lg` (1024).
- Pipeline timeline: vertical on mobile, horizontal on desktop.
- AI Agents grid: 1-col mobile, 2×2 desktop.
- Features grid: 1-col mobile, 3×2 desktop.

### Section Scroll

- Single-page scroll with anchor IDs on each section.
- `scroll-behavior: smooth` in `globals.css`.
- "Xem cách hoạt động" CTA smooth-scrolls to `#pipeline`.

## 5. Key Components

| Component | Responsibility |
|-----------|---------------|
| `Container` | Max-width wrapper, responsive padding |
| `Button` | Primary/secondary variants with hover glow |
| `Card` | Dark surface (`card-bg`) with light border and optional hover glow |
| `Badge` | Tech stack badges (icon + label) |
| `Hero` | Full-viewport intro with gradient overlay and dual CTAs |
| `Pipeline` | 5-step timeline; horizontal desktop, vertical mobile |
| `AIAgents` | 2×2 grid of agent cards with outline icons |
| `Features` | 3×2 icon grid |
| `TechStack` | Centred icon-badge row |
| `FinalCTA` | Conversion block with Telegram CTA |
| `Footer` | Logo, links, copyright |

## 6. Naming Conventions

- Components: **PascalCase** (`Hero.tsx`, `AIAgents.tsx`)
- CSS classes: **Tailwind utility names** — no custom class names unless Tailwind can't express it
- File names: **kebab-case** for non-component files (`globals.css`, `tailwind.config.ts`)
- Section IDs: **kebab-case** matching the section name (`#pipeline`, `#ai-agents`, `#features`)

## 7. Environment Variables

No backend env vars needed. For deployment:

| Variable | Value | Where |
|----------|-------|-------|
| `NEXT_PUBLIC_TELEGRAM_URL` | Telegram bot link | `.env.local`, used in CTA buttons |

## 8. Performance & Accessibility

- Lighthouse ≥ 90 on Performance, Accessibility, Best Practices.
- Semantic HTML (`<section>`, `<h1>`–`<h3>`, `<nav>`, `<footer>`).
- All interactive elements keyboard-navigable.
- Sufficient colour contrast (muted text on dark bg meets WCAG AA).
- `will-change` applied only to animated elements (hero gradient).
- Framer Motion animations use `useInView` or `whileInView` for off-screen sections.
