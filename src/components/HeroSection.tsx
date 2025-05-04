
import { ArrowRight, AlertTriangle } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

const HeroSection = () => {
  // Set end date to 7 days from now for the countdown
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 3);

  return (
    <div className="pt-20 pb-20 bg-hero-pattern relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 py-2 px-4 bg-red-500/90 backdrop-blur-sm rounded-full animate-pulse">
            <span className="text-white text-sm font-medium">
              <span className="text-yellow-300 font-bold">FINAL 37 CODES REMAINING</span> • WHEN THEY'RE GONE, THEY'RE GONE
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Your Website Is 
            <span className="bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent"> CRASHING </span>
            Right Now (And Your Customers Know Before You Do)
          </h1>
          
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Every minute of downtime costs you <span className="font-bold text-yellow-300">$200+ in lost sales</span>. While your competitors get instant alerts and fix problems in seconds, you're still finding out through angry customer emails. <span className="font-bold text-white">KloudFox gives you the unfair advantage they already have.</span>
          </p>
          
          <div className="mb-8">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl inline-block">
              <CountdownTimer endDate={endDate} className="mb-4" />
              <div className="text-white/90 text-lg flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-yellow-300" />
                <span>When this hits zero, the 97% discount is <span className="font-bold underline text-yellow-300">PERMANENTLY GONE</span></span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="cta-button animate-pulse-scale relative overflow-hidden group">
              <span className="relative z-10">Lock In Your Lifetime Deal NOW <ArrowRight className="ml-2 h-5 w-5 inline" /></span>
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </button>
            <a href="#features" className="text-white underline underline-offset-4 font-medium hover:text-yellow-300 transition-colors flex items-center">
              <span>See what others are paying monthly</span>
              <ArrowRight className="ml-1 h-4 w-4 inline" />
            </a>
          </div>
          
          <div className="mt-8">
            <div className="flex items-center justify-center space-x-2">
              <div className="p-1 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-white text-sm">
                <span className="font-bold">37 codes left</span> • <span className="font-bold text-yellow-300">352 purchased in the last 24 hours</span>
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
