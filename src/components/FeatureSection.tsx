
import { Bell, Globe, Shield, Clock, Zap, Layers } from "lucide-react";

const features = [
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Multi-Location Monitoring",
    description: "Monitor your website uptime from multiple locations across North America, Europe, Asia, and Australia to ensure global availability."
  },
  {
    icon: <Bell className="h-8 w-8" />,
    title: "Instant Alerts",
    description: "Get notified within seconds when your site goes down via Slack, email, or push notifications to your phone so you can act immediately."
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "SSL Verification",
    description: "Never miss an SSL expiration again. Get alerted days before certificates expire to prevent security warnings that scare away customers."
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Customizable Checks",
    description: "Set monitoring intervals from 40 seconds to hourly to match your specific needs and get the perfect balance of coverage and resources."
  },
  {
    icon: <Layers className="h-8 w-8" />,
    title: "Branded Status Pages",
    description: "Create beautiful, customized status pages with your logo and colors that build trust with your customers during incidents."
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Zero Learning Curve",
    description: "Get up and running in minutes with our intuitive interface—simply enter your URL, customize your preferences, and you're protected."
  }
];

const FeatureSection = () => {
  return (
    <div id="features" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          Everything You Need To <span className="text-kloudfox-blue">Keep Your Website Up</span>
        </h2>
        
        <p className="section-subtitle">
          KloudFox delivers powerful uptime monitoring tools that are typically reserved for enterprise companies with million-dollar budgets. Now available to you at a fraction of the cost.
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
              <h4 className="text-xl font-bold mb-3">Mobile App Access ($197 Value)</h4>
              <p className="text-gray-600">Get real-time push notifications and monitor your websites directly from your smartphone to stay connected anywhere.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50">
              <div className="text-kloudfox-orange font-bold mb-2">BONUS #2</div>
              <h4 className="text-xl font-bold mb-3">Premium Integrations ($249 Value)</h4>
              <p className="text-gray-600">Connect with Slack, Zapier, webhooks, and more to create a seamless monitoring workflow with your existing tools.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
