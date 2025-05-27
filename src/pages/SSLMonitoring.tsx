
const SSLMonitoring = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">SSL Monitoring</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Protect your website's security and SEO rankings with comprehensive SSL certificate monitoring that prevents expired certificates.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">SSL Certificate Security</h2>
            <p className="mb-6">
              Expired SSL certificates can cause your website to show security warnings, hurt your SEO rankings, and lose customer trust. Don't let certificate expiration catch you off guard.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Monitoring Features</h2>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>SSL certificate expiration monitoring</li>
              <li>Certificate chain validation</li>
              <li>Mixed content detection</li>
              <li>Certificate authority verification</li>
              <li>Early warning alerts before expiration</li>
              <li>Multiple domain monitoring</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Stay Secure and Trusted</h2>
            <p className="mb-6">
              Maintain your website's security posture and customer trust with automated SSL monitoring that alerts you well before certificates expire, giving you time to renew them.
            </p>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-bold mb-4">Secure Your Website</h3>
              <p className="mb-4">Never let an SSL certificate expire again with automated monitoring.</p>
              <a 
                href="https://watch.kloudfox.com/register" 
                className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition-colors inline-block"
              >
                Monitor SSL Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SSLMonitoring;
