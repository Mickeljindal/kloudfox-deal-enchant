
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
    question: "How is KloudFox different from other uptime monitoring tools?",
    answer: "KloudFox combines powerful multi-location monitoring with custom status pages and instant alerts across multiple channels. Our intuitive interface makes it accessible for non-technical users while offering advanced features that competitors charge hundreds per month for."
  },
  {
    question: "How many websites can I monitor with this deal?",
    answer: "This lifetime deal includes monitoring for up to 10 websites with custom check intervals as frequent as every 40 seconds. You'll get unlimited status pages, team members, and alert channels—all with no monthly fees ever."
  },
  {
    question: "What if I'm not satisfied with KloudFox?",
    answer: "Your purchase is backed by AppSumo's 30-day money-back guarantee. If you're not completely satisfied, simply request a refund within 30 days – no questions asked."
  },
  {
    question: "Which notification channels are supported?",
    answer: "KloudFox supports email alerts, Slack notifications, webhook integrations, Zapier connections, and mobile push notifications through our companion app. You can set up multiple channels to ensure your team never misses an incident."
  },
  {
    question: "Do I need technical skills to use KloudFox?",
    answer: "Not at all! KloudFox was designed with a zero learning curve approach. Simply enter your website URL, customize your monitoring preferences, and you're protected within minutes. The setup wizard guides you through the entire process."
  },
  {
    question: "How long will this offer be available?",
    answer: "This is a strictly limited-time offer with only a few codes remaining. Once they're gone, KloudFox will return to its regular subscription pricing of $74/month. We cannot guarantee this lifetime deal will ever be offered again."
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
