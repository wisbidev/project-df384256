# Software Requirements Specification — aiteam Landing Page

## 1. Overview

Single-page SaaS-style landing page for **aiteam**, an AI-powered platform that automatically builds software via Telegram. The page introduces the product, explains how it works, showcases the 4 AI agents, lists key features and tech stack, and drives users to start via Telegram.

**Core constraint:** Dark-mode only, mobile-first responsive, built with Next.js 14+ and Tailwind CSS.

---

## 2. Design

Design: see attached spec

**Design spec reference:**
- Colors: `#0B1121` (bg), `#3B82F6` (accent), `#1E2938` (card), `#94A3B8` (muted), `#F8FAFC` (heading)
- Pages: Single-page scroll — Hero, Pipeline, AI Agents, Features, Tech Stack, Final CTA, Footer

---

## 3. Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14+ (App Router) |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Language | TypeScript |
| Deployment | (TBD — Vercel recommended) |

---

## 4. Functional Requirements

### 4.1 Project setup & global layout

Initialize a Next.js 14+ project with the App Router pattern, Tailwind CSS, and global dark-mode configuration.

**Acceptance criteria:**
- [ ] Next.js project initialised with `create-next-app`, TypeScript + Tailwind
- [ ] `tailwind.config.ts` configured with the approved color palette:
  - `bg-primary`: `#0B1121`
  - `accent`: `#3B82F6`
  - `card-bg`: `#1E2938`
  - `muted`: `#94A3B8`
  - `heading`: `#F8FAFC`
- [ ] `globals.css` sets body background to `#0B1121`, text to `#F8FAFC`, default dark mode (no light mode toggle)
- [ ] Root layout (`app/layout.tsx`) includes Vietnamese metadata (`lang="vi"`, title, description)
- [ ] Responsive container wrapper set up with max-width breakpoints
- [ ] Google Fonts (Inter or similar) loaded for modern typography
- [ ] No content sections built yet — only layout shell

---

### 4.2 Hero section

Full-viewport hero section introducing the product.

**Acceptance criteria:**
- [ ] Headline: **"AI Team. Không cần thuê dev."** — large, bold, centred
- [ ] Subheadline: 1–2 sentence explanation of the value proposition
- [ ] Primary CTA button: **"Bắt đầu ngay"** — links to Telegram
- [ ] Secondary CTA button: **"Xem cách hoạt động"** — smooth-scrolls to Pipeline section
- [ ] Background: dark (`#0B1121`) with a blue gradient overlay (`#3B82F6`) — subtle, not overwhelming
- [ ] Full viewport height (`min-h-screen`)
- [ ] Content vertically + horizontally centred
- [ ] Responsive: typography scales down on mobile

---

### 4.3 Pipeline / How It Works section

Step-by-step timeline showing the 5-step automated flow.

**Acceptance criteria:**
- [ ] Section title: **"Từ ý tưởng đến deploy hoàn toàn tự động"**
- [ ] 5 step cards, each with a numbered step indicator:
    1. User mô tả dự án qua Telegram
    2. PM AI phân tích & estimate
    3. User duyệt kế hoạch
    4. AI team tự build (TestLead → Dev → TL → TestLead)
    5. Deploy hoàn tất → trả link
- [ ] Cards use dark background (`#1E2938`) with light border
- [ ] Step numbers visible (large number or badge)
- [ ] Connecting lines/arrows between steps
- [ ] Responsive: horizontal timeline on desktop, vertical on mobile

---

### 4.4 AI Agents section

4 agent cards showcasing the AI engineering team.

**Acceptance criteria:**
- [ ] Section title: **"4 AI Agents vận hành như engineering team thật"**
- [ ] 4 cards: **PM**, **TL**, **Dev**, **TestLead**
- [ ] Each card contains:
  - Role title (e.g. "PM — Quản lý dự án")
  - Outline-style icon for the role
  - Bullet-point responsibilities
- [ ] Card style: dark (`#1E2938`), light border, hover glow effect using `#3B82F6`
- [ ] Layout: 2×2 grid on desktop, 1-column stacked on mobile
- [ ] Responsive gap/padding between cards

---

### 4.5 Features section

Grid of 6 feature items explaining what the platform does.

**Acceptance criteria:**
- [ ] Section title: **"Tự động hóa toàn bộ quy trình phát triển phần mềm"**
- [ ] 6 feature items:
    1. Giao tiếp 100% qua Telegram
    2. Không cần quản lý team dev
    3. Tự động tạo GitHub repo & PR workflow
    4. Estimate chi phí & thời gian trước khi build
    5. Tự động deploy sau khi hoàn thành
    6. Theo dõi tiến độ realtime
- [ ] Each item: icon + bold title + short description line
- [ ] Layout: 3×2 grid on desktop, 1-column on mobile
- [ ] Icons should be outline-style, consistent stroke width

---

### 4.6 Tech Stack, Final CTA & Footer

Three sub-sections in one visual block.

**Tech Stack sub-section:**
- [ ] Title: **"Stack hiện đại, sẵn sàng production"**
- [ ] Badges/logos for: Next.js, Go, PostgreSQL, Tailwind CSS, GitHub Actions, Docker
- [ ] Displayed as centred icon badges with labels

**Final CTA sub-section:**
- [ ] Headline: **"Bắt đầu build sản phẩm với AI team"**
- [ ] Subheadline encouraging action
- [ ] CTA button: **"Chat qua Telegram"** — links to Telegram

**Footer:**
- [ ] Logo: "aiteam" text/branding
- [ ] Telegram link (icon + text)
- [ ] GitHub link (icon + text)
- [ ] Copyright line: © 2024 aiteam

---

### 4.7 Animations & polish

Subtle motion and visual polish across the page.

**Acceptance criteria:**
- [ ] Framer Motion integrated and used for scroll-reveal animations on section entrances (fade-up or similar)
- [ ] Card hover effects: scale transform + glow (`#3B82F6` box-shadow)
- [ ] Hero background gradient animates subtly (slow pulse or shift)
- [ ] Smooth scroll behaviour enabled between sections
- [ ] All sections responsive and well-spaced at all breakpoints (mobile-first)
- [ ] No performance regressions — animations use `will-change` only where needed

---

## 5. Non-functional Requirements

- **Mobile-first responsive:** All sections must render correctly on screens ≥320px wide
- **Dark mode only:** No light mode toggle. All colours assume dark background
- **Performance:** Lighthouse scores ≥90 for Performance, Accessibility, Best Practices
- **SEO:** Proper `<head>` metadata, semantic HTML, Open Graph tags
- **Accessibility:** Keyboard-navigable, sufficient colour contrast ratios
