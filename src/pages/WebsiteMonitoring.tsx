import {
  Globe2,
  Bell,
  Activity,
  Zap,
  ShieldCheck,
  BarChart3,
  Clock,
} from "lucide-react";
import ProductPageTemplate, {
  ProductPageConfig,
} from "@/components/kf/ProductPageTemplate";
import LiveDashboard from "@/components/kf/LiveDashboard";
import { SITE } from "@/lib/site";

const config: ProductPageConfig = {
  slug: "website-monitoring",
  eyebrow: "Website Monitoring",
  seo: {
    title: "Website Monitoring — 40-second global uptime checks",
    description:
      "Monitor your websites, APIs, and endpoints every 40 seconds from four continents. AI anomaly detection, smart alerts, and public status pages included.",
    keywords: "website monitoring, uptime monitoring, http monitoring, api monitoring",
  },
  hero: {
    heading: (
      <>
        See a real outage <span className="gradient-text">before your CEO does.</span>
      </>
    ),
    subheading:
      "40-second checks from four continents, AI baseline detection, and alerts that land in Slack, SMS, and PagerDuty before your customers hit refresh.",
    primaryCta: { label: "Start free — 60-day trial", href: SITE.app.register },
    secondaryCta: { label: "See pricing", href: "/pricing" },
    heroVisual: <LiveDashboard />,
  },
  tldr:
    "Kloudfox's website monitoring probes your endpoints every 40 seconds from 4 continents, applies AI baseline detection, and alerts your team in under 30 seconds. Free tier available. Starts at $0.",
  features: [
    {
      icon: <Clock className="h-5 w-5" />,
      title: "40-second checks",
      description:
        "The fastest monitoring cadence in its class. Regional or edge outages surface in seconds, not minutes.",
    },
    {
      icon: <Globe2 className="h-5 w-5" />,
      title: "Multi-continent probes",
      description:
        "Every URL is checked from North America, Europe, Asia, and Oceania. Kloudfox confirms real outages, not local blips.",
    },
    {
      icon: <Activity className="h-5 w-5" />,
      title: "Anomaly baselines",
      description:
        "AI learns normal response and error patterns per endpoint. Alerts include a deviation score so you know what's real.",
    },
    {
      icon: <Bell className="h-5 w-5" />,
      title: "Multi-channel alerts",
      description:
        "Slack, Discord, Email, SMS, iOS push, PagerDuty, Zapier, or any webhook. Rules by monitor or by team.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Content assertions",
      description:
        "Verify a keyword, JSON path, or response header exists. Catch soft failures where 200 lies.",
    },
    {
      icon: <BarChart3 className="h-5 w-5" />,
      title: "Public performance reports",
      description:
        "Share uptime and response history on branded status pages. Perfect for enterprise procurement conversations.",
    },
  ],
  benefits: [
    {
      title: "Cut MTTD by 4-6x",
      description:
        "Teams that switch from 5-minute cadence to 40-second cadence detect incidents 4-6x faster on average.",
    },
    {
      title: "Kill alert fatigue",
      description:
        "AI-scored anomaly detection filters transient noise. Only real, actionable events wake your on-call.",
    },
    {
      title: "Show up prepared",
      description:
        "Ship every incident with an auto-drafted timeline, region-by-region evidence, and a status page update.",
    },
    {
      title: "Never miss cert issues",
      description:
        "SSL expiries and chain problems ride alongside HTTP checks — no separate tool required.",
    },
  ],
  quote: {
    text: "We used to hear about downtime from customers. Now we hear about it from our watch.",
    author: "Alex Rodriguez",
    role: "Founder, Serif SaaS",
  },
  faqs: [
    {
      question: "How often does Kloudfox check my site?",
      answer:
        "Every 40 seconds on Pro and above, every 60 seconds on Basic, and every 5 minutes on the Free tier. Checks are staggered across probing regions so you get true global coverage without hammering your origin.",
    },
    {
      question: "Which regions do you check from?",
      answer:
        "North America (US East + US West), Europe (Ireland + Frankfurt), Asia (Mumbai + Singapore), and Oceania (Sydney). More regions are added quarterly.",
    },
    {
      question: "Can I monitor an API, not just a webpage?",
      answer:
        "Yes. Every monitor supports custom methods, headers, request bodies, and multi-step JSON assertions. It's the same primitive whether you're checking a landing page or a login endpoint.",
    },
    {
      question: "How fast are alerts delivered?",
      answer:
        "The median time from detection to alert delivery is under 30 seconds across Slack, Discord, SMS, PagerDuty, and webhook.",
    },
    {
      question: "What happens if the checker itself is down?",
      answer:
        "Kloudfox is deployed active-active across three cloud providers with automated failover. If any probing region goes dark, another region takes over and the customer sees no gap.",
    },
  ],
};

export default function WebsiteMonitoring() {
  return <ProductPageTemplate config={config} />;
}
