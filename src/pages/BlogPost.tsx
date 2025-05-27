
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "./BlogList";

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
              <Link to="/blog" className="text-blue-600 hover:underline">
                ← Back to Blog
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link to="/blog" className="text-blue-600 hover:underline mb-4 inline-block">
                ← Back to Blog
              </Link>
              <div className="mb-4">
                <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  {post.category}
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
              <p className="text-gray-600 text-lg mb-4">{post.excerpt}</p>
              <p className="text-gray-500">
                Published on {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                This is a comprehensive guide about {post.title.toLowerCase()}. 
              </p>
              
              <h2>Introduction</h2>
              <p>
                In today's digital landscape, website monitoring has become more critical than ever. 
                With businesses increasingly relying on their online presence to drive revenue and 
                customer engagement, even a few minutes of downtime can result in significant losses.
              </p>

              <h2>Key Considerations</h2>
              <p>
                When implementing website monitoring solutions, there are several important factors 
                to consider:
              </p>
              <ul>
                <li>Monitoring frequency and accuracy</li>
                <li>Geographic distribution of monitoring points</li>
                <li>Alert mechanisms and notification systems</li>
                <li>Integration with existing tools and workflows</li>
                <li>Scalability and cost-effectiveness</li>
              </ul>

              <h2>Best Practices</h2>
              <p>
                To get the most out of your website monitoring setup, consider these proven practices:
              </p>
              <ol>
                <li>Set up monitoring from multiple geographic locations</li>
                <li>Configure appropriate alert thresholds to avoid false positives</li>
                <li>Implement escalation procedures for critical incidents</li>
                <li>Regularly review and update your monitoring configuration</li>
                <li>Document your incident response procedures</li>
              </ol>

              <h2>Implementation Tips</h2>
              <p>
                Successful implementation of website monitoring requires careful planning and execution. 
                Start with basic uptime monitoring and gradually expand to include performance metrics, 
                SSL certificate monitoring, and advanced features like synthetic transactions.
              </p>

              <h2>Conclusion</h2>
              <p>
                Website monitoring is an essential component of modern digital operations. By implementing 
                a comprehensive monitoring strategy, businesses can minimize downtime, improve customer 
                experience, and protect their online revenue streams.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
                <h3 className="text-xl font-bold mb-4">Ready to Start Monitoring?</h3>
                <p className="mb-4">
                  KloudFox provides comprehensive website monitoring with real-time alerts and 
                  professional status pages. Get started today with our free trial.
                </p>
                <a 
                  href="https://watch.kloudfox.com/register" 
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors inline-block"
                >
                  Start Free Trial
                </a>
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
