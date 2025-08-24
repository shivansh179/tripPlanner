import { useState, useEffect } from 'react';
import { Calendar, Shield, RefreshCw, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

export default function CancellationPolicy() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/2 w-36 h-36 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 shadow-lg">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
            Cancellation Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Transparent and fair cancellation terms designed with your travel plans in mind
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Traveler Cancellation Section */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cancellation by Traveler</h2>
            <p className="text-lg text-gray-600">Review our tiered cancellation structure based on timing</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {travelerPolicies.map((policy, index) => (
              <div
                key={policy.id}
                className={`group relative overflow-hidden rounded-2xl border-2 ${policy.borderColor} ${policy.bgColor} 
                          transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer
                          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{transitionDelay: `${600 + index * 200}ms`}}
                onMouseEnter={() => setActiveCard(policy.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${policy.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative p-8">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${policy.color} rounded-xl mb-6 text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    {policy.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{policy.period}</h3>
                  <div className={`text-2xl font-bold ${policy.textColor} mb-4`}>
                    {policy.fee}
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {policy.description}
                  </p>

                  {/* Animated border */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${policy.color} transform origin-left transition-transform duration-500 ${activeCard === policy.id ? 'scale-x-100' : 'scale-x-0'}`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Cancellation Section */}
        <div className={`mb-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-10 relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full shadow-lg">
                    <RefreshCw className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                  Cancellation by Company
                </h2>

                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border-2 border-emerald-200">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Your Protection Guarantee
                      </h3>
                      <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        We may cancel due to unforeseen circumstances including natural disasters, 
                        government restrictions, or other extraordinary events beyond our control.
                      </p>
                      <div className="bg-white/80 rounded-xl p-6 border border-emerald-100">
                        <h4 className="font-semibold text-emerald-800 mb-2">Your Options:</h4>
                        <ul className="text-gray-700 space-y-2">
                          <li className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                            <span>Choose an alternate trip or date</span>
                          </li>
                          <li className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                            <span>Receive a full refund with no penalties</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className={`text-center transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center space-x-2 text-gray-600 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
            <Shield className="w-5 h-5" />
            <span className="font-medium">Questions? Contact our support team for assistance</span>
          </div>
        </div>
      </div>
    </div>
  );
}