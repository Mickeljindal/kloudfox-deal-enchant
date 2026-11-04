import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, Rss } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/kf/Section";
import Aurora from "@/components/kf/Aurora";
import Reveal from "@/components/kf/Reveal";
import SEO, { breadcrumbJsonLd, websiteJsonLd } from "@/components/SEO";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { formatDate, getAllCategories } from "@/lib/blog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SITE, absoluteUrl } from "@/lib/site";

const Blog = () => {
  const { posts, totalPages, currentPage, setCurrentPage, featuredPost } = useBlogPosts(9);
  const categories = getAllCategories();

  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", url: "/" },
      { name: "Blog", url: "/blog" },
    ]),
    websiteJsonLd(),
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: `${SITE.name} blog`,
      url: absoluteUrl("/blog"),
      description:
        "Deep-dive posts on website monitoring, uptime, incident response, SSL, and everything else your on-call rotation cares about.",
      blogPost: posts.slice(0, 10).map((p) => ({
        "@type": "BlogPosting",
        headline: p.title,
        url: absoluteUrl(`/blog/${p.slug}`),
        datePublished: p.date,
        author: { "@type": "Person", name: p.author },
      })),
    },
  ];

  return (
    <div>
      <SEO
        title="Blog"
        description="Deep-dive posts on website monitoring, uptime, SSL, incident response, and everything else your on-call rotation cares about."
        path="/blog"
        jsonLd={jsonLd}
      />

      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#050510] text-white">
        <Aurora />
        <div aria-hidden className="absolute inset-0 grid-bg opacity-40" />

        <div className="container mx-auto px-4 pt-24 pb-16 md:pt-32 md:pb-20 relative z-10">
          <Reveal className="max-w-3xl mx-auto text-center">
            <div className="eyebrow mb-4 justify-center text-primary/90">
              <span className="h-1 w-6 rounded-full bg-primary/60" aria-hidden />
              The Kloudfox blog
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold leading-[1.05] tracking-tight text-balance">
              Field notes from teams that <span className="gradient-text">never miss.</span>
            </h1>
            <p className="mt-5 text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
              Actionable playbooks on uptime, incident response, SSL, and every
              on-call decision worth writing down. Published fresh every day.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <a
                href="/rss.xml"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70 hover:text-white hover:border-white/20 transition-colors"
              >
                <Rss className="h-3.5 w-3.5 text-amber-400" />
                RSS feed
              </a>
              {categories.slice(0, 4).map((c) => (
                <span key={c.name} className="hidden md:inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70">
                  {c.name}
                  <span className="text-white/40">{c.count}</span>
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured */}
      {featuredPost && (
        <Section tone="default" padding="lg">
          <Reveal>
            <Link
              to={`/blog/${featuredPost.slug}`}
              className="group block rounded-3xl overflow-hidden border border-border bg-card/60 backdrop-blur-md hover:border-primary/30 transition-all shadow-soft"
            >
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-3 relative aspect-video lg:aspect-auto bg-gradient-to-br from-primary/20 via-primary/5 to-transparent overflow-hidden">
                  {featuredPost.image ? (
                    <img
                      src={featuredPost.image}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  ) : (
                    <FallbackCover title={featuredPost.title} />
                  )}
                </div>
                <div className="lg:col-span-2 p-7 md:p-10 flex flex-col">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary/80 mb-3">
                    <span className="h-1 w-6 rounded-full bg-primary/50" />
                    Featured · {featuredPost.category}
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold tracking-tight text-balance">
                    {featuredPost.title}
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed line-clamp-3">
                    {featuredPost.description}
                  </p>
                  <div className="mt-6 flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{formatDate(featuredPost.date)}</span>
                    <span aria-hidden>·</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <div className="mt-6">
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      Read the post
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>
        </Section>
      )}

      {/* Grid */}
      <Section tone="default" padding="lg">
        {posts.length === 0 ? (
          <div className="max-w-md mx-auto text-center py-14">
            <h3 className="text-xl font-semibold mb-2">Nothing here yet</h3>
            <p className="text-muted-foreground">
              We're publishing daily — check back tomorrow, or subscribe to the RSS.
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {posts.map((post, i) => (
                <Reveal key={post.slug} delay={i * 40}>
                  <article className="group h-full rounded-2xl overflow-hidden border border-border bg-card/60 backdrop-blur-md hover:border-primary/30 hover:-translate-y-0.5 transition-all">
                    <Link to={`/blog/${post.slug}`}>
                      <div className="relative aspect-[16/9] overflow-hidden">
                        {post.image ? (
                          <img
                            src={post.image}
                            alt=""
                            className="absolute inset-0 h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                          />
                        ) : (
                          <FallbackCover title={post.title} small />
                        )}
                        <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-black/60 backdrop-blur border border-white/10 text-white/85 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest">
                          {post.category}
                        </span>
                      </div>
                      <div className="p-5 md:p-6">
                        <h3 className="text-lg font-semibold tracking-tight text-balance line-clamp-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                          {post.description}
                        </p>
                        <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                          <span>{formatDate(post.date)}</span>
                          <span aria-hidden>·</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  </article>
                </Reveal>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="mt-12 flex justify-center items-center gap-2">
                <Button variant="outline" size="sm" disabled={currentPage === 1} onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}>
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Previous
                </Button>
                <div className="flex gap-1">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    const p = currentPage <= 3 ? i + 1 : currentPage - 2 + i;
                    if (p > totalPages || p < 1) return null;
                    return (
                      <button
                        key={p}
                        onClick={() => setCurrentPage(p)}
                        className={cn(
                          "h-9 min-w-9 px-3 rounded-md text-sm font-medium border transition-colors",
                          p === currentPage
                            ? "bg-primary text-primary-foreground border-primary"
                            : "border-border text-foreground/70 hover:bg-muted",
                        )}
                      >
                        {p}
                      </button>
                    );
                  })}
                </div>
                <Button variant="outline" size="sm" disabled={currentPage === totalPages} onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}>
                  Next
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            )}
          </>
        )}
      </Section>

      <Footer />
    </div>
  );
};

function FallbackCover({ title, small }: { title: string; small?: boolean }) {
  const initial = title.trim().charAt(0).toUpperCase();
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/70 via-violet-900/40 to-emerald-900/40 flex items-center justify-center">
      <div className="aurora-soft" />
      <span className={cn("relative text-white/90 font-display font-black tracking-tighter", small ? "text-5xl" : "text-7xl md:text-9xl")}>
        {initial}
      </span>
    </div>
  );
}

export default Blog;
