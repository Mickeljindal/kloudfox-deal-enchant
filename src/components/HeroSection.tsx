
import { ArrowRight, AlertTriangle } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  
  // Set end date to 7 days from now for the countdown
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 3);

  return (
    <div className="pt-20 pb-20 bg-hero-pattern relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 py-2 px-4 bg-red-500/90 backdrop-blur-sm rounded-full animate-pulse">
            <span className="text-white text-sm font-medium">
              <span className="text-yellow-300 font-bold">{t('finalCodes')}</span> • {t('whenGone')}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            {t('websiteCrashing')}
          </h1>
          
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            {t('lostSales')} <span className="font-bold text-yellow-300">{t('competitorsAlert')}</span> <span className="font-bold text-white">{t('unfairAdvantage')}</span>
          </p>
          
          <div className="mb-8">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl inline-block">
              <CountdownTimer endDate={endDate} className="mb-4" />
              <div className="text-white/90 text-lg flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-yellow-300" />
                <span>{t('discountGone')}</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="cta-button animate-pulse-scale relative overflow-hidden group">
              <span className="relative z-10">{t('lockInDeal')} <ArrowRight className="ml-2 h-5 w-5 inline" /></span>
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </button>
            <a href="#features" className="text-white underline underline-offset-4 font-medium hover:text-yellow-300 transition-colors flex items-center">
              <span>{t('seeWhatOthers')}</span>
              <ArrowRight className="ml-1 h-4 w-4 inline" />
            </a>
          </div>
          
          <div className="mt-8">
            <div className="flex items-center justify-center space-x-2">
              <div className="p-1 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-white text-sm">
                <span className="font-bold">{t('codesLeft')}</span> • <span className="font-bold text-yellow-300">{t('purchased')}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-red-500/20 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-yellow-500/20 blur-3xl"></div>
    </div>
  );
};

export default HeroSection;
