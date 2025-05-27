
const IncidentManagement = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Incident Management</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Streamline your incident response process with KloudFox's comprehensive incident management system that helps you resolve issues faster.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Rapid Incident Response</h2>
            <p className="mb-6">
              When incidents occur, every second counts. Our incident management system helps you detect, respond to, and resolve issues quickly to minimize impact on your business and customers.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Key Capabilities</h2>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Automated incident detection and alerting</li>
              <li>Escalation procedures and on-call management</li>
              <li>Real-time collaboration tools for team coordination</li>
              <li>Incident timeline tracking and documentation</li>
              <li>Post-incident analysis and reporting</li>
              <li>Integration with popular communication tools</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Minimize Business Impact</h2>
            <p className="mb-6">
              Effective incident management reduces mean time to resolution (MTTR), prevents minor issues from becoming major outages, and helps maintain customer satisfaction during service disruptions.
            </p>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-bold mb-4">Improve Your Incident Response</h3>
              <p className="mb-4">Get better at handling incidents and reduce their impact on your business.</p>
              <a 
                href="https://watch.kloudfox.com/register" 
                className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors inline-block"
              >
                Start Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncidentManagement;
