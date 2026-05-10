"use client";
import { motion } from "framer-motion";

export default function AIBrainIcon({ size = 48 }: { size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Brain outline */}
      <motion.path
        d="M12 20c0-6 4-10 10-10s10 4 10 10c2 0 4 2 4 4s-2 4-4 4c0 4-2 6-4 6h-12c-2 0-4-2-4-6 0 0-2-2-2-4s2-4 2-4z"
        fill="none"
        stroke="var(--color-royal-500)"
        strokeWidth={2}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      />
      
      {/* Neural connections */}
      {[
        { x1: 18, y1: 16, x2: 22, y2: 20 },
        { x1: 26, y1: 16, x2: 22, y2: 20 },
        { x1: 20, y1: 24, x2: 16, y2: 28 },
        { x1: 20, y1: 24, x2: 24, y2: 28 },
      ].map((line, i) => (
        <motion.line
          key={i}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke="var(--color-royal-500)"
          strokeWidth={1.5}
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 + i * 0.1 }}
        />
      ))}
      
      {/* Neural nodes */}
      {[
        { cx: 18, cy: 16 },
        { cx: 26, cy: 16 },
        { cx: 22, cy: 20 },
        { cx: 16, cy: 28 },
        { cx: 24, cy: 28 },
      ].map((circle, i) => (
        <motion.circle
          key={i}
          cx={circle.cx}
          cy={circle.cy}
          r={2}
          fill="var(--color-royal-500)"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 1.5 + i * 0.1, type: "spring" }}
        />
      ))}
    </motion.svg>
  );
}
