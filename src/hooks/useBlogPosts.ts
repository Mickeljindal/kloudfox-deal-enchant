import { useMemo, useState } from "react";
import {
  BlogPost,
  getAllPosts,
  getFeaturedPost,
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/blog";

interface UseBlogPostsReturn {
  posts: BlogPost[];
  loading: false;
  error: null;
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  featuredPost: BlogPost | null;
}

/**
 * Paginated list of posts, sourced from local markdown files at build time.
 * Kept as a hook for API compatibility with pages that consume it, but the
 * underlying data is synchronous — no loading/error states needed.
 */
export function useBlogPosts(perPage = 12): UseBlogPostsReturn {
  const all = useMemo(() => getAllPosts(), []);
  const featured = useMemo(() => getFeaturedPost() ?? null, []);
  const nonFeatured = useMemo(
    () => all.filter((p) => !featured || p.slug !== featured.slug),
    [all, featured],
  );

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(nonFeatured.length / perPage));

  const paged = useMemo(() => {
    const start = (currentPage - 1) * perPage;
    return nonFeatured.slice(start, start + perPage);
  }, [nonFeatured, currentPage, perPage]);

  return {
    posts: paged,
    loading: false,
    error: null,
    totalPages,
    currentPage,
    setCurrentPage,
    featuredPost: featured,
  };
}

interface UseSinglePostReturn {
  post: BlogPost | null;
  loading: false;
  error: null;
  relatedPosts: BlogPost[];
}

export function useSinglePost(slug: string): UseSinglePostReturn {
  const post = useMemo(() => getPostBySlug(slug) ?? null, [slug]);
  const relatedPosts = useMemo(() => (post ? getRelatedPosts(post.slug, 3) : []), [post]);
  return { post, loading: false, error: null, relatedPosts };
}
