import StickyFeatureScroll, { StickyFeature } from "./kf/StickyFeatureScroll";
import {
  MockAlerts,
  MockAnomaly,
  MockGlobe,
  MockSSL,
  MockStatusPage,
} from "./kf/ProductMocks";
import BigWordmark from "./kf/BigWordmark";

const FLAGSHIPS: StickyFeature[] = [
  {
    eyebrow: "AI anomaly detection",
    title: (
      <>
        Catches outages <span className="gradient-text">28 minutes before</span> they happen.
      </>
    ),
    description:
      "AI learns your baseline traffic, response, and error patterns per endpoint. When a deviation starts to form, you get a scored alert — with the exact pattern that would come next attached.",
    points: [
      "Per-endpoint learned baselines",
      "Deviation scored in standard deviations",
      "Explainable, one-click disable",
    ],
    visual: <MockAnomaly />,
  },
  {
    eyebrow: "Multi-region checks",
    title: (
      <>
        Four continents. <span className="gradient-text">Every forty seconds.</span>
      </>
    ),
    description:
      "Every monitor probes from independent networks across NA, EU, Asia, and Oceania. We require multi-region confirmation before paging, so regional CDN jitter never wakes your on-call.",
    points: [
      "8 probe regions on independent networks",
      "2×2 confirmation before opening incident",
      "Per-region evidence attached to every alert",
    ],
    visual: <MockGlobe />,
  },
  {
    eyebrow: "Smart alerts",
    title: (
      <>
        Slack, push, PagerDuty. <span className="gradient-text">Zero noise.</span>
      </>
    ),
    description:
      "AI scoring filters transient blips. When we page you, the alert ships with cause, blast radius, and the suspect endpoint. Ack, silence, or roll back — one tap.",
    points: [
      "Slack, Discord, Teams, PagerDuty, Zapier, webhooks",
      "Auto-generated triage buttons",
      "Quiet hours + follow-the-sun routing",
    ],
    visual: <MockAlerts />,
  },
  {
    eyebrow: "SSL & TLS monitoring",
    title: (
      <>
        Never let a certificate <span className="gradient-text">tank your Monday.</span>
      </>
    ),
    description:
      "Continuous TLS validation from every region. Expiry countdowns, chain integrity, cipher strength, and OCSP stapling — all in one card, alerting weeks in advance.",
    points: [
      "30/14/7/3/1-day expiry reminders",
      "SSL Labs–style A+ grading",
      "Wildcard + multi-domain aware",
    ],
    visual: <MockSSL />,
  },
  {
    eyebrow: "Status pages",
    title: (
      <>
        The status page your customers <span className="gradient-text">actually refresh.</span>
      </>
    ),
    description:
      "Hosted, on-brand, custom domain, auto-updated from your monitors. Subscriber notifications, 90-day uptime bars, one-click incident templating for the human touch.",
    points: [
      "Custom domain + branding",
      "Subscriber email / SMS / RSS",
      "Auto-populated from monitors",
    ],
    visual: <MockStatusPage />,
  },
];

const FlagshipFeatures = () => {
  return (
    // NOTE: overflow-clip (not overflow-hidden) — hidden breaks position:sticky
    // on descendants. clip doesn't create a scroll container.
    <section
      id="flagships"
      className="relative overflow-clip bg-[#050510] text-white py-24 md:py-36"
      aria-labelledby="flagships-heading"
    >
      <div aria-hidden className="absolute inset-0 grid-bg opacity-30" />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-3/4 rounded-full bg-primary/15 blur-[140px] animate-orb-drift pointer-events-none"
      />
      <BigWordmark text="uptime." className="top-8 text-[24vw] md:text-[18vw] lg:text-[16vw]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 lg:mb-28">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.24em] uppercase text-primary/80 mb-5">
            <span className="h-1 w-6 rounded-full bg-primary/60" aria-hidden />
            Five products, one dashboard
          </div>
          <h2
            id="flagships-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-[-0.03em] leading-[1.02] text-balance"
          >
            The monitoring stack, <br className="hidden md:inline" />
            <span className="gradient-text">rewritten from scratch.</span>
          </h2>
          <p className="mt-5 text-lg text-white/60 max-w-2xl mx-auto text-balance">
            Every feature below runs on the same live data. Scroll to see how it fits together.
          </p>
        </div>

        <StickyFeatureScroll features={FLAGSHIPS} />
      </div>
    </section>
  );
};

export default FlagshipFeatures;
