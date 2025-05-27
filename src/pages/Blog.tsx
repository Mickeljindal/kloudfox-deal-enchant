import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Calendar, User, Tag } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      slug: "complete-guide-website-monitoring-2024",
      title: "The Complete Guide to Website Monitoring in 2024",
      excerpt: "Discover everything you need to know about website monitoring, from basic uptime checks to advanced performance monitoring techniques.",
      date: "2024-11-15",
      category: "Website Monitoring",
      image: "/lovable-uploads/a90c6084-dab5-4f06-a5d3-a2fc59f36c73.png"
    },
    {
      slug: "why-website-downtime-costs-business",
      title: "Why Website Downtime Costs Your Business More Than You Think",
      excerpt: "Learn about the hidden costs of website downtime and how proper monitoring can save your business thousands of dollars.",
      date: "2024-11-10",
      category: "Business Impact",
      image: "/lovable-uploads/e9406ac4-1b96-4235-a0c6-5cfd3d7772a0.png"
    },
    {
      slug: "ssl-certificate-monitoring-guide",
      title: "SSL Certificate Monitoring: Protecting Your Website's Security",
      excerpt: "Understand the importance of SSL certificate monitoring and how to prevent security warnings from driving away your customers.",
      date: "2024-11-05",
      category: "SSL Security",
      image: "/lovable-uploads/14ae2113-175b-4944-bca8-de4f972336b6.png"
    },
    {
      slug: "the-importance-of-website-performance",
      title: "The Importance of Website Performance",
      excerpt: "Explore how website performance impacts user experience and conversion rates.",
      date: "2024-10-30",
      category: "Performance",
      image: "/lovable-uploads/12345678-1234-1234-1234-123456789abc.png"
    },
    {
      slug: "how-to-choose-a-monitoring-tool",
      title: "How to Choose a Monitoring Tool",
      excerpt: "A guide to selecting the right monitoring tool for your business needs.",
      date: "2024-10-25",
      category: "Guides",
      image: "/lovable-uploads/23456789-2345-2345-2345-23456789abcd.png"
    },
    {
      slug: "best-practices-for-website-security",
      title: "Best Practices for Website Security",
      excerpt: "Learn essential practices to secure your website against threats.",
      date: "2024-10-20",
      category: "Security",
      image: "/lovable-uploads/34567890-3456-3456-3456-34567890abcd.png"
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">KloudFox Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest in website monitoring, uptime optimization, and web performance insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Tag className="h-4 w-4 mr-1" />
                      {post.category}
                    </div>
                  </div>
                  <h2 className="text-xl font-bold mb-3 hover:text-orange-600 transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
