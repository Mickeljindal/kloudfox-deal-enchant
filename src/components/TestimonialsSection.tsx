
import ReviewCard from "./ReviewCard";
import { Star, TrendingUp, Shield, Zap } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "E-commerce Owner",
    company: "StyleBoutique",
    review: "KloudFox caught our site outage at 2 AM when our hosting provider had issues. We fixed it before the morning rush and saved thousands in potential lost sales. Best investment for our online store!",
    savings: "$8,400",
    avatar: "SJ"
  },
  {
    name: "Michael Chen", 
    title: "IT Director",
    company: "TechSolutions",
    review: "Before KloudFox, we found out about downtime from angry customer calls. Now we're the first to know and our client satisfaction scores have improved dramatically. The status page feature alone is worth the price.",
    savings: "$12,000",
    avatar: "MC"
  },
  {
    name: "Alex Rodriguez",
    title: "SaaS Founder",
    review: "Our SSL certificate expired and we had no idea until customers started complaining. With KloudFox's SSL monitoring, we now get alerts days before expiration. This tool paid for itself in the first week!",
    savings: "$15,000",
    avatar: "AR"
  },
  {
    name: "Jennifer Williams",
    title: "Marketing Director", 
    company: "GrowthAgency",
    review: "We manage websites for 12 clients and KloudFox has been a game-changer. The multi-location monitoring catches issues our previous tool missed, and the custom status pages make us look professional during incidents.",
    savings: "$25,000",
    avatar: "JW"
  },
  {
    name: "David Park",
    title: "Startup Founder",
    review: "As a non-technical founder, I needed something easy to use that would protect our revenue. KloudFox alerts me instantly when our site goes down, and I can check status from my phone anywhere. Worth every penny!",
    savings: "$6,800",
    avatar: "DP"
  },
  {
    name: "Emma Thompson",
    title: "Web Developer",
    company: "CreativeCraft", 
    review: "I was paying $74/month for basic monitoring. KloudFox offers more features at a fraction of the lifetime cost. The Slack integration sends alerts directly to our team channel for immediate action. Absolutely love it.",
    savings: "$2,400",
    avatar: "ET"
  }
];

const TestimonialsSection = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-green-100 text-green-700 px-6 py-3 rounded-full font-bold text-lg mb-6">
            🎯 REAL RESULTS FROM REAL CUSTOMERS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">Don't Take Our Word For It:</span>
            <br />
            <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">See The Money They've Saved</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These businesses prevented costly downtime and kept customers happy with KloudFox. Here's how much they saved:
          </p>
        </div>

        {/* Success metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-green-100">
            <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-green-600">$347K+</div>
            <div className="text-gray-600 text-sm">Total Revenue Protected</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-blue-100">
            <Shield className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-blue-600">2,847</div>
            <div className="text-gray-600 text-sm">Outages Prevented</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-purple-100">
            <Zap className="w-8 h-8 text-purple-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-purple-600">23 sec</div>
            <div className="text-gray-600 text-sm">Average Alert Time</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-yellow-100">
            <Star className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-yellow-600">4.9/5</div>
            <div className="text-gray-600 text-sm">Customer Rating</div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
              {/* Savings badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                Saved {testimonial.savings}
              </div>
              
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg mr-4 shadow-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.title}{testimonial.company && `, ${testimonial.company}`}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-4 italic">"{testimonial.review}"</p>
              
              <div className="bg-green-50 p-3 rounded-lg border border-green-200 mt-4">
                <div className="text-green-700 font-bold text-sm">💰 Revenue Protected: {testimonial.savings}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-10 text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Join 10,000+ Smart Business Owners</h3>
          <p className="text-xl mb-8 opacity-90">Who never worry about website downtime destroying their revenue</p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                <span className="font-bold text-lg">🛒</span>
              </div>
              <span className="font-medium">E-commerce</span>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                <span className="font-bold text-lg">💻</span>
              </div>
              <span className="font-medium">SaaS</span>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                <span className="font-bold text-lg">🏢</span>
              </div>
              <span className="font-medium">Agencies</span>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                <span className="font-bold text-lg">🚀</span>
              </div>
              <span className="font-medium">Startups</span>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                <span className="font-bold text-lg">🏭</span>
              </div>
              <span className="font-medium">Enterprise</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
