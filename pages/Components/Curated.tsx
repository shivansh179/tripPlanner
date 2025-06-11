import React, { useState } from 'react';
import CallbackModal from './CallbackModal'; // Adjust path if necessary
import { FaRupeeSign } from 'react-icons/fa'; // Import if needed for formatting
import Image from 'next/image';

// Define the interface for the trip data used in this component
interface GalleryTrip {
  id: number; // Important for keys and identifying the trip
  slug: string; // Useful for potential future routing or identifying in logs
  imageUrl: string; // Consistent naming with other components
  title: string;
  tag?: string; // Optional tag like 'Early Bird'
  price: number; // Use number for price for easier handling/formatting
}


interface ModalTripData {
    id: number;
    slug: string;
    imageUrl: string;
    title: string;
    price: number;
}


const trips: GalleryTrip[] = [
  {
    id: 101, // Added unique ID
    slug: 'ladakh-stamp-1', // Added unique slug
    imageUrl: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFkYWtofGVufDB8fDB8fHww', // Renamed from 'image'
    title: 'Ladakh',
    tag: 'Early Bird',
    price: 20999 // Changed to number
  },
  // {
  //   id: 102,
  //   slug: 'europe-stamp',
  //   imageUrl: '/landing.jpg',
  //   title: 'Europe',
  //   price: 139999
  // },
  // {
  //   id: 103,
  //   slug: 'bhutan-stamp',
  //   imageUrl: '/landing.jpg',
  //   title: 'Bhutan',
  //   price: 33999
  // },
  // {
  //   id: 104,
  //   slug: 'baku-almaty-stamp',
  //   imageUrl: '/landing.jpg',
  //   title: 'Baku & Almaty',
  //   price: 49999
  // }
   {
    id: 102,
    slug: 'ladakh-stamp-2', // Ensure slugs/ids are unique if repeating
    imageUrl: 'https://images.unsplash.com/photo-1635255506105-b74adbd94026?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFkYWtofGVufDB8fDB8fHww',
    title: 'Coming soon ...',
    tag: 'Early Bird',
    price: 20999
  },
  // {
  //   id: 106,
  //   slug: 'europe-stamp-2',
  //   imageUrl: '/landing.jpg',
  //   title: 'Europe',
  //   price: 139999
  // },
  // {
  //   id: 107,
  //   slug: 'bhutan-stamp-2',
  //   imageUrl: '/landing.jpg',
  //   title: 'Bhutan',
  //   price: 33999
  // },
  // {
  //   id: 103,
  //   slug: 'baku-almaty-stamp-2',
  //   imageUrl: '/landing.jpg',
  //   title: 'Baku & Almaty',
  //   price: 49999
  // }
];

const GalleryStamps: React.FC = () => {
  // --- Modal State ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState<ModalTripData | null>(null);
  // --- End Modal State ---

  // --- Modal Handlers ---
  const openCallbackModal = (trip: GalleryTrip) => {
      // Map data if needed, here the structures are compatible enough
      setSelectedTrip({
            id: trip.id,
            slug: trip.slug,
            imageUrl: trip.imageUrl,
            title: trip.title,
            price: trip.price,
      });
      setIsModalOpen(true);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeCallbackModal = () => {
      setIsModalOpen(false);
      setSelectedTrip(null);
      document.body.style.overflow = ''; // Restore background scrolling
  };
  // --- End Modal Handlers ---


  return (
    <div className="bg-[#f4f6f0] py-8 min-h-screen relative"> {/* Ensure relative positioning if needed */}
      <h1 className="text-4xl font-bold text-center mb-12 text-black">Top Trips</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-0"> {/* Added max-width and responsive padding */}
        {trips.map((trip) => (
          <div
            key={trip.id} // Use unique ID for the key
            onClick={() => openCallbackModal(trip)} // Attach onClick handler
            className="bg-[#e2e2e2] rounded-[30px] p-2 pt-6 border-[12px] border-dashed border-[#f4f6f0] text-center cursor-pointer group transform transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg" // Added cursor, group, transform, transition
          >
            {/* Image */}
            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-xl mb-4"> {/* Use aspect ratio utilities */}
              <Image
                src={trip.imageUrl} // Use renamed prop
                alt={trip.title}
                width={100}
                height={100}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" // Group hover effect
              />
            </div>

            {/* Title + Tag */}
            <div className="flex flex-col items-center min-h-[80px]"> {/* Added min-height for consistency */}
              <h2 className="text-xl lg:text-2xl font-bold text-green-900 leading-tight"> {/* Adjusted text size */}
                {trip.title}
              </h2>
                {trip.tag && (
                  <span className="mt-1 text-xs font-medium text-white bg-orange-500 px-2 py-0.5 rounded"> {/* Styled tag */}
                      {trip.tag}
                  </span>
                )}

              {/* Price */}
              <span className="mt-auto pt-2 inline-block bg-green-600 text-white px-4 py-1 rounded-full font-semibold text-sm"> {/* Pushed price down slightly */}
                 {/* Format the numeric price */}
                 ₹{trip.price.toLocaleString('en-IN')}/-
              </span>
            </div>
          </div>
        ))}
      </div>

       {/* --- Render Modal --- */}
       <CallbackModal
          isOpen={isModalOpen}
          onClose={closeCallbackModal}
          tripData={selectedTrip}
      />
      {/* --- End Render Modal --- */}

    </div>
  );
};

export default GalleryStamps;