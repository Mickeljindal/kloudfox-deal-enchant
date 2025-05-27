import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Refund Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                Thank you for subscribing to KloudFox. If you are not entirely satisfied with our service, we're here to help.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">1. Subscriptions</h2>
              <p className="mb-6">
                KloudFox offers various subscription plans. By subscribing, you agree to the terms and conditions outlined below. If you have any questions, please contact us.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">2. Refund Eligibility</h2>
              <p className="mb-6">
                We offer a 60-day money-back guarantee for new subscribers. If you are not satisfied with our services within the first 60 days of your subscription, you may request a full refund. After this period, no refunds will be provided.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">3. How to Request a Refund</h2>
              <p className="mb-4">To request a refund within the eligible period, please contact our support team:</p>
              <ul className="list-disc list-inside mb-6 space-y-1">
                <li>By email: billing@kloudfox.com</li>
                <li>By visiting this page on our website: <a href="/contact" className="text-blue-600 hover:underline">Contact Us</a></li>
              </ul>
              <p className="mb-6">
                Please include your account details and the reason for the refund request. We will review your request and notify you of the status within a reasonable timeframe.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">4. Refund Processing</h2>
              <p className="mb-6">
                If your refund request is approved, we will initiate a refund to your original method of payment. The credit will be processed within a certain number of days, depending on your card issuer's policies.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">5. Changes to Subscription Plans</h2>
              <p className="mb-6">
                You may upgrade or downgrade your subscription plan at any time. Changes will take effect immediately, and the new rate will be charged on your next billing cycle. No refunds will be provided for downgrades in the middle of a billing cycle.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">6. Cancellations</h2>
              <p className="mb-6">
                You may cancel your subscription at any time. Your access to the service will continue until the end of the current billing period. No refunds will be issued for the remainder of the billing period.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">7. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about our refund policy or need assistance, please contact us:
              </p>
              <ul className="list-disc list-inside mb-6 space-y-1">
                <li>By email: support@kloudfox.com</li>
                <li>By visiting this page on our website: <a href="/contact" className="text-blue-600 hover:underline">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
