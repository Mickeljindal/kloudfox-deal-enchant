
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AlertTriangle, Clock, Users, MessageSquare, BarChart3, CheckCircle, Shield, Zap, Info } from "lucide-react";

const IncidentManagement = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Incident Management</h1>
            <p className="text-xl mb-8 opacity-90">
              Turn chaos into control with KloudFox's intelligent incident management system that keeps your team coordinated and your customers informed.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">&lt;2min</div>
                <div className="text-sm opacity-80">Response Time</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm opacity-80">Auto-Detection</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm opacity-80">Transparency</div>
              </div>
            </div>
            <a 
              href="https://watch.kloudfox.com/register" 
              className="bg-white text-red-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors inline-block"
            >
              Start Managing Incidents
            </a>
          </div>
        </div>
      </div>

      <div className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Problem Section */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">When Things Go Wrong, Every Second Counts</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Poor incident management doesn't just cost money—it destroys trust, reputation, and customer relationships that took years to build.
              </p>
            </div>

            {/* Cost of Poor Incident Management */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <div className="flex items-center mb-4">
                  <Clock className="h-8 w-8 text-red-500 mr-3" />
                  <h3 className="text-xl font-bold text-red-700">Delayed Response</h3>
                </div>
                <p className="text-gray-700 mb-3">Without proper incident management, teams waste 73% more time on resolution.</p>
                <div className="text-2xl font-bold text-red-600">+4.2 Hours</div>
              </div>
              
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-orange-500 mr-3" />
                  <h3 className="text-xl font-bold text-orange-700">Team Chaos</h3>
                </div>
                <p className="text-gray-700 mb-3">Lack of coordination leads to duplicated efforts and miscommunication.</p>
                <div className="text-2xl font-bold text-orange-600">-60% Efficiency</div>
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <div className="flex items-center mb-4">
                  <MessageSquare className="h-8 w-8 text-yellow-500 mr-3" />
                  <h3 className="text-xl font-bold text-yellow-700">Customer Frustration</h3>
                </div>
                <p className="text-gray-700 mb-3">Silent outages and poor communication frustrate 89% of customers.</p>
                <div className="text-2xl font-bold text-yellow-600">Lost Trust</div>
              </div>
            </div>

            {/* KloudFox Solution */}
            <div className="bg-gradient-to-r from-gray-50 to-red-50 rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">How KloudFox Transforms Incident Management</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <AlertTriangle className="h-6 w-6 text-red-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Automatic Incident Detection</h3>
                      <p className="text-gray-600">Our monitoring instantly creates incidents when issues are detected, no manual intervention needed.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Users className="h-6 w-6 text-red-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Smart Team Notifications</h3>
                      <p className="text-gray-600">Escalation rules ensure the right people are notified at the right time through their preferred channels.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MessageSquare className="h-6 w-6 text-red-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Real-time Status Updates</h3>
                      <p className="text-gray-600">Keep customers informed with automatically updated status pages and proactive communications.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <BarChart3 className="h-6 w-6 text-red-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Incident Analytics</h3>
                      <p className="text-gray-600">Track MTTR, MTBF, and other key metrics to continuously improve your incident response.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Shield className="h-6 w-6 text-red-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Post-Incident Analysis</h3>
                      <p className="text-gray-600">Automated incident reports help identify patterns and prevent future occurrences.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Zap className="h-6 w-6 text-red-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Integration-First Approach</h3>
                      <p className="text-gray-600">Works seamlessly with Slack, PagerDuty, Jira, and other tools your team already uses.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-12 text-center">Complete Incident Management Workflow</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Automatic Incident Creation",
                    description: "Incidents are automatically created when monitoring detects issues, ensuring nothing slips through the cracks.",
                    standard: true
                  },
                  {
                    title: "Smart Alert Routing",
                    description: "Intelligent escalation ensures the right team members are notified based on severity and on-call schedules.",
                    standard: true
                  },
                  {
                    title: "Status Page Integration",
                    description: "Automatically update your status page when incidents occur, keeping customers informed in real-time.",
                    standard: true
                  },
                  {
                    title: "Incident Timeline",
                    description: "Track every action, update, and communication throughout the incident lifecycle for complete accountability.",
                    standard: true
                  },
                  {
                    title: "Team Collaboration",
                    description: "Built-in chat and collaboration tools keep your team coordinated during critical incidents.",
                    standard: true
                  },
                  {
                    title: "Advanced Runbook Automation",
                    description: "Automated response workflows and custom runbook execution for complex enterprise incident scenarios.",
                    standard: false
                  }
                ].map((feature, index) => (
                  <div key={index} className={`bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow relative ${!feature.standard ? 'border-orange-200 bg-orange-50/30' : 'border-gray-200'}`}>
                    {!feature.standard && (
                      <div className="absolute top-3 right-3">
                        <span className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full font-medium">Enterprise</span>
                      </div>
                    )}
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
              
              {/* Subtle Disclaimer */}
              <div className="mt-8 bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                <div className="flex items-start">
                  <Info className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-red-800">
                    <p className="mb-2">
                      <span className="font-medium">Service Scope Notice:</span> KloudFox standard plans provide comprehensive incident detection, alerting, status page management, and basic team coordination features as outlined in our pricing documentation. 
                    </p>
                    <p>
                      Advanced enterprise-grade incident management capabilities (including complex runbook automation, custom workflow integrations, and specialized enterprise coordination tools) are available through our custom enterprise solutions and are not part of standard retail subscriptions. For complete feature availability, please refer to our <a href="/pricing" className="underline hover:text-red-900">pricing page</a> before making your purchase decision.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-green-50 rounded-2xl p-8 mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-6">Why Teams Choose KloudFox for Incidents</h2>
                <p className="text-xl text-gray-600">
                  Transform your incident response from reactive chaos to proactive excellence.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">85%</div>
                  <div className="text-gray-600">Faster Resolution</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">92%</div>
                  <div className="text-gray-600">Customer Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">67%</div>
                  <div className="text-gray-600">Fewer Incidents</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
                  <div className="text-gray-600">Transparency</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-red-600 text-white rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Master Incident Management?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of teams who have transformed their incident response with KloudFox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://watch.kloudfox.com/register" 
                  className="bg-white text-red-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
                >
                  Start Free Trial
                </a>
                <a 
                  href="/pricing" 
                  className="bg-red-700 hover:bg-red-800 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors border border-red-500"
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

export default IncidentManagement;
