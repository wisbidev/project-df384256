# Test Cases: AI Agents Section

## Happy Path Scenarios

**Scenario**: Section renders with correct Vietnamese title
**Given**: The page is loaded
**When**: The user scrolls to the AI Agents section
**Then**: The section heading displays "4 AI Agents vận hành như engineering team thật"

**Scenario**: Four agent cards are displayed in a 2×2 grid on desktop
**Given**: The user is on the AI Agents section with a viewport width ≥ 768px
**When**: The section renders
**Then**: 4 cards (PM, TL, Dev, TestLead) are shown in a 2-column grid layout

**Scenario**: Cards stack in a single column on mobile
**Given**: The user is on the AI Agents section with a viewport width < 768px
**When**: The section renders
**Then**: 4 cards are shown in a single-column stacked layout

**Scenario**: PM card displays role title, icon, and responsibilities
**Given**: The AI Agents section is visible
**When**: The user views the PM card
**Then**: The card shows "PM — Quản lý dự án", an outline-style icon, and bullet-point responsibilities

**Scenario**: TL card displays role title, icon, and responsibilities
**Given**: The AI Agents section is visible
**When**: The user views the TL card
**Then**: The card shows "TL — Kiến trúc sư hệ thống" (or similar role subtitle), an outline-style icon, and bullet-point responsibilities

**Scenario**: Dev card displays role title, icon, and responsibilities
**Given**: The AI Agents section is visible
**When**: The user views the Dev card
**Then**: The card shows "Dev — Lập trình viên", an outline-style icon, and bullet-point responsibilities

**Scenario**: TestLead card displays role title, icon, and responsibilities
**Given**: The AI Agents section is visible
**When**: The user views the TestLead card
**Then**: The card shows "TestLead — Kiểm thử chất lượng", an outline-style icon, and bullet-point responsibilities

**Scenario**: Cards have dark background with light border
**Given**: The AI Agents section is rendered
**When**: Inspecting any agent card's CSS
**Then**: The card background is dark (#1E2938) with a light border

**Scenario**: Card shows hover glow effect with accent color
**Given**: The user hovers over any agent card
**When**: The hover state is triggered
**Then**: The card displays a glow effect using #3B82F6 (accent color)

**Scenario**: Cards have responsive gap and padding
**Given**: The AI Agents section is rendered
**When**: Checking responsive styles
**Then**: Gap between cards and padding around the grid adjusts appropriately across breakpoints
