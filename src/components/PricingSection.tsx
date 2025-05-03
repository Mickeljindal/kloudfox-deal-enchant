
import ValueComparison from "./ValueComparison";

const comparisonFeatures = [
  { feature: "Lifetime Access to KloudFox Platform", included: true },
  { feature: "Unlimited Data Points", included: true },
  { feature: "All Analytics Features", included: true },
  { feature: "Advanced AI Insights", included: true },
  { feature: "Free Data Migration", included: true },
  { feature: "Priority Support", included: true },
  { feature: "Strategy Consultation Call", included: true },
  { feature: "All Future Updates", included: true },
];

const alternatives = [
  {
    name: "Traditional Analytics",
    monthlyPrice: "$299/mo",
    yearCost: "$3,588/yr",
    limitations: "High monthly fees, limited features, no AI"
  },
  {
    name: "Enterprise Solutions",
    monthlyPrice: "$2,000+/mo",
    yearCost: "$24,000+/yr",
    limitations: "Expensive, complex setup, requires dedicated team"
  },
  {
    name: "Basic Tools",
    monthlyPrice: "$49/mo",
    yearCost: "$588/yr",
    limitations: "Limited data, basic features, no advanced insights"
  }
];

const PricingSection = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          <span className="text-kloudfox-blue">Insane Value</span> At A Fraction Of The Cost
        </h2>
        
        <p className="section-subtitle">
          You could spend thousands on traditional analytics platforms... or get lifetime access to KloudFox today for a one-time payment.
        </p>
        
        <div className="flex flex-col lg:flex-row gap-10 mt-12">
          <div className="flex-1">
            <ValueComparison 
              features={comparisonFeatures}
              totalValue="$5,982"
              dealPrice="$149"
              savings="$5,833 (97% OFF)"
            />
          </div>
          
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Why KloudFox Beats The Competition</h3>
              
              <div className="space-y-8">
                {alternatives.map((alt, index) => (
                  <div key={index} className="border-b border-gray-100 pb-6 last:border-0">
                    <h4 className="font-bold mb-2">{alt.name}</h4>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Monthly Cost:</span>
                      <span className="font-bold">{alt.monthlyPrice}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Annual Cost:</span>
                      <span className="font-bold text-red-500">{alt.yearCost}</span>
                    </div>
                    <div className="mt-2 text-sm text-gray-500">
                      <span className="text-red-500 font-medium">Limitations:</span> {alt.limitations}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-gray-50 p-4 rounded-lg border border-gray-100">
                <p className="font-bold text-center">
                  KloudFox: <span className="text-kloudfox-blue">$149</span> <span className="text-green-500">one-time payment</span>
                </p>
                <p className="text-sm text-gray-600 text-center mt-2">
                  No monthly fees. No annual renewals. Just pure value.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-kloudfox-blue to-kloudfox-darkBlue rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Still On The Fence?</h3>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Consider this: With just <span className="font-bold text-kloudfox-yellow">ONE sale or client</span> from the insights you gain, this tool will pay for itself hundreds of times over.
          </p>
          <button className="cta-button">
            Get Lifetime Access Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
