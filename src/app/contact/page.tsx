import Reveal from "@/components/Reveal";
import NetworkIcon from "@/components/NetworkIcon";

export default function ContactPage() {
  return (
    <div className="min-h-screen text-foreground bg-background">
      {/* Hero */}
      <section className="pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-center mb-6">
              Start a <span className="gold-text-gradient">Conversation</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xl text-foreground/80 text-center leading-relaxed">
              Bring us your idea or a messy codebase. We'll respond with a 1-page blueprint—architecture, risks, and the fastest safe path to revenue.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Reveal>
              <div>
                <h2 className="text-2xl font-semibold mb-6">Project Brief</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name *</label>
                      <input 
                        type="text" 
                        required
                        className="w-full rounded-lg border border-gold/20 px-4 py-3 bg-background focus:border-gold focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Work Email *</label>
                      <input 
                        type="email" 
                        required
                        className="w-full rounded-lg border border-gold/20 px-4 py-3 bg-background focus:border-gold focus:outline-none transition-colors"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Company / Product</label>
                    <input 
                      type="text"
                      className="w-full rounded-lg border border-gold/20 px-4 py-3 bg-background focus:border-gold focus:outline-none transition-colors"
                      placeholder="Your company or product name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Problem & Audience *</label>
                    <textarea 
                      required
                      rows={3}
                      className="w-full rounded-lg border border-gold/20 px-4 py-3 bg-background focus:border-gold focus:outline-none transition-colors resize-none"
                      placeholder="What problem are you solving and for whom?"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Target Metric</label>
                      <input 
                        type="text"
                        className="w-full rounded-lg border border-gold/20 px-4 py-3 bg-background focus:border-gold focus:outline-none transition-colors"
                        placeholder="e.g., $1M ARR, 10K users"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Timeline</label>
                      <select className="w-full rounded-lg border border-gold/20 px-4 py-3 bg-background focus:border-gold focus:outline-none transition-colors">
                        <option>Select timeline</option>
                        <option>ASAP (2-4 weeks)</option>
                        <option>Soon (1-3 months)</option>
                        <option>Planning (3-6 months)</option>
                        <option>Exploring (6+ months)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Current Stack & Constraints</label>
                    <textarea 
                      rows={3}
                      className="w-full rounded-lg border border-gold/20 px-4 py-3 bg-background focus:border-gold focus:outline-none transition-colors resize-none"
                      placeholder="Existing technology, team size, budget constraints, compliance requirements..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Success Definition</label>
                    <textarea 
                      rows={2}
                      className="w-full rounded-lg border border-gold/20 px-4 py-3 bg-background focus:border-gold focus:outline-none transition-colors resize-none"
                      placeholder="How will you know this project succeeded?"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input type="checkbox" id="data-sensitive" className="mt-1" />
                    <label htmlFor="data-sensitive" className="text-sm text-foreground/70">
                      This project involves sensitive data (PII, PHI, financial, etc.)
                    </label>
                  </div>

                  <button 
                    type="submit"
                    className="w-full gold-gradient text-black rounded-full px-8 py-4 font-medium hover:opacity-90 transition-opacity"
                  >
                    Send Project Brief
                  </button>
                </form>

                <div className="mt-6 p-4 rounded-lg bg-gold/5 border border-gold/20">
                  <p className="text-sm text-foreground/70">
                    <strong className="text-gold">Response Promise:</strong> We return a 1-page blueprint with risks, approach, and suggested engagement within 1 business day.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-8">
                <div className="flex justify-center">
                  <NetworkIcon size={120} />
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gold">Alternative Contact</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="font-medium">Email</div>
                      <a href="mailto:founders@valnoraelric.com" className="text-gold hover:underline">
                        founders@valnoraelric.com
                      </a>
                    </div>
                    <div>
                      <div className="font-medium">Response Time</div>
                      <div className="text-foreground/70">Within 1 business day</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gold">What Happens Next?</h3>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center text-black text-xs font-bold flex-shrink-0 mt-0.5">1</div>
                      <div>
                        <div className="font-medium">Initial Review</div>
                        <div className="text-sm text-foreground/70">We analyze your brief and identify key technical risks and opportunities.</div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center text-black text-xs font-bold flex-shrink-0 mt-0.5">2</div>
                      <div>
                        <div className="font-medium">Blueprint Creation</div>
                        <div className="text-sm text-foreground/70">We create a 1-page technical blueprint with architecture, timeline, and approach.</div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center text-black text-xs font-bold flex-shrink-0 mt-0.5">3</div>
                      <div>
                        <div className="font-medium">Strategy Call</div>
                        <div className="text-sm text-foreground/70">30-minute call to discuss the blueprint and answer your questions.</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gold">Engagement Types</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong>Fixed MVP:</strong> Clear scope, single price, fast path to market
                    </div>
                    <div>
                      <strong>Pod Retainer:</strong> Cross-functional squad for ongoing development
                    </div>
                    <div>
                      <strong>Codebase Rescue:</strong> Audit and stabilization of existing systems
                    </div>
                    <div>
                      <strong>Advisory:</strong> Architecture, security, and growth engineering guidance
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-gold/20 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl font-semibold mb-8 text-center">Common Questions</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            <Reveal>
              <div className="rounded-lg border border-gold/20 p-6">
                <h3 className="font-medium mb-2">Do you sign NDAs?</h3>
                <p className="text-sm text-foreground/70">
                  Yes, we're happy to sign mutual NDAs before discussing sensitive details.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="rounded-lg border border-gold/20 p-6">
                <h3 className="font-medium mb-2">What's the minimum engagement?</h3>
                <p className="text-sm text-foreground/70">
                  Advisory sprints start at 2 weeks. Fixed MVPs typically 8-16 weeks.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-lg border border-gold/20 p-6">
                <h3 className="font-medium mb-2">Do you work with existing teams?</h3>
                <p className="text-sm text-foreground/70">
                  Yes, we embed with your team or run as a parallel pod. We don't replace—we augment.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="rounded-lg border border-gold/20 p-6">
                <h3 className="font-medium mb-2">What about IP ownership?</h3>
                <p className="text-sm text-foreground/70">
                  All code is client-owned. Our accelerators are licensed with usage rights for the engagement.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
