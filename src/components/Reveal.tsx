"use client";
import { motion } from "framer-motion";

export default function Reveal({ 
  children, 
  delay = 0, 
  amount = 0.1,
  immediate = false
}: { 
  children: React.ReactNode; 
  delay?: number;
  amount?: number;
  immediate?: boolean;
}) {
  if (immediate) {
    return (
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0 }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ 
        type: "spring",
        stiffness: 300,
        damping: 30,
        delay,
        duration: 0.6
      }}
    >
      {children}
    </motion.div>
  );
}
