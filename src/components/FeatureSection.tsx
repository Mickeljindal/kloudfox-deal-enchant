
import { Bell, Globe, Shield, Clock, Zap, Layers, TrendingUp, AlertTriangle, Brain, Cpu, Activity, BarChart3 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FeatureSection = () => {
  const { t } = useLanguage();

  const aiFeatures = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI-Powered Anomaly Detection",
      description: "Our machine learning algorithms analyze millions of data points to detect unusual patterns and predict failures before they cause downtime. Trained on thousands of infrastructure scenarios.",
      savings: "$15,000",
      color: "from-purple-500 to-pink-600",
      badge: "NVIDIA AI"
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: "Predictive Failure Analysis",
      description: "Using advanced neural networks, KloudFox learns your infrastructure's normal behavior and alerts you to deviations that historically precede outages. Prevent problems hours before they happen.",
      savings: "$25,000",
      color: "from-blue-500 to-cyan-600",
      badge: "ML Core"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Intelligent Pattern Recognition",
      description: "GPU-accelerated pattern matching identifies correlations across your entire infrastructure stack. Spot cascading failures and root causes that traditional monitoring misses.",
      savings: "$8,000",
      color: "from-green-500 to-emerald-600",
      badge: "GPU Accelerated"
    },
  ];

  const features = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global AI Monitoring Network",
      description: "AI-powered monitoring from 4 continents with intelligent routing. Our ML models optimize check intervals based on your site's behavior patterns for maximum efficiency.",
      savings: "$2,400",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Bell className="h-8 w-8" />,
      title: "Smart Alert Prioritization",
      description: "AI-driven alert scoring eliminates noise and false positives. Our models learn what matters to your business and prioritize alerts based on potential revenue impact.",
      savings: "$12,000",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Predictive SSL Monitoring",
      description: "Machine learning predicts certificate issues before expiration. AI analyzes certificate chains and security configurations to prevent SEO and trust disasters.",
      savings: "$5,000",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Adaptive Check Intervals",
      description: "Our AI dynamically adjusts monitoring frequency based on historical patterns. During high-risk periods, checks increase automatically to catch issues faster.",
      savings: "$800",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "Intelligent Status Pages",
      description: "AI-generated incident summaries and automatic status updates. Our models analyze incidents and create professional customer communications automatically.",
      savings: "$3,200",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Zero-Config AI Setup",
      description: "Our AI learns your infrastructure automatically—no complex configuration needed. Just connect your services and let machine learning do the heavy lifting.",
      savings: "$1,500",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <div id="features" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* AI Technology Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full font-medium text-sm mb-4">
            <Cpu className="w-4 h-4 mr-2" />
            POWERED BY ARTIFICIAL INTELLIGENCE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">AI-Powered</span>
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Infrastructure Intelligence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leveraging GPU-accelerated machine learning to predict and prevent outages before they impact your business
          </p>
        </div>

        {/* AI Core Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {aiFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              {/* AI Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                {feature.badge}
              </div>
              
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-gray-100 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              
              <div className="mt-4 flex items-center text-green-400 text-sm font-medium">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Saves {feature.savings}+ annually
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <div className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full font-medium text-sm mb-4">
            CRITICAL PROBLEMS WE SOLVE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">Stop These</span>
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"> Revenue Killers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI-powered solutions that prevent these "hidden disasters" silently costing your business thousands:
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
