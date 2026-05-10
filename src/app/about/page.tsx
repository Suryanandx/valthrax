import Reveal from "@/components/Reveal";
import TechStackIcon from "@/components/TechStackIcon";
import AIBrainIcon from "@/components/AIBrainIcon";
import NetworkIcon from "@/components/NetworkIcon";

export default function AboutPage() {
  return (
    <div className="min-h-screen text-foreground bg-background">
      {/* Hero */}
      <section className="pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-center mb-6">
              About <span className="gold-text-gradient">Valnora & Elric</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xl text-foreground/80 text-center leading-relaxed">
              Built by engineers and designers who were tired of rewrites and "proposal theater." 
              We created a studio that ships fast, safely, and leaves products stronger than we found them.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="border-t border-gold/20 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-12 text-center">Our Story</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  We started Valnora & Elric after years of watching talented teams get stuck in endless 
                  cycles of technical debt, feature factories, and architectural rewrites that never quite 
                  delivered the promised outcomes.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  The problem wasn't lack of talent or effort—it was the fundamental mismatch between 
                  how software is sold (features and timelines) and how great software is actually built 
                  (systems thinking, iterative refinement, and measured impact).
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  We built a different kind of studio: one that embeds with your team as technical 
                  co-founders, makes architectural decisions once and implements them right, and 
                  measures success by business outcomes, not feature velocity.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex justify-center">
                <TechStackIcon size={200} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-t border-gold/20 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-12 text-center">Our Principles</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Reveal>
              <div className="rounded-xl border border-gold p-6">
                <h3 className="font-semibold mb-3 text-gold">Solve the right problem</h3>
                <p className="text-sm text-foreground/70">
                  We start with business outcomes and work backwards to technical solutions. 
                  No solution in search of a problem.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="rounded-xl border border-gold p-6">
                <h3 className="font-semibold mb-3 text-gold">Keep it simple</h3>
                <p className="text-sm text-foreground/70">
                  Prefer boring tech that scales. Complexity is the enemy of maintainability 
                  and team velocity.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-xl border border-gold p-6">
                <h3 className="font-semibold mb-3 text-gold">Own quality</h3>
                <p className="text-sm text-foreground/70">
                  Tests, telemetry, ops—non-negotiable. Quality is not a phase, 
                  it's built into every decision.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="rounded-xl border border-gold p-6">
                <h3 className="font-semibold mb-3 text-gold">Design matters</h3>
                <p className="text-sm text-foreground/70">
                  Beauty + performance drive conversion. Great UX is not optional 
                  in competitive markets.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="rounded-xl border border-gold p-6">
                <h3 className="font-semibold mb-3 text-gold">Respect the future</h3>
                <p className="text-sm text-foreground/70">
                  Every line of code should be easy to delete. Build for change, 
                  not just current requirements.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="rounded-xl border border-gold p-6">
                <h3 className="font-semibold mb-3 text-gold">Measure everything</h3>
                <p className="text-sm text-foreground/70">
                  Data-driven decisions, not opinions. Every feature should move 
                  a business metric.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-gold/20 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-12 text-center">Our Team</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gold">Small Senior Core</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  We maintain a small core team of senior engineers, designers, and technical leaders 
                  who have built and scaled products from 0 to millions of users. No junior developers 
                  learning on your dime.
                </p>
                <h3 className="text-xl font-semibold mb-4 text-gold">Trusted Network</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  When projects require specialized skills or additional capacity, we work with a 
                  carefully curated network of experts we've collaborated with for years.
                </p>
                <h3 className="text-xl font-semibold mb-4 text-gold">Embedded Pods</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Typical pod includes: Technical Architect, Frontend/Backend/Mobile Engineers, 
                  Designer, DevOps Engineer, and Data Analyst. Leadership stays hands-on throughout.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-6">
                <div className="flex justify-center">
                  <AIBrainIcon size={120} />
                </div>
                <div className="text-center">
                  <NetworkIcon size={80} />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Ways of Working */}
      <section className="border-t border-gold/20 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-12 text-center">Ways of Working</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8">
            <Reveal>
              <div className="rounded-xl border border-gold p-8">
                <h3 className="font-semibold mb-4 text-gold">Communication</h3>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li>• Weekly demos with working software</li>
                  <li>• Written updates, not just meetings</li>
                  <li>• Async-first rituals that respect time zones</li>
                  <li>• Shared dashboards for real-time visibility</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="rounded-xl border border-gold p-8">
                <h3 className="font-semibold mb-4 text-gold">Delivery</h3>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li>• Trunk-based development</li>
                  <li>• Continuous integration and deployment</li>
                  <li>• Feature flags for safe rollouts</li>
                  <li>• Automated testing and quality gates</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-xl border border-gold p-8">
                <h3 className="font-semibold mb-4 text-gold">Accountability</h3>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li>• Clear success metrics defined upfront</li>
                  <li>• Regular retrospectives and course correction</li>
                  <li>• Transparent roadmap and priority changes</li>
                  <li>• Post-launch support and optimization</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="rounded-xl border border-gold p-8">
                <h3 className="font-semibold mb-4 text-gold">Knowledge Transfer</h3>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li>• Comprehensive documentation</li>
                  <li>• Team training and upskilling</li>
                  <li>• Gradual handover process</li>
                  <li>• Ongoing advisory support</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-gold/20 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              Ready to work with us?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-foreground/80 mb-8">
              Let's discuss how we can help you build something exceptional.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="gold-gradient text-black rounded-full px-8 py-4 text-sm font-medium hover:opacity-90 gold-ring">
                Start a conversation
              </a>
              <a href="/work" className="rounded-full border border-gold px-8 py-4 text-sm font-medium hover:bg-gold/5 transition-colors">
                See our work
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
