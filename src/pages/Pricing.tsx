import { Check, X } from "lucide-react";
import { Fragment } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";
import ComparisonSection from "@/components/ComparisonSection";
import Section, { SectionHeader } from "@/components/kf/Section";
import Aurora from "@/components/kf/Aurora";
import Reveal from "@/components/kf/Reveal";
import SEO, { breadcrumbJsonLd, faqJsonLd } from "@/components/SEO";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type PlanCell = string | boolean;

/* Feature matrix across plans (Free / Basic / Pro / Enterprise) */
const MATRIX: Array<{ group: string; rows: Array<{ name: string; values: [PlanCell, PlanCell, PlanCell, PlanCell] }> }> = [
  {
    group: "Monitoring",
    rows: [
      { name: "Monitors",                values: ["5", "25", "100", "Unlimited"] },
      { name: "Check interval",          values: ["5 min", "1 min", "40 sec", "40 sec"] },
      { name: "Multi-region checks",     values: [false, false, true, true] },
      { name: "SSL & TLS monitoring",    values: [true, true, true, true] },
      { name: "Content assertions",      values: [true, true, true, true] },
      { name: "AI anomaly detection",    values: [false, false, true, true] },
    ],
  },
  {
    group: "Status pages",
    rows: [
      { name: "Status pages",            values: ["1", "5", "Unlimited", "Unlimited"] },
      { name: "Custom domain",           values: [false, true, true, true] },
      { name: "Subscriber notifications", values: [false, true, true, true] },
      { name: "Custom CSS",              values: [false, false, true, true] },
    ],
  },
  {
    group: "Incidents & on-call",
    rows: [
      { name: "Incident timeline",       values: [true, true, true, true] },
      { name: "On-call rotations",       values: [false, false, true, true] },
      { name: "Escalation policies",     values: [false, false, true, true] },
      { name: "Runbooks + war-rooms",    values: [false, false, true, true] },
      { name: "Auto-drafted postmortems", values: [false, false, true, true] },
    ],
  },
  {
    group: "Team & integrations",
    rows: [
      { name: "Team members",            values: ["1", "5", "50", "Unlimited"] },
      { name: "Slack / Discord",         values: [true, true, true, true] },
      { name: "PagerDuty",               values: [false, true, true, true] },
      { name: "Zapier / webhooks",       values: [false, true, true, true] },
      { name: "SSO / SAML",              values: [false, false, false, true] },
      { name: "Audit logs",              values: [false, false, false, true] },
      { name: "Priority support",        values: [false, false, true, "Dedicated CSM"] },
    ],
  },
];

const FAQS = [
  {
    question: "Can I switch plans anytime?",
    answer:
      "Yes. Upgrades take effect immediately with prorated billing. Downgrades apply at your next renewal so you don't lose paid time.",
  },
  {
    question: "Do you offer a discount for annual billing?",
    answer: "Yes — 20% off every plan when billed annually. Enterprise annual contracts can be further customised.",
  },
  {
    question: "How does the 60-day money-back guarantee work?",
    answer:
      "If Kloudfox doesn't save you from an incident in 60 days — or you just don't love it — email support@kloudfox.com and we refund every cent. No forms, no rebuttals.",
  },
  {
    question: "Is there a free forever plan?",
    answer: "Yes. 5 monitors, 1 status page, 5-minute checks, email alerts, and SSL monitoring — no card, no expiry.",
  },
  {
    question: "Do you support non-profits or open-source projects?",
    answer:
      "Yes. Reach out via /contact with your project details and we'll set you up on a discounted Pro plan.",
  },
  {
    question: "Can I self-host Kloudfox?",
    answer:
      "Not currently. Kloudfox is a SaaS. We do offer a dedicated single-tenant deployment for Enterprise customers with data-residency requirements.",
  },
];

const PLAN_HEADERS = ["Free", "Basic", "Pro", "Enterprise"];

function CellDisplay({ value, primary }: { value: PlanCell; primary?: boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className={cn("h-4 w-4 mx-auto", primary ? "text-emerald-400" : "text-emerald-500/80")} />
    ) : (
      <X className="h-4 w-4 text-muted-foreground/30 mx-auto" />
    );
  }
  return <span className={cn("text-sm", primary ? "text-white font-semibold" : "text-foreground/80")}>{value}</span>;
}

const Pricing = () => {
  return (
    <div>
      <SEO
        title="Pricing"
        description="Simple, honest pricing. Free forever plan. Paid plans from $25. Every plan ships with a 60-day money-back guarantee."
        path="/pricing"
        jsonLd={[
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Pricing", url: "/pricing" },
          ]),
          faqJsonLd(FAQS),
        ]}
      />

      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#050510] text-white">
        <Aurora />
        <div aria-hidden className="absolute inset-0 grid-bg opacity-30" />
        <div className="container mx-auto px-4 pt-24 pb-16 md:pt-32 md:pb-20 relative z-10">
          <Reveal className="max-w-3xl mx-auto text-center">
            <div className="eyebrow mb-4 justify-center text-primary/90">
              <span className="h-1 w-6 rounded-full bg-primary/60" aria-hidden />
              Pricing
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold leading-[1.05] tracking-tight text-balance">
              Priced for the team, <span className="gradient-text">not the finance department.</span>
            </h1>
            <p className="mt-5 text-lg text-white/60 leading-relaxed">
              A free forever plan that actually monitors things. Paid plans that scale linearly with real usage. And a 60-day money-back guarantee on every paid tier — because we'd rather refund you than argue.
            </p>
          </Reveal>
        </div>
      </section>

      <PricingSection compact />

      {/* Feature matrix */}
      <Section tone="default" padding="xl">
        <SectionHeader
          eyebrow="Feature comparison"
          title={
            <>
              Everything, side by side,{" "}
              <span className="gradient-text">no fine print.</span>
            </>
          }
        />

        <div className="overflow-x-auto rounded-2xl border border-border bg-card/60 backdrop-blur-md shadow-soft">
          <table className="w-full min-w-[720px] text-left">
            <thead>
              <tr className="border-b border-border">
                <th className="px-5 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-widest">Feature</th>
                {PLAN_HEADERS.map((p, i) => (
                  <th key={p} className={cn("px-5 py-4 text-sm font-semibold text-center", i === 2 && "bg-primary/5")}>
                    <div className="flex items-center justify-center gap-2">
                      {i === 2 && (
                        <span className="rounded-full bg-primary/15 border border-primary/25 px-2 py-0.5 text-[9px] font-mono uppercase tracking-widest text-primary">
                          Popular
                        </span>
                      )}
                      {p}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {MATRIX.map((group) => (
                <Fragment key={group.group}>
                  <tr className="bg-muted/40">
                    <td colSpan={5} className="px-5 py-2 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                      {group.group}
                    </td>
                  </tr>
                  {group.rows.map((row, i) => (
                    <tr key={`${group.group}-${row.name}`} className={cn("border-b border-border/40 last:border-b-0", i % 2 === 0 ? "bg-background/40" : "bg-transparent")}>
                      <td className="px-5 py-3 text-sm text-foreground/80">{row.name}</td>
                      {row.values.map((v, idx) => (
                        <td key={idx} className={cn("px-5 py-3 text-center", idx === 2 && "bg-primary/5")}>
                          <CellDisplay value={v} primary={idx === 2} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <ComparisonSection />

      {/* FAQ */}
      <Section tone="default" padding="xl">
        <SectionHeader eyebrow="FAQ" title="Common pricing questions." />
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-2">
            {FAQS.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-border bg-card/60 backdrop-blur-md rounded-2xl px-5 md:px-6 data-[state=open]:border-primary/30">
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

      <Footer />
    </div>
  );
};

export default Pricing;
