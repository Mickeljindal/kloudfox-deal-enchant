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
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t, language } = useLanguage();
  
  const handleAppSumoRedirect = () => {
    window.open('https://appsumo.com/products/kloudfox/', '_blank');
  };

  const customerLogos = [
    "/lovable-uploads/107c1ad1-dc8d-404b-9e4c-f9f45a33948e.png"
  ];
  
  return (
    <div className={`relative ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>
      
      <Header />
      
      <HeroSection />
      
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">{t('trustedBy')}</h2>
          <div className="flex justify-center items-center">
            <img 
              src={customerLogos[0]} 
              alt="Trusted by Smart Companies" 
              className="max-w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>
      
      <FeatureSection />

      <KloudBeanSection />

      <MobileAppSection />
      
      <section className="py-16 md:py-20 bg-kloudfox-blue text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            {t('discountGone')}
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-8 md:mb-10 max-w-3xl mx-auto">
            {t('whileReading')}
          </p>
          <img 
            src="/lovable-uploads/14ae2113-175b-4944-bca8-de4f972336b6.png" 
            alt="KloudFox Uptime Dashboard" 
            className="max-w-full w-full max-w-4xl mx-auto rounded-lg shadow-2xl border-2 border-white/20"
          />
        </div>
      </section>
      
      <PricingSection />
      
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="section-title mb-4">{t('finalCodes')}</h2>
            <p className="section-subtitle">{t('whenGone')}</p>
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
      
      <section className="py-16 md:py-20 bg-gradient-to-r from-kloudfox-darkBlue to-kloudfox-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            {t('cantAfford')}
          </h2>
          <p className="text-lg md:text-xl mb-8 md:mb-10 max-w-3xl mx-auto">
            {t('researchShows')}
          </p>
          
          <div className="mb-8">
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6 md:mb-8">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold">352</div>
                  <div className="text-sm text-white/70">{t('purchased')}</div>
                </div>
                <div className="hidden sm:block h-12 w-px bg-white/20"></div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold">48</div>
                  <div className="text-sm text-white/70">{t('codesLeft')}</div>
                </div>
                <div className="hidden sm:block h-12 w-px bg-white/20"></div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-kloudfox-yellow">97%</div>
                  <div className="text-sm text-white/70">{t('onceNeverAgain')}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <button 
              onClick={handleAppSumoRedirect}
              className="cta-button text-lg md:text-xl px-8 md:px-10 py-4 md:py-5 animate-pulse-scale"
            >
              {t('stopFlying')} <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6 inline" />
            </button>
          </div>
          
          <p className="mt-6 text-white/80 text-sm md:text-base">
            {t('fixAllProblems')}
          </p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
