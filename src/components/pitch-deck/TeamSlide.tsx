import { Linkedin, Github, Mail } from "lucide-react";

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
  { area: "AI/ML", focus: "Deep learning infrastructure", initial: "A" },
  { area: "GTM", focus: "SaaS growth strategy", initial: "G" },
  { area: "Enterprise", focus: "B2B sales & partnerships", initial: "E" },
];

const openRoles = [
  { title: "ML Engineer", type: "Engineering" },
  { title: "Backend Developer", type: "Engineering" },
  { title: "DevOps Engineer", type: "Engineering" },
];

const TeamSlide = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Label */}
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-px bg-fuchsia-500" />
            <span className="text-fuchsia-400 text-sm font-semibold tracking-[0.2em] uppercase">Team</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
            Built by Experts
          </h2>

          {/* Core Team */}
          <div className="mb-20">
            <h3 className="text-sm font-semibold text-white/40 tracking-wider uppercase mb-8">Leadership</h3>
            
            <div className="flex justify-center">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 border border-white/10 rounded-2xl p-10 max-w-lg w-full"
                >
                  <div className="flex items-start gap-6">
                    {/* Avatar */}
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white">{member.name}</h4>
                      <p className="text-violet-400 text-sm mb-2">{member.role}</p>
                      <p className="text-white/40 text-sm">{member.background}</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-white/60"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3 mt-6">
                    <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-colors">
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Advisors */}
          <div className="mb-20">
            <h3 className="text-sm font-semibold text-white/40 tracking-wider uppercase mb-8">Advisory Board</h3>
            
            <div className="grid md:grid-cols-3 gap-4">
              {advisors.map((advisor, index) => (
                <div 
                  key={index}
                  className="bg-white/[0.02] border border-white/5 rounded-xl p-6 hover:bg-white/[0.04] transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                      <span className="text-lg font-bold text-white/40">{advisor.initial}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{advisor.area} Advisor</h4>
                      <p className="text-white/40 text-sm">{advisor.focus}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hiring */}
          <div className="bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border border-white/10 rounded-2xl p-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">We're Hiring</h3>
                <p className="text-white/50">
                  Join our mission to revolutionize infrastructure monitoring with AI
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {openRoles.map((role, index) => (
                  <span 
                    key={index}
                    className="bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                  >
                    {role.title}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSlide;
