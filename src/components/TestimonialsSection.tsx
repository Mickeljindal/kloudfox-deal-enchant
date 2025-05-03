
import ReviewCard from "./ReviewCard";

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Marketing Director",
    company: "GrowthGenius",
    review: "KloudFox completely transformed how we analyze customer data. We identified a segment that was 4x more valuable than we thought, and our ROI increased by 267% in just two months!"
  },
  {
    name: "Michael Chen",
    title: "E-commerce Owner",
    review: "I was wasting thousands on ads that didn't convert. KloudFox showed me exactly where to focus, and we've doubled our sales while cutting ad spend by 40%. Best business decision I've made this year."
  },
  {
    name: "Alex Rodriguez",
    title: "SaaS Founder",
    review: "The AI insights are like having a data scientist on the team. We discovered behavior patterns that led to a 53% reduction in churn rate. At this price point, it's an absolute no-brainer."
  },
  {
    name: "Jennifer Williams",
    title: "Digital Strategist",
    company: "ConversionPro",
    review: "I've used every analytics tool on the market, and KloudFox blows them away. The real-time data and actionable reports have increased our client conversion rates by an average of 31%."
  },
  {
    name: "David Park",
    title: "Startup Founder",
    review: "As a non-technical founder, I needed something powerful but easy to use. KloudFox gave me exactly that, plus insights that helped us secure our Series A funding. Worth 100x the price!"
  },
  {
    name: "Emma Thompson",
    title: "Revenue Operations",
    company: "ScaleUp Inc.",
    review: "We were paying $2,400/year for a solution that did half of what KloudFox does. The migration was seamless, and the insights helped us identify a $1.2M revenue opportunity in the first week."
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
          See what our customers have achieved after implementing KloudFox in their businesses.
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
            Join 10,000+ successful businesses already using KloudFox
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="h-12 flex items-center">
              <span className="font-bold text-xl text-gray-500">ACME Corp</span>
            </div>
            <div className="h-12 flex items-center">
              <span className="font-bold text-xl text-gray-500">GrowthCo</span>
            </div>
            <div className="h-12 flex items-center">
              <span className="font-bold text-xl text-gray-500">TechGiants</span>
            </div>
            <div className="h-12 flex items-center">
              <span className="font-bold text-xl text-gray-500">FutureX</span>
            </div>
            <div className="h-12 flex items-center">
              <span className="font-bold text-xl text-gray-500">ElevateHQ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
