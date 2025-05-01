import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import Curated from "./Components/Curated";
import AdSlider from "./Components/AdSlider";
import Footer from "./Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
    <Navbar/>
    <Landing/>
    <Curated/>
    {/* <AdSlider/> */}
    <Footer/>
    </>
  );
}

// import React from 'react'
// import { Sparkles } from 'lucide-react'

// const Index = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white relative overflow-hidden">
//       {/* Crackers - left */}
//       <div className="absolute top-10 left-10 animate-bounce">
//         <Sparkles size={40} />
//       </div>
//       {/* Crackers - right */}
//       <div className="absolute bottom-10 right-10 animate-bounce delay-200">
//         <Sparkles size={40} />
//       </div>

//       {/* Main content */}
//       <h1 className="text-7xl md:text-9xl font-extrabold drop-shadow-lg text-center">
//         Coming Soon...
//       </h1>
//     </div>
//   )
// }

// export default Index
