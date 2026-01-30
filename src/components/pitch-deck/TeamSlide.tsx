import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter, Github } from "lucide-react";

const teamMembers = [
  {
    name: "Founder & CEO",
    role: "Technical Vision & Strategy",
    expertise: [
      "Full-stack development",
      "AI/ML infrastructure",
      "Cloud architecture",
    ],
    background: "10+ years in DevOps & monitoring"
  }
];

const advisors = [
  { area: "AI/ML", focus: "Deep learning infrastructure" },
  { area: "Go-to-Market", focus: "SaaS growth strategy" },
  { area: "Enterprise", focus: "B2B sales & partnerships" },
];

const TeamSlide = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full font-medium text-sm mb-4">
            TEAM
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built by <span className="text-blue-400">Experts</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experienced team with deep expertise in monitoring, AI, and infrastructure
          </p>
        </div>

        {/* Core Team */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-xl font-bold mb-8 text-center text-gray-300">Core Team</h3>
          <div className="flex justify-center">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 max-w-md w-full">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-white">{member.name}</h4>
                    <p className="text-purple-400">{member.role}</p>
                    <p className="text-gray-500 text-sm mt-1">{member.background}</p>
                  </div>
                  
                  <div className="space-y-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="bg-gray-700/50 rounded-lg px-3 py-2 text-sm text-gray-300 text-center"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-center gap-4 mt-6">
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Advisors */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold mb-8 text-center text-gray-300">Advisory Board</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {advisors.map((advisor, index) => (
              <div 
                key={index}
                className="bg-gray-800/30 border border-gray-700 rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-gray-700 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-400 font-bold">{advisor.area[0]}</span>
                </div>
                <h4 className="font-bold text-white mb-1">{advisor.area} Advisor</h4>
                <p className="text-gray-400 text-sm">{advisor.focus}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hiring CTA */}
        <div className="mt-16 bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-2xl p-8 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-4">We're Hiring</h3>
          <p className="text-gray-300 mb-6">
            Looking for passionate engineers to join our mission of revolutionizing infrastructure monitoring with AI.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm">
              ML Engineer
            </span>
            <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm">
              Backend Developer
            </span>
            <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm">
              DevOps Engineer
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSlide;
