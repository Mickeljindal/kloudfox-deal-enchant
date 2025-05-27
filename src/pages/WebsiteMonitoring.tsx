import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WebsiteMonitoring = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Website Monitoring</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                Monitor your website's uptime, performance, and availability 24/7 with KloudFox's advanced website monitoring solution.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Why Website Monitoring Matters</h2>
              <p className="mb-6">
                Every minute your website is down, you're losing potential customers and revenue. Studies show that even a 1-second delay in page load time can reduce conversions by 7%. Don't let technical issues hurt your business.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Key Features</h2>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>Real-time uptime monitoring from multiple global locations</li>
                <li>Performance monitoring with detailed response time metrics</li>
                <li>SSL certificate monitoring and expiration alerts</li>
                <li>Content monitoring to detect unauthorized changes</li>
                <li>Instant alerts via email, SMS, and mobile push notifications</li>
                <li>Comprehensive uptime reports and analytics</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">Benefits</h2>
              <p className="mb-6">
                With KloudFox website monitoring, you'll be the first to know when something goes wrong, allowing you to fix issues before they impact your customers and business revenue.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
                <h3 className="text-xl font-bold mb-4">Ready to protect your website?</h3>
                <p className="mb-4">Get started with KloudFox website monitoring today and ensure your site stays online 24/7.</p>
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

export default WebsiteMonitoring;
