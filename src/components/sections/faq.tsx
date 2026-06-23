"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "Do I need to choose a destination first?",
    answer:
      "No, you do not need to know your destination before contacting us. Share your travel style, budget, preferred dates, and the type of experience you want, and we will help you find the best destination options.",
  },
  {
    id: "faq-2",
    question: "Can travel packages be customized?",
    answer:
      "Yes, every travel package can be customized based on your needs. You can adjust the trip duration, hotel type, activities, private tours, transfers, dining experiences, and special moments to match your travel plan.",
  },
  {
    id: "faq-3",
    question: "Do you plan honeymoons and private trips?",
    answer:
      "Yes, we plan romantic honeymoons, private escapes, family vacations, group adventures, and luxury retreats. Each itinerary is carefully designed with handpicked stays, local experiences, and smooth travel arrangements.",
  },
  {
    id: "faq-4",
    question: "How does pricing work?",
    answer:
      "Trip pricing depends on your destination, travel dates, hotel category, package duration, activities, transportation, and level of customization. We provide a clear and detailed quote before confirming your travel plan.",
  },
  {
    id: "faq-5",
    question: "Can you help with flights and transfers?",
    answer:
      "Yes, we can help guide your flight planning, airport transfers, private drivers, local transportation, and travel timing. Our goal is to make your journey smooth, comfortable, and stress-free from arrival to departure.",
  },
  {
    id: "faq-6",
    question: "Can I request a trip for a future date?",
    answer:
      "Absolutely. You can request a trip for future travel dates, seasonal holidays, honeymoon plans, family vacations, or special occasions. Planning early also helps secure better hotels, experiences, and travel availability.",
  },
];

export function FAQ() {
  return (
    <section
      className="py-20 lg:py-28 bg-avenora-light"
      aria-label="Frequently Asked Questions"
    >
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16 text-center">
          <p className="text-avenora-mid-gray text-sm font-medium uppercase tracking-wider mb-3">
            FAQs
          </p>
          <h2 className="text-[var(--font-size-2xl)] sm:text-[var(--font-size-3xl)] font-heading tracking-tight text-avenora-black">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="bg-white rounded-[var(--radius-md)] border border-avenora-border px-6 data-[state=open]:shadow-sm transition-shadow"
            >
              <AccordionTrigger className="text-left text-base font-heading text-avenora-black hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-avenora-mid-gray text-sm leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
