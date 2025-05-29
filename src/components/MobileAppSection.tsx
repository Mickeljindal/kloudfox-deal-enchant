
import { Smartphone, Download, Bell, Zap } from "lucide-react";
import { Button } from "./ui/button";

const MobileAppSection = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Monitor On The Go</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Never miss an outage again with our powerful mobile apps. Get instant notifications wherever you are.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Get Instant Alerts On Your Phone</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4 mt-1 flex-shrink-0">
                  <Bell className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold mb-2">Real-time Push Notifications</h4>
                  <p className="text-gray-600">Receive instant alerts when your website goes down, wherever you are.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4 mt-1 flex-shrink-0">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold mb-2">Quick Status Overview</h4>
                  <p className="text-gray-600">Check all your monitors status at a glance with our intuitive mobile interface.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4 mt-1 flex-shrink-0">
                  <Smartphone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold mb-2">Manage Anywhere</h4>
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

          <div className="flex justify-center order-1 lg:order-2">
            <img 
              src="/lovable-uploads/b039a951-88d9-4e14-bfa6-f0fc079271d1.png" 
              alt="KloudFox Mobile Apps - Monitor your websites on iPhone, Apple Watch and mobile devices" 
              className="max-w-full w-full max-w-md md:max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppSection;
