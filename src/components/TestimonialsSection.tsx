
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "E-commerce Owner",
    company: "StyleBoutique",
    review: "KloudFox caught our site outage at 2 AM when our hosting provider had issues. We fixed it before the morning rush. Best investment for our online store.",
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    title: "IT Director",
    company: "TechSolutions",
    review: "Before KloudFox, we found out about downtime from angry customer calls. Now we're the first to know and our client satisfaction has improved dramatically.",
    avatar: "MC",
  },
  {
    name: "Alex Rodriguez",
    title: "SaaS Founder",
    review: "Our SSL certificate expired without warning. With KloudFox's monitoring, we now get alerts days before expiration. This tool paid for itself in the first week.",
    avatar: "AR",
  },
  {
    name: "Jennifer Williams",
    title: "Marketing Director",
    company: "GrowthAgency",
    review: "We manage 12 client websites and KloudFox has been a game-changer. Multi-location monitoring catches issues our previous tool missed entirely.",
    avatar: "JW",
  },
  {
    name: "David Park",
    title: "Startup Founder",
    review: "As a non-technical founder, I needed something easy. KloudFox alerts me instantly when our site goes down, and I can check status from my phone anywhere.",
    avatar: "DP",
  },
  {
    name: "Emma Thompson",
    title: "Web Developer",
    company: "CreativeCraft",
    review: "The Slack integration sends alerts directly to our team channel for immediate action. Better features at a fraction of what I was paying before.",
    avatar: "ET",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Loved by teams <span className="gradient-text">worldwide</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of businesses that trust KloudFox to keep their services running.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-3xl mx-auto">
          {[
            { value: "10K+", label: "Websites monitored" },
            { value: "99.9%", label: "Uptime SLA" },
            { value: "< 30s", label: "Alert speed" },
            { value: "4.9/5", label: "User rating" },
          ].map((stat, i) => (
            <div key={i} className="text-center py-4">
              <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl border border-border p-7 hover:border-primary/20 transition-all duration-300 hover:shadow-md flex flex-col"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />

              <p className="text-muted-foreground leading-relaxed text-[15px] mb-6 flex-1">
                "{t.review}"
              </p>

              <div className="flex items-center gap-1 mb-4">
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center text-white text-sm font-semibold">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {t.title}{t.company && ` · ${t.company}`}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
