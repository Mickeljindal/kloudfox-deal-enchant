
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();

  const productLinks = [
    { name: "Website Monitoring", href: "/website-monitoring" },
    { name: "SSL Monitoring", href: "/ssl-monitoring" },
    { name: "Status Pages", href: "/status-page" },
    { name: "Incident Management", href: "/incident-management" },
    { name: "Integrations", href: "/integrations" },
  ];

  return (
    <header className="bg-[#0a0a1a]/80 backdrop-blur-xl border-b border-white/5 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/b5c94c8f-8b5c-4d46-89bb-c353f06e28ca.png" 
              alt="KloudFox Logo" 
              className="h-7"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <div className="relative">
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="flex items-center text-white/70 hover:text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Features
                <ChevronDown className="ml-1 h-3.5 w-3.5" />
              </button>
              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-[#141420] rounded-xl shadow-2xl border border-white/10 py-2 z-50">
                  {productLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="block px-4 py-2.5 text-sm text-white/60 hover:bg-white/5 hover:text-white transition-colors"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/pricing" className="text-white/70 hover:text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors">
              Pricing
            </Link>
            <Link to="/blog" className="text-white/70 hover:text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors">
              Blog
            </Link>
            <Link to="/about" className="text-white/70 hover:text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-white/70 hover:text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button asChild variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/5">
              <a href="https://watch.kloudfox.com/login" target="_blank" rel="noopener noreferrer">
                Log in
              </a>
            </Button>
            <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-white rounded-lg px-5">
              <a href="https://watch.kloudfox.com/register" target="_blank" rel="noopener noreferrer">
                Start Free Trial
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white/70"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/5">
            <div className="space-y-1">
              <div className="mb-2">
                <div className="text-xs font-semibold text-white/40 uppercase tracking-wider px-3 mb-2">Features</div>
                {productLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block px-3 py-2 text-sm text-white/60 hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <Link to="/pricing" className="block px-3 py-2 text-sm text-white/70 hover:text-white font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
                Pricing
              </Link>
              <Link to="/blog" className="block px-3 py-2 text-sm text-white/70 hover:text-white font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
                Blog
              </Link>
              <Link to="/about" className="block px-3 py-2 text-sm text-white/70 hover:text-white font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-sm text-white/70 hover:text-white font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
              <div className="pt-4 space-y-2 border-t border-white/5 mt-2">
                <Button asChild variant="ghost" className="w-full justify-center text-white/70 hover:text-white">
                  <a href="https://watch.kloudfox.com/login" target="_blank" rel="noopener noreferrer">Log in</a>
                </Button>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
                  <a href="https://watch.kloudfox.com/register" target="_blank" rel="noopener noreferrer">Start Free Trial</a>
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
