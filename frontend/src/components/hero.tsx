"use client";

import { useCallback } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToPipeline = useCallback(() => {
    const pipelineSection = document.getElementById("pipeline");
    if (pipelineSection) {
      pipelineSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Base dark background */}
      <div className="absolute inset-0 bg-bg-primary" />

      {/* Animated gradient background — slow shift */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse 80% 60% at 15% 40%, rgba(59,130,246,0.20) 0%, transparent 60%)",
            "radial-gradient(ellipse 80% 60% at 85% 60%, rgba(59,130,246,0.18) 0%, transparent 60%)",
            "radial-gradient(ellipse 80% 60% at 50% 80%, rgba(59,130,246,0.15) 0%, transparent 60%)",
            "radial-gradient(ellipse 80% 60% at 15% 40%, rgba(59,130,246,0.20) 0%, transparent 60%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Static gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-heading leading-tight mb-6">
          AI Team.{" "}
          <span className="text-accent">Không cần thuê dev.</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-muted max-w-2xl mx-auto mb-10">
          Mô tả ý tưởng, AI team tự phân tích, build và deploy sản phẩm của bạn
          — 100% qua Telegram.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_TELEGRAM_URL || "https://t.me/aiteam_bot"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-heading bg-accent hover:bg-accent/90 rounded-lg transition-colors"
          >
            Bắt đầu ngay
          </a>
          <button
            onClick={scrollToPipeline}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-heading border border-muted/30 hover:border-accent hover:bg-accent/10 rounded-lg transition-colors"
          >
            Xem cách hoạt động
          </button>
        </div>
      </div>
    </section>
  );
}
