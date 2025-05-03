
import { Check } from "lucide-react";

interface ComparisonItem {
  feature: string;
  included: boolean;
}

interface ValueComparisonProps {
  features: ComparisonItem[];
  totalValue: string;
  dealPrice: string;
  savings: string;
}

const ValueComparison = ({ features, totalValue, dealPrice, savings }: ValueComparisonProps) => {
  return (
    <div className="price-card">
      <div className="absolute top-0 right-0 bg-kloudfox-orange text-white font-bold py-1 px-4 transform translate-y-4 -translate-x-4 rotate-12 text-sm">
        97% OFF!
      </div>
      
      <h3 className="text-2xl font-bold mb-6">Everything Included:</h3>
      
      <div className="space-y-3 mb-8">
        {features.map((item, index) => (
          <div key={index} className="flex items-center">
            {item.included ? (
              <Check className="h-6 w-6 text-green-500 mr-2" />
            ) : (
              <span className="h-6 w-6 flex items-center justify-center text-red-500 mr-2">×</span>
            )}
            <span className={item.included ? "" : "text-gray-400 line-through"}>
              {item.feature}
            </span>
          </div>
        ))}
      </div>
      
      <div className="border-t border-dashed border-gray-200 pt-6 mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600">Total Value:</span>
          <span className="text-xl font-bold line-through text-gray-500">{totalValue}</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600">AppSumo Price:</span>
          <span className="text-2xl font-bold text-kloudfox-blue">{dealPrice}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Your Savings:</span>
          <span className="text-xl font-bold text-green-600">{savings}</span>
        </div>
      </div>
      
      <button className="cta-button w-full">
        Get Lifetime Access Now
      </button>
      
      <p className="text-xs text-gray-500 mt-4 text-center">
        30-day money-back guarantee. No questions asked.
      </p>
    </div>
  );
};

export default ValueComparison;
