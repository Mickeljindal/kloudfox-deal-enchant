
import { Smartphone, Download, Bell, Zap } from "lucide-react";
import { Button } from "./ui/button";

const MobileAppSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Monitor On The Go</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Never miss an outage again with our powerful mobile apps. Get instant notifications wherever you are.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">Get Instant Alerts On Your Phone</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4 mt-1">
                  <Bell className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Real-time Push Notifications</h4>
                  <p className="text-gray-600">Receive instant alerts when your website goes down, wherever you are.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4 mt-1">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Quick Status Overview</h4>
                  <p className="text-gray-600">Check all your monitors status at a glance with our intuitive mobile interface.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4 mt-1">
                  <Smartphone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Manage Anywhere</h4>
                  <p className="text-gray-600">Add, edit, and pause monitors directly from your mobile device.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg flex items-center justify-center"
              >
                <a href="https://apps.apple.com/in/app/kloudfox/id6560116168" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  Download on App Store
                </a>
              </Button>
              
              <Button 
                asChild
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center justify-center"
              >
                <a href="https://play.google.com/store/apps/details?id=com.kloudfox" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  Get it on Google Play
                </a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center">
            <img 
              src="https://kloudfox.com/wp-content/uploads/2024/07/Group-427318064-2-634x650.png" 
              alt="KloudFox Mobile Apps" 
              className="max-w-md w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppSection;
