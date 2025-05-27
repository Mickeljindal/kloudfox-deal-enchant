
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How can I pay?",
    answer: "You can pay with your Visa, Maestro, MasterCard, Discover/Novus, Diners Club and American Express card or use PayPal. To process credit card payments we use Stripe."
  },
  {
    question: "Why is kloudfox free?",
    answer: "Kloudfox is free because we love to give out to the uptime monitoring community and it all began with a desire to create a useful and accessible tool for the web community. Over time, the service grew significantly, leading us to spend countless hours improving it and gaining valuable insights."
  },
  {
    question: "How does website monitoring affect my website performance?",
    answer: "All of our website monitoring is conducted remotely, and the load is no heavier than a typical visit from a regular user. Therefore, running performance tests poses no risk."
  },
  {
    question: "What is website downtime?",
    answer: "Website downtime occurs when your site becomes inaccessible to users. This issue isn't always straightforward; for instance, your site could be accessible in the UK but not in Canada, leaving you unaware of the problem. Downtime isn't limited to '404 not found' errors. It can also result from a distant component failing, preventing customers from placing orders on your e-commerce site or visitors from reading the latest blog post."
  },
  {
    question: "What's the best check rate to use on my website uptime test?",
    answer: "We recommend utilizing the fastest check rate possible to ensure the most detailed monitoring coverage and to accurately determine the duration of any downtime that might be detected."
  },
  {
    question: "How do I know when my website is down?",
    answer: "When your website experiences downtime, we can promptly alert you through your preferred method (email, SMS, mobile push, or web hook). Additionally, we will log the downtime and all relevant information on a dedicated detailed page within the app."
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
              href="/contact" 
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
