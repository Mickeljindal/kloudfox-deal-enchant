
import { useParams, Link } from 'react-router-dom';
import EmailCampaigns from '@/components/EmailCampaigns';
import { Copy, ArrowLeft, Lock } from 'lucide-react';
import { useState, useEffect } from 'react';
import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';

const EmailCampaign = () => {
  const { campaignId, type } = useParams();
  const [copyButtonText, setCopyButtonText] = useState('Copy to Clipboard');
  
  // Ensure complete privacy and no indexing
  useEffect(() => {
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
    
    const xRobots = document.createElement('meta');
    xRobots.httpEquiv = 'X-Robots-Tag';
    xRobots.content = 'noindex, nofollow, noarchive, nosnippet';
    document.head.appendChild(xRobots);

    return () => {
      document.querySelectorAll('meta[name="robots"], meta[name="googlebot"], meta[http-equiv="X-Robots-Tag"]').forEach(meta => meta.remove());
    };
  }, []);

  const validTypes = ['html', 'text'];
  const validCampaigns = [
    'agency-downtime-cost',
    'dev-team-horror', 
    'ecommerce-urgency',
    'saas-founder-panic',
    'freelancer-reputation',
    'startup-growth-killer',
    'enterprise-compliance',
    'marketing-team-nightmare',
    'small-business-survival',
    'blogger-revenue-loss',
    // New campaigns
    '3am-disaster',
    'boss-babe-insurance',
    'mompreneur-alert',
    'revenue-calculator',
    'competitive-edge',
    'social-proof-trust',
    'final-hours-urgency',
    'weekend-warrior',
    'perfectionist-trap',
    'client-trust-breaker'
  ];

  const handleCopy = async () => {
    if (!campaignId || !type) return;
    
    try {
      let contentToCopy = '';
      const campaign = document.getElementById('email-campaign-content');
      
      if (type === 'html') {
        contentToCopy = campaign?.querySelector('.email-html-content')?.innerHTML || '';
      } else {
        contentToCopy = campaign?.querySelector('.email-text-content')?.textContent || '';
      }
      
      await navigator.clipboard.writeText(contentToCopy);
      setCopyButtonText('Copied!');
      toast({
        title: "Copied to clipboard!",
        description: "Email content has been copied to your clipboard.",
      });
      
      setTimeout(() => {
        setCopyButtonText('Copy to Clipboard');
      }, 2000);
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Please try again or copy manually.",
        variant: "destructive",
      });
    }
  };

  if (!campaignId || !type || !validTypes.includes(type) || !validCampaigns.includes(campaignId)) {
    return (
      <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'Arial, sans-serif', backgroundColor: '#fee2e2' }}>
        <Lock className="mx-auto h-16 w-16 text-red-600 mb-4" />
        <h1 className="text-2xl font-bold text-red-800 mb-4">⚠️ PRIVATE ACCESS - Invalid Campaign</h1>
        <p className="text-red-700 mb-4">The requested email campaign could not be found.</p>
        <Link to="/emails" className="text-blue-600 hover:text-blue-800 font-medium mt-4 inline-block">
          ← Back to Private Email Campaigns
        </Link>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', padding: '20px' }}>
      <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
        <div className="flex items-center">
          <Lock className="h-5 w-5 text-red-500 mr-2" />
          <span className="text-red-800 font-semibold">CONFIDENTIAL - Internal Use Only</span>
        </div>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Link to="/emails" className="text-gray-600 hover:text-gray-900 mr-4">
            <div className="flex items-center">
              <ArrowLeft size={16} />
              <span className="ml-1">All Private Emails</span>
            </div>
          </Link>
          <h1 className="text-2xl font-bold">
            🔒 {type === 'html' ? 'HTML Email Preview' : 'Text Email Preview'}
          </h1>
        </div>
        <Button onClick={handleCopy} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
          <Copy size={16} />
          <span>{copyButtonText}</span>
        </Button>
      </div>
      
      <div id="email-campaign-content" className="bg-white rounded-lg shadow-md p-4 mb-6 border-2 border-blue-200">
        <EmailCampaigns type={type as 'html' | 'text'} campaignId={campaignId} />
      </div>
      
      <div className="mt-8 bg-gray-100 p-4 rounded-lg border border-gray-300">
        <h3 className="font-semibold mb-2">🔒 Private Usage Tips:</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>Click "Copy to Clipboard" to copy the entire email content</li>
          <li>Paste directly into your CRM or email marketing tool</li>
          <li>Test send the email before sending to your full list</li>
          <li>Remember to replace placeholders like [FIRST_NAME] with actual values</li>
          <li>⚠️ These templates are confidential - do not share publicly</li>
        </ul>
      </div>
    </div>
  );
};

export default EmailCampaign;
