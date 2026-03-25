
import { ArrowRight } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import MobileAppSection from "@/components/MobileAppSection";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomerLogosCarousel from "@/components/CustomerLogosCarousel";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const Index = () => {
  const { language } = useLanguage();

  const handleGetStarted = () => {
    window.open('https://watch.kloudfox.com/register', '_blank');
  };

  return (
    <div className={`relative ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>

      <Header />
      <HeroSection />

      {/* Trusted By */}
      <section className="py-14 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider mb-8">
            Trusted by teams at
          </p>
          <CustomerLogosCarousel />
        </div>
      </section>

      <FeatureSection />
      <MobileAppSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />

      {/* Final CTA */}
      <section className="py-24 bg-[#0a0a1a] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            Ready to prevent your next outage?
          </h2>
          <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto">
            Start monitoring in under 5 minutes. No credit card required.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
            <Button
              onClick={handleGetStarted}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 rounded-xl shadow-lg shadow-primary/25 text-base"
            >
              Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-white/40">
            <span>✓ Free 60-day trial</span>
            <span>✓ No credit card</span>
            <span>✓ Cancel anytime</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
