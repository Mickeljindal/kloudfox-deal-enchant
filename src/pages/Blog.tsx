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
      readTime: "12 min read",
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
      readTime: "8 min read",
      author: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      slug: "ssl-certificate-monitoring-guide",
      title: "SSL Certificate Monitoring: Protecting Your Website's Security",
      excerpt: "Understand the importance of SSL certificate monitoring and how to prevent security warnings from driving away your customers and damaging your SEO rankings.",
      date: "2024-11-05",
      category: "SSL Security",
      readTime: "7 min read",
      author: "Mike Chen",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      slug: "performance-monitoring-best-practices",
      title: "Website Performance Monitoring: Best Practices for 2024",
      excerpt: "Explore advanced techniques for monitoring website performance, including Core Web Vitals optimization and real user monitoring strategies.",
      date: "2024-10-30",
      category: "Performance",
      readTime: "10 min read",
      author: "Alex Rodriguez",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      slug: "choosing-monitoring-tool-2024",
      title: "How to Choose the Right Website Monitoring Tool in 2024",
      excerpt: "A comprehensive guide to selecting the perfect monitoring solution that fits your business needs, budget, and technical requirements.",
      date: "2024-10-25",
      category: "Guides",
      readTime: "9 min read",
      author: "Emma Wilson",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      slug: "website-security-monitoring-2024",
      title: "Essential Website Security Monitoring Practices for 2024",
      excerpt: "Learn critical security monitoring practices to protect your website against cyber threats, data breaches, and malicious attacks.",
      date: "2024-10-20",
      category: "Security",
      readTime: "11 min read",
      author: "David Kim",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      slug: "api-monitoring-comprehensive-guide",
      title: "API Monitoring: A Comprehensive Guide for Modern Applications",
      excerpt: "Master API monitoring with advanced techniques to ensure your web services remain reliable and performant for your users.",
      date: "2024-10-15",
      category: "API Monitoring",
      readTime: "13 min read",
      author: "Rachel Torres",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      slug: "mobile-app-monitoring-strategies",
      title: "Mobile App Performance Monitoring: Essential Strategies",
      excerpt: "Discover how to monitor mobile applications effectively, ensuring optimal user experience across all devices and platforms.",
      date: "2024-10-10",
      category: "Mobile Monitoring",
      readTime: "9 min read",
      author: "James Park",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      slug: "ecommerce-website-monitoring",
      title: "E-commerce Website Monitoring: Protecting Your Revenue Stream",
      excerpt: "Learn specialized monitoring techniques for e-commerce sites to prevent cart abandonment and maximize sales conversions.",
      date: "2024-10-05",
      category: "E-commerce",
      readTime: "10 min read",
      author: "Lisa Chen",
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      slug: "database-monitoring-techniques",
      title: "Database Performance Monitoring: Advanced Techniques",
      excerpt: "Explore comprehensive database monitoring strategies to ensure optimal performance and prevent costly downtime.",
      date: "2024-09-30",
      category: "Database",
      readTime: "12 min read",
      author: "Michael Brown",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      slug: "cloud-infrastructure-monitoring",
      title: "Cloud Infrastructure Monitoring: AWS, Azure, and GCP",
      excerpt: "Master cloud monitoring across major platforms with best practices for AWS, Microsoft Azure, and Google Cloud Platform.",
      date: "2024-09-25",
      category: "Cloud Monitoring",
      readTime: "14 min read",
      author: "Jennifer Lopez",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      slug: "real-user-monitoring-rum-guide",
      title: "Real User Monitoring (RUM): Complete Implementation Guide",
      excerpt: "Implement Real User Monitoring to understand actual user experiences and optimize your website's performance accordingly.",
      date: "2024-09-20",
      category: "RUM",
      readTime: "11 min read",
      author: "Kevin Wang",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      slug: "synthetic-monitoring-vs-real-user",
      title: "Synthetic Monitoring vs Real User Monitoring: Which to Choose?",
      excerpt: "Compare synthetic and real user monitoring approaches to determine the best strategy for your website monitoring needs.",
      date: "2024-09-15",
      category: "Monitoring Strategy",
      readTime: "8 min read",
      author: "Amanda Foster",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      slug: "website-speed-optimization-2024",
      title: "Website Speed Optimization: Advanced Techniques for 2024",
      excerpt: "Boost your website's loading speed with cutting-edge optimization techniques that improve user experience and SEO rankings.",
      date: "2024-09-10",
      category: "Optimization",
      readTime: "15 min read",
      author: "Robert Kim",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      slug: "incident-response-monitoring",
      title: "Incident Response and Monitoring: Building Resilient Systems",
      excerpt: "Create effective incident response procedures that minimize downtime and maintain business continuity during outages.",
      date: "2024-09-05",
      category: "Incident Management",
      readTime: "13 min read",
      author: "Sarah Mitchell",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      slug: "cdn-performance-monitoring",
      title: "CDN Performance Monitoring: Optimizing Global Content Delivery",
      excerpt: "Monitor and optimize your Content Delivery Network to ensure fast, reliable content delivery worldwide.",
      date: "2024-08-30",
      category: "CDN",
      readTime: "10 min read",
      author: "Daniel Rodriguez",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      slug: "server-monitoring-best-practices",
      title: "Server Monitoring Best Practices: Linux and Windows",
      excerpt: "Comprehensive server monitoring techniques for both Linux and Windows environments to ensure optimal performance.",
      date: "2024-08-25",
      category: "Server Monitoring",
      readTime: "12 min read",
      author: "Christine Adams",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      slug: "monitoring-microservices-architecture",
      title: "Monitoring Microservices Architecture: Distributed System Challenges",
      excerpt: "Navigate the complexities of monitoring microservices with strategies for distributed tracing and service mesh monitoring.",
      date: "2024-08-20",
      category: "Microservices",
      readTime: "14 min read",
      author: "Thomas Wilson",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      slug: "website-uptime-sla-monitoring",
      title: "Website Uptime SLA Monitoring: Meeting Service Level Agreements",
      excerpt: "Ensure you meet your uptime commitments with comprehensive SLA monitoring and reporting strategies.",
      date: "2024-08-15",
      category: "SLA",
      readTime: "9 min read",
      author: "Maria Garcia",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      slug: "log-monitoring-analysis-guide",
      title: "Log Monitoring and Analysis: Turning Data into Insights",
      excerpt: "Transform your log data into actionable insights with advanced monitoring and analysis techniques.",
      date: "2024-08-10",
      category: "Log Analysis",
      readTime: "11 min read",
      author: "Andrew Thompson",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      slug: "network-monitoring-infrastructure",
      title: "Network Monitoring for Modern Infrastructure",
      excerpt: "Monitor your network infrastructure effectively with tools and techniques that ensure reliable connectivity.",
      date: "2024-08-05",
      category: "Network",
      readTime: "10 min read",
      author: "Nancy Lee",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      slug: "monitoring-automation-devops",
      title: "Monitoring Automation in DevOps: CI/CD Integration",
      excerpt: "Integrate monitoring into your DevOps pipeline for automated detection and resolution of performance issues.",
      date: "2024-07-30",
      category: "DevOps",
      readTime: "13 min read",
      author: "Steven Clark",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      slug: "cost-optimization-monitoring",
      title: "Cost Optimization Through Strategic Monitoring",
      excerpt: "Reduce operational costs while maintaining high performance through intelligent monitoring and resource optimization.",
      date: "2024-07-25",
      category: "Cost Optimization",
      readTime: "8 min read",
      author: "Patricia Davis",
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
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
