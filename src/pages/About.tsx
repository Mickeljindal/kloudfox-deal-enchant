
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Globe, Clock, Users, CheckCircle, TrendingUp, Award, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About KloudFox</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We're on a mission to eliminate website downtime and protect businesses from losing customers due to undetected outages.
            </p>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/b5c94c8f-8b5c-4d46-89bb-c353f06e28ca.png" 
                alt="KloudFox Logo" 
                className="h-16"
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
                <div className="text-gray-600">Websites Monitored</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
                <div className="text-gray-600">Uptime Guarantee</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl font-bold text-orange-600 mb-2">40s</div>
                <div className="text-gray-600">Check Intervals</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-gray-600">Expert Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Mission & Vision</h2>
              
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To provide the most reliable, affordable, and comprehensive website monitoring solution that helps businesses of all sizes prevent costly downtime and maintain their online reputation.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Globe className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To become the global leader in website monitoring, where no business ever loses a customer due to undetected website issues or downtime.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-16">
                <h3 className="text-2xl font-bold text-center mb-6">Why KloudFox Was Created</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  KloudFox was born from a simple but critical observation: <strong>75% of businesses experience website outages they never detect</strong>, costing them an average of <strong>$12,000+ per incident</strong> in lost revenue.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  As part of the KloudBean family, we witnessed countless businesses losing customers, revenue, and reputation simply because they didn't know their websites were down. Traditional monitoring solutions were either too expensive, too complex, or missed critical regional outages.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  That's why we created KloudFox - to be the early warning system that prevents these disasters, ensuring businesses never lose customers to problems they could have fixed if they only knew about them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Value Propositions */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose KloudFox</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-4">Lightning Fast Detection</h3>
                <p className="text-gray-600">40-second check intervals mean we detect issues before your customers do, giving you time to fix problems instantly.</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <Globe className="h-12 w-12 text-green-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-4">Global Coverage</h3>
                <p className="text-gray-600">Monitor from 4 continents to catch regional outages that single-location tools miss completely.</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <CheckCircle className="h-12 w-12 text-purple-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-4">Complete Protection</h3>
                <p className="text-gray-600">Website monitoring, SSL certificate tracking, status pages, and incident management all in one platform.</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <TrendingUp className="h-12 w-12 text-orange-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-4">ROI Guarantee</h3>
                <p className="text-gray-600">KloudFox pays for itself 80X over with just one prevented outage. Stop losing $12,000+ per incident.</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <Users className="h-12 w-12 text-red-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-4">Expert Support</h3>
                <p className="text-gray-600">24/7 support from monitoring experts who understand the critical nature of website uptime.</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <Award className="h-12 w-12 text-yellow-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-4">Proven Results</h3>
                <p className="text-gray-600">Trusted by 10,000+ websites worldwide with 99.9% uptime detection accuracy.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Comprehensive Services</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 rounded-xl">
                <Zap className="h-8 w-8 mb-4" />
                <h3 className="text-xl font-bold mb-4">Website Monitoring</h3>
                <p className="text-blue-100 text-sm">
                  Real-time uptime monitoring with 40-second intervals. Detect downtime instantly before customers notice.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-600 to-green-800 text-white p-6 rounded-xl">
                <Shield className="h-8 w-8 mb-4" />
                <h3 className="text-xl font-bold mb-4">SSL Monitoring</h3>
                <p className="text-green-100 text-sm">
                  Prevent security warnings and SEO penalties with automated SSL certificate expiration monitoring.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white p-6 rounded-xl">
                <Globe className="h-8 w-8 mb-4" />
                <h3 className="text-xl font-bold mb-4">Status Pages</h3>
                <p className="text-purple-100 text-sm">
                  Professional status pages to keep customers informed during maintenance and incidents.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-600 to-orange-800 text-white p-6 rounded-xl">
                <Users className="h-8 w-8 mb-4" />
                <h3 className="text-xl font-bold mb-4">Incident Management</h3>
                <p className="text-orange-100 text-sm">
                  Streamlined incident management with team collaboration and automated notifications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Info */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Part of the KloudBean Family</h2>
              <p className="text-xl text-gray-300 mb-8">
                KloudFox is proudly developed by KloudBean, a leading provider of managed cloud infrastructure and hosting solutions trusted by thousands of businesses worldwide.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div>
                  <h3 className="text-xl font-bold mb-4">Founded</h3>
                  <p className="text-gray-300">2020</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Headquarters</h3>
                  <p className="text-gray-300">Global Operations</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Mission</h3>
                  <p className="text-gray-300">Zero Downtime for All</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Protect Your Website?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join 10,000+ websites that trust KloudFox to monitor their uptime 24/7. 
              Get the peace of mind that comes with knowing your website is always protected.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://watch.kloudfox.com/register"
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
              </a>
              <a 
                href="https://watch.kloudfox.com/login"
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-3 rounded-lg font-bold hover:bg-white/20 transition-colors"
              >
                Login to Dashboard
              </a>
            </div>
            <p className="mt-4 text-sm opacity-90">60 Days Money Back Guarantee • No Setup Fees</p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
