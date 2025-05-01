import Link from 'next/link';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Image from 'next/image';


const Navbar = () => {
  const handleFeatureInDevelopment = () => {
    toast('This feature is currently in development!', {
      icon: '🚧',
      duration: 3000,
      style: {
        background: '#FFFBEB',
        color: '#B45309',
        border: '1px solid #FDE68A',
      },
    });
  };

  return (
    <nav className="bg-white shadow-md relative">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Left Section: Logo, Phone, Search */}
          <div className="flex items-center space-x-6">
            {/* Logo */}
            <Link href="/">
                    <Image 
                        src="/logo.png"
                        alt="Travel background" 
                        width={100}
                        height={100}
                        className="w-full h-full object-cover"
                      />
            </Link>

            {/* Phone */}
            <div className="hidden md:flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="text-green-900 font-medium">6387427935</span>
            </div>

            {/* Search */}
            <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2">
              <input
                type="text"
                placeholder="Search trips..."
                className="bg-transparent outline-none text-sm w-40"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Right Section: Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-green-900 font-semibold hover:text-green-700 transition">
              Home
            </Link>

            <div
              onClick={handleFeatureInDevelopment}
              className="text-green-900 font-semibold hover:text-green-700 transition cursor-pointer"
            >
              International
            </div>
            <div
              onClick={handleFeatureInDevelopment}
              className="text-green-900 font-semibold hover:text-green-700 transition cursor-pointer"
            >
              Domestic
            </div>

            <Link href="/weekend-trip" className="text-green-900 font-semibold hover:text-green-700 transition">
              Weekend
            </Link>
            <Link href="/UpcomingTrips" className="text-green-900 font-semibold hover:text-green-700 transition">
              Upcoming
            </Link>
            <Link href="/One" className="text-green-900 font-semibold hover:text-green-700 transition">
              Blog
            </Link>
          </div>

          {/* Mobile Menu Button (Placeholder) */}
          <div className="md:hidden">
            <button className="text-green-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
