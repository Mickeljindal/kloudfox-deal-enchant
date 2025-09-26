import { useState, useEffect } from 'react';
import { wordpressApi, BlogPost } from '@/services/wordpressApi';

interface UseBlogPostsReturn {
  posts: BlogPost[];
  loading: boolean;
  error: string | null;
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  featuredPost: BlogPost | null;
}

export const useBlogPosts = (perPage: number = 12): UseBlogPostsReturn => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [featuredPost, setFeaturedPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch regular posts and featured posts in parallel
        const [postsResult, featuredPosts] = await Promise.all([
          wordpressApi.getPosts(currentPage, perPage),
          wordpressApi.getFeaturedPosts()
        ]);
        
        setPosts(postsResult.posts);
        setTotalPages(postsResult.totalPages);
        
        // Set the first featured post, if any
        if (featuredPosts.length > 0) {
          setFeaturedPost(featuredPosts[0]);
        }
        
      } catch (err) {
        setError('Failed to load blog posts. Please try again later.');
        console.error('Error in useBlogPosts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [currentPage, perPage]);

  return {
    posts,
    loading,
    error,
    totalPages,
    currentPage,
    setCurrentPage,
    featuredPost
  };
};

interface UseSinglePostReturn {
  post: BlogPost | null;
  loading: boolean;
  error: string | null;
  relatedPosts: BlogPost[];
}

export const useSinglePost = (slug: string): UseSinglePostReturn => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const postData = await wordpressApi.getPostBySlug(slug);
        
        if (!postData) {
          setError('Post not found');
          return;
        }
        
        setPost(postData);
        
        // Fetch related posts (latest posts excluding current one)
        const { posts: allPosts } = await wordpressApi.getPosts(1, 6);
        const related = allPosts.filter(p => p.slug !== slug).slice(0, 3);
        setRelatedPosts(related);
        
      } catch (err) {
        setError('Failed to load blog post. Please try again later.');
        console.error('Error in useSinglePost:', err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  return {
    post,
    loading,
    error,
    relatedPosts
  };
};