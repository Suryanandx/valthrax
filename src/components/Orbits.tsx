"use client";
import { motion } from "framer-motion";

export default function Orbits({ size = 520 }: { size?: number }) {
  const r = size / 2;
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="pointer-events-none select-none"
      aria-hidden
    >
      {[0.28, 0.46, 0.64, 0.82].map((m, i) => (
        <motion.circle
          key={i}
          cx={r}
          cy={r}
          r={r * m}
          fill="none"
          stroke="currentColor"
          strokeOpacity={0.06 + i * 0.035}
          strokeWidth={1}
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 + i * 0.3, ease: "easeOut" }}
        />
      ))}
      <motion.circle
        cx={r}
        cy={r * 0.36}
        r={4}
        fill="currentColor"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      />
    </svg>
  );
}
