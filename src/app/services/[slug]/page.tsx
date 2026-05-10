import Reveal from "@/components/Reveal";
import { notFound } from "next/navigation";
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

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = servicesData.services.find(s => s.id === params.slug);
  
  if (!service) {
    notFound();
  }

  const IconComponent = iconMap[service.icon as keyof typeof iconMap];

  return (
    <div className="min-h-screen text-foreground bg-background">
      <Header />
      
      {/* Hero - Framer-style asymmetric layout */}
      <section className="pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <Reveal immediate>
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-2xl bg-gold/10 border border-gold/20">
                    <IconComponent size={40} />
                  </div>
                  <div>
                    <div className="text-sm text-gold font-medium uppercase tracking-wide">Service</div>
                    <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
                      {service.title}
                    </h1>
                  </div>
                </div>
              </Reveal>
              
              <Reveal delay={0.1} immediate>
                <div className="space-y-6 mb-8">
                  <p className="text-xl text-foreground/80 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {service.whoItsFor && (
                    <div className="p-6 rounded-2xl bg-gold/5 border border-gold/20">
                      <div className="text-sm font-medium text-gold mb-2">Who it&apos;s for</div>
                      <p className="text-foreground/80">{service.whoItsFor}</p>
                    </div>
                  )}
                </div>
              </Reveal>
              
              <Reveal delay={0.15} immediate>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="gold-gradient text-black rounded-full px-6 py-3 font-medium hover:opacity-90 transition-opacity">
                    {service.cta || "Start Project"}
                  </Link>
                  <Link href="/work" className="rounded-full border border-gold px-6 py-3 font-medium hover:bg-gold/5 transition-colors">
                    View Case Studies
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right Bento Grid */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                <Reveal delay={0.2}>
                  <div className="col-span-2 p-6 rounded-2xl bg-gradient-to-br from-gold/5 to-gold/10 border border-gold/20">
                    <div className="text-lg font-semibold text-gold mb-2">
                      {service.successMetrics || "Success Metrics"}
                    </div>
                    <div className="text-sm text-foreground/70">
                      {service.exampleOutcome || "Proven results for our clients"}
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={0.25}>
                  <div className="p-4 rounded-xl border border-gold/20 bg-background/50">
                    <div className="text-lg font-semibold mb-1">{service.techStack?.length || 8}+</div>
                    <div className="text-xs text-foreground/60">Technologies</div>
                  </div>
                </Reveal>
                <Reveal delay={0.3}>
                  <div className="p-4 rounded-xl border border-gold/20 bg-background/50">
                    <div className="text-lg font-semibold mb-1">{service.deliverables?.length || 7}</div>
                    <div className="text-xs text-foreground/60">Deliverables</div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Solve - Bento Grid */}
      {service.problemsSolved && (
        <section className="py-20 bg-gradient-to-b from-background to-gold/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="text-3xl font-semibold mb-12 text-center">Problems We Solve</h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-6">
              {service.problemsSolved.map((problem, index) => (
                <Reveal key={index} delay={index * 0.1}>
                  <div className="p-8 rounded-2xl border border-gold/20 bg-background/80 backdrop-blur-sm hover:border-gold/40 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-red-500/80 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-lg leading-relaxed">{problem}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Timeline */}
      {service.processTimeline && (
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="text-3xl font-semibold mb-12 text-center">Process & Timeline</h2>
            </Reveal>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              {Object.entries(service.processTimeline).map(([key, value], index) => (
                <Reveal key={key} delay={index * 0.1}>
                  <div className="relative p-8 rounded-2xl border border-gold/20 bg-gradient-to-br from-background to-gold/5 hover:scale-105 transition-transform duration-300">
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-black font-bold text-sm">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold mb-3 capitalize text-gold">{key.replace(/([A-Z])/g, ' $1')}</h3>
                    <p className="text-foreground/80 leading-relaxed">{value}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Deliverables - Masonry-style Grid */}
      <section className="py-20 bg-gradient-to-b from-gold/5 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-semibold mb-12 text-center">What We Deliver</h2>
          </Reveal>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {service.deliverables.map((deliverable, index) => (
              <Reveal key={index} delay={index * 0.05}>
                <div className="break-inside-avoid p-6 rounded-2xl border border-gold/20 bg-background/80 backdrop-blur-sm hover:border-gold/40 transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-3 flex-shrink-0"></div>
                    <p className="leading-relaxed">{deliverable}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Approach */}
      {service.technicalApproach && (
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="text-3xl font-semibold mb-12 text-center">Technical Approach</h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-8">
              {service.technicalApproach.map((approach, index) => (
                <Reveal key={index} delay={index * 0.1}>
                  <div className="p-8 rounded-2xl border border-gold/20 bg-gradient-to-br from-gold/5 to-background hover:from-gold/10 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center text-black font-bold text-xs flex-shrink-0 mt-1">
                        {index + 1}
                      </div>
                      <p className="leading-relaxed">{approach}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tech Stack - Flowing Grid */}
      <section className="py-20 bg-gradient-to-b from-background to-gold/5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-semibold mb-12 text-center">Tech Stack</h2>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-4">
            {service.techStack.map((tech, index) => (
              <Reveal key={index} delay={index * 0.05}>
                <div className="px-6 py-3 rounded-full bg-gold/10 border border-gold/20 text-sm hover:bg-gold/20 hover:scale-105 transition-all duration-300 cursor-default">
                  {tech}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      {service.faqs && (
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="text-3xl font-semibold mb-12 text-center">Frequently Asked Questions</h2>
            </Reveal>
            <div className="space-y-6">
              {service.faqs.map((faq, index) => (
                <Reveal key={index} delay={index * 0.1}>
                  <div className="p-8 rounded-2xl border border-gold/20 bg-gradient-to-r from-background to-gold/5 hover:border-gold/40 transition-all duration-300">
                    <h3 className="text-lg font-semibold mb-3 text-gold">{faq.q}</h3>
                    <p className="text-foreground/80 leading-relaxed">{faq.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA - Full Width */}
      <section className="py-20 bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-3xl font-semibold mb-6">Ready to Transform Your Product?</h2>
            <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
              {service.cta || "Let's discuss your specific needs and create a tailored approach."}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="gold-gradient text-black rounded-full px-8 py-4 font-medium hover:opacity-90 transition-opacity">
                Start Your Project
              </Link>
              <Link href="/work" className="rounded-full border border-gold px-8 py-4 font-medium hover:bg-gold/10 transition-colors">
                View Our Work
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
