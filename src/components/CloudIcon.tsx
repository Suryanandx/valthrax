"use client";
import { motion } from "framer-motion";

export default function CloudIcon({ size = 48 }: { size?: number }) {
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
      {/* Cloud shape */}
      <motion.path
        d="M36 20C36 14.5 31.5 10 26 10C22.5 10 19.5 12 18 15C16.5 14.5 15 15 14 16C11.5 16.5 10 18.5 10 21C10 23.5 12 26 15 26H35C37.5 26 40 23.5 40 21C40 19 38.5 17 36 20Z"
        fill="none"
        stroke="var(--color-royal-500)"
        strokeWidth={2}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />
      
      {/* Data streams */}
      {[16, 20, 24, 28].map((x, i) => (
        <motion.g key={i}>
          <motion.line
            x1={x}
            y1={30}
            x2={x}
            y2={36}
            stroke="var(--color-royal-500)"
            strokeWidth={1.5}
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 0.4, delay: 1.2 + i * 0.1 }}
          />
          <motion.circle
            cx={x}
            cy={38}
            r={1}
            fill="var(--color-royal-500)"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 0] }}
            transition={{ 
              duration: 1.5, 
              delay: 2 + i * 0.2, 
              repeat: Infinity, 
              repeatDelay: 1 
            }}
          />
        </motion.g>
      ))}
      
      {/* Server nodes */}
      {[12, 24, 36].map((x, i) => (
        <motion.rect
          key={i}
          x={x - 2}
          y={40}
          width={4}
          height={2}
          rx={1}
          fill="var(--color-royal-500)"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 0.3, delay: 1.8 + i * 0.1 }}
        />
      ))}
    </motion.svg>
  );
}
