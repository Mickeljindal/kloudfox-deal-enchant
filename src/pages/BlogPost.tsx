import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag, User } from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/kf/Section";
import Aurora from "@/components/kf/Aurora";
import ShareBar from "@/components/kf/ShareBar";
import Reveal from "@/components/kf/Reveal";
import { Button } from "@/components/ui/button";
import SEO, { articleJsonLd, breadcrumbJsonLd } from "@/components/SEO";
import NotFound from "./NotFound";

import { useSinglePost } from "@/hooks/useBlogPosts";
import { formatDate } from "@/lib/blog";
import { SITE, absoluteUrl } from "@/lib/site";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { post, relatedPosts } = useSinglePost(slug ?? "");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) return <NotFound />;

  return (
    <div>
      <SEO
        title={post.title}
        description={post.description}
        path={`/blog/${post.slug}`}
        image={post.image ?? "/og/default.png"}
        type="article"
        keywords={post.tags.join(", ")}
        article={{
          publishedTime: post.date,
          modifiedTime: post.updated ?? post.date,
          author: post.author,
          section: post.category,
          tags: post.tags,
        }}
        jsonLd={[
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Blog", url: "/blog" },
            { name: post.title, url: `/blog/${post.slug}` },
          ]),
          articleJsonLd({
            title: post.title,
            description: post.description,
            slug: post.slug,
            image: post.image,
            publishedAt: post.date,
            updatedAt: post.updated,
            author: post.author,
            tags: post.tags,
          }),
        ]}
      />

      <Header />

      {/* Article hero */}
      <section className="relative overflow-hidden bg-[#050510] text-white">
        <Aurora />
        <div aria-hidden className="absolute inset-0 grid-bg opacity-30" />

        <div className="container mx-auto px-4 pt-20 pb-16 md:pt-28 md:pb-20 relative z-10">
          <div className="max-w-3xl mx-auto">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-white/50 mb-6">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span aria-hidden>/</span>
              <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span aria-hidden>/</span>
              <span className="text-white/70 truncate">{post.title}</span>
            </nav>

            <Reveal>
              <div className="flex flex-wrap items-center gap-2 text-xs mb-4">
                <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 text-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-widest">
                  {post.category}
                </span>
                {post.tags.slice(0, 3).map((t) => (
                  <span key={t} className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 text-white/70 px-2.5 py-0.5">
                    <Tag className="h-3 w-3" />
                    {t}
                  </span>
                ))}
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-extrabold leading-[1.08] tracking-tight text-balance">
                {post.title}
              </h1>

              <p className="mt-5 text-lg md:text-xl text-white/70 leading-relaxed text-balance">
                {post.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-white/60">
                <span className="inline-flex items-center gap-1.5">
                  <User className="h-4 w-4" />
                  {post.author}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {formatDate(post.date)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
                <div className="ml-auto">
                  <ShareBar title={post.title} path={`/blog/${post.slug}`} />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Featured image */}
      {post.image && (
        <div className="container mx-auto px-4 -mt-6 md:-mt-10">
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-border shadow-elevated">
            <img src={post.image} alt="" className="w-full aspect-[16/9] object-cover" loading="eager" />
          </div>
        </div>
      )}

      {/* Article body */}
      <Section tone="default" padding="lg">
        <article className="max-w-3xl mx-auto prose-kf">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[
              rehypeSlug,
              [
                rehypeAutolinkHeadings,
                { behavior: "wrap", properties: { className: ["no-underline hover:underline"] } },
              ],
            ]}
          >
            {post.content}
          </ReactMarkdown>
        </article>

        {/* CTA panel */}
        <div className="max-w-3xl mx-auto mt-14 rounded-2xl border border-border bg-card/70 backdrop-blur-md p-6 md:p-8 relative overflow-hidden">
          <div aria-hidden className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            <div className="flex-1">
              <h3 className="text-lg font-semibold tracking-tight">
                Enjoying this? Try Kloudfox free.
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                40-second uptime, SSL, and status pages. Free forever plan. No card.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button asChild className="btn-aurora rounded-xl font-semibold">
                <a href={SITE.app.register} target="_blank" rel="noopener noreferrer">
                  Start free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link to="/pricing">See pricing</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Share row */}
        <div className="max-w-3xl mx-auto mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div className="text-sm text-muted-foreground">Found this useful? Share it.</div>
          <ShareBar title={post.title} path={`/blog/${post.slug}`} />
        </div>
      </Section>

      {/* Related */}
      {relatedPosts.length > 0 && (
        <Section tone="muted" padding="lg">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight">Keep reading</h2>
              <Link to="/blog" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                All posts <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedPosts.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="group h-full rounded-2xl border border-border bg-card/70 backdrop-blur-md p-5 hover:border-primary/30 hover:-translate-y-0.5 transition-all"
                >
                  <div className="text-xs uppercase tracking-widest text-primary mb-2">{p.category}</div>
                  <h3 className="text-lg font-semibold tracking-tight line-clamp-2 group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-3">{p.description}</p>
                  <div className="mt-4 text-xs text-muted-foreground">{p.readTime}</div>
                </Link>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Bottom nav */}
      <Section tone="default" padding="sm">
        <div className="max-w-3xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to all posts
          </Link>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default BlogPost;
