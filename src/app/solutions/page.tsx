import Reveal from "@/components/Reveal";
import NetworkIcon from "@/components/NetworkIcon";
import AIBrainIcon from "@/components/AIBrainIcon";
import TechStackIcon from "@/components/TechStackIcon";
import BarChartIcon from "@/components/BarChartIcon";
import SearchIcon from "@/components/SearchIcon";
import solutionsData from "@/data/solutions.json";
import Link from "next/link";

const iconMap = {
  fintech: NetworkIcon,
  healthtech: AIBrainIcon,
  edtech: TechStackIcon,
  marketplaces: BarChartIcon,
  social: SearchIcon,
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen text-foreground bg-background">
      {/* Hero */}
      <section className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-center mb-6">
              Industry <span className="gold-text-gradient">Solutions</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-foreground/80 text-center max-w-3xl mx-auto">
              Specialized expertise for regulated industries and complex technical challenges.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionsData.solutions.map((solution, index) => {
              const IconComponent = iconMap[solution.id as keyof typeof iconMap];
              return (
                <Reveal key={solution.id} delay={index * 0.05}>
                  <Link href={`/solutions/${solution.id}`}>
                    <div className="rounded-xl border border-gold p-8 hover:bg-gold/5 transition-all duration-300 group h-full">
                      <div className="flex justify-center mb-6">
                        <IconComponent size={64} />
                      </div>
                      <h3 className="text-xl font-semibold mb-4 group-hover:text-gold transition-colors">
                        {solution.title}
                      </h3>
                      <p className="text-foreground/80 mb-6">
                        {solution.description}
                      </p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-sm text-gold mb-2">Proof Points:</h4>
                          <ul className="text-sm text-foreground/70 space-y-1">
                            {solution.proofPoints.map((point, i) => (
                              <li key={i}>• {point}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="pt-4 border-t border-gold/20">
                          <div className="flex flex-wrap gap-2">
                            {solution.techStack.slice(0, 3).map((tech, i) => (
                              <span key={i} className="text-xs bg-gold/10 text-gold px-2 py-1 rounded">
                                {tech}
                              </span>
                            ))}
                            {solution.techStack.length > 3 && (
                              <span className="text-xs text-foreground/60">+{solution.techStack.length - 3} more</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Industry Expertise Matters */}
      <section className="border-t border-gold/20 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-12">
              Why Industry Expertise Matters
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            <Reveal>
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TechStackIcon size={32} />
                </div>
                <h3 className="font-semibold mb-2">Compliance-First Architecture</h3>
                <p className="text-sm text-foreground/70">
                  Built-in regulatory compliance, security controls, and audit trails from day one.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <NetworkIcon size={32} />
                </div>
                <h3 className="font-semibold mb-2">Domain-Specific Patterns</h3>
                <p className="text-sm text-foreground/70">
                  Proven architectural patterns and integrations specific to your industry.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChartIcon size={32} />
                </div>
                <h3 className="font-semibold mb-2">Faster Time to Market</h3>
                <p className="text-sm text-foreground/70">
                  Skip the learning curve with teams who understand your business model.
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
              Ready to build in your industry?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-foreground/80 mb-8">
              Let's discuss your specific regulatory requirements and technical challenges.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Link href="/contact" className="gold-gradient text-black rounded-full px-8 py-4 text-sm font-medium hover:opacity-90 gold-ring inline-block">
              Discuss your project
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
