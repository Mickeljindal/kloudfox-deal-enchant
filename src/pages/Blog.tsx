
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "./BlogList";

const Blog = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">KloudFox Blog</h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Stay updated with the latest insights on website monitoring, server performance, hosting solutions, and infrastructure management. Learn from our experts how to keep your websites running smoothly 24/7.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 max-w-2xl mx-auto">
                <h3 className="text-lg font-semibold mb-2">📚 Expert Knowledge Hub</h3>
                <p className="text-gray-600">Discover best practices, troubleshooting guides, and industry insights to optimize your website's performance and reliability.</p>
              </div>
            </div>

            {/* Featured Post */}
            {blogPosts.length > 0 && (
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
                <Link
                  to={`/blog/${blogPosts[0].slug}`}
                  className="group block bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img
                        src={`https://images.unsplash.com/${blogPosts[0].image}?w=600&h=400&fit=crop`}
                        alt={blogPosts[0].title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-8 text-white">
                      <div className="mb-4">
                        <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {blogPosts[0].category}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-yellow-300 transition-colors">
                        {blogPosts[0].title}
                      </h3>
                      <p className="text-white/90 mb-6 text-lg">
                        {blogPosts[0].excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-white/80 text-sm">
                          {new Date(blogPosts[0].date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                        <span className="text-yellow-300 font-semibold group-hover:translate-x-2 transition-transform">
                          Read More →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}
            
            {/* All Posts Grid */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-8">All Articles</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {blogPosts.map((post) => (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={`https://images.unsplash.com/${post.image}?w=400&h=250&fit=crop`}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                        <span className="text-blue-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                          Read More →
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Get the latest articles about website monitoring, performance optimization, and infrastructure management delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-400 mt-3">No spam, unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
