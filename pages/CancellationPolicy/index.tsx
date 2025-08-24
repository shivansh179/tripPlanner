import { useState, useEffect } from 'react';
import { Calendar, Shield, RefreshCw, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

export default function CancellationPolicy() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const travelerPolicies = [
    {
      id: 1,
      period: "20+ days before",
      fee: "Cancellation fee applies",
      description: "Standard processing fee will be charged",
      icon: <Calendar className="w-6 h-6" />,
      color: "from-green-400 to-emerald-500",
      textColor: "text-green-700",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      id: 2,
      period: "10-15 days before",
      fee: "50% cancellation fee",
      description: "Half of the trip cost will be retained",
      icon: <AlertTriangle className="w-6 h-6" />,
      color: "from-yellow-400 to-orange-500",
      textColor: "text-orange-700",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      id: 3,
      period: "Less than 5 days",
      fee: "No refund available",
      description: "Full payment is non-refundable",
      icon: <XCircle className="w-6 h-6" />,
      color: "from-red-400 to-red-600",
      textColor: "text-red-700",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cancellation Policy
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Clear and fair terms for trip cancellations
          </p>
        </div>

        {/* Traveler Cancellation Section */}
        <div className={`mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Cancellation by Traveler</h2>
            <p className="text-gray-600">Cancellation fees depend on timing</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {travelerPolicies.map((policy, index) => (
              <div
                key={policy.id}
                className={`bg-white rounded-lg border shadow-sm hover:shadow-md 
                          transition-all duration-300 cursor-pointer
                          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{transitionDelay: `${400 + index * 100}ms`}}
                onMouseEnter={() => setActiveCard(policy.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="p-6">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-10 h-10 ${policy.bgColor} rounded-lg mb-4`}>
                    <div className={policy.textColor}>
                      {policy.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{policy.period}</h3>
                  <div className={`text-xl font-medium ${policy.textColor} mb-3`}>
                    {policy.fee}
                  </div>
                  <p className="text-gray-600 text-sm">
                    {policy.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Cancellation Section */}
        <div className={`mb-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <RefreshCw className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                  Cancellation by Company
                </h2>
              </div>

              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">
                      Your Protection
                    </h3>
                    <p className="text-gray-700 mb-4">
                      We may cancel due to unforeseen circumstances (natural disasters, 
                      government restrictions, etc.). 
                    </p>
                    <div className="bg-white rounded-lg p-4 border border-green-100">
                      <h4 className="font-medium text-green-800 mb-2">You may choose:</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• An alternate trip or date</li>
                        <li>• Receive a full refund</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="inline-flex items-center space-x-2 text-gray-600 bg-white px-4 py-2 rounded-lg border shadow-sm">
            <Shield className="w-4 h-4" />
            <span className="text-sm">Questions? Contact our support team</span>
          </div>
        </div>
      </div>
    </div>
  );
}