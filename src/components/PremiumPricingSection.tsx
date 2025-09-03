import { Check, Star, Shield, Zap, Globe, Users, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const PremiumPricingSection = () => {
  const handleGetStarted = () => {
    window.open('https://watch.kloudfox.com/register', '_blank');
  };

  const handleContactSales = () => {
    window.open('https://watch.kloudfox.com/contact', '_blank');
  };

  const plans = [
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "For growing businesses",
      features: [
        "Up to 100 monitors",
        "10 status pages",
        "30-second checks",
        "Multi-location monitoring",
        "SMS & Email alerts",
        "Slack/Teams integration",
        "99.9% uptime SLA",
        "Business hours support"
      ],
      cta: "Start Professional Trial",
      popular: false,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Enterprise",
      price: "$899",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited monitors",
        "Unlimited status pages",
        "10-second checks",
        "Global monitoring network",
        "Advanced alerting & escalation",
        "All integrations included",
        "99.99% uptime SLA",
        "24/7 priority support",
        "Custom onboarding",
        "Dedicated success manager"
      ],
      cta: "Start Enterprise Trial",
      popular: true,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Global Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For Fortune 500 companies",
      features: [
        "Everything in Enterprise",
        "White-label solution",
        "Custom SLA agreements",
        "Dedicated infrastructure",
        "Advanced security compliance",
        "Custom integrations",
        "On-premise deployment",
        "24/7 dedicated team",
        "Custom reporting",
        "Executive dashboards"
      ],
      cta: "Contact Sales",
      popular: false,
      gradient: "from-amber-500 to-orange-500"
    }
  ];

  const enterpriseStats = [
    {
      icon: Globe,
      value: "50+",
      label: "Global Data Centers",
      description: "Worldwide monitoring network"
    },
    {
      icon: Users,
      value: "500+",
      label: "Fortune 500 Clients",
      description: "Trusted by industry leaders"
    },
    {
      icon: Clock,
      value: "99.99%",
      label: "Uptime SLA",
      description: "Enterprise-grade reliability"
    },
    {
      icon: TrendingUp,
      value: "$12M+",
      label: "Revenue Protected",
      description: "Average client savings per year"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Enterprise Monitoring Platform
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
            The World's Most Advanced<br />Monitoring Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join Fortune 500 companies who trust KloudFox to protect their critical infrastructure and revenue streams
          </p>
        </div>

        {/* Enterprise Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {enterpriseStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow">
              <stat.icon className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-slate-800 mb-2">{stat.value}</div>
              <div className="font-semibold text-gray-900 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl shadow-xl border-2 p-8 relative overflow-hidden ${
                plan.popular ? 'border-purple-500 transform scale-105' : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center">
                    <Shield className="w-4 h-4 mr-2" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-slate-800">{plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={plan.name === "Global Enterprise" ? handleContactSales : handleGetStarted}
                className={`w-full py-3 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-lg ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white' 
                    : 'bg-gradient-to-r from-slate-800 to-blue-600 hover:from-slate-900 hover:to-blue-700 text-white'
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-8 md:p-12 text-white text-center">
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-8 h-8 text-green-400 mr-3" />
            <h3 className="text-2xl md:text-3xl font-bold">Enterprise Security & Compliance</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="bg-white/10 rounded-xl p-4 mb-4 inline-block">
                <Shield className="w-8 h-8 text-blue-300" />
              </div>
              <h4 className="font-bold text-lg mb-2">SOC 2 Type II</h4>
              <p className="text-white/80">Enterprise security compliance</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-xl p-4 mb-4 inline-block">
                <Zap className="w-8 h-8 text-yellow-300" />
              </div>
              <h4 className="font-bold text-lg mb-2">99.99% Uptime</h4>
              <p className="text-white/80">Guaranteed service level</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-xl p-4 mb-4 inline-block">
                <Users className="w-8 h-8 text-green-300" />
              </div>
              <h4 className="font-bold text-lg mb-2">24/7 Support</h4>
              <p className="text-white/80">Dedicated enterprise team</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button 
              onClick={handleGetStarted}
              className="bg-white text-slate-900 hover:bg-gray-100 font-bold py-3 px-8 rounded-xl"
            >
              Start Enterprise Trial
            </Button>
            <Button 
              onClick={handleContactSales}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 font-bold py-3 px-8 rounded-xl"
            >
              Contact Sales Team
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumPricingSection;