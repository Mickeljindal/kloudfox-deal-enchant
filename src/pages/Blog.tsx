
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Calendar, User, Tag, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      slug: "complete-guide-website-monitoring-2024",
      title: "The Complete Guide to Website Monitoring in 2024",
      excerpt: "Discover everything you need to know about website monitoring, from basic uptime checks to advanced performance monitoring techniques that ensure your website never goes down.",
      date: "2024-11-15",
      category: "Website Monitoring",
      readTime: "8 min read",
      author: "KloudFox Team",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      featured: true
    },
    {
      slug: "why-website-downtime-costs-business",
      title: "Why Website Downtime Costs Your Business More Than You Think",
      excerpt: "Learn about the hidden costs of website downtime and how proper monitoring can save your business thousands of dollars in lost revenue and reputation damage.",
      date: "2024-11-10",
      category: "Business Impact",
      readTime: "6 min read",
      author: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      slug: "ssl-certificate-monitoring-guide",
      title: "SSL Certificate Monitoring: Protecting Your Website's Security",
      excerpt: "Understand the importance of SSL certificate monitoring and how to prevent security warnings from driving away your customers and damaging your SEO rankings.",
      date: "2024-11-05",
      category: "SSL Security",
      readTime: "5 min read",
      author: "Mike Chen",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      slug: "the-importance-of-website-performance",
      title: "The Importance of Website Performance for User Experience",
      excerpt: "Explore how website performance impacts user experience, conversion rates, and SEO rankings. Learn optimization techniques that boost your bottom line.",
      date: "2024-10-30",
      category: "Performance",
      readTime: "7 min read",
      author: "Alex Rodriguez",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      slug: "how-to-choose-monitoring-tool",
      title: "How to Choose the Right Website Monitoring Tool for Your Business",
      excerpt: "A comprehensive guide to selecting the perfect monitoring tool that fits your business needs, budget, and technical requirements for optimal website performance.",
      date: "2024-10-25",
      category: "Guides",
      readTime: "9 min read",
      author: "Emma Wilson",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      slug: "best-practices-website-security",
      title: "Essential Website Security Best Practices for 2024",
      excerpt: "Learn critical security practices to protect your website against cyber threats, data breaches, and malicious attacks that could destroy your business reputation.",
      date: "2024-10-20",
      category: "Security",
      readTime: "10 min read",
      author: "David Kim",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      slug: "uptime-monitoring-vs-synthetic-monitoring",
      title: "Uptime Monitoring vs Synthetic Monitoring: Which Do You Need?",
      excerpt: "Compare uptime monitoring and synthetic monitoring to understand which approach best suits your business needs and monitoring strategy.",
      date: "2024-10-15",
      category: "Monitoring Types",
      readTime: "6 min read",
      author: "Jennifer Lee",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      slug: "api-monitoring-best-practices",
      title: "API Monitoring Best Practices: Ensuring Reliable Integrations",
      excerpt: "Master API monitoring with comprehensive strategies to maintain reliable third-party integrations and prevent service disruptions.",
      date: "2024-10-10",
      category: "API Monitoring",
      readTime: "8 min read",
      author: "Robert Chen",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      slug: "database-monitoring-techniques",
      title: "Database Monitoring Techniques for Modern Applications",
      excerpt: "Explore advanced database monitoring techniques to optimize performance, prevent outages, and ensure data integrity in production environments.",
      date: "2024-10-05",
      category: "Database",
      readTime: "7 min read",
      author: "Maria Garcia",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      slug: "cloud-infrastructure-monitoring",
      title: "Cloud Infrastructure Monitoring: AWS, Azure, and GCP Strategies",
      excerpt: "Learn how to effectively monitor cloud infrastructure across major platforms to ensure optimal performance and cost efficiency.",
      date: "2024-09-30",
      category: "Cloud",
      readTime: "9 min read",
      author: "Thomas Anderson",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      slug: "incident-response-playbook",
      title: "Building an Effective Incident Response Playbook",
      excerpt: "Create a comprehensive incident response strategy that minimizes downtime and ensures rapid recovery from system failures.",
      date: "2024-09-25",
      category: "Incident Management",
      readTime: "10 min read",
      author: "Lisa Williams",
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      slug: "real-user-monitoring-rum-guide",
      title: "Real User Monitoring (RUM): Understanding User Experience",
      excerpt: "Implement Real User Monitoring to gain insights into actual user experiences and identify performance bottlenecks in real-world scenarios.",
      date: "2024-09-20",
      category: "RUM",
      readTime: "8 min read",
      author: "Kevin Park",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      slug: "server-monitoring-metrics",
      title: "Essential Server Monitoring Metrics Every Admin Should Track",
      excerpt: "Discover the critical server metrics that indicate system health and learn how to set up effective monitoring and alerting systems.",
      date: "2024-09-15",
      category: "Server Monitoring",
      readTime: "7 min read",
      author: "James Wilson",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      slug: "network-monitoring-fundamentals",
      title: "Network Monitoring Fundamentals for IT Professionals",
      excerpt: "Master network monitoring basics to ensure optimal connectivity, identify bottlenecks, and maintain reliable network infrastructure.",
      date: "2024-09-10",
      category: "Network",
      readTime: "9 min read",
      author: "Anna Thompson",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      slug: "alerting-notification-strategies",
      title: "Smart Alerting and Notification Strategies to Prevent Alert Fatigue",
      excerpt: "Design intelligent alerting systems that deliver critical information without overwhelming your team with unnecessary notifications.",
      date: "2024-09-05",
      category: "Alerting",
      readTime: "6 min read",
      author: "Michael Brown",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      slug: "performance-optimization-techniques",
      title: "Website Performance Optimization: Advanced Techniques",
      excerpt: "Implement advanced performance optimization strategies to achieve lightning-fast load times and superior user experiences.",
      date: "2024-08-30",
      category: "Performance",
      readTime: "11 min read",
      author: "Sophie Davis",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      slug: "monitoring-microservices-architecture",
      title: "Monitoring Microservices Architecture: Challenges and Solutions",
      excerpt: "Navigate the complexities of monitoring distributed microservices with proven strategies for observability and troubleshooting.",
      date: "2024-08-25",
      category: "Microservices",
      readTime: "12 min read",
      author: "Carlos Rodriguez",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      slug: "dns-monitoring-importance",
      title: "DNS Monitoring: Why It's Critical for Website Availability",
      excerpt: "Understand the crucial role of DNS monitoring in website availability and learn how DNS failures can impact your business operations.",
      date: "2024-08-20",
      category: "DNS",
      readTime: "5 min read",
      author: "Rachel Green",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      slug: "load-testing-monitoring-correlation",
      title: "Correlating Load Testing Results with Monitoring Data",
      excerpt: "Learn how to combine load testing insights with monitoring data to optimize performance and prepare for traffic spikes.",
      date: "2024-08-15",
      category: "Load Testing",
      readTime: "8 min read",
      author: "Daniel Lee",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      slug: "mobile-app-monitoring-strategies",
      title: "Mobile App Monitoring: Ensuring Optimal User Experience",
      excerpt: "Implement comprehensive mobile app monitoring to track performance, crashes, and user engagement across different devices and platforms.",
      date: "2024-08-10",
      category: "Mobile",
      readTime: "7 min read",
      author: "Jessica Wang",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      slug: "seo-monitoring-website-health",
      title: "SEO Monitoring: How Website Health Affects Search Rankings",
      excerpt: "Discover the connection between website monitoring and SEO performance, and learn how uptime affects your search engine rankings.",
      date: "2024-08-05",
      category: "SEO",
      readTime: "6 min read",
      author: "Mark Johnson",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      slug: "monitoring-automation-devops",
      title: "Monitoring Automation in DevOps: Best Practices and Tools",
      excerpt: "Integrate automated monitoring into your DevOps pipeline to catch issues early and maintain continuous delivery quality.",
      date: "2024-07-30",
      category: "DevOps",
      readTime: "9 min read",
      author: "Andrew Miller",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      slug: "e-commerce-monitoring-strategies",
      title: "E-commerce Website Monitoring: Protecting Revenue and Customer Trust",
      excerpt: "Specialized monitoring strategies for e-commerce platforms to ensure seamless shopping experiences and protect revenue streams.",
      date: "2024-07-25",
      category: "E-commerce",
      readTime: "8 min read",
      author: "Emily Zhang",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      slug: "monitoring-compliance-regulations",
      title: "Website Monitoring for Compliance: Meeting Regulatory Requirements",
      excerpt: "Navigate compliance requirements with proper monitoring strategies that meet industry standards and regulatory obligations.",
      date: "2024-07-20",
      category: "Compliance",
      readTime: "10 min read",
      author: "Peter Smith",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">KloudFox Knowledge Hub</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Expert insights on website monitoring, uptime optimization, security, and performance. 
            Stay ahead with the latest industry trends and best practices.
          </p>
        </div>
      </section>

      <div className="flex-1 py-16 md:py-20">
        <div className="container mx-auto px-4">
          {/* Featured Post */}
          {featuredPost && (
            <section className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Featured Article</h2>
                <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
              </div>
              
              <article className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 max-w-4xl mx-auto">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-medium">
                        {featuredPost.category}
                      </span>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 hover:text-orange-600 transition-colors">
                      <Link to={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {featuredPost.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(featuredPost.date).toLocaleDateString()}
                        </div>
                      </div>
                      
                      <Link 
                        to={`/blog/${featuredPost.slug}`}
                        className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium group"
                      >
                        Read More 
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </section>
          )}

          {/* Latest Articles */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Latest Articles</h2>
              <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 hover:text-orange-600 transition-colors line-clamp-2">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium group"
                      >
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated with KloudFox</h3>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Get the latest insights on website monitoring, performance optimization, and security best practices delivered to your inbox.
              </p>
              <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blog;
