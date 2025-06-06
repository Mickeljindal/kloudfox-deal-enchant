
import { useParams } from 'react-router-dom';
import EmailCampaigns from '@/components/EmailCampaigns';
import { Copy } from 'lucide-react';
import { useState } from 'react';
import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';

const EmailCampaign = () => {
  const { campaignId, type } = useParams();
  const [copyButtonText, setCopyButtonText] = useState('Copy to Clipboard');
  
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
    'blogger-revenue-loss'
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
      <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
        <h1>Invalid Campaign</h1>
        <p>The requested email campaign could not be found.</p>
        <p>Valid campaigns: {validCampaigns.join(', ')}</p>
        <p>Valid types: html, text</p>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', padding: '20px' }}>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          {type === 'html' ? 'HTML Email Preview' : 'Text Email Preview'}
        </h1>
        <Button onClick={handleCopy} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
          <Copy size={16} />
          <span>{copyButtonText}</span>
        </Button>
      </div>
      
      <div id="email-campaign-content" className="bg-white rounded-lg shadow-md p-4 mb-6">
        <EmailCampaigns type={type as 'html' | 'text'} campaignId={campaignId} />
      </div>
      
      <div className="mt-8 bg-gray-100 p-4 rounded-lg">
        <h3 className="font-semibold mb-2">Usage Tips:</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Click "Copy to Clipboard" to copy the entire email content</li>
          <li>Paste directly into your CRM or email marketing tool</li>
          <li>Test send the email before sending to your full list</li>
          <li>Remember to replace placeholders like [AGENCY_NAME] with actual values</li>
        </ul>
      </div>
    </div>
  );
};

export default EmailCampaign;
