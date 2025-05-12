"use client";

import React, { useState } from "react";
import { Heading, Text } from "../../components";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqList = [
  {
    question: "How can I book a demo?",
    answer:
      "You can book a demo by reaching out via the contact form above or emailing demo@xeventy2.com.",
  },
  {
    question: "What support options do you offer?",
    answer:
      "We offer 24/7 email support, live chat during business hours, and dedicated account managers.",
  },
  {
    question: "Do you offer custom integrations?",
    answer:
      "Yes, our team can develop custom integrations tailored to your existing systems.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <Heading className="text-3xl font-bold mb-8 text-center !text-gray-900">
        Frequently Asked Questions
      </Heading>
      <div className="space-y-4">
        {faqList.map((item, idx) => (
          <div
            key={idx}
            className="container-xs mx-auto border border-gray-300 rounded-xl overflow-hidden shadow-md"
          >
            <button
              onClick={() => toggleIndex(idx)}
              className="w-full flex justify-between items-center px-6 py-4 hover:bg-green-50 bg-blue-100 transition-colors duration-200 focus:outline-none"
            >
              <Text className="font-semibold !text-black-900 text-left">
                {item.question}
              </Text>
              {openIndex === idx ? (
                <ChevronUp size={20} className="text-blue-700" />
              ) : (
                <ChevronDown size={20} className="text-blue-700" />
              )}
            </button>
            {openIndex === idx && (
              <div className="px-6 py-4 bg-white border-t border-blue-200">
                <Text className="!text-gray-800 leading-relaxed">
                  {item.answer}
                </Text>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

