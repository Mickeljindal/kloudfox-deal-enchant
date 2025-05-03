
import { ArrowRight } from "lucide-react";
import DealBanner from "@/components/DealBanner";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  return (
    <div className="relative">
      <DealBanner />
      
      <HeroSection />
      
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">As Featured On</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <div className="h-12 flex items-center">
              <span className="font-bold text-xl text-gray-700">TechCrunch</span>
            </div>
            <div className="h-12 flex items-center">
              <span className="font-bold text-xl text-gray-700">Forbes</span>
            </div>
            <div className="h-12 flex items-center">
              <span className="font-bold text-xl text-gray-700">Entrepreneur</span>
            </div>
            <div className="h-12 flex items-center">
              <span className="font-bold text-xl text-gray-700">Fast Company</span>
            </div>
          </div>
        </div>
      </section>
      
      <FeatureSection />
      
      <section className="py-20 bg-kloudfox-blue text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stop Guessing. Start Growing.
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-3xl mx-auto">
            KloudFox gives you crystal-clear insights that convert into real business growth. No more flying blind or wasting money on ineffective strategies.
          </p>
          <img 
            src="/lovable-uploads/e9406ac4-1b96-4235-a0c6-5cfd3d7772a0.png" 
            alt="KloudFox Analytics Dashboard" 
            className="max-w-4xl w-full mx-auto rounded-lg shadow-2xl border-2 border-white/20"
          />
        </div>
      </section>
      
      <PricingSection />
      
      <TestimonialsSection />
      
      <FAQSection />
      
      <section className="py-20 bg-gradient-to-r from-kloudfox-darkBlue to-kloudfox-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Clock Is Ticking On This Offer
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            This lifetime deal is strictly limited and will <span className="font-bold text-kloudfox-yellow">never be offered again</span> once it's gone. Act now before it's too late.
          </p>
          
          <div className="mb-8">
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-8">
              <div className="flex items-center justify-center space-x-4">
                <div className="text-center">
                  <div className="text-4xl font-bold">352</div>
                  <div className="text-sm text-white/70">Purchases Today</div>
                </div>
                <div className="h-12 w-px bg-white/20"></div>
                <div className="text-center">
                  <div className="text-4xl font-bold">48</div>
                  <div className="text-sm text-white/70">Codes Left</div>
                </div>
                <div className="h-12 w-px bg-white/20"></div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-kloudfox-yellow">97%</div>
                  <div className="text-sm text-white/70">Discount</div>
                </div>
              </div>
            </div>
          </div>
          
          <button className="cta-button text-xl px-10 py-5 animate-pulse-scale">
            Get Lifetime Access Now <ArrowRight className="ml-2 h-6 w-6 inline" />
          </button>
          
          <p className="mt-6 text-white/80">
            Backed by AppSumo's 30-day money-back guarantee
          </p>
        </div>
      </section>
      
      <footer className="bg-kloudfox-blue text-white/70 py-10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="font-bold text-xl text-white mb-4">KloudFox</div>
            <p className="mb-6">Transform your data into business growth</p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">Facebook</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
            </div>
            <p className="text-sm">
              © {new Date().getFullYear()} KloudFox. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
