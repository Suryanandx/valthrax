import Reveal from "@/components/Reveal";
import AnimatedAreaChart from "@/components/AnimatedAreaChart";
import Orbits from "@/components/Orbits";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchIcon from "@/components/SearchIcon";
import AIBrainIcon from "@/components/AIBrainIcon";
import TechStackIcon from "@/components/TechStackIcon";
import BarChartIcon from "@/components/BarChartIcon";
import GridLayoutIcon from "@/components/GridLayoutIcon";
import NetworkIcon from "@/components/NetworkIcon";
import homepageData from "@/data/homepage.json";

export default function Home() {
  return (
    <div className="min-h-screen text-foreground bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-16">
          <div className="absolute inset-0 flex items-center justify-center opacity-40 dark:opacity-30 text-gold">
            <Orbits size={720} />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal immediate>
                <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight">
                  {homepageData.hero.headline}
                </h1>
              </Reveal>
              <Reveal delay={0.1} immediate>
                <p className="mt-6 text-lg leading-8 text-foreground/80">
                  {homepageData.hero.subheadline}
                </p>
              </Reveal>
              <Reveal delay={0.15} immediate>
                <div className="mt-8 flex items-center justify-center gap-3">
                  <a href={homepageData.hero.primaryCTA.href} className="gold-gradient text-black rounded-full px-5 py-3 text-sm font-medium hover:opacity-90 gold-ring">{homepageData.hero.primaryCTA.text}</a>
                  <a href={homepageData.hero.secondaryCTA.href} className="rounded-full border px-5 py-3 text-sm font-medium hover:bg-foreground/5">{homepageData.hero.secondaryCTA.text}</a>
                </div>
              </Reveal>
            </div>

            {/* Credibility Strip */}
            <div className="mt-14 grid md:grid-cols-3 gap-6">
              {homepageData.hero.credibilityStrip.metrics.map((metric, index) => (
                <Reveal key={index} delay={index * 0.05}>
                  <div className="rounded-2xl border border-gold p-6 text-center">
                    <div className="text-2xl font-semibold text-gold mb-1">{metric.value}</div>
                    <div className="text-xs text-foreground/60">{metric.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Leadership */}
        <section id="what" className="border-t border-black/5 dark:border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <Reveal>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">Technical Leadership & Architecture</h2>
              <p className="text-foreground/80 max-w-3xl mb-12">We don&apos;t just build features—we architect scalable systems, establish engineering culture, and set technical direction for long-term success.</p>
            </Reveal>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <Reveal>
                <div className="rounded-xl border border-gold p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <TechStackIcon size={48} />
                  </div>
                  <h3 className="font-medium mb-2">System Architecture</h3>
                  <p className="text-sm text-foreground/80">Microservices, event-driven architecture, multi-tenant SaaS patterns with production-grade observability.</p>
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <div className="rounded-xl border border-gold p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <AIBrainIcon size={48} />
                  </div>
                  <h3 className="font-medium mb-2">AI/ML Integration</h3>
                  <p className="text-sm text-foreground/80">LLM orchestration, vector databases, real-time inference, and intelligent automation workflows.</p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="rounded-xl border border-gold p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <NetworkIcon size={48} />
                  </div>
                  <h3 className="font-medium mb-3">DevOps & Infrastructure</h3>
                  <p className="text-sm text-foreground/80">Kubernetes, Terraform, CI/CD pipelines, security-first deployment with zero-downtime releases.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Partnership Model */}
        <section id="partnership" className="border-t border-black/5 dark:border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <Reveal>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">Partnership Model</h2>
              <p className="text-foreground/80 max-w-3xl mb-12">We embed as your technical co-founder, not just a vendor. Full ownership of technical decisions, architecture, and engineering velocity.</p>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-8">
              <Reveal>
                <div className="rounded-xl border border-gold p-8">
                  <div className="flex items-center mb-4">
                    <SearchIcon size={32} />
                    <h3 className="font-medium ml-3">Discovery & Architecture</h3>
                  </div>
                  <ul className="text-sm text-foreground/80 space-y-2">
                    <li>• Technical due diligence and system audit</li>
                    <li>• Architecture design and technology selection</li>
                    <li>• Engineering roadmap and milestone planning</li>
                    <li>• Team structure and hiring strategy</li>
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <div className="rounded-xl border border-gold p-8">
                  <div className="flex items-center mb-4">
                    <GridLayoutIcon size={32} />
                    <h3 className="font-medium ml-3">Build & Scale</h3>
                  </div>
                  <ul className="text-sm text-foreground/80 space-y-2">
                    <li>• MVP development and rapid iteration</li>
                    <li>• Production infrastructure and DevOps</li>
                    <li>• Team scaling and engineering culture</li>
                    <li>• Ongoing technical leadership and mentorship</li>
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Engineering Process */}
        <section id="process" className="border-t border-black/5 dark:border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <Reveal>
              <h2 className="text-xl sm:text-2xl font-semibold mb-12">Engineering Excellence</h2>
            </Reveal>
            <div className="grid md:grid-cols-4 gap-6">
              <Reveal>
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <BarChartIcon size={48} />
                  </div>
                  <h3 className="font-medium mb-2 text-gold">Week 1-2</h3>
                  <p className="text-sm text-foreground/80">Technical audit, architecture design, and development environment setup</p>
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <TechStackIcon size={48} />
                  </div>
                  <h3 className="font-medium mb-2 text-gold">Week 3-8</h3>
                  <p className="text-sm text-foreground/80">Core platform development with CI/CD, monitoring, and security foundations</p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <NetworkIcon size={48} />
                  </div>
                  <h3 className="font-medium mb-2 text-gold">Week 9-16</h3>
                  <p className="text-sm text-foreground/80">Feature development, user testing, and production deployment with monitoring</p>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <AIBrainIcon size={48} />
                  </div>
                  <h3 className="font-medium mb-2 text-gold">Ongoing</h3>
                  <p className="text-sm text-foreground/80">Scaling, optimization, team growth, and advanced feature development</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section id="cases" className="border-t border-black/5 dark:border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <Reveal>
              <h2 className="text-xl sm:text-2xl font-semibold mb-12">Technical Outcomes</h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-6">
              <Reveal>
                <div className="rounded-xl border border-gold p-6">
                  <div className="text-xs text-foreground/60 mb-2">FinTech Series A</div>
                  <h3 className="font-medium mb-3">Multi-tenant Banking Platform</h3>
                  <div className="space-y-2 text-sm text-foreground/80 mb-4">
                    <div>• 99.99% uptime across 50K+ users</div>
                    <div>• &lt;200ms API response times</div>
                    <div>• SOC 2 Type II compliance</div>
                    <div>• $2M ARR in 8 months</div>
                  </div>
                  <AnimatedAreaChart width={280} height={100} seed={0.3} color="var(--color-royal-500)" />
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <div className="rounded-xl border border-gold p-6">
                  <div className="text-xs text-foreground/60 mb-2">HealthTech Seed</div>
                  <h3 className="font-medium mb-3">AI-Powered Care Platform</h3>
                  <div className="space-y-2 text-sm text-foreground/80 mb-4">
                    <div>• HIPAA-compliant infrastructure</div>
                    <div>• Real-time ML inference pipeline</div>
                    <div>• 10x faster diagnosis workflows</div>
                    <div>• Series A in 6 months</div>
                  </div>
                  <AnimatedAreaChart width={280} height={100} seed={0.7} color="var(--color-royal-500)" />
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="rounded-xl border border-gold p-6">
                  <div className="text-xs text-foreground/60 mb-2">EdTech Series B</div>
                  <h3 className="font-medium mb-3">Global Learning Platform</h3>
                  <div className="space-y-2 text-sm text-foreground/80 mb-4">
                    <div>• 1M+ concurrent users</div>
                    <div>• Multi-region deployment</div>
                    <div>• 40% cost optimization</div>
                    <div>• $10M ARR milestone</div>
                  </div>
                  <AnimatedAreaChart width={280} height={100} seed={1.1} color="var(--color-royal-500)" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Who we serve */}
        <section id="who" className="border-t border-black/5 dark:border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <Reveal>
              <h2 className="text-xl sm:text-2xl font-semibold">Ideal Partners</h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-4 text-foreground/80 max-w-3xl">
                Seed to Series B founders in AI, FinTech, HealthTech, EdTech, and B2B SaaS who need a technical co-founder to own the entire engineering roadmap and execution.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Why us */}
        <section id="why" className="border-t border-black/5 dark:border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <Reveal>
              <h2 className="text-xl sm:text-2xl font-semibold">Why us</h2>
            </Reveal>
            <ul className="mt-6 grid md:grid-cols-2 gap-4 text-sm">
              {[
                "Senior-led pods (architecture first, shipping fast without rewrites).",
                "Production-grade from day 1 (CI/CD, IaC, observability, security).",
                "Multi-tenant & scalable patterns (Kafka/Redis when needed, not by default).",
                "Design-driven UX with measurable conversion impact.",
                "Flexible commercials (fixed MVP, retainer, or cash + equity).",
              ].map((text, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <li className="rounded-lg border p-4">{text}</li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* Proof */}
        <section id="proof" className="border-t border-black/5 dark:border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <Reveal>
              <h2 className="text-xl sm:text-2xl font-semibold">Proof</h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-4 max-w-3xl text-foreground/80">
                Shipped AI and commerce products incl. social‑commerce platforms, LMS & care apps, and internal enterprise tools; built full mobile + web stacks with robust analytics, notifications, and payments.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Tech snapshot */}
        <section id="tech" className="border-t border-black/5 dark:border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-xl sm:text-2xl font-semibold">Tech snapshot</h2>
            <p className="mt-4 text-sm text-foreground/80 max-w-4xl">
              React/Next.js • React Native • NestJS/Node • FastAPI/Python • Postgres/Prisma • Redis/Kafka • AWS/GCP • Terraform • GitHub Actions • Customer.io/Statsig • Stripe/Razorpay/UPI
            </p>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <Reveal>
                <div className="rounded-xl border border-gold p-6">
                  <div className="text-xs text-foreground/60 mb-2">Service health</div>
                  <AnimatedAreaChart width={360} height={140} seed={1.1} color="var(--color-royal-500)" />
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <div className="rounded-xl border border-gold p-6">
                  <div className="text-xs text-foreground/60 mb-2">Experiment lift</div>
                  <AnimatedAreaChart width={360} height={140} seed={1.4} color="var(--color-royal-500)" />
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="rounded-xl border border-gold p-6">
                  <div className="text-xs text-foreground/60 mb-2">Cost efficiency</div>
                  <AnimatedAreaChart width={360} height={140} seed={1.7} color="var(--color-royal-500)" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Quick CTAs */}
        <section id="quick-ctas" className="border-t border-black/5 dark:border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-xl sm:text-2xl font-semibold">Quick CTAs</h2>
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <Reveal>
                <div className="rounded-xl border border-gold p-6">
                  <h3 className="font-medium">Need an MVP or v2?</h3>
                  <p className="mt-2 text-sm text-foreground/80">We can share a crisp 1‑page technical blueprint and a phased roadmap on request.</p>
                  <a href="#contact" className="mt-4 inline-block gold-gradient text-black rounded-full px-4 py-2 text-sm font-medium gold-ring">Request blueprint</a>
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <div className="rounded-xl border border-gold p-6">
                  <h3 className="font-medium">Have an existing codebase?</h3>
                  <p className="mt-2 text-sm text-foreground/80">We’ll run a short audit and propose a pragmatic hardening plan.</p>
                  <a href="#contact" className="mt-4 inline-block rounded-full border px-4 py-2 text-sm font-medium gold-ring">Request audit</a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="border-t border-black/5 dark:border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { k: "+45", v: "Shipped features/mo" },
                { k: "<200ms", v: "P95 API latency" },
                { k: "99.9%", v: "Uptime targets" },
                { k: "ISO", v: "Security-first workflows" },
              ].map((m, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="rounded-xl border border-gold p-6">
                    <div className="text-2xl font-semibold tracking-tight text-gold">{m.k}</div>
                    <div className="text-xs text-foreground/60 mt-1">{m.v}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-black/5 dark:border-white/10">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
            <Reveal>
              <h2 className="text-xl sm:text-2xl font-semibold">Start a conversation</h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-2 text-sm text-foreground/80">Tell us briefly about your product and goals. We’ll reply with next steps within 1 business day.</p>
            </Reveal>
            <form className="mt-6 grid gap-4">
              <input className="rounded-lg border px-4 py-3 bg-background" placeholder="Name" required />
              <input type="email" className="rounded-lg border px-4 py-3 bg-background" placeholder="Work email" required />
              <input className="rounded-lg border px-4 py-3 bg-background" placeholder="Company / product" />
              <textarea className="rounded-lg border px-4 py-3 bg-background" placeholder="What are you trying to build or improve?" rows={4} />
              <div className="flex items-center gap-3">
                <button type="submit" className="rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium">Send</button>
                <span className="text-xs text-foreground/60">Or email founders@valnoraelric.com</span>
              </div>
            </form>
          </div>
        </section>

        {/* FAQs for SEO */}
        <section className="border-t border-black/5 dark:border-white/10">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-xl sm:text-2xl font-semibold">FAQs</h2>
            <div className="mt-6 grid md:grid-cols-2 gap-6 text-sm">
              {[
                {
                  q: "Do you work as an embedded founding engineering partner?",
                  a: "Yes. Senior pods embed with product, design, and GTM to shape architecture, ship quickly, and set up long-term maintainability.",
                },
                {
                  q: "What stacks do you prefer?",
                  a: "Next.js/React, React Native, NestJS/Node, FastAPI/Python, Postgres/Prisma on AWS/GCP—plus Redis/Kafka where needed.",
                },
                {
                  q: "How do you price?",
                  a: "Flexible: fixed MVP, monthly retainer, or cash + equity. We propose a phased roadmap with clear milestones.",
                },
                {
                  q: "Can you harden an existing codebase?",
                  a: "Yes. We run a focused audit and produce a pragmatic hardening plan covering reliability, security, and observability.",
                },
              ].map((f, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="rounded-xl border p-5">
                    <div className="font-medium">{f.q}</div>
                    <div className="mt-1 text-foreground/80">{f.a}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
