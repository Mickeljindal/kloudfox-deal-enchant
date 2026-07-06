import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { SITE, absoluteUrl } from "@/lib/site";

type JsonLd = Record<string, unknown>;

interface SEOProps {
  title?: string;
  description?: string;
  /** Path relative to site root; defaults to the current location. */
  path?: string;
  /** Absolute or root-relative image URL. */
  image?: string;
  /** Meta keywords (optional; keep short and topical). */
  keywords?: string;
  /** One or more JSON-LD objects to embed in <head>. */
  jsonLd?: JsonLd | JsonLd[];
  noindex?: boolean;
  /** Content type for OG tag. */
  type?: "website" | "article";
  /** Article-only metadata (ignored when type != "article"). */
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
}

/**
 * Central SEO / GEO / AIO tag manager.
 *
 * Injects the full head payload: title, description, canonical, robots,
 * Open Graph, Twitter Card, and one or more JSON-LD blocks. Every page
 * that uses <SEO /> automatically gets consistent, complete metadata.
 */
export default function SEO({
  title,
  description = SITE.description,
  path,
  image = SITE.ogImage,
  keywords,
  jsonLd,
  noindex = false,
  type = "website",
  article,
}: SEOProps) {
  const location = useLocation();
  const resolvedPath = path ?? location.pathname;
  const url = absoluteUrl(resolvedPath);
  const fullTitle = title ? `${title} · ${SITE.name}` : `${SITE.name} — ${SITE.tagline}`;
  const displayTitle = title ?? `${SITE.name} — ${SITE.tagline}`;
  const imageUrl = image.startsWith("http") ? image : absoluteUrl(image);

  const jsonLdBlocks: JsonLd[] = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : [];

  return (
    <Helmet prioritizeSeoTags>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"}
      />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={displayTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={displayTitle} />
      <meta property="og:locale" content="en_US" />

      {type === "article" && article?.publishedTime && (
        <meta property="article:published_time" content={article.publishedTime} />
      )}
      {type === "article" && article?.modifiedTime && (
        <meta property="article:modified_time" content={article.modifiedTime} />
      )}
      {type === "article" && article?.author && (
        <meta property="article:author" content={article.author} />
      )}
      {type === "article" && article?.section && (
        <meta property="article:section" content={article.section} />
      )}
      {type === "article" &&
        article?.tags?.map((tag) => <meta key={tag} property="article:tag" content={tag} />)}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SITE.social.twitterHandle} />
      <meta name="twitter:creator" content={SITE.social.twitterHandle} />
      <meta name="twitter:title" content={displayTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* JSON-LD (SEO + GEO/AIO) */}
      {jsonLdBlocks.map((block, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Helmet>
  );
}

/* -------------------------------------------------------------------------- */
/*  Common JSON-LD builders                                                    */
/* -------------------------------------------------------------------------- */

export function organizationJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: absoluteUrl(SITE.logo),
    description: SITE.description,
    foundingDate: SITE.founded,
    sameAs: [
      SITE.social.twitter,
      SITE.social.linkedin,
      SITE.social.instagram,
      SITE.social.facebook,
    ].filter(Boolean),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: SITE.contact.email,
        areaServed: "Worldwide",
        availableLanguage: ["English"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.address.addressLocality,
      addressRegion: SITE.address.addressRegion,
      addressCountry: SITE.address.addressCountry,
    },
  };
}

export function websiteJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    publisher: { "@id": `${SITE.url}#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.url}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function softwareApplicationJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    description: SITE.description,
    url: SITE.url,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "512",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; url: string }>): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : absoluteUrl(item.url),
    })),
  };
}

export function faqJsonLd(faqs: Array<{ question: string; answer: string }>): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function articleJsonLd(post: {
  title: string;
  description: string;
  slug: string;
  image?: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  tags?: string[];
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: post.image ? (post.image.startsWith("http") ? post.image : absoluteUrl(post.image)) : absoluteUrl(SITE.ogImage),
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: { "@type": "Person", name: post.author },
    publisher: { "@id": `${SITE.url}#organization` },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(`/blog/${post.slug}`),
    },
    keywords: post.tags?.join(", "),
  };
}
