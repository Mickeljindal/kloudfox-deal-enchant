
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Monitor, Users, MessageSquare, TrendingUp, Clock, Shield, Zap, Globe } from "lucide-react";

const StatusPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Professional Status Pages</h1>
            <p className="text-xl mb-8 opacity-90">
              Build trust with your customers by providing transparent, real-time updates about your service availability and performance.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">Real-time</div>
                <div className="text-sm opacity-80">Status Updates</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">Custom</div>
                <div className="text-sm opacity-80">Branding</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">Mobile</div>
                <div className="text-sm opacity-80">Optimized</div>
              </div>
            </div>
            <a 
              href="https://watch.kloudfox.com/register" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors inline-block"
            >
              Create Status Page
            </a>
          </div>
        </div>
      </div>

      <div className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Problem Section */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">When Things Go Wrong, Communication is Everything</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                When your service has issues, customers don't just want a fix - they want to know what's happening. Poor communication during outages can damage trust forever.
              </p>
            </div>

            {/* Without Status Page */}
            <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-8 mb-16">
              <h3 className="text-2xl font-bold text-red-700 mb-6">What Happens Without a Status Page</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold mb-1">Support Ticket Tsunami</h4>
                      <p className="text-gray-600 text-sm">Hundreds of "Is it just me?" tickets flood your support system</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold mb-1">Social Media Complaints</h4>
                      <p className="text-gray-600 text-sm">Frustrated customers vent on Twitter, Facebook, and review sites</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold mb-1">Customer Churn</h4>
                      <p className="text-gray-600 text-sm">Lack of communication drives customers to competitors</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold mb-1">Brand Damage</h4>
                      <p className="text-gray-600 text-sm">"They don't even tell us when things are broken" reputation</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold mb-1">Internal Chaos</h4>
                      <p className="text-gray-600 text-sm">Team spends time answering the same questions repeatedly</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold mb-1">Lost Revenue</h4>
                      <p className="text-gray-600 text-sm">Customers cancel subscriptions due to poor communication</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* KloudFox Solution */}
            <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Turn Incidents into Trust-Building Opportunities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Monitor className="h-6 w-6 text-purple-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Real-time Status Updates</h3>
                      <p className="text-gray-600">Automatically update your status page when monitoring detects issues - no manual work required.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MessageSquare className="h-6 w-6 text-purple-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Incident Communication Hub</h3>
                      <p className="text-gray-600">Post updates, timeline, and resolution steps to keep customers informed throughout incidents.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Users className="h-6 w-6 text-purple-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Subscriber Notifications</h3>
                      <p className="text-gray-600">Customers can subscribe to get instant notifications about issues that affect them.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Globe className="h-6 w-6 text-purple-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Custom Branding & Domain</h3>
                      <p className="text-gray-600">Match your brand colors, logo, and use your own domain for a professional appearance.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <TrendingUp className="h-6 w-6 text-purple-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Historical Uptime Reports</h3>
                      <p className="text-gray-600">Show 90-day uptime history to demonstrate your reliability track record.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Shield className="h-6 w-6 text-purple-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Maintenance Scheduling</h3>
                      <p className="text-gray-600">Schedule and communicate planned maintenance to minimize customer surprise.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Stories */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-12 text-center">How Status Pages Transform Customer Relationships</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-green-700">SaaS Company Success Story</h3>
                  <p className="text-gray-600 mb-4">
                    "After launching our KloudFox status page, support tickets during incidents dropped by 73%. 
                    Customers started thanking us for transparency instead of complaining about downtime."
                  </p>
                  <div className="text-sm font-medium text-green-600">
                    - 73% reduction in support tickets during incidents
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-blue-700">E-commerce Platform Result</h3>
                  <p className="text-gray-600 mb-4">
                    "Our professional status page helped us retain 89% of customers during a major outage. 
                    The transparency actually strengthened relationships with our biggest clients."
                  </p>
                  <div className="text-sm font-medium text-blue-600">
                    - 89% customer retention during major incident
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-12 text-center">Everything You Need for Professional Status Communication</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Real-time Status Updates",
                    description: "Automatically reflect your service status based on monitoring results with instant updates when issues occur."
                  },
                  {
                    title: "Incident Timeline Management",
                    description: "Create detailed incident timelines with regular updates to keep customers informed throughout resolution."
                  },
                  {
                    title: "Custom Branding & Design",
                    description: "Match your brand with custom colors, fonts, logos, and use your own domain for seamless integration."
                  },
                  {
                    title: "Subscriber Notifications",
                    description: "Let customers subscribe to get email and SMS notifications about incidents affecting their services."
                  },
                  {
                    title: "Historical Uptime Data",
                    description: "Display 90-day uptime history with beautiful charts to showcase your reliability track record."
                  },
                  {
                    title: "Maintenance Scheduling",
                    description: "Schedule planned maintenance windows and automatically notify subscribers in advance."
                  },
                  {
                    title: "Component-level Monitoring",
                    description: "Show status for individual services and components so customers know exactly what's affected."
                  },
                  {
                    title: "Mobile-responsive Design",
                    description: "Your status page looks perfect on all devices with automatically optimized mobile layouts."
                  },
                  {
                    title: "API Integration",
                    description: "Update your status page programmatically through our API for automated incident management."
                  }
                ].map((feature, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Statistics */}
            <div className="bg-purple-50 rounded-2xl p-8 mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-6">Status Pages Build Trust & Reduce Churn</h2>
                <p className="text-xl text-gray-600">
                  Transparency during incidents actually increases customer loyalty.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">86%</div>
                  <div className="text-gray-600">of customers appreciate proactive communication during outages</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">67%</div>
                  <div className="text-gray-600">reduction in support tickets with status page</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">2.3x</div>
                  <div className="text-gray-600">higher customer retention during incidents</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">94%</div>
                  <div className="text-gray-600">of enterprises use status pages for transparency</div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-purple-600 text-white rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Build Trust With Transparent Communication</h2>
              <p className="text-xl mb-8 opacity-90">
                Turn inevitable incidents into trust-building opportunities with a professional status page.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://watch.kloudfox.com/register" 
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
                >
                  Create Status Page
                </a>
                <a 
                  href="/pricing" 
                  className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
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

export default StatusPage;
