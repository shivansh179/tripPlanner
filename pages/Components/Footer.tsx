import React from 'react';
import {
  FaWhatsapp,
  FaTwitter,
  FaFacebookF, // Note: Use FaFacebookF for the 'f' logo
  FaInstagram,
  FaLinkedinIn, // Note: Use FaLinkedinIn for the 'in' logo
  FaMapMarkerAlt,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcPaypal,
  // Using placeholders for custom icons - replace with actual SVGs/Images if available
  FaRegThumbsUp, // Placeholder for Vibe check
  FaShieldAlt, // Placeholder for Solo Safe
  FaUsers,     // Placeholder for Group Captains
  FaLeaf,      // Placeholder for Greenest Flag
  FaBan,       // Placeholder for No Kebab (maybe?)
} from 'react-icons/fa';
import { SiGoogletagmanager } from "react-icons/si"; // Example for a custom icon like the footer logo

// Define interfaces for data structures if needed (optional for static content)
interface AddressInfo {
  location: string;
  mapLink?: string;
  addressLines: string[];
  mobile: string;
}

const Footer: React.FC = () => {

  const addresses: AddressInfo[] = [
    {
      location: 'Capture a Trip India Pvt Ltd - Delhi',
      addressLines: [
        '1473-G NN-196/9, Bramh Gali, West Rohtash Nagar,',
        'Shahdara, New Delhi - 110032',
      ],
      mobile: '+91-8287636079 / 8076780552',
    },
    {
      location: 'CaptureaTrip India Pvt Ltd – Faridabad',
      mapLink: '#', // Add actual map link
      addressLines: [
        'Office No 304, 3rd floor, SRS Tower, Sector-31,',
        'Near Mewla Maharajpur Metro Station,',
        'Faridabad, Haryana 121003, India',
      ],
      mobile: '+91-8368653222',
    },
    {
      location: 'CaptureaTrip India Pvt Ltd – Gurgaon',
      mapLink: '#', // Add actual map link
      addressLines: [
        'Plot no-378,Udyog vihar phase 2,opposite',
        'vi john we-work,Gurgaon, Haryana 122016, India',
      ],
      mobile: '+91-8368653222',
    }
  ];

  const travelBlogLinks = [
    "# Places to Visit in Leh Ladakh",
    "# Places in Himachal Pradesh",
    "# Hill Stations in Himachal Pradesh",
    "# National Park in Jammu & Kashmir",
    "# Places to Visit in Kedarnath",
    "# Hill Stations Near Delhi",
    "# Paragliding in Manali",
    "# Wildlife Sanctuaries in Meghalaya",
    "# Places to Visit in Meghalaya",
    "# Honeymoon Places in India",
    "# The Scary Story of Ladakh",
    "# National Parks in Ladakh",
    "# Historical Places in Ladakh",
  ];

  const quickLinks = [
    { name: 'Blogs', href: '#' },
    { name: 'Disclaimer', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Cancellation policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Linktree', href: '#' },
  ];


  // Replace placeholders with actual icons/images when available
  const reasons = [
    { icon: <FaBan size={40} className="text-red-500" />, title: "No kebab main haddi!", description: "No middlemen, no hidden fees. Enjoy direct bookings, lower costs, and personalized support for a seamless and affordable trips." },
    { icon: <FaLeaf size={40} className="text-green-600" />, title: "We're the greenest flag", description: "We ensure safety with verified stays, reliable transport, and trained guides for a secure, comfy, and hassle-free trip." },
    { icon: <FaUsers size={40} className="text-orange-500" />, title: "Our Group Captains are fire", description: "Our awesome trip captains are part-guide, part-friend and full time vibe curators" },
    { icon: <FaShieldAlt size={40} className="text-blue-500" />, title: "Solo is safe", description: "Girlies, you're safe AF. No need to wait on fam or besties—just pack and go! Explore stress-free with 100% freedom!" },
    { icon: <FaRegThumbsUp size={40} className="text-pink-500" />, title: "Vibe check comes first", description: "We customize your trips based on age groups, so you're not stuck vibing to someone else's playlist without permission" },
  ];


  return (
    <footer className="bg-gray-50 text-gray-700 text-sm"> {/* Overall footer container */}

      {/* Section 1: Reasons To Make us your travel bestie */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10 md:mb-12">
            Reasons To Make us your travel bestie.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 max-w-5xl mx-auto mb-8">
            {reasons.slice(0, 3).map((reason, index) => (
              <div key={index} className="text-center flex flex-col items-center">
                <div className="mb-3">{reason.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">{reason.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
           {/* Second row of reasons, centered */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 max-w-lg mx-auto">
            {reasons.slice(3).map((reason, index) => (
              <div key={index + 3} className="text-center flex flex-col items-center">
                <div className="mb-3">{reason.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">{reason.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
           {/* Optional: Little green logo icon */}
           <div className="flex justify-center mt-12">
             <div className="bg-green-600 text-white p-3 rounded-full">
               <SiGoogletagmanager size={24} /> {/* Replace with your actual logo icon */}
             </div>
           </div>
        </div>
      </section>

      {/* Section 2: Footer Links & Info */}
      <section className="bg-white py-10 md:py-12">
        <div className="container mx-auto px-4">

          {/* Social Icons */}
          <div className="flex justify-center space-x-5 mb-8">
            <a href="#" aria-label="Twitter" className="text-green-600 hover:text-green-700"><FaTwitter size={20} /></a>
            <a href="#" aria-label="Facebook" className="text-green-600 hover:text-green-700"><FaFacebookF size={20} /></a>
            <a href="#" aria-label="Instagram" className="text-green-600 hover:text-green-700"><FaInstagram size={20} /></a>
            <a href="#" aria-label="LinkedIn" className="text-green-600 hover:text-green-700"><FaLinkedinIn size={20} /></a>
            <a href="#" aria-label="WhatsApp" className="text-green-600 hover:text-green-700"><FaWhatsapp size={20} /></a>
          </div>

          {/* Footer Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Us */}
            <div>
              <h4 className="font-bold text-gray-800 mb-3">About Us</h4>
              <p className="text-xs leading-relaxed mb-2">
                Step into a world of adventure with Capture A Trip, where every journey is an opportunity to connect, explore, and discover. For over 6 years, we've been curating unforgettable travel experiences that bring people together and fulfill their wanderlust...
                <a href="#" className="text-green-600 hover:underline ml-1">View More</a>
              </p>
            </div>

            {/* Travel Blogs */}
            <div>
              <h4 className="font-bold text-gray-800 mb-3">Travel Blogs</h4>
              <ul className="space-y-1.5 text-xs">
                {travelBlogLinks.map((link, index) => (
                   <li key={index}>
                     <a href="#" className="hover:text-green-600 hover:underline">{link}</a>
                   </li>
                 ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-gray-800 mb-3">Quick Links</h4>
               <ul className="space-y-1.5 text-xs">
                 {quickLinks.map((link) => (
                   <li key={link.name}>
                     <a href={link.href} className="hover:text-green-600 hover:underline">{link.name}</a>
                   </li>
                 ))}
              </ul>
            </div>

            {/* Address */}
            <div>
              <h4 className="font-bold text-gray-800 mb-3">Address</h4>
              <div className="space-y-4 text-xs">
                 {addresses.map((addr, index) => (
                   <div key={index}>
                     <p className="font-semibold text-gray-800 mb-1">{addr.location}</p>
                     {addr.mapLink && (
                       <a href={addr.mapLink} className="flex items-center text-green-600 hover:underline mb-1">
                         <FaMapMarkerAlt className="mr-1" /> View on Map
                       </a>
                     )}
                     {addr.addressLines.map((line, lineIndex) => (
                       <p key={lineIndex} className="leading-snug">{line}</p>
                     ))}
                     <p className="mt-1">Mobile: {addr.mobile}</p>
                   </div>
                 ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Payment */}
          <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs">
            <p className="text-gray-500 mb-4 md:mb-0">
              © 2016 - {new Date().getFullYear()} Capture A Trip India Pvt. Ltd. All rights reserved
            </p>
            <div className="flex items-center space-x-3">
              {/* Replace with actual payment icons/images if needed */}
              <FaCcVisa size={28} className="text-gray-400" />
              <FaCcMastercard size={28} className="text-gray-400" />
              <FaCcAmex size={28} className="text-gray-400" />
              <FaCcPaypal size={28} className="text-gray-400" />
              {/* Add other icons like RuPay, UPI etc. as needed */}
            </div>
          </div>
        </div>
      </section>

      {/* Fixed WhatsApp Button */}
      <a
        href="https://wa.me/YOUR_WHATSAPP_NUMBER" // Replace with your actual WhatsApp link/number
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50"
      >
        <FaWhatsapp size={24} />
      </a>

    </footer>
  );
};

export default Footer;