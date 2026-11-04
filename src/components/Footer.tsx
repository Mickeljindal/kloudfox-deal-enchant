import { Link } from "react-router-dom";
import { Twitter, Linkedin, Instagram, Facebook, ArrowUpRight } from "lucide-react";
import { SITE, MIGRATION } from "@/lib/site";
import StatusPing from "./kf/StatusPing";

const Footer = () => {
  const year = new Date().getFullYear();

  const columns: Array<{
    title: string;
    links: Array<{ name: string; href: string; external?: boolean }>;
  }> = [
    {
      title: "Product",
      links: [
        { name: "Website Monitoring", href: "/website-monitoring" },
        { name: "SSL Monitoring", href: "/ssl-monitoring" },
        { name: "Status Pages", href: "/status-page" },
        { name: "Incident Management", href: "/incident-management" },
        { name: "Integrations", href: "/integrations" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Pricing", href: "/pricing" },
        { name: "iOS App", href: SITE.app.ios, external: true },
        { name: "Android App", href: SITE.app.android, external: true },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
        ...(MIGRATION.enabled
          ? [{ name: `${MIGRATION.partner.name} transition`, href: MIGRATION.path }]
          : []),
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Terms of Service", href: "/terms-of-service" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Cookie Policy", href: "/cookie-policy" },
        { name: "Refund Policy", href: "/refund-policy" },
        { name: "DPA", href: "/data-processing-agreement" },
      ],
    },
  ];

  const socials = [
    { name: "Twitter", href: SITE.social.twitter, Icon: Twitter },
    { name: "LinkedIn", href: SITE.social.linkedin, Icon: Linkedin },
    { name: "Instagram", href: SITE.social.instagram, Icon: Instagram },
    { name: "Facebook", href: SITE.social.facebook, Icon: Facebook },
  ];

  return (
    <footer className="relative bg-[#050510] text-foreground/70 border-t border-white/5 overflow-hidden">
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-[80%] rounded-full bg-primary/10 blur-[120px] opacity-60" />

      <div className="container mx-auto px-4 py-20 relative">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="col-span-2">
            <Link to="/" className="inline-flex items-center gap-2 mb-5">
              <img src={SITE.logo} alt={`${SITE.name} logo`} className="h-7 w-auto" />
            </Link>
            <p className="text-sm leading-relaxed max-w-xs mb-6">
              {SITE.description}
            </p>
            <a
              href="/status"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur px-3 py-1.5 text-xs text-white/70 hover:text-white hover:border-white/20 transition-colors"
            >
              <StatusPing tone="up" />
              All systems operational
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-white text-sm font-semibold mb-4">{col.title}</h3>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.name}>
                    {l.external ? (
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:text-white transition-colors inline-flex items-center gap-1"
                      >
                        {l.name}
                        <ArrowUpRight className="h-3 w-3 opacity-50" />
                      </a>
                    ) : (
                      <Link to={l.href} className="text-sm hover:text-white transition-colors">
                        {l.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Big wordmark */}
        <div aria-hidden className="mt-16 select-none pointer-events-none">
          <div className="text-[18vw] md:text-[14vw] leading-none font-display font-black bg-gradient-to-b from-white/[0.08] to-transparent bg-clip-text text-transparent tracking-tight">
            kloudfox.
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © {year} {SITE.legalName}. All rights reserved. Made with care in {SITE.address.addressLocality}, {SITE.address.addressRegion}.
          </p>
          <div className="flex items-center gap-3">
            {socials.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="h-8 w-8 inline-flex items-center justify-center rounded-lg border border-white/10 text-white/60 hover:text-white hover:bg-white/5 hover:border-white/20 transition-colors"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
