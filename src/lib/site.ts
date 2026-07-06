/**
 * Site-wide constants used by SEO, sitemap, JSON-LD, and share primitives.
 * Change these in one place; everything downstream updates.
 */

export const SITE = {
  name: "Kloudfox",
  legalName: "Kloudfox, Inc.",
  domain: "kloudfox.com",
  url: "https://kloudfox.com",
  tagline: "Know before your customers do",
  description:
    "Kloudfox is AI-powered website monitoring that predicts outages before they happen. 40-second checks, multi-region probes, SSL and status pages, all in one platform.",
  short: "AI-powered website monitoring that predicts outages.",

  ogImage: "/og/default.png",
  logo: "/lovable-uploads/b5c94c8f-8b5c-4d46-89bb-c353f06e28ca.png",
  favicon: "/lovable-uploads/eca8e4b3-e57a-4e31-9a4f-635c8901e628.png",

  founded: "2024",
  address: {
    streetAddress: "",
    addressLocality: "Darien",
    addressRegion: "CT",
    addressCountry: "US",
  },
  contact: {
    email: "support@kloudfox.com",
  },
  social: {
    twitter: "https://twitter.com/kloudfox",
    twitterHandle: "@kloudfox",
    linkedin: "http://linkedin.com/company/kloudfox",
    instagram: "https://www.instagram.com/thekloudfox/",
    facebook: "https://www.facebook.com/profile.php?id=61559311342847",
    github: "",
  },
  app: {
    register: "https://watch.kloudfox.com/register",
    login: "https://watch.kloudfox.com/login",
    ios: "https://apps.apple.com/in/app/kloudfox/id6560116168",
    android: "https://play.google.com/store/apps/details?id=com.kloudfox",
  },
} as const;

export const NAV = {
  features: [
    { name: "Website Monitoring", href: "/website-monitoring", desc: "40-second HTTP(S) checks worldwide." },
    { name: "SSL Monitoring", href: "/ssl-monitoring", desc: "Catch cert issues before browsers do." },
    { name: "Status Pages", href: "/status-page", desc: "Beautiful hosted status pages." },
    { name: "Incident Management", href: "/incident-management", desc: "On-call, runbooks, and postmortems." },
    { name: "Integrations", href: "/integrations", desc: "Slack, PagerDuty, Zapier, webhooks." },
  ],
  primary: [
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
} as const;

export function absoluteUrl(path = "/"): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${p}`;
}
