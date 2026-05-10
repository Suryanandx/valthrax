"use client";
import Link from "next/link";
import NetworkIcon from "./NetworkIcon";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-gold/20">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Reveal>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-sm">V&E</span>
                </div>
                <span className="font-semibold">Valnora & Elric</span>
              </div>
              <p className="text-foreground/70 text-sm mb-6">
                Boutique product studio and founding engineering partner building venture-grade SaaS/AI products end-to-end.
              </p>
              <div className="flex items-center gap-4">
                <NetworkIcon size={32} />
                <div>
                  <div className="text-sm font-medium">Ready to build?</div>
                  <div className="text-xs text-foreground/60">Response within 1 business day</div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Services */}
          <div>
            <Reveal delay={0.1}>
              <h3 className="font-semibold mb-4 text-gold">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/services/product-engineering" className="text-foreground/70 hover:text-gold transition-colors">Product Engineering</Link></li>
                <li><Link href="/services/ai-automation" className="text-foreground/70 hover:text-gold transition-colors">AI & Automation</Link></li>
                <li><Link href="/services/mobile-development" className="text-foreground/70 hover:text-gold transition-colors">Mobile Development</Link></li>
                <li><Link href="/services/cloud-devops" className="text-foreground/70 hover:text-gold transition-colors">Cloud & DevOps</Link></li>
                <li><Link href="/services/data-analytics" className="text-foreground/70 hover:text-gold transition-colors">Data & Analytics</Link></li>
                <li><Link href="/services/design-research" className="text-foreground/70 hover:text-gold transition-colors">Design & Research</Link></li>
              </ul>
            </Reveal>
          </div>

          {/* Solutions */}
          <div>
            <Reveal delay={0.2}>
              <h3 className="font-semibold mb-4 text-gold">Solutions</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/solutions#fintech" className="text-foreground/70 hover:text-gold transition-colors">FinTech</Link></li>
                <li><Link href="/solutions#healthtech" className="text-foreground/70 hover:text-gold transition-colors">HealthTech</Link></li>
                <li><Link href="/solutions#edtech" className="text-foreground/70 hover:text-gold transition-colors">EdTech</Link></li>
                <li><Link href="/solutions#marketplaces" className="text-foreground/70 hover:text-gold transition-colors">Marketplaces</Link></li>
                <li><Link href="/solutions#social" className="text-foreground/70 hover:text-gold transition-colors">Social Platforms</Link></li>
              </ul>
            </Reveal>
          </div>

          {/* Company */}
          <div>
            <Reveal delay={0.3}>
              <h3 className="font-semibold mb-4 text-gold">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="text-foreground/70 hover:text-gold transition-colors">About Us</Link></li>
                <li><Link href="/work" className="text-foreground/70 hover:text-gold transition-colors">Case Studies</Link></li>
                <li><Link href="/process" className="text-foreground/70 hover:text-gold transition-colors">Our Process</Link></li>
                <li><Link href="/contact" className="text-foreground/70 hover:text-gold transition-colors">Contact</Link></li>
              </ul>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Reveal>
              <div className="text-sm text-foreground/60">
                © 2024 Valnora & Elric Private Limited. All rights reserved.
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex items-center gap-6 text-sm">
                <Link href="/privacy" className="text-foreground/60 hover:text-gold transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="text-foreground/60 hover:text-gold transition-colors">Terms of Service</Link>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-foreground/60">All systems operational</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </footer>
  );
}
