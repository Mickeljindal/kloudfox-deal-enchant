
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
      
      <section className="py-16 md:py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            {t('readyToStart')}
          </h2>
          <p className="text-lg md:text-xl mb-8 md:mb-10 max-w-3xl mx-auto">
            {t('startMonitoring')}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
            <button 
              onClick={handleGetStarted}
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold text-lg md:text-xl px-8 md:px-10 py-4 md:py-5 rounded-lg shadow-lg transition-all"
            >
              {t('getStarted')} <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6 inline" />
            </button>
            
            <button 
              onClick={handleDiscordJoin}
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg transition-all"
            >
              {t('joinDiscord')} 🚀
            </button>
          </div>
          
          <div className="mt-8 flex justify-center items-center">
            <div className="bg-blue-700 rounded-lg p-4">
              <p className="text-white text-sm md:text-base">
                ✅ {t('freeTrial')} • ✅ {t('noCard')} • ✅ {t('setupTime')}
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
