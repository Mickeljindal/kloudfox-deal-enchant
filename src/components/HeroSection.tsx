
import { ArrowRight, AlertTriangle, LogIn, CheckCircle, Star } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";
import { useDynamicCodes } from "@/hooks/useDynamicCodes";

const HeroSection = () => {
  const { t } = useLanguage();
  const { codesLeft, purchased } = useDynamicCodes();
  
  // Set end date to 7 days from now for the countdown
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 3);

  const handleAppSumoRedirect = () => {
    window.open('https://appsumo.8odi.net/MAoPn2', '_blank');
  };

  return (
    <div className="pt-16 md:pt-20 pb-16 md:pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 md:top-20 left-5 md:left-10 w-20 md:w-32 h-20 md:h-32 rounded-full bg-orange-500/20 blur-2xl md:blur-3xl animate-pulse"></div>
        <div className="absolute bottom-5 md:bottom-10 right-5 md:right-10 w-40 md:w-64 h-40 md:h-64 rounded-full bg-yellow-500/20 blur-2xl md:blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 md:w-96 h-60 md:h-96 rounded-full bg-blue-400/10 blur-2xl md:blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* AppSumo Trust Badge */}
          <div className="flex justify-center items-center mb-4 md:mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-4 md:px-6 py-3 md:py-4 border border-white/20 shadow-lg">
              <div className="flex items-center justify-center space-x-3 md:space-x-4">
                <img 
                  src="/lovable-uploads/17eebf94-436d-41a2-a643-9af06e464b8f.png" 
                  alt="AppSumo" 
                  className="h-6 md:h-8 w-auto"
                />
                <div className="text-white/90 text-sm md:text-base font-medium">
                  Exclusive Lifetime Deal
                </div>
                <div className="bg-orange-500 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-bold">
                  97% OFF
                </div>
              </div>
            </div>
          </div>

          {/* Trust badges - Mobile optimized */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-6">
            <div className="flex items-center text-yellow-300">
              <Star className="w-4 md:w-5 h-4 md:h-5 fill-current" />
              <Star className="w-4 md:w-5 h-4 md:h-5 fill-current" />
              <Star className="w-4 md:w-5 h-4 md:h-5 fill-current" />
              <Star className="w-4 md:w-5 h-4 md:h-5 fill-current" />
              <Star className="w-4 md:w-5 h-4 md:h-5 fill-current" />
              <span className="ml-2 text-white/90 text-xs md:text-sm">4.9/5 from 2,847 users</span>
            </div>
            <div className="text-white/70 text-sm hidden md:block">|</div>
            <div className="text-green-300 text-xs md:text-sm font-medium">✓ Trusted by 10,000+ websites</div>
          </div>

          <div className="inline-block mb-4 md:mb-6 py-2 md:py-3 px-4 md:px-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-pulse shadow-lg">
            <span className="text-white text-xs md:text-sm font-bold flex items-center">
              <AlertTriangle className="w-3 md:w-4 h-3 md:h-4 mr-1 md:mr-2" />
              <span className="text-yellow-300 font-bold">FINAL {codesLeft} CODES LEFT</span> 
              <span className="hidden md:inline"> • Don't Miss Out!</span>
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-white mb-4 md:mb-6 leading-tight px-2">
            <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              Stop Losing Money
            </span>
            <br />
            <span className="text-white">To Website Crashes</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
            Get instant alerts when your website goes down. <span className="font-bold text-yellow-300">97% of our customers prevent revenue loss</span> from undetected outages. <span className="font-bold text-white">Don't be the last to know!</span>
          </p>
          
          {/* Social proof numbers - Mobile optimized */}
          <div className="grid grid-cols-3 gap-2 md:flex md:justify-center md:items-center md:space-x-8 mb-6 md:mb-8 px-4">
            <div className="text-center">
              <div className="text-xl md:text-3xl font-bold text-yellow-300">${(purchased * 127).toLocaleString()}</div>
              <div className="text-white/70 text-xs md:text-sm">Revenue Protected</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-3xl font-bold text-green-300">{purchased}</div>
              <div className="text-white/70 text-xs md:text-sm">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-3xl font-bold text-orange-300">{codesLeft}</div>
              <div className="text-white/70 text-xs md:text-sm">Deals Left</div>
            </div>
          </div>

          <div className="mb-6 md:mb-8 px-4">
            <div className="bg-white/10 backdrop-blur-lg p-4 md:p-6 rounded-2xl inline-block shadow-2xl border border-white/20 w-full max-w-md mx-auto">
              <CountdownTimer endDate={endDate} className="mb-3 md:mb-4" />
              <div className="text-white/90 text-sm md:text-lg flex items-center justify-center">
                <AlertTriangle className="w-4 md:w-5 h-4 md:h-5 mr-1 md:mr-2 text-yellow-300 animate-pulse" />
                <span className="font-bold text-center">97% OFF Ends When Timer Hits Zero!</span>
              </div>
            </div>
          </div>
          
          {/* CTA Buttons - Mobile optimized */}
          <div className="flex flex-col space-y-4 mb-6 md:mb-8 px-4">
            <button 
              onClick={handleAppSumoRedirect}
              className="relative group bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold py-4 md:py-5 px-6 md:px-10 rounded-2xl text-lg md:text-xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 animate-pulse-scale w-full"
            >
              <span className="relative z-10 flex items-center justify-center">
                🔥 Get Lifetime Deal - Only $29! 
                <ArrowRight className="ml-2 h-5 md:h-6 w-5 md:w-6" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            
            <div className="text-center">
              <div className="text-white/80 text-sm">Usually $2,388/year</div>
              <div className="text-green-300 font-bold text-lg">Save $2,359 Forever!</div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-4 mb-6 md:mb-8 px-4">
            <Button 
              asChild
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 transition-all duration-300 group shadow-lg hover:shadow-xl w-full md:w-auto"
            >
              <a href="https://watch.kloudfox.com/login" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <LogIn className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Access Dashboard
              </a>
            </Button>
            <Button 
              asChild
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full md:w-auto"
            >
              <a href="https://watch.kloudfox.com/register" target="_blank" rel="noopener noreferrer">
                Start Free Trial
              </a>
            </Button>
          </div>

          {/* Trust indicators - Mobile optimized */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-6 px-4">
            <div className="flex items-center text-green-300 text-xs md:text-sm">
              <CheckCircle className="w-3 md:w-4 h-3 md:h-4 mr-1" />
              60-Day Money Back Guarantee
            </div>
            <div className="flex items-center text-green-300 text-xs md:text-sm">
              <CheckCircle className="w-3 md:w-4 h-3 md:h-4 mr-1" />
              No Monthly Fees
            </div>
            <div className="flex items-center text-green-300 text-xs md:text-sm">
              <CheckCircle className="w-3 md:w-4 h-3 md:h-4 mr-1" />
              Lifetime Updates
            </div>
          </div>

          <div className="text-white/60 text-xs md:text-sm px-4">
            <p>Join 10,000+ smart business owners who never worry about website downtime again</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
