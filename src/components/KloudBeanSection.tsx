
import { Server, Globe, Zap, Shield, Database } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import CustomerLogosCarousel from "./CustomerLogosCarousel";

const KloudBeanSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            <span className="text-kloudfox-blue">{t('kloudBeanTitle')}</span>
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            {t('kloudBeanSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="bg-red-50 text-red-700 inline-block py-1 px-4 rounded-full font-medium text-sm mb-6">
              {t('problem')}
            </div>
            <h3 className="text-3xl font-bold mb-6">{t('hiddenCosts')}</h3>
            <div className="space-y-5">
              <div className="flex items-start">
                <div className="bg-red-100 p-2 rounded-full mt-1 mr-4">
                  <span className="text-red-600 font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">{t('technicalComplexity')}</h4>
                  <p className="text-gray-600">{t('complexityDesc')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-100 p-2 rounded-full mt-1 mr-4">
                  <span className="text-red-600 font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">{t('slowLoading')}</h4>
                  <p className="text-gray-600">{t('loadingDesc')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-100 p-2 rounded-full mt-1 mr-4">
                  <span className="text-red-600 font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">{t('scalingPanic')}</h4>
                  <p className="text-gray-600">{t('scalingDesc')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="/lovable-uploads/1ef489f5-a13b-456d-a08f-d31c31021171.png" 
              alt="KloudBean Simple Setup Interface" 
              className="rounded-lg shadow-xl border border-blue-100 z-10 relative"
            />
            <div className="absolute -bottom-6 -right-6 bg-yellow-50 border border-yellow-200 p-4 rounded-lg shadow-lg max-w-xs z-20">
              <p className="text-sm font-medium text-yellow-800">
                "Our site used to crash every Black Friday until we switched to KloudBean. Last sale, we handled 43,000 visitors without a single issue!"
              </p>
              <p className="text-xs mt-2 font-bold">— Michael T., eCommerce Store Owner</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
          <div className="text-center mb-10">
            <div className="bg-green-50 text-green-700 inline-block py-1 px-4 rounded-full font-medium text-sm mb-4">
              {t('solution')}
            </div>
            <h3 className="text-3xl font-bold mb-4">{t('kloudBeanSolution')}</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('launchFaster')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
              <Server className="h-10 w-10 text-kloudfox-lightBlue mb-4" />
              <h4 className="text-xl font-bold mb-2">{t('zeroHeadaches')}</h4>
              <p className="text-gray-600">{t('zeroHeadachesDesc')}</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
              <Zap className="h-10 w-10 text-kloudfox-lightBlue mb-4" />
              <h4 className="text-xl font-bold mb-2">{t('lightningFast')}</h4>
              <p className="text-gray-600">{t('lightningFastDesc')}</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
              <Globe className="h-10 w-10 text-kloudfox-lightBlue mb-4" />
              <h4 className="text-xl font-bold mb-2">{t('autoScaling')}</h4>
              <p className="text-gray-600">{t('autoScalingDesc')}</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
              <Shield className="h-10 w-10 text-kloudfox-lightBlue mb-4" />
              <h4 className="text-xl font-bold mb-2">{t('enterpriseSecurity')}</h4>
              <p className="text-gray-600">{t('enterpriseSecurityDesc')}</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
              <Database className="h-10 w-10 text-kloudfox-lightBlue mb-4" />
              <h4 className="text-xl font-bold mb-2">{t('autoBackups')}</h4>
              <p className="text-gray-600">{t('autoBackupsDesc')}</p>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
              <div className="font-bold text-xl mb-2 text-kloudfox-orange">{t('staticHosting')}</div>
              <h4 className="text-xl font-bold mb-2">{t('staticHostingTitle')}</h4>
              <p className="text-gray-600">{t('staticHostingDesc')}</p>
              <p className="text-sm font-bold mt-4 text-kloudfox-orange">{t('freeWith')}</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-blue-50 rounded-xl p-6 max-w-2xl mx-auto mb-8">
              <h4 className="font-bold text-xl mb-2">Discover KloudBean Hosting</h4>
              <p className="text-gray-600 mb-4">
                KloudBean is our enterprise hosting solution. Separate from KloudFox monitoring.
              </p>
              <p className="text-sm text-gray-500">
                *KloudBean hosting is not included in the current KloudFox deal. Please visit our pricing page for KloudFox monitoring features.
              </p>
            </div>
            <div className="flex justify-center">
              <Button 
                asChild
                variant="outline" 
                className="border-kloudfox-blue text-kloudfox-blue hover:bg-kloudfox-blue hover:text-white font-bold py-6 px-8 rounded-lg text-xl"
              >
                <a href="https://www.kloudbean.com" target="_blank" rel="noopener noreferrer">
                  Learn More About KloudBean
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Trusted by section with carousel */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">Trusted By Smart Companies</h3>
          <CustomerLogosCarousel />
        </div>
      </div>
    </section>
  );
};

export default KloudBeanSection;
