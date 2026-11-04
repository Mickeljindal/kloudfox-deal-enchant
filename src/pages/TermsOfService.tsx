import LegalPage from "@/components/kf/LegalPage";

const TermsOfService = () => {
  return (
    <LegalPage
      title="Terms of Service"
      description="The terms and conditions that govern your use of Kloudfox products and services."
      slug="terms-of-service"
      lastUpdated="May 23, 2024"
    >
      <p>
        The following terms and conditions govern all use of the Kloudfox products (web app and iOS/Android mobile apps) and all content, services, and products available at or through the website or mobile apps. The products are owned and operated by Kloudfox. The products are offered subject to your acceptance without modification of all the terms and conditions contained herein and all other operating rules and policies (including, without limitation, Kloudfox's Privacy Policy).
      </p>

      <p>
        Please read this Agreement carefully before accessing or using the products. By accessing or using any part of the products, you agree to become bound by the terms and conditions of this agreement. If you do not agree, you may not use the Services.
      </p>

      <p>
        We may modify these terms or any additional terms that apply to Kloudfox products. Changes will apply immediately and will be noted in the changelog at the end of these Terms of Service.
      </p>

      <h2>Your Kloudfox account</h2>
      <p>
        If you have an account on the products, you are responsible for maintaining the security of your account (email, password, or API keys) and you are fully responsible for all activities that occur under the account. You must immediately notify Kloudfox of any unauthorized use of your account. Kloudfox will not be liable for any acts or omissions by you.
      </p>

      <h2>Services provided</h2>
      <p>
        Kloudfox automatically checks the monitors defined by you at user-defined intervals. When a downtime is detected, it can notify user-defined contacts with various methods (email, SMS, mobile push, webhook, etc.). Monitoring methods include:
      </p>
      <ul>
        <li>HTTP(s) / website monitoring</li>
        <li>Keyword monitoring (existence or non-existence of a keyword on a page)</li>
        <li>Ping and port monitoring</li>
        <li>Heartbeat / cron monitoring</li>
        <li>Public status pages</li>
      </ul>

      <h2>Payment and renewal</h2>
      <p>
        Optional paid services such as extra monitors, extra seats, shorter monitor intervals, or extra SMS/voice credits are available. By selecting an Upgrade you agree to pay Kloudfox the monthly or annual subscription fees indicated for that service.
      </p>

      <h2>Refunds</h2>
      <p>
        You may terminate your subscription at any time and you will not be obligated to pay any additional fees for upcoming subscription renewal periods. See our <a href="/refund-policy">Refund Policy</a> for the 60-day money-back guarantee terms.
      </p>

      <h2>Disclaimer of warranties</h2>
      <p>
        Kloudfox provides the Services "as is" and "as available." Kloudfox makes no warranty that the Services will meet your requirements or be available on an uninterrupted, secure, or error-free basis. Kloudfox does not guarantee the accuracy or completeness of any information available through the Services.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        In no event shall Kloudfox, or its suppliers or licensors, be liable with respect to any subject matter of this agreement under any contract, negligence, strict liability, or other legal or equitable theory for any special, incidental, or consequential damages.
      </p>

      <h2>Contacting Kloudfox</h2>
      <p>
        Kloudfox may be contacted by email at <a href="mailto:support@kloudfox.com">support@kloudfox.com</a>.
      </p>
    </LegalPage>
  );
};

export default TermsOfService;
