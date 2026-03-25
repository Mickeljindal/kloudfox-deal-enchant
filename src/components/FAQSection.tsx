
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "How can I pay?",
    answer: "We accept Visa, Mastercard, American Express, Discover, and PayPal. All payments are processed securely through Stripe.",
  },
  {
    question: "Why is KloudFox free?",
    answer: "We believe every website deserves monitoring. Our free tier lets you get started, and paid plans unlock advanced features like AI anomaly detection and faster check intervals.",
  },
  {
    question: "Does monitoring affect my website performance?",
    answer: "Not at all. Our monitoring is conducted remotely with no heavier load than a typical user visit. There's zero impact on your website's performance.",
  },
  {
    question: "What is website downtime?",
    answer: "Downtime is when your site becomes inaccessible to users. It can vary by region — your site might work in one country but not another. It's not just 404 errors; it includes any failure that prevents users from completing actions.",
  },
  {
    question: "What check interval should I use?",
    answer: "We recommend using the fastest interval available on your plan for the most detailed monitoring and accurate downtime detection.",
  },
  {
    question: "How will I know when my website is down?",
    answer: "We'll alert you instantly through your preferred channel — email, SMS, mobile push, Slack, Discord, or webhook. All downtime is logged with full details in your dashboard.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Frequently asked questions
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/20"
              >
                <AccordionTrigger className="text-left font-medium text-[15px] hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <Button asChild variant="outline" className="rounded-xl">
              <a href="/contact">
                Get in touch <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
