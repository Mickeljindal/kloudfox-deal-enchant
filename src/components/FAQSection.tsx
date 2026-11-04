import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Section, { SectionHeader } from "./kf/Section";

/**
 * Homepage FAQ. Exported so parent pages can inject FAQPage JSON-LD
 * using the exact same source of truth.
 */
export const FAQS: Array<{ question: string; answer: string }> = [
  {
    question: "How is Kloudfox different from UptimeRobot or Pingdom?",
    answer:
      "We check every 40 seconds from four continents, run AI anomaly detection on top of raw uptime signals, and bundle status pages + SSL + incident management in the same clean dashboard. UptimeRobot is fine for a single site; Pingdom is enterprise-priced. Kloudfox is built for the middle: real SaaS teams that want depth without a five-figure quote.",
  },
  {
    question: "Does monitoring affect my site's performance?",
    answer:
      "No. Kloudfox sends the same weight of traffic as a regular visitor. Checks are staggered so we never pile onto a single origin, and we honor robots.txt and rate-limit headers.",
  },
  {
    question: "What counts as downtime?",
    answer:
      "Downtime is any state where a real user in a probed region can't complete the action the URL exists to serve. We consider HTTP status, latency thresholds, TLS validity, content assertions, and behavior deviation. False positives are aggressively suppressed by our anomaly scoring.",
  },
  {
    question: "How fast will I be alerted?",
    answer:
      "The median alert lands in your channel of choice under 30 seconds from detection. Slack, Discord, SMS, push, email, PagerDuty, Zapier, and webhooks are all first-class.",
  },
  {
    question: "Can I trust the AI predictions?",
    answer:
      "The AI never blocks alerts — it only adds signal. Every prediction ships with an explainability panel showing which baseline the current window is deviating from, and by how many standard deviations. Turn it off in one click if you'd rather see raw checks only.",
  },
  {
    question: "Is there a free plan?",
    answer:
      "Yes. Free forever for 5 monitors, 1 status page, 5-minute checks, and email alerts. No card, no expiration, no dark patterns.",
  },
  {
    question: "How does the 60-day money-back guarantee work?",
    answer:
      "If Kloudfox doesn't save you from an incident, or you just don't love it, email support@kloudfox.com within 60 days of paying and we refund every cent. One reply, no questions.",
  },
  {
    question: "Do you support single sign-on?",
    answer:
      "SSO/SAML and audit logs ship on the Enterprise plan. Reach out via /contact and we'll get you provisioned in under a business day.",
  },
];

const FAQSection = () => {
  return (
    <Section tone="default" padding="xl" id="faq">
      <SectionHeader
        eyebrow="FAQ"
        title="Real answers, no marketing gloss."
        subtitle="Everything we get asked before people click Start Free."
      />

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-2">
          {FAQS.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-border bg-card/60 backdrop-blur-md rounded-2xl px-5 md:px-6 data-[state=open]:border-primary/30 transition-colors"
            >
              <AccordionTrigger className="text-left font-semibold text-[15px] md:text-base hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-[15px] leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-10 text-center">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <Button asChild variant="outline" className="rounded-xl">
            <a href="/contact">
              Get in touch <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default FAQSection;
