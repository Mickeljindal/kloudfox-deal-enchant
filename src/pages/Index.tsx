
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
          <h2 className="text-3xl font-bold mb-8">Trusted By Smart Companies</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <div className="h-12 flex items-center">
              <span className="font-bold text-xl text-gray-700">Shopify</span>
            </div>
            <div className="h-12 flex items-center">
              <span className="font-bold text-xl text-gray-700">WordPress</span>
            </div>
            <div className="h-12 flex items-center">
              <span className="font-bold text-xl text-gray-700">WooCommerce</span>
            </div>
            <div className="h-12 flex items-center">
              <span className="font-bold text-xl text-gray-700">SaaS Startups</span>
            </div>
          </div>
        </div>
      </section>
      
      <FeatureSection />
      
      <section className="py-20 bg-kloudfox-blue text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stop Finding Out About Downtime From Your Customers
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-3xl mx-auto">
            KloudFox monitors your website 24/7 and alerts you instantly when something goes wrong. No more embarrassing calls from customers about your site being down.
          </p>
          <img 
            src="/lovable-uploads/14ae2113-175b-4944-bca8-de4f972336b6.png" 
            alt="KloudFox Uptime Dashboard" 
            className="max-w-4xl w-full mx-auto rounded-lg shadow-2xl border-2 border-white/20"
          />
        </div>
      </section>
      
      <PricingSection />
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">See KloudFox In Action</h2>
            <p className="section-subtitle">Monitor uptime, create custom status pages, and get instant alerts across multiple platforms</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-4">Simple Monitoring Setup</h3>
              <p className="text-gray-600 mb-6">Just enter your URL and customize monitoring options to start protecting your website in seconds.</p>
              <img 
                src="/lovable-uploads/1ef489f5-a13b-456d-a08f-d31c31021171.png" 
                alt="KloudFox Monitoring Setup" 
                className="rounded-lg shadow-lg border border-gray-200"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Beautiful Status Pages</h3>
              <p className="text-gray-600 mb-6">Create professional status pages that match your brand and keep your customers informed.</p>
              <img 
                src="/lovable-uploads/a90c6084-dab5-4f06-a5d3-a2fc59f36c73.png" 
                alt="KloudFox Status Pages" 
                className="rounded-lg shadow-lg border border-gray-200"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Powerful Integrations</h3>
              <p className="text-gray-600 mb-6">Connect with your favorite tools like Slack, Zapier, and webhooks for seamless workflows.</p>
              <img 
                src="/lovable-uploads/00cb32e5-9921-44c4-8754-c328ec30d224.png" 
                alt="KloudFox Integrations" 
                className="rounded-lg shadow-lg border border-gray-200"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Mobile Alerts On The Go</h3>
              <p className="text-gray-600 mb-6">Get push notifications on your phone so you can respond instantly, no matter where you are.</p>
              <img 
                src="/lovable-uploads/d59703be-4077-4706-bd5b-ec59f72792b8.png" 
                alt="KloudFox Mobile Alerts" 
                className="rounded-lg shadow-lg border border-gray-200"
              />
            </div>
          </div>
        </div>
      </section>
      
      <TestimonialsSection />
      
      <FAQSection />
      
      <section className="py-20 bg-gradient-to-r from-kloudfox-darkBlue to-kloudfox-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Clock Is Ticking On This Offer
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            This lifetime deal is strictly limited and will <span className="font-bold text-kloudfox-yellow">never be offered again</span> once it's gone. Act now before your website goes down without you knowing.
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
            <p className="mb-6">Never miss website downtime again</p>
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
