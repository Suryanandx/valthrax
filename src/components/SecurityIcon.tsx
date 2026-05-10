"use client";
import { motion } from "framer-motion";

export default function SecurityIcon({ size = 48 }: { size?: number }) {
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
      {/* Shield outline */}
      <motion.path
        d="M24 4L12 10V22C12 30 18 36 24 40C30 36 36 30 36 22V10L24 4Z"
        fill="none"
        stroke="var(--color-royal-500)"
        strokeWidth={2}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      />
      
      {/* Checkmark */}
      <motion.path
        d="M18 22L22 26L30 18"
        fill="none"
        stroke="var(--color-royal-500)"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      />
      
      {/* Security rings */}
      {[0.6, 0.8].map((scale, i) => (
        <motion.path
          key={i}
          d="M24 4L12 10V22C12 30 18 36 24 40C30 36 36 30 36 22V10L24 4Z"
          fill="none"
          stroke="var(--color-royal-500)"
          strokeWidth={1}
          strokeOpacity={0.3}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [scale, scale + 0.2], opacity: [0.3, 0] }}
          transition={{ 
            duration: 2, 
            delay: 2 + i * 0.5, 
            repeat: Infinity, 
            repeatDelay: 2 
          }}
          style={{ transformOrigin: "center" }}
        />
      ))}
    </motion.svg>
  );
}
