import { Star, Quote } from "lucide-react";
import Section, { SectionHeader } from "./kf/Section";
import StatCounter from "./kf/StatCounter";
import Reveal from "./kf/Reveal";
import BigWordmark from "./kf/BigWordmark";

/* -------------------------------------------------------------------------- */
/*  Data                                                                       */
/* -------------------------------------------------------------------------- */

const HERO_QUOTE = {
  quote:
    "Kloudfox pinged us at 2:14 a.m. before checkout 500'd. We patched before Europe woke up. That single incident paid for the tool for a year.",
  name: "Sarah Johnson",
  title: "CTO",
  company: "Style Boutique",
  avatar: "SJ",
  tone: "from-indigo-400 to-violet-500",
  metric: { label: "MTTA improvement after switch", value: 4.2, suffix: "x" },
};

const SUPPORTING = [
  {
    quote:
      "The AI baseline is legit. It flagged a memory leak twelve minutes before latency spiked. We now trust the anomaly score more than our own dashboards.",
    name: "Michael Chen",
    title: "Head of Platform",
    company: "TechSolutions",
    avatar: "MC",
    tone: "from-emerald-400 to-teal-500",
  },
  {
    quote:
      "Beautiful status page, one Slack integration, done. My team spends zero time on incident tooling now. Feels illegal.",
    name: "Alex Rodriguez",
    title: "Founder",
    company: "Serif SaaS",
    avatar: "AR",
    tone: "from-amber-400 to-orange-500",
  },
  {
    quote:
      "Multi-region checks caught a Cloudflare regional outage our old tool missed for 22 minutes. We look like heroes.",
    name: "Jennifer Williams",
    title: "Director, Ops",
    company: "Growth Agency",
    avatar: "JW",
    tone: "from-sky-400 to-cyan-500",
  },
];

const STATS = [
  { value: 10_000, suffix: "+", label: "sites monitored" },
  { value: 99.98, decimals: 2, suffix: "%", label: "measured uptime" },
  { value: 30, prefix: "<", suffix: "s", label: "median alert time" },
  { value: 4.9, decimals: 1, suffix: "/5", label: "customer rating" },
];

/* -------------------------------------------------------------------------- */
/*  Section                                                                    */
/* -------------------------------------------------------------------------- */

const TestimonialsSection = () => {
  return (
    <Section tone="dark" padding="xl" className="text-white overflow-clip">
      <div aria-hidden className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <BigWordmark
        text="loved."
        className="top-8 text-[26vw] md:text-[18vw] lg:text-[15vw] opacity-90"
      />

      <SectionHeader
        eyebrow="Loved by teams"
        title={
          <>
            The tool your on-call actually{" "}
            <span className="gradient-text">wants to keep.</span>
          </>
        }
        subtitle="Real teams, real incidents caught. Every quote here is from a paying customer running Kloudfox in production."
      />

      {/* Stat strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16 md:mb-20 max-w-4xl mx-auto">
        {STATS.map((s, i) => (
          <Reveal key={i} delay={i * 60}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-5 text-center">
              <div className="text-2xl md:text-3xl font-display font-bold gradient-text tabular-nums">
                <StatCounter
                  value={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  decimals={s.decimals ?? 0}
                />
              </div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/45 mt-1.5">
                {s.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* HERO testimonial — dramatic single moment */}
      <Reveal>
        <figure className="relative max-w-5xl mx-auto rounded-3xl border border-white/10 bg-gradient-to-br from-primary/12 via-[#0a0a17]/70 to-[#0a0a17]/70 backdrop-blur-md p-8 md:p-14 overflow-hidden">
          <div
            aria-hidden
            className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/25 blur-3xl animate-orb-drift pointer-events-none"
          />
          <Quote className="h-10 w-10 md:h-12 md:w-12 text-primary/40 mb-6" aria-hidden />
          <blockquote className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-[1.15] tracking-[-0.02em] text-balance">
            "{HERO_QUOTE.quote}"
          </blockquote>

          <figcaption className="mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="flex items-center gap-4">
              <div
                className={`w-14 h-14 rounded-full bg-gradient-to-br ${HERO_QUOTE.tone} text-white flex items-center justify-center font-bold`}
              >
                {HERO_QUOTE.avatar}
              </div>
              <div>
                <div className="font-semibold text-white">{HERO_QUOTE.name}</div>
                <div className="text-sm text-white/55">
                  {HERO_QUOTE.title}, {HERO_QUOTE.company}
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-emerald-500/25 bg-emerald-500/10 px-5 py-3 shrink-0">
              <div className="text-[10px] uppercase tracking-widest text-emerald-300/90">
                {HERO_QUOTE.metric.label}
              </div>
              <div className="text-2xl font-display font-bold text-emerald-200 tabular-nums">
                <StatCounter value={HERO_QUOTE.metric.value} suffix={HERO_QUOTE.metric.suffix} decimals={1} />
              </div>
            </div>
          </figcaption>
        </figure>
      </Reveal>

      {/* Supporting quotes — 3 smaller, still substantial */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mt-6 md:mt-8">
        {SUPPORTING.map((t, i) => (
          <Reveal
            key={t.name}
            delay={i * 80}
            spotlight
            className="rounded-2xl h-full"
          >
            <figure className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 md:p-7 transition-colors hover:border-white/20 flex flex-col">
              <div className="flex items-center gap-1 mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
              </div>
              <blockquote className="text-[15px] leading-relaxed text-white/85 flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.tone} text-white flex items-center justify-center text-xs font-bold`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-white/50">
                    {t.title} · {t.company}
                  </div>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default TestimonialsSection;
