import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ItineraryAccordionItem from '../Components/ItineraryAccordionItem';
import { FaWhatsapp, FaPhoneAlt, FaPlane, FaDownload, FaRupeeSign } from 'react-icons/fa';

// --- Sample Data (Replace with actual data) ---
interface ItineraryDay {
  id: number;
  dayTitle: string;
  details: string; // Content for the accordion body
}

const tripData = {
  title: 'Kedarnath Trip',
  aboutTextShort: 'Kedarnath Mandir (Kedarnath Temple) is a revered Hindu shrine dedicated to Lord Shiva, located in the Garhwal Himalayan range near the...',
  aboutTextFull: 'Kedarnath Mandir (Kedarnath Temple) is a revered Hindu shrine dedicated to Lord Shiva, located in the Garhwal Himalayan range near the Mandakini river in Kedarnath, Uttarakhand in India. Due to extreme weather conditions, the temple is open to the general public only between the months of April (Akshaya Tritiya) and November (Kartik Purnima, the autumn full moon). During the winters, the vigrahas (deities) from Kedarnath temple are carried down to Ukhimath and where the deity is worshiped for the next six months.',
  startingPrice: 17499,
  itinerary: [
    { id: 1, dayTitle: 'DAY 0: DELHI TO GUPTAKASHI', details: 'Departure from Delhi in the evening. Overnight journey towards Guptakashi.' },
    { id: 2, dayTitle: 'DAY 1: REACH GUPTAKASHI | OVERNIGHT STAY AT GUPTAKASHI', details: 'Arrive in Guptakashi, check-in to the hotel/luxury camp. Rest and acclimatize. Dinner and overnight stay.' },
    { id: 3, dayTitle: 'DAY 2: TREK TO KEDARNATH | OVERNIGHT STAY AT KEDARNATH JI TEMPLE', details: 'Early morning drive to Sonprayag, then trek to Kedarnath. Darshan at the temple. Overnight stay near the temple (basic accommodation).' },
    { id: 4, dayTitle: 'DAY 3: KEDARNATH DHAM TO SONPRAYAG | OVERNIGHT STAY AT SONPRAYAG', details: 'Morning darshan/rituals. Trek back down to Sonprayag. Check-in to accommodation. Overnight stay.' },
    { id: 5, dayTitle: 'DAY 4: SONPRAYAG TO RISHIKESH | OVERNIGHT JOURNEY TO DELHI', details: 'Drive from Sonprayag towards Rishikesh/Haridwar. Drop-off for overnight journey back to Delhi.' },
  ] as ItineraryDay[], // Type assertion
  inclusions: [
    'Accommodation for 1 night in a Luxury Camp at Guptkashi, 1 night in basic homestay on Quad / Penta Sharing at Kedarnath Dham, 1 night in a hotel at sonprayag.',
    '5 basic meals will be provided throughout the trip. 1 meal on Day 1 (Dinner) + 1 meal on Day 2 (Dinner) + 2 meals on Day 3 (Breakfast + Dinner) + 1 meal on Day 4 (Breakfast).',
    'Travel as per the itinerary by Tempo Traveler (AC will not be operational in the mountains).',
    'Guide while Trekking.',
    'Experienced trip captain throughout the trip.',
    'Driver charges, toll tax, parking etc.',
  ],
  exclusions: [
      'Any personal expenses.',
      'Anything not mentioned in the inclusions.',
      'Meals not mentioned.',
      'Pony/Palki/Helicopter charges for Kedarnath.',
      'Travel insurance.',
      'Entry fees for any monuments/temples.',
  ],
   datesAndCostingInfo: 'Dates and costing details will be available here. Please check back later or contact us for more information.'
};

type ActiveTab = 'itinerary' | 'inclusion' | 'dates'; // Define possible tab states

const TripDetailsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('itinerary');
  const [openAccordionItems, setOpenAccordionItems] = useState<Set<number>>(new Set());
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', destination: 'Kedarnath' });
  const [isAboutExpanded, setIsAboutExpanded] = useState(false); // For Read More

  const handleTabClick = (tab: ActiveTab) => {
    setActiveTab(tab);
  };

  const toggleAccordionItem = (id: number) => {
    setOpenAccordionItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleGetQuote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., API call)
    console.log('Form Submitted:', formData);
    alert('Quote request submitted! We will contact you soon.');
    // Optionally clear form: setFormData({ name: '', phone: '', email: '', destination: 'Kedarnath' });
  };

  return (
    <div className="bg-gray-50">
      <Navbar />

      <main className="container mx-auto px-4 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* --- Main Content Area --- */}
          <div className="w-full lg:w-2/3 xl:w-3/4 space-y-6">

            {/* About Section */}
            <section className="bg-white p-4 sm:p-6 rounded-lg shadow">
              <div className="flex justify-between items-start mb-2">
                 <h1 className="text-2xl font-bold text-gray-800">{`About ${tripData.title}`}</h1>
                 <button
                   onClick={() => setIsAboutExpanded(!isAboutExpanded)}
                   className="text-sm text-green-600 hover:underline font-medium whitespace-nowrap ml-4"
                 >
                   {isAboutExpanded ? 'Read Less' : 'Read More'}
                 </button>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {isAboutExpanded ? tripData.aboutTextFull : tripData.aboutTextShort}
              </p>
            </section>

            {/* Tabs Section */}
            <section className="bg-white rounded-lg shadow overflow-hidden">
               <div className="flex border-b border-gray-200">
                 <button
                   onClick={() => handleTabClick('itinerary')}
                   className={`flex-1 py-3 px-4 text-sm font-semibold text-center focus:outline-none transition-colors ${
                     activeTab === 'itinerary' ? 'border-b-2 border-green-600 text-green-600 bg-green-50' : 'text-gray-600 hover:bg-gray-50'
                   }`}
                 >
                   ITINERARY
                 </button>
                 <button
                   onClick={() => handleTabClick('inclusion')}
                   className={`flex-1 py-3 px-4 text-sm font-semibold text-center focus:outline-none transition-colors border-l border-gray-200 ${
                     activeTab === 'inclusion' ? 'border-b-2 border-green-600 text-green-600 bg-green-50' : 'text-gray-600 hover:bg-gray-50'
                   }`}
                 >
                   INCLUSION
                 </button>
                 <button
                   onClick={() => handleTabClick('dates')}
                   className={`flex-1 py-3 px-4 text-sm font-semibold text-center focus:outline-none transition-colors border-l border-gray-200 ${
                     activeTab === 'dates' ? 'border-b-2 border-green-600 text-green-600 bg-green-50' : 'text-gray-600 hover:bg-gray-50'
                   }`}
                 >
                   DATES & COSTING
                 </button>
              </div>

              {/* Tab Content */}
              <div className="p-4 sm:p-6">
                {/* Itinerary Content */}
                {activeTab === 'itinerary' && (
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Itinerary</h2>
                    {tripData.itinerary.map((item) => (
                      <ItineraryAccordionItem
                        key={item.id}
                        dayTitle={item.dayTitle}
                        details={item.details}
                        isOpen={openAccordionItems.has(item.id)}
                        onToggle={() => toggleAccordionItem(item.id)}
                      />
                    ))}
                    <div className="mt-6 text-center">
                       <a
                         href="/path/to/your/itinerary.pdf" // Replace with actual PDF link
                         download
                         className="inline-flex items-center justify-center px-6 py-2 border border-green-600 rounded-lg text-sm font-medium text-green-700 bg-white hover:bg-green-50 transition"
                       >
                         <FaDownload className="mr-2 h-4 w-4" />
                         Download Itinerary
                       </a>
                    </div>
                  </div>
                )}

                {/* Inclusion/Exclusion Content */}
                {activeTab === 'inclusion' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h2 className="text-xl font-bold text-gray-800 mb-3 pb-2 border-b border-gray-200">Inclusion</h2>
                      <ul className="space-y-2 text-sm text-gray-600 list-disc pl-5">
                        {tripData.inclusions.map((item, index) => (
                          <li key={`inc-${index}`}>{item}</li>
                        ))}
                      </ul>
                    </div>
                     <div>
                      <h2 className="text-xl font-bold text-gray-800 mb-3 pb-2 border-b border-gray-200">Exclusion</h2>
                      <ul className="space-y-2 text-sm text-gray-600 list-disc pl-5">
                         {tripData.exclusions.map((item, index) => (
                          <li key={`exc-${index}`}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                 {/* Dates & Costing Content */}
                {activeTab === 'dates' && (
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Dates & Costing</h2>
                    <p className="text-sm text-gray-600">{tripData.datesAndCostingInfo}</p>
                    {/* Add actual dates table or costing details here */}
                  </div>
                )}
              </div>
            </section>

          </div>

          {/* --- Sidebar --- */}
          <aside className="w-full lg:w-1/3 xl:w-1/4">
             {/* Sticky container for Price and Form */}
             <div className="sticky top-6 space-y-6">

                {/* Starting Price */}
                <div className="bg-white p-4 rounded-lg shadow text-center">
                    <p className="text-sm text-gray-600 mb-1">Starting From</p>
                    <p className="text-2xl font-bold text-green-700 flex items-center justify-center">
                       <FaRupeeSign className="mr-1" /> {tripData.startingPrice.toLocaleString('en-IN')} /-
                    </p>
                </div>

                {/* Reach Out Form */}
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Reach out to us</h2>
                    <form onSubmit={handleGetQuote} className="space-y-4">
                       <div>
                          {/* <label htmlFor="name" className="sr-only">Name</label> */}
                          <input
                             type="text"
                             name="name"
                             id="name"
                             value={formData.name}
                             onChange={handleInputChange}
                             placeholder="Name"
                             required
                             className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent"
                           />
                       </div>
                        <div>
                          {/* <label htmlFor="phone" className="sr-only">Phone Number</label> */}
                          <input
                             type="tel"
                             name="phone"
                             id="phone"
                             value={formData.phone}
                             onChange={handleInputChange}
                             placeholder="Phone Number"
                             required
                              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent"
                           />
                       </div>
                       <div>
                          {/* <label htmlFor="email" className="sr-only">Email ID</label> */}
                          <input
                             type="email"
                             name="email"
                             id="email"
                             value={formData.email}
                             onChange={handleInputChange}
                             placeholder="Email ID"
                             required
                             className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent"
                           />
                       </div>
                        <div>
                          {/* <label htmlFor="destination" className="sr-only">Destination</label> */}
                          <input
                             type="text"
                             name="destination"
                             id="destination"
                             value={formData.destination}
                             onChange={handleInputChange}
                             placeholder="Destination"
                             required
                             className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent"
                           />
                       </div>
                       <button
                         type="submit"
                         className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 px-4 rounded-lg transition duration-300"
                       >
                         Get Quote
                       </button>
                    </form>
                    <div className="flex gap-3 mt-4">
                         <a
                           href="https://wa.me/YOUR_NUMBER" // Replace with your WhatsApp number link
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-green-600 rounded-lg text-sm font-medium text-green-700 bg-white hover:bg-green-50 transition"
                         >
                           <FaWhatsapp className="mr-2 h-4 w-4" /> Whatsapp
                         </a>
                          <a
                           href="tel:YOUR_NUMBER" // Replace with your phone number
                           className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition"
                         >
                           <FaPhoneAlt className="mr-2 h-4 w-4" /> Call Now
                         </a>
                    </div>
                </div>

                {/* Price / Book Now Buttons */}
                 <div className="flex gap-3">
                     <button
                         // onClick={handlePriceClick} // Add handler if needed
                         className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-gray-400 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 transition"
                      >
                        Price
                      </button>
                      <button
                         // onClick={handleBookNowClick} // Add handler if needed
                          className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-green-600 hover:bg-green-700 transition"
                       >
                         <FaPlane className="mr-2 h-4 w-4 transform -rotate-45" /> Book Now
                       </button>
                 </div>

             </div>
          </aside>

        </div>
      </main>

      <Footer />
       {/* Add fixed WhatsApp button if needed, might be redundant if already in Footer */}
       {/* <a href="..." className="fixed bottom-5 right-5 ..."> <FaWhatsapp size={24} /> </a> */}
    </div>
  );
};

export default TripDetailsPage;