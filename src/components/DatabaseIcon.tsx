"use client";
import { motion } from "framer-motion";

export default function DatabaseIcon({ size = 48 }: { size?: number }) {
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
      {/* Database cylinders */}
      {[12, 20, 28].map((y, i) => (
        <g key={i}>
          <motion.ellipse
            cx={24}
            cy={y}
            rx={12}
            ry={3}
            fill="none"
            stroke="var(--color-royal-500)"
            strokeWidth={2}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          />
          <motion.line
            x1={12}
            y1={y}
            x2={12}
            y2={y + 6}
            stroke="var(--color-royal-500)"
            strokeWidth={2}
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
          />
          <motion.line
            x1={36}
            y1={y}
            x2={36}
            y2={y + 6}
            stroke="var(--color-royal-500)"
            strokeWidth={2}
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
          />
        </g>
      ))}
      
      {/* Data flow indicators */}
      {[18, 26, 34].map((x, i) => (
        <motion.circle
          key={i}
          cx={x}
          cy={38}
          r={1}
          fill="var(--color-royal-500)"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 0] }}
          transition={{ 
            duration: 2, 
            delay: 2 + i * 0.3, 
            repeat: Infinity, 
            repeatDelay: 1 
          }}
        />
      ))}
    </motion.svg>
  );
}
