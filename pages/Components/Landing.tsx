import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Landing = () => {
  const phrases = [
    "I Came, I Saw, I Captured",
    "Exploring the unexplored",
    "Challenging the unchallenged",
    "Bonding with people",
    "Creating Memories"
  ];
  
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        setAnimate(false);
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full flex flex-col justify-center items-center text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image 
          src="/landing2.jpg" 
          width={100}
          height={100}
          alt="Travel background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Connecting Travelers Since 2016
        </h1>
        
        <div className="h-12 flex items-center justify-center overflow-hidden">
          <div className={`transition-all duration-1000 transform ${
            animate ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
          }`}>
            <p className="text-xl md:text-2xl font-medium">
              {phrases[currentPhrase]}
            </p>
          </div>
        </div>
        
        <div className="relative max-w-md mx-auto w-full mt-1">
          <input 
            type="text" 
            placeholder="Search trips..." 
            className="w-full py-2 px-4 rounded-b-xl bg-white bg-opacity-90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-lg"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-1.5 rounded-full hover:bg-green-700 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;