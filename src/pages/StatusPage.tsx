import {
  Globe2,
  Palette,
  Rss,
  Bell,
  Component,
  MessagesSquare,
} from "lucide-react";
import ProductPageTemplate, {
  ProductPageConfig,
} from "@/components/kf/ProductPageTemplate";
import StatusPing from "@/components/kf/StatusPing";
import { SITE } from "@/lib/site";

function StatusPageVisual() {
  const services = [
    { name: "API", tone: "up" as const },
    { name: "Dashboard", tone: "up" as const },
    { name: "Webhooks", tone: "up" as const },
    { name: "Auth", tone: "up" as const },
    { name: "Object Storage", tone: "warn" as const },
    { name: "Support Portal", tone: "up" as const },
  ];
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden shadow-elevated">
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/5">
        <div className="flex items-center gap-2 text-white/80 font-semibold text-sm">
          <StatusPing tone="up" />
          your-brand.statuspage.io
        </div>
        <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Live</div>
      </div>
      <div className="p-5 space-y-4">
        <div>
          <div className="text-2xl font-display font-bold text-emerald-400">All systems operational</div>
          <div className="text-xs text-white/50 mt-1">Updated 12 seconds ago</div>
        </div>
        <ul className="divide-y divide-white/5 border-t border-b border-white/5">
          {services.map((s) => (
            <li key={s.name} className="flex items-center justify-between py-2.5 text-sm">
              <span className="text-white/80">{s.name}</span>
              <span className="flex items-center gap-1.5 text-xs text-white/60">
                <StatusPing tone={s.tone} />
                {s.tone === "warn" ? "Degraded" : "Operational"}
              </span>
            </li>
          ))}
        </ul>
        <div>
          <div className="text-[10px] uppercase tracking-widest text-white/40 mb-2">30-day uptime</div>
          <div className="flex gap-0.5">
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className={`h-6 flex-1 rounded-sm ${i === 22 ? "bg-amber-400/70" : "bg-emerald-500/70"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const config: ProductPageConfig = {
  slug: "status-page",
  eyebrow: "Status Pages",
  seo: {
    title: "Status Pages — Beautiful, hosted, always-on",
    description:
      "Public status pages your customers actually trust. Auto-updates from your monitors, on-brand design, custom domains, and incident RSS. Included on every plan.",
    keywords: "status page, hosted status page, uptime status page, incident communication",
  },
  hero: {
    heading: (
      <>
        The status page your customers <span className="gradient-text">actually refresh.</span>
      </>
    ),
    subheading:
      "Hosted, on-brand, and always up. Auto-updates from your monitors, publishes to a custom domain, and doubles as a trust signal in every procurement conversation.",
    primaryCta: { label: "Create a status page", href: SITE.app.register },
    secondaryCta: { label: "See a live example", href: "https://status.kloudfox.com" },
    heroVisual: <StatusPageVisual />,
  },
  tldr:
    "Kloudfox status pages are hosted, branded, custom-domain, and auto-populated from your monitors. They include public metrics, incident history, subscriber notifications, and RSS. Included on every plan, from Free.",
  features: [
    {
      icon: <Palette className="h-5 w-5" />,
      title: "On-brand, no CSS required",
      description:
        "Logo, brand color, favicon, and typography — configured once, applied everywhere. Custom CSS available on Pro.",
    },
    {
      icon: <Globe2 className="h-5 w-5" />,
      title: "Custom domains",
      description:
        "Ship at status.yourbrand.com with automatic TLS. No CNAME hell, no third-party lock-in.",
    },
    {
      icon: <Component className="h-5 w-5" />,
      title: "Component groups",
      description:
        "Model your architecture as service groups. Show clean 'operational / degraded / down' rollups without exposing internals.",
    },
    {
      icon: <Bell className="h-5 w-5" />,
      title: "Subscriber notifications",
      description:
        "Customers subscribe by email, SMS, RSS, or Slack. Auto-notify on incident open, update, and resolve.",
    },
    {
      icon: <Rss className="h-5 w-5" />,
      title: "Historical uptime",
      description:
        "90-day rolling uptime bars, MTBF, MTTR, and downloadable CSV reports. Perfect for SLA quarterly reviews.",
    },
    {
      icon: <MessagesSquare className="h-5 w-5" />,
      title: "Incident timeline",
      description:
        "Post updates from Slack or the dashboard. Every message is templated for clarity — no jargon, no ambiguity.",
    },
  ],
  benefits: [
    {
      title: "Convert doubt into deals",
      description:
        "A polished status page is one of the top three trust signals enterprise buyers check. Kloudfox ships it in five minutes.",
    },
    {
      title: "Fewer support tickets",
      description:
        "When something's degraded, subscribers know before they email you. Support load during incidents drops meaningfully.",
    },
  ],
  faqs: [
    {
      question: "Is a status page included in the Free plan?",
      answer:
        "Yes. One public status page with unlimited views is included on the Free tier. Paid plans unlock custom domains, subscriber notifications, and multi-page support.",
    },
    {
      question: "Can I have multiple status pages?",
      answer:
        "Yes — up to 5 on Basic, unlimited on Pro. Useful for multi-brand orgs, regional pages, or public-vs-internal audiences.",
    },
    {
      question: "How is downtime reported to subscribers?",
      answer:
        "Every incident triggers a subscribe-only notification on open, at each update, and at resolve. You pick tone (formal / friendly), format, and channels per page.",
    },
  ],
};

export default function StatusPage() {
  return <ProductPageTemplate config={config} />;
}
