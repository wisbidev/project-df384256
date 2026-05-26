"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./scroll-reveal";

const techItems = [
  { id: "nextjs", label: "Next.js", icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#1E2938"/><text x="20" y="26" textAnchor="middle" fill="#F8FAFC" fontSize="10" fontWeight="bold" fontFamily="monospace">N</text></svg> },
  { id: "go", label: "Go", icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#1E2938"/><text x="20" y="26" textAnchor="middle" fill="#00ADD8" fontSize="10" fontWeight="bold" fontFamily="monospace">Go</text></svg> },
  { id: "postgresql", label: "PostgreSQL", icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#1E2938"/><text x="20" y="26" textAnchor="middle" fill="#336791" fontSize="8" fontWeight="bold" fontFamily="monospace">PG</text></svg> },
  { id: "tailwind", label: "Tailwind CSS", icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#1E2938"/><text x="20" y="26" textAnchor="middle" fill="#06B6D4" fontSize="9" fontWeight="bold" fontFamily="monospace">TW</text></svg> },
  { id: "github-actions", label: "GitHub Actions", icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#1E2938"/><text x="20" y="26" textAnchor="middle" fill="#F8FAFC" fontSize="8" fontWeight="bold" fontFamily="monospace">GA</text></svg> },
  { id: "docker", label: "Docker", icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#1E2938"/><text x="20" y="26" textAnchor="middle" fill="#2496ED" fontSize="9" fontWeight="bold" fontFamily="monospace">Dc</text></svg> },
];

const telegramUrl = process.env.NEXT_PUBLIC_TELEGRAM_URL || "https://t.me/aiteam_bot";
const githubUrl = "https://github.com/aiteam";

export default function TechStackFinalCTAFooter() {
  return (
    <>
      {/* Tech Stack */}
      <section
        id="tech-stack"
        className="py-20 md:py-28 lg:py-32 bg-bg-primary"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-16">
              Stack hiện đại, sẵn sàng production
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {techItems.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-card-bg border border-muted/20 flex items-center justify-center hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-shadow duration-300">
                    {item.icon}
                  </div>
                  <span className="text-xs md:text-sm text-muted font-medium">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section
        id="final-cta"
        className="py-20 md:py-28 lg:py-32 bg-bg-primary relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-accent/10 via-transparent to-transparent" />
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading leading-tight mb-6">
              Bắt đầu build sản phẩm với AI team
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-lg md:text-xl text-muted max-w-xl mx-auto mb-10">
              Chỉ cần mô tả ý tưởng, AI team sẽ tự động phân tích, build và deploy sản phẩm của bạn.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <a
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-heading bg-accent hover:bg-accent/90 rounded-lg transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
              Chat qua Telegram
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="footer"
        className="py-12 md:py-16 bg-bg-primary border-t border-muted/10"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center md:items-start gap-2">
              <span className="text-2xl font-bold text-heading">aiteam</span>
              <p className="text-sm text-muted">© 2024 aiteam</p>
            </div>

            <div className="flex items-center gap-6">
              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
                <span className="text-sm font-medium">Telegram</span>
              </a>

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                <span className="text-sm font-medium">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
