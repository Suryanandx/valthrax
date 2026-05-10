"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

type Point = { x: number; y: number };

function toPath(points: Point[]) {
  if (!points.length) return "";
  const [first, ...rest] = points;
  const d = [
    `M ${first.x},${first.y}`,
    ...rest.map((p) => `L ${p.x},${p.y}`),
  ].join(" ");
  return d;
}

export default function AnimatedAreaChart({
  width = 480,
  height = 160,
  color = "currentColor",
  seed = 0,
}: {
  width?: number;
  height?: number;
  color?: string;
  seed?: number;
}) {
  const controls = useAnimation();
  const pad = 8;
  const w = width - pad * 2;
  const h = height - pad * 2;

  // simple pseudo-random series
  const points: Point[] = Array.from({ length: 24 }, (_, i) => {
    const t = i / 23;
    const noise = Math.sin((t + seed) * 4.2) * 0.2 + Math.cos((t + seed) * 1.3) * 0.1;
    const yNorm = Math.max(0.08, Math.min(0.9, 0.25 + t * 0.7 + noise));
    return { x: pad + t * w, y: pad + (1 - yNorm) * h };
  });

  const path = toPath(points);
  const area = `${path} L ${pad + w},${pad + h} L ${pad},${pad + h} Z`;

  useEffect(() => {
    controls.start({ pathLength: 1, transition: { duration: 1.6, ease: "easeInOut" } });
  }, [controls]);

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} aria-hidden>
      <defs>
        <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.28" />
          <stop offset="100%" stopColor={color} stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <rect x={0} y={0} width={width} height={height} rx={12} fill="none" />
      <motion.path
        d={area}
        fill="url(#grad)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      />
      <motion.path
        d={path}
        stroke={color}
        strokeWidth={2}
        fill="none"
        initial={{ pathLength: 0 }}
        animate={controls}
      />
      {points.slice(-1).map((p, i) => (
        <motion.circle key={i} cx={p.x} cy={p.y} r={3}
          fill={color}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.9 }}
        />
      ))}
    </svg>
  );
}
