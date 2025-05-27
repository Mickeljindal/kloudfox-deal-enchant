import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, Tag } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();

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
            <Link to="/blog" className="text-orange-600 hover:text-orange-700">← Back to Blog</Link>
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
      <div className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
            
            <article className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-8">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    KloudFox Team
                  </div>
                  <div className="flex items-center">
                    <Tag className="h-4 w-4 mr-1" />
                    {post.category}
                  </div>
                </div>
                
                <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-gray-600 mb-8">{post.excerpt}</p>
                  
                  {slug === "complete-guide-website-monitoring-2024" && (
                    <>
                      <h2>What is Website Monitoring?</h2>
                      <p>Website monitoring is the practice of testing and verifying that end-users can interact with a website or web application as expected. Website monitoring services check for downtime, outages, and functional issues to ensure optimal user experience.</p>
                      
                      <h2>Types of Website Monitoring</h2>
                      <h3>1. Uptime Monitoring</h3>
                      <p>The most basic form of monitoring checks if your website is accessible. It sends HTTP requests to your site at regular intervals and alerts you if it receives an error response or no response at all.</p>
                      
                      <h3>2. Performance Monitoring</h3>
                      <p>Measures how fast your website loads and responds to user interactions. This includes metrics like page load time, time to first byte (TTFB), and Core Web Vitals.</p>
                      
                      <h3>3. SSL Certificate Monitoring</h3>
                      <p>Tracks the expiration date of your SSL certificates and alerts you before they expire, preventing security warnings and potential SEO penalties.</p>
                      
                      <h2>Why Choose KloudFox for Website Monitoring?</h2>
                      <p>KloudFox offers comprehensive monitoring solutions that go beyond basic uptime checks. Our platform provides real-time alerts, detailed analytics, and multi-location monitoring to ensure your website performs optimally for users worldwide.</p>
                    </>
                  )}
                  
                  <div className="mt-12 p-6 bg-orange-50 border border-orange-200 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Ready to Monitor Your Website?</h3>
                    <p className="mb-4">Don't let website downtime cost your business. Start monitoring with KloudFox today.</p>
                    <Link 
                      to="https://watch.kloudfox.com/register" 
                      className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition-colors inline-block"
                    >
                      Start Free Trial
                    </Link>
                  </div>
                </div>
              </div>
            </article>
            
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-8">Related Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost, index) => (
                  <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                    <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold mb-2 hover:text-orange-600 transition-colors">
                        <Link to={`/blog/${relatedPost.slug}`}>{relatedPost.title}</Link>
                      </h3>
                      <p className="text-sm text-gray-600">{relatedPost.excerpt.substring(0, 100)}...</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;
