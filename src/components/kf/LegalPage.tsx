import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Aurora from "./Aurora";
import Section from "./Section";
import SEO, { breadcrumbJsonLd } from "@/components/SEO";

interface LegalPageProps {
  title: string;
  description: string;
  slug: string;
  lastUpdated?: string;
  children: ReactNode;
}

/**
 * Shared shell for legal/policy pages. Renders a compact dark hero,
 * a well-typed prose column, and consistent SEO tags.
 */
export default function LegalPage({ title, description, slug, lastUpdated, children }: LegalPageProps) {
  return (
    <div>
      <SEO
        title={title}
        description={description}
        path={`/${slug}`}
        jsonLd={breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: title, url: `/${slug}` },
        ])}
      />

      <Header />

      <section className="relative overflow-hidden bg-[#050510] text-white">
        <Aurora variant="soft" />
        <div className="container mx-auto px-4 pt-20 pb-12 md:pt-24 md:pb-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="eyebrow mb-3 justify-center text-primary/90">
              <span className="h-1 w-6 rounded-full bg-primary/60" aria-hidden />
              Legal
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-balance">{title}</h1>
            {lastUpdated && (
              <p className="mt-3 text-sm text-white/50">Last updated: {lastUpdated}</p>
            )}
          </div>
        </div>
      </section>

      <Section tone="default" padding="lg">
        <article className="max-w-3xl mx-auto prose-kf">{children}</article>
      </Section>

      <Footer />
    </div>
  );
}
