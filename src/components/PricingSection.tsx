
import ValueComparison from "./ValueComparison";
import { Clock, XCircle, AlertTriangle } from "lucide-react";

const comparisonFeatures = [
  { feature: "LIFETIME Platform Access (Pay ONCE, Use FOREVER)", included: true },
  { feature: "Ultra-Fast Global Monitoring (4 Continents Others Don't Check)", included: true },
  { feature: "Custom Branded Status Pages (Build Customer Trust)", included: true },
  { feature: "Revenue-Saving SSL Certificate Alerts (Prevent Google Penalties)", included: true },
  { feature: "40-Second Monitoring Checks (5X Faster Than Competitors)", included: true },
  { feature: "Mobile App with Instant Push Alerts (EXCLUSIVE BONUS)", included: true },
  { feature: "Enterprise Integration Suite (EXCLUSIVE BONUS)", included: true },
  { feature: "ALL Future Updates & Features (FOREVER, Not Just 12 Months)", included: true },
];

const alternatives = [
  {
    name: "Pingdom",
    monthlyPrice: "$199/mo",
    yearCost: "$2,388/yr",
    limitations: "NO LIFETIME OPTION: You'll pay this EVERY SINGLE YEAR for the rest of your business life"
  },
  {
    name: "StatusPage",
    monthlyPrice: "$99/mo",
    yearCost: "$1,188/yr",
    limitations: "INCOMPLETE SOLUTION: No actual monitoring - just status pages (you still need to buy monitoring separately!)"
  },
  {
    name: "UptimeRobot",
    monthlyPrice: "$74/mo",
    yearCost: "$888/yr",
    limitations: "SLOW & LIMITED: 5-minute checks only (your site could be down for 4:59 before you know!)"
  }
];

const PricingSection = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          <span className="text-red-500">The Insanity of This Deal:</span> They Pay Monthly FOREVER. You Pay ONCE.
        </h2>
        
        <p className="section-subtitle">
          While everyone else is locked into never-ending monthly payments, you'll get LIFETIME access to the exact same powerful platform for one ridiculously low payment (that pays for itself in days).
        </p>
        
        <div className="flex flex-col lg:flex-row gap-10 mt-12">
          <div className="flex-1">
            <ValueComparison 
              features={comparisonFeatures}
              totalValue="$4,982"
              dealPrice="$149"
              savings="$4,833 (97% OFF!)"
            />
          </div>
          
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <XCircle className="mr-2 h-6 w-6 text-red-500" />
                <span>The "Monthly Payment Trap" Others Fall Into</span>
              </h3>
              
              <div className="space-y-8">
                {alternatives.map((alt, index) => (
                  <div key={index} className="border-b border-gray-100 pb-6 last:border-0">
                    <h4 className="font-bold mb-2">{alt.name}</h4>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Monthly Payment:</span>
                      <span className="font-bold">{alt.monthlyPrice}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">10-Year Cost:</span>
                      <span className="font-bold text-red-500">${parseInt(alt.yearCost.replace(/\D/g, '')) * 10}</span>
                    </div>
                    <div className="mt-2 text-sm bg-red-50 p-2 rounded border border-red-100">
                      <span className="text-red-500 font-medium flex items-center">
                        <AlertTriangle className="h-4 w-4 mr-1" />
                        The Truth:
                      </span> {alt.limitations}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-green-50 p-4 rounded-lg border border-green-100">
                <p className="font-bold text-center">
                  KloudFox: <span className="text-green-600">$149</span> <span className="text-green-600 font-black">ONCE & NEVER AGAIN!</span>
                </p>
                <p className="text-sm text-gray-700 text-center mt-2">
                  While they keep paying forever, you'll be protected for life with $0 recurring costs.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-red-500 to-orange-400 rounded-2xl p-8 text-white text-center">
          <div className="flex items-center justify-center mb-4">
            <Clock className="h-8 w-8 mr-2 text-yellow-300" />
            <h3 className="text-2xl font-bold">Every Second Counts: The TRUE Cost of Downtime</h3>
          </div>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            For the average business, just <span className="font-bold text-yellow-300">ONE HOUR</span> of website downtime costs <span className="font-bold text-yellow-300">$12,000+</span> in lost sales, angry customers, and damaged reputation. KloudFox pays for itself <span className="font-bold text-yellow-300">80X OVER</span> with just one prevented outage!
          </p>
          <button className="cta-button bg-white text-orange-500 hover:bg-yellow-100">
            Secure Your Last-Chance Lifetime Access Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
