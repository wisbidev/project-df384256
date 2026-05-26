"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./scroll-reveal";

const agents = [
  {
    id: "pm",
    role: "PM",
    subtitle: "Quản lý dự án",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-accent"
      >
        <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="M12 11h4" />
        <path d="M12 16h4" />
        <path d="M8 11h.01" />
        <path d="M8 16h.01" />
      </svg>
    ),
    responsibilities: [
      "Phân tích yêu cầu dự án",
      "Lập kế hoạch & timeline",
      "Quản lý phạm vi & kỳ vọng",
    ],
  },
  {
    id: "tl",
    role: "TL",
    subtitle: "Kiến trúc sư hệ thống",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-accent"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="12" x2="12" y1="2" y2="22" />
      </svg>
    ),
    responsibilities: [
      "Thiết kế kiến trúc hệ thống",
      "Review & merge pull requests",
      "Ra quyết định kỹ thuật",
    ],
  },
  {
    id: "dev",
    role: "Dev",
    subtitle: "Lập trình viên",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-accent"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    responsibilities: [
      "Viết code backend & frontend",
      "Implement tính năng theo spec",
      "Fix bug & tối ưu performance",
    ],
  },
  {
    id: "testlead",
    role: "TestLead",
    subtitle: "Kiểm thử chất lượng",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-accent"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    responsibilities: [
      "Viết test cases & chiến lược QA",
      "Automated testing & CI/CD",
      "Đảm bảo chất lượng code",
    ],
  },
];

export default function AIAgents() {
  return (
    <section
      id="ai-agents"
      className="py-20 md:py-28 lg:py-32 bg-bg-primary"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading text-center mb-16">
            4 AI Agents vận hành như engineering team thật
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-card-bg border border-muted/20 rounded-2xl p-6 md:p-8 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-shadow duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="shrink-0">{agent.icon}</div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-heading mb-1">
                    {agent.role}
                  </h3>
                  <p className="text-sm md:text-base text-muted">
                    {agent.subtitle}
                  </p>
                </div>
              </div>

              <ul className="space-y-3">
                {agent.responsibilities.map((resp, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm md:text-base text-muted/80"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    {resp}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
