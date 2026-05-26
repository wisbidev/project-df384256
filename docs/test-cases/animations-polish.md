# Test Cases: Animations & Polish

## Scroll-Reveal Animations

**Scenario**: Sections animate in on scroll
**Given**: The user scrolls down the page
**When**: Each section enters the viewport
**Then**: The section content fades up into view with a smooth transition

**Scenario**: Scroll-reveal triggers only once per section
**Given**: The user has already scrolled past a section and it has animated in
**When**: The user scrolls back up to that section
**Then**: The section remains visible and does not re-animate

## Card Hover Effects

**Scenario**: Card scales up on hover
**Given**: A card element (agent card, feature card, or pipeline step card) is displayed
**When**: The user hovers over the card
**Then**: The card scales up slightly (e.g. scale-105) and gains a glow box-shadow using accent color `#3B82F6`

**Scenario**: Hover effect reverts on mouse leave
**Given**: A card is currently hovered and has scale+glow applied
**When**: The user moves the cursor away from the card
**Then**: The card returns to its original scale and box-shadow state

## Hero Background Gradient Animation

**Scenario**: Hero background gradient animates subtly
**Given**: The page loads and the Hero section is visible
**When**: The page is idle (no user interaction)
**Then**: The Hero background gradient subtly animates (slow pulse or slow shift between gradient positions)

## Smooth Scrolling

**Scenario**: Secondary CTA smooth-scrolls to Pipeline section
**Given**: The user is at the Hero section
**When**: The user clicks "Xem cách hoạt động" (secondary CTA button)
**Then**: The page smoothly scrolls to the Pipeline section's anchor/ID

**Scenario**: All internal navigation smooth-scrolls
**Given**: Any link or button targets an on-page section ID
**When**: The user clicks that link or button
**Then**: The page performs a smooth scroll (not an instant jump) to the target section

## Responsive Breakpoints

**Scenario**: Animations work on mobile viewport (320px+)
**Given**: The page is viewed on a screen 320–767px wide
**When**: The user scrolls through all sections
**Then**: All scroll-reveal animations, card hover effects, and gradient animation work correctly without layout breakage

**Scenario**: Animations work on tablet viewport (768px–1023px)
**Given**: The page is viewed on a screen 768–1023px wide
**When**: The user scrolls through all sections
**Then**: All scroll-reveal animations, card hover effects, and gradient animation work correctly without layout breakage

**Scenario**: Animations work on desktop viewport (1024px+)
**Given**: The page is viewed on a screen 1024px wide or larger
**When**: The user scrolls through all sections
**Then**: All scroll-reveal animations, card hover effects, and gradient animation work correctly without layout breakage

## Section Spacing

**Scenario**: Sections have consistent vertical spacing on all breakpoints
**Given**: The page has multiple content sections
**When**: The page renders at any viewport width (320px+)
**Then**: Each section has adequate and consistent vertical padding/spacing that scales appropriately on mobile vs desktop
