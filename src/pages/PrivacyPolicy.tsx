import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                KloudFox (a service by kloudbean Managed cloud Infrastructure & Hosting ) operates several websites including kloudfox.com. It is KloudFox’s policy to respect your privacy regarding any information we may collect while operating our websites.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">What This Policy Covers</h2>
              <p className="mb-4">This Privacy Policy applies to information that we collect about you when you use:</p>
              <ul className="list-disc list-inside mb-6 space-y-1">
                <li>Our website kloudfox.com;</li>
                <li>Our mobile applications (including the KloudFox mobile app for Android and iOS);</li>
              </ul>
              <p className="mb-6">
                Throughout this Privacy Policy, we'll refer to our website, mobile applications, and other products and services collectively as "Services."
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
              <p className="mb-6">
                We only collect information about you if we have a reason to do so–for example, to provide our Services, to communicate with you, or to make our Services better.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Information You Provide to Us</h3>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li><strong>Basic Account Information:</strong> We ask for basic information from you in order to set up your account. For example, we require individuals who sign up for a kloudfox.com account to provide name, email address, and password.</li>
                <li><strong>Transaction and Billing Information:</strong> If you buy something from us, you will provide additional personal and payment information that is required to process the transaction and your payment, such as your name, credit card information, and contact information.</li>
                <li><strong>Credentials:</strong> Depending on the Services you use, you may provide us with credentials for your website (like SSH, FTP, and SFTP username and password).</li>
                <li><strong>Communications With Us:</strong> You may also provide us with information when you respond to surveys or communicate with our team about a support question.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Information We Collect Automatically</h3>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li><strong>Log Information:</strong> Like most online service providers, we collect information that web browsers, mobile devices, and servers typically make available, such as the browser type, IP address, unique device identifiers, language preference, referring site, the date and time of access, operating system, and mobile network information.</li>
                <li><strong>Usage Information:</strong> We collect information about your usage of our Services.</li>
                <li><strong>Location Information:</strong> We may determine the approximate location of your device from your IP address.</li>
                <li><strong>Information from Cookies & Other Technologies:</strong> We use cookies and other technologies like pixel tags to help us identify and track visitors, usage, and access preferences for our Services.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">How And Why We Use Information</h2>
              <p className="mb-4">We use information about you for the purposes listed below:</p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>To provide our Services–for example, to set up and maintain your account or charge you for any of our paid Services;</li>
                <li>To further develop and improve our Services;</li>
                <li>To monitor and analyze trends and better understand how users interact with our Services;</li>
                <li>To monitor and prevent any problems with our Services, protect the security of our Services;</li>
                <li>To communicate with you about offers and promotions;</li>
                <li>To personalize your experience using our Services.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">Sharing Information</h2>
              <p className="mb-6">
                We do not sell our users' private personal information. We share information about you in the limited circumstances spelled out below and with appropriate safeguards on your privacy.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Security</h2>
              <p className="mb-6">
                While no online service is 100% secure, we work very hard to protect information about you against unauthorized access, use, alteration, or destruction, and take reasonable measures to do so, such as monitoring our Services for potential vulnerabilities and attacks.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Your Rights</h2>
              <p className="mb-6">
                If you are located in certain parts of the world, including California and countries that fall under the scope of the European General Data Protection Regulation (aka the "GDPR"), you may have certain rights regarding your personal information, like the right to request access to or deletion of your data.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">How to Reach Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy, or if you want to contact us about any of the rights mentioned above, please contact us at:
              </p>
              <p className="mb-2"><strong>Email:</strong> privacy@kloudfox.com</p>
              <p className="mb-6">
                <strong>Address:</strong> Secured Orbis Pvt. Ltd., 750/3, Patel Nagar, Civil Lines, Ludhiana, 141001- Punjab, India.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Change Log</h2>
              <p className="text-sm text-gray-600">
                May 23, 2024: Initial version.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
