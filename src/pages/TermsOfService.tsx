
const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              The following terms and conditions govern all use of KloudFox products (Web App and iOS/Android mobile apps) and all content, services, and products available at or through the website or mobile apps. The products are owned and operated by KloudFox Ltd. ("KloudFox" – a trademark of the company). The products are offered subject to your acceptance without modification of all the terms and conditions contained herein and all other operating rules, policies (including, without limitation, KloudFox's Privacy Policy) and procedures that may be published from time to time on this Site by KloudFox (collectively, the "Agreement").
            </p>

            <p className="mb-8">
              Please read this Agreement carefully before accessing or using the products. By accessing or using any part of the products, you agree to become bound by the terms and conditions of this agreement. If you do not agree to all the terms and conditions of this agreement, then you may not access the products or use any services. If these terms and conditions are considered an offer by KloudFox, acceptance is expressly limited to these terms.
            </p>

            <p className="mb-8">
              We may modify these terms or any additional terms that apply to KloudFox products. Changes will apply immediately and will be noted in the Changelog at the end of these Terms of Service. They might apply retroactively and to all our existing users.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Content of Terms</h2>
            <ul className="list-disc list-inside mb-8 space-y-2">
              <li>Your KloudFox Account and Site</li>
              <li>Responsibility of Contributors</li>
              <li>Services Provided</li>
              <li>Payment and Renewal</li>
              <li>Delivery Policy</li>
              <li>Intellectual Property</li>
              <li>Advertisements</li>
              <li>Changes</li>
              <li>Termination</li>
              <li>Disclaimer of Warranties</li>
              <li>Limitation of Liability</li>
              <li>General Representation and Warranty</li>
              <li>Indemnification</li>
              <li>No Resale or Redistribution of Service</li>
              <li>Affiliate Program</li>
              <li>Contacting KloudFox</li>
              <li>Miscellaneous</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Your KloudFox Account and Site</h2>
            <p className="mb-6">
              If you have an account on the products, you are responsible for maintaining the security of your account (email used, password, or API keys) and you are fully responsible for all activities that occur under the account and any other actions taken in connection with the account. You must not use KloudFox services in a misleading or unlawful manner, including in a manner intended to trade on the name or reputation of others, and KloudFox may change or remove any content that it considers inappropriate or unlawful, or otherwise likely to cause KloudFox liability. You must immediately notify KloudFox of any unauthorized uses of your account or any other breaches of security. KloudFox will not be liable for any acts or omissions by You, including any damages of any kind incurred as a result of such acts or omissions.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Services Provided</h2>
            <p className="mb-4">
              KloudFox automatically checks the monitors defined by you in user-defined intervals. And, once a downtime is detected, it can notify the "user-defined contacts" with various methods (like email, SMS, mobile push messages, etc.). The monitoring methods include:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-1">
              <li>HTTP(s)/website monitoring</li>
              <li>Keyword monitoring (checking the existence or non-existence of a given keyword on a web page)</li>
              <li>Ping monitoring</li>
              <li>Port monitoring</li>
              <li>Heartbeat monitoring (cron-job monitoring, you send requests to KloudFox and we check if they arrive on time)</li>
              <li>Status pages (showcase your uptime to your customers)</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Payment and Renewal</h2>
            <p className="mb-6">
              Optional paid services such as extra monitors, extra seats, shorter monitor intervals, or extra SMS message/voice call credits are available on the products (any such service is considered an "Upgrade"). By selecting an Upgrade you agree to pay KloudFox the monthly or annual subscription fees indicated for that service.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Refunds</h2>
            <p className="mb-6">
              You may terminate your subscription to the Upgrade at any time and you will not be obligated to pay any additional fees for upcoming subscription renewal periods. However, any subscription fees you have paid in advance will not be refunded unless there have been 10 days or less since the payment. For payments made in the last 10 days or less, only those payments are refundable.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Contacting KloudFox</h2>
            <p className="mb-6">
              KloudFox may be contacted by email at support@kloudfox.com. By contacting KloudFox, the client grants KloudFox a worldwide, non-exclusive perpetual right to any ideas, information, designs or other material contained in any communication, except when the client has obtained prior written agreement from the KloudFox board.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Changelog</h2>
            <p className="text-sm text-gray-600">
              May 23, 2024: Initial release.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
