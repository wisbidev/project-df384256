# Test cases — Hero section

**Scenario**: Hero renders with correct headline
**Given**: The landing page is loaded
**When**: The user views the hero section
**Then**: The headline "AI Team. Không cần thuê dev." is displayed in large, bold, centered text

**Scenario**: Hero renders with subheadline text
**Given**: The landing page is loaded
**When**: The user views the hero section
**Then**: A 1–2 sentence subheadline explaining the value proposition is displayed below the headline

**Scenario**: Primary CTA "Bắt đầu ngay" links to Telegram
**Given**: The hero section is visible
**When**: The user clicks the "Bắt đầu ngay" button
**Then**: The browser navigates to the Telegram URL (from `NEXT_PUBLIC_TELEGRAM_URL` env variable)

**Scenario**: Secondary CTA "Xem cách hoạt động" scrolls to Pipeline section
**Given**: The hero section is visible
**When**: The user clicks the "Xem cách hoạt động" button
**Then**: The page smooth-scrolls to the Pipeline section (id matching `#pipeline`)

**Scenario**: Hero has dark background with blue gradient overlay
**Given**: The landing page is loaded
**When**: The user inspects the hero section background
**Then**: The background is dark (`#0B1121`) with a subtle blue (`#3B82F6`) gradient overlay

**Scenario**: Hero occupies full viewport height
**Given**: The landing page is loaded
**When**: The user views the hero section
**Then**: The section has `min-h-screen` and fills the full viewport height

**Scenario**: Hero content is vertically and horizontally centered
**Given**: The hero section occupies full viewport height
**When**: The user views the content inside the hero section
**Then**: All content (headline, subheadline, CTA buttons) is centered both vertically and horizontally

**Scenario**: Hero typography scales down on mobile
**Given**: The page is viewed on a mobile viewport (≤ 768px width)
**When**: The user views the hero section
**Then**: The headline and subheadline font sizes are reduced proportionally for the smaller screen
