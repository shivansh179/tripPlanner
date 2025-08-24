import React from "react";
import { ChevronRight, FileText, Phone, Mail, Calendar } from "lucide-react";

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex items-center mb-4">
            <FileText className="w-8 h-8 text-blue-600 mr-3" />
            <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">Legal Documents</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Please read these terms carefully before using our services. By booking with Yloo, 
            you agree to be bound by these terms and conditions.
          </p>
          <div className="flex items-center text-sm text-gray-500 mt-4">
            <Calendar className="w-4 h-4 mr-2" />
            <span>Last Updated: January 2025</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-8">
            {/* Table of Contents */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  "Introduction", "Booking & Payments", "Cancellation & Refund Policy", 
                  "Travel Documents", "Health & Safety", "Insurance", "Itinerary Changes",
                  "Behavior & Liability", "Limitation of Liability"
                ].map((item, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-600 hover:text-blue-600 cursor-pointer transition-colors">
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
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-bold text-blue-600">1</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
                </div>
                <div className="ml-11 prose prose-gray max-w-none text-black">
                  <p>Welcome to Yloo! By booking or using our services, you agree to abide by these Terms & Conditions. These terms constitute a legally binding agreement between you and Yloo regarding your use of our travel services.</p>
                </div>
              </section>

              {/* Section 2 */}
              <section>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-bold text-blue-600">2</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Booking & Payments</h2>
                </div>
                <div className="ml-11">
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>A deposit is required to confirm your booking and secure your spot</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Balance must be paid as per booking confirmation deadlines</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Payments can be made via card, UPI, bank transfer, and other accepted methods</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-bold text-blue-600">3</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Cancellation & Refund Policy</h2>
                </div>
                <div className="ml-11 space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Cancellation by Traveler</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="text-green-800 font-semibold">20+ days before</div>
                        <div className="text-sm text-green-600">Cancellation fee applies</div>
                      </div>
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <div className="text-yellow-800 font-semibold">10-15 days before</div>
                        <div className="text-sm text-yellow-600">50% cancellation fee</div>
                      </div>
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <div className="text-red-800 font-semibold">Less than 5 days</div>
                        <div className="text-sm text-red-600">No refund available</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Cancellation by Company</h4>
                    <p className="text-gray-700">We may cancel due to unforeseen circumstances (natural disasters, government restrictions, etc.). You may choose an alternate trip/date or receive a full refund.</p>
                  </div>
                </div>
              </section>

              {/* Remaining sections with similar styling */}
              {[
                {
                  number: 4,
                  title: "Travel Documents",
                  content: "Travelers are responsible for carrying valid ID, visas, and permits. We are not responsible for denied entry due to incomplete or incorrect documents."
                },
                {
                  number: 5,
                  title: "Health & Safety",
                  content: "Travelers must ensure they are medically fit for the trip and disclose pre-existing medical conditions in advance."
                },
                {
                  number: 6,
                  title: "Insurance",
                  content: "We strongly recommend purchasing comprehensive travel insurance for emergencies, cancellations, medical coverage, or baggage loss."
                },
                {
                  number: 7,
                  title: "Itinerary Changes",
                  content: "We may modify itineraries due to weather conditions or safety issues. Alternatives of equal value will be provided whenever possible."
                },
                {
                  number: 8,
                  title: "Behavior & Liability",
                  content: "Travelers must behave respectfully towards fellow travelers, guides, and locals. We are not liable for delays, injuries, or losses caused by circumstances beyond our control."
                },
                {
                  number: 9,
                  title: "Limitation of Liability",
                  content: "Our liability is limited to the total trip cost. We are not responsible for lost, stolen, or damaged personal belongings."
                }
              ].map((section) => (
                <section key={section.number}>
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-bold text-blue-600">{section.number}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                  </div>
                  <div className="ml-11">
                    <p className="text-gray-700">{section.content}</p>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-lg">
          <div className="p-8 text-white">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <Phone className="w-6 h-6 mr-3" />
              Need Help?
            </h3>
            <p className="mb-6">Have questions about our terms? Our team is here to help.</p>
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