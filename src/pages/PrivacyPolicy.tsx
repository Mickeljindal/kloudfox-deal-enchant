import LegalPage from "@/components/kf/LegalPage";

const PrivacyPolicy = () => {
  return (
    <LegalPage
      title="Privacy Policy"
      description="How Kloudfox collects, uses, and protects your personal information."
      slug="privacy-policy"
      lastUpdated="May 23, 2024"
    >
      <p>
        Kloudfox operates several websites including kloudfox.com. It is Kloudfox's policy to respect your privacy regarding any information we may collect while operating our websites.
      </p>

      <h2>What this policy covers</h2>
      <p>This Privacy Policy applies to information that we collect about you when you use:</p>
      <ul>
        <li>Our website kloudfox.com</li>
        <li>Our mobile applications (including the Kloudfox mobile apps for iOS and Android)</li>
      </ul>
      <p>
        Throughout this Privacy Policy, we'll refer to our website, mobile applications, and other products and services collectively as "Services."
      </p>

      <h2>Information we collect</h2>
      <p>
        We only collect information about you if we have a reason to do so — for example, to provide our Services, to communicate with you, or to make our Services better.
      </p>

      <h3>Information you provide to us</h3>
      <ul>
        <li><strong>Basic account information:</strong> We ask for basic information from you in order to set up your account — name, email, and password.</li>
        <li><strong>Transaction and billing information:</strong> If you purchase a subscription, you provide additional information required to process payment.</li>
        <li><strong>Credentials:</strong> Depending on the Services you use, you may provide credentials for the resources you monitor.</li>
        <li><strong>Communications:</strong> Information you provide when you respond to surveys or contact support.</li>
      </ul>

      <h3>Information we collect automatically</h3>
      <ul>
        <li><strong>Log information:</strong> Browser type, IP address, unique device identifiers, language preference, referring site, date/time, operating system.</li>
        <li><strong>Usage information:</strong> How you use our Services.</li>
        <li><strong>Approximate location:</strong> Derived from IP.</li>
        <li><strong>Cookies and similar technologies:</strong> Used to identify and track visitors and preferences.</li>
      </ul>

      <h2>How and why we use information</h2>
      <ul>
        <li>To provide our Services — set up and maintain your account, process payments.</li>
        <li>To improve and further develop the Services.</li>
        <li>To monitor and analyze how the Services are used.</li>
        <li>To protect the security of our Services and prevent abuse.</li>
        <li>To communicate with you about updates, offers, and promotions you've consented to receive.</li>
        <li>To personalize your experience.</li>
      </ul>

      <h2>Sharing information</h2>
      <p>
        We do not sell our users' private personal information. We share information about you only in the limited circumstances described in this policy and with appropriate safeguards on your privacy.
      </p>

      <h2>Security</h2>
      <p>
        While no online service is 100% secure, we work very hard to protect information about you against unauthorized access, use, alteration, or destruction, and take reasonable measures to do so.
      </p>

      <h2>Your rights</h2>
      <p>
        If you are located in the EU, EEA, UK, California, or similar jurisdictions, you may have certain rights regarding your personal information — including the right to request access to or deletion of your data.
      </p>

      <h2>How to reach us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@kloudfox.com">privacy@kloudfox.com</a>.
      </p>
    </LegalPage>
  );
};

export default PrivacyPolicy;
