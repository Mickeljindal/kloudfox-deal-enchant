import React from 'react';

interface EmailCampaignProps {
  type: 'html' | 'text';
  campaignId: string;
}

const EmailCampaigns = ({ type, campaignId }: EmailCampaignProps) => {
  const campaigns = {
    'agency-downtime-cost': {
      subject: 'Your Client Just Lost $47,000 While You Were Sleeping',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Critical: Your Client's Website is Down</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4;">
            <tr>
              <td align="center" style="padding: 20px 0;">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                  <tr>
                    <td style="padding: 40px 30px; text-align: center; background: linear-gradient(135deg, #1a1f2c 0%, #2d3748 100%);">
                      <img src="https://watch.kloudfox.com/assets/images/logo/kloudfox_logo.svg" alt="KloudFox" style="height: 40px; margin-bottom: 20px;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: bold;">🚨 URGENT: Website Down Alert</h1>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 30px;">
                      <p style="font-size: 18px; margin-bottom: 20px; color: #e53e3e; font-weight: bold;">
                        Hi [AGENCY_NAME],
                      </p>
                      <p style="margin-bottom: 20px;">
                        At 3:47 AM last Tuesday, your biggest client's website went down for 6 hours.
                      </p>
                      <p style="margin-bottom: 20px;">
                        <strong>The damage?</strong> $47,000 in lost revenue. 892 frustrated customers. And one very angry client questioning your services.
                      </p>
                      <p style="margin-bottom: 25px;">
                        But here's the worst part: <em>You had no idea it was happening.</em>
                      </p>
                      
                      <div style="background-color: #fed7d7; border-left: 4px solid #e53e3e; padding: 15px; margin: 25px 0;">
                        <p style="margin: 0; color: #742a2a; font-weight: bold;">
                          "We discovered our website was down when customers started calling. Where were you?"
                        </p>
                        <p style="margin: 5px 0 0 0; color: #742a2a; font-size: 14px;">
                          - CEO of a $2M e-commerce client
                        </p>
                      </div>
                      
                      <p style="margin-bottom: 20px;">
                        As an agency, your reputation depends on keeping your clients' websites running 24/7. But most agencies are flying blind.
                      </p>
                      
                      <h3 style="color: #1a1f2c; margin: 30px 0 15px 0;">What if you could:</h3>
                      <ul style="padding-left: 20px; margin-bottom: 25px;">
                        <li style="margin-bottom: 8px;">Get instant SMS alerts the second ANY client website goes down</li>
                        <li style="margin-bottom: 8px;">Monitor SSL certificates before they expire (and crash sites)</li>
                        <li style="margin-bottom: 8px;">Track website performance across all your clients</li>
                        <li style="margin-bottom: 8px;">Provide professional status pages to build client confidence</li>
                      </ul>
                      
                      <div style="text-align: center; margin: 30px 0;">
                        <a href="https://appsumo.8odi.net/MAoPn2" style="background: linear-gradient(135deg, #38a169 0%, #25855a 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 16px; display: inline-block;">
                          Protect Your Agency's Reputation (89% OFF)
                        </a>
                      </div>
                      
                      <p style="margin-bottom: 20px;">
                        KloudFox monitors 50,000+ websites for agencies worldwide. Now available for a limited time at 89% off through AppSumo.
                      </p>
                      
                      <p style="margin-bottom: 20px; font-size: 14px; color: #666;">
                        Don't wait for the next outage to hurt your client relationships.
                      </p>
                      
                      <p style="margin-bottom: 5px;">
                        Best regards,<br>
                        The KloudFox Team
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 20px 30px; background-color: #f7fafc; border-top: 1px solid #e2e8f0; text-align: center;">
                      <p style="margin: 0; font-size: 12px; color: #666;">
                        This limited-time offer expires soon. Join 10,000+ websites already protected.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
      text: `🚨 URGENT: Your Client Just Lost $47,000 While You Were Sleeping

Hi [AGENCY_NAME],

At 3:47 AM last Tuesday, your biggest client's website went down for 6 hours.

The damage? $47,000 in lost revenue. 892 frustrated customers. And one very angry client questioning your services.

But here's the worst part: You had no idea it was happening.

"We discovered our website was down when customers started calling. Where were you?" - CEO of a $2M e-commerce client

As an agency, your reputation depends on keeping your clients' websites running 24/7. But most agencies are flying blind.

What if you could:
• Get instant SMS alerts the second ANY client website goes down
• Monitor SSL certificates before they expire (and crash sites)
• Track website performance across all your clients
• Provide professional status pages to build client confidence

KloudFox monitors 50,000+ websites for agencies worldwide. Now available for a limited time at 89% off through AppSumo.

Get KloudFox (89% OFF): https://appsumo.8odi.net/MAoPn2

Don't wait for the next outage to hurt your client relationships.

Best regards,
The KloudFox Team

This limited-time offer expires soon. Join 10,000+ websites already protected.`
    },

    'dev-team-horror': {
      subject: 'The 3 AM Phone Call That Ruined Everything',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>The Developer's Nightmare</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Courier New', monospace; line-height: 1.6; color: #333;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #1a1a1a;">
            <tr>
              <td align="center" style="padding: 20px 0;">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #2d2d2d; border-radius: 8px; overflow: hidden; border: 1px solid #404040;">
                  <tr>
                    <td style="padding: 40px 30px; text-align: center; background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);">
                      <img src="https://watch.kloudfox.com/assets/images/logo/kloudfox_logo.svg" alt="KloudFox" style="height: 40px; margin-bottom: 20px;">
                      <h1 style="color: #ff6b6b; margin: 0; font-size: 24px; font-weight: bold;">👨‍💻 DEVELOPER ALERT</h1>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 30px; color: #e0e0e0;">
                      <div style="background-color: #1a1a1a; padding: 20px; border-radius: 8px; border-left: 4px solid #ff6b6b; margin-bottom: 25px; font-family: monospace;">
                        <p style="margin: 0; color: #ff6b6b; font-size: 14px;">[3:17 AM] CRITICAL ERROR:</p>
                        <p style="margin: 5px 0 0 0; color: #ffffff;">Production server unresponsive</p>
                        <p style="margin: 5px 0 0 0; color: #ffffff;">SSL certificate expired</p>
                        <p style="margin: 5px 0 0 0; color: #ffffff;">500+ users affected</p>
                      </div>
                      
                      <p style="margin-bottom: 20px; color: #ffffff; font-size: 18px;">
                        Hey [DEV_NAME],
                      </p>
                      
                      <p style="margin-bottom: 20px;">
                        Remember that sinking feeling when you wake up to 47 missed calls and your production site is down?
                      </p>
                      
                      <p style="margin-bottom: 20px;">
                        <strong style="color: #ffd93d;">We've all been there:</strong>
                      </p>
                      
                      <ul style="padding-left: 20px; margin-bottom: 25px;">
                        <li style="margin-bottom: 8px; color: #ff9999;">The SSL cert that expired on Sunday (when you were offline)</li>
                        <li style="margin-bottom: 8px; color: #ff9999;">The database connection that died during peak traffic</li>
                        <li style="margin-bottom: 8px; color: #ff9999;">The angry client emails piling up in your inbox</li>
                        <li style="margin-bottom: 8px; color: #ff9999;">The weekend "emergency" that could have been prevented</li>
                      </ul>
                      
                      <div style="background-color: #2a2a2a; border: 1px solid #404040; padding: 20px; margin: 25px 0; border-radius: 8px;">
                        <p style="margin: 0; color: #ffd93d; font-weight: bold; font-size: 16px;">
                          "I wish I had known about the server issues before my client did."
                        </p>
                        <p style="margin: 10px 0 0 0; color: #cccccc; font-size: 14px;">
                          - Senior Developer at a Fortune 500 company
                        </p>
                      </div>
                      
                      <h3 style="color: #4ecdc4; margin: 30px 0 15px 0;">What if monitoring was as simple as:</h3>
                      
                      <div style="background-color: #1a1a1a; padding: 15px; border-radius: 8px; margin-bottom: 20px; font-family: monospace; font-size: 14px;">
                        <p style="margin: 0; color: #4ecdc4;">$ curl -X POST "https://api.kloudfox.com/monitors" \\</p>
                        <p style="margin: 0; color: #ffffff;">&nbsp;&nbsp;-d '{"url": "https://yoursite.com"}' \\</p>
                        <p style="margin: 0; color: #ffffff;">&nbsp;&nbsp;-H "Content-Type: application/json"</p>
                        <br>
                        <p style="margin: 0; color: #90ee90;">✓ Monitor created successfully</p>
                        <p style="margin: 0; color: #90ee90;">✓ 40-second monitoring interval active</p>
                        <p style="margin: 0; color: #90ee90;">✓ SMS/Slack alerts configured</p>
                      </div>
                      
                      <div style="text-align: center; margin: 30px 0;">
                        <a href="https://appsumo.8odi.net/MAoPn2" style="background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 16px; display: inline-block;">
                          Get KloudFox (Developer Special - $29)
                        </a>
                      </div>
                      
                      <p style="margin-bottom: 20px;">
                        Skip the 3 AM panic attacks. KloudFox monitors your sites every 40 seconds and alerts you before your users (or boss) notice anything.
                      </p>
                      
                      <p style="margin-bottom: 5px;">
                        Happy coding,<br>
                        The KloudFox Team
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 20px 30px; background-color: #1a1a1a; border-top: 1px solid #404040; text-align: center;">
                      <p style="margin: 0; font-size: 12px; color: #888;">
                        Limited time: Lifetime deal for developers. Usually $29/month, now just $29 forever.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
      text: `👨‍💻 The 3 AM Phone Call That Ruined Everything

[3:17 AM] CRITICAL ERROR:
Production server unresponsive
SSL certificate expired
500+ users affected

Hey [DEV_NAME],

Remember that sinking feeling when you wake up to 47 missed calls and your production site is down?

We've all been there:
• The SSL cert that expired on Sunday (when you were offline)
• The database connection that died during peak traffic  
• The angry client emails piling up in your inbox
• The weekend "emergency" that could have been prevented

"I wish I had known about the server issues before my client did." - Senior Developer at a Fortune 500 company

What if monitoring was as simple as:
$ curl -X POST "https://api.kloudfox.com/monitors" \\
  -d '{"url": "https://yoursite.com"}' \\
  -H "Content-Type: application/json"

✓ Monitor created successfully
✓ 40-second monitoring interval active  
✓ SMS/Slack alerts configured

Skip the 3 AM panic attacks. KloudFox monitors your sites every 40 seconds and alerts you before your users (or boss) notice anything.

Get KloudFox (Developer Special): https://appsumo.8odi.net/MAoPn2

Happy coding,
The KloudFox Team

Limited time: Lifetime deal for developers. Usually $29/month, now just $29 forever.`
    },

    'ecommerce-urgency': {
      subject: 'Your Store Was Down for 4 Hours. Here\'s What You Lost.',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>E-commerce Emergency</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #fff5f5;">
            <tr>
              <td align="center" style="padding: 20px 0;">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
                  <tr>
                    <td style="padding: 40px 30px; text-align: center; background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);">
                      <img src="https://watch.kloudfox.com/assets/images/logo/kloudfox_logo.svg" alt="KloudFox" style="height: 40px; margin-bottom: 20px;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">💸 STORE DOWN = MONEY LOST</h1>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 30px;">
                      <p style="font-size: 18px; margin-bottom: 20px; color: #dc2626; font-weight: bold;">
                        Hi [STORE_OWNER],
                      </p>
                      
                      <div style="background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%); padding: 25px; border-radius: 12px; margin: 25px 0; text-align: center; border: 2px solid #dc2626;">
                        <h2 style="color: #dc2626; margin: 0 0 15px 0; font-size: 24px;">⏰ DOWNTIME CALCULATOR</h2>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px;">
                          <div style="text-align: center;">
                            <div style="font-size: 32px; font-weight: bold; color: #991b1b;">$12,450</div>
                            <div style="color: #7f1d1d; font-size: 14px;">Lost Revenue (4 hours)</div>
                          </div>
                          <div style="text-align: center;">
                            <div style="font-size: 32px; font-weight: bold; color: #991b1b;">847</div>
                            <div style="color: #7f1d1d; font-size: 14px;">Frustrated Customers</div>
                          </div>
                        </div>
                      </div>
                      
                      <p style="margin-bottom: 20px; font-size: 16px;">
                        Last Black Friday, a major e-commerce site went down for 4 hours during peak shopping time.
                      </p>
                      
                      <p style="margin-bottom: 20px;">
                        <strong>The damage was devastating:</strong>
                      </p>
                      
                      <ul style="padding-left: 20px; margin-bottom: 25px; color: #dc2626;">
                        <li style="margin-bottom: 8px;"><strong>$847,000 in lost sales</strong> (their highest traffic day)</li>
                        <li style="margin-bottom: 8px;"><strong>15,000 customers</strong> who couldn't complete purchases</li>
                        <li style="margin-bottom: 8px;"><strong>2,300 support tickets</strong> from confused shoppers</li>
                        <li style="margin-bottom: 8px;"><strong>67% of customers</strong> went to competitors instead</li>
                      </ul>
                      
                      <div style="background-color: #f3f4f6; border-left: 4px solid #dc2626; padding: 20px; margin: 25px 0;">
                        <h3 style="color: #dc2626; margin: 0 0 10px 0;">The Real Cost of Downtime</h3>
                        <p style="margin: 0; color: #374151;">
                          <strong>Small store ($50K/month):</strong> $69/hour lost<br>
                          <strong>Medium store ($200K/month):</strong> $278/hour lost<br>
                          <strong>Large store ($1M/month):</strong> $1,389/hour lost
                        </p>
                      </div>
                      
                      <h3 style="color: #1f2937; margin: 30px 0 15px 0;">Every minute your store is down:</h3>
                      <ul style="padding-left: 20px; margin-bottom: 25px;">
                        <li style="margin-bottom: 8px;">Customers abandon their carts and go to competitors</li>
                        <li style="margin-bottom: 8px;">Your Google Ads budget gets wasted on broken links</li>
                        <li style="margin-bottom: 8px;">Social media followers lose trust in your brand</li>
                        <li style="margin-bottom: 8px;">SEO rankings drop due to poor user experience</li>
                      </ul>
                      
                      <div style="text-align: center; margin: 30px 0;">
                        <a href="https://appsumo.8odi.net/MAoPn2" style="background: linear-gradient(135deg, #059669 0%, #047857 100%); color: white; padding: 18px 35px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 18px; display: inline-block; box-shadow: 0 4px 15px rgba(5,150,105,0.3);">
                          Protect Your Revenue - Get KloudFox Now
                        </a>
                        <div style="margin-top: 10px; color: #059669; font-weight: bold;">89% OFF - Only $29 (Usually $348/year)</div>
                      </div>
                      
                      <p style="margin-bottom: 20px; background-color: #ecfdf5; padding: 15px; border-radius: 8px; border-left: 4px solid #10b981;">
                        <strong style="color: #047857;">KloudFox monitors your store every 40 seconds</strong> and sends instant alerts via SMS, email, and Slack the moment something goes wrong.
                      </p>
                      
                      <p style="margin-bottom: 20px; font-size: 14px; color: #666;">
                        Don't lose another sale to preventable downtime. Protect your revenue 24/7.
                      </p>
                      
                      <p style="margin-bottom: 5px;">
                        To your success,<br>
                        The KloudFox Team
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 20px 30px; background-color: #f9fafb; border-top: 1px solid #e5e7eb; text-align: center;">
                      <p style="margin: 0; font-size: 12px; color: #666;">
                        ⚡ Start monitoring in 60 seconds. Join 10,000+ stores already protected.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
      text: `💸 Your Store Was Down for 4 Hours. Here's What You Lost.

Hi [STORE_OWNER],

⏰ DOWNTIME CALCULATOR
$12,450 - Lost Revenue (4 hours)
847 - Frustrated Customers

Last Black Friday, a major e-commerce site went down for 4 hours during peak shopping time.

The damage was devastating:
• $847,000 in lost sales (their highest traffic day)
• 15,000 customers who couldn't complete purchases  
• 2,300 support tickets from confused shoppers
• 67% of customers went to competitors instead

The Real Cost of Downtime:
Small store ($50K/month): $69/hour lost
Medium store ($200K/month): $278/hour lost  
Large store ($1M/month): $1,389/hour lost

Every minute your store is down:
• Customers abandon their carts and go to competitors
• Your Google Ads budget gets wasted on broken links
• Social media followers lose trust in your brand
• SEO rankings drop due to poor user experience

KloudFox monitors your store every 40 seconds and sends instant alerts via SMS, email, and Slack the moment something goes wrong.

Protect Your Revenue: https://appsumo.8odi.net/MAoPn2
89% OFF - Only $29 (Usually $348/year)

Don't lose another sale to preventable downtime. Protect your revenue 24/7.

To your success,
The KloudFox Team

⚡ Start monitoring in 60 seconds. Join 10,000+ stores already protected.`
    },

    'saas-founder-panic': {
      subject: 'Your SaaS Lost 2,847 Users During Last Night\'s Outage',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>SaaS Founder Emergency</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0f0f23;">
            <tr>
              <td align="center" style="padding: 20px 0;">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #1a1a2e; border-radius: 12px; overflow: hidden; border: 1px solid #16213e;">
                  <tr>
                    <td style="padding: 40px 30px; text-align: center; background: linear-gradient(135deg, #0f0f23 0%, #16213e 100%);">
                      <img src="https://watch.kloudfox.com/assets/images/logo/kloudfox_logo.svg" alt="KloudFox" style="height: 40px; margin-bottom: 20px;">
                      <h1 style="color: #e94560; margin: 0; font-size: 26px; font-weight: 600;">⚠️ SAAS MELTDOWN ALERT</h1>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 35px; color: #eaeaea;">
                      <p style="font-size: 18px; margin-bottom: 20px; color: #e94560; font-weight: 600;">
                        Hey [FOUNDER_NAME],
                      </p>
                      
                      <p style="margin-bottom: 20px; font-size: 16px;">
                        Your competitor's SaaS went down for 8 hours last Tuesday.
                      </p>
                      
                      <div style="background: linear-gradient(135deg, #2c1810 0%, #4a1f1a 100%); padding: 25px; border-radius: 12px; margin: 25px 0; border-left: 4px solid #e94560;">
                        <h3 style="color: #e94560; margin: 0 0 15px 0; font-size: 20px;">💀 THE DAMAGE REPORT</h3>
                        <ul style="list-style: none; padding: 0; margin: 0;">
                          <li style="margin-bottom: 12px; color: #ff6b6b;">📉 <strong>2,847 users churned</strong> (couldn't access their data)</li>
                          <li style="margin-bottom: 12px; color: #ff6b6b;">💸 <strong>$124,000 MRR lost</strong> (angry cancellations)</li>
                          <li style="margin-bottom: 12px; color: #ff6b6b;">📱 <strong>5,200 support tickets</strong> (overwhelmed team)</li>
                          <li style="margin-bottom: 12px; color: #ff6b6b;">⭐ <strong>1.2 star rating</strong> (from 4.8 stars)</li>
                          <li style="margin-bottom: 0; color: #ff6b6b;">📰 <strong>TechCrunch article</strong> ("Why [Company] is Failing")</li>
                        </ul>
                      </div>
                      
                      <p style="margin-bottom: 20px;">
                        The worst part? <strong style="color: #ffd93d;">The outage was preventable.</strong>
                      </p>
                      
                      <div style="background-color: #0a0a0a; border: 1px solid #333; padding: 20px; margin: 25px 0; border-radius: 8px;">
                        <p style="margin: 0; color: #ffd93d; font-weight: bold; font-size: 16px; font-style: italic;">
                          "We had no idea our API was failing until customers started screaming on Twitter. The damage to our brand took months to repair."
                        </p>
                        <p style="margin: 10px 0 0 0; color: #999; font-size: 14px;">
                          - Founder of a $50M ARR SaaS (name withheld)
                        </p>
                      </div>
                      
                      <h3 style="color: #4ecdc4; margin: 30px 0 15px 0;">As a SaaS founder, you know:</h3>
                      <ul style="padding-left: 20px; margin-bottom: 25px;">
                        <li style="margin-bottom: 8px;">Every minute of downtime = massive churn</li>
                        <li style="margin-bottom: 8px;">Customer trust takes years to build, seconds to destroy</li>
                        <li style="margin-bottom: 8px;">Competitors are watching for your mistakes</li>
                        <li style="margin-bottom: 8px;">Investors hate unreliable products</li>
                      </ul>
                      
                      <div style="background: linear-gradient(135deg, #1a4d4d 0%, #0d2626 100%); padding: 20px; border-radius: 8px; margin: 25px 0;">
                        <h4 style="color: #4ecdc4; margin: 0 0 10px 0;">KloudFox for SaaS:</h4>
                        <ul style="list-style: none; padding: 0; margin: 0; color: #e0e0e0;">
                          <li style="margin-bottom: 8px;">✅ Monitor API endpoints, web app, and infrastructure</li>
                          <li style="margin-bottom: 8px;">✅ Instant Slack alerts to your dev team</li>
                          <li style="margin-bottom: 8px;">✅ Public status pages for transparency</li>
                          <li style="margin-bottom: 8px;">✅ Performance metrics for optimization</li>
                          <li style="margin-bottom: 0;">✅ Incident tracking and postmortems</li>
                        </ul>
                      </div>
                      
                      <div style="text-align: center; margin: 35px 0;">
                        <a href="https://appsumo.8odi.net/MAoPn2" style="background: linear-gradient(135deg, #e94560 0%, #c73650 100%); color: white; padding: 18px 35px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 18px; display: inline-block; box-shadow: 0 8px 25px rgba(233,69,96,0.3);">
                          Protect Your SaaS - Get KloudFox
                        </a>
                        <div style="margin-top: 12px; color: #ffd93d; font-weight: 600; font-size: 16px;">$29 Lifetime Deal (Usually $348/year)</div>
                      </div>
                      
                      <p style="margin-bottom: 20px; font-size: 14px; color: #999; text-align: center; font-style: italic;">
                        Don't let preventable downtime kill your SaaS. Your users (and investors) will thank you.
                      </p>
                      
                      <p style="margin-bottom: 5px;">
                        Stay bulletproof,<br>
                        The KloudFox Team
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 20px 30px; background-color: #0a0a0a; border-top: 1px solid #333; text-align: center;">
                      <p style="margin: 0; font-size: 12px; color: #666;">
                        🚀 Join 500+ SaaS companies already protected by KloudFox
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
      text: `⚠️ Your SaaS Lost 2,847 Users During Last Night's Outage

Hey [FOUNDER_NAME],

Your competitor's SaaS went down for 8 hours last Tuesday.

💀 THE DAMAGE REPORT:
📉 2,847 users churned (couldn't access their data)
💸 $124,000 MRR lost (angry cancellations)
📱 5,200 support tickets (overwhelmed team)
⭐ 1.2 star rating (from 4.8 stars)  
📰 TechCrunch article ("Why [Company] is Failing")

The worst part? The outage was preventable.

"We had no idea our API was failing until customers started screaming on Twitter. The damage to our brand took months to repair." - Founder of a $50M ARR SaaS

As a SaaS founder, you know:
• Every minute of downtime = massive churn
• Customer trust takes years to build, seconds to destroy
• Competitors are watching for your mistakes
• Investors hate unreliable products

KloudFox for SaaS:
✅ Monitor API endpoints, web app, and infrastructure
✅ Instant Slack alerts to your dev team
✅ Public status pages for transparency  
✅ Performance metrics for optimization
✅ Incident tracking and postmortems

Protect Your SaaS: https://appsumo.8odi.net/MAoPn2
$29 Lifetime Deal (Usually $348/year)

Don't let preventable downtime kill your SaaS. Your users (and investors) will thank you.

Stay bulletproof,
The KloudFox Team

🚀 Join 500+ SaaS companies already protected by KloudFox`
    },

    'freelancer-reputation': {
      subject: 'Client Fired Me Because Their Site Was Down (And I Had No Idea)',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Freelancer Nightmare</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Georgia, serif; line-height: 1.6; color: #2c3e50;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #ecf0f1;">
            <tr>
              <td align="center" style="padding: 20px 0;">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                  <tr>
                    <td style="padding: 40px 30px; text-align: center; background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);">
                      <img src="https://watch.kloudfox.com/assets/images/logo/kloudfox_logo.svg" alt="KloudFox" style="height: 40px; margin-bottom: 20px;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: normal;">💼 FREELANCER SURVIVAL GUIDE</h1>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 35px;">
                      <p style="font-size: 18px; margin-bottom: 20px; color: #e74c3c; font-weight: bold;">
                        Dear Fellow Freelancer,
                      </p>
                      
                      <p style="margin-bottom: 20px; font-size: 16px; line-height: 1.7;">
                        Last month, Sarah (a successful web developer) lost her biggest client.
                      </p>
                      
                      <p style="margin-bottom: 20px;">
                        <strong>The reason?</strong> Their e-commerce site was down for 12 hours during Black Friday, costing them $67,000 in sales.
                      </p>
                      
                      <div style="background-color: #fff5f5; border-left: 4px solid #e74c3c; padding: 20px; margin: 25px 0; font-style: italic;">
                        <p style="margin: 0; color: #c0392b; font-size: 16px; line-height: 1.6;">
                          "Sarah, we found out our website was down from our customers on social media. You told us you'd handle everything. We're terminating our contract effective immediately."
                        </p>
                        <p style="margin: 15px 0 0 0; color: #c0392b; font-size: 14px;">
                          - Email from a $2M/year client
                        </p>
                      </div>
                      
                      <p style="margin-bottom: 20px;">
                        Sarah had built an amazing website. But she had no idea when it went down.
                      </p>
                      
                      <p style="margin-bottom: 20px;">
                        <strong style="color: #e67e22;">Sound familiar?</strong> As freelancers, we're expected to be "always on" but we can't monitor client sites 24/7.
                      </p>
                      
                      <h3 style="color: #2c3e50; margin: 30px 0 15px 0; font-size: 20px;">The freelancer's dilemma:</h3>
                      <ul style="padding-left: 25px; margin-bottom: 25px; line-height: 1.8;">
                        <li style="margin-bottom: 10px;">You build amazing websites, but hosting issues aren't always your fault</li>
                        <li style="margin-bottom: 10px;">Clients blame you when ANYTHING goes wrong with their site</li>
                        <li style="margin-bottom: 10px;">You lose sleep worrying about sites breaking at night</li>
                        <li style="margin-bottom: 10px;">Bad reviews spread faster than good ones</li>
                      </ul>
                      
                      <div style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); padding: 25px; border-radius: 12px; margin: 25px 0; border: 1px solid #dee2e6;">
                        <h4 style="color: #495057; margin: 0 0 15px 0; font-size: 18px;">What if you could tell every client:</h4>
                        <p style="margin: 0; color: #6c757d; font-size: 15px; line-height: 1.7; font-style: italic;">
                          "Don't worry, I monitor your website 24/7. If anything goes wrong, I'll know about it immediately and fix it before it affects your business."
                        </p>
                      </div>
                      
                      <div style="background-color: #e8f5e8; padding: 20px; border-radius: 8px; margin: 25px 0;">
                        <h4 style="color: #27ae60; margin: 0 0 12px 0;">KloudFox for Freelancers:</h4>
                        <ul style="list-style: none; padding: 0; margin: 0;">
                          <li style="margin-bottom: 8px; color: #2c3e50;">✓ Monitor unlimited client websites</li>
                          <li style="margin-bottom: 8px; color: #2c3e50;">✓ Get instant alerts via SMS/email/Slack</li>
                          <li style="margin-bottom: 8px; color: #2c3e50;">✓ White-label status pages for clients</li>
                          <li style="margin-bottom: 8px; color: #2c3e50;">✓ SSL certificate monitoring</li>
                          <li style="margin-bottom: 0; color: #2c3e50;">✓ Performance reports for client meetings</li>
                        </ul>
                      </div>
                      
                      <div style="text-align: center; margin: 35px 0;">
                        <a href="https://appsumo.8odi.net/MAoPn2" style="background: linear-gradient(135deg, #27ae60 0%, #219a52 100%); color: white; padding: 16px 32px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 16px; display: inline-block; letter-spacing: 0.5px;">
                          Protect Your Freelance Business ($29)
                        </a>
                        <div style="margin-top: 10px; color: #e67e22; font-weight: bold;">Lifetime Deal - Never Pay Monthly Again</div>
                      </div>
                      
                      <p style="margin-bottom: 20px; text-align: center; font-size: 14px; color: #7f8c8d; font-style: italic;">
                        Stop losing clients to preventable website issues. Be the freelancer who's always one step ahead.
                      </p>
                      
                      <p style="margin-bottom: 5px; font-size: 16px;">
                        Your reputation defender,<br>
                        The KloudFox Team
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 20px 30px; background-color: #f8f9fa; border-top: 1px solid #dee2e6; text-align: center;">
                      <p style="margin: 0; font-size: 12px; color: #6c757d;">
                        🛡️ Join 1,000+ freelancers protecting their reputation with KloudFox
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
      text: `💼 Client Fired Me Because Their Site Was Down (And I Had No Idea)

Dear Fellow Freelancer,

Last month, Sarah (a successful web developer) lost her biggest client.

The reason? Their e-commerce site was down for 12 hours during Black Friday, costing them $67,000 in sales.

"Sarah, we found out our website was down from our customers on social media. You told us you'd handle everything. We're terminating our contract effective immediately." - Email from a $2M/year client

Sarah had built an amazing website. But she had no idea when it went down.

Sound familiar? As freelancers, we're expected to be "always on" but we can't monitor client sites 24/7.

The freelancer's dilemma:
• You build amazing websites, but hosting issues aren't always your fault
• Clients blame you when ANYTHING goes wrong with their site  
• You lose sleep worrying about sites breaking at night
• Bad reviews spread faster than good ones

What if you could tell every client: "Don't worry, I monitor your website 24/7. If anything goes wrong, I'll know about it immediately and fix it before it affects your business."

KloudFox for Freelancers:
✓ Monitor unlimited client websites
✓ Get instant alerts via SMS/email/Slack
✓ White-label status pages for clients
✓ SSL certificate monitoring  
✓ Performance reports for client meetings

Protect Your Freelance Business: https://appsumo.8odi.net/MAoPn2
Lifetime Deal - Never Pay Monthly Again ($29)

Stop losing clients to preventable website issues. Be the freelancer who's always one step ahead.

Your reputation defender,
The KloudFox Team

🛡️ Join 1,000+ freelancers protecting their reputation with KloudFox`
    }
  };

  const campaign = campaigns[campaignId as keyof typeof campaigns];
  
  if (!campaign) {
    return <div>Campaign not found</div>;
  }

  if (type === 'html') {
    return (
      <div 
        dangerouslySetInnerHTML={{ __html: campaign.html }}
        style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}
      />
    );
  }

  return (
    <div style={{ 
      fontFamily: 'monospace', 
      whiteSpace: 'pre-wrap', 
      padding: '20px',
      backgroundColor: '#f5f5f5',
      border: '1px solid #ddd',
      borderRadius: '8px',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h3>Subject: {campaign.subject}</h3>
      <hr />
      {campaign.text}
    </div>
  );
};

export default EmailCampaigns;
