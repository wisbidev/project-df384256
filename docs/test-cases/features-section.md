# Test Cases — Features Section

## Happy Path

**Scenario**: Section renders with correct title
**Given**: The Features section is rendered on the landing page
**When**: The user scrolls to the Features section
**Then**: The section displays the title "Tự động hóa toàn bộ quy trình phát triển phần mềm"

**Scenario**: 6 feature items are displayed in a grid
**Given**: The Features section is rendered
**When**: The user views the feature items
**Then**: Exactly 6 feature items are visible, arranged in a 3×2 grid on desktop (2 rows, 3 columns)

**Scenario**: Feature item "Giao tiếp 100% qua Telegram"
**Given**: The Features section is rendered
**When**: The user views the first feature item
**Then**: It shows an outline-style icon, the bold title "Giao tiếp 100% qua Telegram", and a short description line

**Scenario**: Feature item "Không cần quản lý team dev"
**Given**: The Features section is rendered
**When**: The user views the second feature item
**Then**: It shows an outline-style icon, the bold title "Không cần quản lý team dev", and a short description line

**Scenario**: Feature item "Tự động tạo GitHub repo & PR workflow"
**Given**: The Features section is rendered
**When**: The user views the third feature item
**Then**: It shows an outline-style icon, the bold title "Tự động tạo GitHub repo & PR workflow", and a short description line

**Scenario**: Feature item "Estimate chi phí & thời gian trước khi build"
**Given**: The Features section is rendered
**When**: The user views the fourth feature item
**Then**: It shows an outline-style icon, the bold title "Estimate chi phí & thời gian trước khi build", and a short description line

**Scenario**: Feature item "Tự động deploy sau khi hoàn thành"
**Given**: The Features section is rendered
**When**: The user views the fifth feature item
**Then**: It shows an outline-style icon, the bold title "Tự động deploy sau khi hoàn thành", and a short description line

**Scenario**: Feature item "Theo dõi tiến độ realtime"
**Given**: The Features section is rendered
**When**: The user views the sixth feature item
**Then**: It shows an outline-style icon, the bold title "Theo dõi tiến độ realtime", and a short description line

**Scenario**: All icons use consistent outline style
**Given**: The Features section is rendered
**When**: The user inspects all 6 feature icons
**Then**: All icons use outline-style rendering with consistent stroke width

**Scenario**: Mobile layout stacks items in a single column
**Given**: The Features section is rendered
**When**: The viewport is at mobile width (< 768px)
**Then**: The 6 feature items are stacked in a single column (1 column layout)
