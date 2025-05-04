
import ValueComparison from "./ValueComparison";

const comparisonFeatures = [
  { feature: "LIFETIME Platform Access (No Monthly Fees Ever!)", included: true },
  { feature: "Global Multi-Location Monitoring (4 Continents)", included: true },
  { feature: "Custom Branded Status Pages", included: true },
  { feature: "Revenue-Saving SSL Certificate Alerts", included: true },
  { feature: "Ultra-Fast Downtime Notifications", included: true },
  { feature: "Mobile App with Push Alerts (BONUS)", included: true },
  { feature: "Premium Integration Suite (BONUS)", included: true },
  { feature: "ALL Future Updates & Features", included: true },
];

const alternatives = [
  {
    name: "Pingdom",
    monthlyPrice: "$199/mo",
    yearCost: "$2,388/yr",
    limitations: "OVERPRICED: Limited checks, fewer features, no custom status pages"
  },
  {
    name: "StatusPage",
    monthlyPrice: "$99/mo",
    yearCost: "$1,188/yr",
    limitations: "INCOMPLETE: No actual monitoring, just status pages, expensive add-ons"
  },
  {
    name: "UptimeRobot",
    monthlyPrice: "$74/mo",
    yearCost: "$888/yr",
    limitations: "BASIC: Limited checks, slow alerts, no premium integrations"
  }
];

const PricingSection = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          <span className="text-kloudfox-blue">The Math Is Insane:</span> Pay Once vs. Forever!
        </h2>
        
        <p className="section-subtitle">
          Other solutions charge you MONTHLY FOREVER. With KloudFox, you pay ONCE and get LIFETIME protection that literally pays for itself with just one prevented outage.
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
              <h3 className="text-2xl font-bold mb-6">Why You'd Be CRAZY To Choose The Competition</h3>
              
              <div className="space-y-8">
                {alternatives.map((alt, index) => (
                  <div key={index} className="border-b border-gray-100 pb-6 last:border-0">
                    <h4 className="font-bold mb-2">{alt.name}</h4>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Monthly Drain:</span>
                      <span className="font-bold">{alt.monthlyPrice}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Yearly Hemorrhage:</span>
                      <span className="font-bold text-red-500">{alt.yearCost}</span>
                    </div>
                    <div className="mt-2 text-sm text-gray-500">
                      <span className="text-red-500 font-medium">The Catch:</span> {alt.limitations}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-gray-50 p-4 rounded-lg border border-gray-100">
                <p className="font-bold text-center">
                  KloudFox: <span className="text-kloudfox-blue">$149</span> <span className="text-green-500">ONE-TIME FOREVER!</span>
                </p>
                <p className="text-sm text-gray-600 text-center mt-2">
                  No monthly bills. No annual renewal. No "premium tier" upsells. Just pure uptime protection for LIFE.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-kloudfox-blue to-kloudfox-darkBlue rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">The REAL Cost Of Website Downtime</h3>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Just <span className="font-bold text-kloudfox-yellow">ONE HOUR</span> of website downtime costs the average business <span className="font-bold text-kloudfox-yellow">$12,000+</span> in lost sales, angry customers, and damaged reputation. KloudFox pays for itself 80X over with just one prevented outage!
          </p>
          <button className="cta-button">
            Secure Lifetime Protection Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
