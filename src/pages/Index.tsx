
import { ArrowRight } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import KloudBeanSection from "@/components/KloudBeanSection";
import PremiumPricingSection from "@/components/PremiumPricingSection";
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
      
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
            Enterprise-Grade Monitoring Dashboard
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-8 md:mb-10 max-w-3xl mx-auto">
            Monitor global infrastructure with millisecond precision. Trusted by Fortune 500 companies worldwide.
          </p>
          <img 
            src="/lovable-uploads/14ae2113-175b-4944-bca8-de4f972336b6.png" 
            alt="KloudFox Enterprise Dashboard" 
            className="max-w-full w-full max-w-4xl mx-auto rounded-xl shadow-2xl border border-white/10 backdrop-blur-sm"
          />
        </div>
      </section>
      
      <PremiumPricingSection />
      
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">Enterprise Features That Set Us Apart</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">The world's most advanced monitoring platform, trusted by global enterprises</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">{t('zeroHeadaches')}</h3>
              <p className="text-gray-600 mb-6">{t('zeroHeadachesDesc')}</p>
              <img 
                src="/lovable-uploads/1ef489f5-a13b-456d-a08f-d31c31021171.png" 
                alt="KloudFox Monitoring Setup" 
                className="rounded-lg shadow-lg border border-gray-200 w-full"
              />
            </div>
            
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">{t('staticHostingTitle')}</h3>
              <p className="text-gray-600 mb-6">{t('staticHostingDesc')}</p>
              <img 
                src="/lovable-uploads/a90c6084-dab5-4f06-a5d3-a2fc59f36c73.png" 
                alt="KloudFox Status Pages" 
                className="rounded-lg shadow-lg border border-gray-200 w-full"
              />
            </div>
            
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">{t('lightningFast')}</h3>
              <p className="text-gray-600 mb-6">{t('lightningFastDesc')}</p>
              <img 
                src="/lovable-uploads/00cb32e5-9921-44c4-8754-c328ec30d224.png" 
                alt="KloudFox Integrations" 
                className="rounded-lg shadow-lg border border-gray-200 w-full"
              />
            </div>
            
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">{t('autoBackups')}</h3>
              <p className="text-gray-600 mb-6">{t('autoBackupsDesc')}</p>
              <img 
                src="/lovable-uploads/d59703be-4077-4706-bd5b-ec59f72792b8.png" 
                alt="KloudFox Mobile Alerts" 
                className="rounded-lg shadow-lg border border-gray-200 w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      <TestimonialsSection />
      
      <FAQSection />
      
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
            Join the Global Enterprise Standard
          </h2>
          <p className="text-lg md:text-xl mb-8 md:mb-10 max-w-3xl mx-auto text-white/90">
            Trusted by Fortune 500 companies worldwide for mission-critical infrastructure monitoring
          </p>
          
          <div className="mb-8">
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6 md:mb-8 border border-white/20">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-300">500+</div>
                  <div className="text-sm text-white/70">Fortune 500 Companies</div>
                </div>
                <div className="hidden sm:block h-12 w-px bg-white/20"></div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-300">99.99%</div>
                  <div className="text-sm text-white/70">Uptime SLA</div>
                </div>
                <div className="hidden sm:block h-12 w-px bg-white/20"></div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-green-300">24/7</div>
                  <div className="text-sm text-white/70">Enterprise Support</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
            <button 
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg md:text-xl px-8 md:px-10 py-4 md:py-5 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              Start Enterprise Trial <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6 inline" />
            </button>
            
            <button 
              onClick={handleDiscordJoin}
              className="bg-slate-800 hover:bg-slate-900 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl border border-slate-700"
            >
              Join Enterprise Community 🚀
            </button>
          </div>
          
          <div className="mt-8 flex justify-center items-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <p className="text-white/90 text-sm md:text-base font-medium">
                ✅ Enterprise-grade security compliance • ✅ 99.99% uptime SLA • ✅ 24/7 dedicated support
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
