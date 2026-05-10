"use client";
import { motion } from "framer-motion";

export default function AnimatedLogo({ size = 28 }: { size?: number }) {
  const stroke = "currentColor";
  const r = size / 2;
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
      aria-hidden
    >
      <defs>
        <linearGradient id="lg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.9" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      <circle cx={r} cy={r} r={r - 2} fill="none" stroke="url(#lg)" strokeWidth={2} />
      <motion.circle
        cx={r}
        cy={r / 2}
        r={2}
        fill={stroke}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
    </motion.svg>
  );
}
