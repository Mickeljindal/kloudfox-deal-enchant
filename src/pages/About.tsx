import { ArrowRight, Sparkles, Target, Users2, Rocket, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section, { SectionHeader } from "@/components/kf/Section";
import Aurora from "@/components/kf/Aurora";
import Reveal from "@/components/kf/Reveal";
import StatCounter from "@/components/kf/StatCounter";
import SEO, {
  breadcrumbJsonLd,
  organizationJsonLd,
} from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

const PRINCIPLES = [
  {
    icon: <Target className="h-5 w-5" />,
    title: "Signal over noise",
    body: "Every alert must be worth a human's attention. If it isn't, we work on the algorithm — never the human.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Boring reliability",
    body: "Monitoring tools shouldn't page you at 3 a.m. because they themselves went down. We over-invest in our own uptime.",
  },
  {
    icon: <Users2 className="h-5 w-5" />,
    title: "Radical simplicity",
    body: "Every setting exists because a real customer needed it. If we can't defend a UI element, we delete it.",
  },
  {
    icon: <Rocket className="h-5 w-5" />,
    title: "Ship weekly",
    body: "Small, safe releases every week. Users see the roadmap and we ship what we said we would.",
  },
];

const STATS = [
  { value: 10_000, suffix: "+", label: "monitored endpoints" },
  { value: 44,     suffix: "M+", label: "checks per month" },
  { value: 4,      suffix: "",   label: "continents probed" },
  { value: 99.98,  suffix: "%",  decimals: 2, label: "measured uptime" },
];

const About = () => {
  return (
    <div>
      <SEO
        title="About"
        description="Kloudfox is a small team building the monitoring tool we always wished we had — fast, honest, and priced for the team, not the finance department."
        path="/about"
        jsonLd={[
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "About", url: "/about" },
          ]),
          organizationJsonLd(),
        ]}
      />

      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#050510] text-white">
        <Aurora />
        <div aria-hidden className="absolute inset-0 grid-bg opacity-40" />

        <div className="container mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28 relative z-10">
          <Reveal className="max-w-3xl mx-auto text-center">
            <div className="eyebrow mb-4 justify-center text-primary/90">
              <span className="h-1 w-6 rounded-full bg-primary/60" aria-hidden />
              About Kloudfox
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold leading-[1.05] tracking-tight text-balance">
              We were tired of finding out{" "}
              <span className="gradient-text">from customers.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto text-balance">
              Kloudfox is a small team of platform engineers and SREs building
              the monitoring tool we always wished we had — fast, honest, and
              priced for the team, not the finance department.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats strip */}
      <Section tone="muted" padding="lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {STATS.map((s, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="rounded-2xl border border-border bg-card/70 backdrop-blur-md p-5 text-center">
                <div className="text-2xl md:text-3xl font-display font-bold gradient-text tabular-nums">
                  <StatCounter value={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
                </div>
                <div className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground mt-1.5">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Mission */}
      <Section tone="default" padding="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center max-w-6xl mx-auto">
          <Reveal>
            <div className="eyebrow mb-3"><span className="h-1 w-6 rounded-full bg-primary/60" />Our mission</div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 tracking-tight text-balance">
              Uptime is a design problem, <span className="gradient-text">not a spreadsheet problem.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Legacy monitoring tools stuff every conceivable check into a single
              price list, then bury you under alerts you don't need. We built
              Kloudfox on the opposite bet:
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Fewer alerts, sharper signal, honest pricing. If AI can predict a
              deviation, we surface it. If it can't, we don't fake certainty.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-2xl border border-border bg-card/70 backdrop-blur-md p-8">
              <blockquote className="text-lg md:text-xl font-display font-medium text-foreground/90 leading-relaxed">
                "The best incident is the one your customers never notice.
                Everything Kloudfox does is a tool in service of that one line."
              </blockquote>
              <div className="mt-6 text-sm text-muted-foreground">
                — The Kloudfox team
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Principles */}
      <Section tone="muted" padding="xl">
        <SectionHeader
          eyebrow="How we work"
          title={
            <>
              Four principles that <span className="gradient-text">actually ship.</span>
            </>
          }
          subtitle="These live on the wall. They're the shortlist we consult before we ship anything."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <div className="h-full rounded-2xl border border-border bg-card/70 backdrop-blur-md p-6">
                <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mb-4">
                  {p.icon}
                </div>
                <h3 className="text-base font-semibold mb-2 tracking-tight">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Story */}
      <Section tone="default" padding="xl">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="Our story"
            title={
              <>The tool we <span className="gradient-text">wished existed.</span></>
            }
            align="left"
          />
          <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              Kloudfox started with a specific moment: an incident that took our team 22 minutes
              to detect because our tooling checked every five minutes and only from one region.
              We were on-call. Customers noticed first. It was avoidable.
            </p>
            <p>
              We looked around and realized the two dominant tools were built for two different
              audiences — neither of them us. UptimeRobot was fine for a single WordPress blog.
              Pingdom was priced for a Fortune 500 procurement cycle. In between sat every real
              SaaS team, being either underserved or overcharged.
            </p>
            <p>
              So we built Kloudfox: 40-second checks, four continents, AI baselines, and a status
              page that ships out of the box. Priced starting free. Refundable for 60 days.
              Boring by design, so your alerts are surprising by exception.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#050510] text-white">
        <div aria-hidden className="absolute inset-0"><Aurora variant="soft" /></div>
        <div className="container mx-auto px-4 py-24 relative z-10 text-center">
          <Sparkles className="h-6 w-6 mx-auto text-primary mb-4" aria-hidden />
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-balance">
            Set up in five minutes.{" "}
            <span className="gradient-text">Sleep better tonight.</span>
          </h2>
          <div className="mt-8">
            <Button asChild size="lg" className="btn-aurora rounded-xl h-12 px-6 text-base font-semibold">
              <a href={SITE.app.register} target="_blank" rel="noopener noreferrer">
                Start free trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
