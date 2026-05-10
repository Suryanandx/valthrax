"use client";
import { motion } from "framer-motion";

export default function SearchIcon({ size = 48 }: { size?: number }) {
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
      <motion.circle
        cx={20}
        cy={20}
        r={12}
        fill="none"
        stroke="var(--color-royal-500)"
        strokeWidth={2}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />
      <motion.line
        x1={30}
        y1={30}
        x2={38}
        y2={38}
        stroke="var(--color-royal-500)"
        strokeWidth={2}
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      />
      <motion.circle
        cx={20}
        cy={20}
        r={3}
        fill="var(--color-royal-500)"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
      />
    </motion.svg>
  );
}
