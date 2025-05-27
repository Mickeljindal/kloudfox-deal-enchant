
const ServerMonitoring = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Server Monitoring</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Keep your servers running smoothly with comprehensive server monitoring that tracks performance, resource usage, and system health.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Complete Server Visibility</h2>
            <p className="mb-6">
              Server downtime can cost businesses thousands of dollars per hour. With KloudFox server monitoring, you get complete visibility into your infrastructure before problems become critical failures.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Monitoring Capabilities</h2>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>CPU, memory, and disk usage monitoring</li>
              <li>Network performance and bandwidth tracking</li>
              <li>Service and process monitoring</li>
              <li>Log file monitoring and analysis</li>
              <li>Database performance monitoring</li>
              <li>Custom metric tracking with API integration</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Proactive Problem Detection</h2>
            <p className="mb-6">
              Our intelligent monitoring system detects anomalies and potential issues before they cause outages, helping you maintain optimal server performance and prevent costly downtime.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-bold mb-4">Protect Your Infrastructure</h3>
              <p className="mb-4">Start monitoring your servers today and prevent costly downtime.</p>
              <a 
                href="https://watch.kloudfox.com/register" 
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors inline-block"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerMonitoring;
