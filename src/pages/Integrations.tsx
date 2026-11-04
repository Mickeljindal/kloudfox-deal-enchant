import {
  MessageSquare,
  Zap,
  Webhook,
  Smartphone,
  Mail,
  Cpu,
  Radar,
  BellRing,
} from "lucide-react";
import ProductPageTemplate, {
  ProductPageConfig,
} from "@/components/kf/ProductPageTemplate";
import { SITE } from "@/lib/site";

function IntegrationsVisual() {
  const items = [
    { name: "Slack", color: "from-emerald-500/30 to-emerald-500/10" },
    { name: "Discord", color: "from-indigo-500/30 to-indigo-500/10" },
    { name: "PagerDuty", color: "from-red-500/30 to-red-500/10" },
    { name: "Zapier", color: "from-orange-500/30 to-orange-500/10" },
    { name: "Webhooks", color: "from-violet-500/30 to-violet-500/10" },
    { name: "Email", color: "from-sky-500/30 to-sky-500/10" },
    { name: "SMS", color: "from-fuchsia-500/30 to-fuchsia-500/10" },
    { name: "iOS App", color: "from-slate-500/30 to-slate-500/10" },
    { name: "Android", color: "from-emerald-500/30 to-emerald-500/10" },
  ];
  return (
    <div className="grid grid-cols-3 gap-2.5">
      {items.map((it) => (
        <div
          key={it.name}
          className={`rounded-xl border border-white/10 bg-gradient-to-br ${it.color} p-3 aspect-square flex flex-col items-center justify-center text-white/85 text-xs font-medium text-center`}
        >
          {it.name}
        </div>
      ))}
    </div>
  );
}

const config: ProductPageConfig = {
  slug: "integrations",
  eyebrow: "Integrations",
  seo: {
    title: "Integrations — Slack, PagerDuty, Zapier, and webhooks",
    description:
      "Plug Kloudfox into every tool your team already lives in. Slack, Discord, PagerDuty, Zapier, iOS, Android, email, SMS, and any webhook — one dashboard, zero glue code.",
    keywords: "monitoring integrations, slack alerts, pagerduty alerts, webhooks",
  },
  hero: {
    heading: (
      <>
        Every tool your team{" "}
        <span className="gradient-text">already lives in.</span>
      </>
    ),
    subheading:
      "Send Kloudfox alerts anywhere with two clicks. Slack, Discord, PagerDuty, Zapier, webhooks, and mobile — no scripts, no glue code, no vendor lock-in.",
    primaryCta: { label: "Start free — connect in 1 min", href: SITE.app.register },
    secondaryCta: { label: "See pricing", href: "/pricing" },
    heroVisual: <IntegrationsVisual />,
  },
  tldr:
    "Kloudfox integrates with Slack, Discord, PagerDuty, Zapier, iOS, Android, email, SMS, and any webhook. Custom payload templating, retries, and signed delivery included on every plan.",
  features: [
    {
      icon: <MessageSquare className="h-5 w-5" />,
      title: "Slack + Discord",
      description:
        "One-click OAuth. Route alerts by channel, by severity, and by monitor. Threaded updates keep signal clean.",
    },
    {
      icon: <BellRing className="h-5 w-5" />,
      title: "PagerDuty",
      description:
        "Native bidirectional sync. Kloudfox opens the incident; PagerDuty owns paging; the acknowledge round-trips.",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Zapier & Make",
      description:
        "5,000+ downstream apps out of the box. Trigger anything from a Notion page to a CI/CD deploy on an alert.",
    },
    {
      icon: <Webhook className="h-5 w-5" />,
      title: "Custom webhooks",
      description:
        "Sign, template, and retry every payload. Perfect for internal ChatOps, on-prem systems, or custom AI copilots.",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email & SMS",
      description:
        "Per-user routing rules and quiet-hours logic. Twilio-grade SMS deliverability across 190 countries.",
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: "iOS & Android push",
      description:
        "Native apps with critical-alert entitlement. Bypass Do-Not-Disturb only for real P1 pages.",
    },
    {
      icon: <Radar className="h-5 w-5" />,
      title: "Prometheus / OpenTelemetry",
      description:
        "Ingest external metrics into your Kloudfox dashboard alongside HTTP checks. One pane, no rebuild.",
    },
    {
      icon: <Cpu className="h-5 w-5" />,
      title: "Public REST API",
      description:
        "Programmatic access to monitors, incidents, and analytics. Great for automations, dashboards, and CLI workflows.",
    },
  ],
  benefits: [
    {
      title: "Zero glue-code",
      description:
        "Every connector is UI-first and tested in production. Setup is a two-click OAuth, not a weekend project.",
    },
    {
      title: "Retries + signed payloads",
      description:
        "Webhooks are signed HMAC-SHA256 with automatic exponential retries. Data integrity is never a coin flip.",
    },
  ],
  faqs: [
    {
      question: "Is my chat tool supported?",
      answer:
        "Slack, Discord, and Microsoft Teams (via webhook) are supported today. If you use Mattermost, Rocket.Chat, or something niche, our generic webhook covers it in under a minute.",
    },
    {
      question: "Can I send different alerts to different channels?",
      answer:
        "Yes. Route by monitor tag, severity, region, or team. Rules stack, and every rule is testable with a dry-run before you save it.",
    },
    {
      question: "Do you have an official CLI or REST API?",
      answer:
        "Yes. The public REST API covers every dashboard operation, and community CLIs are linked from the docs. Bearer-token auth, rate-limited fairly.",
    },
  ],
};

export default function Integrations() {
  return <ProductPageTemplate config={config} />;
}
