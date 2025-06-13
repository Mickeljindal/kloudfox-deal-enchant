
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="/lovable-uploads/b5c94c8f-8b5c-4d46-89bb-c353f06e28ca.png" 
              alt="KloudFox Logo" 
              className="h-8 mb-4"
            />
            <p className="text-gray-400 mb-4">
              Professional website monitoring and uptime tracking. Never miss downtime again.
            </p>
            <p className="text-sm text-gray-500">
              A KloudBean Company
            </p>
          </div>

          {/* Product Features */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product Features</h3>
            <ul className="space-y-2">
              <li><Link to="/website-monitoring" className="text-gray-400 hover:text-white">Website Monitoring</Link></li>
              <li><Link to="/ssl-monitoring" className="text-gray-400 hover:text-white">SSL Monitoring</Link></li>
              <li><Link to="/status-page" className="text-gray-400 hover:text-white">Status Pages</Link></li>
              <li><Link to="/incident-management" className="text-gray-400 hover:text-white">Incident Management</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white">Pricing</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms-of-service" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/cookie-policy" className="text-gray-400 hover:text-white">Cookie Policy</Link></li>
              <li><Link to="/refund-policy" className="text-gray-400 hover:text-white">Refund Policy</Link></li>
              <li><Link to="/data-processing-agreement" className="text-gray-400 hover:text-white">DPA</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="https://www.facebook.com/profile.php?id=61559311342847" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                Facebook
              </a>
              <a href="https://twitter.com/kloudfox" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                Twitter
              </a>
              <a href="http://linkedin.com/company/kloudfox" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                LinkedIn
              </a>
              <a href="https://www.instagram.com/thekloudfox/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                Instagram
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              © {currentYear} KloudFox. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
