
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Server, Cpu, HardDrive, Wifi, AlertCircle, TrendingUp, Shield, Zap } from "lucide-react";

const ServerMonitoring = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Server Monitoring</h1>
            <p className="text-xl mb-8 opacity-90">
              Keep your servers running at peak performance with comprehensive monitoring that prevents disasters before they happen.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm opacity-80">Real-time Monitoring</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm opacity-80">Server Metrics</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">Instant</div>
                <div className="text-sm opacity-80">Alert Delivery</div>
              </div>
            </div>
            <a 
              href="https://watch.kloudfox.com/register" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors inline-block"
            >
              Start Monitoring
            </a>
          </div>
        </div>
      </div>

      <div className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Problem Section */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Server Failures Cost More Than You Think</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                When servers crash, businesses don't just lose money - they lose customers, data, and reputation that can take years to rebuild.
              </p>
            </div>

            {/* Cost Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <div className="text-2xl font-bold text-red-600 mb-2">$5,600</div>
                <div className="text-sm text-gray-600">Average cost per minute of downtime</div>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 text-center">
                <TrendingUp className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <div className="text-2xl font-bold text-orange-600 mb-2">91%</div>
                <div className="text-sm text-gray-600">Businesses affected by unplanned downtime</div>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
                <Server className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <div className="text-2xl font-bold text-yellow-600 mb-2">16 hours</div>
                <div className="text-sm text-gray-600">Average recovery time without monitoring</div>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 text-center">
                <Shield className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <div className="text-2xl font-bold text-purple-600 mb-2">25%</div>
                <div className="text-sm text-gray-600">Companies that close within 2 years after major data loss</div>
              </div>
            </div>

            {/* Why Choose KloudFox */}
            <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Why KloudFox Server Monitoring is Essential</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Cpu className="h-6 w-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Comprehensive Resource Monitoring</h3>
                      <p className="text-gray-600">Track CPU, memory, disk usage, and network performance in real-time with intelligent alerting.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <HardDrive className="h-6 w-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Predictive Failure Detection</h3>
                      <p className="text-gray-600">Our AI algorithms detect patterns that indicate impending hardware failures before they happen.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Wifi className="h-6 w-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Network Performance Tracking</h3>
                      <p className="text-gray-600">Monitor bandwidth usage, latency, and packet loss to ensure optimal connectivity.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Zap className="h-6 w-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Process & Service Monitoring</h3>
                      <p className="text-gray-600">Ensure critical services are running and automatically restart failed processes.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <TrendingUp className="h-6 w-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Historical Analytics</h3>
                      <p className="text-gray-600">Analyze trends and plan capacity upgrades based on historical performance data.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Shield className="h-6 w-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Security & Log Monitoring</h3>
                      <p className="text-gray-600">Monitor log files for security threats and unusual activity patterns.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Monitoring Features */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-12 text-center">Complete Server Visibility & Control</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "CPU & Memory Monitoring",
                    description: "Real-time tracking of processor usage, memory consumption, and system load with intelligent threshold alerts."
                  },
                  {
                    title: "Disk Space & I/O Monitoring",
                    description: "Monitor disk usage, read/write speeds, and get early warnings before you run out of storage space."
                  },
                  {
                    title: "Network Performance",
                    description: "Track bandwidth usage, network latency, and connection quality to ensure optimal performance."
                  },
                  {
                    title: "Service & Process Monitoring",
                    description: "Ensure critical services are running and automatically detect when important processes crash."
                  },
                  {
                    title: "Database Performance",
                    description: "Monitor database connections, query performance, and resource usage for MySQL, PostgreSQL, and more."
                  },
                  {
                    title: "Custom Metrics via API",
                    description: "Track custom application metrics and business KPIs through our flexible monitoring API."
                  },
                  {
                    title: "Log File Analysis",
                    description: "Monitor log files for errors, security threats, and unusual patterns with intelligent filtering."
                  },
                  {
                    title: "Security Monitoring",
                    description: "Detect unauthorized access attempts, unusual login patterns, and potential security breaches."
                  },
                  {
                    title: "Performance Baselines",
                    description: "Establish performance baselines and get alerted when metrics deviate from normal patterns."
                  }
                ].map((feature, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-green-50 rounded-2xl p-8 mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-6">Why Businesses Choose KloudFox for Server Monitoring</h2>
                <p className="text-xl text-gray-600">
                  Proactive monitoring that prevents disasters instead of just reporting them.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-green-700">Before KloudFox</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Find out about server issues from angry customers</li>
                    <li>• Spend hours diagnosing what went wrong</li>
                    <li>• Lose revenue during extended downtime</li>
                    <li>• Risk data loss from undetected failures</li>
                    <li>• React to problems after they've caused damage</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-green-700">After KloudFox</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Get instant alerts before customers notice issues</li>
                    <li>• Quickly identify root causes with detailed metrics</li>
                    <li>• Prevent downtime with proactive maintenance</li>
                    <li>• Protect data with early failure detection</li>
                    <li>• Prevent problems before they impact business</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-green-600 text-white rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Protect Your Infrastructure Today</h2>
              <p className="text-xl mb-8 opacity-90">
                Don't wait for a server failure to cost you thousands. Start monitoring with KloudFox now.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://watch.kloudfox.com/register" 
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
                >
                  Start Free Trial
                </a>
                <a 
                  href="/pricing" 
                  className="bg-white text-green-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
                >
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServerMonitoring;
