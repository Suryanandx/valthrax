"use client";
import { motion } from "framer-motion";

export default function CodeIcon({ size = 48 }: { size?: number }) {
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
      {/* Code brackets */}
      <motion.path
        d="M14 12L8 18L14 24"
        fill="none"
        stroke="var(--color-royal-500)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      <motion.path
        d="M34 12L40 18L34 24"
        fill="none"
        stroke="var(--color-royal-500)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
      
      {/* Code lines */}
      {[16, 20, 24, 28].map((y, i) => (
        <motion.line
          key={i}
          x1={18}
          y1={y}
          x2={30 - i * 2}
          y2={y}
          stroke="var(--color-royal-500)"
          strokeWidth={1.5}
          strokeLinecap="round"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
          style={{ transformOrigin: "left" }}
        />
      ))}
      
      {/* Cursor */}
      <motion.rect
        x={26}
        y={26}
        width={1.5}
        height={4}
        fill="var(--color-royal-500)"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity, delay: 1.5 }}
      />
    </motion.svg>
  );
}
