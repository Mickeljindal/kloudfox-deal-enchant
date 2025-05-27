
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, AlertTriangle, Lock, Search, Clock, CheckCircle, Globe, TrendingDown } from "lucide-react";

const SSLMonitoring = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">SSL Certificate Monitoring</h1>
            <p className="text-xl mb-8 opacity-90">
              Protect your website's security, SEO rankings, and customer trust with comprehensive SSL certificate monitoring.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">256-bit</div>
                <div className="text-sm opacity-80">Encryption Monitoring</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">30-day</div>
                <div className="text-sm opacity-80">Early Warnings</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">Auto</div>
                <div className="text-sm opacity-80">Certificate Validation</div>
              </div>
            </div>
            <a 
              href="https://watch.kloudfox.com/register" 
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors inline-block"
            >
              Secure Your Site
            </a>
          </div>
        </div>
      </div>

      <div className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Problem Section */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">The SSL Certificate Disaster That's Waiting to Happen</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Expired SSL certificates don't just show scary browser warnings - they can destroy your SEO rankings overnight and cost you thousands in lost customers.
              </p>
            </div>

            {/* Consequences Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <div className="text-xl font-bold text-red-600 mb-2">Browser Warnings</div>
                <div className="text-sm text-gray-600">Customers see scary "Not Secure" warnings</div>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 text-center">
                <TrendingDown className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <div className="text-xl font-bold text-orange-600 mb-2">SEO Penalty</div>
                <div className="text-sm text-gray-600">Google demotes sites with SSL issues</div>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
                <Search className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <div className="text-xl font-bold text-yellow-600 mb-2">Trust Loss</div>
                <div className="text-sm text-gray-600">84% leave sites with SSL warnings</div>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 text-center">
                <Globe className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <div className="text-xl font-bold text-purple-600 mb-2">Revenue Impact</div>
                <div className="text-sm text-gray-600">Up to 40% drop in conversions</div>
              </div>
            </div>

            {/* Real Stories */}
            <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-8 mb-16">
              <h3 className="text-2xl font-bold text-red-700 mb-4">Real SSL Certificate Disasters</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-bold mb-2">E-commerce Site Lost $50,000 in One Weekend</h4>
                  <p className="text-gray-600 text-sm">SSL certificate expired on Friday night. Customers couldn't complete purchases due to browser warnings. Lost entire weekend of Black Friday sales.</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-bold mb-2">SaaS Company Dropped 3 Pages in Google</h4>
                  <p className="text-gray-600 text-sm">Mixed content warnings from expired SSL caused Google to penalize their main landing pages. Took 6 months to recover rankings.</p>
                </div>
              </div>
            </div>

            {/* KloudFox Solution */}
            <div className="bg-gradient-to-r from-gray-50 to-orange-50 rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">How KloudFox Prevents SSL Disasters</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-orange-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">30-Day Early Warning System</h3>
                      <p className="text-gray-600">Get alerts 30, 14, 7, and 1 day before expiration - never be caught off guard again.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Shield className="h-6 w-6 text-orange-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Complete Certificate Chain Validation</h3>
                      <p className="text-gray-600">We check every link in your SSL chain to ensure bulletproof security.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Search className="h-6 w-6 text-orange-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Mixed Content Detection</h3>
                      <p className="text-gray-600">Automatically detect insecure content that could trigger browser warnings.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-orange-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Certificate Authority Verification</h3>
                      <p className="text-gray-600">Ensure your certificates are issued by trusted authorities and properly configured.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Globe className="h-6 w-6 text-orange-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Multi-Domain Monitoring</h3>
                      <p className="text-gray-600">Monitor SSL certificates across all your domains and subdomains from one dashboard.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Lock className="h-6 w-6 text-orange-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">Encryption Strength Analysis</h3>
                      <p className="text-gray-600">Monitor encryption protocols and cipher suites to ensure maximum security.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-12 text-center">Comprehensive SSL Security Monitoring</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Certificate Expiration Monitoring",
                    description: "Get multi-stage alerts starting 30 days before expiration to ensure you never miss a renewal deadline."
                  },
                  {
                    title: "Certificate Chain Validation",
                    description: "Verify the complete certificate chain from root to leaf to ensure proper SSL implementation."
                  },
                  {
                    title: "Mixed Content Detection",
                    description: "Automatically scan for insecure HTTP content on HTTPS pages that could trigger security warnings."
                  },
                  {
                    title: "Certificate Authority Monitoring",
                    description: "Verify certificates are issued by trusted CAs and detect any unauthorized certificate changes."
                  },
                  {
                    title: "Protocol & Cipher Analysis",
                    description: "Monitor SSL/TLS protocols and cipher suites to ensure you're using the strongest encryption available."
                  },
                  {
                    title: "Multi-Domain Coverage",
                    description: "Monitor SSL certificates across unlimited domains and subdomains from a single dashboard."
                  },
                  {
                    title: "Certificate Transparency Logs",
                    description: "Monitor Certificate Transparency logs to detect unauthorized certificates issued for your domains."
                  },
                  {
                    title: "HSTS Monitoring",
                    description: "Verify HTTP Strict Transport Security (HSTS) headers are properly configured for maximum security."
                  },
                  {
                    title: "Revocation Status Checking",
                    description: "Monitor OCSP and CRL responses to ensure certificates haven't been revoked or compromised."
                  }
                ].map((feature, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ROI Calculator */}
            <div className="bg-green-50 rounded-2xl p-8 mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-6">The Cost of NOT Monitoring Your SSL Certificates</h2>
                <p className="text-xl text-gray-600">
                  A single expired certificate incident could cost more than years of monitoring.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">$2,500</div>
                  <div className="text-gray-600 mb-4">Average cost of one day of SSL-related downtime</div>
                  <div className="text-sm text-gray-500">Based on lost revenue and emergency SSL replacement</div>
                </div>
                
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">6 months</div>
                  <div className="text-gray-600 mb-4">Time to recover Google rankings after SSL penalty</div>
                  <div className="text-sm text-gray-500">SEO recovery time from SSL-related trust issues</div>
                </div>
                
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">$29/month</div>
                  <div className="text-gray-600 mb-4">KloudFox SSL monitoring cost</div>
                  <div className="text-sm text-gray-500">Prevent disasters for less than $1 per day</div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-orange-600 text-white rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Don't Let SSL Issues Destroy Your Business</h2>
              <p className="text-xl mb-8 opacity-90">
                Start monitoring your SSL certificates today and never worry about expiration disasters again.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://watch.kloudfox.com/register" 
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
                >
                  Start Free Trial
                </a>
                <a 
                  href="/pricing" 
                  className="bg-white text-orange-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
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

export default SSLMonitoring;
