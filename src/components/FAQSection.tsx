
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this really a one-time payment for lifetime access?",
    answer: "Yes! This is a LIMITED TIME offer exclusive to AppSumo. Pay once and get lifetime access to KloudFox with no further fees, subscriptions, or hidden costs. All future updates and features are included."
  },
  {
    question: "How is KloudFox different from other analytics tools?",
    answer: "KloudFox combines powerful enterprise-level features with an intuitive interface, making advanced analytics accessible to businesses of all sizes. Our proprietary AI engine provides actionable insights automatically, not just raw data that you need to interpret yourself."
  },
  {
    question: "Do I need technical skills to use KloudFox?",
    answer: "Not at all! KloudFox was designed to be user-friendly for non-technical users while still providing advanced capabilities for data professionals. Our setup wizard will have you collecting valuable insights in minutes."
  },
  {
    question: "What if I'm not satisfied with KloudFox?",
    answer: "Your purchase is backed by AppSumo's 30-day money-back guarantee. If you're not completely satisfied, simply request a refund within 30 days – no questions asked."
  },
  {
    question: "Will I get access to future updates?",
    answer: "Absolutely! Your lifetime access includes ALL future updates to KloudFox. As we release new features and improvements, you'll get them at no additional cost."
  },
  {
    question: "How do I integrate KloudFox with my existing tools?",
    answer: "KloudFox integrates seamlessly with over 50 popular platforms including Shopify, WooCommerce, Google Analytics, Facebook Ads, and more. Our setup wizard makes connecting your data sources simple, and our support team is available to help if needed."
  },
  {
    question: "How long will this offer be available?",
    answer: "This is a strictly limited-time offer that will expire soon. Once it's gone, KloudFox will return to its regular subscription pricing model. We cannot guarantee this lifetime deal will ever be offered again."
  }
];

const FAQSection = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          Frequently Asked Questions
        </h2>
        
        <div className="max-w-3xl mx-auto mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-gray-600 mb-6">
              Our team is standing by to help you make the most of this incredible offer.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-kloudfox-blue hover:bg-kloudfox-darkBlue text-white font-medium rounded-full px-6 py-3 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
