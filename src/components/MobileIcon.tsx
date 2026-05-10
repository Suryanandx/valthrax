"use client";
import { motion } from "framer-motion";

export default function MobileIcon({ size = 48 }: { size?: number }) {
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
      {/* Phone outline */}
      <motion.rect
        x={16}
        y={6}
        width={16}
        height={36}
        rx={3}
        fill="none"
        stroke="var(--color-royal-500)"
        strokeWidth={2}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      
      {/* Screen */}
      <motion.rect
        x={18}
        y={10}
        width={12}
        height={24}
        rx={1}
        fill="none"
        stroke="var(--color-royal-500)"
        strokeWidth={1}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        style={{ transformOrigin: "center" }}
      />
      
      {/* UI Elements */}
      {[14, 18, 22].map((y, i) => (
        <motion.rect
          key={i}
          x={20}
          y={y}
          width={8}
          height={1.5}
          rx={0.5}
          fill="var(--color-royal-500)"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.4, delay: 1.2 + i * 0.1 }}
          style={{ transformOrigin: "left" }}
        />
      ))}
      
      {/* Home button */}
      <motion.circle
        cx={24}
        cy={37}
        r={2}
        fill="none"
        stroke="var(--color-royal-500)"
        strokeWidth={1}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 1.0 }}
      />
      
      {/* Notification dots */}
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={i}
          cx={26 + i * 2}
          cy={8}
          r={0.5}
          fill="var(--color-royal-500)"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 0] }}
          transition={{ 
            duration: 1, 
            delay: 2 + i * 0.3, 
            repeat: Infinity, 
            repeatDelay: 2 
          }}
        />
      ))}
    </motion.svg>
  );
}
