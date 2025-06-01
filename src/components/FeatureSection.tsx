
import { Bell, Globe, Shield, Clock, Zap, Layers, TrendingUp, AlertTriangle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FeatureSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Never Miss a Customer-Losing Outage Again",
      description: "While your competitors' sites go down unnoticed for hours, you'll catch EVERY issue within seconds. Our global monitoring network watches your site from 4 continents, alerting you before customers start complaining or abandoning your brand.",
      savings: "$2,400",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Bell className="h-8 w-8" />,
      title: "Stop Losing $200+ Per Minute of Downtime",
      description: "The average business loses $200-$500 every minute their site is down. KloudFox sends instant alerts to your phone, Slack, and email, so you can fix issues in seconds instead of hours—saving thousands in lost revenue and reputation damage.",
      savings: "$12,000",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Prevent the Google Ranking Disaster",
      description: "An expired SSL certificate doesn't just scare away customers with browser warnings—it can TANK your hard-earned Google rankings overnight. We alert you days before expiration, preventing the SEO nightmare that your competitors keep experiencing.",
      savings: "$5,000",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Eliminate the '5-Minute Blindspot'",
      description: "Basic tools only check your site every 5 minutes—leaving huge windows where customers see errors while you remain clueless. Our 40-second monitoring cycle catches even brief outages that other tools completely miss, protecting your reputation 24/7.",
      savings: "$800",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "Turn Angry Customers into Loyal Fans",
      description: "When outages inevitably happen, most businesses leave customers frustrated and in the dark. Your branded status pages will keep customers informed with professional updates, turning potential negative reviews into appreciation for your transparency.",
      savings: "$3,200",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "End the 'Technical Nightmare' Forever",
      description: "While your competitors struggle with complex enterprise solutions that require IT teams to manage, you'll be up and running in 5 minutes with zero technical skills. Just enter your URL and start protecting your business instantly.",
      savings: "$1,500",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <div id="features" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full font-medium text-sm mb-4">
            CRITICAL PROBLEMS WE SOLVE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">Stop These</span>
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"> Revenue Killers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These "hidden disasters" are silently costing your business thousands. See how we prevent each one:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              {/* Savings badge */}
              <div className="absolute top-4 right-4 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                Saves {feature.savings}+
              </div>
              
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-gray-700 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              
              {/* Problem indicator */}
              <div className="mt-4 flex items-center text-red-500 text-sm font-medium">
                <AlertTriangle className="w-4 h-4 mr-1" />
                Critical Issue #{index + 1}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-10 border-2 border-red-100 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-20 h-20 bg-red-500 rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-500 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-yellow-500 rounded-full"></div>
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-10">
              <div className="inline-block bg-red-500 text-white px-6 py-3 rounded-full font-bold text-lg mb-6 animate-pulse">
                🚨 URGENT: Revenue at Risk
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                These "Hidden Disasters" Are Costing Your Business Right Now
              </h3>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Act immediately to prevent these silent revenue killers most businesses don't catch until it's too late
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-red-500">
                <div className="flex items-center mb-4">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <TrendingUp className="w-6 h-6 text-red-500" />
                  </div>
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    CRITICAL PROBLEM #1
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-900">The "Missing Alert" Revenue Drain</h4>
                <p className="text-gray-600 mb-4">83% of businesses find out about website crashes from angry customer complaints. By then, you've already lost thousands in sales and damaged your reputation.</p>
                <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                  <p className="text-green-700 font-medium text-sm">✅ KloudFox Fix: Instant mobile alerts so you know before customers do</p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-orange-500">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <Shield className="w-6 h-6 text-orange-500" />
                  </div>
                  <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    CRITICAL PROBLEM #2
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-900">The "Tech Stack Disconnect"</h4>
                <p className="text-gray-600 mb-4">Your current tools aren't talking to each other, creating dangerous monitoring gaps that competitors exploit.</p>
                <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                  <p className="text-green-700 font-medium text-sm">✅ KloudFox Fix: Premium integration suite closes all security gaps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
