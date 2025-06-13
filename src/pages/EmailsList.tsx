
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Mail, Lock } from 'lucide-react';

const EmailsList = () => {
  // Ensure complete privacy and no indexing
  useEffect(() => {
    // Set multiple meta tags for complete privacy
    const setMetaTag = (name: string, content: string) => {
      const existing = document.querySelector(`meta[name="${name}"]`);
      if (existing) {
        existing.setAttribute('content', content);
      } else {
        const meta = document.createElement('meta');
        meta.name = name;
        meta.content = content;
        document.head.appendChild(meta);
      }
    };

    setMetaTag('robots', 'noindex, nofollow, noarchive, nosnippet, noimageindex, nositelinkssearchbox');
    setMetaTag('googlebot', 'noindex, nofollow, noarchive, nosnippet');
    
    // Add X-Robots-Tag equivalent via meta
    const xRobots = document.createElement('meta');
    xRobots.httpEquiv = 'X-Robots-Tag';
    xRobots.content = 'noindex, nofollow, noarchive, nosnippet';
    document.head.appendChild(xRobots);

    return () => {
      // Cleanup on unmount
      document.querySelectorAll('meta[name="robots"], meta[name="googlebot"], meta[http-equiv="X-Robots-Tag"]').forEach(meta => meta.remove());
    };
  }, []);

  // Extended list of all available email campaigns
  const emailCampaigns = [
    {
      id: 'agency-downtime-cost',
      title: 'Agency Downtime Cost Calculator',
      description: 'Calculate how much downtime is costing your agency clients',
      subject: '💰 Your Agency Clients Are Losing $$$$ Every Second Their Sites Are Down'
    },
    {
      id: 'dev-team-horror',
      title: 'Developer Team Horror Story',
      description: 'A tale of preventable downtime that cost a dev team dearly',
      subject: '😱 This Dev Team Lost a $50K Client Overnight (Preventable!)'
    },
    {
      id: 'ecommerce-urgency',
      title: 'E-commerce Downtime Urgency',
      description: 'The critical impact of website downtime on e-commerce revenue',
      subject: '🚨 Your Online Store Is Bleeding Money While You Read This'
    },
    {
      id: 'saas-founder-panic',
      title: 'SaaS Founder Panic Moment',
      description: 'The moment when a SaaS founder realizes their app is down',
      subject: "💔 \"We Just Lost Our Biggest Enterprise Client\" — A SaaS Founder's Nightmare"
    },
    {
      id: 'freelancer-reputation',
      title: 'Freelancer Reputation Guardian',
      description: 'How to protect your reputation as a freelance developer',
      subject: "⭐ Your Client's Website Crashed at 3AM (And You Were the Hero)"
    },
    {
      id: 'startup-growth-killer',
      title: 'Startup Growth Killer',
      description: 'How website downtime can kill your startup momentum',
      subject: '📉 The Silent Growth Killer That 93% of Startups Ignore'
    },
    {
      id: 'enterprise-compliance',
      title: 'Enterprise Compliance Risk',
      description: 'How downtime affects compliance and creates legal exposure',
      subject: "⚠️ Your Organization's Legal Exposure Increases Every Minute Your Site Is Down"
    },
    {
      id: 'marketing-team-nightmare',
      title: 'Marketing Team Nightmare',
      description: 'When your campaign launches but the website crashes',
      subject: '🔥 "The Site Crashed During Our Biggest Campaign Launch!" — CMO Horror Stories'
    },
    {
      id: 'small-business-survival',
      title: 'Small Business Survival Guide',
      description: 'How small businesses can avoid the devastating effects of downtime',
      subject: '🛡️ This Simple Tool Could Save Your Small Business From Disaster'
    },
    {
      id: 'blogger-revenue-loss',
      title: 'Blogger Revenue Loss Alert',
      description: 'How website downtime is silently stealing your ad revenue',
      subject: "💸 Bloggers: You're Losing Ad Revenue Every Time Your Site Goes Down"
    },
    // NEW high-converting emails similar to your examples
    {
      id: '3am-disaster',
      title: '3AM Disaster (Female Business Owner)',
      description: 'Nightmare scenario targeting female entrepreneurs',
      subject: 'Your website crashed at 3AM... nobody told you 😰'
    },
    {
      id: 'boss-babe-insurance',
      title: 'Boss Babe Insurance',
      description: 'Empowerment-focused email for female entrepreneurs',
      subject: 'The $29 "insurance policy" every boss babe needs 👑'
    },
    {
      id: 'mompreneur-alert',
      title: 'Mompreneur Sleep Alert',
      description: 'Mom-focused monitoring solution',
      subject: 'While tucking kids in, your website might be falling apart'
    },
    {
      id: 'revenue-calculator',
      title: 'Revenue Calculator (Data-Driven)',
      description: 'Data-driven approach showing cost of outages',
      subject: 'Your next website outage will cost you $500+ 📊'
    },
    {
      id: 'competitive-edge',
      title: 'Competitive Edge Alert',
      description: 'Beat competitors who sleep through outages',
      subject: 'Beat competitors who sleep through outages ⚡'
    },
    {
      id: 'social-proof-trust',
      title: 'Social Proof Trust Builder',
      description: 'Build trust with customer testimonials',
      subject: '93% of customers leave broken websites forever 😔'
    },
    {
      id: 'final-hours-urgency',
      title: 'Final Hours Urgency',
      description: 'Last chance urgency campaign',
      subject: '⚠️ FINAL HOURS: $29 website monitoring ends tonight'
    },
    {
      id: 'weekend-warrior',
      title: 'Weekend Warrior Business Owner',
      description: 'For side-hustle entrepreneurs',
      subject: 'Your side hustle crashed... while you were at your day job 😤'
    },
    {
      id: 'perfectionist-trap',
      title: 'Perfectionist Trap',
      description: 'For detail-oriented business owners',
      subject: 'Your "perfect" website has a dirty secret 🤫'
    },
    {
      id: 'client-trust-breaker',
      title: 'Client Trust Breaker',
      description: 'About losing client trust due to downtime',
      subject: '"Is your website always this slow?" - Actual client email 💔'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 md:mb-12 text-center">
          <div className="flex items-center justify-center mb-4">
            <Lock className="h-8 w-8 text-red-600 mr-2" />
            <h1 className="text-3xl md:text-4xl font-bold text-red-600">PRIVATE ACCESS ONLY</h1>
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            ⚠️ CONFIDENTIAL: High-converting email campaigns for internal use only.
            These templates are completely private and not indexed by search engines.
          </p>
        </header>

        <div className="bg-red-50 border-2 border-red-200 p-4 md:p-6 rounded-lg shadow-md mb-8">
          <div className="flex items-start gap-4">
            <div className="bg-red-100 p-2 rounded-full">
              <Lock className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h2 className="font-semibold text-lg mb-2 text-red-800">ADMIN ACCESS ONLY</h2>
              <p className="text-red-700">
                🔒 These email templates are for internal marketing use only and are completely hidden from search engines.
                Direct URL access required. Each template includes copy functionality for easy transfer to your CRM.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {emailCampaigns.map((campaign) => (
            <Card key={campaign.id} className="flex flex-col border-2 hover:border-blue-300 transition-colors">
              <CardHeader>
                <CardTitle className="text-lg">{campaign.title}</CardTitle>
                <CardDescription>{campaign.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
                  <p className="font-medium text-sm text-gray-700">Subject Line:</p>
                  <p className="text-gray-900 italic text-sm">{campaign.subject}</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between mt-auto pt-4">
                <Link to={`/emails/${campaign.id}/html`} className="inline-flex items-center">
                  <Button variant="outline" size="sm" className="mr-2 hover:bg-blue-50">
                    HTML Version
                  </Button>
                </Link>
                <Link to={`/emails/${campaign.id}/text`} className="inline-flex items-center">
                  <Button variant="outline" size="sm" className="hover:bg-green-50">
                    Text Version
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
            Back to Homepage
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmailsList;
