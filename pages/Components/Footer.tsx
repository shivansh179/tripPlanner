import React from 'react';
import {
  FaWhatsapp,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcPaypal,
  FaRegThumbsUp,
  FaShieldAlt,
  FaUsers,
  FaLeaf,
  FaBan,
} from 'react-icons/fa';
import { SiGoogletagmanager } from "react-icons/si";

interface AddressInfo {
  title: string;
  addressLines: string[];
  mobile?: string;
  email?: string;
  mapLink?: string;
}

const Footer: React.FC = () => {

  // UPDATED: Replaced with “Ambe Enterprises” / “YLOO Trips” address details from the image
  const addresses: AddressInfo[] = [
    {
      title: 'Office Address (Ambe Enterprises – Gurugram)',
      addressLines: [
        '301, Plot 130-131, Avenue 69, Sector 69,',
        'Gurugram, Haryana 122101'
      ],
      mobile: '7888733061',
      email: 'Hello@ylootrips.com',
      // If you have a Google Maps link for this office, paste it here. Otherwise you can leave it blank or remove.
      mapLink: 'https://goo.gl/maps/YourGurugramOfficeLink'
    },
    {
      title: 'GST Registered Address (Ambe Enterprises – Delhi)',
      addressLines: [
        'FIRST FLOOR, D-86/1, LAXMI NAGAR, GALI NO.4,',
        'LAXMI NAGAR, East Delhi, Delhi 110092'
      ],
      // For the registered address, we typically don’t call customers here, so no mobile is mandatory. You can remove mobile if you wish.
      // But I’ll leave the same “7888733061” if you’d like customers to use it for all locations:
      mobile: '7888733061',
      mapLink: 'https://goo.gl/maps/YourLaxmiNagarLink'
    }
  ];

  // The “reasons” block remains unchanged
  const reasons = [
    {
      icon: <FaBan size={40} className="text-red-500" />,
      title: "No kebab main haddi!",
      description:
        "No middlemen, no hidden fees. Enjoy direct bookings, lower costs, and personalized support for a seamless and affordable trips."
    },
    {
      icon: <FaLeaf size={40} className="text-green-600" />,
      title: "We're the greenest flag",
      description:
        "We ensure safety with verified stays, reliable transport, and trained guides for a secure, comfy, and hassle-free trip."
    },
    {
      icon: <FaUsers size={40} className="text-orange-500" />,
      title: "Our Group Captains are fire",
      description:
        "Our awesome trip captains are part-guide, part-friend and full time vibe curators"
    },
    {
      icon: <FaShieldAlt size={40} className="text-blue-500" />,
      title: "Solo is safe",
      description:
        "Girlies, you're safe AF. No need to wait on fam or besties—just pack and go! Explore stress-free with 100% freedom!"
    },
    {
      icon: <FaRegThumbsUp size={40} className="text-pink-500" />,
      title: "Vibe check comes first",
      description:
        "We customize your trips based on age groups, so you're not stuck vibing to someone else's playlist without permission"
    }
  ];

  // Travel blog links and quick links can remain unchanged or be updated to your new YLOO Trips blog if you have one
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
    { name: 'Privacy Policy', href: '/PrivacyPolicy' },
    { name: 'Cancellation Policy', href: '/CancellationPolicy' },
    { name: 'Terms & Conditions', href: '/TermsAndConditions' },
    { name: 'About Us', href: '#' },
    { name: 'Linktree', href: '#' },
  ];

  return (
    <footer className="bg-gray-50 text-gray-700 text-sm">
      {/* ==================================================================================
          SECTION 1: Reasons To Make Us Your Travel Bestie
          ================================================================================== */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10 md:mb-12">
            Reasons To Make Us Your Travel Bestie
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 max-w-5xl mx-auto mb-8">
            {reasons.slice(0, 3).map((reason, idx) => (
              <div key={idx} className="text-center flex flex-col items-center">
                <div className="mb-3">{reason.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">{reason.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 max-w-lg mx-auto">
            {reasons.slice(3).map((reason, idx) => (
              <div key={idx + 3} className="text-center flex flex-col items-center">
                <div className="mb-3">{reason.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">{reason.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <div className="bg-green-600 text-white p-3 rounded-full">
              <SiGoogletagmanager size={24} />
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================================
          SECTION 2: Footer Links & Info
          ================================================================================== */}
      <section className="bg-white py-10 md:py-12">
        <div className="container mx-auto px-4">
          {/* ---- Social Icons ---- */}
          <div className="flex justify-center space-x-5 mb-8">
            <a href="#" aria-label="Twitter" className="text-green-600 hover:text-green-700">
              <FaTwitter size={20} />
            </a>
            <a href="#" aria-label="Facebook" className="text-green-600 hover:text-green-700">
              <FaFacebookF size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="text-green-600 hover:text-green-700">
              <FaInstagram size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-green-600 hover:text-green-700">
              <FaLinkedinIn size={20} />
            </a>
            <a href="#" aria-label="WhatsApp" className="text-green-600 hover:text-green-700">
              <FaWhatsapp size={20} />
            </a>
          </div>

          {/* ---- Footer Grid ---- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Us */}
            <div>
              <h4 className="font-bold text-gray-800 mb-3">About Us</h4>
              <p className="text-xs leading-relaxed mb-2">
                Step into a world of adventure with YLOO Trips by Ambe Enterprises.
                For over 6 years, we’ve been curating unforgettable journeys that bring people together and fulfill their wanderlust. Whether you’re traveling solo or with friends, our verified stays and expert guides ensure you’re always in safe hands.
                <a href="#" className="text-green-600 hover:underline ml-1">
                  View More
                </a>
              </p>
            </div>

            {/* Travel Blogs */}
            <div>
              <h4 className="font-bold text-gray-800 mb-3">Travel Blogs</h4>
              <ul className="space-y-1.5 text-xs">
                {travelBlogLinks.map((link, idx) => (
                  <li key={idx}>
                    <a href="#" className="hover:text-green-600 hover:underline">
                      {link}
                    </a>
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
                    <a href={link.href} className="hover:text-green-600 hover:underline">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Address(es) */}
            <div>
              <h4 className="font-bold text-gray-800 mb-3">Address</h4>
              <div className="space-y-6 text-xs">
                {addresses.map((addr, idx) => (
                  <div key={idx}>
                    <p className="font-semibold text-gray-800 mb-1">{addr.title}</p>
                    {addr.mapLink && (
                      <a
                        href={addr.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-green-600 hover:underline mb-1"
                      >
                        <FaMapMarkerAlt className="mr-1" /> View on Map
                      </a>
                    )}
                    {addr.addressLines.map((line, lineIdx) => (
                      <p key={lineIdx} className="leading-snug">
                        {line}
                      </p>
                    ))}
                    {addr.mobile && (
                      <p className="mt-1">Mobile: <a href={`tel:${addr.mobile}`} className="text-green-600 hover:underline">{addr.mobile}</a></p>
                    )}
                    {addr.email && (
                      <p>
                        Email: <a href={`mailto:${addr.email}`} className="text-green-600 hover:underline">{addr.email}</a>
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ---- Bottom Bar: Copyright & Payment ---- */}
          <div className="border-t border-gray-200 mt-10 pt-5 flex flex-col md:flex-row justify-between items-center text-xs">
            <p className="text-gray-500 mb-4 md:mb-0">
              © 2016 - {new Date().getFullYear()} YLOO Trips (Ambe Enterprises). All rights reserved.
            </p>
            <div className="flex items-center space-x-3">
              <FaCcVisa size={28} className="text-gray-400" />
              <FaCcMastercard size={28} className="text-gray-400" />
              <FaCcAmex size={28} className="text-gray-400" />
              <FaCcPaypal size={28} className="text-gray-400" />
              {/* Add other payment icons (e.g., RuPay, UPI) if needed */}
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================================
          FIXED WHATSAPP BUTTON
          ================================================================================== */}
      <a
        href="https://wa.me/7888733061" // Direct link to Ambe Enterprises WhatsApp
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
