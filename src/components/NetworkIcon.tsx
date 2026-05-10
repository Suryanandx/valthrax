"use client";
import { motion } from "framer-motion";

export default function NetworkIcon({ size = 48 }: { size?: number }) {
  const nodes = [
    { cx: 24, cy: 12, delay: 0.2 },
    { cx: 12, cy: 24, delay: 0.4 },
    { cx: 36, cy: 24, delay: 0.6 },
    { cx: 18, cy: 36, delay: 0.8 },
    { cx: 30, cy: 36, delay: 1.0 },
  ];

  const connections = [
    { x1: 24, y1: 12, x2: 12, y2: 24, delay: 1.2 },
    { x1: 24, y1: 12, x2: 36, y2: 24, delay: 1.3 },
    { x1: 12, y1: 24, x2: 18, y2: 36, delay: 1.4 },
    { x1: 36, y1: 24, x2: 30, y2: 36, delay: 1.5 },
    { x1: 18, y1: 36, x2: 30, y2: 36, delay: 1.6 },
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
      {/* Connections */}
      {connections.map((line, i) => (
        <motion.line
          key={i}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke="var(--color-royal-500)"
          strokeWidth={1}
          strokeOpacity={0.6}
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 0.4, delay: line.delay }}
        />
      ))}
      
      {/* Nodes */}
      {nodes.map((node, i) => (
        <motion.circle
          key={i}
          cx={node.cx}
          cy={node.cy}
          r={3}
          fill="var(--color-royal-500)"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: node.delay, type: "spring" }}
        />
      ))}
      
      {/* Pulse effect on center node */}
      <motion.circle
        cx={24}
        cy={12}
        r={3}
        fill="none"
        stroke="var(--color-royal-500)"
        strokeWidth={1}
        initial={{ scale: 1, opacity: 0 }}
        animate={{ scale: 2, opacity: [0, 0.8, 0] }}
        transition={{ 
          duration: 2, 
          delay: 2, 
          repeat: Infinity, 
          repeatDelay: 1 
        }}
      />
    </motion.svg>
  );
}
