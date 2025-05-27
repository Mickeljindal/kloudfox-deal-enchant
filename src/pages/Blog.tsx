
const Blog = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">KloudFox Blog</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Stay updated with the latest insights on website monitoring, server performance, and infrastructure management.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Website Monitoring Best Practices</h3>
                <p className="text-gray-600 mb-4">Learn the essential strategies for effective website monitoring.</p>
                <span className="text-sm text-gray-500">March 15, 2024</span>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">SSL Certificate Management Guide</h3>
                <p className="text-gray-600 mb-4">Everything you need to know about SSL certificates and monitoring.</p>
                <span className="text-sm text-gray-500">March 10, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
