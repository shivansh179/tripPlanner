import React from 'react';
// Import icons (install react-icons if you haven't: npm install react-icons)
import { FaClock, FaUsers, FaCalendarAlt, FaRupeeSign } from 'react-icons/fa';
import Image from 'next/image';


// 1. Define an interface for the component's props
interface TripCardProps {
  imageUrl: string;          // Expecting a string for the image URL
  durationDays: number;      // Expecting a number
  durationNights: number;    // Expecting a number
  isGroup?: boolean;         // Optional boolean (marked with ?)
  title: string;             // Expecting a string
  price: number;             // Expecting a number
  joinDates: string;         // Expecting a string
  onCallbackClick?: () => void; // Optional function prop (example)
}

// 2. Use the interface to type the props
// You can use React.FC<TripCardProps> or type the destructured props directly
const TripCard: React.FC<TripCardProps> = ({
  imageUrl,
  durationDays,
  durationNights,
  isGroup = true, // Default value still works
  title,
  price,
  joinDates,
  onCallbackClick, // Destructure the optional prop if you use it
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out flex flex-col">
      {/* Image */}
      <div className="relative h-48 w-full">
        <Image
          className="absolute inset-0 w-full h-full object-cover"
          src={imageUrl}
          alt={title} // Use title for alt text, good practice
          width={200}
          height={160}
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Top Details Row */}
        <div className="flex justify-between items-center text-gray-600 text-sm mb-2">
          <div className="flex items-center">
            <FaClock className="mr-1" />
            <span>{durationDays} days, {durationNights} nights</span>
          </div>
          {/* Conditional rendering based on isGroup */}
          {isGroup && (
            <div className="flex items-center">
              <FaUsers className="mr-1" />
              <span>Group</span>
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="font-bold text-lg text-gray-800 mb-2 truncate" title={title}>
          {title}
        </h3>

        {/* Price */}
        <div className="flex items-center text-xl font-bold text-green-700 mb-2">
           <FaRupeeSign className="mr-1" />
           {/* Ensure price is a number before calling toLocaleString */}
           {typeof price === 'number' ? price.toLocaleString('en-IN') : 'N/A'}
        </div>

        {/* Dates */}
        <div className="flex items-center text-gray-600 text-sm mb-4">
          <FaCalendarAlt className="mr-1" />
          <span>Join us on: {joinDates}</span>
        </div>

        {/* Callback Button - Pushed to bottom */}
        <div className="mt-auto">
          <button
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
            onClick={onCallbackClick} // Use the passed-in handler
          >
            Request Callback
          </button>
        </div>
      </div>
    </div>
  );
};

export default TripCard;