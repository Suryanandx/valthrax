import Reveal from "@/components/Reveal";
import servicesData from "@/data/services.json";
import AIBrainIcon from "@/components/AIBrainIcon";
import TechStackIcon from "@/components/TechStackIcon";
import BarChartIcon from "@/components/BarChartIcon";
import GridLayoutIcon from "@/components/GridLayoutIcon";
import NetworkIcon from "@/components/NetworkIcon";
import SearchIcon from "@/components/SearchIcon";
import CodeIcon from "@/components/CodeIcon";
import DatabaseIcon from "@/components/DatabaseIcon";
import SecurityIcon from "@/components/SecurityIcon";
import CloudIcon from "@/components/CloudIcon";
import MobileIcon from "@/components/MobileIcon";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const iconMap = {
  TechStackIcon,
  AIBrainIcon,
  GridLayoutIcon,
  NetworkIcon,
  BarChartIcon,
  SearchIcon,
  CodeIcon,
  DatabaseIcon,
  SecurityIcon,
  CloudIcon,
  MobileIcon,
  code: CodeIcon,
  database: DatabaseIcon,
  security: SecurityIcon,
  cloud: CloudIcon,
  mobile: MobileIcon,
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen text-foreground bg-background">
      <Header />
      {/* Hero */}
      <section className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-center mb-6">
              Our <span className="gold-text-gradient">Services</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-foreground/80 text-center max-w-3xl mx-auto">
              Senior-led pods that turn ideas into durable products. We architect for v2 while shipping v1 fast.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.services.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap];
              return (
                <Reveal key={service.id} delay={index * 0.05}>
                  <Link href={`/services/${service.id}`}>
                    <div className="rounded-xl border border-gold p-8 hover:bg-gold/5 transition-all duration-300 group h-full">
                      <div className="flex justify-center mb-6">
                        <IconComponent size={64} />
                      </div>
                      <h3 className="text-xl font-semibold mb-4 group-hover:text-gold transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-foreground/80 mb-6">
                        {service.description}
                      </p>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-sm text-gold mb-2">Common Wins:</h4>
                          <ul className="text-sm text-foreground/70 space-y-1">
                            {service.commonWins.map((win, i) => (
                              <li key={i}>• {win}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="pt-4 border-t border-gold/20">
                          <div className="flex flex-wrap gap-2">
                            {service.techStack.slice(0, 3).map((tech, i) => (
                              <span key={i} className="text-xs bg-gold/10 text-gold px-2 py-1 rounded">
                                {tech}
                              </span>
                            ))}
                            {service.techStack.length > 3 && (
                              <span className="text-xs text-foreground/60">+{service.techStack.length - 3} more</span>
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

      {/* CTA Section */}
      <section className="border-t border-gold/20 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              Ready to build something exceptional?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-foreground/80 mb-8">
              Tell us your constraint—budget, deadline, or risk. We'll design the safest fast path to revenue.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Link href="/contact" className="gold-gradient text-black rounded-full px-8 py-4 text-sm font-medium hover:opacity-90 gold-ring inline-block">
              Get your blueprint
            </Link>
          </Reveal>
        </div>
      </section>
      <Footer />
    </div>
  );
}
