
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long does a typical pressure washing service take?",
      answer: "Service times vary depending on the size of the area and the level of cleaning required. A typical driveway cleaning can take 1-2 hours, while a whole house exterior cleaning might take 3-5 hours. We'll provide you with a time estimate before starting your service."
    },
    {
      question: "Is pressure washing safe for all surfaces?",
      answer: "Not all surfaces can withstand the same pressure. We adjust our equipment and techniques based on the specific surface being cleaned. For delicate surfaces like some sidings, we use soft washing techniques that clean effectively without causing damage."
    },
    {
      question: "Do I need to be home during the service?",
      answer: "It's not necessary to be present during the service as long as we have access to the areas that need cleaning and a water source. However, we recommend being available at the beginning and end of the service for a walkthrough."
    },
    {
      question: "What cleaning solutions do you use?",
      answer: "We use environmentally-friendly cleaning solutions that are effective at removing dirt, mold, mildew, and algae without harming your plants or property. Our solutions are biodegradable and safe for your family and pets."
    },
    {
      question: "How often should I have my property pressure washed?",
      answer: "Most properties benefit from an annual pressure washing, though this can vary depending on your local environment and the specific surfaces. Areas with high humidity or dense tree coverage may require more frequent cleaning to prevent mold and mildew buildup."
    },
    {
      question: "Will pressure washing damage my plants or landscaping?",
      answer: "We take precautions to protect your landscaping during the cleaning process. This includes rinsing plants before and after cleaning to dilute any cleaning solutions that might come into contact with them. Our eco-friendly solutions are designed to minimize impact on vegetation."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <button
            className="w-full flex justify-between items-center px-6 py-4 glass-card rounded-lg transition-colors duration-200 hover:bg-navyLight/20"
            onClick={() => toggleFAQ(index)}
          >
            <span className="font-semibold text-left text-navy">{faq.question}</span>
            <span className="text-navy">
              {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </span>
          </button>
          
          {openIndex === index && (
            <div className="px-6 py-4 bg-white/70 rounded-b-lg text-black mt-1 shadow-inner">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
