import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, XCircle, Minus } from "lucide-react";

const competitors = [
  {
    name: "KloudFox",
    isUs: true,
    features: {
      aiAnomaly: true,
      predictive: true,
      gpu: true,
      checkInterval: "40s",
      price: "$$",
      globalNodes: true,
    }
  },
  {
    name: "Pingdom",
    isUs: false,
    features: {
      aiAnomaly: false,
      predictive: false,
      gpu: false,
      checkInterval: "60s",
      price: "$$$",
      globalNodes: true,
    }
  },
  {
    name: "UptimeRobot",
    isUs: false,
    features: {
      aiAnomaly: false,
      predictive: false,
      gpu: false,
      checkInterval: "60s",
      price: "$",
      globalNodes: true,
    }
  },
  {
    name: "Datadog",
    isUs: false,
    features: {
      aiAnomaly: "partial",
      predictive: false,
      gpu: false,
      checkInterval: "60s",
      price: "$$$$",
      globalNodes: true,
    }
  },
  {
    name: "New Relic",
    isUs: false,
    features: {
      aiAnomaly: "partial",
      predictive: false,
      gpu: false,
      checkInterval: "60s",
      price: "$$$$",
      globalNodes: true,
    }
  }
];

const FeatureIcon = ({ value }: { value: boolean | string }) => {
  if (value === true) return <CheckCircle className="w-5 h-5 text-green-400" />;
  if (value === false) return <XCircle className="w-5 h-5 text-red-400" />;
  if (value === "partial") return <Minus className="w-5 h-5 text-yellow-400" />;
  return <span className="text-sm text-gray-300">{value}</span>;
};

const CompetitorSlide = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full font-medium text-sm mb-4">
            COMPETITIVE LANDSCAPE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why <span className="text-orange-400">KloudFox Wins</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The only monitoring platform with true AI-powered predictive capabilities
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full max-w-6xl mx-auto">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-4 px-4 text-gray-400 font-medium">Feature</th>
                {competitors.map((comp) => (
                  <th 
                    key={comp.name} 
                    className={`py-4 px-4 text-center ${comp.isUs ? 'bg-purple-900/30 rounded-t-lg' : ''}`}
                  >
                    <span className={comp.isUs ? 'text-purple-400 font-bold' : 'text-gray-300'}>
                      {comp.name}
                    </span>
                    {comp.isUs && (
                      <span className="block text-xs text-green-400 mt-1">★ US</span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800">
                <td className="py-4 px-4 text-gray-300">AI Anomaly Detection</td>
                {competitors.map((comp) => (
                  <td 
                    key={comp.name} 
                    className={`py-4 px-4 text-center ${comp.isUs ? 'bg-purple-900/20' : ''}`}
                  >
                    <div className="flex justify-center">
                      <FeatureIcon value={comp.features.aiAnomaly} />
                    </div>
                  </td>
                ))}
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-4 px-4 text-gray-300">Predictive Failure Analysis</td>
                {competitors.map((comp) => (
                  <td 
                    key={comp.name} 
                    className={`py-4 px-4 text-center ${comp.isUs ? 'bg-purple-900/20' : ''}`}
                  >
                    <div className="flex justify-center">
                      <FeatureIcon value={comp.features.predictive} />
                    </div>
                  </td>
                ))}
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-4 px-4 text-gray-300">GPU-Accelerated ML</td>
                {competitors.map((comp) => (
                  <td 
                    key={comp.name} 
                    className={`py-4 px-4 text-center ${comp.isUs ? 'bg-purple-900/20' : ''}`}
                  >
                    <div className="flex justify-center">
                      <FeatureIcon value={comp.features.gpu} />
                    </div>
                  </td>
                ))}
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-4 px-4 text-gray-300">Check Interval</td>
                {competitors.map((comp) => (
                  <td 
                    key={comp.name} 
                    className={`py-4 px-4 text-center ${comp.isUs ? 'bg-purple-900/20' : ''}`}
                  >
                    <span className={`text-sm ${comp.features.checkInterval === '40s' ? 'text-green-400 font-bold' : 'text-gray-400'}`}>
                      {comp.features.checkInterval}
                    </span>
                  </td>
                ))}
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-4 px-4 text-gray-300">Pricing</td>
                {competitors.map((comp) => (
                  <td 
                    key={comp.name} 
                    className={`py-4 px-4 text-center ${comp.isUs ? 'bg-purple-900/20' : ''}`}
                  >
                    <span className="text-sm text-gray-400">{comp.features.price}</span>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-4 px-4 text-gray-300">Global Monitoring Nodes</td>
                {competitors.map((comp) => (
                  <td 
                    key={comp.name} 
                    className={`py-4 px-4 text-center ${comp.isUs ? 'bg-purple-900/20 rounded-b-lg' : ''}`}
                  >
                    <div className="flex justify-center">
                      <FeatureIcon value={comp.features.globalNodes} />
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">10x</div>
              <p className="text-gray-400 text-sm">Faster anomaly detection than legacy tools</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">90%</div>
              <p className="text-gray-400 text-sm">Reduction in false positives with ML</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">50%</div>
              <p className="text-gray-400 text-sm">Lower cost than enterprise alternatives</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CompetitorSlide;
