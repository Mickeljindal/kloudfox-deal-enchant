import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, DollarSign, Target } from "lucide-react";

const projections = [
  { year: "2024", arr: "$50K", users: "3K", mrr: "$4K" },
  { year: "2025", arr: "$500K", users: "25K", mrr: "$42K" },
  { year: "2026", arr: "$2M", users: "100K", mrr: "$167K" },
  { year: "2027", arr: "$8M", users: "400K", mrr: "$667K" },
  { year: "2028", arr: "$25M", users: "1M+", mrr: "$2.1M" },
];

const RevenueProjectionsSlide = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-green-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-green-500/20 text-green-400 px-4 py-2 rounded-full font-medium text-sm mb-4">
            FINANCIAL PROJECTIONS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            5-Year <span className="text-green-400">Growth Trajectory</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Conservative projections based on market penetration and product roadmap
          </p>
        </div>

        {/* Revenue Chart Visualization */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-8 text-center">Annual Recurring Revenue (ARR)</h3>
            <div className="flex items-end justify-between gap-4 h-64">
              {projections.map((proj, index) => {
                const heights = [10, 20, 40, 64, 100]; // percentage heights
                return (
                  <div key={proj.year} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full bg-gradient-to-t from-green-600 to-green-400 rounded-t-lg transition-all duration-500 relative group"
                      style={{ height: `${heights[index]}%` }}
                    >
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-green-400 font-bold text-sm md:text-base whitespace-nowrap">
                        {proj.arr}
                      </div>
                    </div>
                    <div className="mt-4 text-gray-400 font-medium">{proj.year}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-10 w-10 text-green-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">500%</div>
              <p className="text-gray-400 text-sm">YoY Growth Target</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6 text-center">
              <Users className="h-10 w-10 text-blue-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">1M+</div>
              <p className="text-gray-400 text-sm">Users by 2028</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6 text-center">
              <DollarSign className="h-10 w-10 text-yellow-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">$25M</div>
              <p className="text-gray-400 text-sm">ARR Target 2028</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6 text-center">
              <Target className="h-10 w-10 text-purple-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">0.7%</div>
              <p className="text-gray-400 text-sm">Target Market Share</p>
            </CardContent>
          </Card>
        </div>

        {/* Revenue Assumptions */}
        <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold mb-6 text-center">Key Assumptions</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3"></div>
                <div>
                  <span className="font-medium text-white">Average Revenue Per User:</span>
                  <span className="text-gray-400 ml-2">$25/month</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3"></div>
                <div>
                  <span className="font-medium text-white">Customer Churn:</span>
                  <span className="text-gray-400 ml-2">&lt;5% monthly</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3"></div>
                <div>
                  <span className="font-medium text-white">Free to Paid Conversion:</span>
                  <span className="text-gray-400 ml-2">8-12%</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></div>
                <div>
                  <span className="font-medium text-white">CAC Payback:</span>
                  <span className="text-gray-400 ml-2">3-4 months</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></div>
                <div>
                  <span className="font-medium text-white">Gross Margin:</span>
                  <span className="text-gray-400 ml-2">75-80%</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></div>
                <div>
                  <span className="font-medium text-white">LTV:CAC Ratio:</span>
                  <span className="text-gray-400 ml-2">5:1 target</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevenueProjectionsSlide;
