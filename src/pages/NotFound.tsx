import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, Home, Compass } from "lucide-react";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Aurora from "@/components/kf/Aurora";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 — no route for", location.pathname);
  }, [location.pathname]);

  return (
    <div>
      <SEO title="Page not found" description="The page you were looking for doesn't exist." path={location.pathname} noindex />
      <Header />
      <main className="relative overflow-hidden bg-[#050510] text-white min-h-[70vh] flex items-center">
        <Aurora />
        <div aria-hidden className="absolute inset-0 grid-bg opacity-40" />

        <div className="container mx-auto px-4 py-24 relative z-10 text-center">
          <div className="max-w-xl mx-auto">
            <div className="text-[8rem] md:text-[12rem] font-display font-black leading-none gradient-text tracking-tighter">
              404
            </div>
            <h1 className="text-2xl md:text-3xl font-display font-bold mt-4 mb-3">
              Nothing to monitor here.
            </h1>
            <p className="text-white/60 leading-relaxed mb-8">
              The page you were looking for is offline — or never existed. Either
              way, Kloudfox would've caught it.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Button asChild className="btn-aurora rounded-xl h-11 px-5 font-semibold">
                <Link to="/">
                  <Home className="h-4 w-4 mr-2" /> Take me home
                </Link>
              </Button>
              <Button asChild variant="outline" className="bg-white/5 border-white/10 hover:bg-white/10 text-white rounded-xl h-11 px-5 font-semibold">
                <Link to="/blog">
                  <Compass className="h-4 w-4 mr-2" /> Read the blog
                </Link>
              </Button>
            </div>
            <button onClick={() => window.history.back()} className="mt-6 inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors">
              <ArrowLeft className="h-3.5 w-3.5" /> Go back
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
