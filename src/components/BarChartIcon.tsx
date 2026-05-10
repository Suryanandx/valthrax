"use client";
import { motion } from "framer-motion";

export default function BarChartIcon({ size = 48 }: { size?: number }) {
  const bars = [
    { height: 12, delay: 0.2 },
    { height: 20, delay: 0.4 },
    { height: 8, delay: 0.6 },
    { height: 16, delay: 0.8 },
    { height: 24, delay: 1.0 },
  ];

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
      {/* Axes */}
      <motion.line
        x1={8}
        y1={36}
        x2={40}
        y2={36}
        stroke="var(--color-royal-500)"
        strokeWidth={1.5}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.8 }}
      />
      <motion.line
        x1={8}
        y1={36}
        x2={8}
        y2={8}
        stroke="var(--color-royal-500)"
        strokeWidth={1.5}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      
      {/* Bars */}
      {bars.map((bar, i) => (
        <motion.rect
          key={i}
          x={12 + i * 6}
          y={36 - bar.height}
          width={4}
          height={bar.height}
          fill="var(--color-royal-500)"
          rx={1}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: bar.delay,
            type: "spring",
            stiffness: 200 
          }}
          style={{ transformOrigin: "bottom" }}
        />
      ))}
    </motion.svg>
  );
}
