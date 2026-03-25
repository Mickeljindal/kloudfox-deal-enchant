
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a1a] text-white/60 border-t border-white/5">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-1">
            <img
              src="/lovable-uploads/b5c94c8f-8b5c-4d46-89bb-c353f06e28ca.png"
              alt="KloudFox Logo"
              className="h-7 mb-4"
            />
            <p className="text-sm leading-relaxed max-w-xs">
              AI-powered website monitoring and uptime tracking. Never miss downtime again.
            </p>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Product</h3>
            <ul className="space-y-2.5">
              <li><Link to="/website-monitoring" className="text-sm hover:text-white transition-colors">Website Monitoring</Link></li>
              <li><Link to="/ssl-monitoring" className="text-sm hover:text-white transition-colors">SSL Monitoring</Link></li>
              <li><Link to="/status-page" className="text-sm hover:text-white transition-colors">Status Pages</Link></li>
              <li><Link to="/incident-management" className="text-sm hover:text-white transition-colors">Incident Management</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Company</h3>
            <ul className="space-y-2.5">
              <li><Link to="/about" className="text-sm hover:text-white transition-colors">About</Link></li>
              <li><Link to="/pricing" className="text-sm hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/blog" className="text-sm hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Legal</h3>
            <ul className="space-y-2.5">
              <li><Link to="/terms-of-service" className="text-sm hover:text-white transition-colors">Terms</Link></li>
              <li><Link to="/privacy-policy" className="text-sm hover:text-white transition-colors">Privacy</Link></li>
              <li><Link to="/cookie-policy" className="text-sm hover:text-white transition-colors">Cookies</Link></li>
              <li><Link to="/refund-policy" className="text-sm hover:text-white transition-colors">Refunds</Link></li>
              <li><Link to="/data-processing-agreement" className="text-sm hover:text-white transition-colors">DPA</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6">
            {[
              { name: "Twitter", url: "https://twitter.com/kloudfox" },
              { name: "LinkedIn", url: "http://linkedin.com/company/kloudfox" },
              { name: "Instagram", url: "https://www.instagram.com/thekloudfox/" },
              { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61559311342847" },
            ].map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors">
                {s.name}
              </a>
            ))}
          </div>
          <p className="text-sm">© {currentYear} KloudFox. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
