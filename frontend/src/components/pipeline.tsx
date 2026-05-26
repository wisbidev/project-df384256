"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "User mô tả dự án qua Telegram",
  },
  {
    number: "2",
    title: "PM AI phân tích & estimate",
  },
  {
    number: "3",
    title: "User duyệt kế hoạch",
  },
  {
    number: "4",
    title: "AI team tự build (TestLead → Dev → TL → TestLead)",
  },
  {
    number: "5",
    title: "Deploy hoàn tất → trả link",
  },
];

export default function Pipeline() {
  return (
    <section id="pipeline" className="py-20 md:py-32 bg-bg-primary">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading text-center mb-16 md:mb-24"
        >
          Từ ý tưởng đến deploy hoàn toàn tự động
        </motion.h2>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:flex items-start justify-between relative">
          {/* Connecting line */}
          <div className="absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative flex flex-col items-center w-[calc(20%-1rem)]"
            >
              <div className="w-20 h-20 rounded-full bg-card-bg border-2 border-accent/50 flex items-center justify-center mb-6 relative z-10">
                <span className="text-2xl font-bold text-accent">
                  {step.number}
                </span>
              </div>
              <div className="bg-card-bg border border-muted/20 rounded-xl p-4 text-center w-full hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-shadow duration-300">
                <p className="text-sm text-heading font-medium leading-relaxed">
                  {step.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden flex flex-col items-center relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative flex items-start w-full max-w-sm"
            >
              <div className="flex flex-col items-center mr-4">
                <div className="w-12 h-12 rounded-full bg-card-bg border-2 border-accent/50 flex items-center justify-center shrink-0 relative z-10">
                  <span className="text-lg font-bold text-accent">
                    {step.number}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-px h-16 bg-gradient-to-b from-accent/50 to-transparent" />
                )}
              </div>
              <div className="bg-card-bg border border-muted/20 rounded-xl p-4 mb-8 flex-1 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-shadow duration-300">
                <p className="text-sm text-heading font-medium leading-relaxed">
                  {step.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
