import React from "react";
import {
  Shield,
  Lock,
  Eye,
  Users,
  Mail,
  FileText,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Information We Collect",
      content: [
        "We only collect the information you voluntarily provide when you join the Beaders Africa waitlist:",
        "• Name",
        "• Email Address",
        "",
        "When our marketplace launches, we may collect additional information such as:",
        "• Phone number",
        "• Business information (for bead vendors & suppliers)",
        "• Payment information (securely processed by third-party payment providers)",
      ],
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "How We Use Your Information",
      content: [
        "We use your information to:",
        "• Register you on our waitlist",
        "• Send platform updates, announcements, and onboarding details",
        "• Personalize your early experience with Beaders Africa",
        "• Notify you when the marketplace or new features launch",
        "• Improve our services and user experience",
        "",
        "We do not sell or rent your personal information to third parties.",
      ],
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "How Your Information Is Stored",
      content: [
        "Your information is stored securely using industry-standard tools such as encrypted databases and secure hosting environments.",
        "",
        "We take reasonable steps to protect your data from unauthorized access, loss, or misuse.",
      ],
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Payments (Future Feature)",
      content: [
        "When payment features go live, all transactions will be processed securely by trusted third-party payment providers.",
        "",
        "Beaders Africa will not store your card details directly.",
      ],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Sharing Your Information",
      content: [
        "We may share your information with:",
        "• Service providers who help us run emails, hosting, and analytics",
        "• Payment partners (when live)",
        "• Compliance or legal authorities when required by law",
        "",
        "We never sell your data.",
      ],
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Your Rights",
      content: [
        "You have the right to:",
        "• Access the information we hold about you",
        "• Request correction or deletion",
        "• Opt out of our emails at any time",
        "• Withdraw consent",
        "",
        "To make any request, simply email us at beadersafrica@gmail.com",
      ],
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Updates to This Policy",
      content: [
        "We may occasionally update this Privacy Policy to reflect changes to our platform.",
        "",
        'Any updates will be posted here with a new "Last Updated" date.',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf9f5]">
      {/* Header */}
      <header className="bg-[#636b2f] text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
            <Shield className="w-10 h-10 text-[#d9b753]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-white/90 mb-2">
            Your privacy matters to us
          </p>
          <p className="text-sm text-white/70">Last updated: December 2025</p>
        </div>
      </header>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8 border border-[#636b2f]/10">
          <p className="text-lg text-gray-700 leading-relaxed">
            Beaders Africa (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;)
            is committed to protecting your privacy. This Privacy Policy
            explains how we collect, use, and safeguard your information when
            you use our website, join our waitlist, or interact with our
            platform.
          </p>
        </div>

        {/* Policy Sections */}
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

        {/* Contact Section */}
        <div className="mt-12 bg-linear-to-br from-[#636b2f] to-[#636b2f]/90 rounded-2xl shadow-lg p-8 text-white">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <Mail className="w-6 h-6 text-[#d9b753]" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-3">Contact Us</h2>
              <p className="text-white/90 mb-4 leading-relaxed">
                If you have questions about this Privacy Policy, reach us at:
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
