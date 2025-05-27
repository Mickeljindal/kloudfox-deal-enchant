
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AlertTriangle, Clock, Users, MessageCircle, FileText, TrendingUp, Zap, Shield } from "lucide-react";

const IncidentManagement = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Incident Management</h1>
            <p className="text-xl mb-8 opacity-90">
              Streamline your incident response process with comprehensive incident management that helps you resolve issues faster and minimize business impact.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">40%</div>
                <div className="text-sm opacity-80">Faster Resolution</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">Real-time</div>
                <div className="text-sm opacity-80">Team Collaboration</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">Automated</div>
                <div className="text-sm opacity-80">Escalation</div>
              </div>
            </div>
            <a 
              href="https://watch.kloudfox.com/register" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors inline-block"
            >
              Improve Response Time
            </a>
          </div>
        </div>
      </div>

      <div className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Problem Section */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Every Second of Incident Response Counts</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                When critical systems fail, chaos ensues. Teams scramble, communication breaks down, and precious time is lost while customers suffer and revenue hemorrhages.
              </p>
            </div>

            {/* Chaos Scenarios */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-6">
                <h3 className="text-xl font-bold text-red-700 mb-4">Without Proper Incident Management</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Delayed Detection</h4>
                      <p className="text-gray-600 text-sm">Issues go unnoticed for hours, causing massive customer impact</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Slow Response</h4>
                      <p className="text-gray-600 text-sm">Finding the right person takes 30+ minutes during critical outages</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Communication Chaos</h4>
                      <p className="text-gray-600 text-sm">Teams work in silos, duplicating efforts and missing crucial information</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FileText className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">No Learning</h4>
                      <p className="text-gray-600 text-sm">Same incidents repeat because there's no systematic post-mortem process</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-6">
                <h3 className="text-xl font-bold text-green-700 mb-4">With KloudFox Incident Management</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Zap className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Instant Detection</h4>
                      <p className="text-gray-600 text-sm">Automated monitoring triggers incidents within 40 seconds of issues</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Smart Escalation</h4>
                      <p className="text-gray-600 text-sm">Right people alerted immediately with automatic escalation rules</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MessageCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Centralized Communication</h4>
                      <p className="text-gray-600 text-sm">All team coordination happens in one place with real-time updates</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <TrendingUp className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Continuous Improvement</h4>
                      <p className="text-gray-600 text-sm">Automated post-incident analysis helps prevent future occurrences</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cost Impact */}
            <div className="bg-yellow-50 rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">The True Cost of Poor Incident Response</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">$5,600</div>
                  <div className="text-gray-600">Cost per minute of downtime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">4.5 hours</div>
                  <div className="text-gray-600">Average time to resolve without system</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">89%</div>
                  <div className="text-gray-600">Of incidents could be prevented with better processes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">60%</div>
                  <div className="text-gray-600">Faster resolution with proper incident management</div>
                </div>
              </div>
            </div>

            {/* KloudFox Solution */}
            <div className="bg-gradient-to-r from-gray-50 to-red-50 rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Transform Chaos into Coordinated Response</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <AlertTriangle className="h-6 w-6 text-red-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Automated Incident Detection</h3>
                      <p className="text-gray-600">Monitoring automatically creates incidents when issues are detected, no manual intervention required.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Users className="h-6 w-6 text-red-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Smart Escalation Workflows</h3>
                      <p className="text-gray-600">Define escalation rules that automatically notify the right team members based on severity and time.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MessageCircle className="h-6 w-6 text-red-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Real-time Collaboration</h3>
                      <p className="text-gray-600">Coordinate response efforts with built-in chat, task assignment, and progress tracking.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-red-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Timeline Documentation</h3>
                      <p className="text-gray-600">Automatically track incident timeline with all actions, communications, and resolution steps.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FileText className="h-6 w-6 text-red-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Post-Incident Analysis</h3>
                      <p className="text-gray-600">Generate detailed post-mortems with recommendations to prevent similar incidents.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Shield className="h-6 w-6 text-red-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Integration Ecosystem</h3>
                      <p className="text-gray-600">Connect with Slack, PagerDuty, Jira, and 50+ other tools your team already uses.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-12 text-center">Complete Incident Lifecycle Management</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Automated Incident Creation",
                    description: "Monitoring automatically creates incidents when issues are detected, ensuring nothing falls through the cracks."
                  },
                  {
                    title: "Smart Alert Routing",
                    description: "Route alerts to the right team members based on service, severity, time of day, and on-call schedules."
                  },
                  {
                    title: "Escalation Management",
                    description: "Define escalation rules that automatically escalate incidents if not acknowledged within specified timeframes."
                  },
                  {
                    title: "Team Coordination Hub",
                    description: "Central command center where team members collaborate, share updates, and coordinate response efforts."
                  },
                  {
                    title: "Status Page Integration",
                    description: "Automatically update your status page when incidents occur and keep customers informed of progress."
                  },
                  {
                    title: "Timeline Documentation",
                    description: "Automatically track every action, communication, and decision made during incident response."
                  },
                  {
                    title: "Multi-channel Notifications",
                    description: "Send alerts via email, SMS, phone calls, Slack, Teams, and other communication channels."
                  },
                  {
                    title: "Post-Incident Reports",
                    description: "Generate comprehensive post-mortems with timelines, impact analysis, and improvement recommendations."
                  },
                  {
                    title: "On-call Scheduling",
                    description: "Manage on-call rotations and ensure the right person is always available to respond to incidents."
                  }
                ].map((feature, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ROI Section */}
            <div className="bg-green-50 rounded-2xl p-8 mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-6">Incident Management ROI Calculator</h2>
                <p className="text-xl text-gray-600">
                  See how much money proper incident management can save your business.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">$25,200</div>
                  <div className="text-gray-600 mb-4">Cost of 4.5-hour outage without proper incident management</div>
                  <div className="text-sm text-gray-500">Based on $5,600/hour downtime cost</div>
                </div>
                
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">$10,080</div>
                  <div className="text-gray-600 mb-4">Cost of same incident with KloudFox (1.8 hours)</div>
                  <div className="text-sm text-gray-500">60% faster resolution time</div>
                </div>
                
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">$15,120</div>
                  <div className="text-gray-600 mb-4">Money saved per incident</div>
                  <div className="text-sm text-gray-500">ROI: 52x the monthly KloudFox cost</div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-red-600 text-white rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Stop Letting Incidents Destroy Your Business</h2>
              <p className="text-xl mb-8 opacity-90">
                Transform your incident response from reactive chaos to proactive precision with KloudFox.
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
                  className="bg-white text-red-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
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
