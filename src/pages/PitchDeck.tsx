import { useEffect } from "react";
import { 
  Brain, 
  TrendingUp, 
  Target, 
  Cpu, 
  Globe, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Activity,
  Rocket,
  AlertTriangle,
  DollarSign,
  Clock,
  Server,
  BarChart3
} from "lucide-react";
import CompetitorSlide from "@/components/pitch-deck/CompetitorSlide";
import RevenueProjectionsSlide from "@/components/pitch-deck/RevenueProjectionsSlide";
import BusinessModelSlide from "@/components/pitch-deck/BusinessModelSlide";
import RoadmapSlide from "@/components/pitch-deck/RoadmapSlide";
import TeamSlide from "@/components/pitch-deck/TeamSlide";

const PitchDeck = () => {
  useEffect(() => {
    document.body.style.background = "#0a0a0f";
    return () => {
      document.body.style.background = "";
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      {/* Minimal Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-8 py-4 flex justify-between items-center">
          <img 
            src="/lovable-uploads/b5c94c8f-8b5c-4d46-89bb-c353f06e28ca.png" 
            alt="KloudFox" 
            className="h-8"
          />
          <div className="flex items-center gap-2">
            <span className="text-xs text-white/40 tracking-[0.3em] uppercase">NVIDIA Inception</span>
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        </div>
      </header>

      {/* Hero - Slide 1 */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        {/* Dramatic gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-cyan-500/15 to-emerald-500/15 blur-[100px]" />
        </div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-3 mb-12 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-medium text-white/80">NVIDIA Inception Program Application</span>
              </div>
              <div className="w-px h-4 bg-white/20" />
              <span className="text-sm text-white/50">2025</span>
            </div>
            
            {/* Main Title */}
            <h1 className="text-7xl md:text-[120px] font-black tracking-tight leading-[0.9] mb-8">
              <span className="bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent">
                KLOUD
              </span>
              <span className="bg-gradient-to-b from-violet-400 to-fuchsia-600 bg-clip-text text-transparent">
                FOX
              </span>
            </h1>
            
            {/* Tagline */}
            <p className="text-xl md:text-2xl text-white/60 font-light tracking-wide mb-16 max-w-2xl mx-auto">
              AI-powered infrastructure monitoring that <span className="text-white font-medium">predicts outages before they happen</span>
            </p>
            
            {/* Key Stats Row */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">40s</div>
                <div className="text-xs text-white/40 uppercase tracking-wider">Check Intervals</div>
              </div>
              <div className="w-px h-16 bg-white/10 hidden md:block" />
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">90%</div>
                <div className="text-xs text-white/40 uppercase tracking-wider">Fewer False Alerts</div>
              </div>
              <div className="w-px h-16 bg-white/10 hidden md:block" />
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-violet-400 mb-2">AI</div>
                <div className="text-xs text-white/40 uppercase tracking-wider">Powered Detection</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-white/30">
            <span className="text-xs tracking-widest">SCROLL</span>
            <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
          </div>
        </div>
      </section>

      {/* Problem - Slide 2 */}
      <section className="py-32 relative">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section Label */}
            <div className="flex items-center gap-4 mb-16">
              <div className="w-12 h-px bg-red-500" />
              <span className="text-red-400 text-sm font-semibold tracking-[0.2em] uppercase">The Problem</span>
            </div>
            
            {/* Main Statement */}
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-20">
              <span className="text-white">Businesses lose </span>
              <span className="text-red-400">$12,000+</span>
              <br />
              <span className="text-white/60">per undetected outage</span>
            </h2>
            
            {/* Stats Grid */}
            <div className="grid md:grid-cols-3 gap-1">
              <div className="bg-white/[0.03] p-12 group hover:bg-white/[0.05] transition-all duration-500">
                <AlertTriangle className="w-8 h-8 text-red-500/60 mb-6" />
                <div className="text-6xl font-black text-white mb-4">75%</div>
                <p className="text-white/50 leading-relaxed">of businesses experience outages they never detect until customers complain</p>
              </div>
              
              <div className="bg-white/[0.03] p-12 group hover:bg-white/[0.05] transition-all duration-500">
                <DollarSign className="w-8 h-8 text-amber-500/60 mb-6" />
                <div className="text-6xl font-black text-white mb-4">$5.6K</div>
                <p className="text-white/50 leading-relaxed">average cost per minute of downtime for mid-sized businesses</p>
              </div>
              
              <div className="bg-white/[0.03] p-12 group hover:bg-white/[0.05] transition-all duration-500">
                <Clock className="w-8 h-8 text-orange-500/60 mb-6" />
                <div className="text-6xl font-black text-white mb-4">83%</div>
                <p className="text-white/50 leading-relaxed">learn about crashes from customer complaints, not their monitoring tools</p>
              </div>
            </div>
            
            {/* Bottom insight */}
            <div className="mt-16 border-l-2 border-red-500/50 pl-8">
              <p className="text-xl text-white/70 italic">
                "Traditional monitoring is reactive. By the time you get an alert, your customers are already affected."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution - Slide 3 */}
      <section className="py-32 relative">
        {/* Gradient accent */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
        
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section Label */}
            <div className="flex items-center gap-4 mb-16">
              <div className="w-12 h-px bg-emerald-500" />
              <span className="text-emerald-400 text-sm font-semibold tracking-[0.2em] uppercase">Our Solution</span>
            </div>
            
            {/* Main Statement */}
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              <span className="text-white">Predict failures </span>
              <span className="text-emerald-400">before</span>
              <br />
              <span className="text-white/60">they happen</span>
            </h2>
            
            <p className="text-xl text-white/50 mb-20 max-w-2xl">
              KloudFox uses machine learning to analyze patterns and predict infrastructure failures before they impact users.
            </p>
            
            {/* Features - Asymmetric layout */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-violet-500/10 to-transparent border border-violet-500/20 p-8 rounded-2xl">
                  <Brain className="w-10 h-10 text-violet-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Anomaly Detection</h3>
                  <p className="text-white/50">LSTM neural networks identify unusual patterns across millions of data points in real-time</p>
                </div>
                
                <div className="bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 p-8 rounded-2xl">
                  <Activity className="w-10 h-10 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Predictive Analysis</h3>
                  <p className="text-white/50">Trained on millions of historical outage scenarios to predict failures 15+ minutes ahead</p>
                </div>
              </div>
              
              <div className="space-y-8 md:mt-16">
                <div className="bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 p-8 rounded-2xl">
                  <Cpu className="w-10 h-10 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">GPU Acceleration</h3>
                  <p className="text-white/50">NVIDIA-powered inference for processing thousands of checks per second</p>
                </div>
                
                <div className="bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20 p-8 rounded-2xl">
                  <Zap className="w-10 h-10 text-amber-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">40-Second Intervals</h3>
                  <p className="text-white/50">Industry-leading check frequency. Most competitors offer 1-5 minute intervals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Technology - Slide 4 */}
      <section className="py-32 relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-1/2 left-0 w-[800px] h-[800px] -translate-y-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-600/10 to-transparent blur-[100px]" />
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Section Label */}
            <div className="flex items-center gap-4 mb-16">
              <div className="w-12 h-px bg-violet-500" />
              <span className="text-violet-400 text-sm font-semibold tracking-[0.2em] uppercase">AI Technology</span>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Left - ML Stack */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                  Machine Learning Stack
                </h2>
                
                <div className="space-y-6">
                  {[
                    { title: "Time-Series Anomaly Detection", desc: "LSTM networks for pattern recognition across infrastructure metrics" },
                    { title: "Predictive Failure Models", desc: "Trained on millions of historical outage scenarios" },
                    { title: "Intelligent Alert Scoring", desc: "ML-based prioritization reduces false positives by 90%" },
                    { title: "Auto-Scaling Detection", desc: "Dynamic threshold adjustment based on traffic patterns" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-violet-500/40 transition-colors">
                        <CheckCircle className="w-4 h-4 text-violet-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                        <p className="text-white/50 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right - NVIDIA Integration */}
              <div className="bg-gradient-to-br from-emerald-500/5 to-violet-500/5 border border-white/10 rounded-3xl p-10">
                <div className="flex items-center gap-3 mb-8">
                  <Rocket className="w-6 h-6 text-emerald-400" />
                  <h3 className="text-2xl font-bold text-white">NVIDIA GPU Opportunity</h3>
                </div>
                
                <div className="space-y-6">
                  {[
                    { title: "Real-Time Inference", desc: "GPU-accelerated model inference for instant predictions" },
                    { title: "Model Training at Scale", desc: "Faster iteration on anomaly detection models" },
                    { title: "Edge Deployment", desc: "NVIDIA Jetson for distributed monitoring nodes" },
                    { title: "TensorRT Optimization", desc: "10x faster inference with NVIDIA optimization" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <ArrowRight className="w-4 h-4 text-emerald-400 mt-1.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                        <p className="text-white/50 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity - Slide 5 */}
      <section className="py-32 relative">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section Label */}
            <div className="flex items-center gap-4 mb-16">
              <div className="w-12 h-px bg-cyan-500" />
              <span className="text-cyan-400 text-sm font-semibold tracking-[0.2em] uppercase">Market Opportunity</span>
            </div>
            
            {/* TAM/SAM/SOM */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <div className="text-center p-8">
                <div className="text-6xl md:text-7xl font-black text-white mb-2">$3.4B</div>
                <div className="text-lg font-medium text-cyan-400 mb-2">TAM</div>
                <p className="text-white/40 text-sm">Total Addressable Market<br />Website Monitoring Industry</p>
              </div>
              
              <div className="text-center p-8 border-x border-white/10">
                <div className="text-6xl md:text-7xl font-black text-white mb-2">$890M</div>
                <div className="text-lg font-medium text-violet-400 mb-2">SAM</div>
                <p className="text-white/40 text-sm">Serviceable Addressable Market<br />SMB + Mid-Enterprise</p>
              </div>
              
              <div className="text-center p-8">
                <div className="text-6xl md:text-7xl font-black text-white mb-2">$45M</div>
                <div className="text-lg font-medium text-emerald-400 mb-2">SOM</div>
                <p className="text-white/40 text-sm">Serviceable Obtainable Market<br />5-Year Target</p>
              </div>
            </div>
            
            {/* Growth drivers */}
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-10">
              <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
                Market Growth Drivers
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "12.3% CAGR through 2028",
                  "Shift from reactive to predictive monitoring",
                  "AI/ML adoption in DevOps growing 40% YoY",
                  "Legacy tools failing with cloud-native complexity",
                  "Increasing focus on uptime SLAs",
                  "Remote work driving web dependency"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="text-white/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitor Analysis */}
      <CompetitorSlide />

      {/* Business Model */}
      <BusinessModelSlide />

      {/* Revenue Projections */}
      <RevenueProjectionsSlide />

      {/* Traction - Slide */}
      <section className="py-32 relative">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section Label */}
            <div className="flex items-center gap-4 mb-16">
              <div className="w-12 h-px bg-emerald-500" />
              <span className="text-emerald-400 text-sm font-semibold tracking-[0.2em] uppercase">Traction</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
              Early Momentum
            </h2>
            
            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-1 mb-16">
              {[
                { value: "10K+", label: "Websites Monitored", color: "text-white" },
                { value: "2,847", label: "Active Users", color: "text-emerald-400" },
                { value: "99.9%", label: "Platform Uptime", color: "text-violet-400" },
                { value: "40s", label: "Check Intervals", color: "text-cyan-400" },
              ].map((metric, i) => (
                <div key={i} className="bg-white/[0.03] p-8 text-center hover:bg-white/[0.05] transition-all">
                  <div className={`text-4xl md:text-5xl font-black mb-2 ${metric.color}`}>{metric.value}</div>
                  <div className="text-sm text-white/40">{metric.label}</div>
                </div>
              ))}
            </div>
            
            {/* Milestones */}
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "MVP launched with core AI detection features",
                "First 100 paying customers acquired",
                "AI anomaly detection achieving 90% accuracy",
                "Processing 50M+ checks per month",
              ].map((milestone, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/[0.02] border border-white/5 rounded-xl p-6">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span className="text-white/80">{milestone}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <RoadmapSlide />

      {/* Team */}
      <TeamSlide />

      {/* The Ask - Final Slide */}
      <section className="py-32 relative overflow-hidden">
        {/* Dramatic gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-[#0a0a0f] to-emerald-900/20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-b from-violet-600/10 to-transparent blur-[150px]" />
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Section Label */}
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-3 mb-12">
              <Rocket className="w-4 h-4 text-violet-400" />
              <span className="text-sm font-medium text-white/80">NVIDIA Inception Ask</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Let's Build the Future of<br />
              <span className="bg-gradient-to-r from-violet-400 to-emerald-400 bg-clip-text text-transparent">
                Predictive Monitoring
              </span>
            </h2>
            
            <p className="text-xl text-white/50 mb-16 max-w-2xl mx-auto">
              We're seeking NVIDIA Inception partnership to accelerate our AI infrastructure and bring predictive monitoring to the global market.
            </p>
            
            {/* What we need */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {[
                { 
                  icon: Server, 
                  title: "GPU Credits",
                  desc: "Accelerate model training and real-time inference at scale"
                },
                { 
                  icon: Brain, 
                  title: "Technical Guidance",
                  desc: "Expert support for TensorRT and edge deployment optimization"
                },
                { 
                  icon: Globe, 
                  title: "Ecosystem Access",
                  desc: "Connect with partners and investors in the NVIDIA network"
                },
              ].map((item, i) => (
                <div key={i} className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 text-center hover:bg-white/[0.05] hover:border-white/20 transition-all">
                  <item.icon className="w-10 h-10 text-violet-400 mx-auto mb-4" />
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            
            {/* Contact */}
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-violet-500/20 to-emerald-500/20 border border-white/10 rounded-full px-8 py-4">
              <span className="text-white font-medium">team@kloudfox.com</span>
              <div className="w-px h-4 bg-white/20" />
              <span className="text-white/60">kloudfox.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <img 
              src="/lovable-uploads/b5c94c8f-8b5c-4d46-89bb-c353f06e28ca.png" 
              alt="KloudFox" 
              className="h-6 opacity-50"
            />
            <p className="text-sm text-white/30">
              © 2025 KloudFox. Confidential — NVIDIA Inception Program Application
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PitchDeck;
