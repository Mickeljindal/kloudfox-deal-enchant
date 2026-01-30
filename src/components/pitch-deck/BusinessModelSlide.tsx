import { Card, CardContent } from "@/components/ui/card";
import { Check, Zap, Building, Rocket } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/forever",
    icon: Zap,
    color: "gray",
    features: [
      "5 monitors",
      "5-minute intervals",
      "Email alerts",
      "7-day history",
    ],
    target: "Hobbyists & Testers"
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    icon: Rocket,
    color: "purple",
    popular: true,
    features: [
      "50 monitors",
      "40-second intervals",
      "SMS + Slack + Discord",
      "AI anomaly detection",
      "30-day history",
      "SSL monitoring",
    ],
    target: "SMB & Developers"
  },
  {
    name: "Business",
    price: "$79",
    period: "/month",
    icon: Building,
    color: "blue",
    features: [
      "Unlimited monitors",
      "40-second intervals",
      "All integrations",
      "Advanced AI predictions",
      "1-year history",
      "Priority support",
      "Custom dashboards",
    ],
    target: "Agencies & Enterprises"
  }
];

const BusinessModelSlide = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full font-medium text-sm mb-4">
            BUSINESS MODEL
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            SaaS <span className="text-blue-400">Subscription Model</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Freemium model with strong conversion to paid tiers
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {plans.map((plan) => {
            const IconComponent = plan.icon;
            return (
              <Card 
                key={plan.name}
                className={`bg-gray-800/50 border-gray-700 relative ${
                  plan.popular ? 'border-purple-500 ring-2 ring-purple-500/20' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <IconComponent className={`h-12 w-12 mx-auto mb-4 ${
                      plan.color === 'purple' ? 'text-purple-400' :
                      plan.color === 'blue' ? 'text-blue-400' : 'text-gray-400'
                    }`} />
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                    <div className="mt-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">{plan.target}</p>
                  </div>
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Revenue Streams */}
        <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold mb-8 text-center">Revenue Distribution</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">60%</span>
              </div>
              <h4 className="font-bold text-white mb-1">Pro Plans</h4>
              <p className="text-gray-400 text-sm">Core revenue driver from SMB segment</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">30%</span>
              </div>
              <h4 className="font-bold text-white mb-1">Business Plans</h4>
              <p className="text-gray-400 text-sm">High-value enterprise accounts</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">10%</span>
              </div>
              <h4 className="font-bold text-white mb-1">Add-ons</h4>
              <p className="text-gray-400 text-sm">Status pages, API access, custom integrations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModelSlide;
