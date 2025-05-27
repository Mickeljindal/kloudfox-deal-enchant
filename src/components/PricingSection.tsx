
import ValueComparison from "./ValueComparison";
import { Clock, XCircle, AlertTriangle } from "lucide-react";

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
    limitations: "You'll STILL miss regional outages that only affect customers in certain locations"
  },
  {
    name: "StatusPage",
    monthlyPrice: "$99/mo",
    yearCost: "$1,188/yr",
    limitations: "Does NOTHING to detect outages - just shows status pages (you're still flying blind!)"
  },
  {
    name: "UptimeRobot",
    monthlyPrice: "$74/mo",
    yearCost: "$888/yr",
    limitations: "Slow 5-minute checks mean customers find problems before you do!"
  }
];

const PricingSection = () => {
  const handleAppSumoRedirect = () => {
    window.open('https://appsumo.com/products/kloudfox/', '_blank');
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          <span className="text-red-500">Your Business Can't Afford To Wait:</span> Every Minute Counts
        </h2>
        
        <p className="section-subtitle">
          While you're reading this, your competitors with proper monitoring are fixing issues before their customers notice. Meanwhile, your customers might be hitting error pages right now. Don't be the last to know.
        </p>
        
        <div className="flex flex-col lg:flex-row gap-10 mt-12">
          <div className="flex-1">
            <ValueComparison 
              features={comparisonFeatures}
              totalValue="$4,982"
              dealPrice="$29"
              savings="$4,953 (99% OFF!)"
              onButtonClick={handleAppSumoRedirect}
            />
          </div>
          
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <XCircle className="mr-2 h-6 w-6 text-red-500" />
                <span>The Hidden Costs You're Currently Paying</span>
              </h3>
              
              <div className="space-y-8">
                {alternatives.map((alt, index) => (
                  <div key={index} className="border-b border-gray-100 pb-6 last:border-0">
                    <h4 className="font-bold mb-2">{alt.name}</h4>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Monthly Drain:</span>
                      <span className="font-bold">{alt.monthlyPrice}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">10-Year Money Pit:</span>
                      <span className="font-bold text-red-500">${parseInt(alt.yearCost.replace(/\D/g, '')) * 10}</span>
                    </div>
                    <div className="mt-2 text-sm bg-red-50 p-2 rounded border border-red-100">
                      <span className="text-red-500 font-medium flex items-center">
                        <AlertTriangle className="h-4 w-4 mr-1" />
                        The REAL Problem:
                      </span> {alt.limitations}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-green-50 p-4 rounded-lg border border-green-100">
                <p className="font-bold text-center">
                  KloudFox Solution: <span className="text-green-600">$29</span> <span className="text-green-600 font-black">ONCE & NEVER AGAIN!</span>
                </p>
                <p className="text-sm text-gray-700 text-center mt-2">
                  Fix ALL these problems today and never worry about them again with one simple payment.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-red-500 to-orange-400 rounded-2xl p-8 text-white text-center">
          <div className="flex items-center justify-center mb-4">
            <Clock className="h-8 w-8 mr-2 text-yellow-300" />
            <h3 className="text-2xl font-bold">WAKE-UP CALL: Your Website Might Be Down RIGHT NOW</h3>
          </div>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Research shows that <span className="font-bold text-yellow-300">75% of businesses</span> experience website issues they never detect, costing them <span className="font-bold text-yellow-300">$12,000+ in lost revenue</span> per incident. Without proper monitoring, you're gambling with your business every single day. KloudFox pays for itself <span className="font-bold text-yellow-300">80X OVER</span> with just one prevented outage!
          </p>
          <button 
            onClick={handleAppSumoRedirect}
            className="cta-button bg-white text-orange-500 hover:bg-yellow-100"
          >
            Stop Flying Blind — Get Protected Now for $29
          </button>
          <p className="mt-4 text-sm">60 Days Money Back Guarantee • No Questions Asked</p>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
