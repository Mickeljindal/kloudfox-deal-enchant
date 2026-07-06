import { Plug, Radar, Bell } from "lucide-react";
import Section, { SectionHeader } from "./kf/Section";
import Reveal from "./kf/Reveal";

const STEPS = [
  {
    n: "01",
    icon: <Plug className="h-5 w-5" />,
    title: "Connect a URL",
    body: "Paste a URL or import from Kubernetes, AWS, or Cloudflare. Kloudfox learns your endpoints automatically.",
  },
  {
    n: "02",
    icon: <Radar className="h-5 w-5" />,
    title: "We watch every 40s",
    body: "Probes fire from four continents every 40 seconds. AI learns your baseline within an hour.",
  },
  {
    n: "03",
    icon: <Bell className="h-5 w-5" />,
    title: "You get alerted first",
    body: "Slack, SMS, push, email, or webhook — the moment behavior drifts. Not when a customer tweets.",
  },
];

const HowItWorksSection = () => {
  return (
    <Section tone="default" padding="xl">
      <SectionHeader
        eyebrow="How it works"
        title={
          <>
            From URL to first alert{" "}
            <span className="gradient-text">in under 5 minutes.</span>
          </>
        }
        subtitle="No agents to install. No YAML to write. If you can copy-paste a URL, you can set up Kloudfox."
      />

      <div className="relative">
        {/* connector line (desktop) */}
        <div
          aria-hidden
          className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 relative">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <div className="relative rounded-2xl border border-border bg-card/60 backdrop-blur-md p-7 h-full">
                <div className="absolute -top-3 left-7">
                  <span className="inline-flex items-center rounded-full bg-background border border-border px-3 py-1 text-[11px] font-mono text-muted-foreground">
                    Step {s.n}
                  </span>
                </div>
                <div className="mt-3 flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 text-primary mb-5">
                  {s.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 tracking-tight">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default HowItWorksSection;
