
import { Server, Globe, Zap, Shield, Database } from "lucide-react";
import { Button } from "./ui/button";

const KloudBeanSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            <span className="text-kloudfox-blue">KloudBean.com</span>: Your Complete Managed Cloud Hosting Solution
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            While competitors struggle with complex server setups and technical headaches, smart business owners are switching to KloudBean for hassle-free managed cloud hosting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="bg-red-50 text-red-700 inline-block py-1 px-4 rounded-full font-medium text-sm mb-6">
              THE PROBLEM
            </div>
            <h3 className="text-3xl font-bold mb-6">Your Current Hosting Is Costing You Thousands In Hidden Ways</h3>
            <div className="space-y-5">
              <div className="flex items-start">
                <div className="bg-red-100 p-2 rounded-full mt-1 mr-4">
                  <span className="text-red-600 font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Technical Complexity Nightmare</h4>
                  <p className="text-gray-600">Your team wastes 20+ hours monthly wrestling with server configurations instead of growing your business.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-100 p-2 rounded-full mt-1 mr-4">
                  <span className="text-red-600 font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Slow Loading = Lost Customers</h4>
                  <p className="text-gray-600">Every 1-second delay in page load time results in 7% fewer conversions, costing you thousands in lost revenue.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-100 p-2 rounded-full mt-1 mr-4">
                  <span className="text-red-600 font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Scaling Panic Situations</h4>
                  <p className="text-gray-600">When traffic spikes hit your site, your current hosting crashes at the worst possible moment—right when you're making the most sales.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="/lovable-uploads/1ef489f5-a13b-456d-a08f-d31c31021171.png" 
              alt="KloudBean Simple Setup Interface" 
              className="rounded-lg shadow-xl border border-blue-100 z-10 relative"
            />
            <div className="absolute -bottom-6 -right-6 bg-yellow-50 border border-yellow-200 p-4 rounded-lg shadow-lg max-w-xs z-20">
              <p className="text-sm font-medium text-yellow-800">
                "Our site used to crash every Black Friday until we switched to KloudBean. Last sale, we handled 43,000 visitors without a single issue!"
              </p>
              <p className="text-xs mt-2 font-bold">— Michael T., eCommerce Store Owner</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
          <div className="text-center mb-10">
            <div className="bg-green-50 text-green-700 inline-block py-1 px-4 rounded-full font-medium text-sm mb-4">
              THE SOLUTION
            </div>
            <h3 className="text-3xl font-bold mb-4">KloudBean Managed Cloud Hosting Eliminates These Problems Instantly</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Launch faster, scale effortlessly, and never worry about server management again.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
              <Server className="h-10 w-10 text-kloudfox-lightBlue mb-4" />
              <h4 className="text-xl font-bold mb-2">Zero Technical Headaches</h4>
              <p className="text-gray-600">Our team handles 100% of server management, updates, and security patches so you can focus on your business.</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
              <Zap className="h-10 w-10 text-kloudfox-lightBlue mb-4" />
              <h4 className="text-xl font-bold mb-2">Lightning-Fast Loading</h4>
              <p className="text-gray-600">Premium servers and advanced caching increase your page speed by 300%, bringing back customers who abandoned slow sites.</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
              <Globe className="h-10 w-10 text-kloudfox-lightBlue mb-4" />
              <h4 className="text-xl font-bold mb-2">Automatic Scaling</h4>
              <p className="text-gray-600">Your site automatically scales during traffic spikes, so you never lose a sale during high-traffic events.</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
              <Shield className="h-10 w-10 text-kloudfox-lightBlue mb-4" />
              <h4 className="text-xl font-bold mb-2">Enterprise Security</h4>
              <p className="text-gray-600">Advanced firewalls and malware protection keep hackers out while your competitors' sites get compromised.</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
              <Database className="h-10 w-10 text-kloudfox-lightBlue mb-4" />
              <h4 className="text-xl font-bold mb-2">Automatic Backups</h4>
              <p className="text-gray-600">Never lose your data with daily automated backups and one-click restoration, unlike competitors who charge extra.</p>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
              <div className="font-bold text-xl mb-2 text-kloudfox-orange">BONUS: Static Hosting</div>
              <h4 className="text-xl font-bold mb-2">Ultra-Fast Static Sites</h4>
              <p className="text-gray-600">Launch blazing-fast static sites on our global CDN network in seconds—perfect for landing pages that convert.</p>
              <p className="text-sm font-bold mt-4 text-kloudfox-orange">FREE with any KloudBean plan!</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-kloudfox-lightBlue/10 rounded-xl p-6 max-w-2xl mx-auto mb-8">
              <h4 className="font-bold text-xl mb-2">Limited Launch Special: Save 73%</h4>
              <p className="text-gray-600 mb-4">Get enterprise-level hosting at a fraction of what you're paying now. This offer disappears when slots fill up.</p>
              <div className="flex justify-center items-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl line-through text-gray-400">$97/mo</div>
                  <div className="text-4xl font-bold text-green-600">$27/mo</div>
                </div>
                <div>
                  <div className="bg-yellow-300 rounded-full font-bold text-center py-2 px-4 rotate-6 mb-2">
                    Only 19 slots left!
                  </div>
                </div>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-kloudfox-orange to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-6 px-8 rounded-lg text-xl shadow-lg hover:shadow-xl transition-all animate-pulse-scale">
              Secure Your KloudBean Hosting Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KloudBeanSection;
