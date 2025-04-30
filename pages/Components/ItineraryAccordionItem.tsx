import React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface ItineraryAccordionItemProps {
  dayTitle: string;
  details: string; // Content to show when expanded
  isOpen: boolean;
  onToggle: () => void;
}

const ItineraryAccordionItem: React.FC<ItineraryAccordionItemProps> = ({
  dayTitle,
  details,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="border border-gray-200 rounded-lg mb-2 overflow-hidden">
      {/* Header Button */}
      <button
        onClick={onToggle}
        className={`w-full flex justify-between items-center p-3 text-left text-sm font-semibold ${
          isOpen ? 'bg-gray-100 text-green-700' : 'bg-white text-gray-700 hover:bg-gray-50'
        } transition-colors focus:outline-none focus:ring-2 focus:ring-green-300`}
        aria-expanded={isOpen}
      >
        <span>{dayTitle}</span>
        {isOpen ? <FaChevronUp className="h-4 w-4 text-green-600" /> : <FaChevronDown className="h-4 w-4 text-gray-500" />}
      </button>

      {/* Content (Collapsible) */}
      {/* Basic transition - can be enhanced with libraries like framer-motion */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`} // Adjust max-h as needed
      >
        <div className="p-4 text-xs text-gray-600 bg-white border-t border-gray-200">
          {details ? details : <p>Details for {dayTitle} will be shown here.</p>}
        </div>
      </div>
    </div>
  );
};

export default ItineraryAccordionItem;