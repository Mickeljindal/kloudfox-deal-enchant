import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FlagshipFeatures from "@/components/FlagshipFeatures";
import UrlCheckerSection from "@/components/UrlCheckerSection";
import FeatureSection from "@/components/FeatureSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ComparisonSection from "@/components/ComparisonSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection, { FAQS } from "@/components/FAQSection";
import MobileAppSection from "@/components/MobileAppSection";
import CustomerLogosCarousel from "@/components/CustomerLogosCarousel";
import BigWordmark from "@/components/kf/BigWordmark";

import SEO, {
  faqJsonLd,
  organizationJsonLd,
  softwareApplicationJsonLd,
  websiteJsonLd,
} from "@/components/SEO";
import { SITE } from "@/lib/site";

const Index = () => {
  const { language } = useLanguage();

  return (
    <div className={language === "ar" ? "rtl" : "ltr"}>
      <SEO
        title=""
        description={SITE.description}
        path="/"
        image="/og/default.png"
        jsonLd={[
          organizationJsonLd(),
          websiteJsonLd(),
          softwareApplicationJsonLd(),
          faqJsonLd(FAQS),
        ]}
      />

      <Header />
      <main>
        <HeroSection />

        {/* Trusted-by strip */}
        <section
          aria-labelledby="trusted-heading"
          className="relative border-y border-white/5 bg-[#050510] overflow-hidden"
        >
          <div className="container mx-auto px-4 py-14 md:py-16 relative z-10">
            <p
              id="trusted-heading"
              className="text-center text-[11px] uppercase tracking-[0.28em] text-white/40 font-medium mb-8"
            >
              Trusted by teams that ship every day
            </p>
            <CustomerLogosCarousel />
          </div>
        </section>

        {/* Flagship features (huly-style sticky reveal) */}
        <FlagshipFeatures />

        <HowItWorksSection />

        <UrlCheckerSection />

        <FeatureSection />

        <ComparisonSection />

        <MobileAppSection />

        <PricingSection />

        <TestimonialsSection />

        <FAQSection />

        {/* Final CTA */}
        <section className="relative overflow-clip bg-[#050510] text-white">
          <div aria-hidden className="absolute inset-0">
            <div className="aurora" />
            <div className="grid-bg opacity-40 absolute inset-0" />
            <div className="noise" />
          </div>
          <BigWordmark
            text="ready."
            className="top-8 text-[26vw] md:text-[18vw] lg:text-[16vw] opacity-90"
          />
          <div className="container mx-auto px-4 py-32 md:py-40 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-[-0.03em] leading-[0.95] text-balance max-w-4xl mx-auto">
              Ready to prevent your{" "}
              <span className="gradient-text">next outage?</span>
            </h2>
            <p className="mt-6 max-w-xl mx-auto text-white/60 text-lg md:text-xl leading-relaxed">
              Set up your first monitor in under five minutes. No card, no
              commitment, cancel anytime.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-3">
              <Button asChild size="lg" className="btn-aurora rounded-xl h-12 px-7 text-base font-semibold">
                <a href={SITE.app.register} target="_blank" rel="noopener noreferrer">
                  Start free trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 text-white rounded-xl h-12 px-6 text-base font-semibold"
              >
                <a href="/pricing">See pricing</a>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/45">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> Free forever plan
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> 60-day money-back
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> Cancel anytime
              </span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
