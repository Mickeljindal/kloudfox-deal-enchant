import { ReactNode } from "react";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section, { SectionHeader } from "./Section";
import Aurora from "./Aurora";
import Reveal from "./Reveal";
import SEO, { breadcrumbJsonLd, faqJsonLd } from "@/components/SEO";
import { SITE, absoluteUrl } from "@/lib/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ShareBar from "./ShareBar";

export interface ProductFeature {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface ProductBenefit {
  title: string;
  description: string;
}

export interface ProductPageConfig {
  slug: string;
  eyebrow: string;
  seo: {
    title: string;
    description: string;
    keywords?: string;
  };
  hero: {
    heading: ReactNode;
    subheading: string;
    primaryCta?: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
    heroVisual?: ReactNode;
  };
  tldr?: string;
  features: ProductFeature[];
  benefits?: ProductBenefit[];
  quote?: {
    text: string;
    author: string;
    role: string;
  };
  faqs?: Array<{ question: string; answer: string }>;
}

export default function ProductPageTemplate({ config }: { config: ProductPageConfig }) {
  const url = absoluteUrl(`/${config.slug}`);

  const jsonLd: Record<string, unknown>[] = [
    breadcrumbJsonLd([
      { name: "Home", url: "/" },
      { name: config.seo.title, url: `/${config.slug}` },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: config.seo.title,
      description: config.seo.description,
      isPartOf: { "@id": `${SITE.url}#website` },
      about: { "@id": `${SITE.url}#organization` },
    },
  ];
  if (config.faqs && config.faqs.length > 0) {
    jsonLd.push(faqJsonLd(config.faqs));
  }

  return (
    <>
      <SEO
        title={config.seo.title}
        description={config.seo.description}
        path={`/${config.slug}`}
        keywords={config.seo.keywords}
        jsonLd={jsonLd}
      />

      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#050510] text-white">
          <Aurora />
          <div aria-hidden className="absolute inset-0 grid-bg opacity-40" />
          <div aria-hidden className="noise" />

          <div className="container mx-auto px-4 relative z-10 pt-24 pb-20 md:pt-32 md:pb-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Reveal>
                <div className="eyebrow mb-5 text-primary/90">
                  <span className="h-1 w-6 rounded-full bg-primary/60" aria-hidden />
                  {config.eyebrow}
                </div>
                <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-balance">
                  {config.hero.heading}
                </h1>
                <p className="mt-6 text-lg text-white/60 max-w-xl leading-relaxed text-balance">
                  {config.hero.subheading}
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  {config.hero.primaryCta && (
                    <Button asChild size="lg" className="btn-aurora rounded-xl h-12 px-6 text-base font-semibold">
                      <a
                        href={config.hero.primaryCta.href}
                        target={config.hero.primaryCta.href.startsWith("http") ? "_blank" : undefined}
                        rel={config.hero.primaryCta.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {config.hero.primaryCta.label}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {config.hero.secondaryCta && (
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 text-white rounded-xl h-12 px-6 text-base font-semibold"
                    >
                      <a
                        href={config.hero.secondaryCta.href}
                        target={config.hero.secondaryCta.href.startsWith("http") ? "_blank" : undefined}
                        rel={config.hero.secondaryCta.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {config.hero.secondaryCta.label}
                      </a>
                    </Button>
                  )}
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <ShareBar title={config.seo.title} path={`/${config.slug}`} />
                </div>
              </Reveal>

              {config.hero.heroVisual && (
                <Reveal delay={100} className="relative">
                  <div
                    aria-hidden
                    className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-3xl -z-10"
                  />
                  {config.hero.heroVisual}
                </Reveal>
              )}
            </div>
          </div>
        </section>

        {/* TL;DR for GEO/AIO */}
        {config.tldr && (
          <section className="border-y border-border bg-muted/30">
            <div className="container mx-auto px-4 py-6">
              <div className="max-w-4xl mx-auto flex items-start gap-3">
                <span className="inline-flex items-center gap-1 rounded-full bg-primary/15 border border-primary/25 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-primary shrink-0 mt-1">
                  <Sparkles className="h-3 w-3" />
                  TL;DR
                </span>
                <p className="text-sm md:text-[15px] text-foreground/80 leading-relaxed">{config.tldr}</p>
              </div>
            </div>
          </section>
        )}

        {/* Feature grid */}
        <Section tone="default" padding="xl">
          <SectionHeader
            eyebrow="What you get"
            title={
              <>
                Purpose-built for{" "}
                <span className="gradient-text">{config.eyebrow.toLowerCase()}.</span>
              </>
            }
            subtitle="Every capability below ships in the box. No add-ons, no upsells."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {config.features.map((f, i) => (
              <Reveal key={f.title} delay={i * 50}>
                <div className="h-full rounded-2xl border border-border bg-card/60 backdrop-blur-md p-6 hover:border-primary/20 transition-colors">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mb-4">
                    {f.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 tracking-tight">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Benefits */}
        {config.benefits && config.benefits.length > 0 && (
          <Section tone="muted" padding="xl">
            <SectionHeader
              eyebrow="Why teams switch"
              title={
                <>
                  Concrete gains, <span className="gradient-text">week one.</span>
                </>
              }
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
              {config.benefits.map((b, i) => (
                <Reveal key={b.title} delay={i * 60}>
                  <div className="rounded-2xl border border-border bg-card/70 backdrop-blur-md p-6">
                    <div className="flex items-start gap-3">
                      <span className="h-8 w-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                        <Check className="h-4 w-4" />
                      </span>
                      <div>
                        <h3 className="font-semibold mb-1">{b.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Section>
        )}

        {/* Pull quote */}
        {config.quote && (
          <Section tone="default" padding="lg">
            <div className="max-w-3xl mx-auto text-center">
              <div className="text-4xl md:text-5xl font-display font-semibold text-balance leading-tight">
                <span className="gradient-text-warm">"</span>
                {config.quote.text}
                <span className="gradient-text-warm">"</span>
              </div>
              <div className="mt-6 text-sm text-muted-foreground">
                — <span className="text-foreground font-medium">{config.quote.author}</span>, {config.quote.role}
              </div>
            </div>
          </Section>
        )}

        {/* FAQs */}
        {config.faqs && config.faqs.length > 0 && (
          <Section tone="muted" padding="xl">
            <SectionHeader eyebrow="FAQ" title="Answers, no marketing gloss." />
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-2">
                {config.faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="border border-border bg-card/70 backdrop-blur-md rounded-2xl px-5 md:px-6 data-[state=open]:border-primary/30"
                  >
                    <AccordionTrigger className="text-left font-semibold text-[15px] hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-[15px] leading-relaxed pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Section>
        )}

        {/* CTA */}
        <section className="relative overflow-hidden bg-[#050510] text-white">
          <div aria-hidden className="absolute inset-0">
            <div className="aurora-soft" />
          </div>
          <div className="container mx-auto px-4 py-24 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-balance">
              Set up {config.eyebrow.toLowerCase()}{" "}
              <span className="gradient-text">in five minutes.</span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-white/60 text-base md:text-lg">
              Free forever plan. No card required. Cancel anytime.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="btn-aurora rounded-xl h-12 px-6 text-base font-semibold">
                <a href={SITE.app.register} target="_blank" rel="noopener noreferrer">
                  Start free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
