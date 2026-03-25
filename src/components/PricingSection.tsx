
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const handleGetStarted = () => {
    window.open('https://watch.kloudfox.com/register', '_blank');
  };

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "For personal projects",
      features: [
        "5 Monitors",
        "1 Status Page",
        "5 minute intervals",
        "Email alerts",
        "SSL monitoring",
      ],
      cta: "Get Started Free",
      popular: false,
    },
    {
      name: "Basic",
      price: "$25",
      period: "/month",
      description: "For small businesses",
      features: [
        "25 Monitors",
        "5 Status Pages",
        "1 minute intervals",
        "Email & SMS alerts",
        "SSL monitoring",
        "Zapier integration",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Pro",
      price: "$85",
      period: "/month",
      description: "For growing teams",
      features: [
        "Everything in Basic",
        "Up to 50 team members",
        "100 Monitors",
        "40-second intervals",
        "Multi-location checks",
        "Priority support",
        "All integrations",
        "Custom branding",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$170",
      period: "/month",
      description: "For large organizations",
      features: [
        "Everything in Pro",
        "Unlimited monitors",
        "Unlimited team members",
        "All status pages",
        "Custom SLA",
        "Dedicated support",
        "SSO & SAML",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">
            Pricing
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Simple, transparent <span className="gradient-text">pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Start free, upgrade when you need to. All plans include a 60-day money-back guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-2xl border p-7 flex flex-col transition-all duration-300 hover:shadow-lg ${
                plan.popular
                  ? "border-primary shadow-lg shadow-primary/10 scale-[1.02]"
                  : "border-border hover:border-primary/20"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground text-sm">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={handleGetStarted}
                variant={plan.popular ? "default" : "outline"}
                className={`w-full rounded-xl ${
                  plan.popular
                    ? "bg-primary hover:bg-primary/90 text-white"
                    : "border-border text-foreground hover:bg-muted"
                }`}
              >
                {plan.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
