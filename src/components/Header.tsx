
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();

  const handleAppSumoRedirect = () => {
    window.open('https://appsumo.8odi.net/MAoPn2', '_blank');
  };

  const productLinks = [
    { name: "Website Monitoring", href: "/website-monitoring" },
    { name: "Server Monitoring", href: "/server-monitoring" },
    { name: "SSL Monitoring", href: "/ssl-monitoring" },
    { name: "Status Pages", href: "/status-page" },
    { name: "Incident Management", href: "/incident-management" },
    { name: "Integrations", href: "/integrations" },
  ];

  return (
    <header className="bg-gray-900 shadow-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img 
              src="https://watch.kloudfox.com/assets/images/logo/kloudfox_logo.svg" 
              alt="KloudFox Logo" 
              className="h-8"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="flex items-center text-white hover:text-orange-400 font-medium transition-colors"
              >
                Features
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-gray-800 rounded-lg shadow-lg border border-gray-700 py-2 z-50">
                  {productLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-orange-400 transition-colors"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/pricing" className="text-white hover:text-orange-400 font-medium transition-colors">
              Pricing
            </Link>
            <Link to="/blog" className="text-white hover:text-orange-400 font-medium transition-colors">
              Blog
            </Link>
            <Link to="/about" className="text-white hover:text-orange-400 font-medium transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="text-white hover:text-orange-400 font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild variant="outline" className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white">
              <a href="https://watch.kloudfox.com/login" target="_blank" rel="noopener noreferrer">
                Login
              </a>
            </Button>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <a href="https://watch.kloudfox.com/register" target="_blank" rel="noopener noreferrer">
                Free Trial
              </a>
            </Button>
            <Button 
              onClick={handleAppSumoRedirect}
              className="bg-orange-500 hover:bg-orange-600"
            >
              Get Deal $29
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="space-y-4">
              <div>
                <div className="font-medium text-white mb-2">Features</div>
                <div className="space-y-2 pl-4">
                  {productLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="block text-gray-300 hover:text-orange-400 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link to="/pricing" className="block text-white hover:text-orange-400 font-medium transition-colors">
                Pricing
              </Link>
              <Link to="/blog" className="block text-white hover:text-orange-400 font-medium transition-colors">
                Blog
              </Link>
              <Link to="/about" className="block text-white hover:text-orange-400 font-medium transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="block text-white hover:text-orange-400 font-medium transition-colors">
                Contact
              </Link>
              <div className="space-y-2 pt-4 border-t border-gray-800">
                <Button asChild variant="outline" className="w-full border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white">
                  <a href="https://watch.kloudfox.com/login" target="_blank" rel="noopener noreferrer">
                    Login
                  </a>
                </Button>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <a href="https://watch.kloudfox.com/register" target="_blank" rel="noopener noreferrer">
                    Free Trial
                  </a>
                </Button>
                <Button 
                  onClick={handleAppSumoRedirect}
                  className="w-full bg-orange-500 hover:bg-orange-600"
                >
                  Get Deal $29
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
