import { Brain, Zap, Shield, Globe, Rocket } from "lucide-react";

const roadmapPhases = [
  {
    phase: "Q1 2025",
    status: "current",
    title: "AI Foundation",
    items: [
      "Enhanced anomaly detection algorithms",
      "NVIDIA GPU integration for inference",
      "Real-time pattern recognition",
    ],
    icon: Brain,
    color: "violet"
  },
  {
    phase: "Q2 2025",
    status: "upcoming",
    title: "Scale & Performance",
    items: [
      "TensorRT optimization deployment",
      "Edge computing nodes (NVIDIA Jetson)",
      "Sub-30 second monitoring intervals",
    ],
    icon: Zap,
    color: "amber"
  },
  {
    phase: "Q3 2025",
    status: "upcoming",
    title: "Enterprise Features",
    items: [
      "Multi-tenant architecture",
      "SSO/SAML integration",
      "Advanced reporting & analytics",
    ],
    icon: Shield,
    color: "cyan"
  },
  {
    phase: "Q4 2025",
    status: "upcoming",
    title: "Global Expansion",
    items: [
      "20+ monitoring locations worldwide",
      "Regional data residency options",
      "Partner program launch",
    ],
    icon: Globe,
    color: "emerald"
  }
];

const colorMap = {
  violet: { bg: "bg-violet-500/10", border: "border-violet-500/30", text: "text-violet-400", dot: "bg-violet-500" },
  amber: { bg: "bg-amber-500/10", border: "border-amber-500/30", text: "text-amber-400", dot: "bg-amber-500" },
  cyan: { bg: "bg-cyan-500/10", border: "border-cyan-500/30", text: "text-cyan-400", dot: "bg-cyan-500" },
  emerald: { bg: "bg-emerald-500/10", border: "border-emerald-500/30", text: "text-emerald-400", dot: "bg-emerald-500" },
};

const RoadmapSlide = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Label */}
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-px bg-violet-500" />
            <span className="text-violet-400 text-sm font-semibold tracking-[0.2em] uppercase">Roadmap</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            2025 Development Plan
          </h2>
          <p className="text-xl text-white/50 mb-16">
            Strategic milestones aligned with NVIDIA technology integration
          </p>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-amber-500 via-cyan-500 to-emerald-500" />
            
            <div className="space-y-12">
              {roadmapPhases.map((phase, index) => {
                const IconComponent = phase.icon;
                const colors = colorMap[phase.color as keyof typeof colorMap];
                const isLeft = index % 2 === 0;
                
                return (
                  <div 
                    key={phase.phase}
                    className={`relative flex items-start gap-8 ${
                      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#0a0a0f] ring-4 ring-[#0a0a0f]">
                      <div className={`w-full h-full rounded-full ${colors.dot} ${phase.status === 'current' ? 'animate-pulse' : ''}`} />
                    </div>
                    
                    {/* Content */}
                    <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                      <div className={`${colors.bg} border ${colors.border} rounded-2xl p-8 ${
                        phase.status === 'current' ? 'ring-1 ring-violet-500/50' : ''
                      }`}>
                        <div className={`flex items-center gap-3 mb-4 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                          <IconComponent className={`w-6 h-6 ${colors.text}`} />
                          <div>
                            <span className={`text-sm font-semibold ${colors.text}`}>
                              {phase.phase}
                              {phase.status === 'current' && (
                                <span className="ml-2 text-xs bg-violet-500/20 text-violet-300 px-2 py-0.5 rounded-full">
                                  NOW
                                </span>
                              )}
                            </span>
                            <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                          </div>
                        </div>
                        
                        <ul className={`space-y-2 ${isLeft ? 'md:text-right' : ''}`}>
                          {phase.items.map((item, itemIndex) => (
                            <li key={itemIndex} className={`flex items-center gap-2 text-white/60 text-sm ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                              <div className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* NVIDIA Highlight */}
          <div className="mt-20 bg-gradient-to-r from-emerald-500/10 to-violet-500/10 border border-white/10 rounded-2xl p-10 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Rocket className="w-6 h-6 text-emerald-400" />
              <h3 className="text-xl font-bold text-white">NVIDIA Inception Accelerates Everything</h3>
            </div>
            <p className="text-white/50 max-w-2xl mx-auto">
              With NVIDIA Inception support, we can accelerate our roadmap by 6-12 months through GPU credits, 
              technical guidance, and access to cutting-edge AI infrastructure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSlide;
