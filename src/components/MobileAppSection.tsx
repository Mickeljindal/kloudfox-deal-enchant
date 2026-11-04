import { Smartphone, Bell, Zap } from "lucide-react";
import Section from "./kf/Section";
import { Button } from "./ui/button";
import { SITE } from "@/lib/site";
import Reveal from "./kf/Reveal";

const BENEFITS = [
  {
    icon: <Bell className="h-5 w-5" />,
    title: "Real-time push",
    desc: "Instant alerts the moment behavior drifts. Works globally.",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Everything at a glance",
    desc: "See every monitor, region, and open incident on one screen.",
  },
  {
    icon: <Smartphone className="h-5 w-5" />,
    title: "Full control from your pocket",
    desc: "Pause, edit, and acknowledge from anywhere — no laptop needed.",
  },
];

const MobileAppSection = () => {
  return (
    <Section tone="default" padding="xl" className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <Reveal className="order-2 lg:order-1">
          <div className="eyebrow mb-4">Mobile apps</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 tracking-tight text-balance">
            Your on-call, in your pocket.
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
            Native iOS and Android apps that ship the same 40-second alerts to
            your lock screen. Because outages don't wait for laptop hours.
          </p>

          <div className="space-y-4 mb-9">
            {BENEFITS.map((b) => (
              <div key={b.title} className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0">
                  {b.icon}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{b.title}</div>
                  <div className="text-sm text-muted-foreground mt-0.5">{b.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild className="bg-foreground text-background hover:bg-foreground/90 rounded-xl px-5 h-11">
              <a href={SITE.app.ios} target="_blank" rel="noopener noreferrer" aria-label="Download on the App Store">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-xl px-5 h-11 border-border">
              <a href={SITE.app.android} target="_blank" rel="noopener noreferrer" aria-label="Get it on Google Play">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Google Play
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={100} className="order-1 lg:order-2 flex justify-center">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-primary/25 via-primary/5 to-transparent blur-3xl -z-10"
            />
            <img
              src="/lovable-uploads/b039a951-88d9-4e14-bfa6-f0fc079271d1.png"
              alt="Kloudfox iOS and Android apps"
              className="max-w-sm w-full animate-float"
              loading="lazy"
              width="512"
              height="600"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
};

export default MobileAppSection;
