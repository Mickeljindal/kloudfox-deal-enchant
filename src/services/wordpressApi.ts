interface WordPressPost {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: any[];
  categories: number[];
  tags: number[];
  _links: any;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text?: string;
    }>;
    author?: Array<{
      name: string;
      id: number;
    }>;
  };
}

interface WordPressCategory {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  parent: number;
  meta: any[];
  _links: any;
}

interface WordPressMedia {
  id: number;
  date: string;
  slug: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  author: number;
  media_type: string;
  mime_type: string;
  media_details: {
    width: number;
    height: number;
    file: string;
    sizes: {
      [key: string]: {
        file: string;
        width: number;
        height: number;
        mime_type: string;
        source_url: string;
      };
    };
  };
  source_url: string;
  _links: any;
}

interface WordPressAuthor {
  id: number;
  name: string;
  url: string;
  description: string;
  link: string;
  slug: string;
  avatar_urls: {
    [key: string]: string;
  };
  meta: any[];
  _links: any;
}

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
  image: string;
  content?: string;
  featured?: boolean;
}

const BASE_URL = 'https://kloudbean.com/wp-json/wp/v2';

class WordPressAPI {
  private async fetchWithErrorHandling<T>(url: string): Promise<T> {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error fetching from ${url}:`, error);
      throw error;
    }
  }

  async getPosts(page: number = 1, perPage: number = 20): Promise<{ posts: BlogPost[]; totalPages: number }> {
    try {
      const postsUrl = `${BASE_URL}/posts?page=${page}&per_page=${perPage}&_embed`;
      const response = await fetch(postsUrl);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const posts: WordPressPost[] = await response.json();
      const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '1');
      
      // Fetch categories to map category IDs to names
      const categoriesMap = await this.getCategoriesMap();
      
      const transformedPosts = await Promise.all(
        posts.map(async (post) => this.transformPost(post, categoriesMap))
      );
      
      return {
        posts: transformedPosts,
        totalPages
      };
    } catch (error) {
      console.error('Error fetching posts:', error);
      // Return fallback data in case of error
      return {
        posts: [],
        totalPages: 1
      };
    }
  }

  async getPostBySlug(slug: string): Promise<BlogPost | null> {
    try {
      const postsUrl = `${BASE_URL}/posts?slug=${slug}&_embed`;
      const posts: WordPressPost[] = await this.fetchWithErrorHandling(postsUrl);
      
      if (posts.length === 0) {
        return null;
      }
      
      const categoriesMap = await this.getCategoriesMap();
      return this.transformPost(posts[0], categoriesMap);
    } catch (error) {
      console.error('Error fetching post by slug:', error);
      return null;
    }
  }

  async getFeaturedPosts(): Promise<BlogPost[]> {
    try {
      // Assuming sticky posts are featured
      const postsUrl = `${BASE_URL}/posts?sticky=true&_embed`;
      const posts: WordPressPost[] = await this.fetchWithErrorHandling(postsUrl);
      
      const categoriesMap = await this.getCategoriesMap();
      
      const transformedPosts = await Promise.all(
        posts.map(async (post) => {
          const transformed = await this.transformPost(post, categoriesMap);
          return { ...transformed, featured: true };
        })
      );
      
      return transformedPosts;
    } catch (error) {
      console.error('Error fetching featured posts:', error);
      return [];
    }
  }

  private async getCategoriesMap(): Promise<Map<number, string>> {
    try {
      const categories: WordPressCategory[] = await this.fetchWithErrorHandling(`${BASE_URL}/categories`);
      const categoriesMap = new Map<number, string>();
      
      categories.forEach(category => {
        categoriesMap.set(category.id, category.name);
      });
      
      return categoriesMap;
    } catch (error) {
      console.error('Error fetching categories:', error);
      return new Map();
    }
  }

  private async transformPost(post: WordPressPost, categoriesMap: Map<number, string>): Promise<BlogPost> {
    // Get category name
    const categoryName = post.categories.length > 0 
      ? categoriesMap.get(post.categories[0]) || 'Uncategorized'
      : 'Uncategorized';
    
    // Get featured image
    let featuredImage = 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80';
    
    if (post._embedded?.['wp:featuredmedia']?.[0]) {
      featuredImage = post._embedded['wp:featuredmedia'][0].source_url;
    }
    
    // Get author name
    let authorName = 'KloudBean Team';
    if (post._embedded?.author?.[0]) {
      authorName = post._embedded.author[0].name;
    }
    
    // Calculate read time (rough estimation: 200 words per minute)
    const wordCount = this.stripHtml(post.content.rendered).split(' ').length;
    const readTime = Math.max(1, Math.ceil(wordCount / 200));
    
    // Clean excerpt
    const cleanExcerpt = this.stripHtml(post.excerpt.rendered);
    
    return {
      slug: post.slug,
      title: this.stripHtml(post.title.rendered),
      excerpt: cleanExcerpt,
      date: post.date,
      category: categoryName,
      readTime: `${readTime} min read`,
      author: authorName,
      image: featuredImage,
      content: post.content.rendered
    };
  }

  private stripHtml(html: string): string {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  }

  async getCategories(): Promise<WordPressCategory[]> {
    try {
      return await this.fetchWithErrorHandling(`${BASE_URL}/categories`);
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  }

  async getPostsByCategory(categoryId: number, page: number = 1, perPage: number = 10): Promise<{ posts: BlogPost[]; totalPages: number }> {
    try {
      const postsUrl = `${BASE_URL}/posts?categories=${categoryId}&page=${page}&per_page=${perPage}&_embed`;
      const response = await fetch(postsUrl);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const posts: WordPressPost[] = await response.json();
      const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '1');
      
      const categoriesMap = await this.getCategoriesMap();
      
      const transformedPosts = await Promise.all(
        posts.map(async (post) => this.transformPost(post, categoriesMap))
      );
      
      return {
        posts: transformedPosts,
        totalPages
      };
    } catch (error) {
      console.error('Error fetching posts by category:', error);
      return {
        posts: [],
        totalPages: 1
      };
    }
  }
}

export const wordpressApi = new WordPressAPI();
export type { BlogPost, WordPressPost, WordPressCategory };