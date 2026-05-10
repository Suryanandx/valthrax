"use client";
import { motion } from "framer-motion";

export default function TechStackIcon({ size = 48 }: { size?: number }) {
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
      {/* Stack layers */}
      {[
        { y: 32, delay: 0.2, label: "Infrastructure" },
        { y: 26, delay: 0.4, label: "Backend" },
        { y: 20, delay: 0.6, label: "API" },
        { y: 14, delay: 0.8, label: "Frontend" },
      ].map((layer, i) => (
        <motion.rect
          key={i}
          x={8}
          y={layer.y}
          width={32}
          height={4}
          rx={2}
          fill="none"
          stroke="var(--color-royal-500)"
          strokeWidth={1.5}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: layer.delay }}
        />
      ))}
      
      {/* Connecting lines */}
      {[0, 1, 2].map((i) => (
        <motion.line
          key={i}
          x1={24}
          y1={32 - i * 6}
          x2={24}
          y2={26 - i * 6}
          stroke="var(--color-royal-500)"
          strokeWidth={1}
          strokeDasharray="2,2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 0.4, delay: 1.2 + i * 0.1 }}
        />
      ))}
      
      {/* Data flow indicators */}
      {[16, 24, 32].map((x, i) => (
        <motion.circle
          key={i}
          cx={x}
          cy={10}
          r={1.5}
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
