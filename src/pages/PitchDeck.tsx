
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Target, 
  Cpu, 
  Globe, 
  Shield, 
  Zap, 
  ArrowRight,
  CheckCircle,
  BarChart3,
  Activity,
  Rocket
} from "lucide-react";
import CompetitorSlide from "@/components/pitch-deck/CompetitorSlide";
import RevenueProjectionsSlide from "@/components/pitch-deck/RevenueProjectionsSlide";
import BusinessModelSlide from "@/components/pitch-deck/BusinessModelSlide";
import RoadmapSlide from "@/components/pitch-deck/RoadmapSlide";
import TeamSlide from "@/components/pitch-deck/TeamSlide";

const PitchDeck = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      {/* Hero Slide */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center bg-green-500/20 border border-green-400/30 rounded-full px-6 py-3 mb-8">
            <Cpu className="w-5 h-5 text-green-400 mr-2" />
            <span className="text-green-300 font-medium">NVIDIA Inception Program Application</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              KloudFox
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto">
            AI-Powered Anomaly Detection for Infrastructure Monitoring
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg px-6 py-3">
              <span className="text-purple-400 font-bold">Founded:</span> 2024
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg px-6 py-3">
              <span className="text-green-400 font-bold">Stage:</span> Early Traction
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg px-6 py-3">
              <span className="text-blue-400 font-bold">Focus:</span> AI/ML Infrastructure
            </div>
          </div>
          
          <img 
            src="/lovable-uploads/b5c94c8f-8b5c-4d46-89bb-c353f06e28ca.png" 
            alt="KloudFox Logo" 
            className="h-20 mx-auto"
          />
        </div>
      </section>

      {/* Problem Slide */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-red-500/20 text-red-400 px-4 py-2 rounded-full font-medium text-sm mb-4">
              THE PROBLEM
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              $12,000+ Lost Per <span className="text-red-400">Undetected Outage</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold text-red-400 mb-4">75%</div>
                <p className="text-gray-300">of businesses experience outages they never detect</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold text-orange-400 mb-4">$5,600</div>
                <p className="text-gray-300">average cost per minute of downtime</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-4">83%</div>
                <p className="text-gray-300">find out about crashes from customer complaints</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 bg-red-500/10 border border-red-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-xl text-gray-300 text-center">
              <span className="font-bold text-red-400">Traditional monitoring is reactive.</span> Businesses lose revenue waiting for alerts that come <span className="italic">after</span> customers are already affected.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Slide */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-500/20 text-green-400 px-4 py-2 rounded-full font-medium text-sm mb-4">
              OUR SOLUTION
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              AI-Powered <span className="text-green-400">Predictive Monitoring</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Machine learning that predicts infrastructure failures before they happen
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center">
              <Brain className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Anomaly Detection</h3>
              <p className="text-gray-400 text-sm">ML models detect unusual patterns before outages occur</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center">
              <Activity className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Predictive Analysis</h3>
              <p className="text-gray-400 text-sm">Neural networks learn and predict failure patterns</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center">
              <Cpu className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">GPU Acceleration</h3>
              <p className="text-gray-400 text-sm">Real-time processing of millions of data points</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center">
              <Zap className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">40-Second Intervals</h3>
              <p className="text-gray-400 text-sm">Fastest check frequency in the industry</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Technology Slide */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full font-medium text-sm mb-4">
              <Cpu className="w-4 h-4 mr-2" />
              AI TECHNOLOGY
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-purple-400">Machine Learning Stack</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-purple-900/50 to-gray-800 border border-purple-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-purple-300">Core AI Capabilities</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Time-Series Anomaly Detection</span>
                    <p className="text-gray-400 text-sm">LSTM networks for pattern recognition across infrastructure metrics</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Predictive Failure Models</span>
                    <p className="text-gray-400 text-sm">Trained on millions of historical outage scenarios</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Intelligent Alert Scoring</span>
                    <p className="text-gray-400 text-sm">ML-based prioritization reduces false positives by 90%</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Auto-Scaling Detection</span>
                    <p className="text-gray-400 text-sm">Dynamic threshold adjustment based on traffic patterns</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-900/50 to-gray-800 border border-green-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-green-300">NVIDIA GPU Opportunity</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Rocket className="w-6 h-6 text-purple-400 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Real-Time Inference</span>
                    <p className="text-gray-400 text-sm">GPU-accelerated model inference for instant predictions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Rocket className="w-6 h-6 text-purple-400 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Model Training at Scale</span>
                    <p className="text-gray-400 text-sm">Faster iteration on anomaly detection models</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Rocket className="w-6 h-6 text-purple-400 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Edge Deployment</span>
                    <p className="text-gray-400 text-sm">NVIDIA Jetson for distributed monitoring nodes</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Rocket className="w-6 h-6 text-purple-400 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">TensorRT Optimization</span>
                    <p className="text-gray-400 text-sm">10x faster inference with NVIDIA optimization</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Market Slide */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full font-medium text-sm mb-4">
              MARKET OPPORTUNITY
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              $3.4B+ <span className="text-blue-400">Website Monitoring Market</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Growing at 12.3% CAGR with increasing demand for AI-powered solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
              <CardContent className="p-8 text-center">
                <Globe className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">$3.4B</div>
                <p className="text-gray-400">Total Addressable Market</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
              <CardContent className="p-8 text-center">
                <TrendingUp className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">12.3%</div>
                <p className="text-gray-400">Annual Growth Rate (CAGR)</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
              <CardContent className="p-8 text-center">
                <Target className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">SMB</div>
                <p className="text-gray-400">Initial Target Segment</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 bg-gray-800/50 border border-gray-700 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-4 text-center">Why AI Monitoring Wins</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                <span className="text-gray-300">Enterprises shifting from reactive to predictive</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                <span className="text-gray-300">AI/ML adoption in DevOps growing 40% YoY</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                <span className="text-gray-300">Legacy tools can't handle modern complexity</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                <span className="text-gray-300">Cloud-native architectures require AI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitor Analysis Slide */}
      <CompetitorSlide />

      {/* Business Model Slide */}
      <BusinessModelSlide />

      {/* Revenue Projections Slide */}
      <RevenueProjectionsSlide />

      {/* Traction Slide */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-500/20 text-green-400 px-4 py-2 rounded-full font-medium text-sm mb-4">
              TRACTION
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Early Traction <span className="text-green-400">& Momentum</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">10,000+</div>
              <p className="text-gray-400 text-sm">Websites Monitored</p>
            </div>
            
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">2,847</div>
              <p className="text-gray-400 text-sm">Active Users</p>
            </div>
            
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <p className="text-gray-400 text-sm">Platform Uptime</p>
            </div>
            
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">40s</div>
              <p className="text-gray-400 text-sm">Check Intervals</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 border border-green-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-6 text-center">Key Milestones</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="font-bold">Product-Market Fit</span>
                  <p className="text-gray-400 text-sm">4.9/5 user satisfaction rating</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="font-bold">Global Infrastructure</span>
                  <p className="text-gray-400 text-sm">Monitoring from 4 continents</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="font-bold">AI Core Complete</span>
                  <p className="text-gray-400 text-sm">Anomaly detection in production</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="font-bold">Revenue Generating</span>
                  <p className="text-gray-400 text-sm">$127K+ revenue protected for customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Slide */}
      <RoadmapSlide />

      {/* Team Slide */}
      <TeamSlide />

      {/* Ask Slide */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-gray-900 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full font-medium text-sm mb-4">
              <Rocket className="w-4 h-4 mr-2" />
              NVIDIA INCEPTION ASK
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How NVIDIA <span className="text-purple-400">Accelerates Our Mission</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-8">
              <Cpu className="h-12 w-12 text-green-400 mb-6" />
              <h3 className="text-xl font-bold mb-4">GPU Credits</h3>
              <p className="text-gray-400">Accelerate ML model training and real-time inference at scale</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-8">
              <Users className="h-12 w-12 text-blue-400 mb-6" />
              <h3 className="text-xl font-bold mb-4">Technical Support</h3>
              <p className="text-gray-400">Access to NVIDIA engineers for TensorRT optimization</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-8">
              <Globe className="h-12 w-12 text-purple-400 mb-6" />
              <h3 className="text-xl font-bold mb-4">Go-to-Market</h3>
              <p className="text-gray-400">NVIDIA partner ecosystem and co-marketing opportunities</p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              With NVIDIA Inception, we can 10x our AI capabilities and bring predictive infrastructure monitoring to millions of businesses worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold px-8 py-6 text-lg"
                onClick={() => window.open('https://watch.kloudfox.com/register', '_blank')}
              >
                Try KloudFox <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-6 text-lg"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            <div className="flex items-center">
              <Shield className="w-6 h-6 text-green-400 mr-2" />
              <span className="text-gray-300">AI-Powered</span>
            </div>
            <div className="flex items-center">
              <Globe className="w-6 h-6 text-blue-400 mr-2" />
              <span className="text-gray-300">Global Infrastructure</span>
            </div>
            <div className="flex items-center">
              <Zap className="w-6 h-6 text-yellow-400 mr-2" />
              <span className="text-gray-300">40-Second Monitoring</span>
            </div>
            <div className="flex items-center">
              <DollarSign className="w-6 h-6 text-green-400 mr-2" />
              <span className="text-gray-300">Revenue Protection</span>
            </div>
          </div>
          
          <p className="text-gray-500">
            © 2024 KloudFox. AI-Powered Infrastructure Monitoring.
          </p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PitchDeck;
