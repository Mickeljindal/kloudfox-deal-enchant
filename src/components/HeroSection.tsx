
import { ArrowRight } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

const HeroSection = () => {
  // Set end date to 7 days from now for the countdown
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 3);

  return (
    <div className="pt-20 pb-20 bg-hero-pattern relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 py-2 px-4 bg-white/10 backdrop-blur-sm rounded-full">
            <span className="text-white text-sm font-medium">
              <span className="text-kloudfox-yellow">LIFETIME DEAL</span> • NEVER PAY AGAIN
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Don't Let Your Website 
            <span className="bg-gradient-to-r from-kloudfox-orange to-kloudfox-yellow bg-clip-text text-transparent"> Go Down </span>
            Without You Knowing
          </h1>
          
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Like spinach between your teeth, you don't want to be the last person to realize your website is down. <span className="font-bold text-white">KloudFox monitors your uptime 24/7 so you never miss a beat.</span>
          </p>
          
          <div className="mb-10">
            <CountdownTimer endDate={endDate} className="mb-6" />
            <div className="text-white/80 text-lg">
              <span className="font-bold text-kloudfox-yellow">LIMITED TIME OFFER:</span> When the timer hits zero, this deal disappears forever!
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="cta-button animate-pulse-scale">
              Get Lifetime Access <ArrowRight className="ml-2 h-5 w-5 inline" />
            </button>
            <a href="#features" className="text-white underline underline-offset-4 font-medium hover:text-kloudfox-yellow transition-colors">
              See what's included
            </a>
          </div>
          
          <div className="mt-8">
            <div className="flex items-center justify-center space-x-2">
              <div className="p-1 rounded-full bg-green-400"></div>
              <span className="text-white text-sm">
                <span className="font-bold">352 people</span> purchased in the last 24 hours
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-kloudfox-lightBlue/10 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-kloudfox-orange/10 blur-3xl"></div>
    </div>
  );
};

export default HeroSection;
