import { useState } from "react";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Section, { SectionHeader } from "./kf/Section";
import Reveal from "./kf/Reveal";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site";

interface Plan {
  name: string;
  monthly: number;
  yearly: number;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

const PLANS: Plan[] = [
  {
    name: "Free",
    monthly: 0,
    yearly: 0,
    description: "For personal projects and side hustles.",
    features: ["5 monitors", "1 status page", "5-minute checks", "Email alerts", "SSL monitoring"],
    cta: "Get started free",
  },
  {
    name: "Basic",
    monthly: 25,
    yearly: 20,
    description: "For freelancers and small businesses.",
    features: [
      "25 monitors",
      "5 status pages",
      "1-minute checks",
      "Email & SMS alerts",
      "SSL monitoring",
      "Zapier integration",
    ],
    cta: "Start 60-day trial",
  },
  {
    name: "Pro",
    monthly: 85,
    yearly: 68,
    description: "For growing SaaS teams.",
    features: [
      "Everything in Basic",
      "100 monitors",
      "40-second checks",
      "Multi-region probes",
      "Up to 50 team members",
      "Priority support",
      "All integrations",
      "Custom branding",
    ],
    cta: "Start 60-day trial",
    popular: true,
  },
  {
    name: "Enterprise",
    monthly: 170,
    yearly: 136,
    description: "For platform teams at scale.",
    features: [
      "Everything in Pro",
      "Unlimited monitors",
      "Unlimited team seats",
      "Custom SLAs",
      "Dedicated CSM",
      "SSO & SAML",
      "Audit logs",
    ],
    cta: "Contact sales",
  },
];

interface PricingSectionProps {
  compact?: boolean;
}

const PricingSection = ({ compact = false }: PricingSectionProps) => {
  const [yearly, setYearly] = useState(true);

  return (
    <Section tone="muted" padding={compact ? "lg" : "xl"} id="pricing">
      <SectionHeader
        eyebrow="Pricing"
        title={
          <>
            Simple, honest, <span className="gradient-text">no seat games.</span>
          </>
        }
        subtitle="Start free, upgrade only when you need more. Every plan ships with a 60-day money-back guarantee."
      />

      {/* Billing toggle */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex items-center rounded-full border border-border bg-card p-1">
          <button
            onClick={() => setYearly(false)}
            className={cn(
              "px-5 py-2 rounded-full text-sm font-medium transition-colors",
              !yearly ? "bg-primary text-primary-foreground shadow-soft" : "text-muted-foreground hover:text-foreground",
            )}
          >
            Monthly
          </button>
          <button
            onClick={() => setYearly(true)}
            className={cn(
              "px-5 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2",
              yearly ? "bg-primary text-primary-foreground shadow-soft" : "text-muted-foreground hover:text-foreground",
            )}
          >
            Yearly
            <span className="text-[10px] uppercase tracking-widest bg-emerald-500/15 text-emerald-300 border border-emerald-500/25 rounded-full px-1.5 py-0.5">
              −20%
            </span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 max-w-6xl mx-auto">
        {PLANS.map((plan, i) => {
          const price = yearly ? plan.yearly : plan.monthly;
          return (
            <Reveal key={plan.name} delay={i * 60} spotlight className="rounded-2xl h-full">
              <div
                className={cn(
                  "relative h-full flex flex-col rounded-2xl border p-6 md:p-7 backdrop-blur-md transition-all duration-300",
                  plan.popular
                    ? "border-primary/40 bg-gradient-to-b from-primary/10 via-card/70 to-card/60 shadow-aurora-glow lg:scale-[1.02]"
                    : "border-border bg-card/60 hover:border-primary/20",
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary text-primary-foreground px-3 py-1 text-[11px] font-semibold uppercase tracking-widest shadow-lg shadow-primary/30">
                      <Sparkles className="h-3 w-3" />
                      Most popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-base font-semibold text-foreground">{plan.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1 min-h-[36px]">{plan.description}</p>

                  <div className="mt-5 flex items-baseline gap-1">
                    <span className="text-4xl font-display font-bold tabular-nums text-foreground">${price}</span>
                    <span className="text-muted-foreground text-sm">{price === 0 ? "forever" : `/mo`}</span>
                  </div>
                  {yearly && price > 0 && (
                    <div className="text-[11px] text-emerald-400/80 mt-1">
                      Save ${(plan.monthly - plan.yearly) * 12}/yr with annual billing
                    </div>
                  )}
                </div>

                <ul className="space-y-2.5 mb-7 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span className="text-foreground/80">{f}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={cn(
                    "w-full rounded-xl font-semibold",
                    plan.popular ? "btn-aurora" : "bg-foreground text-background hover:bg-foreground/90",
                  )}
                >
                  <a href={plan.name === "Enterprise" ? "/contact" : SITE.app.register} target={plan.name === "Enterprise" ? undefined : "_blank"} rel={plan.name === "Enterprise" ? undefined : "noopener noreferrer"}>
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-10 text-center text-sm text-muted-foreground">
        All plans include multi-region checks, SSL monitoring, and unlimited status page views.
      </div>
    </Section>
  );
};

export default PricingSection;
