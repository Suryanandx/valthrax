"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import MegaMenu from "./MegaMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-gold/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">V&E</span>
            </div>
            <span className="font-semibold text-lg">Valnora & Elric</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <MegaMenu />
            <Link href="/contact" className="gold-gradient text-black rounded-full px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity">
              Start Project
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gold/10 transition-colors"
          >
            <div className="w-6 h-6 flex flex-col justify-center gap-1">
              <motion.div
                className="w-full h-0.5 bg-foreground"
                animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.div
                className="w-full h-0.5 bg-foreground"
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.div
                className="w-full h-0.5 bg-foreground"
                animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-gold/20"
          >
            <div className="px-4 py-6 space-y-4">
              <Link href="/services" className="block py-2 text-foreground hover:text-gold transition-colors">
                Services
              </Link>
              <Link href="/solutions" className="block py-2 text-foreground hover:text-gold transition-colors">
                Solutions
              </Link>
              <Link href="/work" className="block py-2 text-foreground hover:text-gold transition-colors">
                Work
              </Link>
              <Link href="/about" className="block py-2 text-foreground hover:text-gold transition-colors">
                About
              </Link>
              <Link href="/process" className="block py-2 text-foreground hover:text-gold transition-colors">
                Process
              </Link>
              <Link href="/contact" className="block py-2 text-foreground hover:text-gold transition-colors">
                Contact
              </Link>
              <div className="pt-4">
                <Link href="/contact" className="gold-gradient text-black rounded-full px-6 py-3 text-sm font-medium inline-block">
                  Start Project
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
