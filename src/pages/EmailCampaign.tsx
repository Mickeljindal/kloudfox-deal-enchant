
import { useParams } from 'react-router-dom';
import EmailCampaigns from '@/components/EmailCampaigns';

const EmailCampaign = () => {
  const { campaignId, type } = useParams();
  
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
      <EmailCampaigns type={type as 'html' | 'text'} campaignId={campaignId} />
    </div>
  );
};

export default EmailCampaign;
