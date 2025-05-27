
const StatusPage = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Status Pages</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Build trust with your customers by providing transparent, real-time updates about your service availability and performance.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Why Status Pages Are Essential</h2>
            <p className="mb-6">
              When your service experiences issues, customers want to know what's happening. A professional status page keeps them informed, reduces support tickets, and maintains trust during incidents.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Features</h2>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Real-time service status updates</li>
              <li>Incident management and communication</li>
              <li>Historical uptime data and reports</li>
              <li>Customizable branding and design</li>
              <li>Subscriber notifications for status updates</li>
              <li>Mobile-responsive design</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Build Customer Confidence</h2>
            <p className="mb-6">
              Professional status pages show that you're transparent about your service quality and committed to keeping customers informed. This builds trust and reduces churn during incidents.
            </p>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-bold mb-4">Create Your Status Page</h3>
              <p className="mb-4">Build a professional status page that keeps your customers informed and builds trust.</p>
              <a 
                href="https://watch.kloudfox.com/register" 
                className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition-colors inline-block"
              >
                Create Status Page
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusPage;
