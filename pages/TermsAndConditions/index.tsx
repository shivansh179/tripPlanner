import React from "react";
import { ChevronRight, Shield, Phone, Mail, Calendar, Users, Lock, Globe, Eye } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex items-center mb-4">
            <Shield className="w-8 h-8 text-green-600 mr-3" />
            <span className="text-sm font-medium text-green-600 uppercase tracking-wide">Privacy & Security</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-4">
            Your privacy matters to us. Learn how we collect, use, and protect your personal information 
            when you use Yloo's services.
          </p>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-2" />
            <span>Last Updated: January 2025</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-8">
            {/* Privacy Overview */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold text-green-800">Our Privacy Commitment</h3>
              </div>
              <p className="text-green-700">
                Yloo respects your privacy and is committed to protecting the personal information you share with us. 
                This Privacy Policy explains how we collect, use, and safeguard your information when you visit our 
                website or use our services.
              </p>
            </div>

            {/* Table of Contents */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  "Information We Collect", "How We Use Your Information", "Cookies & Tracking",
                  "Data Sharing", "Security Measures", "External Links", "Social Media", "Your Rights"
                ].map((item, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-600 hover:text-green-600 cursor-pointer transition-colors">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    <span>{index + 1}. {item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              {/* Section 1 */}
              <section>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <Users className="w-4 h-4 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
                </div>
                <div className="ml-11">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Personal Details</h4>
                      <p className="text-sm text-gray-600">Name, email, phone number, address, and other identifying information</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Payment Information</h4>
                      <p className="text-sm text-gray-600">Secure payment details processed through trusted gateways</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Usage Data</h4>
                      <p className="text-sm text-gray-600">Cookies, browsing behavior, and website interaction data</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <Eye className="w-4 h-4 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
                </div>
                <div className="ml-11">
                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                    <ul className="space-y-3 text-gray-700">
                      {[
                        "To process bookings and secure payments",
                        "To send confirmations, updates, and promotional offers",
                        "To improve website functionality and customer experience",
                        "To comply with legal obligations and regulatory requirements"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <ChevronRight className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <Globe className="w-4 h-4 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Cookies & Tracking</h2>
                </div>
                <div className="ml-11">
                  <p className="text-gray-700 mb-4">
                    Our website uses cookies to enhance your browsing experience and provide personalized content. 
                    You can manage or disable cookies through your browser settings, though this may affect website functionality.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <h4 className="font-semibold text-amber-800 mb-2">Types of Cookies We Use:</h4>
                    <ul className="text-sm text-amber-700 space-y-1">
                      <li>• Essential cookies for website functionality</li>
                      <li>• Analytics cookies to understand user behavior</li>
                      <li>• Marketing cookies for personalized advertisements</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Remaining sections */}
              {[
                {
                  icon: Users,
                  number: 4,
                  title: "Data Sharing",
                  content: "We do not sell or rent your personal information to third parties. We may share data only with trusted partners necessary for fulfilling our services or when required by legal obligations. All third-party partners are bound by strict confidentiality agreements."
                },
                {
                  icon: Lock,
                  number: 5,
                  title: "Security Measures",
                  content: "We implement industry-standard security measures including SSL encryption, secure servers, and regular security audits to protect your data. However, no internet transmission is 100% secure, and you share information at your own discretion."
                },
                {
                  icon: Globe,
                  number: 6,
                  title: "External Links",
                  content: "Our website may contain links to third-party websites for additional services or information. We are not responsible for the privacy policies or security practices of external sites. Please review their policies before sharing personal information."
                },
                {
                  icon: Users,
                  number: 7,
                  title: "Social Media",
                  content: "We may use social media platforms for promotions and customer engagement. Please exercise caution when sharing personal information on social media platforms, as their privacy policies may differ from ours."
                },
                {
                  icon: Shield,
                  number: 8,
                  title: "Your Rights",
                  content: "You have the right to access, update, or request deletion of your personal data. You may also opt-out of marketing communications at any time. Contact us using the information below to exercise these rights or for any privacy-related concerns."
                }
              ].map((section) => (
                <section key={section.number}>
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <section.icon className="w-4 h-4 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                  </div>
                  <div className="ml-11">
                    <p className="text-gray-700">{section.content}</p>
                  </div>
                </section>
              ))}

              {/* Data Retention Section */}
              <section>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-bold text-green-600">9</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Data Retention</h2>
                </div>
                <div className="ml-11">
                  <p className="text-gray-700 mb-4">
                    We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, 
                    comply with legal obligations, and resolve disputes.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Retention Periods:</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Booking information: 7 years for tax and legal purposes</li>
                      <li>• Marketing data: Until you unsubscribe or request deletion</li>
                      <li>• Website analytics: 26 months maximum</li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-gradient-to-r from-green-600 to-green-700 rounded-lg shadow-lg">
          <div className="p-8 text-white">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <Mail className="w-6 h-6 mr-3" />
              Questions About Privacy?
            </h3>
            <p className="mb-6">Contact our privacy team for any questions or concerns about your data.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3" />
                <span className="font-semibold">8427831127</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3" />
                <span className="font-semibold">hello@ylootrips.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}