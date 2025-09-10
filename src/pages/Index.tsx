
import { ArrowRight } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import KloudBeanSection from "@/components/KloudBeanSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import MobileAppSection from "@/components/MobileAppSection";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomerLogosCarousel from "@/components/CustomerLogosCarousel";
import { useLanguage } from "@/contexts/LanguageContext";
import { useDynamicCodes } from "@/hooks/useDynamicCodes";

const Index = () => {
  const { t, language } = useLanguage();
  const { codesLeft, purchased } = useDynamicCodes();
  
  const handleGetStarted = () => {
    window.open('https://watch.kloudfox.com/register', '_blank');
  };

  const handleDiscordJoin = () => {
    window.open('https://discord.gg/HX66cv3G', '_blank');
  };
  
  return (
    <div className={`relative ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>
      
      <Header />
      
      <HeroSection />
      
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12">{t('trustedBy')}</h2>
          <CustomerLogosCarousel />
        </div>
      </section>
      
      <FeatureSection />

      <KloudBeanSection />

      <MobileAppSection />
      
      <PricingSection />
      
      
      <TestimonialsSection />
      
      <FAQSection />
      
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Protect Your Business?
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-white/90">
            Join thousands of businesses that never worry about website downtime. Start monitoring in minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <button 
              onClick={handleGetStarted}
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold text-lg px-8 py-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover-scale"
            >
              Start Free Trial <ArrowRight className="ml-2 h-5 w-5 inline" />
            </button>
            
            <button 
              onClick={handleDiscordJoin}
              className="bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover-scale"
            >
              Join Community 🚀
            </button>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm">
            <div className="flex items-center text-green-300">
              <span className="w-2 h-2 bg-green-300 rounded-full mr-2"></span>
              Free 60-day trial
            </div>
            <div className="flex items-center text-green-300">
              <span className="w-2 h-2 bg-green-300 rounded-full mr-2"></span>
              No credit card required
            </div>
            <div className="flex items-center text-green-300">
              <span className="w-2 h-2 bg-green-300 rounded-full mr-2"></span>
              5-minute setup
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
