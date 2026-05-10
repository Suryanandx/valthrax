import Reveal from "@/components/Reveal";
import AnimatedAreaChart from "@/components/AnimatedAreaChart";
import caseStudiesData from "@/data/caseStudies.json";
import Link from "next/link";

export default function WorkPage() {
  return (
    <div className="min-h-screen text-foreground bg-background">
      {/* Hero */}
      <section className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-center mb-6">
              Our <span className="gold-text-gradient">Work</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-foreground/80 text-center max-w-3xl mx-auto">
              Real projects, real outcomes. See how we've helped startups scale from idea to revenue.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Case Studies */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudiesData.caseStudies.map((caseStudy, index) => (
              <Reveal key={caseStudy.id} delay={index * 0.1}>
                <div className="rounded-2xl border border-gold p-8 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs bg-gold/10 text-gold px-3 py-1 rounded-full font-medium">
                          {caseStudy.industry} • {caseStudy.stage}
                        </span>
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
                        {caseStudy.title}
                      </h2>
                      <p className="text-foreground/80 mb-6 leading-relaxed">
                        {caseStudy.context.problem}
                      </p>
                      
                      {/* Key Metrics */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {Object.entries(caseStudy.result.metrics).map(([key, value]) => (
                          <div key={key} className="text-center p-4 rounded-lg border border-gold/20">
                            <div className="text-xl font-semibold text-gold">{value}</div>
                            <div className="text-xs text-foreground/60 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-gold mb-2">Challenge:</h4>
                          <p className="text-sm text-foreground/70">{caseStudy.context.problem}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gold mb-2">Outcome:</h4>
                          <p className="text-sm text-foreground/70">{caseStudy.result.businessOutcome}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gold mb-2">What we learned:</h4>
                          <p className="text-sm text-foreground/70">{caseStudy.learned}</p>
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div className="mt-6 pt-6 border-t border-gold/20">
                        <h4 className="font-medium text-gold mb-3">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-2">
                          {caseStudy.stack.map((tech, i) => (
                            <span key={i} className="text-xs bg-gold/10 text-gold px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <div className="w-full max-w-md">
                        <AnimatedAreaChart 
                          width={400} 
                          height={250} 
                          seed={index * 0.3} 
                          color="var(--color-royal-500)" 
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="border-t border-gold/20 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-12">
              Our Proven Process
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            <Reveal>
              <div className="text-center">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2">Discover & Define</h3>
                <p className="text-sm text-foreground/70">
                  Problem framing, stakeholder alignment, and success metrics definition.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="text-center">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2">Blueprint & Build</h3>
                <p className="text-sm text-foreground/70">
                  Technical architecture, design sprints, and rapid development cycles.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="text-center">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2">Launch & Scale</h3>
                <p className="text-sm text-foreground/70">
                  Production hardening, monitoring, and continuous optimization.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="text-center mt-8">
            <Link href="/process" className="text-gold hover:underline">
              Learn more about our process →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-gold/20 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              Ready to create your success story?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-foreground/80 mb-8">
              Bring us your idea or messy codebase. We'll respond with a 1-page blueprint.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Link href="/contact" className="gold-gradient text-black rounded-full px-8 py-4 text-sm font-medium hover:opacity-90 gold-ring inline-block">
              Start your project
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
