
import ReviewCard from "./ReviewCard";

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "E-commerce Owner",
    company: "StyleBoutique",
    review: "KloudFox caught our site outage at 2 AM when our hosting provider had issues. We fixed it before the morning rush and saved thousands in potential lost sales. Best investment for our online store!"
  },
  {
    name: "Michael Chen",
    title: "IT Director",
    company: "TechSolutions",
    review: "Before KloudFox, we found out about downtime from angry customer calls. Now we're the first to know and our client satisfaction scores have improved dramatically. The status page feature alone is worth the price."
  },
  {
    name: "Alex Rodriguez",
    title: "SaaS Founder",
    review: "Our SSL certificate expired and we had no idea until customers started complaining. With KloudFox's SSL monitoring, we now get alerts days before expiration. This tool paid for itself in the first week!"
  },
  {
    name: "Jennifer Williams",
    title: "Marketing Director",
    company: "GrowthAgency",
    review: "We manage websites for 12 clients and KloudFox has been a game-changer. The multi-location monitoring catches issues our previous tool missed, and the custom status pages make us look professional during incidents."
  },
  {
    name: "David Park",
    title: "Startup Founder",
    review: "As a non-technical founder, I needed something easy to use that would protect our revenue. KloudFox alerts me instantly when our site goes down, and I can check status from my phone anywhere. Worth every penny!"
  },
  {
    name: "Emma Thompson",
    title: "Web Developer",
    company: "CreativeCraft",
    review: "I was paying $74/month for basic monitoring. KloudFox offers more features at a fraction of the lifetime cost. The Slack integration sends alerts directly to our team channel for immediate action. Absolutely love it."
  }
];

const TestimonialsSection = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          Don't Take Our Word For It
        </h2>
        
        <p className="section-subtitle">
          See how businesses are preventing costly downtime and keeping customers informed with KloudFox.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <ReviewCard
              key={index}
              name={testimonial.name}
              title={testimonial.title}
              company={testimonial.company}
              review={testimonial.review}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-kloudfox-blue font-bold text-lg mb-6">
            Join 10,000+ websites already protected by KloudFox
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="h-12 flex items-center">
              <span className="font-bold text-xl text-gray-500">E-commerce</span>
            </div>
            <div className="h-12 flex items-center">
              <span className="font-bold text-xl text-gray-500">SaaS</span>
            </div>
            <div className="h-12 flex items-center">
              <span className="font-bold text-xl text-gray-500">Agencies</span>
            </div>
            <div className="h-12 flex items-center">
              <span className="font-bold text-xl text-gray-500">Startups</span>
            </div>
            <div className="h-12 flex items-center">
              <span className="font-bold text-xl text-gray-500">Enterprise</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
