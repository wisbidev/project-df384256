# Test cases — Project setup & global layout

## Happy path scenarios

**Scenario**: Next.js project initialised with App Router, TypeScript, and Tailwind
**Given**: The project has been scaffolded with `create-next-app`
**When**: Inspecting the project structure
**Then**: The source uses App Router (`app/` directory), all files are `.ts`/`.tsx`, and Tailwind CSS is configured via `tailwind.config.ts`

**Scenario**: Tailwind config defines the approved color palette
**Given**: The file `tailwind.config.ts` exists
**When**: Reading the `colors` extend block
**Then**: The palette includes `bg-primary: '#0B1121'`, `accent: '#3B82F6'`, `card-bg: '#1E2938'`, `muted: '#94A3B8'`, and `heading: '#F8FAFC'`

**Scenario**: Global CSS sets dark background and light text
**Given**: The file `app/globals.css` is loaded
**When**: The page renders
**Then**: `body` background is `#0B1121`, text colour is `#F8FAFC`, and there is no light‑mode toggle or `@media (prefers-color-scheme: light)` override

**Scenario**: Root layout declares Vietnamese language and SEO metadata
**Given**: The file `app/layout.tsx` is the root layout
**When**: Inspecting the `<html>` tag and `<head>` metadata
**Then**: `<html lang="vi">` is set, and the metadata includes a Vietnamese title and description

**Scenario**: Responsive container wrapper is set up
**Given**: The root layout wraps page content in a container element
**When**: Viewing at desktop width (≥1280px)
**Then**: Content has a `max-width` breakpoint (e.g. `max-w-7xl` or similar) and is horizontally centred
**When**: Viewing at mobile width (320px)
**Then**: Content uses full available width with side padding

**Scenario**: Google Fonts (Inter) is loaded for modern typography
**Given**: The application is rendered in a browser
**When**: Inspecting the loaded fonts
**Then**: The Inter font (or similar modern sans‑serif) is applied as the default body font

**Scenario**: Only layout shell exists — no content sections
**Given**: The project is served
**When**: Browsing to the root URL
**Then**: The page renders only the global layout shell (background, responsive container, font) with no hero, pipeline, agent cards, feature items, or footer content
