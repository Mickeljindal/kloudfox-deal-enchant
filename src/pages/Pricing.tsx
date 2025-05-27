
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const handleAppSumoRedirect = () => {
    window.open('https://appsumo.com/products/kloudfox/', '_blank');
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
      ctaLink: "https://watch.kloudfox.com/register",
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
      ctaLink: "https://watch.kloudfox.com/register",
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
        "Priority Support",
        "All integrations",
        "Custom branding"
      ],
      cta: "Choose Plan",
      ctaLink: "https://watch.kloudfox.com/register",
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
      ctaLink: "https://watch.kloudfox.com/register",
      popular: false
    }
  ];

  const comparisonFeatures = [
    { feature: "E-mail alerts", intro: true, basic: true, popular: true, enterprise: true },
    { feature: "Slack Alerts", intro: false, basic: true, popular: true, enterprise: true },
    { feature: "Push notifications (iOS & Android)", intro: false, basic: true, popular: true, enterprise: true },
    { feature: "Zapier", intro: false, basic: true, popular: true, enterprise: true },
    { feature: "Webhooks", intro: false, basic: false, popular: true, enterprise: true },
    { feature: "Second by second incident logging", intro: true, basic: true, popular: true, enterprise: true },
    { feature: "Manually triggered incidents", intro: false, basic: false, popular: true, enterprise: true },
    { feature: "Number of monitors", intro: "5", basic: "25", popular: "100", enterprise: "250" },
    { feature: "Checks Time", intro: "5-min checks", basic: "1-min checks", popular: "40s checks", enterprise: "40s checks" },
    { feature: "URL Ping", intro: true, basic: true, popular: true, enterprise: true },
    { feature: "SSL monitoring", intro: false, basic: true, popular: true, enterprise: true },
    { feature: "Multi-location & Geo-specific checks", intro: false, basic: false, popular: true, enterprise: true },
    { feature: "Unique status pages", intro: "1", basic: "5", popular: "25", enterprise: "50" },
    { feature: "Custom sub-domain with HTTPS", intro: true, basic: true, popular: true, enterprise: true },
    { feature: "Customizable design", intro: true, basic: true, popular: true, enterprise: true },
    { feature: "Public status subscriptions (E-mail & API)", intro: false, basic: false, popular: true, enterprise: true },
    { feature: "Subscribers", intro: false, basic: false, popular: "500 subscribers", enterprise: "750 subscribers" },
    { feature: "E-mail Support", intro: true, basic: true, popular: true, enterprise: true },
    { feature: "Team Users", intro: "0", basic: "2", popular: "10", enterprise: "50" }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Choose the right plan that fits your business.
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              All plans come with a 60-day money-back guarantee
            </p>

            {/* Special AppSumo Deal Banner */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg p-6 mb-12 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-2">🔥 Limited Time AppSumo Deal!</h2>
              <p className="text-lg mb-4">
                Get KloudFox for LIFE at just <span className="font-bold text-3xl">$29</span> (Originally $85/month)
              </p>
              <Button 
                onClick={handleAppSumoRedirect}
                className="bg-white text-orange-500 hover:bg-gray-100 font-bold py-3 px-8"
              >
                Get Lifetime Deal for $29
              </Button>
              <p className="text-sm mt-2 opacity-90">60 Days Money Back Guarantee • No Questions Asked</p>
            </div>

            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 rounded-lg p-1 flex">
                <button className="bg-white rounded px-4 py-2 font-medium">Monthly</button>
                <button className="px-4 py-2 text-gray-600">Yearly</button>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`bg-white rounded-lg border-2 p-6 relative ${
                  plan.popular ? 'border-orange-500 shadow-lg' : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
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
                  asChild 
                  className={`w-full ${
                    plan.popular ? 'bg-orange-500 hover:bg-orange-600' : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  <a href={plan.ctaLink} target="_blank" rel="noopener noreferrer">
                    {plan.cta}
                  </a>
                </Button>
              </div>
            ))}
          </div>

          {/* Plan Comparison Table */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-12">Plan Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg">
                <thead className="bg-gray-900 text-white">
                  <tr>
                    <th className="text-left p-4 rounded-tl-lg">Plan Comparison</th>
                    <th className="text-center p-4">Intro</th>
                    <th className="text-center p-4">Basic</th>
                    <th className="text-center p-4 bg-orange-500">Popular</th>
                    <th className="text-center p-4 rounded-tr-lg">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="p-4 font-medium">{row.feature}</td>
                      <td className="p-4 text-center">
                        {typeof row.intro === 'boolean' ? (
                          row.intro ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : '—'
                        ) : (
                          row.intro
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {typeof row.basic === 'boolean' ? (
                          row.basic ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : '—'
                        ) : (
                          row.basic
                        )}
                      </td>
                      <td className="p-4 text-center bg-orange-50">
                        {typeof row.popular === 'boolean' ? (
                          row.popular ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : '—'
                        ) : (
                          row.popular
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {typeof row.enterprise === 'boolean' ? (
                          row.enterprise ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : '—'
                        ) : (
                          row.enterprise
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
