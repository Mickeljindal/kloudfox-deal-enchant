import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { NAV, SITE } from "@/lib/site";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setFeaturesOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-hairline/70 shadow-soft"
          : "bg-background/40 backdrop-blur-md border-b border-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" aria-label={`${SITE.name} home`}>
            <img src={SITE.logo} alt={`${SITE.name} logo`} className="h-7 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 text-sm">
            {/* Features mega-menu */}
            <div
              className="relative"
              onMouseEnter={() => setFeaturesOpen(true)}
              onMouseLeave={() => setFeaturesOpen(false)}
            >
              <button
                className={cn(
                  "px-3 py-2 rounded-lg font-medium text-foreground/70 hover:text-foreground transition-colors flex items-center gap-1",
                  featuresOpen && "text-foreground",
                )}
                aria-haspopup="menu"
                aria-expanded={featuresOpen}
              >
                Features
                <svg
                  className={cn("h-3.5 w-3.5 transition-transform", featuresOpen && "rotate-180")}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden
                >
                  <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {featuresOpen && (
                <div className="absolute top-full left-0 pt-3 min-w-[420px]">
                  <div className="rim-border rounded-2xl bg-card/95 backdrop-blur-xl shadow-elevated p-2 grid grid-cols-1 gap-1">
                    {NAV.features.map((f) => (
                      <Link
                        key={f.href}
                        to={f.href}
                        className="group flex items-start gap-3 rounded-xl px-3 py-2.5 hover:bg-muted transition-colors"
                      >
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                            {f.name}
                          </div>
                          <div className="text-xs text-muted-foreground mt-0.5">{f.desc}</div>
                        </div>
                        <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all mt-1" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {NAV.primary.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-2 rounded-lg font-medium transition-colors",
                    isActive
                      ? "text-foreground"
                      : "text-foreground/70 hover:text-foreground",
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-2">
            <Button asChild variant="ghost" size="sm" className="text-foreground/80 hover:text-foreground hover:bg-muted">
              <a href={SITE.app.login} target="_blank" rel="noopener noreferrer">
                Log in
              </a>
            </Button>
            <Button asChild size="sm" className="btn-aurora rounded-xl px-4 h-9 font-semibold">
              <a href={SITE.app.register} target="_blank" rel="noopener noreferrer">
                Start free
              </a>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((s) => !s)}
            className="md:hidden p-2 -mr-2 text-foreground/80 hover:text-foreground"
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="md:hidden py-4 border-t border-hairline/60">
            <div className="space-y-1">
              <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.15em] px-3 pb-2 pt-3">
                Features
              </div>
              {NAV.features.map((f) => (
                <Link
                  key={f.href}
                  to={f.href}
                  className="block px-3 py-2 rounded-lg text-sm text-foreground/80 hover:bg-muted hover:text-foreground transition-colors"
                >
                  {f.name}
                </Link>
              ))}
              <div className="my-2 border-t border-hairline/60" />
              {NAV.primary.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block px-3 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:bg-muted hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-3 mt-2 border-t border-hairline/60 space-y-2">
                <Button asChild variant="ghost" className="w-full justify-center">
                  <a href={SITE.app.login} target="_blank" rel="noopener noreferrer">
                    Log in
                  </a>
                </Button>
                <Button asChild className="w-full btn-aurora rounded-xl font-semibold">
                  <a href={SITE.app.register} target="_blank" rel="noopener noreferrer">
                    Start free trial
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
