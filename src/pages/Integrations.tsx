
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Slack, Zap, Webhook, Smartphone, Mail, Bell } from "lucide-react";

const Integrations = () => {
  const integrations = [
    {
      name: "Slack",
      description: "Get alerts directly into your Slack workspace's channels. Stay informed with your team in real-time.",
      icon: <Slack className="h-12 w-12 text-purple-600" />,
      features: ["Real-time notifications", "Custom channel routing", "Rich message formatting", "Team collaboration"],
      status: "Available"
    },
    {
      name: "Zapier",
      description: "Integrate your Zapier account to get alerted right away and automate your workflow with 5000+ apps.",
      icon: <Zap className="h-12 w-12 text-orange-500" />,
      features: ["5000+ app integrations", "Automated workflows", "Custom triggers", "No-code automation"],
      status: "Available"
    },
    {
      name: "Webhooks",
      description: "Get an HTTP/HTTPS request when an incident happens. Perfect for custom integrations and automated responses.",
      icon: <Webhook className="h-12 w-12 text-blue-600" />,
      features: ["Custom HTTP requests", "Real-time data", "Flexible payload", "Automated responses"],
      status: "Available"
    },
    {
      name: "iOS App",
      description: "Get notifications on your iPhone or iPad with our native iOS application for instant mobile alerts.",
      icon: <Smartphone className="h-12 w-12 text-gray-800" />,
      features: ["Push notifications", "Native iOS experience", "Offline viewing", "Quick actions"],
      status: "Available"
    },
    {
      name: "Android App",
      description: "Get notifications on your Android smartphone with our native Android application.",
      icon: <Smartphone className="h-12 w-12 text-green-600" />,
      features: ["Push notifications", "Material Design", "Background sync", "Widget support"],
      status: "Available"
    },
    {
      name: "Email Alerts",
      description: "Receive detailed email notifications with comprehensive incident information and resolution steps.",
      icon: <Mail className="h-12 w-12 text-red-600" />,
      features: ["Detailed reports", "HTML formatting", "Attachment support", "Custom templates"],
      status: "Available"
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">KloudFox Integrations</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect KloudFox with your favorite tools and platforms. Get alerts exactly where you need them, when you need them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  {integration.icon}
                  <div className="ml-4">
                    <h3 className="text-xl font-bold">{integration.name}</h3>
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      {integration.status}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{integration.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-gray-800">Key Features:</h4>
                  <ul className="space-y-1">
                    {integration.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-12 text-center">
            <Bell className="h-16 w-16 text-orange-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Never Miss Another Incident</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              With KloudFox integrations, you'll be alerted instantly through your preferred channels. Whether you're in Slack, checking email, or on your phone, we'll make sure you know about issues before your customers do.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-lg mb-2">Multi-Channel Alerts</h3>
                <p className="text-gray-600 text-sm">Get notified via email, Slack, mobile push, webhooks, and more simultaneously.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-lg mb-2">Real-time Notifications</h3>
                <p className="text-gray-600 text-sm">Receive alerts within seconds of incident detection across all integrated platforms.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-lg mb-2">Custom Workflows</h3>
                <p className="text-gray-600 text-sm">Use Zapier to create automated responses and integrate with 5000+ business tools.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="https://watch.kloudfox.com/register" 
                className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors font-medium"
              >
                Start Free Trial
              </a>
              <a 
                href="https://appsumo.com/products/kloudfox/" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Get Lifetime Deal $29
              </a>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-center">Integration Setup Made Simple</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Sign Up</h3>
                <p className="text-sm text-gray-600">Create your KloudFox account and add your first monitor</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Choose Integration</h3>
                <p className="text-sm text-gray-600">Select your preferred notification channels from our integrations page</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Configure</h3>
                <p className="text-sm text-gray-600">Follow our simple setup guides to connect your tools in minutes</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 font-bold">4</span>
                </div>
                <h3 className="font-semibold mb-2">Stay Protected</h3>
                <p className="text-sm text-gray-600">Receive instant alerts and protect your website 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Integrations;
