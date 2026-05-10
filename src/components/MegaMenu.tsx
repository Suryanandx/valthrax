"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import navigationData from "@/data/navigation.json";

export default function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <nav className="hidden lg:flex items-center gap-8 text-sm">
      {navigationData.mainNav.map((item) => (
        <div
          key={item.label}
          className="relative"
          onMouseEnter={() => item.megaMenu && setActiveMenu(item.label)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <Link
            href={item.href}
            className="hover:text-gold transition-colors duration-200 flex items-center gap-1"
          >
            {item.label}
            {item.megaMenu && (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </Link>

          <AnimatePresence>
            {activeMenu === item.label && item.megaMenu && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 mt-2 w-[600px] bg-background border border-gold/20 rounded-xl shadow-2xl p-6 z-50"
              >
                <div className="grid grid-cols-2 gap-8">
                  {item.megaMenu.sections.map((section) => (
                    <div key={section.title}>
                      <h3 className="font-medium text-gold mb-4">{section.title}</h3>
                      <div className="space-y-3">
                        {section.items.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block p-3 rounded-lg hover:bg-gold/5 transition-colors group"
                          >
                            <div className="font-medium group-hover:text-gold transition-colors">
                              {subItem.label}
                            </div>
                            <div className="text-xs text-foreground/60 mt-1">
                              {subItem.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </nav>
  );
}
