"use client";
import { motion } from "framer-motion";

export default function GridLayoutIcon({ size = 48 }: { size?: number }) {
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
      {/* Grid cells */}
      {[
        { x: 8, y: 8, w: 12, h: 8, delay: 0.2 },
        { x: 24, y: 8, w: 16, h: 8, delay: 0.3 },
        { x: 8, y: 20, w: 8, h: 12, delay: 0.4 },
        { x: 20, y: 20, w: 20, h: 12, delay: 0.5 },
        { x: 8, y: 36, w: 32, h: 4, delay: 0.6 },
      ].map((cell, i) => (
        <motion.rect
          key={i}
          x={cell.x}
          y={cell.y}
          width={cell.w}
          height={cell.h}
          fill="none"
          stroke="var(--color-royal-500)"
          strokeWidth={1.5}
          rx={2}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.4, 
            delay: cell.delay,
            type: "spring" 
          }}
        />
      ))}
      
      {/* Content indicators */}
      {[
        { x: 12, y: 12, delay: 1.0 },
        { x: 28, y: 12, delay: 1.1 },
        { x: 12, y: 24, delay: 1.2 },
        { x: 28, y: 26, delay: 1.3 },
      ].map((dot, i) => (
        <motion.circle
          key={i}
          cx={dot.x}
          cy={dot.y}
          r={1.5}
          fill="var(--color-royal-500)"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: dot.delay, type: "spring" }}
        />
      ))}
    </motion.svg>
  );
}
