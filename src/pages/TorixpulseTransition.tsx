import { ReactNode } from "react";
import { ArrowRight, Check, Minus, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Aurora from "@/components/kf/Aurora";
import Reveal from "@/components/kf/Reveal";
import Section, { SectionHeader } from "@/components/kf/Section";
import SEO, { breadcrumbJsonLd, faqJsonLd } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MIGRATION } from "@/lib/site";

const partner = MIGRATION.partner;

const protectedPoints = [
  "No additional purchase is required.",
  "No new subscription payment is required.",
  "Your original AppSumo deal tier will be honoured.",
  "Your TorixPulse account is already prepared using your existing KloudFox email address.",
];

const steps: ReactNode[] = [
  <>
    Visit{" "}
    <a
      href={partner.url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary font-medium hover:underline"
    >
      {partner.url}
    </a>
  </>,
  "Log in or access your account using the same email address registered with KloudFox.",
  "Verify your assigned Lifetime Deal plan.",
  "Recreate your existing website, application and server monitors.",
  "Recreate your status pages and configure your notification preferences.",
  "Verify that your monitors are active and alerts are working correctly.",
];

type Tone = "pos" | "neutral" | "warn";
const comparison: Array<{ label: string; value: string; tone: Tone }> = [
  { label: "AppSumo Lifetime Deal", value: "Honoured", tone: "pos" },
  { label: "Original purchased tier", value: "Equivalent assigned tier", tone: "pos" },
  { label: "Lifetime deal benefits", value: "Continued", tone: "pos" },
  { label: "Additional subscription", value: "Not required", tone: "pos" },
  { label: "Email address", value: "Same registered email", tone: "neutral" },
  { label: "Monitors", value: "Require manual recreation", tone: "warn" },
  { label: "Status pages", value: "Require manual recreation", tone: "warn" },
];

const faqs = [
  {
    question: "Is KloudFox shutting down?",
    answer:
      "We are transitioning KloudFox monitoring services to TorixPulse as part of our partnership with TorixStack. Please follow the transition announcement for information about the migration and service timeline.",
  },
  {
    question: "Will I lose my AppSumo Lifetime Deal?",
    answer:
      "No. Your original AppSumo Lifetime Deal commitment will be honoured. Your corresponding TorixPulse plan benefits have been assigned according to your original purchase tier.",
  },
  {
    question: "Do I need to purchase TorixPulse?",
    answer:
      "No. You do not need to purchase a new subscription. Your existing lifetime deal benefits are being honoured.",
  },
  {
    question: "How do I access my TorixPulse account?",
    answer:
      "Visit https://torixstack.com/torixpulse/ and use the same email address associated with your KloudFox account.",
  },
  {
    question: "Why can't my existing monitors be migrated automatically?",
    answer:
      "The underlying platforms use different systems and configurations. As a result, existing monitors, status pages and their configurations cannot be transferred automatically. You will need to recreate them on TorixPulse.",
  },
  {
    question: "Will my original AppSumo plan limits remain the same?",
    answer:
      "Your TorixPulse account has been assigned the corresponding lifetime deal tier based on your original AppSumo purchase. Your applicable benefits will follow that assigned tier.",
  },
  {
    question: "Will my existing monitoring history be transferred?",
    answer:
      "Existing monitoring history should not be assumed to transfer. Please make any necessary records or exports before the old service is retired.",
  },
  {
    question: "Do I need to create a new account?",
    answer:
      "Your account has already been mapped using your existing KloudFox email address. Start by accessing TorixPulse with that email address.",
  },
];

const toneStyles: Record<Tone, { badge: string; icon: ReactNode }> = {
  pos: {
    badge: "bg-emerald-500/10 border-emerald-500/25 text-emerald-400",
    icon: <Check className="h-3.5 w-3.5" />,
  },
  neutral: {
    badge: "bg-white/5 border-border text-foreground/70",
    icon: <Check className="h-3.5 w-3.5" />,
  },
  warn: {
    badge: "bg-amber-500/10 border-amber-500/25 text-amber-400",
    icon: <Minus className="h-3.5 w-3.5" />,
  },
};

export default function TorixpulseTransition() {
  const jsonLd: Record<string, unknown>[] = [
    breadcrumbJsonLd([
      { name: "Home", url: "/" },
      { name: "KloudFox → TorixPulse transition", url: MIGRATION.path },
    ]),
    faqJsonLd(faqs),
  ];

  return (
    <>
      <SEO
        title="KloudFox Transition to TorixPulse | AppSumo Lifetime Deal Update"
        description="KloudFox is transitioning to TorixPulse through its partnership with TorixStack. Existing AppSumo Lifetime Deal benefits will be honoured. Learn how to migrate your monitors and status pages."
        path={MIGRATION.path}
        jsonLd={jsonLd}
      />

      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#050510] text-white">
          <Aurora />
          <div aria-hidden className="absolute inset-0 grid-bg opacity-40" />
          <div aria-hidden className="noise" />

          <div className="container relative z-10 mx-auto px-4 pt-24 pb-20 md:pt-28 md:pb-24">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal>
                {/* Transition visual */}
                <div className="mb-6 flex justify-center">
                  <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-semibold">
                    <span className="text-white/90">KloudFox</span>
                    <ArrowRight className="h-4 w-4 text-accent" aria-label="transitioning to" />
                    <span className="bg-gradient-to-r from-accent to-teal-300 bg-clip-text text-transparent">
                      TorixPulse
                    </span>
                  </span>
                </div>

                <h1 className="text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-tight md:text-4xl lg:text-5xl">
                  An Important Update: KloudFox Is Transitioning to{" "}
                  <span className="gradient-text">TorixPulse</span>
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-white/60">
                  We're partnering with TorixStack to bring you an improved monitoring experience —
                  and your AppSumo Lifetime Deal benefits remain honoured on TorixPulse.
                </p>

                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="btn-aurora h-12 rounded-xl px-6 text-base font-semibold"
                  >
                    <a href={partner.url} target="_blank" rel="noopener noreferrer">
                      Explore Your TorixPulse Account
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="h-12 rounded-xl border-white/10 bg-white/5 px-6 text-base font-semibold text-white hover:border-white/20 hover:bg-white/10"
                  >
                    <a href="#steps">See the steps</a>
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Section 1 — Introduction */}
        <Section tone="default" padding="lg">
          <div className="mx-auto max-w-3xl">
            <SectionHeader
              align="left"
              eyebrow="The update"
              title={
                <>
                  An important update for our <span className="gradient-text">KloudFox community</span>
                </>
              }
            />
            <div className="space-y-4 text-[15px] leading-relaxed text-foreground/80 md:text-base">
              <p>We have an important update to share with our KloudFox community.</p>
              <p>
                As part of our continued commitment to delivering reliable monitoring solutions,
                KloudBean has partnered with TorixStack, and we are transitioning KloudFox monitoring
                services to TorixPulse.
              </p>
              <p>
                This partnership allows us to focus on delivering a dedicated monitoring experience
                while continuing to honour our commitments to existing KloudFox customers.
              </p>
            </div>
          </div>
        </Section>

        {/* Section 2 — LTD protected (highlighted) */}
        <Section tone="muted" padding="lg">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-emerald-500/[0.06] p-7 md:p-10">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl"
                />
                <div className="relative">
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                    <ShieldCheck className="h-4 w-4" />
                    Your lifetime deal is protected
                  </div>
                  <h2 className="text-balance font-display text-2xl font-bold tracking-tight md:text-3xl">
                    Your AppSumo Lifetime Deal is not being revoked or discontinued.
                  </h2>
                  <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-foreground/80 md:text-base">
                    <p>
                      We are committed to honouring the original lifetime deal benefits purchased
                      through AppSumo.
                    </p>
                    <p>
                      Existing AppSumo customers will receive equivalent TorixPulse plan benefits
                      corresponding to their original KloudFox AppSumo purchase tier.
                    </p>
                    <p>
                      We have already mapped existing customer email addresses to their corresponding
                      TorixPulse accounts and assigned the respective lifetime deal benefits.
                    </p>
                  </div>

                  <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {protectedPoints.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 rounded-2xl border border-border bg-card/60 p-4"
                      >
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-emerald-500/25 bg-emerald-500/10 text-emerald-400">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span className="text-sm leading-relaxed text-foreground/85">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* Section 3 — What do you need to do? */}
        <Section id="steps" tone="default" padding="xl">
          <SectionHeader
            eyebrow="What to do"
            title={
              <>
                A one-time <span className="gradient-text">setup on TorixPulse</span>
              </>
            }
            subtitle="Existing monitors, status pages and their configurations cannot be automatically migrated from KloudFox to TorixPulse. We sincerely apologise for the additional effort this may require."
          />

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
            {steps.map((step, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-md transition-colors hover:border-primary/20">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 font-display text-sm font-bold text-primary">
                    {i + 1}
                  </span>
                  <p className="pt-1 text-sm leading-relaxed text-foreground/85">
                    <span className="font-semibold text-foreground">Step {i + 1}: </span>
                    {step}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button
              asChild
              size="lg"
              className="btn-aurora h-12 rounded-xl px-6 text-base font-semibold"
            >
              <a href={partner.url} target="_blank" rel="noopener noreferrer">
                Go to TorixPulse
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </Section>

        {/* Section 4 — Benefits comparison */}
        <Section tone="muted" padding="xl">
          <SectionHeader
            eyebrow="At a glance"
            title={
              <>
                What happens to <span className="gradient-text">your benefits</span>
              </>
            }
          />
          <div className="mx-auto max-w-3xl">
            <div className="overflow-hidden rounded-2xl border border-border bg-card/70 backdrop-blur-md">
              <div className="grid grid-cols-2 border-b border-border bg-muted/40 text-sm font-semibold">
                <div className="px-5 py-3.5">Your existing KloudFox LTD</div>
                <div className="px-5 py-3.5">Your TorixPulse account</div>
              </div>
              {comparison.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-2 items-center text-sm ${
                    i !== comparison.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <div className="px-5 py-3.5 font-medium text-foreground/90">{row.label}</div>
                  <div className="px-5 py-3.5">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${toneStyles[row.tone].badge}`}
                    >
                      {toneStyles[row.tone].icon}
                      {row.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Section 5 — Why */}
        <Section tone="default" padding="lg">
          <div className="mx-auto max-w-3xl">
            <SectionHeader
              align="left"
              eyebrow="Why we're doing this"
              title={
                <>
                  A more focused <span className="gradient-text">monitoring platform</span>
                </>
              }
            />
            <div className="space-y-4 text-[15px] leading-relaxed text-foreground/80 md:text-base">
              <p>
                As KloudBean continues expanding its managed hosting ecosystem, we want to strengthen
                our monitoring capabilities through a dedicated monitoring platform.
              </p>
              <p>
                Our partnership with TorixStack enables us to consolidate our monitoring services and
                provide a more focused experience for customers using KloudBean and KloudFox.
              </p>
              <p>
                This transition is intended to provide continuity for our customers while allowing us
                to focus on delivering better monitoring services.
              </p>
            </div>
          </div>
        </Section>

        {/* Section 6 — Thank you */}
        <Section tone="muted" padding="lg">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-3xl border border-border bg-card/70 p-7 backdrop-blur-md md:p-10">
              <div className="space-y-4 text-[15px] leading-relaxed text-foreground/80 md:text-base">
                <p>
                  We understand that having to recreate your monitors and status pages is not ideal.
                </p>
                <p>
                  We sincerely apologise for this inconvenience and appreciate your patience and
                  understanding throughout this transition.
                </p>
                <p>
                  Our commitment to our AppSumo Lifetime Deal customers remains unchanged. We are
                  ensuring that the benefits you originally purchased continue to be honoured on
                  TorixPulse.
                </p>
                <p>Thank you for being part of the KloudFox journey.</p>
              </div>
              <div className="mt-6 border-t border-border pt-5">
                <div className="font-display font-semibold text-foreground">Team KloudFox</div>
                <div className="text-sm text-muted-foreground">A KloudBean initiative</div>
              </div>
            </div>
          </div>
        </Section>

        {/* FAQ */}
        <Section tone="default" padding="xl">
          <SectionHeader eyebrow="FAQ" title="Frequently asked questions" />
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="rounded-2xl border border-border bg-card/70 px-5 backdrop-blur-md data-[state=open]:border-primary/30 md:px-6"
                >
                  <AccordionTrigger className="py-5 text-left text-[15px] font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-[15px] leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Section>

        {/* Closing CTA */}
        <section className="relative overflow-hidden bg-[#050510] text-white">
          <div aria-hidden className="absolute inset-0">
            <div className="aurora-soft" />
          </div>
          <div className="container relative z-10 mx-auto px-4 py-24 text-center">
            <h2 className="text-balance font-display text-3xl font-bold tracking-tight md:text-5xl">
              Continue your monitoring <span className="gradient-text">on TorixPulse</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/60 md:text-lg">
              Your account is ready with your existing KloudFox email. Explore it and set up your
              monitors whenever you're ready.
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="btn-aurora h-12 rounded-xl px-6 text-base font-semibold"
              >
                <a href={partner.url} target="_blank" rel="noopener noreferrer">
                  Go to TorixPulse
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
