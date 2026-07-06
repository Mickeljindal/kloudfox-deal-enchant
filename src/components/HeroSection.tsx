import { ArrowRight, ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import Aurora from "./kf/Aurora";
import BigWordmark from "./kf/BigWordmark";
import TiltMockup from "./kf/TiltMockup";
import { MockKloudfoxDashboard } from "./kf/ProductMocks";
import { SITE } from "@/lib/site";

const HeroSection = () => {
  return (
    // overflow-clip (not hidden) so ancestor sticky positioning downstream isn't broken.
    <section
      className="relative isolate overflow-clip bg-[#050510] pt-24 md:pt-32 pb-32 md:pb-40"
      aria-labelledby="hero-heading"
    >
      {/* Layered backdrop */}
      <Aurora />
      <div aria-hidden className="absolute inset-0 grid-bg opacity-60" />
      <div aria-hidden className="noise" />

      {/* Ambient wordmark — sits behind everything, breaks up the hero rhythm */}
      <BigWordmark
        text="kloudfox."
        className="top-16 md:top-14 text-[24vw] md:text-[19vw] lg:text-[17vw] opacity-90"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Headline */}
        <h1
          id="hero-heading"
          className="mx-auto max-w-6xl text-center font-display font-extrabold text-white tracking-[-0.045em] leading-[0.92] animate-fade-up text-[3rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[8.75rem]"
        >
          Know before your
          <br />
          <span className="gradient-text">customers do.</span>
        </h1>

        {/* Sub-copy — three short lines, rhythm */}
        <p
          className="mt-8 md:mt-10 max-w-2xl mx-auto text-center text-lg md:text-2xl text-white/55 leading-[1.45] text-balance animate-fade-up"
          style={{ animationDelay: "0.15s" }}
        >
          AI-scored uptime monitoring.
          <br className="hidden sm:inline" />{" "}
          40-second checks from four continents. Alerts that arrive before your customers do.
        </p>

        {/* CTAs */}
        <div
          className="mt-10 md:mt-12 flex flex-col sm:flex-row justify-center items-center gap-3 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <Button asChild size="lg" className="btn-aurora rounded-xl h-12 px-7 text-base font-semibold group">
            <a href={SITE.app.register} target="_blank" rel="noopener noreferrer">
              Start free trial
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="lg"
            className="rounded-xl h-12 px-4 text-base font-semibold text-white/80 hover:text-white hover:bg-white/5"
          >
            <a href="#flagships">
              See how it works
              <ArrowDown className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <p
          className="mt-6 text-center text-xs md:text-sm text-white/35 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Free forever plan · No credit card · 60-day money-back
        </p>

        {/* Product mockup — huly-scale: the star of the hero */}
        <div
          className="relative mt-20 md:mt-28 perspective animate-fade-up"
          style={{ animationDelay: "0.55s" }}
        >
          {/* Big soft glow beneath the mockup */}
          <div
            aria-hidden
            className="absolute -inset-x-16 -inset-y-24 -z-10 rounded-[4rem] bg-gradient-to-b from-primary/25 via-primary/5 to-transparent blur-3xl"
          />

          <TiltMockup className="mx-auto max-w-5xl h-[440px] md:h-[560px] lg:h-[640px] rounded-2xl border border-white/10 shadow-elevated overflow-hidden bg-white">
            <MockKloudfoxDashboard />
          </TiltMockup>

          {/* Fade the bottom edge of the mockup into the background */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#050510] to-transparent"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
