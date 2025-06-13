
import ValueComparison from "./ValueComparison";
import { Clock, XCircle, AlertTriangle, TrendingUp, Users, Zap } from "lucide-react";

const comparisonFeatures = [
  { feature: "Stop losing customers to undetected downtime (FOREVER)", included: true },
  { feature: "Catch regional outages competitors' tools miss completely", included: true },
  { feature: "Prevent the 'We had no idea our site was down!' disaster", included: true },
  { feature: "Avoid SEO penalties from expired SSL certificates", included: true },
  { feature: "Don't miss brief outages that cost thousands in lost sales", included: true },
  { feature: "Never lose customers to website issues while you're asleep", included: true },
  { feature: "End the 'angry customer complaint' notifications", included: true },
  { feature: "Cancel your overpriced monitoring subscriptions FOREVER", included: true },
];

const alternatives = [
  {
    name: "Pingdom",
    monthlyPrice: "$199/mo",
    yearCost: "$2,388/yr",
    limitations: "You'll STILL miss regional outages that only affect customers in certain locations",
    logo: "🔍"
  },
  {
    name: "StatusPage",
    monthlyPrice: "$99/mo",
    yearCost: "$1,188/yr",
    limitations: "Does NOTHING to detect outages - just shows status pages (you're still flying blind!)",
    logo: "📊"
  },
  {
    name: "UptimeRobot",
    monthlyPrice: "$74/mo",
    yearCost: "$888/yr",
    limitations: "Slow 5-minute checks mean customers find problems before you do!",
    logo: "🤖"
  }
];

const PricingSection = () => {
  const handleAppSumoRedirect = () => {
    window.open('https://appsumo.8odi.net/MAoPn2', '_blank');
  };

  return (
    <div className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          {/* AppSumo Trust Badge */}
          <div className="flex justify-center items-center mb-6 md:mb-8">
            <div className="bg-white rounded-2xl px-4 md:px-8 py-3 md:py-4 border-2 border-orange-200 shadow-lg">
              <div className="flex items-center justify-center space-x-3 md:space-x-4">
                <img 
                  src="/lovable-uploads/17eebf94-436d-41a2-a643-9af06e464b8f.png" 
                  alt="AppSumo" 
                  className="h-6 md:h-10 w-auto"
                />
                <div className="text-center">
                  <div className="text-gray-900 text-sm md:text-lg font-bold">Lifetime Deal Partner</div>
                  <div className="text-orange-600 text-xs md:text-sm font-medium">Trusted by 1M+ Entrepreneurs</div>
                </div>
              </div>
            </div>
          </div>

          <div className="inline-block bg-red-100 text-red-700 px-4 md:px-6 py-2 md:py-3 rounded-full font-bold text-sm md:text-lg mb-4 md:mb-6 animate-pulse">
            ⚠️ YOUR BUSINESS CAN'T AFFORD TO WAIT
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-2">
            <span className="text-red-500">Every Minute Counts:</span>
            <br />
            <span className="text-gray-900">Stop the Revenue Bleeding</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto px-4">
            While you're reading this, your competitors with proper monitoring are fixing issues before their customers notice. Meanwhile, your customers might be hitting error pages right now. Don't be the last to know.
          </p>
        </div>

        {/* Stats section - Mobile optimized */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16 px-2">
          <div className="bg-red-50 p-4 md:p-6 rounded-2xl border border-red-200 text-center">
            <TrendingUp className="w-10 md:w-12 h-10 md:h-12 text-red-500 mx-auto mb-3 md:mb-4" />
            <div className="text-2xl md:text-3xl font-bold text-red-600 mb-2">$12,000</div>
            <div className="text-gray-700 text-sm md:text-base">Average loss per undetected outage</div>
          </div>
          <div className="bg-orange-50 p-4 md:p-6 rounded-2xl border border-orange-200 text-center">
            <Users className="w-10 md:w-12 h-10 md:h-12 text-orange-500 mx-auto mb-3 md:mb-4" />
            <div className="text-2xl md:text-3xl font-bold text-orange-600 mb-2">83%</div>
            <div className="text-gray-700 text-sm md:text-base">Find out from angry customers</div>
          </div>
          <div className="bg-green-50 p-4 md:p-6 rounded-2xl border border-green-200 text-center">
            <Zap className="w-10 md:w-12 h-10 md:h-12 text-green-500 mx-auto mb-3 md:mb-4" />
            <div className="text-2xl md:text-3xl font-bold text-green-600 mb-2">40 sec</div>
            <div className="text-gray-700 text-sm md:text-base">KloudFox detection time</div>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 mt-8 md:mt-12">
          <div className="flex-1">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-2 rounded-3xl shadow-2xl">
              <ValueComparison 
                features={comparisonFeatures}
                totalValue="$4,982"
                dealPrice="$29"
                savings="$4,953 (99% OFF!)"
                onButtonClick={handleAppSumoRedirect}
              />
            </div>
          </div>
          
          <div className="flex-1">
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 h-full border border-gray-100">
              <div className="text-center mb-6 md:mb-8">
                <div className="bg-red-100 text-red-700 px-3 md:px-4 py-2 rounded-full font-bold text-xs md:text-sm mb-4 inline-block">
                  COMPETITOR COMPARISON
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 flex items-center justify-center">
                  <XCircle className="mr-2 h-5 md:h-6 w-5 md:w-6 text-red-500" />
                  <span className="text-center">The Hidden Costs You're Currently Paying</span>
                </h3>
                <p className="text-gray-600 text-sm md:text-base">See how much you're overpaying for inferior solutions</p>
              </div>
              
              <div className="space-y-4 md:space-y-6">
                {alternatives.map((alt, index) => (
                  <div key={index} className="border border-gray-200 rounded-2xl p-4 md:p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-3 md:mb-4">
                      <div className="text-xl md:text-2xl mr-2 md:mr-3">{alt.logo}</div>
                      <h4 className="font-bold text-base md:text-lg">{alt.name}</h4>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 md:gap-4 mb-3 md:mb-4">
                      <div className="bg-red-50 p-2 md:p-3 rounded-lg">
                        <div className="text-xs md:text-sm text-gray-600">Monthly Drain</div>
                        <div className="font-bold text-red-600 text-sm md:text-base">{alt.monthlyPrice}</div>
                      </div>
                      <div className="bg-red-50 p-2 md:p-3 rounded-lg">
                        <div className="text-xs md:text-sm text-gray-600">10-Year Cost</div>
                        <div className="font-bold text-red-600 text-sm md:text-base">${(parseInt(alt.yearCost.replace(/\D/g, '')) * 10).toLocaleString()}</div>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                      <div className="text-yellow-700 font-medium flex items-center text-xs md:text-sm">
                        <AlertTriangle className="h-3 md:h-4 w-3 md:w-4 mr-1" />
                        The REAL Problem:
                      </div>
                      <p className="text-yellow-800 text-xs md:text-sm mt-1">{alt.limitations}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 md:mt-8 bg-gradient-to-r from-green-100 to-emerald-100 p-4 md:p-6 rounded-2xl border-2 border-green-300">
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-green-700 mb-2">
                    KloudFox Solution: <span className="text-2xl md:text-3xl">$29</span>
                  </div>
                  <div className="text-green-600 font-bold text-base md:text-lg mb-2">ONCE & NEVER AGAIN!</div>
                  <p className="text-green-700 text-xs md:text-sm">
                    Fix ALL these problems today and never worry about them again with one simple payment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 md:mt-20 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-3xl p-6 md:p-10 text-white text-center relative overflow-hidden shadow-2xl mx-2">
          {/* Background animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 animate-pulse opacity-50"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-center mb-4 md:mb-6">
              <Clock className="h-8 md:h-10 w-8 md:w-10 mr-0 md:mr-3 mb-2 md:mb-0 text-yellow-300 animate-pulse" />
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">WAKE-UP CALL: Your Website Might Be Down RIGHT NOW</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 mb-6 md:mb-8 max-w-4xl mx-auto">
              <p className="text-lg md:text-xl lg:text-2xl mb-3 md:mb-4 leading-relaxed">
                Research shows that <span className="font-bold text-yellow-300 text-xl md:text-2xl">75% of businesses</span> experience website issues they never detect, costing them <span className="font-bold text-yellow-300 text-xl md:text-2xl">$12,000+ in lost revenue</span> per incident.
              </p>
              <p className="text-base md:text-lg">
                Without proper monitoring, you're gambling with your business every single day. KloudFox pays for itself <span className="font-bold text-yellow-300 text-lg md:text-xl">80X OVER</span> with just one prevented outage!
              </p>
            </div>
            
            <div className="flex justify-center px-4">
              <button 
                onClick={handleAppSumoRedirect}
                className="bg-white text-orange-500 hover:bg-yellow-100 font-bold py-4 md:py-6 px-8 md:px-12 rounded-2xl text-lg md:text-2xl shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105 w-full max-w-md"
              >
                🛡️ Stop Flying Blind — Get Protected Now for $29
              </button>
            </div>
            <p className="mt-4 md:mt-6 text-sm md:text-lg font-medium">60 Days Money Back Guarantee • No Questions Asked</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
