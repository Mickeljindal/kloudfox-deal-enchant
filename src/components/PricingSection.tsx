
import { Check, Star, Shield, Zap, Globe, Users, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const handleGetStarted = () => {
    window.open('https://watch.kloudfox.com/register', '_blank');
  };

  const plans = [
    {
      name: "Intro",
      price: "$0",
      period: "Free forever",
      description: "Perfect for starting out",
      features: [
        "5 Monitors",
        "1 Status Page", 
        "5 minute checks",
        "Email alerts",
        "SSL monitoring"
      ],
      cta: "Free Signup",
      popular: false
    },
    {
      name: "Basic",
      price: "$25",
      period: "/month",
      description: "Great for small businesses",
      features: [
        "25 Monitors",
        "5 Status Pages",
        "1 minute checks", 
        "Email & SMS alerts",
        "SSL monitoring",
        "Zapier integration"
      ],
      cta: "Choose Plan",
      popular: false
    },
    {
      name: "Popular",
      price: "$85", 
      period: "/month",
      description: "Best for growing businesses",
      features: [
        "Everything in Basic",
        "Up to 50 Users",
        "Up to 100 Monitors",
        "All Status Pages",
        "40-second checks",
        "Multi-location geo checks",
        "Priority Support", 
        "All integrations",
        "Custom branding"
      ],
      cta: "Choose Plan",
      popular: true
    },
    {
      name: "Enterprise", 
      price: "$170",
      period: "/month",
      description: "For large organizations",
      features: [
        "Everything in Popular",
        "Priority Support",
        "All features",
        "Unlimited Users",
        "All Status Pages", 
        "Unlimited integrations",
        "Custom SLA"
      ],
      cta: "Choose Plan",
      popular: false
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose the right plan for your business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            All plans come with a 60-day money-back guarantee
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-lg border-2 p-6 relative ${
                plan.popular ? 'border-blue-500 shadow-lg' : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={handleGetStarted}
                className={`w-full ${
                  plan.popular ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-800 hover:bg-gray-900'
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Why Choose KloudFox?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="bg-white/10 rounded-xl p-4 mb-4 inline-block">
                <Shield className="w-8 h-8 text-blue-300" />
              </div>
              <h4 className="font-bold text-lg mb-2">99.9% Uptime</h4>
              <p className="text-white/80">Reliable monitoring you can trust</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-xl p-4 mb-4 inline-block">
                <Zap className="w-8 h-8 text-yellow-300" />
              </div>
              <h4 className="font-bold text-lg mb-2">Fast Alerts</h4>
              <p className="text-white/80">Get notified within seconds</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-xl p-4 mb-4 inline-block">
                <Users className="w-8 h-8 text-green-300" />
              </div>
              <h4 className="font-bold text-lg mb-2">Expert Support</h4>
              <p className="text-white/80">24/7 customer support team</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button 
              onClick={handleGetStarted}
              className="bg-white text-slate-900 hover:bg-gray-100 font-bold py-3 px-8 rounded-xl"
            >
              Start Free Trial
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
