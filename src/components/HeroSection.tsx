
import { ArrowRight, LogIn, CheckCircle, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";

const HeroSection = () => {
  const { t } = useLanguage();

  const handleGetStarted = () => {
    window.open('https://watch.kloudfox.com/register', '_blank');
  };

  const handleLogin = () => {
    window.open('https://watch.kloudfox.com/login', '_blank');
  };

  return (
    <div className="pt-16 md:pt-20 pb-16 md:pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 md:top-20 left-5 md:left-10 w-20 md:w-32 h-20 md:h-32 rounded-full bg-blue-500/20 blur-2xl md:blur-3xl animate-pulse"></div>
        <div className="absolute bottom-5 md:bottom-10 right-5 md:right-10 w-40 md:w-64 h-40 md:h-64 rounded-full bg-purple-500/20 blur-2xl md:blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 md:w-96 h-60 md:h-96 rounded-full bg-blue-400/10 blur-2xl md:blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Trust badges */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 mb-6">
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
          
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-white mb-4 md:mb-6 leading-tight px-2">
            <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              Monitor Your Website
            </span>
            <br />
            <span className="text-white">Never Miss Downtime</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
            Get instant alerts when your website goes down. <span className="font-bold text-blue-300">Professional monitoring</span> that keeps your business running smoothly. <span className="font-bold text-white">Never be the last to know!</span>
          </p>
          
          {/* Social proof numbers */}
          <div className="grid grid-cols-3 gap-2 md:flex md:justify-center md:items-center md:space-x-8 mb-8 px-4">
            <div className="text-center">
              <div className="text-xl md:text-3xl font-bold text-blue-300">$127K+</div>
              <div className="text-white/70 text-xs md:text-sm">Revenue Protected</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-3xl font-bold text-green-300">2,847</div>
              <div className="text-white/70 text-xs md:text-sm">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-3xl font-bold text-purple-300">99.9%</div>
              <div className="text-white/70 text-xs md:text-sm">Uptime</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-4 mb-8 px-4">
            <Button 
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 w-full md:w-auto"
            >
              Start Free Trial <ArrowRight className="ml-2 h-5 w-5 inline" />
            </Button>
            
            <Button 
              onClick={handleLogin}
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 transition-all duration-300 shadow-lg w-full md:w-auto"
            >
              <LogIn className="mr-2 h-4 w-4" />
              Login to Dashboard
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 mb-6 px-4">
            <div className="flex items-center text-green-300 text-xs md:text-sm">
              <CheckCircle className="w-3 md:w-4 h-3 md:h-4 mr-1" />
              60-Day Money Back Guarantee
            </div>
            <div className="flex items-center text-green-300 text-xs md:text-sm">
              <CheckCircle className="w-3 md:w-4 h-3 md:h-4 mr-1" />
              No Setup Fees
            </div>
            <div className="flex items-center text-green-300 text-xs md:text-sm">
              <CheckCircle className="w-3 md:w-4 h-3 md:h-4 mr-1" />
              5 Minutes Setup
            </div>
          </div>

          <div className="text-white/60 text-xs md:text-sm px-4">
            <p>Join thousands of smart business owners who never worry about website downtime</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
