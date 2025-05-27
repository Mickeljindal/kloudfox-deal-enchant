
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">About KloudFox</h1>
            
            <div className="prose prose-lg max-w-none">
              <div className="text-center mb-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">5</div>
                    <div className="text-gray-600">Monitoring Websites</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">99%</div>
                    <div className="text-gray-600">Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">250%</div>
                    <div className="text-gray-600">Increase in Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">365</div>
                    <div className="text-gray-600">Award-winning Support</div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-center">Our Mission</h2>
              <p className="text-xl text-gray-600 mb-8 text-center max-w-3xl mx-auto">
                At KloudFox.com, our team is dedicated to providing exceptional services that enable organizations to succeed in the digital world. We lead the way in ensuring outstanding website performance.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                <div className="bg-blue-900 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Status Page</h3>
                  <p className="text-blue-200">
                    The comprehensive incident management platform for communicating updates to both private and public audiences.
                  </p>
                </div>
                
                <div className="bg-blue-900 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">API Monitoring</h3>
                  <p className="text-blue-200">
                    Effortlessly monitor APIs in real-time with our powerful API monitoring solution. Ensure optimal performance.
                  </p>
                </div>
                
                <div className="bg-blue-900 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Website Monitoring</h3>
                  <p className="text-blue-200">
                    Set up advanced uptime monitoring checks effortlessly. Detect downtime, optimize performance for a seamless user experience.
                  </p>
                </div>
                
                <div className="bg-blue-900 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Incident Management</h3>
                  <p className="text-blue-200">
                    Streamline incident management. Access all the global data you require and collaborate with your colleagues to resolve any incident.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-12 mb-6">Why KloudFox?</h2>
              <p className="mb-6">
                KloudFox is a comprehensive website monitoring solution designed to keep your online presence running smoothly 24/7. We understand that every minute of downtime can cost your business money and damage your reputation.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">Our Story</h3>
              <p className="mb-6">
                Founded as part of the KloudBean family of companies, KloudFox was created to solve the critical problem of website downtime detection. We noticed that many businesses were losing customers and revenue because they didn't know their websites were down until it was too late.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">What We Offer</h3>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>Real-time website monitoring with 40-second check intervals</li>
                <li>Multi-location monitoring from 4 continents</li>
                <li>SSL certificate monitoring with expiration alerts</li>
                <li>Professional status pages for customer communication</li>
                <li>Incident management and team collaboration tools</li>
                <li>Mobile apps for iOS and Android</li>
                <li>Comprehensive alerting via email, SMS, Slack, and more</li>
              </ul>

              <h3 className="text-xl font-bold mt-8 mb-4">Our Commitment</h3>
              <p className="mb-6">
                We're committed to providing reliable, easy-to-use monitoring tools that help businesses of all sizes maintain their online presence. Our goal is to be the early warning system that prevents costly downtime and keeps your customers happy.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
                <h3 className="text-xl font-bold mb-4">Ready to Protect Your Website?</h3>
                <p className="mb-4">Join thousands of businesses that trust KloudFox to monitor their websites 24/7.</p>
                <a 
                  href="https://watch.kloudfox.com/register" 
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors inline-block"
                >
                  Start Free Trial
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

export default About;
