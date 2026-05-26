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
      "Nền tảng AI tự động build phần mải mềm qua Telegram. Không cần thuê dev.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="antialiased">
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
