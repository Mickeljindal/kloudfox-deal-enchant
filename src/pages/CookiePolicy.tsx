
import Layout from "@/components/Layout";

const CookiePolicy = () => {
  return (
    <Layout>
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                This Cookie Policy explains how KloudFox (https://kloudfox.com) ("we", "our", "us") uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">1. What Are Cookies?</h2>
              <p className="mb-6">
                Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">2. Why We Use Cookies</h2>
              <p className="mb-6">
                We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our website. Third parties serve cookies through our website for advertising, analytics, and other purposes.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">3. The Cookies We Use</h2>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li><strong>Essential Cookies:</strong> These cookies are strictly necessary to provide you with services available through our website.</li>
                <li><strong>Performance and Functionality Cookies:</strong> These cookies are used to enhance the performance and functionality of our website but are non-essential to their use.</li>
                <li><strong>Analytics and Customization Cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website for you.</li>
                <li><strong>Advertising Cookies:</strong> These cookies are used to make advertising messages more relevant to you.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">4. How Can You Control Cookies?</h2>
              <p className="mb-6">
                You have the right to decide whether to accept or reject cookies. You can set your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">5. Changes to This Cookie Policy</h2>
              <p className="mb-6">
                We may update this Cookie Policy from time to time to reflect changes to the cookies we use or for other operational, legal, or regulatory reasons. Please re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">6. Contact Us</h2>
              <p className="mb-6">
                If you have any questions about our use of cookies or other technologies, please email us at: support@kloudfox.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CookiePolicy;
