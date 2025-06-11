import React, { useState } from 'react';
import Navbar from '../Components/Navbar'; // Adjust path if needed
import emailjs from '@emailjs/browser';   // Import EmailJS SDK
import toast, { Toaster } from 'react-hot-toast'; // Import toast for feedback
import Image from 'next/image';

// --- EmailJS Configuration ---
// Using the IDs you provided. Ensure the Public Key ENV var is set.
const EMAILJS_SERVICE_ID = 'service_qawyImage';
const EMAILJS_TEMPLATE_ID = 'template_ke6tr48'; // Ensure this template expects the new fields
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_USER_ID || ''; // Get Public Key from ENV

if (!EMAILJS_PUBLIC_KEY) {
    console.warn("EmailJS Public Key (NEXT_PUBLIC_EMAILJS_USER_ID) is not set in environment variables. Email sending will likely fail.");
}
// --- End EmailJS Configuration ---


const Index: React.FC = () => {
  // --- Form State - Added new fields ---
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    destination: '',
    travelDate: '',      // Added for travel date
    numTravelers: '',    // Added for number of travelers
    message: '',         // Added for message/requirements
  });
  const [isSending, setIsSending] = useState(false);
  // --- End Form State ---

  // --- Input/Textarea Change Handler ---
  // This handler works for input and textarea by using the element's id
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };
  // --- End Input Change Handler ---

  // --- Form Submit Handler ---
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSending || !EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
        if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
             toast.error("Email configuration issue. Cannot send inquiry.");
        }
        return;
    }
    // Updated validation to include new required fields (if any - e.g., numTravelers)
    if (!formData.name || !formData.phone || !formData.email || !formData.numTravelers) {
        toast.error("Please fill in all required fields (*).");
        return;
    }

    setIsSending(true);

    // --- Prepare Template Parameters - Added new fields ---
    // !! Verify these keys EXACTLY match variables in your EmailJS template 'template_h1mn5v5' !!
    const templateParams = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      destination: formData.destination || 'Not specified',
      travel_date: formData.travelDate || 'Not specified', // Added field
      num_travelers: formData.numTravelers,              // Added field (assuming required)
      message: formData.message || 'No message provided', // Added field
      reply_to: formData.email,
      // to_email: 'prasantshukla89@gmail.com' // Usually set in EmailJS template settings
    };
    // --- End Prepare Template Parameters ---

    console.log("Sending Email with Params:", templateParams);

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      .then((response) => {
        console.log('EmailJS Inquiry SUCCESS!', response.status, response.text);
        toast.success(`Inquiry submitted successfully! We'll be in touch.`);
        // Clear the form including new fields
        setFormData({ name: '', phone: '', email: '', destination: '', travelDate: '', numTravelers: '', message: '' });
      })
      .catch((err) => {
        console.error('EmailJS Inquiry FAILED...', err);
        toast.error('Failed to submit inquiry. Please try again later.');
      })
      .finally(() => {
        setIsSending(false);
      });
  };
  // --- End Form Submit Handler ---


  return (
    <>
      {/* Ensure Toaster is rendered, e.g., in _app.tsx or here */}
      {/* <Toaster position="top-center" reverseOrder={false} /> */}
      <Navbar />
      <div className="min-h-screen relative">

        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1639345868466-4afd943c7195?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFRSSVAlMjBFVkVOSU5JR3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Travel background"
          className="absolute inset-0 w-full h-full object-cover z-0"
          width={2000}
          height={1600}
          // unoptimized
        />
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 min-h-screen gap-10 lg:gap-16">
          {/* Left side text */}
          <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-extrabold text-center lg:text-left lg:w-1/2 mb-8 lg:mb-0">
            Upcoming trips
          </h1>

          {/* Form container */}
          <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8 w-full max-w-md lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Plan Your Next Adventure</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-1 w-full px-4 py-2 border border-gray-400 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  disabled={isSending}
                />
              </div>

              {/* Phone Input */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone <span className="text-red-500">*</span></label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="98XXXXXXXX"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  pattern="[6-9]\d{9}"
                  title="Please enter a valid 10-digit Indian mobile number"
                  className="mt-1 w-full px-4 py-2 border border-gray-400 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  disabled={isSending}
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  id="email"
                  placeholder="example@mail.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1 w-full px-4 py-2 border border-gray-400 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  disabled={isSending}
                />
              </div>

              {/* --- NEW: Travel Date Input --- */}
              <div>
                <label htmlFor="travelDate" className="block text-sm font-medium text-gray-700">Approx. Travel Date</label>
                <input
                  type="date" // Use native date picker
                  id="travelDate"
                  value={formData.travelDate}
                  onChange={handleInputChange}
                  className="mt-1 w-full px-4 py-2 border border-gray-400 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  disabled={isSending}
                />
              </div>
              {/* --- End Travel Date Input --- */}

              {/* --- NEW: Number of Travelers Input --- */}
              <div>
                <label htmlFor="numTravelers" className="block text-sm font-medium text-gray-700">Number of Travelers <span className="text-red-500">*</span></label>
                <input
                  type="number"
                  id="numTravelers"
                  min="1" // Minimum 1 traveler
                  value={formData.numTravelers}
                  onChange={handleInputChange}
                  required // Make this required
                  placeholder="e.g., 2"
                  className="mt-1 w-full px-4 py-2 border border-gray-400 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  disabled={isSending}
                />
              </div>
              {/* --- End Number of Travelers Input --- */}

              {/* Destination Input (Optional) */}
              <div>
                <label htmlFor="destination" className="block text-sm font-medium text-gray-700">Preferred Destination(s)</label>
                <input
                  type="text"
                  id="destination"
                  placeholder="Nepal, Dubai, Spiti, etc."
                  value={formData.destination}
                  onChange={handleInputChange}
                  className="mt-1 w-full px-4 py-2 border border-gray-400 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  disabled={isSending}
                />
              </div>

              {/* --- NEW: Message/Requirements Textarea --- */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message / Requirements</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange} // Re-use same handler
                  placeholder="Any specific requests, questions, or details about your desired trip?"
                  className="mt-1 w-full px-4 py-2 border border-gray-400 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  disabled={isSending}
                ></textarea>
              </div>
              {/* --- End Message/Requirements Textarea --- */}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSending}
                className={`w-full bg-green-700 text-white py-2.5 px-4 rounded-md hover:bg-green-800 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${
                  isSending ? 'opacity-60 cursor-not-allowed' : ''
                }`}
              >
                {isSending ? 'Submitting...' : 'Submit Inquiry'} {/* Updated Button Text */}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;