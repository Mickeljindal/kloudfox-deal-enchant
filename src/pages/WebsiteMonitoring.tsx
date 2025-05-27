
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Globe, Clock, Shield, Zap, Bell, BarChart3, CheckCircle, AlertTriangle } from "lucide-react";

const WebsiteMonitoring = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Website Monitoring</h1>
            <p className="text-xl mb-8 opacity-90">
              Monitor your website's uptime, performance, and availability 24/7 with KloudFox's advanced website monitoring solution that never sleeps.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-sm opacity-80">Uptime Guarantee</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">40s</div>
                <div className="text-sm opacity-80">Check Interval</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">4</div>
                <div className="text-sm opacity-80">Global Locations</div>
              </div>
            </div>
            <a 
              href="https://watch.kloudfox.com/register" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors inline-block"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </div>

      <div className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Problem Section */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">The Hidden Cost of Website Downtime</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Every minute your website is down, you're hemorrhaging money. While you sleep peacefully, your competitors are stealing customers you'll never get back.
              </p>
            </div>

            {/* Cost Impact */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="h-8 w-8 text-red-500 mr-3" />
                  <h3 className="text-xl font-bold text-red-700">Revenue Loss</h3>
                </div>
                <p className="text-gray-700 mb-3">Amazon loses $66,240 every minute during downtime. What's your cost?</p>
                <div className="text-2xl font-bold text-red-600">$200-$500/min</div>
              </div>
              
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                <div className="flex items-center mb-4">
                  <BarChart3 className="h-8 w-8 text-orange-500 mr-3" />
                  <h3 className="text-xl font-bold text-orange-700">SEO Impact</h3>
                </div>
                <p className="text-gray-700 mb-3">Google penalizes slow and unreliable websites in search rankings.</p>
                <div className="text-2xl font-bold text-orange-600">-15% Traffic</div>
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <div className="flex items-center mb-4">
                  <Shield className="h-8 w-8 text-yellow-500 mr-3" />
                  <h3 className="text-xl font-bold text-yellow-700">Brand Damage</h3>
                </div>
                <p className="text-gray-700 mb-3">88% of users won't return after a bad experience with your website.</p>
                <div className="text-2xl font-bold text-yellow-600">Permanent Loss</div>
              </div>
            </div>

            {/* Why KloudFox */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Why KloudFox is Your Website's Guardian Angel</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Globe className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Global Monitoring Network</h3>
                      <p className="text-gray-600">We monitor from 4 continents to catch regional outages your competitors miss.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">40-Second Check Intervals</h3>
                      <p className="text-gray-600">While others check every 5 minutes, we catch issues in seconds.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Bell className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Instant Multi-Channel Alerts</h3>
                      <p className="text-gray-600">Email, SMS, phone calls, Slack, Discord - we'll reach you however you prefer.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Zap className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Performance Monitoring</h3>
                      <p className="text-gray-600">Track page load times and identify performance bottlenecks before they hurt conversions.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Shield className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">SSL Certificate Monitoring</h3>
                      <p className="text-gray-600">Never let an expired certificate scare away customers with security warnings.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Content Monitoring</h3>
                      <p className="text-gray-600">Detect unauthorized changes, defacements, or content theft instantly.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-12 text-center">Everything You Need to Protect Your Online Business</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Real-time Uptime Monitoring",
                    description: "Get notified within 40 seconds when your website goes down from any of our global monitoring locations."
                  },
                  {
                    title: "Performance Tracking",
                    description: "Monitor page load times and identify slow pages that are hurting your conversion rates."
                  },
                  {
                    title: "SSL Certificate Monitoring",
                    description: "Never let an expired SSL certificate damage your SEO rankings or scare away customers."
                  },
                  {
                    title: "Content Change Detection",
                    description: "Instantly detect unauthorized changes to your website content or potential security breaches."
                  },
                  {
                    title: "Multi-Channel Alerts",
                    description: "Receive alerts via email, SMS, phone calls, Slack, Discord, and more communication channels."
                  },
                  {
                    title: "Detailed Analytics",
                    description: "Get comprehensive uptime reports and performance analytics to optimize your website."
                  }
                ].map((feature, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Proof */}
            <div className="bg-green-50 rounded-2xl p-8 mb-16">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">Trusted by Over 10,000 Websites Worldwide</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Join thousands of smart business owners who never worry about website downtime anymore.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
                    <div className="text-gray-600">Average Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">2.3s</div>
                    <div className="text-gray-600">Average Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
                    <div className="text-gray-600">Monitoring Coverage</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-blue-600 text-white rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Don't Let Downtime Destroy Your Business</h2>
              <p className="text-xl mb-8 opacity-90">
                Start monitoring your website today and join thousands of businesses that never worry about downtime.
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
                  className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
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

export default WebsiteMonitoring;
