
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, Tag, Clock, Share2, Twitter, Facebook, Linkedin } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();

  const blogPosts = [
    {
      slug: "complete-guide-website-monitoring-2024",
      title: "The Complete Guide to Website Monitoring in 2024",
      excerpt: "Discover everything you need to know about website monitoring, from basic uptime checks to advanced performance monitoring techniques that ensure your website never goes down.",
      date: "2024-11-15",
      category: "Website Monitoring",
      readTime: "8 min read",
      author: "KloudFox Team",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      slug: "why-website-downtime-costs-business",
      title: "Why Website Downtime Costs Your Business More Than You Think",
      excerpt: "Learn about the hidden costs of website downtime and how proper monitoring can save your business thousands of dollars in lost revenue and reputation damage.",
      date: "2024-11-10",
      category: "Business Impact",
      readTime: "6 min read",
      author: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      slug: "ssl-certificate-monitoring-guide",
      title: "SSL Certificate Monitoring: Protecting Your Website's Security",
      excerpt: "Understand the importance of SSL certificate monitoring and how to prevent security warnings from driving away your customers and damaging your SEO rankings.",
      date: "2024-11-05",
      category: "SSL Security",
      readTime: "5 min read",
      author: "Mike Chen",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
  ];

  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <div className="flex-1 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link to="/blog" className="text-orange-600 hover:text-orange-700 font-medium">← Back to Blog</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            <span className="text-gray-300">/</span>
            <Link to="/blog" className="text-gray-500 hover:text-gray-700">Blog</Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900">{post.title}</span>
          </nav>
        </div>
      </div>

      <div className="flex-1 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-8 font-medium">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
            
            <article className="bg-white">
              {/* Hero Image */}
              <div className="aspect-video mb-8 rounded-xl overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Article Header */}
              <header className="mb-8">
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                  <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>
                
                {/* Share Buttons */}
                <div className="flex items-center gap-4 py-4 border-y border-gray-200">
                  <span className="text-sm font-medium text-gray-600">Share this article:</span>
                  <div className="flex gap-2">
                    <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <Facebook className="h-4 w-4" />
                    </button>
                    <button className="p-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors">
                      <Twitter className="h-4 w-4" />
                    </button>
                    <button className="p-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
                      <Linkedin className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </header>
              
              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">{post.excerpt}</p>
                
                {slug === "complete-guide-website-monitoring-2024" && (
                  <div className="space-y-8">
                    <section>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4">What is Website Monitoring?</h2>
                      <p className="text-lg leading-relaxed mb-6">
                        Website monitoring is the practice of testing and verifying that end-users can interact with a website or web application as expected. Website monitoring services check for downtime, outages, and functional issues to ensure optimal user experience and business continuity.
                      </p>
                      <p className="text-lg leading-relaxed">
                        In today's digital-first world, your website is often the primary touchpoint between your business and customers. A single minute of downtime can cost thousands in lost revenue and damage your brand reputation permanently.
                      </p>
                    </section>
                    
                    <section>
                      <h2 className="text-2xl md:text-3xl font-bold mb-6">Types of Website Monitoring</h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-bold mb-3">1. Uptime Monitoring</h3>
                          <p className="text-lg leading-relaxed">
                            The most basic form of monitoring checks if your website is accessible. It sends HTTP requests to your site at regular intervals and alerts you if it receives an error response or no response at all. This is your first line of defense against downtime.
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-bold mb-3">2. Performance Monitoring</h3>
                          <p className="text-lg leading-relaxed">
                            Measures how fast your website loads and responds to user interactions. This includes metrics like page load time, time to first byte (TTFB), and Core Web Vitals that directly impact SEO rankings and user experience.
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-bold mb-3">3. SSL Certificate Monitoring</h3>
                          <p className="text-lg leading-relaxed">
                            Tracks the expiration date of your SSL certificates and alerts you before they expire, preventing security warnings and potential SEO penalties. An expired SSL certificate can destroy user trust instantly.
                          </p>
                        </div>
                      </div>
                    </section>
                    
                    <section>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose KloudFox for Website Monitoring?</h2>
                      <p className="text-lg leading-relaxed mb-6">
                        KloudFox offers comprehensive monitoring solutions that go beyond basic uptime checks. Our platform provides real-time alerts, detailed analytics, and multi-location monitoring to ensure your website performs optimally for users worldwide.
                      </p>
                      <p className="text-lg leading-relaxed">
                        With 40-second check intervals and monitoring from 4 global locations, KloudFox catches issues before your competitors even know they exist. Don't let downtime destroy your business – start monitoring with KloudFox today.
                      </p>
                    </section>
                  </div>
                )}
                
                {/* CTA Section */}
                <div className="mt-12 p-8 bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4">Ready to Monitor Your Website?</h3>
                  <p className="text-lg mb-6 text-gray-700">
                    Don't let website downtime cost your business. Start monitoring with KloudFox today and protect your online presence 24/7.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="https://watch.kloudfox.com/register" 
                      className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors inline-block text-center font-medium"
                    >
                      Start Free Trial
                    </a>
                    <Link 
                      to="/pricing" 
                      className="bg-white border border-orange-600 text-orange-600 px-8 py-3 rounded-lg hover:bg-orange-50 transition-colors inline-block text-center font-medium"
                    >
                      View Pricing
                    </Link>
                  </div>
                </div>
              </div>
            </article>
            
            {/* Related Posts */}
            <section className="mt-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost, index) => (
                  <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className="aspect-video">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <span className="bg-gray-100 px-2 py-1 rounded text-xs">{relatedPost.category}</span>
                        <span>•</span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                      <h3 className="font-bold mb-3 hover:text-orange-600 transition-colors">
                        <Link to={`/blog/${relatedPost.slug}`}>{relatedPost.title}</Link>
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{relatedPost.excerpt}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;
