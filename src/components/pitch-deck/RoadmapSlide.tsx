import { CheckCircle, Circle, Rocket, Brain, Globe, Shield, Zap, Users } from "lucide-react";

const roadmapPhases = [
  {
    phase: "Q1 2025",
    status: "current",
    title: "AI Foundation",
    items: [
      { text: "Enhanced anomaly detection algorithms", done: false },
      { text: "NVIDIA GPU integration for inference", done: false },
      { text: "Real-time pattern recognition", done: false },
    ],
    icon: Brain,
    color: "purple"
  },
  {
    phase: "Q2 2025",
    status: "upcoming",
    title: "Scale & Performance",
    items: [
      { text: "TensorRT optimization deployment", done: false },
      { text: "Edge computing nodes (NVIDIA Jetson)", done: false },
      { text: "Sub-30 second monitoring intervals", done: false },
    ],
    icon: Zap,
    color: "yellow"
  },
  {
    phase: "Q3 2025",
    status: "upcoming",
    title: "Enterprise Features",
    items: [
      { text: "Multi-tenant architecture", done: false },
      { text: "SSO/SAML integration", done: false },
      { text: "Advanced reporting & analytics", done: false },
    ],
    icon: Shield,
    color: "blue"
  },
  {
    phase: "Q4 2025",
    status: "upcoming",
    title: "Global Expansion",
    items: [
      { text: "20+ monitoring locations worldwide", done: false },
      { text: "Regional data residency options", done: false },
      { text: "Partner program launch", done: false },
    ],
    icon: Globe,
    color: "green"
  }
];

const RoadmapSlide = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full font-medium text-sm mb-4">
            PRODUCT ROADMAP
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            2025 <span className="text-purple-400">Development Plan</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Strategic milestones aligned with NVIDIA technology integration
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-green-500 hidden md:block"></div>
            
            {roadmapPhases.map((phase, index) => {
              const IconComponent = phase.icon;
              const isLeft = index % 2 === 0;
              
              return (
                <div 
                  key={phase.phase}
                  className={`relative flex items-center mb-12 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col`}
                >
                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className={`bg-gray-800/50 border rounded-2xl p-6 ${
                      phase.status === 'current' 
                        ? 'border-purple-500/50 ring-2 ring-purple-500/20' 
                        : 'border-gray-700'
                    }`}>
                      <div className="flex items-center mb-4">
                        <div className={`p-3 rounded-lg mr-4 ${
                          phase.color === 'purple' ? 'bg-purple-500/20' :
                          phase.color === 'yellow' ? 'bg-yellow-500/20' :
                          phase.color === 'blue' ? 'bg-blue-500/20' : 'bg-green-500/20'
                        }`}>
                          <IconComponent className={`h-6 w-6 ${
                            phase.color === 'purple' ? 'text-purple-400' :
                            phase.color === 'yellow' ? 'text-yellow-400' :
                            phase.color === 'blue' ? 'text-blue-400' : 'text-green-400'
                          }`} />
                        </div>
                        <div>
                          <span className={`text-sm font-medium ${
                            phase.status === 'current' ? 'text-purple-400' : 'text-gray-500'
                          }`}>
                            {phase.phase}
                            {phase.status === 'current' && (
                              <span className="ml-2 bg-purple-500/20 text-purple-300 text-xs px-2 py-0.5 rounded-full">
                                IN PROGRESS
                              </span>
                            )}
                          </span>
                          <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                        </div>
                      </div>
                      
                      <ul className="space-y-2">
                        {phase.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center text-gray-300">
                            {item.done ? (
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            ) : (
                              <Circle className="w-4 h-4 text-gray-500 mr-2 flex-shrink-0" />
                            )}
                            <span className="text-sm">{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Center Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gray-900 border-4 border-purple-500 hidden md:block z-10"></div>
                  
                  {/* Spacer for opposite side */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* NVIDIA Integration Highlight */}
        <div className="mt-16 bg-gradient-to-r from-green-900/30 to-purple-900/30 border border-green-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Rocket className="h-8 w-8 text-green-400 mr-3" />
            <h3 className="text-2xl font-bold text-white">NVIDIA Inception Accelerates Everything</h3>
          </div>
          <p className="text-gray-300 text-center max-w-2xl mx-auto">
            With NVIDIA Inception support, we can accelerate our roadmap by 6-12 months through GPU credits, 
            technical guidance, and access to cutting-edge AI infrastructure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSlide;
