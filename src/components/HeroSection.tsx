
import { ArrowRight, Play, Shield, Zap, Globe } from "lucide-react";
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
    <div className="relative min-h-[90vh] flex items-center bg-[#0a0a1a] overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 dot-pattern opacity-30" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[hsl(230,80%,56%)]/20 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[hsl(160,84%,39%)]/15 blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 animate-fade-up">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-white/70 text-sm font-medium">AI-Powered Infrastructure Intelligence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Know before your
            <br />
            <span className="bg-gradient-to-r from-[hsl(230,80%,65%)] via-[hsl(200,90%,60%)] to-[hsl(160,84%,50%)] bg-clip-text text-transparent">
              customers do
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            AI-powered monitoring that predicts outages before they happen. 
            Protect your revenue with intelligent anomaly detection across your entire stack.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-14 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Button 
              onClick={handleGetStarted}
              size="lg"
              className="bg-gradient-to-r from-[hsl(230,80%,56%)] to-[hsl(260,70%,58%)] hover:from-[hsl(230,80%,50%)] hover:to-[hsl(260,70%,52%)] text-white font-semibold text-base px-8 py-6 rounded-xl shadow-lg shadow-[hsl(230,80%,56%)]/25 transition-all duration-300 hover:shadow-xl hover:shadow-[hsl(230,80%,56%)]/30 hover:-translate-y-0.5 w-full sm:w-auto"
            >
              Start Free — 60 Day Trial <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button 
              onClick={handleLogin}
              variant="outline" 
              size="lg"
              className="bg-white/5 backdrop-blur-sm text-white border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 font-medium text-base px-8 py-6 rounded-xl w-full sm:w-auto"
            >
              <Play className="mr-2 h-4 w-4" />
              See It In Action
            </Button>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-white/40 text-sm animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-400/70" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400/70" />
              <span>Setup in under 5 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-blue-400/70" />
              <span>Monitor from 4 continents</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
