
import { Bell, Globe, Shield, Clock, Zap, Layers } from "lucide-react";

const features = [
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Global Outage Protection",
    description: "Never miss a downtime event with monitoring from multiple global locations. While competitors check from just one server, we monitor from North America, Europe, Asia, and Australia to catch EVERY issue."
  },
  {
    icon: <Bell className="h-8 w-8" />,
    title: "Instant Revenue-Saving Alerts",
    description: "While your competitors are losing thousands from unnoticed outages, you'll get notified within SECONDS via Slack, email, or push notifications so you can fix issues before customers even notice."
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "SSL Disaster Prevention",
    description: "An expired SSL certificate can TANK your Google rankings and scare away customers with scary browser warnings. We alert you days before expiration so your site stays secure and trustworthy."
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Ultra-Frequent Monitoring",
    description: "While basic tools check every 5 minutes, KloudFox can monitor as frequently as every 40 SECONDS, catching even the briefest downtime events that could cost you sales and reputation."
  },
  {
    icon: <Layers className="h-8 w-8" />,
    title: "Trust-Building Status Pages",
    description: "Convert angry customers into loyal fans with gorgeous branded status pages that keep them informed during outages, building trust when it matters most (and making you look professional)."
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "5-Minute Setup (No Tech Skills)",
    description: "While enterprise solutions require IT teams and weeks of setup, KloudFox is ready in MINUTES. Simply enter your URL, set your preferences, and you're protected for life."
  }
];

const FeatureSection = () => {
  return (
    <div id="features" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          Enterprise-Grade Protection <span className="text-kloudfox-blue">At An Insane 97% Discount</span>
        </h2>
        
        <p className="section-subtitle">
          Big companies pay THOUSANDS per month for these exact features. For a limited time, you can lock in LIFETIME access to the same powerful tools at a tiny fraction of what they're paying.
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
            <h3 className="text-2xl font-bold mb-2">We're Throwing In MASSIVE Bonuses (Limited Time Only!)</h3>
            <p className="text-gray-600">Act fast to lock in these premium add-ons that our regular customers pay EXTRA for</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50">
              <div className="text-kloudfox-orange font-bold mb-2">EXCLUSIVE BONUS #1</div>
              <h4 className="text-xl font-bold mb-3">Mobile Alert System ($197 Value - YOURS FREE)</h4>
              <p className="text-gray-600">Never miss a critical alert again! Get instant push notifications on your phone 24/7, so you can fix issues from anywhere before they cost you customers and revenue.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50">
              <div className="text-kloudfox-orange font-bold mb-2">EXCLUSIVE BONUS #2</div>
              <h4 className="text-xl font-bold mb-3">Premium Integration Suite ($249 Value - YOURS FREE)</h4>
              <p className="text-gray-600">Connect KloudFox to your entire tech stack with our premium Slack, Zapier, and webhook integrations. Create automated workflows that competitors pay hundreds extra for!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
