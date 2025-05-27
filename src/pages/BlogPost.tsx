
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { slug } = useParams();

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Blog Post</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Blog post content for: {slug}
            </p>
            
            <p>This is a placeholder for the blog post content. In a real implementation, you would fetch the blog post data based on the slug parameter.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
