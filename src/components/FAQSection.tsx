
import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionTitle from './SectionTitle';

// FAQ data
const faqData = [
  {
    question: "What surfaces can be pressure washed?",
    answer: "We can safely pressure wash a wide variety of surfaces including concrete driveways, pavers, brick, vinyl siding, wood decks (with appropriate pressure), fences, roofs, and more. Our team assesses each surface to determine the appropriate pressure level and cleaning solution to avoid any damage."
  },
  {
    question: "How long does pressure washing take?",
    answer: "The time required depends on the size and condition of the area being cleaned. A typical residential driveway might take 1-2 hours, while a complete house exterior could take 3-5 hours. Commercial projects may require more time. We'll provide a time estimate during your free quote."
  },
  {
    question: "Is pressure washing safe for all surfaces?",
    answer: "Not all surfaces can withstand the same pressure levels. Our technicians are trained to assess each surface and use appropriate pressure settings and techniques. For delicate surfaces, we may use soft washing techniques that rely more on cleaning solutions than high pressure."
  },
  {
    question: "Do you use environmentally friendly cleaning solutions?",
    answer: "Yes, we use eco-friendly biodegradable cleaning solutions that effectively remove dirt, grime, and biological growth without harming your plants, pets, or the environment. We take pride in our responsible approach to pressure washing."
  },
  {
    question: "How often should I have my property pressure washed?",
    answer: "For homes in the Goulburn area, we typically recommend pressure washing once a year to maintain your property's appearance and prevent long-term damage. However, driveways and walkways with heavy use may benefit from cleaning every 6-8 months."
  },
  {
    question: "Can pressure washing remove all stains?",
    answer: "While pressure washing is highly effective at removing most dirt, grime, mold, mildew, and algae, some deep-set stains (like oil that has penetrated concrete for years, rust, or certain paint stains) may not be completely removable. We'll give you our honest assessment during the quote process."
  }
];

const FAQSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Frequently Asked Questions" 
          subtitle="Find answers to common questions about our pressure washing services"
        />
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left font-medium text-navy hover:text-green py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-10">
          <p className="text-gray-600 mb-4">
            Don't see your question here? Get in touch with us directly.
          </p>
          <a 
            href="/contact" 
            className="neumorphic-button bg-navy text-white hover:bg-navyLight inline-block"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
