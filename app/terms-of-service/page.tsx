import React from "react";
import {
  FileText,
  UserCheck,
  ShoppingBag,
  CreditCard,
  ShieldAlert,
  Copyright,
  AlertTriangle,
  Mail,
  CheckCircle,
} from "lucide-react";

export default function TermsOfService() {
  const sections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "About Beaders Africa",
      content: [
        "Beaders Africa is a digital platform that connects bead makers, bead lovers, and bead-making suppliers across Africa. Our services include:",
        "• A digital bead marketplace",
        "• Beading learning hub",
        "• Supplier directory",
        "• Trade-in & refurbish system",
        "• Custom clothing beadwork services",
      ],
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Eligibility",
      content: [
        "By joining the waitlist or using our services, you confirm that:",
        "• You are at least 18 years old, or using the platform with parental guidance",
        "• You agree to comply with these Terms",
      ],
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "User Accounts (Future Feature)",
      content: [
        "When the full marketplace launches, users may need to create an account.",
        "",
        "Users agree to:",
        "• Provide accurate information",
        "• Keep login details secure",
        "• Take responsibility for all activities under their account",
      ],
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Vendor, Supplier & Learner Guidelines",
      content: [
        "When live, vendors, suppliers, and learners must:",
        "• Upload accurate product or service information",
        "• Deliver items or services as promised",
        "• Comply with community and platform rules",
        "• Respect intellectual property rights",
        "",
        "Beaders Africa reserves the right to remove or suspend accounts that violate platform rules.",
      ],
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Payments",
      content: [
        "When payments are enabled:",
        "• All payments will be processed securely by trusted payment partners",
        "• Fees or commissions (when applicable) will be clearly communicated",
        "• Refund policies will be published upon feature launch",
      ],
    },
    {
      icon: <ShieldAlert className="w-6 h-6" />,
      title: "Prohibited Activities",
      content: [
        "Users agree not to:",
        "• Upload illegal, harmful, or offensive content",
        "• Engage in fraud or misrepresentation",
        "• Attempt to hack or disrupt the platform",
        "• Use the platform for activities outside intended use",
      ],
    },
    {
      icon: <Copyright className="w-6 h-6" />,
      title: "Intellectual Property",
      content: [
        "The Beaders Africa brand, logo, content, and platform design are protected by copyright and trademark laws. You may not copy or reuse them without written permission.",
      ],
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Limitation of Liability",
      content: [
        "Beaders Africa is not responsible for:",
        "• Losses caused by vendors",
        "• Damaged or defective products",
        "• Transaction errors caused by third-party payment processors",
        "• Loss of data beyond our reasonable control",
        "",
        "You use the platform at your own discretion.",
      ],
    },
    {
      icon: <ShieldAlert className="w-6 h-6" />,
      title: "Termination",
      content: [
        "We may suspend or terminate access if users violate these Terms.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf9f5]">
      {/* Header */}
      <header className="bg-[#636b2f] text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
            <FileText className="w-10 h-10 text-[#d9b753]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-white/90 mb-2">
            Please read these terms carefully
          </p>
          <p className="text-sm text-white/70">Last updated: December 2025</p>
        </div>
      </header>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8 border border-[#636b2f]/10">
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to Beaders Africa (&quot;we&quot;, &quot;our&quot;, or
            &quot;us&quot;). By accessing or using our website, waitlist, or
            future marketplace, you agree to these Terms of Service.
          </p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm p-8 border border-[#636b2f]/10 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 bg-[#d9b753]/10 rounded-xl flex items-center justify-center text-[#636b2f]">
                  {section.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-[#636b2f] mb-4">
                    {index + 1}. {section.title}
                  </h2>
                  <div className="space-y-2">
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Important Notice */}
        <div className="mt-8 bg-amber-50 border-l-4 border-[#d9b753] rounded-lg p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-[#d9b753] shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-[#636b2f] mb-2">
                Important Notice
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                These Terms of Service may be updated as our platform evolves.
                By continuing to use Beaders Africa, you agree to be bound by
                the most current version of these terms.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-linear-to-br from-[#636b2f] to-[#636b2f]/90 rounded-2xl shadow-lg p-8 text-white">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <Mail className="w-6 h-6 text-[#d9b753]" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-3">Contact Us</h2>
              <p className="text-white/90 mb-4 leading-relaxed">
                For any questions about these Terms of Service, reach out at:
              </p>
              <a
                href="mailto:beadersafrica@gmail.com"
                className="inline-flex items-center gap-2 bg-[#d9b753] text-[#636b2f] px-6 py-3 rounded-lg font-semibold hover:bg-[#d9b753]/90 transition-colors"
              >
                <Mail className="w-5 h-5" />
                beadersafrica@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
