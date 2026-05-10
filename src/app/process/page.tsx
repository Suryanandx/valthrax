import Reveal from "@/components/Reveal";
import TechStackIcon from "@/components/TechStackIcon";
import AIBrainIcon from "@/components/AIBrainIcon";
import NetworkIcon from "@/components/NetworkIcon";
import BarChartIcon from "@/components/BarChartIcon";
import SearchIcon from "@/components/SearchIcon";
import GridLayoutIcon from "@/components/GridLayoutIcon";
import processData from "@/data/process.json";

const iconMap = {
  "discover-define": SearchIcon,
  "technical-blueprint": TechStackIcon,
  "design-sprints": GridLayoutIcon,
  "build": NetworkIcon,
  "launch-hardening": BarChartIcon,
  "scale-optimize": AIBrainIcon,
};

export default function ProcessPage() {
  return (
    <div className="min-h-screen text-foreground bg-background">
      {/* Hero */}
      <section className="pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-center mb-6">
              Our <span className="gold-text-gradient">Process</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xl text-foreground/80 text-center leading-relaxed">
              From idea to scale—a proven methodology that delivers predictable outcomes.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Process Overview */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {processData.phases.map((phase, index) => {
              const IconComponent = iconMap[phase.id as keyof typeof iconMap];
              const isEven = index % 2 === 0;
              
              return (
                <Reveal key={phase.id} delay={index * 0.1}>
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={!isEven ? 'lg:col-start-2' : ''}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-black font-bold text-lg">
                          {index + 1}
                        </div>
                        <div>
                          <h2 className="text-2xl font-semibold">{phase.title}</h2>
                          <p className="text-sm text-gold">{phase.duration}</p>
                        </div>
                      </div>
                      
                      <p className="text-foreground/80 mb-6 leading-relaxed">
                        {phase.description}
                      </p>

                      <div className="space-y-6">
                        <div>
                          <h3 className="font-semibold mb-3 text-gold">Key Activities</h3>
                          <ul className="space-y-2">
                            {phase.activities.map((activity, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm text-foreground/70">
                                <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                                {activity}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="font-semibold mb-3 text-gold">Deliverables</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {phase.deliverables.map((deliverable, i) => (
                              <div key={i} className="rounded-lg border border-gold/20 p-3">
                                <span className="text-sm text-foreground/80">{deliverable}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`flex justify-center ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                      <div className="w-64 h-64 bg-gold/5 rounded-2xl flex items-center justify-center border border-gold/20">
                        <IconComponent size={120} />
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="border-t border-gold/20 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-12 text-center">
              Engagement Models
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8">
            <Reveal>
              <div className="rounded-xl border border-gold p-8">
                <h3 className="text-xl font-semibold mb-4 text-gold">Fixed-scope MVP</h3>
                <p className="text-foreground/80 mb-4">
                  Clear scope & success metrics; single price; fast path to market.
                </p>
                <div className="text-sm text-foreground/70">
                  <strong>Best for:</strong> Greenfield clarity and a deadline
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="rounded-xl border border-gold p-8">
                <h3 className="text-xl font-semibold mb-4 text-gold">Pod Retainer</h3>
                <p className="text-foreground/80 mb-4">
                  Cross-functional squad (FE/BE/mobile/Design/DevOps); monthly velocity commitment.
                </p>
                <div className="text-sm text-foreground/70">
                  <strong>Best for:</strong> Ongoing roadmap with cross-functional needs
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-xl border border-gold p-8">
                <h3 className="text-xl font-semibold mb-4 text-gold">Codebase Rescue</h3>
                <p className="text-foreground/80 mb-4">
                  Audit → stabilization → debt paydown → roadmap reset.
                </p>
                <div className="text-sm text-foreground/70">
                  <strong>Best for:</strong> Unstable codebase or missed SLOs
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="rounded-xl border border-gold p-8">
                <h3 className="text-xl font-semibold mb-4 text-gold">Advisory Sprints</h3>
                <p className="text-foreground/80 mb-4">
                  Architecture, security, cost optimization, growth engineering.
                </p>
                <div className="text-sm text-foreground/70">
                  <strong>Best for:</strong> Specific questions: arch, security, cost, growth
                </div>
              </div>
            </Reveal>
          </div>
          
          <Reveal delay={0.2}>
            <div className="mt-8 p-6 rounded-xl bg-gold/5 border border-gold/20">
              <h3 className="font-semibold mb-2 text-gold">Always Included</h3>
              <p className="text-sm text-foreground/70">
                Weekly demos, written updates, roadmap stewardship, access to accelerators, 
                CI/CD setup, analytics implementation, comprehensive documentation, and handover training.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="border-t border-gold/20 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-12 text-center">
              How We Measure Success
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            <Reveal>
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChartIcon size={32} />
                </div>
                <h3 className="font-semibold mb-2">North-star Metrics</h3>
                <p className="text-sm text-foreground/70">
                  Revenue, activation rates, user retention—business outcomes that matter.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <NetworkIcon size={32} />
                </div>
                <h3 className="font-semibold mb-2">Leading Indicators</h3>
                <p className="text-sm text-foreground/70">
                  API latency, error budgets, conversion funnels—early signals of success.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TechStackIcon size={32} />
                </div>
                <h3 className="font-semibold mb-2">Technical Health</h3>
                <p className="text-sm text-foreground/70">
                  Code quality, test coverage, deployment frequency—sustainable velocity.
                </p>
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
              Ready to start your project?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-foreground/80 mb-8">
              Tell us your constraint—budget, deadline, or risk. We'll design the safest fast path to revenue.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <a href="/contact" className="gold-gradient text-black rounded-full px-8 py-4 text-sm font-medium hover:opacity-90 gold-ring inline-block">
              Get your blueprint
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
