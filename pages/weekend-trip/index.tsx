import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../Components/Navbar'; // Adjust path if necessary
import TripCard from '../Components/Cards/TripCard'; // Adjust path if necessary
import CallbackModal from '../Components/CallbackModal'; // Adjust path if necessary
import Image from 'next/image';

// Define the Trip type/interface (ensure this matches the props for TripCard and CallbackModal)
interface Trip {
    id: number;
    slug: string;
    imageUrl: string;
    durationDays: number;
    durationNights: number;
    isGroup?: boolean;
    title: string;
    price: number;
    joinDates: string;
}

// List of locations for typing animation
const locations = [
  'Ladakh',
  'Manali',
  'Goa',
  'Jaipur',
  'Rishikesh',
  'Kerala Backwaters',
  'Andaman Islands',
  'Shillong',
];

// Sample Trip Data (Replace with your actual data source/API call)
const sampleTrips: Trip[] = [
  {
    id: 1,
    slug: 'kedarnath-luxury-3n-4d',
    imageUrl: 'https://images.unsplash.com/photo-1612438214708-f428a707dd4e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2VkYXJuYXRofGVufDB8fDB8fHww', // Ensure these images exist in public/weekendTrip
    durationDays: 4,
    durationNights: 3,
    isGroup: true,
    title: 'Kedarnath Luxury 3N 4D',
    price: 17499,
    joinDates: 'May 14, May 21, May 28, Jun 04 ...',
  },
  {
    id: 2,
    slug: 'bir-billing-packages-from-delhi',
    imageUrl: 'https://images.unsplash.com/photo-1592208128295-5aaa34f1d72b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFyYWdsaWRpbmd8ZW58MHx8MHx8fDA%3D', // Ensure these images exist in public/weekendTrip
    durationDays: 2,
    durationNights: 1,
    isGroup: true,
    title: 'Bir Billing Packages from Delhi',
    price: 9000,
    joinDates: 'May 02, May 09, May 16, May 23 ...',
  },
  {
    id: 3,
    slug: 'manali-sissu-2n-3d',
    imageUrl: 'https://images.unsplash.com/photo-1622923488261-258854577e8c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2lzc3V8ZW58MHx8MHx8fDA%3D', // Ensure these images exist in public/weekendTrip
    durationDays: 3,
    durationNights: 2,
    isGroup: true,
    title: 'Manali Sissu 2N 3D',
    price: 8499,
    joinDates: 'May 01, May 08',
  },
  {
    id: 4,
    slug: 'tirthan-valley-weekend-getaway',
    imageUrl: 'https://images.unsplash.com/photo-1529251709126-13669520d1fa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGlydGhhbiUyMHZhbGxleXxlbnwwfHwwfHx8MA%3D%3D', // Ensure these images exist in public/weekendTrip
    durationDays: 3,
    durationNights: 2,
    isGroup: false,
    title: 'Tirthan Valley Weekend Getaway',
    price: 7999,
    joinDates: 'May 01, May 15, May 29 ...',
  },
   {
    id: 5,
    slug: 'spiti-valley-circuit-adventure',
    imageUrl: 'https://images.unsplash.com/photo-1628782379401-4fff9cdcbbfe?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BpdGl8ZW58MHx8MHx8fDA%3D', // Ensure these images exist in public/weekendTrip
    durationDays: 7,
    durationNights: 6,
    isGroup: true,
    title: 'Spiti Valley Circuit Adventure',
    price: 21999,
    joinDates: 'Jun 10, Jun 24, Jul 08 ...',
  },
  {
    id: 6,
    slug: 'rishikesh-river-rafting-camping',
    imageUrl: 'https://images.unsplash.com/photo-1629248457649-b082812aea6c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cml2ZXIlMjByYWZ0aW5nfGVufDB8fDB8fHww', // Ensure these images exist in public/weekendTrip
    durationDays: 2,
    durationNights: 1,
    isGroup: true,
    title: 'Rishikesh River Rafting & Camping',
    price: 3499,
    joinDates: 'Every Weekend',
  },
  // Add more trip objects as needed
];


const IndexPage: React.FC = () => { // Use React.FC for functional component type
  const router = useRouter();
  const [locationIndex, setLocationIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // --- Modal State ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);
  // --- End Modal State ---

  // Typing Animation Effect
  useEffect(() => {
    const currentWord = locations[locationIndex];
    let timer: NodeJS.Timeout | number | undefined;

    if (!isDeleting && displayedText.length < currentWord.length) {
      timer = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, displayedText.length + 1));
        setTypingSpeed(150);
      }, typingSpeed);
    }
    else if (!isDeleting && displayedText.length === currentWord.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(100);
      }, 2000); // Pause at end of word
    }
    else if (isDeleting && displayedText.length > 0) {
      timer = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, displayedText.length - 1));
        setTypingSpeed(100);
      }, typingSpeed);
    }
    else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setLocationIndex((prevIndex) => (prevIndex + 1) % locations.length); // Cycle through locations
      setTypingSpeed(300); // Slight delay before starting next word
    }
    // Cleanup function
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, locationIndex, typingSpeed]); // Dependencies

  // Navigation Handler (as provided by user)
  const handleRedirect = (slug: string | undefined) => {
    if (slug) {
        // Example logic: only redirect for Kedarnath, alert for others
        if(slug.toLowerCase().includes("kedarnath")){ // Make check case-insensitive
            router.push('/TripDetail'); // Ensure this page exists at pages/TripDetail.tsx or similar
        } else {
            alert("Details page for this trip is not enabled right now.");
        }
    } else {
        console.warn("Attempted to redirect without a valid slug.");
    }
  };

  // --- Modal Handlers ---
  const openCallbackModal = (trip: Trip) => {
      setSelectedTrip(trip);
      setIsModalOpen(true);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling when modal is open
  };

  const closeCallbackModal = () => {
      setIsModalOpen(false);
      setSelectedTrip(null); // Clear selected trip on close
      document.body.style.overflow = ''; // Restore background scrolling
  };
  // --- End Modal Handlers ---

  // Handler for the hero section's generic callback button
  const handleHeroCallbackClick = () => {
      // Option 1: Open a general modal without specific trip info
      // openCallbackModal({ id: 0, slug: 'general', title: 'General Inquiry', price: 0, imageUrl: '/default_image.jpg', /* other fields */ });

      // Option 2: Alert or redirect to a contact page
      alert("Please select a specific trip below to request a callback, or visit our contact page.");

      // Option 3: Implement a separate general callback modal if needed
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* --- Hero Section --- */}
       <div className="relative w-full h-[70vh] sm:h-[80vh] md:h-screen">
        <Image
          src="https://images.unsplash.com/photo-1581932075120-59c5672f449b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyaXAlMjBzdW4lMjBzZXR8ZW58MHx8MHx8fDA%3D" 
          alt="Scenic background"
          className="absolute inset-0 w-full h-full object-cover"
          width={2000}
          height={1600}
          unoptimized
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-40 p-4">
          <div className="text-center">
            <p className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg">
              Weekend trip from Delhi to
              <br />
              <span className="text-yellow-400">
                {displayedText}
              </span>
              {/* Blinking Cursor */}
              <span className="inline-block w-1 h-10 sm:h-12 md:h-14 lg:h-16 bg-white ml-2 animate-blink align-bottom"></span>
            </p>
          </div>
          {/* Hero Callback Button */}
          <div
             onClick={handleHeroCallbackClick} // Attach handler
             className="mt-8 p-3 px-6 text-lg font-semibold text-black bg-white rounded-full shadow-lg cursor-pointer hover:bg-gray-200 transition duration-300"
          >
            Request Callback
          </div>
        </div>
      </div>


      {/* --- Trip Cards Section --- */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Popular Weekend Getaways
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {sampleTrips.map((trip) => (
            // Each grid item contains the card and optionally other interactive elements
            <div key={trip.id} className="flex flex-col"> {/* Use flex-col to manage height */}
                <TripCard
                    // Pass all necessary props down to the TripCard component
                    imageUrl={trip.imageUrl}
                    durationDays={trip.durationDays}
                    durationNights={trip.durationNights}
                    isGroup={trip.isGroup}
                    title={trip.title}
                    price={trip.price}
                    joinDates={trip.joinDates}
                    onCallbackClick={() => openCallbackModal(trip)} // Pass callback handler
                />
                {/* Example "View Details" button below the card */}
                 <button
                   onClick={() => handleRedirect(trip.slug)}
                   className="w-full text-center py-2 mt-2 text-sm text-blue-600 hover:text-blue-800 hover:underline rounded-b-lg bg-gray-100" // Example styling
                 >
                   View Details
                 </button>
            </div>
          ))}
        </div>
      </div>

      {/* --- Render Modal --- */}
      {/* The modal is rendered here but positioned fixed/absolute */}
      <CallbackModal
          isOpen={isModalOpen}
          onClose={closeCallbackModal}
          tripData={selectedTrip} // Pass the selected trip data to the modal
      />
      {/* --- End Render Modal --- */}


      {/* --- Global Style for Blinking Cursor --- */}
      <style jsx global>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
        /* Prevent background scroll when modal is open */
        body.modal-open {
           overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default IndexPage;