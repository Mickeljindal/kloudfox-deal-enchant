
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "./BlogList";
import { Calendar, User, Tag, ArrowLeft, Share2, Clock } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <div className="flex-1 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-8">Blog Post Not Found</h1>
              <p className="text-gray-600 mb-8">
                The blog post you're looking for doesn't exist.
              </p>
              <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedPosts = blogPosts.filter(p => p.slug !== slug && p.category === post.category).slice(0, 3);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <Link to="/blog" className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
              
              <div className="mb-6">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">{post.excerpt}</p>
              
              <div className="flex flex-wrap items-center gap-6 text-gray-300">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  <span>KloudFox Team</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>5 min read</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img 
                src={`https://images.unsplash.com/${post.image}?w=1200&h=600&fit=crop`}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6">Understanding {post.title}</h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  In today's digital landscape, website monitoring has become more critical than ever before. 
                  With businesses increasingly relying on their online presence to drive revenue and customer 
                  engagement, even a few minutes of downtime can result in significant losses and damage to 
                  your brand reputation.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">💡 Pro Tip</h3>
                  <p className="text-blue-800">
                    Did you know that 75% of businesses experience website outages they never detect? 
                    This costs them an average of $12,000+ per incident in lost revenue.
                  </p>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6">Key Considerations</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  When implementing website monitoring solutions, there are several important factors 
                  to consider that can make the difference between catching issues early and losing 
                  customers to preventable problems.
                </p>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">1</span>
                    <div>
                      <strong>Monitoring Frequency:</strong> Choose a solution that checks your website every 30-60 seconds, not every 5 minutes like basic tools.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">2</span>
                    <div>
                      <strong>Geographic Distribution:</strong> Monitor from multiple continents to catch regional outages that single-location tools miss.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">3</span>
                    <div>
                      <strong>Alert Mechanisms:</strong> Ensure instant notifications via email, SMS, Slack, and mobile push notifications.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">4</span>
                    <div>
                      <strong>Integration Capabilities:</strong> Look for tools that integrate with your existing workflow and tools.
                    </div>
                  </li>
                </ul>

                <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-xl p-8 my-12">
                  <h3 className="text-2xl font-bold text-red-900 mb-4">⚠️ The Cost of Not Monitoring</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-red-800 mb-2">Revenue Loss</h4>
                      <p className="text-red-700 text-sm">Average $12,000 per hour for e-commerce sites</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-red-800 mb-2">Customer Trust</h4>
                      <p className="text-red-700 text-sm">88% won't return after bad experience</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-red-800 mb-2">SEO Impact</h4>
                      <p className="text-red-700 text-sm">Google penalizes sites with poor uptime</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-red-800 mb-2">Brand Damage</h4>
                      <p className="text-red-700 text-sm">Long-term reputation impact</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6">Best Practices for Implementation</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  To get the most out of your website monitoring setup, follow these proven practices 
                  that have helped thousands of businesses prevent costly downtime:
                </p>

                <div className="grid md:grid-cols-2 gap-8 my-10">
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h4 className="font-bold text-lg mb-3">🌍 Multi-Location Monitoring</h4>
                    <p className="text-gray-600 text-sm">Set up monitoring from multiple geographic locations to catch regional outages and CDN issues.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h4 className="font-bold text-lg mb-3">🔔 Smart Alerting</h4>
                    <p className="text-gray-600 text-sm">Configure appropriate alert thresholds to avoid false positives while ensuring critical issues are caught.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h4 className="font-bold text-lg mb-3">📊 Status Pages</h4>
                    <p className="text-gray-600 text-sm">Create professional status pages to communicate with customers during incidents proactively.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h4 className="font-bold text-lg mb-3">🔄 Regular Reviews</h4>
                    <p className="text-gray-600 text-sm">Regularly review and update your monitoring configuration as your infrastructure evolves.</p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6">Implementation Strategy</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Successful implementation of website monitoring requires careful planning and execution. 
                  Start with basic uptime monitoring and gradually expand to include performance metrics, 
                  SSL certificate monitoring, and advanced features like synthetic transactions.
                </p>

                <div className="bg-gray-50 rounded-xl p-8 my-10">
                  <h3 className="text-xl font-bold mb-6">Step-by-Step Implementation Guide</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">1</div>
                      <div>
                        <h4 className="font-bold mb-2">Start with Basic Uptime Monitoring</h4>
                        <p className="text-gray-600 text-sm">Begin by monitoring your most critical pages and services with simple HTTP checks.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">2</div>
                      <div>
                        <h4 className="font-bold mb-2">Add SSL Certificate Monitoring</h4>
                        <p className="text-gray-600 text-sm">Prevent security warnings and SEO penalties by monitoring SSL certificate expiration.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">3</div>
                      <div>
                        <h4 className="font-bold mb-2">Configure Team Alerts</h4>
                        <p className="text-gray-600 text-sm">Set up escalation procedures and ensure the right people are notified immediately.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">4</div>
                      <div>
                        <h4 className="font-bold mb-2">Create Status Pages</h4>
                        <p className="text-gray-600 text-sm">Build customer trust with transparent communication about your service status.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6">Conclusion</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Website monitoring is no longer optional—it's an essential component of modern digital operations. 
                  By implementing a comprehensive monitoring strategy with KloudFox, businesses can minimize downtime, 
                  improve customer experience, and protect their online revenue streams.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8">
                  Don't wait for the next outage to cost you thousands in lost revenue and damage your reputation. 
                  Start monitoring your website today and join the thousands of businesses that trust KloudFox 
                  to keep their websites running smoothly 24/7.
                </p>

                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center my-12">
                  <h3 className="text-2xl font-bold mb-4">Ready to Start Monitoring?</h3>
                  <p className="text-lg mb-6 text-blue-100">
                    KloudFox provides comprehensive website monitoring with real-time alerts, professional status pages, and expert support. 
                    Get started today and never lose customers to preventable downtime again.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="https://watch.kloudfox.com/register"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                    >
                      Start Free Trial
                    </a>
                    <a 
                      href="https://appsumo.com/products/kloudfox/"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
                    >
                      Get Lifetime Deal - $29
                    </a>
                  </div>
                  <p className="text-sm text-blue-200 mt-4">60 Days Money Back Guarantee • No Questions Asked</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Related Articles</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      to={`/blog/${relatedPost.slug}`}
                      className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                    >
                      <img
                        src={`https://images.unsplash.com/${relatedPost.image}?w=400&h=200&fit=crop`}
                        alt={relatedPost.title}
                        className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="p-6">
                        <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {relatedPost.category}
                        </span>
                        <h3 className="text-lg font-bold mt-3 mb-2 group-hover:text-blue-600 transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {relatedPost.excerpt.substring(0, 100)}...
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;
