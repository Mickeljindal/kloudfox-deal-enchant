import LegalPage from "@/components/kf/LegalPage";

const RefundPolicy = () => {
  return (
    <LegalPage
      title="Refund Policy"
      description="Our 60-day money-back guarantee. Simple, fair, and honored without argument."
      slug="refund-policy"
      lastUpdated="May 23, 2024"
    >
      <p>
        Thank you for subscribing to Kloudfox. If you are not entirely satisfied with our service, we're here to help.
      </p>

      <h2>1. Subscriptions</h2>
      <p>
        Kloudfox offers various subscription plans. By subscribing, you agree to the terms and conditions outlined below and in our <a href="/terms-of-service">Terms of Service</a>. If you have any questions, please contact us.
      </p>

      <h2>2. Refund eligibility</h2>
      <p>
        We offer a 60-day money-back guarantee for new subscribers. If you are not satisfied with our services within the first 60 days of your subscription, you may request a full refund. After this period, no refunds will be provided.
      </p>

      <h2>3. How to request a refund</h2>
      <p>To request a refund within the eligible period, please contact our team:</p>
      <ul>
        <li>By email: <a href="mailto:billing@kloudfox.com">billing@kloudfox.com</a></li>
        <li>Or via our <a href="/contact">Contact page</a></li>
      </ul>
      <p>
        Please include your account details and the reason for the refund request. We will review your request and notify you of the status within a reasonable timeframe.
      </p>

      <h2>4. Refund processing</h2>
      <p>
        If your refund request is approved, we will initiate a refund to your original method of payment. The credit will be processed within a certain number of days, depending on your card issuer's policies.
      </p>

      <h2>5. Changes to subscription plans</h2>
      <p>
        You may upgrade or downgrade your subscription plan at any time. Changes take effect immediately, and the new rate will be charged on your next billing cycle. No refunds are provided for downgrades in the middle of a billing cycle.
      </p>

      <h2>6. Cancellations</h2>
      <p>
        You may cancel your subscription at any time. Your access to the service will continue until the end of the current billing period. No refunds will be issued for the remainder of the billing period.
      </p>

      <h2>7. Contact us</h2>
      <ul>
        <li>By email: <a href="mailto:support@kloudfox.com">support@kloudfox.com</a></li>
        <li>Or via our <a href="/contact">Contact page</a></li>
      </ul>
    </LegalPage>
  );
};

export default RefundPolicy;
