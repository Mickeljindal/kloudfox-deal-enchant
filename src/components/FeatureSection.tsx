
import { Bell, Globe, Shield, Clock, Zap, Layers } from "lucide-react";

const features = [
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Never Miss a Customer-Losing Outage Again",
    description: "While your competitors' sites go down unnoticed for hours, you'll catch EVERY issue within seconds. Our global monitoring network watches your site from 4 continents, alerting you before customers start complaining or abandoning your brand."
  },
  {
    icon: <Bell className="h-8 w-8" />,
    title: "Stop Losing $200+ Per Minute of Downtime",
    description: "The average business loses $200-$500 every minute their site is down. KloudFox sends instant alerts to your phone, Slack, and email, so you can fix issues in seconds instead of hours—saving thousands in lost revenue and reputation damage."
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Prevent the Google Ranking Disaster",
    description: "An expired SSL certificate doesn't just scare away customers with browser warnings—it can TANK your hard-earned Google rankings overnight. We alert you days before expiration, preventing the SEO nightmare that your competitors keep experiencing."
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Eliminate the '5-Minute Blindspot'",
    description: "Basic tools only check your site every 5 minutes—leaving huge windows where customers see errors while you remain clueless. Our 40-second monitoring cycle catches even brief outages that other tools completely miss, protecting your reputation 24/7."
  },
  {
    icon: <Layers className="h-8 w-8" />,
    title: "Turn Angry Customers into Loyal Fans",
    description: "When outages inevitably happen, most businesses leave customers frustrated and in the dark. Your branded status pages will keep customers informed with professional updates, turning potential negative reviews into appreciation for your transparency."
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "End the 'Technical Nightmare' Forever",
    description: "While your competitors struggle with complex enterprise solutions that require IT teams to manage, you'll be up and running in 5 minutes with zero technical skills. Just enter your URL and start protecting your business instantly."
  }
];

const FeatureSection = () => {
  return (
    <div id="features" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          6 Business-Killing Problems <span className="text-kloudfox-blue">KloudFox Solves Instantly</span>
        </h2>
        
        <p className="section-subtitle">
          Why are smart business owners switching to KloudFox? Because these costly problems are destroying their revenue and reputation—and now you can solve them all with one simple tool.
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
            <h3 className="text-2xl font-bold mb-2">These "Hidden Disasters" Are Costing Your Business Right Now</h3>
            <p className="text-gray-600">Act immediately to prevent these silent revenue killers most businesses don't catch until it's too late</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50">
              <div className="text-kloudfox-orange font-bold mb-2">CRITICAL PROBLEM #1</div>
              <h4 className="text-xl font-bold mb-3">The "Missing Alert" Revenue Drain ($197 Value Fix - YOURS FREE)</h4>
              <p className="text-gray-600">83% of businesses find out about website crashes from angry customer complaints. By then, you've already lost thousands in sales and damaged your reputation. Our mobile alert system notifies you instantly so you can fix issues before customers even notice.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-50">
              <div className="text-kloudfox-orange font-bold mb-2">CRITICAL PROBLEM #2</div>
              <h4 className="text-xl font-bold mb-3">The "Tech Stack Disconnect" ($249 Value Fix - YOURS FREE)</h4>
              <p className="text-gray-600">Your current tools aren't talking to each other, creating dangerous monitoring gaps that competitors exploit. Our premium integration suite connects your entire tech stack, closing security gaps and creating an impenetrable monitoring shield around your business.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
