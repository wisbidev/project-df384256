# Test cases: Pipeline / How It Works section

## Happy path scenarios

**Scenario**: Section renders with correct title
**Given**: The landing page is loaded
**When**: The Pipeline / How It Works section is in view
**Then**: The section shows the title "Từ ý tưởng đến deploy hoàn toàn tự động"

**Scenario**: All 5 step cards are displayed in order
**Given**: The Pipeline / How It Works section is rendered
**When**: The user scrolls to the section
**Then**: Exactly 5 step cards are visible, each with a numbered step indicator

**Scenario**: Step 1 card shows correct content
**Given**: The Pipeline section is visible
**When**: Looking at the first step card
**Then**: The step number is "1" and the text describes "User mô tả dự án qua Telegram"

**Scenario**: Step 2 card shows correct content
**Given**: The Pipeline section is visible
**When**: Looking at the second step card
**Then**: The step number is "2" and the text describes "PM AI phân tích & estimate"

**Scenario**: Step 3 card shows correct content
**Given**: The Pipeline section is visible
**When**: Looking at the third step card
**Then**: The step number is "3" and the text describes "User duyệt kế hoạch"

**Scenario**: Step 4 card shows correct content
**Given**: The Pipeline section is visible
**When**: Looking at the fourth step card
**Then**: The step number is "4" and the text describes "AI team tự build (TestLead → Dev → TL → TestLead)"

**Scenario**: Step 5 card shows correct content
**Given**: The Pipeline section is visible
**When**: Looking at the fifth step card
**Then**: The step number is "5" and the text describes "Deploy hoàn tất → trả link"

**Scenario**: Cards use dark background with light border
**Given**: Step cards are rendered
**When**: Inspecting card styling
**Then**: Each card has background color `#1E2938` (card-bg) and a light border

**Scenario**: Connecting lines or arrows between adjacent steps
**Given**: Step cards are rendered in sequence
**When**: Observing the layout between cards
**Then**: A connecting line or arrow is visible between each adjacent pair of step cards

**Scenario**: Desktop layout shows horizontal timeline
**Given**: The viewport width is ≥ 1024px (desktop)
**When**: The Pipeline section renders
**Then**: Step cards are arranged in a horizontal row/timeline layout

**Scenario**: Mobile layout shows vertical timeline
**Given**: The viewport width is < 768px (mobile)
**When**: The Pipeline section renders
**Then**: Step cards are stacked vertically with connecting lines between them
