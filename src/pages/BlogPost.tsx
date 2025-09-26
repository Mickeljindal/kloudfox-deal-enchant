
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingSpinner from "@/components/LoadingSpinner";
import ErrorMessage from "@/components/ErrorMessage";
import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, Tag, Clock, Share2, Twitter, Facebook, Linkedin } from "lucide-react";
import { useSinglePost } from "@/hooks/useBlogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { post, loading, error, relatedPosts } = useSinglePost(slug || '');
  const handleRetry = () => {
    window.location.reload();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <div className="flex-1 py-20">
          <LoadingSpinner size="lg" text="Loading blog post..." />
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <div className="flex-1 py-20">
          <ErrorMessage 
            message={error || "The blog post you're looking for doesn't exist."} 
            onRetry={error ? handleRetry : undefined}
          />
          <div className="text-center mt-8">
            <Link to="/blog" className="text-orange-600 hover:text-orange-700 font-medium">← Back to Blog</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

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
                
                <div 
                  className="wordpress-content space-y-6"
                  dangerouslySetInnerHTML={{ __html: post.content || `
                    <h2>Comprehensive Guide Coming Soon</h2>
                    <p>This article is part of our comprehensive knowledge base. Our team is working on providing detailed, actionable content for this topic.</p>
                    
                    <h3>What You'll Learn</h3>
                    <ul>
                      <li>Industry best practices and proven strategies</li>
                      <li>Step-by-step implementation guides</li>
                      <li>Real-world case studies and examples</li>
                      <li>Expert tips and advanced techniques</li>
                    </ul>
                    
                    <h3>Stay Updated</h3>
                    <p>Subscribe to our newsletter to be notified when this comprehensive guide is published. In the meantime, explore our other articles for valuable insights on website monitoring and performance optimization.</p>
                    
                    <h3>Need Immediate Help?</h3>
                    <p>If you need assistance with website monitoring right now, our KloudBean platform offers immediate solutions for uptime monitoring, performance tracking, and alert management.</p>
                  ` }}
                />
                
                {/* CTA Section */}
                <div className="mt-12 p-8 bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4">Ready to Monitor Your Website?</h3>
                  <p className="text-lg mb-6 text-gray-700">
                    Don't let website downtime cost your business. Start monitoring with KloudBean today and protect your online presence 24/7.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="https://watch.kloudbean.com/register" 
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
            {relatedPosts.length > 0 && (
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
                          onError={(e) => {
                            e.currentTarget.src = 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80';
                          }}
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
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;
