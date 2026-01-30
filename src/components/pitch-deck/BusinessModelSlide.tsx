import { Check, Zap, Rocket, Building } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    icon: Zap,
    features: [
      "5 monitors",
      "5-minute intervals",
      "Email alerts",
      "7-day history",
    ],
    target: "Hobbyists",
    gradient: "from-white/5 to-white/[0.02]",
    border: "border-white/10"
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    icon: Rocket,
    popular: true,
    features: [
      "50 monitors",
      "40-second intervals",
      "SMS + Slack + Discord",
      "AI anomaly detection",
      "30-day history",
      "SSL monitoring",
    ],
    target: "SMB & Developers",
    gradient: "from-violet-500/10 to-fuchsia-500/10",
    border: "border-violet-500/30"
  },
  {
    name: "Business",
    price: "$79",
    period: "/month",
    icon: Building,
    features: [
      "Unlimited monitors",
      "40-second intervals",
      "All integrations",
      "Advanced AI predictions",
      "1-year history",
      "Priority support",
      "Custom dashboards",
    ],
    target: "Agencies & Enterprises",
    gradient: "from-cyan-500/10 to-emerald-500/10",
    border: "border-cyan-500/30"
  }
];

const BusinessModelSlide = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Label */}
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-px bg-violet-500" />
            <span className="text-violet-400 text-sm font-semibold tracking-[0.2em] uppercase">Business Model</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            SaaS Subscription
          </h2>
          <p className="text-xl text-white/50 mb-16">
            Freemium model with strong conversion to paid tiers
          </p>

          {/* Pricing Tiers */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {plans.map((plan) => {
              const IconComponent = plan.icon;
              return (
                <div 
                  key={plan.name}
                  className={`relative bg-gradient-to-br ${plan.gradient} border ${plan.border} rounded-2xl p-8 ${
                    plan.popular ? 'ring-1 ring-violet-500/50' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <IconComponent className={`h-8 w-8 mb-4 ${
                      plan.popular ? 'text-violet-400' : 'text-white/40'
                    }`} />
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                    <p className="text-sm text-white/40 mt-1">{plan.target}</p>
                  </div>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-black text-white">{plan.price}</span>
                    <span className="text-white/40">{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-white/70">
                        <Check className={`w-4 h-4 mr-3 flex-shrink-0 ${
                          plan.popular ? 'text-violet-400' : 'text-emerald-400/60'
                        }`} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Revenue Distribution */}
          <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-10">
            <h3 className="text-xl font-bold text-white mb-10 text-center">Revenue Distribution Target</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="rgba(255,255,255,0.05)"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="url(#violet-gradient)"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${0.6 * 352} 352`}
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="violet-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#d946ef" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">60%</span>
                  </div>
                </div>
                <h4 className="font-bold text-white mb-1">Pro Plans</h4>
                <p className="text-white/40 text-sm">Core revenue from SMB segment</p>
              </div>
              
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="rgba(255,255,255,0.05)"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="url(#cyan-gradient)"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${0.3 * 352} 352`}
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="cyan-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="100%" stopColor="#10b981" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">30%</span>
                  </div>
                </div>
                <h4 className="font-bold text-white mb-1">Business Plans</h4>
                <p className="text-white/40 text-sm">High-value enterprise accounts</p>
              </div>
              
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="rgba(255,255,255,0.05)"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="url(#emerald-gradient)"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${0.1 * 352} 352`}
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="emerald-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#34d399" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">10%</span>
                  </div>
                </div>
                <h4 className="font-bold text-white mb-1">Add-ons</h4>
                <p className="text-white/40 text-sm">Status pages, API, integrations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModelSlide;
