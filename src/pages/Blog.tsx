import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingSpinner from "@/components/LoadingSpinner";
import ErrorMessage from "@/components/ErrorMessage";
import { Link } from "react-router-dom";
import { Calendar, User, Tag, Clock, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useBlogPosts } from "@/hooks/useBlogPosts";

const Blog = () => {
  const { posts, loading, error, totalPages, currentPage, setCurrentPage, featuredPost } = useBlogPosts(12);

  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">KloudBean Knowledge Hub</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Expert insights on website monitoring, uptime optimization, security, and performance. 
            Stay ahead with the latest industry trends and best practices.
          </p>
        </div>
      </section>

      <div className="flex-1 py-16 md:py-20">
        <div className="container mx-auto px-4">
          {loading && (
            <div className="py-20">
              <LoadingSpinner size="lg" text="Loading blog posts..." />
            </div>
          )}
          
          {error && (
            <div className="py-20">
              <ErrorMessage message={error} onRetry={handleRetry} />
            </div>
          )}
          
          {!loading && !error && (
            <>
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

                {posts.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-600 text-lg">No blog posts available at the moment.</p>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {posts.map((post, index) => (
                        <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                          <div className="relative overflow-hidden">
                            <img 
                              src={post.image} 
                              alt={post.title}
                              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                              onError={(e) => {
                                e.currentTarget.src = 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80';
                              }}
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
                            
                            <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center text-sm text-gray-500">
                                <User className="h-4 w-4 mr-1" />
                                {post.author}
                              </div>
                              
                              <Link 
                                to={`/blog/${post.slug}`}
                                className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium group text-sm"
                              >
                                Read More 
                                <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                              </Link>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                      <div className="flex justify-center items-center space-x-4 mt-12">
                        <button
                          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                          disabled={currentPage === 1}
                          className="flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <ChevronLeft className="h-4 w-4 mr-1" />
                          Previous
                        </button>
                        
                        <div className="flex space-x-1">
                          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                            const pageNum = currentPage <= 3 ? i + 1 : currentPage - 2 + i;
                            if (pageNum <= totalPages) {
                              return (
                                <button
                                  key={pageNum}
                                  onClick={() => setCurrentPage(pageNum)}
                                  className={`px-3 py-2 text-sm font-medium rounded-lg ${
                                    currentPage === pageNum
                                      ? 'bg-orange-600 text-white'
                                      : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50'
                                  }`}
                                >
                                  {pageNum}
                                </button>
                              );
                            }
                          })}
                        </div>
                        
                        <button
                          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                          disabled={currentPage === totalPages}
                          className="flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Next
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </button>
                      </div>
                    )}
                  </>
                )}
              </section>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;