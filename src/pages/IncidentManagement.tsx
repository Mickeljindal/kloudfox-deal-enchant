import {
  Users,
  Calendar,
  BookOpen,
  Timer,
  MessageSquareText,
  ClipboardCheck,
} from "lucide-react";
import ProductPageTemplate, {
  ProductPageConfig,
} from "@/components/kf/ProductPageTemplate";
import StatusPing from "@/components/kf/StatusPing";
import { SITE } from "@/lib/site";

function IncidentVisual() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0b0b18]/80 backdrop-blur-xl shadow-elevated overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/5">
        <div className="flex items-center gap-2 text-sm text-white/80">
          <StatusPing tone="down" />
          <span className="font-semibold">INC-284</span>
          <span className="text-white/40">·</span>
          <span className="text-white/60">Checkout 5xx spike</span>
        </div>
        <span className="text-[10px] font-mono text-red-300 uppercase tracking-widest">Investigating</span>
      </div>
      <div className="p-5 space-y-3 text-sm">
        <div className="flex items-start gap-3">
          <div className="h-2 w-2 rounded-full bg-primary mt-1.5 shrink-0" />
          <div>
            <div className="text-white/80">
              <span className="font-medium">Sam</span> acknowledged · assigned to platform
            </div>
            <div className="text-xs text-white/40 mt-0.5">12:32 UTC · 30s after detection</div>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="h-2 w-2 rounded-full bg-primary mt-1.5 shrink-0" />
          <div>
            <div className="text-white/80">
              Detected regional error rate spike ({" "}
              <span className="text-red-300 font-mono">us-east</span>){" "}
              <span className="text-white/40">on 12 monitors</span>
            </div>
            <div className="text-xs text-white/40 mt-0.5">12:31 UTC</div>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {["p1", "checkout", "payments", "us-east"].map((t) => (
            <span key={t} className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] text-white/60 font-mono">
              #{t}
            </span>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-xs text-white/60">
          <span className="text-white/80 font-semibold">Runbook:</span>{" "}
          Check upstream `payments-api` health, roll deploy `checkout@v481` if error rate {'>'} 5%.
        </div>
      </div>
    </div>
  );
}

const config: ProductPageConfig = {
  slug: "incident-management",
  eyebrow: "Incident Management",
  seo: {
    title: "Incident Management — On-call, runbooks, postmortems",
    description:
      "One clean incident timeline for your whole team. On-call rotations, runbooks, Slack war-rooms, and auto-drafted postmortems that make retros easy.",
    keywords: "incident management, on-call rotations, postmortems, runbooks, war room",
  },
  hero: {
    heading: (
      <>
        Every incident, one <span className="gradient-text">calm timeline.</span>
      </>
    ),
    subheading:
      "Rotations, runbooks, Slack war-rooms, and auto-drafted postmortems in one place. Turn chaotic outages into calm, review-ready events.",
    primaryCta: { label: "Start free trial", href: SITE.app.register },
    secondaryCta: { label: "See pricing", href: "/pricing" },
    heroVisual: <IncidentVisual />,
  },
  tldr:
    "Kloudfox Incident Management combines on-call rotations, escalation policies, runbooks, live war-rooms, and auto-drafted postmortems. It plugs into Slack, PagerDuty, and Zapier out of the box. Included on Pro and above.",
  features: [
    {
      icon: <Users className="h-5 w-5" />,
      title: "On-call rotations",
      description:
        "Round-robin, follow-the-sun, or holiday-aware. Rotate seats, reassign shifts, and see who's actually on-call right now.",
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      title: "Escalation policies",
      description:
        "Fine-grained escalations by severity, service, or on-call level. Auto-page a secondary if the primary hasn't acked in 5 minutes.",
    },
    {
      icon: <BookOpen className="h-5 w-5" />,
      title: "Runbooks in-line",
      description:
        "Attach a runbook to any monitor or component. It appears in the alert, so the person paged doesn't have to hunt through Confluence.",
    },
    {
      icon: <MessageSquareText className="h-5 w-5" />,
      title: "Slack war-rooms",
      description:
        "Auto-create a Slack channel per incident. Every update to the timeline mirrors both ways. No copy-paste, no confusion.",
    },
    {
      icon: <ClipboardCheck className="h-5 w-5" />,
      title: "Auto-drafted postmortems",
      description:
        "The moment an incident closes, Kloudfox composes a first-draft postmortem from the timeline, alerts, and channel messages.",
    },
    {
      icon: <Timer className="h-5 w-5" />,
      title: "MTTA / MTTR analytics",
      description:
        "Team-level acknowledgement and resolution times, trended over quarters. Instant slides for your monthly ops review.",
    },
  ],
  benefits: [
    {
      title: "Faster retros, calmer teams",
      description:
        "Postmortems that used to take a week get drafted in minutes. Engineers spend the saved time on prevention, not paperwork.",
    },
    {
      title: "One truth, no context loss",
      description:
        "Alerts, chat, timeline, and status updates all cross-link. New joiners can trace any incident cold — no tribal knowledge needed.",
    },
  ],
  faqs: [
    {
      question: "Does incident management replace PagerDuty?",
      answer:
        "It can. For teams already invested in PagerDuty, Kloudfox integrates two-way — we surface a full timeline while PagerDuty owns paging. Teams new to on-call tooling generally choose Kloudfox as their primary.",
    },
    {
      question: "Can we auto-open a Slack channel per incident?",
      answer:
        "Yes. Any P1 or above (configurable) triggers a bridge channel with the relevant on-call, service owners, and executives auto-invited. It closes and archives on incident resolve.",
    },
    {
      question: "How are postmortems generated?",
      answer:
        "Kloudfox composes a first-draft postmortem from the alert lineage, chat transcript, and timeline. It highlights suggested root causes and gives you a template that follows the SRE / Google format.",
    },
  ],
};

export default function IncidentManagement() {
  return <ProductPageTemplate config={config} />;
}
