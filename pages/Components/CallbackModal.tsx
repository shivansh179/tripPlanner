import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaTimes, FaRupeeSign, FaCalendarAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser'; // Import EmailJS
import toast from 'react-hot-toast'; // Import toast for feedback

// --- EmailJS Configuration ---
// !! IMPORTANT: Replace with your actual IDs and ensure ENV var is set !!
const EMAILJS_SERVICE_ID = 'service_qawyimg'; // Replace
const EMAILJS_TEMPLATE_ID = 'template_h1mn5v5'; // Replace
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_USER_ID || ''; // Get from ENV

if (!EMAILJS_PUBLIC_KEY) {
    console.warn("EmailJS Public Key (NEXT_PUBLIC_EMAILJS_USER_ID) is not set in environment variables. Email sending will likely fail.");
}
// --- End EmailJS Configuration ---


// Define the shape of the trip data the modal expects
interface TripData {
  id: number;
  slug: string;
  imageUrl: string;
  title: string;
  price: number;
  // Add any other relevant fields if needed
}

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  tripData: TripData | null; // Trip data to display, null when closed or no data
}

const CallbackModal: React.FC<CallbackModalProps> = ({ isOpen, onClose, tripData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    date: '',
    travellers: '',
  });
  const [isSending, setIsSending] = useState(false); // State for loading indicator

  // Reset form when modal opens with new trip data
  useEffect(() => {
    if (isOpen && tripData) {
      setFormData({
        name: '',
        email: '',
        mobile: '',
        date: '', // You might want to set a default date
        travellers: '',
      });
      setIsSending(false); // Reset sending state
    }
  }, [isOpen, tripData]);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // --- Modified handleSubmit to use EmailJS ---
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Prevent submission if already sending, missing data, or missing config
    if (isSending || !tripData || !EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
        if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
             toast.error("Email configuration is missing. Cannot send request.");
        }
        return;
    }

    setIsSending(true); // Start loading state

    // --- Prepare Template Parameters ---
    // Ensure these keys EXACTLY match variables in your EmailJS template
    const templateParams = {
      name: formData.name,
      email: formData.email,
      mobile: `+91${formData.mobile}`, // Assuming +91 prefix is desired
      date: formData.date || 'Not specified',
      travellers: formData.travellers,
      trip_title: tripData.title,
      trip_id: tripData.id.toString(),
      trip_slug: tripData.slug,
      trip_price: tripData.price.toLocaleString('en-IN'),
      reply_to: formData.email, // Set this in EmailJS template settings too
      to_email: 'prasantshukla89@gmail.com' // Target email address
    };
    // --- End Prepare Template Parameters ---

    // --- Send Email using EmailJS ---
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      .then((response) => {
        console.log('EmailJS SUCCESS!', response.status, response.text);
        toast.success(`Request submitted for ${tripData.title}! We'll be in touch.`);
        onClose(); // Close modal on success
      })
      .catch((err) => {
        console.error('EmailJS FAILED...', err);
        toast.error('Oops! Something went wrong. Please try again.');
      })
      .finally(() => {
        setIsSending(false); // End loading state regardless of outcome
      });
      // --- End Send Email ---
  };
  // --- End Modified handleSubmit ---


  // Handle closing the modal if Esc key is pressed
   useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);


  if (!isOpen || !tripData) return null; // Don't render if not open or no data

  return (
    // Overlay - Added backdrop-blur style as requested
    <div
        className="fixed inset-0 backdrop-blur-sm bg-opacity-60 flex items-center justify-center z-50 p-4 text-black" // Added backdrop-blur, ensured text-black (though children have own color)
        onClick={onClose} // Close modal when clicking overlay
    >
      {/* Modal Content */}
      <div
        className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md relative"
        onClick={(e) => e.stopPropagation()} // Prevent overlay click when clicking inside modal
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition-colors"
          aria-label="Close modal"
        >
          <FaTimes size={20} />
        </button>

        {/* Trip Info Header */}
        <div className="flex items-center mb-5">
          <div className="relative w-16 h-12 rounded-md overflow-hidden mr-4 flex-shrink-0">
            {/* Use next/image if available and configured */}
            <Image src={tripData.imageUrl} alt={tripData.title} layout="fill" objectFit="cover" />
            {/* Fallback img tag */}
            {/* <img src={tripData.imageUrl} alt={tripData.title} className="w-full h-full object-cover" /> */}
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800 leading-tight">{tripData.title}</h2>
            <p className="text-md font-bold text-green-700 flex items-center">
              <FaRupeeSign className="mr-0.5" />
              {tripData.price.toLocaleString('en-IN')}
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Input Fields remain the same */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            required
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent bg-green-50/30 placeholder-gray-500"
            disabled={isSending} // Disable during send
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            required
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent bg-green-50/30 placeholder-gray-500"
            disabled={isSending} // Disable during send
          />
          {/* Phone Input */}
          <div className={`flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-green-300 focus-within:border-transparent overflow-hidden bg-green-50/30 ${isSending ? 'opacity-70 bg-gray-100' : ''}`}>
             <span className="px-3 py-2.5 text-sm text-gray-600 bg-gray-100 border-r border-gray-300">+91</span>
             <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                placeholder="Mobile Number"
                required
                pattern="[6-9]\d{9}"
                title="Please enter a valid 10-digit Indian mobile number"
                className="w-full px-4 py-2.5 text-sm focus:outline-none placeholder-gray-500 border-0 bg-transparent" // Ensure bg-transparent if parent has bg
                disabled={isSending} // Disable during send
              />
          </div>
          {/* Date and Travellers Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             <div className="relative">
                <input
                    type="text"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    placeholder="dd/mm/yyyy"
                    onFocus={(e) => (e.target.type = 'date')}
                    onBlur={(e) => {if(!e.target.value) e.target.type = 'text'}}
                    required
                    className={`w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent bg-green-50/30 placeholder-gray-500 pr-10`} // Corrected padding class
                    disabled={isSending} // Disable during send
                />
                 <FaCalendarAlt className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
             </div>

            <input
              type="number"
              name="travellers"
              min="1"
              value={formData.travellers}
              onChange={handleInputChange}
              placeholder="No. of travellers"
              required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent bg-green-50/30 placeholder-gray-500"
              disabled={isSending} // Disable during send
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSending} // Disable button while sending
            className={`w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 text-md ${
                isSending ? 'opacity-50 cursor-not-allowed' : '' // Style for disabled state
            }`}
          >
            {isSending ? 'Sending...' : 'Talk to our expert'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CallbackModal;