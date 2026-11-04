import {
  ShieldCheck,
  Calendar,
  KeyRound,
  AlertTriangle,
  Lock,
  Award,
} from "lucide-react";
import ProductPageTemplate, {
  ProductPageConfig,
} from "@/components/kf/ProductPageTemplate";
import StatusPing from "@/components/kf/StatusPing";
import { SITE } from "@/lib/site";

function SslVisual() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0b0b18]/80 backdrop-blur-xl shadow-elevated overflow-hidden">
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5 text-[11px] text-white/50 font-mono">
        <Lock className="h-3.5 w-3.5 text-emerald-400" />
        https://checkout.your-domain.com
      </div>
      <div className="p-5 space-y-4">
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4 flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-300">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold text-white">Certificate valid</div>
            <div className="text-xs text-white/60 mt-0.5">TLS 1.3 · Let's Encrypt · A+ (SSL Labs)</div>
          </div>
          <div className="text-right text-xs text-emerald-300 font-mono">A+</div>
        </div>
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="rounded-lg border border-white/5 p-3">
            <div className="text-white/40 uppercase tracking-widest text-[10px] mb-1">Expires</div>
            <div className="text-white font-mono">in 62 days</div>
          </div>
          <div className="rounded-lg border border-white/5 p-3">
            <div className="text-white/40 uppercase tracking-widest text-[10px] mb-1">Fingerprint</div>
            <div className="text-white font-mono truncate">a1:9c:…4b:e0</div>
          </div>
        </div>
        <div className="rounded-lg border border-amber-400/25 bg-amber-500/5 p-3 flex items-start gap-2.5 text-xs">
          <StatusPing tone="warn" />
          <div>
            <div className="font-semibold text-amber-200">Renewal reminder</div>
            <div className="text-white/60 mt-0.5">
              We'll email + Slack you 30, 14, 7, 3, and 1 day before expiry.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const config: ProductPageConfig = {
  slug: "ssl-monitoring",
  eyebrow: "SSL Monitoring",
  seo: {
    title: "SSL Monitoring — Catch cert issues before browsers do",
    description:
      "Continuous TLS and certificate monitoring. Expiry alerts weeks in advance, chain validation, cipher strength, and mixed-content detection — all in one place.",
    keywords: "ssl monitoring, tls monitoring, certificate expiry, ssl checker",
  },
  hero: {
    heading: (
      <>
        Never let a certificate <span className="gradient-text">tank your Monday.</span>
      </>
    ),
    subheading:
      "TLS handshakes, chain integrity, cipher strength, and expiry — validated every hour from four continents. You'll know about a problem weeks before your customers see a scary red padlock.",
    primaryCta: { label: "Start monitoring free", href: SITE.app.register },
    secondaryCta: { label: "See pricing", href: "/pricing" },
    heroVisual: <SslVisual />,
  },
  tldr:
    "Kloudfox's SSL monitoring validates every TLS certificate on your domain hourly, alerts your team 30/14/7/3/1 days before expiry, and grades your configuration against SSL Labs criteria. Free tier available.",
  features: [
    {
      icon: <Calendar className="h-5 w-5" />,
      title: "Expiry countdowns",
      description:
        "30, 14, 7, 3, and 1-day countdown alerts. Configurable per-monitor. Never surprised, ever again.",
    },
    {
      icon: <KeyRound className="h-5 w-5" />,
      title: "Chain validation",
      description:
        "Full chain fetch, intermediate trust checks, and OCSP stapling verification on every hourly probe.",
    },
    {
      icon: <Lock className="h-5 w-5" />,
      title: "Cipher grading",
      description:
        "Grades your TLS config against SSL Labs' methodology. Get the report your CISO wants without paying for a vendor scan.",
    },
    {
      icon: <AlertTriangle className="h-5 w-5" />,
      title: "Mixed-content detection",
      description:
        "Kloudfox flags insecure sub-resources so your padlock stays clean and Chrome doesn't shame your customers.",
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: "Multi-domain support",
      description:
        "Monitor apex, www, and any number of subdomains under one plan. Wildcards fully supported.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Post-renewal verification",
      description:
        "After ACME auto-renewal, Kloudfox confirms the new cert is live and trusted from every region before closing the alert.",
    },
  ],
  benefits: [
    {
      title: "One less thing to babysit",
      description:
        "Even automated renewal workflows fail. Kloudfox is the safety net that catches the 3 a.m. LetsEncrypt hiccups.",
    },
    {
      title: "Compliance-ready reporting",
      description:
        "Downloadable PDF reports for every domain, timestamped and signed. Perfect for SOC 2, ISO, and HIPAA auditors.",
    },
  ],
  faqs: [
    {
      question: "How often is my SSL configuration checked?",
      answer:
        "Full TLS validation runs hourly on every plan. Deep configuration scans (cipher grading, chain traversal) run daily and after any detected change.",
    },
    {
      question: "Can I monitor wildcard certificates?",
      answer:
        "Yes — a single wildcard monitor covers every matching subdomain, and each hostname is validated independently.",
    },
    {
      question: "Will Kloudfox alert me for renewals or only outright failures?",
      answer:
        "Both. Expiry countdowns fire in advance so you have time to renew; chain, protocol, or cipher regressions trigger immediate alerts.",
    },
  ],
};

export default function SSLMonitoring() {
  return <ProductPageTemplate config={config} />;
}
