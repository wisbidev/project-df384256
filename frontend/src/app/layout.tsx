import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "aiteam — AI Team tự động build phần mềm qua Telegram",
  description:
    "Nền tảng AI tự động build phần mềm qua Telegram. Không cần thuê dev — 4 AI agents vận hành như engineering team thật.",
  keywords: ["AI", "software development", "Telegram", "automation", "aiteam"],
  openGraph: {
    title: "aiteam — AI Team tự động build phần mềm qua Telegram",
    description:
      "Nền tảng AI tự động build phần mềm qua Telegram. Không cần thuê dev.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
