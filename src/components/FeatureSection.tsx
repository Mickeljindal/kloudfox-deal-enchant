
import { Bell, Globe, Shield, Clock, Zap, Layers, Brain, Activity, BarChart3 } from "lucide-react";

const FeatureSection = () => {
  const coreFeatures = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI Anomaly Detection",
      description: "Machine learning algorithms analyze data patterns to detect unusual behavior and predict failures before they cause downtime.",
      color: "from-violet-500 to-purple-600",
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Predictive Analytics",
      description: "Neural networks learn your infrastructure's normal behavior and alert you to deviations that historically precede outages.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Smart Pattern Recognition",
      description: "GPU-accelerated pattern matching identifies correlations across your entire stack to spot cascading failures and root causes.",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  const features = [
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Global Monitoring",
      description: "Monitor from 4 continents with intelligent routing that optimizes check intervals based on your site's behavior patterns.",
    },
    {
      icon: <Bell className="h-5 w-5" />,
      title: "Smart Alerts",
      description: "AI-driven scoring eliminates noise and false positives. Alerts prioritized by potential revenue impact.",
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "SSL Monitoring",
      description: "Predict certificate issues before expiration. AI analyzes security configurations to prevent trust disasters.",
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Adaptive Intervals",
      description: "AI dynamically adjusts monitoring frequency. During high-risk periods, checks increase automatically.",
    },
    {
      icon: <Layers className="h-5 w-5" />,
      title: "Status Pages",
      description: "AI-generated incident summaries with automatic status updates and professional customer communications.",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Zero-Config Setup",
      description: "AI learns your infrastructure automatically — just connect your services and let machine learning handle the rest.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        
        {/* Core AI Features */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">
            Powered by AI
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Infrastructure intelligence,{" "}
            <span className="gradient-text">not just monitoring</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Go beyond uptime checks. Our AI predicts problems before they become outages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {coreFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-5 group-hover:scale-105 transition-transform duration-300`}>
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-[15px]">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Feature Grid */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Everything you need to{" "}
            <span className="gradient-text">stay online</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A complete monitoring toolkit that works together seamlessly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-card rounded-xl p-6 border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-md"
            >
              <div className="inline-flex p-2.5 rounded-lg bg-primary/10 text-primary mb-4">
                {feature.icon}
              </div>
              
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
