
import { Award, Zap, Rocket, Users, DollarSign, Shield } from "lucide-react";

const features = [
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Real-Time Analytics",
    description: "Track user behavior as it happens with lightning-fast data processing that updates in milliseconds, not hours."
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "AI-Powered Insights",
    description: "Our advanced AI engine automatically identifies patterns and opportunities others miss, giving you the competitive edge."
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Customer Segmentation",
    description: "Slice and dice your audience into precise segments to deliver perfectly targeted campaigns that convert."
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "Growth Forecasting",
    description: "Predict future trends with stunning accuracy using our proprietary prediction algorithm trusted by industry leaders."
  },
  {
    icon: <DollarSign className="h-8 w-8" />,
    title: "ROI Calculation",
    description: "Instantly see which marketing channels deliver the highest returns, so you can double down on what works."
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Enterprise-Grade Security",
    description: "Bank-level encryption and compliance with all major privacy regulations keep your sensitive data protected."
  }
];

const FeatureSection = () => {
  return (
    <div id="features" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          Everything You Need To <span className="text-kloudfox-blue">Skyrocket Growth</span>
        </h2>
        
        <p className="section-subtitle">
          KloudFox delivers powerful analytics tools that are typically reserved for enterprise companies with million-dollar budgets. Now available to you at a fraction of the cost.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="deal-card hover:border-kloudfox-lightBlue group"
            >
              <div className="feature-icon group-hover:bg-kloudfox-lightBlue/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-feature-gradient rounded-2xl p-8 border border-blue-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">But Wait, There's More!</h3>
            <p className="text-gray-600">We're throwing in these exclusive bonuses when you purchase today</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50">
              <div className="text-kloudfox-orange font-bold mb-2">BONUS #1</div>
              <h4 className="text-xl font-bold mb-3">Free Data Migration ($997 Value)</h4>
              <p className="text-gray-600">Our team will handle the complete transfer of your existing analytics data at no extra charge.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50">
              <div className="text-kloudfox-orange font-bold mb-2">BONUS #2</div>
              <h4 className="text-xl font-bold mb-3">Strategy Session ($499 Value)</h4>
              <p className="text-gray-600">60-minute consultation with our data experts to optimize your analytics strategy and setup.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
