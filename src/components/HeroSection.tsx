
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
    window.open('https://appsumo.com/products/kloudfox/', '_blank');
  };

  return (
    <div className="pt-20 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-orange-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-yellow-500/20 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-400/10 blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Trust badges */}
          <div className="flex justify-center items-center space-x-6 mb-6">
            <div className="flex items-center text-yellow-300">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <span className="ml-2 text-white/90 text-sm">4.9/5 from 2,847 users</span>
            </div>
            <div className="text-white/70 text-sm">|</div>
            <div className="text-green-300 text-sm font-medium">✓ Trusted by 10,000+ websites</div>
          </div>

          <div className="inline-block mb-6 py-3 px-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-pulse shadow-lg">
            <span className="text-white text-sm font-bold flex items-center">
              <AlertTriangle className="w-4 h-4 mr-2" />
              <span className="text-yellow-300 font-bold">FINAL {codesLeft} CODES LEFT</span> • Don't Miss Out!
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              Stop Losing Money
            </span>
            <br />
            <span className="text-white">To Website Crashes</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Get instant alerts when your website goes down. <span className="font-bold text-yellow-300">97% of our customers prevent revenue loss</span> from undetected outages. <span className="font-bold text-white">Don't be the last to know!</span>
          </p>
          
          {/* Social proof numbers */}
          <div className="flex justify-center items-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">${(purchased * 127).toLocaleString()}</div>
              <div className="text-white/70 text-sm">Revenue Protected Today</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-300">{purchased}</div>
              <div className="text-white/70 text-sm">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-300">{codesLeft}</div>
              <div className="text-white/70 text-sm">Deals Left</div>
            </div>
          </div>

          <div className="mb-8">
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl inline-block shadow-2xl border border-white/20">
              <CountdownTimer endDate={endDate} className="mb-4" />
              <div className="text-white/90 text-lg flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-yellow-300 animate-pulse" />
                <span className="font-bold">97% OFF Ends When Timer Hits Zero!</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
            <button 
              onClick={handleAppSumoRedirect}
              className="relative group bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold py-5 px-10 rounded-2xl text-xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 animate-pulse-scale"
            >
              <span className="relative z-10 flex items-center">
                🔥 Get Lifetime Deal - Only $29! 
                <ArrowRight className="ml-2 h-6 w-6" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <div className="text-center">
              <div className="text-white/80 text-sm mb-1">Usually $2,388/year</div>
              <div className="text-green-300 font-bold text-lg">Save $2,359 Forever!</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <Button 
              asChild
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 transition-all duration-300 group shadow-lg hover:shadow-xl"
            >
              <a href="https://watch.kloudfox.com/login" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <LogIn className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Access Dashboard
              </a>
            </Button>
            <Button 
              asChild
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <a href="https://watch.kloudfox.com/register" target="_blank" rel="noopener noreferrer">
                Start Free Trial
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center space-x-6 mb-6">
            <div className="flex items-center text-green-300 text-sm">
              <CheckCircle className="w-4 h-4 mr-1" />
              60-Day Money Back Guarantee
            </div>
            <div className="flex items-center text-green-300 text-sm">
              <CheckCircle className="w-4 h-4 mr-1" />
              No Monthly Fees
            </div>
            <div className="flex items-center text-green-300 text-sm">
              <CheckCircle className="w-4 h-4 mr-1" />
              Lifetime Updates
            </div>
          </div>

          <div className="text-white/60 text-sm">
            <p>Join 10,000+ smart business owners who never worry about website downtime again</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
