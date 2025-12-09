/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import {
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Mail,
  Sparkles,
} from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Beaders Africa?",
      answer:
        "Africa's first bead marketplace — connecting bead makers, lovers, and suppliers in one digital ecosystem.",
    },
    {
      question: "Is the platform live?",
      answer:
        "We have launched our MVP website and the waitlist is open. The full marketplace launches soon.",
    },
    {
      question: "What can I do on Beaders Africa?",
      answer: [
        "• Buy and sell beaded jewelry",
        "• Learn bead-making (beginner to advanced)",
        "• Buy bead-making supplies",
        "• Trade in or refurbish old jewelry",
        "• Customize clothing with beads",
        "• Join an active bead community",
      ],
    },
    {
      question: "How do I join the platform?",
      answer:
        "Simply join the waitlist on our website — early members get priority access and perks.",
    },
    {
      question: "How will payments work?",
      answer:
        "Secure card payments will be handled by trusted payment partners when we go live.",
    },
    {
      question: "Is my information safe?",
      answer:
        "Yes — we only collect your name and email for now, and we never sell your data.",
    },
    {
      question: "Can bead makers apply now?",
      answer:
        "Yes! Vendors, suppliers, and learners can join the early waitlist.",
    },
    {
      question: "How do I contact support?",
      answer: "Email us anytime: beadersafrica@gmail.com",
    },
  ];

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#faf9f5]">
      {/* Header */}
      <header className="bg-[#636b2f] text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
            <HelpCircle className="w-10 h-10 text-[#d9b753]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-white/90">
            Everything you need to know about Beaders Africa
          </p>
        </div>
      </header>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Introduction Card */}
        <div className="bg-linear-to-br from-[#d9b753]/10 to-[#d9b753]/5 rounded-2xl shadow-sm p-8 mb-8 border border-[#d9b753]/20">
          <div className="flex items-start gap-3">
            <Sparkles className="w-6 h-6 text-[#636b2f] shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-[#636b2f] mb-2">
                Have more questions?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We&apos;re here to help! Browse through our most common
                questions below, or reach out to us directly.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-[#636b2f]/10 overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[#faf9f5] transition-colors cursor-pointer"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="shrink-0 w-8 h-8 bg-[#d9b753]/10 rounded-lg flex items-center justify-center text-[#636b2f] font-bold text-sm">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-[#636b2f] flex-1 pr-4">
                    {faq.question}
                  </h3>
                </div>
                <div className="shrink-0 text-[#636b2f]">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6" />
                  ) : (
                    <ChevronDown className="w-6 h-6" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 pt-2">
                  <div className="pl-12">
                    {Array.isArray(faq.answer) ? (
                      <div className="space-y-1">
                        {faq.answer.map((line, lineIndex) => (
                          <p
                            key={lineIndex}
                            className="text-gray-700 leading-relaxed"
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-linear-to-br from-[#636b2f] to-[#636b2f]/90 rounded-2xl shadow-lg p-8 text-white">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 backdrop-blur-sm">
              <Mail className="w-8 h-8 text-[#d9b753]" />
            </div>
            <h2 className="text-2xl font-bold mb-3">Still have questions?</h2>
            <p className="text-white/90 mb-6 leading-relaxed max-w-2xl mx-auto">
              Our team is always ready to help. Don&apos;t hesitate to reach out
              with any questions or concerns.
            </p>
            <a
              href="mailto:beadersafrica@gmail.com"
              className="inline-flex items-center gap-2 bg-[#d9b753] text-[#636b2f] px-8 py-4 rounded-lg font-semibold hover:bg-[#d9b753]/90 transition-colors text-lg"
            >
              <Mail className="w-5 h-5" />
              beadersafrica@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
