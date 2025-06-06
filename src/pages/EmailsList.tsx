
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Mail } from 'lucide-react';

const EmailsList = () => {
  // List of all available email campaigns
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
      subject: '💔 "We Just Lost Our Biggest Enterprise Client" — A SaaS Founder's Nightmare'
    },
    {
      id: 'freelancer-reputation',
      title: 'Freelancer Reputation Guardian',
      description: 'How to protect your reputation as a freelance developer',
      subject: '⭐ Your Client's Website Crashed at 3AM (And You Were the Hero)'
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
      subject: '⚠️ Your Organization's Legal Exposure Increases Every Minute Your Site Is Down'
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
      subject: '💸 Bloggers: You're Losing Ad Revenue Every Time Your Site Goes Down'
    }
  ];

  // Add noindex meta tag to prevent indexing
  if (typeof document !== 'undefined') {
    const existingMeta = document.querySelector('meta[name="robots"]');
    if (existingMeta) {
      existingMeta.setAttribute('content', 'noindex, nofollow');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'robots';
      meta.content = 'noindex, nofollow';
      document.head.appendChild(meta);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 md:mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Email Campaigns Library</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Browse our collection of high-converting email campaigns for various target audiences.
            Available in both HTML and plain text formats for maximum deliverability.
          </p>
        </header>

        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md mb-8 border border-yellow-200 bg-yellow-50">
          <div className="flex items-start gap-4">
            <div className="bg-yellow-100 p-2 rounded-full">
              <Mail className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <h2 className="font-semibold text-lg mb-2">Internal Use Only</h2>
              <p className="text-gray-600">
                These email templates are for internal use and are not indexed by search engines.
                Each template includes a copy button to easily transfer the content to your CRM or email marketing tool.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {emailCampaigns.map((campaign) => (
            <Card key={campaign.id} className="flex flex-col">
              <CardHeader>
                <CardTitle>{campaign.title}</CardTitle>
                <CardDescription>{campaign.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
                  <p className="font-medium text-sm text-gray-700">Subject Line:</p>
                  <p className="text-gray-900 italic">{campaign.subject}</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between mt-auto pt-4">
                <Link to={`/emails/${campaign.id}/html`} className="inline-flex items-center">
                  <Button variant="outline" size="sm" className="mr-2">
                    HTML Version
                  </Button>
                </Link>
                <Link to={`/emails/${campaign.id}/text`} className="inline-flex items-center">
                  <Button variant="outline" size="sm">
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
