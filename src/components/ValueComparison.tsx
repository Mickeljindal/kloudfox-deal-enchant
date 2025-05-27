
import { Check, AlertCircle } from "lucide-react";

interface ComparisonItem {
  feature: string;
  included: boolean;
}

interface ValueComparisonProps {
  features: ComparisonItem[];
  totalValue: string;
  dealPrice: string;
  savings: string;
  onButtonClick?: () => void;
}

const ValueComparison = ({ features, totalValue, dealPrice, savings, onButtonClick }: ValueComparisonProps) => {
  return (
    <div className="price-card">
      <div className="absolute top-0 right-0 bg-red-500 text-white font-bold py-1 px-4 transform translate-y-4 -translate-x-4 rotate-12 text-sm">
        37 LEFT!
      </div>
      
      <h3 className="text-2xl font-bold mb-6">Your Website Protection Bundle:</h3>
      
      <div className="space-y-3 mb-8">
        {features.map((item, index) => (
          <div key={index} className="flex items-center">
            {item.included ? (
              <Check className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
            ) : (
              <AlertCircle className="h-6 w-6 text-red-500 mr-2 flex-shrink-0" />
            )}
            <span className={`${item.included ? "font-medium" : "text-gray-400 line-through"}`}>
              {item.feature}
            </span>
          </div>
        ))}
      </div>
      
      <div className="border-t border-dashed border-gray-200 pt-6 mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600">What Others Pay Monthly:</span>
          <span className="text-xl font-bold line-through text-gray-500">{totalValue}</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600">YOUR ONE-TIME PRICE:</span>
          <span className="text-2xl font-bold text-green-600">{dealPrice}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">YOU SAVE FOREVER:</span>
          <span className="text-xl font-bold text-red-500">{savings}</span>
        </div>
      </div>
      
      <button 
        onClick={onButtonClick}
        className="cta-button w-full relative overflow-hidden group"
      >
        <span className="relative z-10">Get AppSumo Deal Now - Only $29!</span>
        <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
      </button>
      
      <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
        <p className="text-sm text-center font-medium text-yellow-800">
          ⏰ WARNING: Every second you wait is another second your site could be losing customers without you knowing it.
        </p>
      </div>
      
      <div className="mt-3 text-center text-sm text-gray-600">
        <p>60 Days Money Back Guarantee • No Questions Asked</p>
      </div>
    </div>
  );
};

export default ValueComparison;
